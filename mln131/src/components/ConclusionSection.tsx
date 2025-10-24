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
        Kết luận tổng hợp – Môn MLN131
      </motion.h2>

      <motion.ul
        className="space-y-5 text-lg md:text-xl font-medium text-gray-800 max-w-4xl mx-auto leading-relaxed"
        variants={containerVariants}
      >
        <motion.li variants={itemVariants}>
          <b>Chủ nghĩa xã hội khoa học</b> là một trong ba bộ phận cấu thành chủ nghĩa Marx–Lenin,
          cung cấp cơ sở lý luận và phương pháp luận khoa học cho việc nhận thức, xây dựng và phát triển
          xã hội mới – xã hội cộng sản chủ nghĩa.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Dân chủ xã hội chủ nghĩa</b> là bản chất của chế độ, vừa là mục tiêu,
          vừa là động lực phát triển. Quyền lực thuộc về Nhân dân, được thực hiện thông qua
          cả hai hình thức: <b>dân chủ đại diện</b> và <b>dân chủ trực tiếp</b>.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Dân là gốc</b> – Nhân dân là chủ thể của quyền lực nhà nước và là mục tiêu phục vụ cao nhất.
          Dân chủ phải đi đôi với <b>pháp luật, kỷ luật, kỷ cương</b> để bảo đảm trật tự và công bằng xã hội.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Nhà nước pháp quyền XHCN Việt Nam</b> là <b>“Nhà nước của dân, do dân, vì dân”</b>,
          đặt Hiến pháp và pháp luật ở vị trí tối thượng, đảm bảo mọi quyền dân chủ của công dân được thực thi thực chất.
        </motion.li>

        <motion.li variants={itemVariants}>
          <b>Đảng Cộng sản Việt Nam</b> giữ vai trò lãnh đạo toàn diện, bảo đảm định hướng xã hội chủ nghĩa
          trong mọi lĩnh vực. Cần thường xuyên <b>xây dựng, chỉnh đốn Đảng</b> để xứng đáng với niềm tin của Nhân dân.
        </motion.li>

        <motion.li variants={itemVariants}>
          Trong thực tiễn hiện nay, việc mở rộng dân chủ phải gắn với <b>tăng cường pháp chế</b>,
          đấu tranh chống tham nhũng, tiêu cực và thúc đẩy <b>chuyển đổi số</b> nhằm phát huy dân chủ
          theo hướng hiện đại, minh bạch và hiệu quả.
        </motion.li>

        <motion.li variants={itemVariants}>
          Mục tiêu cuối cùng của chủ nghĩa xã hội khoa học và nền dân chủ XHCN Việt Nam là
          xây dựng xã hội <b>“dân giàu, nước mạnh, dân chủ, công bằng, văn minh”</b>,
          nơi con người được phát triển toàn diện và hạnh phúc.
        </motion.li>
      </motion.ul>

      {/* Thông điệp tổng kết */}
      <motion.div
        className="mt-10 bg-purple-100/70 border border-purple-300 rounded-2xl shadow-md p-6 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <p className="text-base md:text-lg text-[#2a2e6e] font-medium leading-relaxed italic">
          “Học phần <b>MLN131 – Chủ nghĩa xã hội khoa học</b> giúp sinh viên hiểu sâu hơn nền tảng lý luận của
          con đường đi lên chủ nghĩa xã hội ở Việt Nam, từ đó hình thành niềm tin, trách nhiệm và ý chí
          cống hiến cho sự nghiệp xây dựng đất nước trong thời kỳ mới.”
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ConclusionSection;
