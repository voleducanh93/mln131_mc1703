import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaGavel, FaUsers } from "react-icons/fa";
import { FaScaleBalanced, FaFlag } from "react-icons/fa6";

const GovernanceSection: React.FC = () => {
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
      id="nha-nuoc-phap-quyen"
      className="w-full bg-gradient-to-b from-white via-blue-50/60 to-white rounded-3xl shadow-2xl border-4 border-blue-200/70 p-6 md:p-12 my-16"
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
        <FaGavel className="inline-block text-[#6e7fdc] mr-3" />
        Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam
      </motion.h2>

      {/* Giới thiệu */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed"
        variants={itemVariants}
      >
        <b>Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam</b> là một đặc trưng cơ bản
        của chế độ xã hội chủ nghĩa, được xây dựng theo tư tưởng Hồ Chí Minh và quan điểm
        của chủ nghĩa xã hội khoa học: <b>“Nhà nước của dân, do dân, vì dân”</b>.
        Mọi quyền lực nhà nước thuộc về Nhân dân và được tổ chức, hoạt động trên cơ sở Hiến pháp và pháp luật.
      </motion.p>

      {/* Nội dung */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {/* 1. Hiến pháp tối thượng */}
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaScaleBalanced className="mr-3 text-2xl" />
            Hiến pháp tối thượng
          </div>
          <p className="text-gray-700 leading-relaxed">
            Tất cả tổ chức, cá nhân và cơ quan nhà nước đều phải tuân thủ Hiến pháp và pháp luật;
            <b> không ai được đứng trên pháp luật</b>. Pháp luật là cơ sở để bảo đảm dân chủ và công bằng xã hội.
          </p>
        </motion.li>

        {/* 2. Phân công & kiểm soát quyền lực */}
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaHandshake className="mr-3 text-2xl" />
            Phân công & kiểm soát quyền lực
          </div>
          <p className="text-gray-700 leading-relaxed">
            Quyền lực nhà nước là thống nhất, nhưng có sự <b>phân công, phối hợp và kiểm soát</b>
            giữa các cơ quan lập pháp, hành pháp và tư pháp, nhằm phòng ngừa lạm quyền, bảo đảm hiệu lực và hiệu quả quản lý.
          </p>
        </motion.li>

        {/* 3. Bảo đảm quyền con người & công dân */}
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaUsers className="mr-3 text-2xl" />
            Bảo đảm quyền con người
          </div>
          <p className="text-gray-700 leading-relaxed">
            Nhà nước có trách nhiệm <b>tôn trọng, bảo vệ và bảo đảm quyền con người, quyền công dân</b>;
            gắn dân chủ với pháp luật, bảo đảm công bằng và bình đẳng trước pháp luật.
          </p>
        </motion.li>

        {/* 4. Sự lãnh đạo của Đảng Cộng sản Việt Nam */}
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaFlag className="mr-3 text-2xl" />
            Sự lãnh đạo của Đảng
          </div>
          <p className="text-gray-700 leading-relaxed">
            <b>Đảng Cộng sản Việt Nam</b> là lực lượng lãnh đạo Nhà nước và xã hội, bảo đảm
            định hướng xã hội chủ nghĩa trong toàn bộ hoạt động của bộ máy nhà nước;
            Đảng lãnh đạo bằng chủ trương, đường lối và nêu gương của cán bộ, đảng viên.
          </p>
        </motion.li>

        {/* 5. Dân chủ gắn với pháp chế & kỷ cương */}
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaScaleBalanced className="mr-3 text-2xl" />
            Dân chủ gắn với pháp chế
          </div>
          <p className="text-gray-700 leading-relaxed">
            Dân chủ phải đi đôi với <b>pháp luật, kỷ luật và kỷ cương</b>.
            Thực hiện dân chủ không có nghĩa là vô chính phủ, mà là bảo đảm quyền của nhân dân
            trong khuôn khổ pháp luật, tạo trật tự xã hội ổn định để phát triển bền vững.
          </p>
        </motion.li>

        {/* 6. Nhà nước phục vụ Nhân dân & phát triển */}
        <motion.li
          className="bg-blue-50 p-6 rounded-2xl shadow-lg border-2 border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-transform"
          variants={itemVariants}
        >
          <div className="flex items-center text-blue-800 text-xl font-bold mb-3">
            <FaHandshake className="mr-3 text-2xl" />
            Nhà nước phục vụ phát triển
          </div>
          <p className="text-gray-700 leading-relaxed">
            Nhà nước pháp quyền XHCN hướng tới mục tiêu <b>“dân giàu, nước mạnh, dân chủ, công bằng, văn minh”</b>,
            coi con người là trung tâm, lấy hạnh phúc của nhân dân làm thước đo hiệu quả hoạt động.
          </p>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
};

export default GovernanceSection;
