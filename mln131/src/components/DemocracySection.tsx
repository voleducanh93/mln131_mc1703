import React from "react";
import { motion } from "framer-motion";
import {
  FaVoteYea,
  FaBalanceScale,
  FaUniversity,
  FaBuilding,
  FaUsers,
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
        Dân chủ xã hội chủ nghĩa
      </motion.h2>

      {/* Giới thiệu */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed"
        variants={itemVariants}
      >
        Bản chất của <b>dân chủ xã hội chủ nghĩa</b> là{" "}
        <b>mọi quyền lực thuộc về Nhân dân</b>; do Nhân dân thực hiện và vì lợi ích
        của Nhân dân lao động. Đây vừa là mục tiêu, vừa là động lực phát triển của chế độ.
      </motion.p>

      {/* Nội dung chính */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaBuilding className="mr-3 text-2xl" /> Chính trị
          </div>
          <p className="text-gray-700 leading-relaxed">
            Nhân dân có quyền <b>bầu cử, ứng cử</b> và <b>tham gia quản lý Nhà nước, xã hội</b>;
            mọi quyền lực Nhà nước đều thuộc về Nhân dân.
          </p>
        </motion.li>

        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaBalanceScale className="mr-3 text-2xl" /> Kinh tế
          </div>
          <p className="text-gray-700 leading-relaxed">
            Bảo đảm <b>quyền lao động, quyền sở hữu, quyền hưởng thụ thành quả</b>;
            gắn dân chủ với <b>công bằng xã hội</b> trong phân phối.
          </p>
        </motion.li>

        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaUniversity className="mr-3 text-2xl" /> Văn hóa – Xã hội
          </div>
          <p className="text-gray-700 leading-relaxed">
            Mọi công dân có quyền <b>học tập, sáng tạo, thụ hưởng giá trị văn hóa</b>,
            được phát triển toàn diện cả về vật chất lẫn tinh thần.
          </p>
        </motion.li>

        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaUsers className="mr-3 text-2xl" /> Hình thức thực hiện
          </div>
          <p className="text-gray-700 leading-relaxed">
            Kết hợp <b>dân chủ đại diện</b> (thông qua Quốc hội, HĐND các cấp)
            với <b>dân chủ trực tiếp</b> (trưng cầu ý dân, đối thoại, góp ý của Nhân dân).
          </p>
        </motion.li>

        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaVoteYea className="mr-3 text-2xl" /> Mục tiêu hướng tới
          </div>
          <p className="text-gray-700 leading-relaxed">
            Xây dựng xã hội <b>dân giàu, nước mạnh, dân chủ, công bằng, văn minh</b>,
            nơi mọi người được tôn trọng và phát triển bình đẳng.
          </p>
        </motion.li>

        <motion.li
          className="bg-green-50 p-6 rounded-2xl shadow-lg border-2 border-green-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-green-800 text-xl font-bold mb-3">
            <FaUniversity className="mr-3 text-2xl" /> Tư tưởng Hồ Chí Minh
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hồ Chí Minh khẳng định: <i>“Dân chủ là để dân mở miệng”</i> —
            tức là dân phải thật sự được nói, được bàn, được làm và được kiểm tra
            những việc liên quan đến lợi ích của mình.
          </p>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default DemocracySection;
