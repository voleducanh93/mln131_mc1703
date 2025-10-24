/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { FaGavel, FaBalanceScale, FaChartPie, FaLightbulb, FaArrowLeft } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

// ====== Ảnh minh họa ======
import anh10 from "../assets/anh10.jpg"; // Dịch vụ công trực tuyến
import anh11 from "../assets/anh11.jpg"; // Luật Thực hiện Dân chủ cơ sở
import anh12 from "../assets/anh12.jpg"; // Hội nghị triển khai Luật Đất Đai 2024
import anh13 from "../assets/anh13.jpg"; // Mô hình chính quyền đô thị

const videoUrl = "../assets/mln-bg-h264.mp4";

// ====== Motion config ======
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) },
  },
};

// ====== Quick Nav ======
function QuickNav() {
  const items = [
    { id: "quan-niem", label: "Quan niệm" },
    { id: "dac-diem", label: "Đặc điểm cơ bản" },
    { id: "thuc-tien-nn", label: "Liên hệ thực tiễn" },
    { id: "dan-chung", label: "Dẫn chứng – Trích dẫn" },
    { id: "cau-hoi", label: "Câu hỏi gợi mở" },
    { id: "ket-luan-nn", label: "Kết luận" },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
      {items.map((it) => (
        <ScrollLink
          key={it.id}
          to={it.id}
          smooth
          duration={600}
          offset={-80}
          className="cursor-pointer px-4 py-2 rounded-full bg-white/80 hover:bg-white text-[#2a2e6e] font-medium shadow border border-white/60 backdrop-blur-md transition"
        >
          {it.label}
        </ScrollLink>
      ))}
    </div>
  );
}

// ====== Main Component ======
const LawStatePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-24 bg-[#f4f7ff]">
      <video
        className="absolute inset-0 w-full h-full object-cover blur-md opacity-80 scale-110 -z-10"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* HERO */}
      <section
        className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-4 pt-24 text-center"
        id="home"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-[#2a2e6e] mb-4 leading-snug drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nhà nước pháp quyền Xã hội Chủ nghĩa Việt Nam
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-[#2a2e6e]/80 max-w-2xl mx-auto mb-6 leading-relaxed bg-white/60 rounded-2xl px-6 py-4 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Nền tảng của xã hội thượng tôn pháp luật – nơi mọi quyền lực nhà nước thuộc về nhân dân và được kiểm soát bằng pháp luật.
        </motion.p>
        <QuickNav />
      </section>

      {/* I. Quan niệm */}
      <section id="quan-niem" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <FaGavel className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6">I. Quan niệm</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/70 p-6 rounded-2xl shadow">
            Nhà nước pháp quyền là nhà nước thượng tôn pháp luật, nơi mọi công dân được giáo dục, tôn trọng và tuân thủ pháp luật.
            Mọi hoạt động của nhà nước đều nhằm phục vụ lợi ích nhân dân, tạo điều kiện để mỗi cá nhân phát huy năng lực,
            tự do và bình đẳng trong khuôn khổ pháp luật.
          </p>
        </motion.div>
      </section>

      {/* II. Đặc điểm cơ bản */}
      <section id="dac-diem" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <FaBalanceScale className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6">II. Đặc điểm cơ bản</h2>
          <ul className="text-gray-700 text-left max-w-3xl mx-auto space-y-4 leading-relaxed bg-white/70 p-6 rounded-2xl shadow">
            <li>1️⃣ Nhà nước của dân, do dân, vì dân – nhân dân là chủ thể tối cao của quyền lực nhà nước.</li>
            <li>2️⃣ Tổ chức và hoạt động dựa trên Hiến pháp và pháp luật, trong đó pháp luật được đặt ở vị trí tối thượng.</li>
            <li>3️⃣ Quyền lực nhà nước thống nhất, có sự phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp.</li>
            <li>4️⃣ Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, bảo đảm định hướng xã hội chủ nghĩa.</li>
            <li>5️⃣ Tôn trọng và đề cao con người – con người là trung tâm của sự phát triển.</li>
            <li>6️⃣ Tổ chức bộ máy theo nguyên tắc tập trung dân chủ, bảo đảm sự lãnh đạo thống nhất của Trung ương.</li>
            <li>7️⃣ Mang bản chất giai cấp công nhân, phục vụ lợi ích của nhân dân lao động.</li>
          </ul>
        </motion.div>
      </section>

      {/* III. Liên hệ thực tiễn hiện nay */}
<section id="thuc-tien-nn" className="container mx-auto px-4 my-20">
  <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <FaChartPie className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a2e6e] mb-6">
      III. Liên hệ thực tiễn hiện nay
    </h2>

    {/* 4 thẻ figure có caption – đảm bảo ảnh không “mất” */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Dịch vụ công trực tuyến */}
      <figure className="bg-white/70 p-4 rounded-2xl shadow">
        <motion.img
          src={anh10}
          alt="Dịch vụ công trực tuyến, định danh điện tử"
          className="rounded-xl shadow-md w-full"
        />
        <figcaption className="text-sm text-gray-600 mt-3">
          Cổng DVC trực tuyến, định danh VNeID – thủ tục minh bạch, chống “xin – cho”.
        </figcaption>
      </figure>

      {/* Luật Thực hiện Dân chủ ở cơ sở */}
      <figure className="bg-white/70 p-4 rounded-2xl shadow">
        <motion.img
          src={anh11}
          alt="Luật Thực hiện Dân chủ ở cơ sở 2023"
          className="rounded-xl shadow-md w-full"
        />
        <figcaption className="text-sm text-gray-600 mt-3">
          Luật Thực hiện Dân chủ ở cơ sở 2023 – bắt buộc công khai ngân sách, dự án, quy hoạch.
        </figcaption>
      </figure>

      {/* Luật Đất đai 2024 – lấy ý kiến toàn dân (ẢNH DỄ BỊ THIẾU) */}
      <figure className="bg-white/70 p-4 rounded-2xl shadow">
        <motion.img
          src={anh12}
          alt="Hội nghị triển khai Luật Đất đai 2024, lấy ý kiến toàn dân"
          className="rounded-xl shadow-md w-full"
        />
        <figcaption className="text-sm text-gray-600 mt-3">
          Luật Đất đai 2024 lấy ý kiến toàn dân, hơn 12 triệu góp ý trước khi thông qua.
        </figcaption>
      </figure>

      {/* Mô hình chính quyền đô thị */}
      <figure className="bg-white/70 p-4 rounded-2xl shadow">
        <motion.img
          src={anh13}
          alt="Mô hình chính quyền đô thị"
          className="rounded-xl shadow-md w-full"
        />
        <figcaption className="text-sm text-gray-600 mt-3">
          Thí điểm chính quyền đô thị: tinh gọn tầng nấc, tăng tốc ra quyết định.
        </figcaption>
      </figure>
    </div>
  </motion.div>
</section>


      {/* IV. Dẫn chứng */}
      <section id="dan-chung" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <FaGavel className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6">IV. Dẫn chứng – Trích dẫn tiêu biểu</h2>

          <div className="text-left max-w-3xl mx-auto bg-white/70 p-6 rounded-2xl shadow space-y-8 leading-relaxed text-gray-700">
            <p><b>01/07/2024:</b> Bộ Công an cho phép dùng <b>VNeID</b> thay CMND và BHYT khi khám bệnh, thí điểm tại 52 bệnh viện lớn ở TP.HCM và Hà Nội.</p>
            <p><b>Luật Đất Đai 2024:</b> Hơn 12,3 triệu lượt góp ý từ người dân qua Cổng DVC – khẳng định dân chủ thực chất trong xây dựng chính sách.</p>
            <p><b>Tháng 4/2024:</b> Tòa án TP.HCM tuyên tử hình Trương Mỹ Lan (Vạn Thịnh Phát), thu hồi hơn 30.000 tỷ đồng tài sản tham nhũng.</p>
            <p><b>01/01/2024:</b> Chính phủ bỏ hoàn toàn sổ hộ khẩu giấy – quản lý dân cư bằng dữ liệu quốc gia kết nối với thuế, y tế, ngân hàng, giáo dục.</p>
          </div>
        </motion.div>
      </section>

      {/* VI. Kết luận */}
      <section id="ket-luan-nn" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6">VI. Kết luận</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/70 p-6 rounded-2xl shadow">
            Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam là nhiệm vụ trọng tâm của công cuộc đổi mới đất nước.
            Đây là điều kiện tiên quyết để bảo đảm quyền làm chủ của nhân dân và quản lý xã hội bằng pháp luật.
            Hoàn thiện thể chế, kiểm soát quyền lực và tăng cường pháp chế là nền tảng để hướng tới một Nhà nước
            <b> “của dân, do dân, vì dân”</b> – minh bạch, công bằng và hiện đại.
          </p>

          {/* ⬅ Nút quay lại */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="mt-8 px-6 py-3 bg-[#6e7fdc] text-white font-semibold rounded-full shadow-lg hover:bg-[#5c6ac4] transition"
          >
            ⬅ Quay lại Phần 1: Dân chủ XHCN
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default LawStatePage;
