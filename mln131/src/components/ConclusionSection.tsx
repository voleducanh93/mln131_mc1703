import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

const ConclusionSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="ket-luan"
      className="w-full bg-gradient-to-b from-white via-purple-50/70 to-white rounded-3xl shadow-2xl border-4 border-purple-200/70 p-6 md:p-12 my-16 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[#2a2e6e] mb-8 drop-shadow"
        variants={itemVariants}
      >
        <FaLightbulb className="inline-block text-purple-600 mr-3" />
        Kết luận tổng hợp
      </motion.h2>

      <motion.ul
        className="space-y-5 text-lg md:text-xl font-medium text-gray-800 max-w-4xl mx-auto leading-relaxed"
        variants={containerVariants}
      >
        <motion.li variants={itemVariants}>
          <b>Độc lập dân tộc gắn liền với Chủ nghĩa xã hội</b> là mục tiêu chiến lược
          xuyên suốt trong tư tưởng Hồ Chí Minh, vừa là lý tưởng, vừa là con đường phát triển của dân tộc.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Dân là gốc</b> — mọi chủ trương, chính sách phải xuất phát từ lợi ích và nguyện vọng của Nhân dân:
          “<i>Việc gì có lợi cho dân thì hết sức làm, việc gì có hại cho dân thì hết sức tránh</i>”.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Đảng Cộng sản Việt Nam</b> là lực lượng lãnh đạo duy nhất, bảo đảm định hướng đúng đắn;
          cần thường xuyên <b>xây dựng, chỉnh đốn Đảng</b> trong sạch, vững mạnh, gắn bó với Nhân dân.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Nhà nước pháp quyền xã hội chủ nghĩa</b> là <b>“Nhà nước của dân, do dân, vì dân”</b>,
          lấy Hiến pháp và pháp luật làm nền tảng để thực hiện quyền làm chủ của Nhân dân.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Đạo đức cách mạng</b> — cần, kiệm, liêm, chính, chí công vô tư — là gốc của người cán bộ;
          phải kiên quyết đấu tranh chống <b>“giặc nội xâm”</b>: tham ô, lãng phí, quan liêu.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Đại đoàn kết toàn dân tộc</b> là chiến lược lâu dài, nguồn sức mạnh to lớn quyết định mọi thắng lợi của cách mạng Việt Nam.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Học đi đôi với hành</b>, lý luận gắn với thực tiễn; phát huy dân chủ, đổi mới sáng tạo
          vì mục tiêu <b>“Dân giàu, nước mạnh, dân chủ, công bằng, văn minh”</b>.
        </motion.li>
      </motion.ul>

      {/* Thông điệp tổng kết */}
      <motion.div
        className="mt-10 bg-purple-100/70 border border-purple-300 rounded-2xl shadow-md p-6 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <p className="text-base md:text-lg text-[#2a2e6e] font-medium leading-relaxed italic">
          “Tư tưởng Hồ Chí Minh không chỉ là di sản quý báu của dân tộc Việt Nam,
          mà còn là kim chỉ nam soi đường cho thế hệ trẻ hôm nay –  
          trong học tập, rèn luyện và cống hiến vì Tổ quốc.”
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ConclusionSection;
