import React from "react";
import { motion } from "framer-motion";
import {
  FaVoteYea,
  FaBalanceScale,
  FaUniversity,
  FaBuilding,
  FaUsers,
  FaFlag,
} from "react-icons/fa";

const DemocracySection: React.FC = () => {
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
      id="dan-chu-xhcn"
      className="w-full bg-gradient-to-b from-white via-green-50/60 to-white rounded-3xl shadow-2xl border-4 border-green-200/70 p-6 md:p-12 my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Tiêu đề */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[#2a2e6e] mb-8 text-center drop-shadow"
        variants={itemVariants}
      >
        <FaVoteYea className="inline-block text-green-600 mr-3" />
        Dân chủ xã hội chủ nghĩa tại Việt Nam
      </motion.h2>

      {/* Giới thiệu */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed"
        variants={itemVariants}
      >
        <b>Dân chủ xã hội chủ nghĩa (XHCN)</b> là bản chất của chế độ XHCN ở Việt Nam —
        <b> quyền lực thuộc về Nhân dân</b>, do Nhân dân thực hiện và vì lợi ích của Nhân dân.
        Đây vừa là mục tiêu, vừa là động lực phát triển đất nước trong thời kỳ đổi mới.
      </motion.p>

      {/* Nội dung chính */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {/* 1. Bản chất và nền tảng */}
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaBalanceScale className="mr-3 text-2xl" /> Bản chất & Nền tảng
          </div>
          <p className="text-gray-700 leading-relaxed">
            Dân chủ XHCN gắn liền với <b>pháp luật, kỷ luật và kỷ cương</b>;
            quyền dân chủ phải được thể chế hóa bằng Hiến pháp và pháp luật, được pháp luật bảo đảm thực thi.
          </p>
        </motion.li>

        {/* 2. Lịch sử hình thành */}
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaUniversity className="mr-3 text-2xl" /> Lịch sử hình thành
          </div>
          <p className="text-gray-700 leading-relaxed">
            Từ <b>dân chủ nhân dân</b> sau Cách mạng Tháng Tám năm 1945
            đến <b>dân chủ xã hội chủ nghĩa</b> sau năm 1976 khi đất nước thống nhất —
            thể hiện bước phát triển về nhận thức và thể chế của chế độ mới.
          </p>
        </motion.li>

        {/* 3. Chính trị */}
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaBuilding className="mr-3 text-2xl" /> Chính trị
          </div>
          <p className="text-gray-700 leading-relaxed">
            Nhân dân thực hiện quyền làm chủ thông qua <b>bầu cử, ứng cử</b>,
            <b> giám sát cơ quan nhà nước</b> và <b>phản biện xã hội</b>;
            Quốc hội và HĐND là cơ quan đại diện cao nhất của Nhân dân.
          </p>
        </motion.li>

        {/* 4. Kinh tế */}
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaBalanceScale className="mr-3 text-2xl" /> Kinh tế
          </div>
          <p className="text-gray-700 leading-relaxed">
            Bảo đảm <b>quyền tự do kinh doanh hợp pháp</b>, gắn dân chủ với <b>công bằng xã hội</b>;
            Nhà nước điều tiết kinh tế bằng chính sách, thuế và an sinh xã hội để hạn chế phân hóa giàu nghèo.
          </p>
        </motion.li>

        {/* 5. Hình thức thực hiện */}
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaUsers className="mr-3 text-2xl" /> Hình thức thực hiện
          </div>
          <p className="text-gray-700 leading-relaxed">
            Kết hợp <b>dân chủ đại diện</b> (qua cơ quan dân cử)
            và <b>dân chủ trực tiếp</b> (người dân bàn, giám sát, phản biện, quyết định ở cơ sở),
            theo phương châm <i>“Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng”</i>.
          </p>
        </motion.li>

        {/* 6. Liên hệ thực tiễn */}
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaFlag className="mr-3 text-2xl" /> Liên hệ thực tiễn
          </div>
          <p className="text-gray-700 leading-relaxed">
            Thực hiện dân chủ thông qua <b>chuyển đổi số, cổng dịch vụ công, trưng cầu ý dân</b>;
            tăng cường minh bạch, phòng chống tham nhũng và củng cố niềm tin của Nhân dân vào Nhà nước pháp quyền.
          </p>
        </motion.li>

        {/* 7. Tư tưởng Hồ Chí Minh */}
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaVoteYea className="mr-3 text-2xl" /> Tư tưởng Hồ Chí Minh
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hồ Chí Minh khẳng định: <i>“Dân chủ là để dân mở miệng”</i> —
            thể hiện tinh thần <b>lấy dân làm gốc</b>, phát huy quyền và trách nhiệm làm chủ của Nhân dân
            trong mọi lĩnh vực của đời sống xã hội.
          </p>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default DemocracySection;
