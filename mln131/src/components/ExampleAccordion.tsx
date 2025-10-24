import React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const aiApplications = [
  {
    title: "Tóm tắt nhanh học phần MLN131 – Chủ nghĩa xã hội khoa học",
    content:
      "AI giúp sinh viên nắm tổng quan toàn học phần MLN131 – một trong ba bộ phận của chủ nghĩa Marx–Lenin, nghiên cứu quy luật hình thành, phát triển của hình thái kinh tế – xã hội cộng sản chủ nghĩa. Hệ thống có thể tự tạo bản tóm lược lý thuyết trọng tâm: giai cấp công nhân, cách mạng xã hội chủ nghĩa, vai trò nhà nước, dân chủ XHCN, và sứ mệnh lịch sử của giai cấp công nhân.",
  },
  {
    title: "Chatbot hỏi–đáp giáo trình Dân chủ Xã hội Chủ nghĩa",
    content:
      "Tích hợp nội dung từ tài liệu *MLN131.docx – Dân chủ XHCN tại Việt Nam: Từ lý luận đến thực tiễn*. Chatbot giải thích các khái niệm như **dân là gốc**, **dân làm chủ**, **dân chủ đại diện**, **dân chủ trực tiếp**, **pháp quyền**, và **kỷ luật – kỷ cương**, đồng thời có thể phản hồi bằng giọng nói để tăng tính tương tác học tập.",
  },
  {
    title: "Sinh bộ câu hỏi trắc nghiệm và quiz tự động",
    content:
      "AI dựa theo đề cương môn MLN131 và phần Dân chủ XHCN để sinh bộ 15–20 câu hỏi trắc nghiệm bao quát nội dung: lịch sử dân chủ, đặc trưng bản chất, hình thức thực hành và liên hệ thực tiễn. Mỗi câu hỏi đi kèm giải thích, dẫn chiếu phần nội dung trong giáo trình, giúp sinh viên tự đánh giá mức độ hiểu bài.",
  },
  {
    title: "Phân tích lý luận và liên hệ thực tiễn Việt Nam",
    content:
      "AI gợi ý các ví dụ về **dân chủ gắn pháp luật** và **nhà nước pháp quyền XHCN**: phòng chống tham nhũng, lấy ý kiến nhân dân về Luật Đất đai, quy chế dân chủ ở cơ sở, chuyển đổi số và cổng dịch vụ công. Qua đó, sinh viên hiểu rõ cách vận dụng chủ nghĩa xã hội khoa học vào thực tiễn đổi mới đất nước.",
  },
  {
    title: "Tạo bản đồ khái niệm (Mind Map) tư tưởng xã hội chủ nghĩa",
    content:
      "AI có thể trực quan hóa mối quan hệ giữa các luận điểm: từ **mục tiêu độc lập dân tộc gắn CNXH** đến **phương thức thực hiện qua dân chủ, nhà nước pháp quyền, và vai trò giai cấp công nhân**. Mind map giúp người học hình dung logic giữa lý luận – thực tiễn.",
  },
  {
    title: "Cá nhân hóa lộ trình học & ôn tập MLN131",
    content:
      "AI theo dõi tiến độ học 100 giờ (bao gồm 22.5 giờ trên lớp và 76.5 giờ tự học) để đề xuất bài ôn tập phù hợp. Sinh viên có thể chọn chủ đề (ví dụ: 'Nhà nước pháp quyền', 'Dân chủ XHCN', 'Sứ mệnh giai cấp công nhân') để hệ thống tự sinh flashcard, quiz và câu hỏi phản biện tương ứng.",
  },
];

const ExampleAccordion: React.FC = () => {
  return (
    <section className="relative z-10 w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-white via-blue-50/70 to-white">
      {/* Tiêu đề */}
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-[#2a2e6e] mb-3 text-center drop-shadow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Ứng dụng AI trong học phần MLN131 – Chủ nghĩa xã hội khoa học
      </motion.h2>

      <motion.p
        className="text-sm md:text-base text-gray-600 mb-8 text-center italic"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        *Tăng cường tự học, tương tác và hiểu sâu lý luận – thực tiễn qua công nghệ AI.*
      </motion.p>

      {/* Accordion */}
      <Accordion.Root
        type="single"
        collapsible
        className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl bg-white/90 divide-y divide-blue-100 backdrop-blur-sm"
      >
        {aiApplications.map((item, i) => (
          <Accordion.Item
            key={i}
            value={`item-${i}`}
            className="overflow-hidden rounded-2xl mb-3 border border-blue-100 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Accordion.Header asChild>
              <Accordion.Trigger asChild>
                <motion.button
                  className="flex w-full items-center justify-between px-6 py-5 text-lg font-semibold text-[#2a2e6e] bg-white group outline-none transition-all duration-200 hover:bg-blue-50 focus:bg-blue-100 rounded-2xl"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="w-6 h-6 text-blue-500 transition-transform group-data-[state=open]:rotate-180" />
                </motion.button>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild>
              <motion.div
                className="px-6 pb-6 text-base text-gray-700 bg-blue-50/70 rounded-b-2xl border-t border-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {item.content}
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default ExampleAccordion;
