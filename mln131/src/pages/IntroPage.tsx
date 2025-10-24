/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { motion, cubicBezier } from "framer-motion";
import {
  FaBalanceScale,
  FaHistory,
  FaUsers,
  FaChartPie,
  FaLightbulb,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
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
  Cell,
} from "recharts";

// ====== Ảnh minh họa (Phần 1) ======
import anh1 from "../assets/anh1.jpg";
import anh2 from "../assets/anh2.jpg";
import anh3 from "../assets/anh3.jpg";
import anh4 from "../assets/anh4.jpg";
import anh5 from "../assets/anh5.jpg";
import anh6 from "../assets/anh6.jpg";
import anh7 from "../assets/anh7.jpg";
import anh8 from "../assets/anh8.jpg";
import anh9 from "../assets/anh9.jpg";

const videoUrl = "../assets/mln-bg-h264.mp4";

// ====== Biểu đồ mẫu ======
const pieData = [
  { name: "Kinh tế", value: 35 },
  { name: "Chính trị", value: 30 },
  { name: "Văn hóa – xã hội", value: 20 },
  { name: "Công nghệ", value: 15 },
];
const barData = [
  { name: "Minh bạch", value: 85 },
  { name: "Tham gia của dân", value: 70 },
  { name: "Kỷ cương pháp luật", value: 90 },
];
const COLORS = ["#6E7FDC", "#5FC6C9", "#8AC7A7", "#F6C667"];

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
    { id: "bieu-do", label: "Biểu đồ minh họa" },
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
}: {
  title: string;
  bullets: string[];
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
        </div>
      </div>
      <style>{`.flip-inner.is-flipped { transform: rotateY(180deg); }`}</style>
    </div>
  );
}

// ====== Main Component ======
const IntroPage: React.FC = () => {
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
    <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
      Nền dân chủ tại Việt Nam không phải là một khái niệm trừu tượng,
      mà là một quá trình phát triển lịch sử cụ thể gắn liền với các
      giai đoạn cách mạng dân tộc.
    </p>

    {/* === HAI HÌNH ẢNH GIỮ NGUYÊN === */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <motion.img
        src={anh3}
        alt="Cách mạng 1945 – Dân chủ Nhân dân"
        className="rounded-2xl shadow-xl w-full max-w-sm border-4 border-white/70"
      />
      <motion.img
        src={anh4}
        alt="1976 – Dân chủ Xã hội Chủ nghĩa"
        className="rounded-2xl shadow-xl w-full max-w-sm border-4 border-white/70"
      />
    </div>

    {/* === NỘI DUNG MÔ TẢ 2 GIAI ĐOẠN === */}
    <div className="mt-10 max-w-3xl mx-auto text-left bg-white/70 p-6 rounded-2xl shadow space-y-4">
      <p>
        <b>Giai đoạn 1945 – Dân chủ Nhân dân:</b> Sau thắng lợi của Cách mạng
        Tháng Tám, nước Việt Nam Dân chủ Cộng hòa ra đời, thiết lập chế độ dân
        chủ nhân dân. Đây là bước ngoặt lịch sử – lần đầu tiên người dân Việt Nam
        từ thân phận nô lệ trở thành người làm chủ đất nước.
      </p>
      <p>
        <b>Giai đoạn 1976 – Dân chủ Xã hội Chủ nghĩa:</b> Sau khi đất nước thống nhất,
        Quốc hội khóa VI đã quyết định đổi tên nước thành
        <b> “Cộng hòa Xã hội Chủ nghĩa Việt Nam”.</b> Từ đây, thuật ngữ
        <i> “dân chủ xã hội chủ nghĩa”</i> được sử dụng chính thức và thường xuyên,
        gắn liền với quan điểm xây dựng chế độ làm chủ tập thể và thực hiện chuyên
        chính vô sản (theo thuật ngữ lý luận thời kỳ đó).
      </p>
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
      Dân chủ được thực hành như thế nào?
    </h2>
    <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto">
      Dân chủ ở Việt Nam được thực hiện thông qua hai hình thức cơ bản, gắn bó
      chặt chẽ với nhau: <b>Dân chủ gián tiếp (đại diện)</b> và <b>Dân chủ trực tiếp</b>.
    </p>

    <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
      {/* --- Dân chủ gián tiếp --- */}
      <div className="md:w-1/2 bg-white/70 p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-[#2a2e6e] text-xl mb-3">
          a. Dân chủ gián tiếp (dân chủ đại diện)
        </h3>
        <p className="text-gray-700 mb-4">
          Nhân dân thực hiện quyền lực thông qua các cơ quan đại diện như{" "}
          <b>Quốc hội</b> và <b>Hội đồng nhân dân</b> các cấp. 
          Quốc hội là cơ quan quyền lực nhà nước cao nhất, có quyền lập hiến, 
          lập pháp, giám sát tối cao và quyết định các vấn đề trọng đại của quốc gia.
        </p>
        <p className="text-gray-700 mb-4">
          <b>Thực tiễn:</b> Việc lấy ý kiến toàn dân về 
          <b> Luật Đất đai (sửa đổi)</b> và các phiên chất vấn được truyền hình trực tiếp 
          thể hiện rõ tinh thần trách nhiệm và tính minh bạch của dân chủ đại diện.
        </p>
        <div className="mt-6 space-y-4">
          <motion.img
            src={anh5}
            alt="Quốc hội Việt Nam"
            className="rounded-xl shadow-md"
          />
          <motion.img
            src={anh6}
            alt="Hội nghị phản biện Luật Đất đai"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* --- Dân chủ trực tiếp --- */}
      <div className="md:w-1/2 bg-white/70 p-6 rounded-2xl shadow">
        <h3 className="font-semibold text-[#2a2e6e] text-xl mb-3">
          b. Dân chủ trực tiếp
        </h3>
        <p className="text-gray-700 mb-4">
          Nhân dân trực tiếp tham gia bàn bạc, giám sát, phản biện và quyết định
          các vấn đề liên quan đến cộng đồng. Đây là hình thức dân chủ sâu rộng,
          phát huy vai trò chủ thể của người dân trong mọi hoạt động của Nhà nước
          và xã hội.
        </p>

        <div className="text-gray-700 space-y-3">
          <p>
            <b>Thực tiễn:</b> Phương châm{" "}
            <i>“Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng”</i>{" "}
            được triển khai sâu rộng, thể hiện vai trò làm chủ thực sự của nhân dân.
          </p>
          <p>
            Quy chế dân chủ ở cơ sở cho phép người dân trực tiếp bàn và quyết định
            các công trình phúc lợi, bầu trưởng thôn, giám sát thu chi của địa phương.
          </p>
          <p>
            <b>Chuyển đổi số</b> và <b>Chính phủ điện tử</b> giúp mở rộng dân chủ theo hướng hiện đại — 
            người dân có thể phản ánh, kiến nghị, giám sát hoạt động công quyền qua các nền tảng số như 
            Cổng DVC Quốc gia, <b>VNeID</b>, <b>Zalo</b>, <b>Facebook</b>.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <motion.img
            src={anh7}
            alt="Phương châm dân biết dân bàn dân làm"
            className="rounded-xl shadow-md"
          />
          <motion.img
            src={anh8}
            alt="Người dân biểu quyết tại cơ sở"
            className="rounded-xl shadow-md"
          />
          <motion.img
            src={anh9}
            alt="Chính phủ điện tử - Cổng DVC Quốc gia"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  </motion.div>
</section>


      {/* 4. Biểu đồ minh họa */}
      <section id="bieu-do" className="container mx-auto px-4 my-20 text-center">
        <FaChartPie className="text-4xl text-[#6e7fdc] mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#2a2e6e] mb-6">
          Biểu đồ minh họa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/70 rounded-2xl shadow p-4">
            <h4 className="font-semibold mb-2 text-[#2a2e6e]">
              Phân bổ lĩnh vực thực hiện dân chủ
            </h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ReTooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white/70 rounded-2xl shadow p-4">
            <h4 className="font-semibold mb-2 text-[#2a2e6e]">
              Hiệu quả quản trị dân chủ
            </h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ReTooltip />
                <Bar dataKey="value" fill="#6E7FDC" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
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
            Dân chủ xã hội chủ nghĩa ở Việt Nam là thành quả của cách mạng, sự lãnh đạo đúng đắn của Đảng Cộng sản và khát vọng của nhân dân về tự do, công bằng, hạnh phúc.
Trong giai đoạn hiện nay, việc mở rộng dân chủ phải gắn liền với tăng cường pháp chế, kỷ luật và kỷ cương xã hội, coi đây là điều kiện tiên quyết để đất nước phát triển ổn định, bền vững.
Dân chủ XHCN không chỉ là quyền được làm chủ, mà còn là trách nhiệm làm chủ – góp phần xây dựng một xã hội mà mọi người đều được tham gia, cống hiến và thụ hưởng công bằng.
.
          </p>

          {/* Nút chuyển trang */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/lawstate")}
            className="mt-8 px-6 py-3 bg-[#6e7fdc] text-white font-semibold rounded-full shadow-lg hover:bg-[#5c6ac4] transition"
          >
            ➡ Sang Phần 2: Nhà nước pháp quyền XHCN
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default IntroPage;
