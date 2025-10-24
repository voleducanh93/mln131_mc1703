import React from "react";
import { motion } from "framer-motion";
import { Scale, Users, Gavel, ShieldCheck, Flag } from "lucide-react";

const principles = [
  {
    icon: <Users className="w-10 h-10 text-green-600 mb-2" />,
    title: "Quyền lực thuộc về Nhân dân",
    desc: "Trong chế độ dân chủ xã hội chủ nghĩa, Nhân dân là chủ thể tối cao của quyền lực; mọi cơ quan, tổ chức, cán bộ nhà nước đều phải phục vụ Nhân dân và chịu sự giám sát của Nhân dân.",
  },
  {
    icon: <Scale className="w-10 h-10 text-blue-600 mb-2" />,
    title: "Thượng tôn Hiến pháp và pháp luật",
    desc: "Pháp luật là công cụ bảo đảm dân chủ và công bằng xã hội. Tất cả tổ chức, cá nhân đều bình đẳng trước pháp luật — không ai được đứng trên Hiến pháp và pháp luật.",
  },
  {
    icon: <Flag className="w-10 h-10 text-red-600 mb-2" />,
    title: "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
    desc: "Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội, bảo đảm định hướng xã hội chủ nghĩa trong mọi lĩnh vực; đồng thời chịu trách nhiệm trước Nhân dân và pháp luật về vai trò lãnh đạo của mình.",
  },
  {
    icon: <Gavel className="w-10 h-10 text-yellow-600 mb-2" />,
    title: "Phân công và kiểm soát quyền lực nhà nước",
    desc: "Quyền lực nhà nước là thống nhất nhưng được phân công, phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp — nhằm phòng ngừa lạm quyền, bảo đảm hiệu quả quản lý xã hội.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-600 mb-2" />,
    title: "Dân chủ gắn với pháp chế và kỷ cương",
    desc: "Dân chủ phải đi đôi với pháp luật và kỷ luật. Việc mở rộng quyền làm chủ của Nhân dân luôn gắn với việc giữ gìn trật tự, kỷ cương và đề cao trách nhiệm công dân trong xã hội.",
  },
];

const PrincipleSection: React.FC = () => {
  return (
    <section
      id="principles"
      className="relative w-full flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-white via-blue-50/60 to-white backdrop-blur-md"
    >
      {/* Tiêu đề */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-[#2a2e6e] mb-10 text-center drop-shadow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        🌿 Nguyên lý cơ bản của Nhà nước pháp quyền XHCN Việt Nam
      </motion.h2>

      {/* Grid các nguyên lý */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 p-8 text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {p.icon}
            <div className="text-xl font-semibold text-blue-700 mb-2">
              {p.title}
            </div>
            <p className="text-gray-700 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Kết luận ngắn */}
      <motion.div
        className="mt-12 bg-blue-100/70 border border-blue-200 rounded-2xl shadow-md p-6 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-base md:text-lg text-[#2a2e6e] font-medium italic leading-relaxed">
          “Những nguyên lý trên thể hiện rõ bản chất của <b>Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam</b> —
          nơi quyền lực thuộc về Nhân dân, được thực hiện trong khuôn khổ pháp luật và dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.”
        </p>
      </motion.div>
    </section>
  );
};

export default PrincipleSection;
