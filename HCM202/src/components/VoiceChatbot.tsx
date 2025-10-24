import { useState, useRef } from "react";
import { GeminiClient } from "../services/GeminiClient";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

// ⚠️ Khuyến nghị: nên dùng biến môi trường để lưu API key
const gemini = new GeminiClient("AIzaSyBOyExUS1i0kvI7jhV7MuYl1na1nLI4wNg");

const VoiceChatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [speaking, setSpeaking] = useState(false);
  const [tab, setTab] = useState<"text" | "voice">("text");
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState<string | null>(null);
  const [copyText, setCopyText] = useState<string>("Copy");
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Dừng nói nếu đang phát khi đổi tab
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

  // Hàm nói
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

  // ========= PROMPT CẬP NHẬT CHO BÀI DÂN CHỦ XHCN =========
  const baseGuidelines = `
Bạn là **trợ lý học tập** cho sinh viên môn *Tư tưởng Hồ Chí Minh*, chuyên hỗ trợ bài học: 
### “Dân chủ xã hội chủ nghĩa và Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam”.
Cơ sở chính: **Giáo trình Tư tưởng Hồ Chí Minh (NXB Chính trị quốc gia, 2019)**, Phần III – Chương 4.

Nguyên tắc trả lời:
- Trả lời **bằng tiếng Việt**, rõ ràng, dễ hiểu, không lan man.
- Dùng **Markdown** trình bày gọn gàng, có tiêu đề nhỏ, gạch đầu dòng khi cần.
- Nếu câu hỏi nằm ngoài phạm vi bài “Dân chủ XHCN”, hãy nói ngắn: “Nội dung này nằm ngoài phạm vi bài học hiện tại.”
- Không bịa đặt, không trích dẫn sai.
- Khi có thể, nêu rõ **Mục** trong chương 4, ví dụ: “(Xem Chương 4, Mục 2.2 – Giáo trình Tư tưởng Hồ Chí Minh, 2019)”.
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
- Chương 4, phần Dân chủ XHCN – Nhà nước pháp quyền.
`;

  const voiceModeInstruction = `
Trả lời ngắn gọn, tự nhiên, thân thiện, như đang trò chuyện với sinh viên.
Giới hạn khoảng 100–150 từ, có thể thêm 1 ví dụ thực tế gần gũi (như “ở địa phương”, “trong trường học”, “trên cổng dịch vụ công”...).
Không nói tắt. Giữ tính chính xác học thuật.
In đậm các từ khóa quan trọng như **dân chủ**, **pháp quyền**, **nhân dân**, **làm chủ**.
Kết thúc bằng một câu khích lệ học tập ngắn, ví dụ: “Chúng ta cùng học để hiểu rõ hơn nền dân chủ của nhân dân nhé!”
`;

  // ========= GỬI CÂU HỎI =========
  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setLoading(true);

    try {
      let prompt = baseGuidelines;

      if (tab === "text") {
        prompt += `
${textModeInstruction}

**Câu hỏi của sinh viên**:
${input}
`;
      } else {
        prompt += `
${voiceModeInstruction}

**Câu hỏi của sinh viên**:
${input}
`;
      }

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
          Trợ lý học tập dành cho bài <b>Dân chủ XHCN và Nhà nước pháp quyền XHCN</b>.<br />
          Giúp ôn tập, giải thích lý thuyết và liên hệ thực tiễn dễ hiểu.
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 justify-center">
          <button
            className={`px-6 py-2 rounded-lg border font-semibold text-lg transition-all duration-200 ${
              tab === "text"
                ? "bg-blue-500 text-white shadow"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleTabChange("text")}
            disabled={loading}
          >
            Trả lời văn bản
          </button>
          <button
            className={`px-6 py-2 rounded-lg border font-semibold text-lg transition-all duration-200 ${
              tab === "voice"
                ? "bg-blue-500 text-white shadow"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-50"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleTabChange("voice")}
            disabled={loading}
          >
            Trả lời giọng nói
          </button>
        </div>

        {/* Khung hội thoại */}
        <div className="flex-1 min-h-[180px] max-h-[500px] overflow-y-auto flex flex-col gap-3 mb-6">
          {tab === "text" ? (
            <>
              {messages.length === 0 && (
                <div className="text-gray-500 text-center mt-12 text-base select-none">
                  Hãy hỏi bất kỳ điều gì về **Dân chủ Xã hội Chủ nghĩa**!
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

        {/* Ô nhập và nút gửi */}
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
