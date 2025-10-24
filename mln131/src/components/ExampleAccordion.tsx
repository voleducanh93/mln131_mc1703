import React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const aiApplications = [
  {
    title: "Sinh bộ Quiz theo đề cương học phần",
    content:
      "AI có thể tự động tạo 15–20 câu trắc nghiệm kèm gợi ý, đáp án và giải thích chi tiết, bao phủ toàn bộ chủ đề: cơ sở hình thành tư tưởng Hồ Chí Minh, độc lập dân tộc gắn liền CNXH, đại đoàn kết toàn dân tộc, xây dựng Đảng & Nhà nước, đạo đức cách mạng, và vận dụng thực tiễn hiện nay.",
  },
  {
    title: "Chatbot hỏi–đáp giáo trình & văn kiện",
    content:
      "Chatbot giúp sinh viên tra cứu nhanh khái niệm, luận điểm và trích dẫn nổi bật (như 'cần, kiệm, liêm, chính, chí công vô tư', 'giặc nội xâm'). Có thể trả lời bằng văn bản hoặc giọng nói (Text-to-Speech) để tăng tính tương tác khi tự học.",
  },
  {
    title: "Tóm tắt & bản đồ khái niệm chương mục",
    content:
      "AI hỗ trợ tóm tắt nhanh từng chương, tạo 'mind map' thể hiện mối quan hệ giữa các luận điểm — ví dụ: từ mục tiêu độc lập dân tộc gắn CNXH đến phương thức thực hiện qua đại đoàn kết, xây dựng Đảng trong sạch, Nhà nước của dân, do dân, vì dân.",
  },
  {
    title: "Phân tích đạo đức cách mạng & tự rèn luyện",
    content:
      "Tạo bảng checklist giúp sinh viên tự đánh giá theo các phẩm chất: cần – kiệm – liêm – chính – chí công vô tư; đồng thời gợi ý tình huống thực tế để rèn luyện tư duy phản biện và liên hệ bản thân.",
  },
  {
    title: "Vận dụng vào thực tiễn hiện nay",
    content:
      "AI gợi ý các tình huống học thuật và xã hội như phòng, chống tham nhũng, nêu gương cán bộ, phát huy dân chủ, đoàn kết quốc tế… giúp người học vận dụng phương pháp tư duy Hồ Chí Minh trong bối cảnh đổi mới.",
  },
  {
    title: "Cá nhân hóa lộ trình ôn tập",
    content:
      "Theo dõi kết quả làm quiz và mức độ hiểu để đề xuất flashcards, tài liệu đọc bổ sung, và phần trọng tâm từng mục (Đảng, Nhà nước pháp quyền, dân chủ XHCN) – giúp sinh viên ôn thi hiệu quả hơn.",
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
        Ứng dụng AI trong môn <br className="sm:hidden" /> Tư tưởng Hồ Chí Minh
      </motion.h2>

      <motion.p
        className="text-sm md:text-base text-gray-600 mb-8 text-center italic"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        *Tăng cường tương tác, tự học và vận dụng thực tiễn qua công nghệ AI.*
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
