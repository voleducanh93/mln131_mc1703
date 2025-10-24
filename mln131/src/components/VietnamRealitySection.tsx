import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaBalanceScale,
  FaChartLine,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const VietnamRealitySection: React.FC = () => {
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
      id="thuc-tien-vn"
      className="w-full bg-gradient-to-b from-white via-yellow-50/60 to-white rounded-3xl shadow-2xl border-4 border-yellow-200/70 p-6 md:p-12 my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[#2a2e6e] text-center mb-10"
        variants={itemVariants}
      >
        <FaGlobeAsia className="inline-block text-yellow-600 mr-3" />
        Liên hệ Thực tiễn Việt Nam
      </motion.h2>

      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
      >
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaBalanceScale className="mr-3 text-2xl" />
            Hiến pháp 2013
          </div>
          <p className="text-gray-700 leading-relaxed">
            Khẳng định rõ Nhà nước pháp quyền xã hội chủ nghĩa là <b>“của Nhân dân, do Nhân dân, vì Nhân dân”</b>,
            thể hiện tư tưởng Hồ Chí Minh về dân làm chủ, dân là gốc.
          </p>
        </motion.li>

        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaChartLine className="mr-3 text-2xl" />
            Cải cách Tư pháp & Hành chính
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đẩy mạnh <b>Chính phủ điện tử</b>, dịch vụ công trực tuyến, và cải cách thủ tục hành chính
            giúp nâng cao minh bạch, giảm phiền hà, phục vụ người dân hiệu quả hơn.
          </p>
        </motion.li>

        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaCheckCircle className="mr-3 text-2xl" />
            Phòng chống tham nhũng
          </div>
          <p className="text-gray-700 leading-relaxed">
            Luật Phòng, chống tham nhũng (2018) và nhiều chiến dịch thực tiễn đã được triển khai
            để ngăn chặn <b>“giặc nội xâm”</b> – như Hồ Chí Minh từng cảnh báo – góp phần xây dựng bộ máy trong sạch.
          </p>
        </motion.li>

        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaStar className="mr-3 text-2xl" />
            Xây dựng Đảng trong sạch, vững mạnh
          </div>
          <p className="text-gray-700 leading-relaxed">
            <b>Đại hội XIII của Đảng</b> nhấn mạnh công tác chỉnh đốn Đảng, nâng cao đạo đức, năng lực cán bộ,
            phát huy dân chủ nội bộ và gắn bó mật thiết với Nhân dân để củng cố niềm tin.
          </p>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default VietnamRealitySection;
