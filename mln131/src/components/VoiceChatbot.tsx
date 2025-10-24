import { useState, useRef } from "react";
import { GeminiClient } from "../services/GeminiClient";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

// ⚠️ Khuyến nghị: nên dùng biến môi trường để lưu API key
const gemini = new GeminiClient("AIzaSyBOyExUS1i0kvI7jhV7MuYl1na1nLI4wNg");

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

const VoiceChatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [speaking, setSpeaking] = useState(false);
  const [tab, setTab] = useState<"text" | "voice">("text");
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState<string | null>(null);
  const [copyText, setCopyText] = useState<string>("Copy");
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Dừng nói khi chuyển tab hoặc đang phát
  const handleTabChange = (newTab: "text" | "voice") => {
    if (loading) return;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
    setTab(newTab);
    setInput("");
    setMessages([]);
    setLoading(false);
  };

  // Hàm đọc giọng nói
  const speak = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeaking(true);
      const utter = new window.SpeechSynthesisUtterance(text);
      utter.lang = "vi-VN";
      utter.rate = 1;
      utter.onend = () => setSpeaking(false);
      utter.onerror = () => setSpeaking(false);
      utterRef.current = utter;
      window.speechSynthesis.speak(utter);
    }
  };

  // ========= PROMPT CHUẨN HÓA THEO FILE MLN131.docx =========
  const baseGuidelines = `
Bạn là **trợ lý học tập** cho sinh viên học phần *MLN131 – Chủ nghĩa xã hội khoa học*,
hỗ trợ chương: **“Dân chủ xã hội chủ nghĩa tại Việt Nam: Từ lý luận đến thực tiễn.”**

Tài liệu cơ sở: **Giáo trình MLN131 (Phương Nguyên & Quỳnh Quỳnh, 2025)** gồm các nội dung:
1. **Bản chất cốt lõi:** “Dân là gốc, dân làm chủ” – quyền lực thuộc về nhân dân, dân chủ gắn với pháp luật, toàn diện trong kinh tế, chính trị, xã hội.  
2. **Lịch sử hình thành:** Từ dân chủ nhân dân sau Cách mạng Tháng Tám 1945 đến dân chủ xã hội chủ nghĩa sau thống nhất 1976.  
3. **Cách thức thực hành:** Dân chủ đại diện (Quốc hội, HĐND) và dân chủ trực tiếp (người dân tham gia bàn, giám sát, phản biện qua quy chế dân chủ cơ sở, chuyển đổi số, Cổng DVC quốc gia...).  
4. **Kết luận:** Dân chủ XHCN là thành quả của cách mạng, phải gắn mở rộng dân chủ với tăng cường pháp chế, kỷ luật, trách nhiệm công dân.  

Nguyên tắc trả lời:
- Dùng **tiếng Việt**, rõ ràng, có trọng tâm.  
- Trình bày bằng **Markdown** với tiêu đề, gạch đầu dòng, ví dụ thực tiễn.  
- Nếu câu hỏi nằm ngoài chủ đề Dân chủ XHCN, hãy nói ngắn: “Nội dung này nằm ngoài phạm vi bài học hiện tại.”  
- Khi có thể, nêu rõ phần trong giáo trình, ví dụ: “(Xem Mục 3 – Dân chủ được thực hành như thế nào, MLN131.docx)”.  
- Không bịa đặt, không trích dẫn sai.  
`;

  const textModeInstruction = `
Trình bày có cấu trúc như sau:
### Tóm lược nhanh
- …

### Nội dung chính
1) …
2) …

### Liên hệ hoặc ví dụ
- …

### Tham chiếu giáo trình
- Mục tương ứng trong MLN131.docx.
`;

  const voiceModeInstruction = `
Trả lời ngắn gọn, tự nhiên, thân thiện, như đang trò chuyện với sinh viên.
Giới hạn khoảng 100–150 từ, thêm ví dụ gần gũi (ở địa phương, trường học, trên Cổng DVC...).
Giữ tính chính xác học thuật, **in đậm từ khóa quan trọng** như **dân chủ**, **pháp quyền**, **nhân dân**, **làm chủ**.
Kết thúc bằng một câu khích lệ: “Chúng ta cùng học để hiểu rõ hơn nền dân chủ của nhân dân nhé!”
`;

  // ========= GỬI CÂU HỎI =========
  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    try {
      let prompt = baseGuidelines;
      prompt += tab === "text" ? textModeInstruction : voiceModeInstruction;
      prompt += `

**Câu hỏi của sinh viên:**
${input}`;

      const response = await gemini.ask(prompt);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      if (tab === "voice") speak(response);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Đã xảy ra lỗi khi kết nối API: " + err.message },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  // ========= GIAO DIỆN =========
  return (
    <>
      <motion.div
        className="w-full max-w-2xl min-h-[400px] flex flex-col bg-white/80 rounded-2xl shadow-2xl p-8 backdrop-blur border border-white/30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-1 text-gray-800 text-center">
          Chatbot AI – Dân chủ Xã hội Chủ nghĩa 🇻🇳
        </h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          Trợ lý học tập học phần <b>MLN131 – Chủ nghĩa xã hội khoa học</b>.<br />
          Giúp ôn tập, giải thích lý thuyết và liên hệ thực tiễn dễ hiểu.
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 justify-center">
          {["text", "voice"].map((t) => (
            <button
              key={t}
              className={`px-6 py-2 rounded-lg border font-semibold text-lg transition-all duration-200 ${
                tab === t
                  ? "bg-blue-500 text-white shadow"
                  : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
              } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => handleTabChange(t as "text" | "voice")}
              disabled={loading}
            >
              {t === "text" ? "Trả lời văn bản" : "Trả lời giọng nói"}
            </button>
          ))}
        </div>

        {/* Khung hội thoại */}
        <div className="flex-1 min-h-[180px] max-h-[500px] overflow-y-auto flex flex-col gap-3 mb-6">
          {tab === "text" ? (
            <>
              {messages.length === 0 && (
                <div className="text-gray-500 text-center mt-12 text-base select-none">
                  Hãy hỏi bất kỳ điều gì về <b>Dân chủ Xã hội Chủ nghĩa</b>!
                </div>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "bot" && (
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                      🤖
                    </span>
                  )}
                  <motion.div
                    className={`max-w-[85%] px-5 py-3 rounded-2xl text-base leading-relaxed shadow-sm cursor-pointer ${
                      msg.role === "user"
                        ? "bg-blue-500 text-white self-end rounded-br-none"
                        : "bg-white text-gray-900 self-start border border-gray-200 rounded-bl-none"
                    }`}
                    initial={{ opacity: 0, x: msg.role === "user" ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => msg.role === "bot" && setModalText(msg.text)}
                  >
                    {msg.role === "user" ? (
                      msg.text
                    ) : (
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    )}
                  </motion.div>
                  {msg.role === "user" && (
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
                      👤
                    </span>
                  )}
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[180px]">
              {speaking ? (
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <span className="text-6xl mb-2 animate-pulse text-blue-500">
                    🔊
                  </span>
                  <span className="text-lg text-blue-600 font-semibold mb-4">
                    Đang phát giọng nói...
                  </span>
                  <button
                    className="px-6 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
                    onClick={() => {
                      window.speechSynthesis.cancel();
                      setSpeaking(false);
                    }}
                  >
                    Dừng nói
                  </button>
                </div>
              ) : (
                <span className="text-gray-400 text-base select-none">
                  Hỏi chatbot để nghe câu trả lời bằng giọng nói 🎧
                </span>
              )}
            </div>
          )}
        </div>

        {/* Ô nhập */}
        <div className="flex items-center gap-3 mt-auto">
          <input
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-base"
            placeholder="Nhập câu hỏi về Dân chủ XHCN..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
          />
          <button
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white shadow disabled:opacity-60"
            onClick={handleSend}
            disabled={loading || !input.trim()}
          >
            {loading ? (
              <span className="w-5 h-5 animate-spin border-2 border-white border-t-transparent rounded-full inline-block"></span>
            ) : (
              <span>➤</span>
            )}
          </button>
        </div>
      </motion.div>

      {/* Modal hiển thị chi tiết */}
      <AnimatePresence>
        {modalText && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalText(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b pb-3 mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Giải thích chi tiết</h2>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-sm rounded-lg bg-gray-100 hover:bg-gray-200"
                    onClick={() => {
                      navigator.clipboard.writeText(modalText);
                      setCopyText("Copied!");
                      setTimeout(() => setCopyText("Copy"), 2000);
                    }}
                  >
                    {copyText}
                  </button>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setModalText(null)}
                  >
                    ✖
                  </button>
                </div>
              </div>
              <div className="prose prose-lg max-w-none leading-relaxed text-gray-700">
                <ReactMarkdown>{modalText}</ReactMarkdown>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceChatbot;
