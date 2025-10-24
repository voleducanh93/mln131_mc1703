import React, { useState } from "react";
import { motion } from "framer-motion";

interface QuizQuestion {
  questionNumber: number;
  question: string;
  imageUrl?: string | null;
  answerOptions: {
    text: string;
    rationale: string;
    isCorrect: boolean;
  }[];
  hint: string;
}

const questions: QuizQuestion[] = [
  {
    questionNumber: 1,
    question: "Theo tư tưởng Hồ Chí Minh, nền dân chủ xã hội chủ nghĩa có bản chất là gì?",
    answerOptions: [
      {
        text: "Dân là gốc, dân làm chủ, mọi quyền lực thuộc về nhân dân",
        rationale: "Đúng. Đây là quan điểm nền tảng: dân vừa là mục tiêu, vừa là động lực của mọi chính sách.",
        isCorrect: true,
      },
      {
        text: "Nhà nước toàn quyền quyết định thay cho nhân dân",
        rationale: "Sai. Nhà nước chỉ là công cụ để nhân dân thực hiện quyền làm chủ.",
        isCorrect: false,
      },
      {
        text: "Chỉ tập trung phát triển kinh tế, ít chú ý quyền công dân",
        rationale: "Sai. Dân chủ phải toàn diện cả chính trị, kinh tế, văn hóa và xã hội.",
        isCorrect: false,
      },
      {
        text: "Tôn trọng ý kiến dân nhưng không cần thể chế hóa bằng luật",
        rationale: "Sai. Dân chủ phải gắn với pháp luật và kỷ cương.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: dân là gốc – dân làm chủ.",
  },
  {
    questionNumber: 2,
    question: "Giai đoạn nào đánh dấu bước khởi đầu của dân chủ ở Việt Nam?",
    answerOptions: [
      {
        text: "Sau Cách mạng Tháng Tám năm 1945",
        rationale: "Đúng. Đây là mốc lịch sử khi nhân dân lần đầu tiên làm chủ vận mệnh đất nước.",
        isCorrect: true,
      },
      {
        text: "Sau khi Việt Nam gia nhập Liên Hợp Quốc",
        rationale: "Sai. Đây là sự kiện đối ngoại, không phải khởi đầu dân chủ.",
        isCorrect: false,
      },
      {
        text: "Khi đổi tên nước năm 1976",
        rationale: "Sai. 1976 là thời điểm khẳng định dân chủ XHCN, không phải điểm khởi đầu.",
        isCorrect: false,
      },
      {
        text: "Từ sau công cuộc Đổi mới 1986",
        rationale: "Sai. Đổi mới mở rộng dân chủ, nhưng nền tảng đã có từ 1945.",
        isCorrect: false,
      },
    ],
    hint: "Liên hệ với Cách mạng Tháng Tám.",
  },
  {
    questionNumber: 3,
    question: "Dân chủ xã hội chủ nghĩa được thể hiện trong những lĩnh vực nào?",
    answerOptions: [
      {
        text: "Chỉ trong lĩnh vực chính trị",
        rationale: "Sai. Dân chủ XHCN có tính toàn diện.",
        isCorrect: false,
      },
      {
        text: "Kinh tế, chính trị, văn hóa, xã hội – tất cả vì dân, do dân, vì lợi ích của dân",
        rationale: "Đúng. Dân chủ là động lực và mục tiêu trong mọi lĩnh vực phát triển.",
        isCorrect: true,
      },
      {
        text: "Chỉ trong quan hệ giữa Nhà nước và công dân",
        rationale: "Sai. Còn bao gồm cộng đồng, doanh nghiệp, tổ chức xã hội.",
        isCorrect: false,
      },
      {
        text: "Chủ yếu trong hoạt động bầu cử",
        rationale: "Sai. Bầu cử chỉ là một phần biểu hiện của dân chủ.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: toàn diện trong mọi lĩnh vực.",
  },
  {
    questionNumber: 4,
    question: "Dân chủ gián tiếp (hay dân chủ đại diện) ở Việt Nam được thể hiện qua đâu?",
    answerOptions: [
      {
        text: "Quốc hội và Hội đồng Nhân dân các cấp",
        rationale: "Đúng. Đây là cơ quan đại diện cao nhất của nhân dân trong bộ máy Nhà nước.",
        isCorrect: true,
      },
      {
        text: "Các tổ chức xã hội dân sự nước ngoài",
        rationale: "Sai. Không thuộc cơ chế dân chủ nhà nước Việt Nam.",
        isCorrect: false,
      },
      {
        text: "Công đoàn doanh nghiệp",
        rationale: "Sai. Đây là tổ chức đại diện người lao động, không phải cơ quan quyền lực nhà nước.",
        isCorrect: false,
      },
      {
        text: "Các diễn đàn trực tuyến trên mạng xã hội",
        rationale: "Sai. Không phải hình thức dân chủ được thể chế hóa.",
        isCorrect: false,
      },
    ],
    hint: "Liên hệ Quốc hội – HĐND.",
  },
  {
    questionNumber: 5,
    question: "Dân chủ trực tiếp được thể hiện như thế nào trong đời sống xã hội?",
    answerOptions: [
      {
        text: "Người dân được bàn, làm, kiểm tra, giám sát các công việc cộng đồng ở cơ sở",
        rationale: "Đúng. Đây là biểu hiện thực tế của quyền làm chủ trực tiếp.",
        isCorrect: true,
      },
      {
        text: "Nhà nước tự ra quyết định thay dân để đảm bảo nhanh chóng",
        rationale: "Sai. Trái với tinh thần dân chủ.",
        isCorrect: false,
      },
      {
        text: "Chỉ thông qua trưng cầu dân ý cấp quốc gia",
        rationale: "Sai. Dân chủ trực tiếp diễn ra hằng ngày tại cơ sở.",
        isCorrect: false,
      },
      {
        text: "Người dân chỉ có quyền giám sát nhưng không được phát biểu",
        rationale: "Sai. Dân được quyền phát biểu, góp ý, tham gia giám sát và thụ hưởng.",
        isCorrect: false,
      },
    ],
    hint: "Gắn với phương châm 'Dân biết – dân bàn – dân làm – dân kiểm tra'.",
  },
  {
    questionNumber: 6,
    question: "Trong thời kỳ chuyển đổi số, dân chủ được mở rộng nhờ điều gì?",
    answerOptions: [
      {
        text: "Ứng dụng công nghệ, Chính phủ điện tử và công khai minh bạch thủ tục hành chính",
        rationale: "Đúng. Đây là nền tảng giúp người dân dễ tiếp cận thông tin và phản hồi nhanh chóng.",
        isCorrect: true,
      },
      {
        text: "Giảm sự tham gia của người dân vào quản lý nhà nước",
        rationale: "Sai. Dân chủ phải phát huy sự tham gia của dân.",
        isCorrect: false,
      },
      {
        text: "Chỉ tập trung vào cải cách công nghệ doanh nghiệp tư nhân",
        rationale: "Sai. Không gắn trực tiếp với cơ chế dân chủ công quyền.",
        isCorrect: false,
      },
      {
        text: "Ngừng tiếp nhận phản ánh của người dân qua mạng",
        rationale: "Sai. Ngược lại, công nghệ giúp lắng nghe ý kiến dân hiệu quả hơn.",
        isCorrect: false,
      },
    ],
    hint: "Liên hệ Cổng dịch vụ công và phản ánh trực tuyến.",
  },
  {
    questionNumber: 7,
    question: "Tại sao nói dân chủ phải đi đôi với pháp luật và kỷ cương?",
    answerOptions: [
      {
        text: "Vì dân chủ không có giới hạn nào",
        rationale: "Sai. Dân chủ phải nằm trong khuôn khổ pháp luật.",
        isCorrect: false,
      },
      {
        text: "Vì pháp luật bảo vệ quyền dân chủ, còn kỷ cương giúp dân chủ được thực hiện hiệu quả",
        rationale: "Đúng. Dân chủ và pháp luật hỗ trợ lẫn nhau, tránh tình trạng vô tổ chức.",
        isCorrect: true,
      },
      {
        text: "Vì chỉ cán bộ mới cần tuân thủ pháp luật",
        rationale: "Sai. Mọi công dân đều phải tuân thủ.",
        isCorrect: false,
      },
      {
        text: "Vì kỷ cương hạn chế tự do của người dân",
        rationale: "Sai. Kỷ cương giúp tự do có trật tự, không bị lạm dụng.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: dân chủ trong khuôn khổ pháp luật.",
  },
  {
    questionNumber: 8,
    question: "Một trong những biểu hiện mở rộng dân chủ trong giai đoạn hiện nay là gì?",
    answerOptions: [
      {
        text: "Người dân được tham gia góp ý dự thảo luật, chính sách qua mạng",
        rationale: "Đúng. Đây là hình thức dân chủ trực tuyến rất phổ biến hiện nay.",
        isCorrect: true,
      },
      {
        text: "Chỉ cán bộ được quyền góp ý chính sách",
        rationale: "Sai. Mọi công dân đều có quyền phản hồi chính sách.",
        isCorrect: false,
      },
      {
        text: "Không công khai thông tin dự thảo để tránh tranh luận",
        rationale: "Sai. Minh bạch là nguyên tắc cơ bản của dân chủ.",
        isCorrect: false,
      },
      {
        text: "Ngừng tổ chức các kỳ họp Quốc hội công khai",
        rationale: "Sai. Trái hoàn toàn với tinh thần dân chủ đại diện.",
        isCorrect: false,
      },
    ],
    hint: "Liên hệ dân chủ điện tử, phản hồi chính sách.",
  },
  {
    questionNumber: 9,
    question: "Theo quan điểm dân chủ XHCN, Nhà nước pháp quyền XHCN cần đảm bảo điều gì?",
    answerOptions: [
      {
        text: "Tất cả quyền lực thuộc về nhân dân, được thực thi bằng Hiến pháp và pháp luật",
        rationale: "Đúng. Đây là nền tảng của Nhà nước pháp quyền XHCN.",
        isCorrect: true,
      },
      {
        text: "Chỉ tập trung quyền lực vào cơ quan hành pháp",
        rationale: "Sai. Phải có phân công, phối hợp, kiểm soát giữa các cơ quan.",
        isCorrect: false,
      },
      {
        text: "Không cần cơ chế kiểm soát quyền lực",
        rationale: "Sai. Kiểm soát quyền lực là yêu cầu bắt buộc.",
        isCorrect: false,
      },
      {
        text: "Đặt Đảng và Nhà nước lên trên pháp luật",
        rationale: "Sai. Tất cả đều phải hoạt động trong khuôn khổ Hiến pháp và pháp luật.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: Hiến pháp – pháp luật – quyền lực nhân dân.",
  },
  {
    questionNumber: 10,
    question: "Thông điệp rút ra từ bài học về dân chủ xã hội chủ nghĩa là gì?",
    answerOptions: [
      {
        text: "Dân chủ là quyền và trách nhiệm, phải gắn với pháp luật, kỷ cương và đạo đức xã hội",
        rationale: "Đúng. Đây là kết luận trọng tâm của bài học.",
        isCorrect: true,
      },
      {
        text: "Dân chủ chỉ là khẩu hiệu, không cần thực hành",
        rationale: "Sai. Dân chủ phải được thực hiện bằng hành động cụ thể.",
        isCorrect: false,
      },
      {
        text: "Chỉ cần tự do, không cần pháp luật",
        rationale: "Sai. Tự do không có pháp luật là hỗn loạn.",
        isCorrect: false,
      },
      {
        text: "Nhà nước quyết định thay cho nhân dân để đảm bảo nhanh gọn",
        rationale: "Sai. Trái tinh thần dân làm chủ.",
        isCorrect: false,
      },
    ],
    hint: "Từ khóa: quyền – trách nhiệm – pháp luật – đạo đức.",
  },
];

const QuizPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<null | number>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showHint, setShowHint] = useState(false);

  const handleAnswer = (idx: number) => {
    if (answers[current] !== null) return;
    setSelected(idx);
    setShowFeedback(true);
    setAnswers((prev) => {
      const arr = [...prev];
      arr[current] = idx;
      return arr;
    });
    if (questions[current].answerOptions[idx].isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.min(c + 1, questions.length));
  };

  const handlePrev = () => {
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowFeedback(false);
    setShowHint(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const isAnswered = answers[current] !== null;
  const isCorrectAnswer =
    answers[current] !== null &&
    questions[current]?.answerOptions[answers[current] as number]?.isCorrect;

  const findCorrectAnswerIndex = (q: QuizQuestion) =>
    q.answerOptions.findIndex((opt) => opt.isCorrect);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7ff] py-10 px-2">
      <motion.div
        className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-xl p-6 md:p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2a2e6e] via-[#6e7fdc] to-[#3a3f8f] mb-8 text-center drop-shadow">
          Quiz ôn tập Dân chủ Xã hội Chủ nghĩa 🇻🇳
        </h2>

        {/* Hiển thị câu hỏi */}
        {current < questions.length ? (
          <>
            <div className="text-lg font-medium mb-6 text-gray-800 text-center">
              Câu {current + 1}/{questions.length}:<br />
              <span className="font-semibold">{questions[current].question}</span>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {questions[current].answerOptions.map((opt, idx) => {
                const isSelected = selected === idx || answers[current] === idx;
                const isCorrect = opt.isCorrect;
                const showResult = showFeedback || isAnswered;
                let btnClass = "";
                if (showResult) {
                  if (isSelected && isCorrect)
                    btnClass = "bg-green-500 text-white border-green-600";
                  else if (isSelected && !isCorrect)
                    btnClass = "bg-red-500 text-white border-red-600";
                  else if (isCorrect)
                    btnClass = "bg-green-100 border-green-400 text-green-700";
                  else btnClass = "bg-blue-100 border-blue-300 text-blue-700";
                } else {
                  btnClass = isSelected
                    ? "bg-blue-200 border-blue-400 text-blue-900"
                    : "bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200";
                }
                return (
                  <motion.button
                    key={idx}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full px-4 py-3 rounded-lg text-lg font-medium border-2 shadow transition-all text-left ${btnClass}`}
                    disabled={showResult}
                    onClick={() => handleAnswer(idx)}
                  >
                    {String.fromCharCode(65 + idx)}. {opt.text}
                  </motion.button>
                );
              })}
            </div>

            {/* Feedback */}
            {(showFeedback || isAnswered) && (
              <motion.div
                className="text-left mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const chosenIdx = answers[current] as number | null;
                  const correctIdx = findCorrectAnswerIndex(questions[current]);
                  const opts = questions[current].answerOptions;

                  if (chosenIdx === null) return null;

                  return (
                    <div className="space-y-4">
                      <div
                        className={`text-lg font-semibold ${
                          isCorrectAnswer ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {isCorrectAnswer ? "Chính xác!" : "Chưa đúng!"}
                      </div>

                      {!isCorrectAnswer && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                          <div className="font-semibold text-red-700 mb-1">Vì sao sai:</div>
                          <div className="text-gray-800">{opts[chosenIdx].rationale}</div>
                        </div>
                      )}

                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                        <div className="font-semibold text-green-700 mb-1">
                          Đáp án đúng: {String.fromCharCode(65 + correctIdx)}. {opts[correctIdx].text}
                        </div>
                        <div className="text-gray-800">{opts[correctIdx].rationale}</div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}

            <div className="flex justify-between items-center mt-6">
              <button
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Câu trước
              </button>
              <button
                className="px-5 py-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition"
                onClick={() => setShowHint(!showHint)}
              >
                Gợi ý
              </button>
              <button
                className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Câu tiếp
              </button>
            </div>

            <motion.div
              className="mt-4 p-4 text-center bg-yellow-50 text-yellow-800 border-l-4 border-yellow-400 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: showHint ? 1 : 0, height: showHint ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-semibold mb-2">Gợi ý:</div>
              <div className="text-sm italic">{questions[current].hint}</div>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-blue-700 mb-2">Hoàn thành!</div>
            <div className="text-lg mb-4">
              Bạn đúng <span className="text-green-600 font-bold">{score}</span>/{questions.length} câu.
            </div>

            <button
              className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={resetQuiz}
            >
              Làm lại Quiz
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default QuizPage;
