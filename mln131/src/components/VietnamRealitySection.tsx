import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaBalanceScale,
  FaChartLine,
  FaCheckCircle,
  FaStar,
  FaUsers,
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
      {/* Tiêu đề */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[#2a2e6e] text-center mb-10"
        variants={itemVariants}
      >
        <FaGlobeAsia className="inline-block text-yellow-600 mr-3" />
        Liên hệ Thực tiễn Việt Nam
      </motion.h2>

      {/* Giới thiệu */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-4xl mx-auto leading-relaxed"
        variants={itemVariants}
      >
        Những chủ trương, chính sách và hành động thực tiễn ở Việt Nam hiện nay
        thể hiện rõ quá trình hiện thực hóa <b>dân chủ xã hội chủ nghĩa</b> và
        <b> Nhà nước pháp quyền XHCN</b> — nơi <b>Nhân dân là chủ thể của quyền lực</b>,
        pháp luật giữ vị trí tối thượng, và mọi cơ quan đều hướng tới phục vụ Nhân dân.
      </motion.p>

      {/* Danh sách minh họa thực tiễn */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
      >
        {/* 1. Hiến pháp 2013 */}
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaBalanceScale className="mr-3 text-2xl" />
            Hiến pháp năm 2013
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hiến pháp 2013 khẳng định: <b>“Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam là Nhà nước pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân.”</b>{" "}
            Đây là bước phát triển quan trọng thể chế hóa tư tưởng Hồ Chí Minh về quyền làm chủ của Nhân dân.
          </p>
        </motion.li>

        {/* 2. Cải cách hành chính & chuyển đổi số */}
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaChartLine className="mr-3 text-2xl" />
            Cải cách hành chính & chuyển đổi số
          </div>
          <p className="text-gray-700 leading-relaxed">
            Việt Nam đẩy mạnh <b>Chính phủ điện tử, Cổng Dịch vụ công quốc gia, VNeID</b>,
            giúp người dân trực tiếp tham gia giám sát và phản hồi chính sách,
            mở rộng không gian dân chủ theo hướng hiện đại, minh bạch và hiệu quả.
          </p>
        </motion.li>

        {/* 3. Phòng, chống tham nhũng và tiêu cực */}
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaCheckCircle className="mr-3 text-2xl" />
            Phòng, chống tham nhũng
          </div>
          <p className="text-gray-700 leading-relaxed">
            Thực hiện <b>Luật Phòng, chống tham nhũng 2018</b> và chiến lược “không có vùng cấm”,
            Đảng và Nhà nước kiên quyết đấu tranh với <b>“giặc nội xâm”</b>,
            làm trong sạch bộ máy, củng cố lòng tin của Nhân dân vào hệ thống chính trị.
          </p>
        </motion.li>

        {/* 4. Xây dựng, chỉnh đốn Đảng */}
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaStar className="mr-3 text-2xl" />
            Xây dựng Đảng trong sạch, vững mạnh
          </div>
          <p className="text-gray-700 leading-relaxed">
            <b>Đại hội XIII của Đảng</b> xác định nhiệm vụ then chốt là tăng cường xây dựng, chỉnh đốn Đảng;
            nâng cao đạo đức, bản lĩnh chính trị, năng lực lãnh đạo và gắn bó mật thiết với Nhân dân —
            coi đây là điều kiện tiên quyết của dân chủ XHCN.
          </p>
        </motion.li>

        {/* 5. Chính sách an sinh và công bằng xã hội */}
        <motion.li
          className="bg-yellow-50 p-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-xl transition-transform hover:-translate-y-1 md:col-span-2"
          variants={itemVariants}
        >
          <div className="flex items-center text-yellow-800 text-xl font-bold mb-3">
            <FaUsers className="mr-3 text-2xl" />
            An sinh xã hội & phát triển bền vững
          </div>
          <p className="text-gray-700 leading-relaxed">
            Các chương trình giảm nghèo bền vững, chăm lo phúc lợi xã hội và phát triển con người
            thể hiện rõ định hướng <b>“dân là gốc, dân được thụ hưởng thành quả phát triển”</b>,
            góp phần thực hiện mục tiêu <b>“dân giàu, nước mạnh, dân chủ, công bằng, văn minh”</b>.
          </p>
        </motion.li>
      </motion.ul>

      {/* Kết luận ngắn */}
      <motion.div
        className="mt-12 bg-yellow-100/70 border border-yellow-300 rounded-2xl shadow-md p-6 max-w-3xl mx-auto text-center"
        variants={itemVariants}
      >
        <p className="text-base md:text-lg text-[#2a2e6e] font-medium italic leading-relaxed">
          “Thực tiễn Việt Nam cho thấy, việc mở rộng dân chủ gắn liền với tăng cường pháp chế,
          xây dựng Nhà nước pháp quyền và chỉnh đốn Đảng chính là con đường hiện thực hóa
          lý tưởng của chủ nghĩa xã hội khoa học trong thời kỳ mới.”
        </p>
      </motion.div>
    </motion.section>
  );
};

export default VietnamRealitySection;
