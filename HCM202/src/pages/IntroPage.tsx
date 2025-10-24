/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { motion, cubicBezier } from "framer-motion";
import {
  FaBalanceScale,
  FaHistory,
  FaUsers,
  FaChartPie,
  FaLightbulb,
  FaGavel,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

// ====== Ảnh minh họa (đã gán đủ 13 ảnh) ======
import anh1 from "../assets/anh1.jpg"; // chính trị - xã hội
import anh2 from "../assets/anh2.jpg"; // kinh tế - dân sinh
import anh3 from "../assets/anh3.jpg"; // 1945 - Tuyên ngôn độc lập
import anh4 from "../assets/anh4.jpg"; // 1976 - thống nhất đất nước
import anh5 from "../assets/anh5.jpg"; // Quốc hội
import anh6 from "../assets/anh6.jpg"; // Hội nghị phản biện luật đất đai
import anh7 from "../assets/anh7.jpg"; // Phương châm dân biết dân bàn
import anh8 from "../assets/anh8.jpg"; // Người dân biểu quyết
import anh9 from "../assets/anh9.jpg"; // Chính phủ điện tử
import anh10 from "../assets/anh10.jpg"; // Dịch vụ công trực tuyến
import anh11 from "../assets/anh11.jpg"; // Luật thực hiện dân chủ cơ sở
import anh12 from "../assets/anh12.jpg"; // Hội nghị triển khai luật đất đai 2024
import anh13 from "../assets/anh13.jpg"; // Sơ đồ mô hình chính quyền đô thị

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
    { id: "ban-chat", label: "Bản chất dân chủ" },
    { id: "lich-su", label: "Lịch sử hình thành" },
    { id: "thuc-hanh", label: "Thực hành dân chủ" },
    { id: "thuc-tien", label: "Liên hệ thực tiễn" },
    { id: "ket-luan", label: "Kết luận" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
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

// ====== FlipCard ======
function FlipCard({
  title,
  bullets,
  quote,
}: {
  title: string;
  bullets: string[];
  quote?: string;
}) {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <div
      className="w-full max-w-sm"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className={`flip-inner ${flipped ? "is-flipped" : ""}`}
        style={{
          position: "relative",
          height: "15rem",
          borderRadius: "1rem",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,.75)",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: 700,
            color: "#2a2e6e",
            backfaceVisibility: "hidden",
          }}
        >
          {title}
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#2a2e6e",
            color: "white",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "1rem",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {bullets.map((b, i) => (
            <p key={i} className="text-sm md:text-base mb-1">
              {b}
            </p>
          ))}
          {quote && <p className="text-xs italic opacity-80 mt-2">{quote}</p>}
        </div>
      </div>
      <style>{`.flip-inner.is-flipped { transform: rotateY(180deg); }`}</style>
    </div>
  );
}

// ====== Data biểu đồ ======
const demoPieData = [
  { name: "Kinh tế", value: 35 },
  { name: "Chính trị", value: 30 },
  { name: "Văn hóa – xã hội", value: 20 },
  { name: "Công nghệ", value: 15 },
];
const demoBarData = [
  { name: "Minh bạch", value: 85 },
  { name: "Tham gia của dân", value: 70 },
  { name: "Kỷ cương pháp luật", value: 90 },
];

// ====== Main Component ======
const IntroPage: React.FC = () => {
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
        className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-4 pt-24 text-center"
        id="home"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-[#2a2e6e] mb-4 leading-snug drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Dân chủ Xã hội Chủ nghĩa tại Việt Nam
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-[#2a2e6e]/80 max-w-2xl mx-auto mb-6 leading-relaxed bg-white/60 rounded-2xl px-6 py-4 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Từ lý luận đến thực tiễn – nền tảng chính trị, mục tiêu và động lực
          cho sự phát triển đất nước.
        </motion.p>
        <QuickNav />
        <motion.img
          src={anh1}
          alt="Dân là gốc – Dân làm chủ"
          className="mt-8 rounded-2xl shadow-2xl w-full max-w-md border-4 border-white/70 bg-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </section>

      {/* 1. Bản chất */}
      <section id="ban-chat" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <FaBalanceScale className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6">
            Bản chất cốt lõi: “Dân là gốc – Dân làm chủ”
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Dân chủ XHCN ở Việt Nam là bản chất của chế độ, vừa là mục tiêu vừa
            là động lực phát triển. Quyền lực thuộc về nhân dân; dân chủ gắn với
            pháp luật và được thực hiện toàn diện trong mọi lĩnh vực.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
            <FlipCard
              title="Quyền lực thuộc về nhân dân"
              bullets={[
                "Hiến pháp khẳng định: 'Nước CHXHCN Việt Nam do nhân dân làm chủ'.",
                "Nhân dân là chủ thể tối cao của quyền lực nhà nước.",
              ]}
            />
            <FlipCard
              title="Dân chủ gắn với pháp luật"
              bullets={[
                "Dân chủ không phải vô giới hạn, mà trong khuôn khổ pháp luật.",
                "Pháp luật là công cụ bảo đảm quyền dân chủ được thực thi.",
              ]}
            />
            <FlipCard
              title="Toàn diện trong mọi lĩnh vực"
              bullets={[
                "Kinh tế, chính trị, văn hóa, xã hội – tất cả đều vì dân, do dân, và của dân.",
                "Người dân được tham gia, giám sát và thụ hưởng công bằng.",
              ]}
            />
          </div>
          <motion.img
            src={anh2}
            alt="Khẩu hiệu dân chủ"
            className="mt-10 rounded-2xl shadow-lg w-full max-w-3xl mx-auto border-4 border-white/70 bg-white/60"
          />
        </motion.div>
      </section>

      {/* 2. Lịch sử */}
      <section id="lich-su" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <FaHistory className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6">
            Lịch sử hình thành và phát triển
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.img
              src={anh3}
              alt="Cách mạng 1945"
              className="rounded-2xl shadow-xl w-full max-w-sm border-4 border-white/70"
            />
            <motion.img
              src={anh4}
              alt="Thống nhất 1976"
              className="rounded-2xl shadow-xl w-full max-w-sm border-4 border-white/70"
            />
          </div>
        </motion.div>
      </section>

      {/* 3. Thực hành */}
      <section id="thuc-hanh" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <FaUsers className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a2e6e] mb-6">
            Thực hành dân chủ ở Việt Nam
          </h2>

          <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
            {/* Gián tiếp */}
            <div className="md:w-1/2 bg-white/70 p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-[#2a2e6e] text-xl mb-3">
                Dân chủ gián tiếp (đại diện)
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Nhân dân thực hiện quyền lực thông qua Quốc hội, HĐND.</li>
                <li>
                  Việc lấy ý kiến toàn dân về Luật Đất đai, các phiên chất vấn công khai thể hiện dân chủ đại diện.
                </li>
              </ul>
              <motion.img src={anh5} alt="Quốc hội" className="mt-4 rounded-xl shadow-md" />
              <motion.img src={anh6} alt="Hội nghị phản biện Luật Đất đai" className="mt-6 rounded-xl shadow-md" />
            </div>

            {/* Trực tiếp */}
            <div className="md:w-1/2 bg-white/70 p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-[#2a2e6e] text-xl mb-3">
                Dân chủ trực tiếp
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Người dân bàn bạc, quyết định và giám sát các vấn đề cộng đồng.
                </li>
                <li>
                  “Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng” là phương châm xuyên suốt.
                </li>
                <li>
                  Nhờ chuyển đổi số, người dân có thể phản ánh, kiến nghị, giám sát qua Cổng DVC Quốc gia, VNeID, Zalo, Facebook.
                </li>
              </ul>
              <motion.img src={anh7} alt="Phương châm Dân biết dân bàn" className="mt-4 rounded-xl shadow-md" />
              <motion.img src={anh8} alt="Người dân biểu quyết" className="mt-6 rounded-xl shadow-md" />
              <motion.img src={anh9} alt="Chính phủ điện tử" className="mt-6 rounded-xl shadow-md" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Liên hệ thực tiễn */}
      <section id="thuc-tien" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <FaChartPie className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2a2e6e] mb-6">
            Liên hệ thực tiễn & Bối cảnh hiện nay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.img src={anh10} alt="Dịch vụ công trực tuyến" className="rounded-2xl shadow-xl border-4 border-white/70" />
            <motion.img src={anh11} alt="Luật Thực hiện Dân chủ cơ sở" className="rounded-2xl shadow-xl border-4 border-white/70" />
            <motion.img src={anh12} alt="Hội nghị triển khai Luật Đất Đai 2024" className="rounded-2xl shadow-xl border-4 border-white/70" />
            <motion.img src={anh13} alt="Mô hình chính quyền đô thị" className="rounded-2xl shadow-xl border-4 border-white/70" />
          </div>
        </motion.div>
      </section>

      {/* 5. Kết luận */}
      <section id="ket-luan" className="container mx-auto px-4 my-20">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6">
            Kết luận
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/70 p-6 rounded-2xl shadow">
            Dân chủ xã hội chủ nghĩa là thành quả của cách mạng và sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam.
           
            Việc phát huy dân chủ phải gắn liền với tăng cường pháp chế, kỷ luật
            và kỷ cương xã hội. Dân chủ không chỉ là quyền làm chủ mà còn là
            trách nhiệm làm chủ – nền tảng của xã hội “dân giàu, nước mạnh,
            dân chủ, công bằng, văn minh”.
          </p>

          <motion.img
            src={anh1}
            alt="Tổng kết bài học"
            className="mt-10 rounded-2xl shadow-xl w-full max-w-2xl mx-auto border-4 border-white/70 bg-white/60"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default IntroPage;
