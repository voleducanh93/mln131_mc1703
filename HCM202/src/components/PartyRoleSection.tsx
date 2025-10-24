import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCogs, FaSitemap, FaHandshake, FaUsers } from "react-icons/fa";

const PartyRoleSection: React.FC = () => {
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
      id="vai-tro-dang"
      className="w-full bg-gradient-to-b from-white via-red-50/60 to-white rounded-3xl shadow-2xl border-4 border-red-200/70 p-6 md:p-12 my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[#2a2e6e] text-center mb-10"
        variants={itemVariants}
      >
        <FaStar className="inline-block text-red-600 mr-3" />
        Vai trò lãnh đạo của Đảng Cộng sản Việt Nam
      </motion.h2>

      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
      >
        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaSitemap className="mr-3 text-2xl" />
            Nhân tố lãnh đạo quyết định
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đảng Cộng sản Việt Nam là lực lượng chính trị duy nhất lãnh đạo Nhà nước và xã hội,
            bảo đảm định hướng xã hội chủ nghĩa cho toàn bộ sự nghiệp cách mạng Việt Nam.
          </p>
        </motion.li>

        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaCogs className="mr-3 text-2xl" />
            Xây dựng và Chỉnh đốn Đảng
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đảng phải thường xuyên tự đổi mới, tự chỉnh đốn; nâng cao năng lực lãnh đạo, sức chiến đấu,
            giữ vững đạo đức cách mạng, chống quan liêu, tham nhũng, giữ Đảng thật sự trong sạch, vững mạnh.
          </p>
        </motion.li>

        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaHandshake className="mr-3 text-2xl" />
            Đổi mới phương thức lãnh đạo
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đảng lãnh đạo bằng Cương lĩnh, chủ trương, đường lối; tôn trọng nguyên tắc pháp quyền,
            không bao biện làm thay Nhà nước; phát huy vai trò của Mặt trận Tổ quốc và các đoàn thể chính trị – xã hội.
          </p>
        </motion.li>

        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaUsers className="mr-3 text-2xl" />
            Gắn bó mật thiết với Nhân dân
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đảng là “đầy tớ trung thành của Nhân dân”, phải giữ mối quan hệ máu thịt với dân,
            lắng nghe, tôn trọng và dựa vào Nhân dân để xây dựng, bảo vệ Tổ quốc và củng cố niềm tin của dân với Đảng.
          </p>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default PartyRoleSection;
