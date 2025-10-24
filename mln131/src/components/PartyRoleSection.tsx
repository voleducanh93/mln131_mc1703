import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCogs, FaSitemap, FaHandshake, FaUsers, FaFlag } from "react-icons/fa";

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
      {/* Tiêu đề */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[#2a2e6e] text-center mb-10"
        variants={itemVariants}
      >
        <FaStar className="inline-block text-red-600 mr-3" />
        Vai trò lãnh đạo của Đảng Cộng sản Việt Nam
      </motion.h2>

      {/* Giới thiệu */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed"
        variants={itemVariants}
      >
        Trong học phần <b>MLN131 – Chủ nghĩa xã hội khoa học</b>, vai trò lãnh đạo của Đảng Cộng sản Việt Nam
        được xem là <b>nhân tố quyết định bản chất và sức sống của chế độ dân chủ XHCN</b>.
        Đảng là lực lượng duy nhất lãnh đạo Nhà nước và xã hội, bảo đảm con đường đi lên chủ nghĩa xã hội đúng đắn, vì hạnh phúc của Nhân dân.
      </motion.p>

      {/* Nội dung */}
      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
      >
        {/* 1. Nhân tố lãnh đạo quyết định */}
        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaSitemap className="mr-3 text-2xl" />
            Nhân tố lãnh đạo quyết định
          </div>
          <p className="text-gray-700 leading-relaxed">
            <b>Đảng Cộng sản Việt Nam</b> là lực lượng chính trị duy nhất lãnh đạo Nhà nước và xã hội,
            giữ vai trò hạt nhân trong hệ thống chính trị, định hướng toàn bộ sự nghiệp cách mạng theo con đường xã hội chủ nghĩa.
          </p>
        </motion.li>

        {/* 2. Xây dựng và chỉnh đốn Đảng */}
        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaCogs className="mr-3 text-2xl" />
            Xây dựng và chỉnh đốn Đảng
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đảng phải thường xuyên <b>tự đổi mới, tự chỉnh đốn</b>;
            nâng cao năng lực lãnh đạo và sức chiến đấu;
            kiên quyết chống <b>chủ nghĩa cá nhân, quan liêu, tham nhũng, suy thoái tư tưởng</b>,
            để giữ Đảng thật sự <b>trong sạch, vững mạnh</b>.
          </p>
        </motion.li>

        {/* 3. Đổi mới phương thức lãnh đạo */}
        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaHandshake className="mr-3 text-2xl" />
            Đổi mới phương thức lãnh đạo
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đảng lãnh đạo bằng <b>Cương lĩnh, chủ trương, đường lối</b>,
            không bao biện làm thay Nhà nước; phát huy vai trò của <b>Mặt trận Tổ quốc</b> và các tổ chức chính trị – xã hội;
            bảo đảm nguyên tắc tập trung dân chủ và sự thống nhất trong hành động.
          </p>
        </motion.li>

        {/* 4. Gắn bó mật thiết với Nhân dân */}
        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaUsers className="mr-3 text-2xl" />
            Gắn bó mật thiết với Nhân dân
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đảng luôn xác định <b>Nhân dân là gốc</b>;
            mọi đường lối, chính sách phải xuất phát từ lợi ích, nguyện vọng chính đáng của Nhân dân.
            Đảng là “<i>người lãnh đạo, đồng thời là người đầy tớ trung thành của Nhân dân</i>”.
          </p>
        </motion.li>

        {/* 5. Lãnh đạo xây dựng Nhà nước pháp quyền và dân chủ XHCN */}
        <motion.li
          className="bg-red-50 p-6 rounded-2xl shadow-lg border-2 border-red-300 hover:shadow-xl transition-transform hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="flex items-center text-red-800 text-xl font-bold mb-3">
            <FaFlag className="mr-3 text-2xl" />
            Lãnh đạo xây dựng Nhà nước pháp quyền
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đảng lãnh đạo Nhà nước trong việc xây dựng <b>Nhà nước pháp quyền XHCN</b>,
            nơi quyền lực được kiểm soát chặt chẽ, pháp luật được thượng tôn,
            và dân chủ được thực hành rộng rãi trong đời sống xã hội.
          </p>
        </motion.li>
      </motion.ul>

      {/* Đoạn kết */}
      <motion.div
        className="mt-10 bg-red-100/70 border border-red-300 rounded-2xl shadow-md p-6 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <p className="text-base md:text-lg text-[#2a2e6e] font-medium leading-relaxed italic">
          “Sự lãnh đạo đúng đắn và sáng suốt của Đảng Cộng sản Việt Nam là nhân tố bảo đảm cho
          dân chủ được thực hiện, pháp quyền được củng cố và con đường đi lên chủ nghĩa xã hội
          của dân tộc ta vững bước, bền vững trong thời đại mới.”
        </p>
      </motion.div>
    </motion.section>
  );
};

export default PartyRoleSection;
