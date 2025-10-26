import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

const QAPage = () => {
  const [question, setQuestion] = useState("");
  const [group, setGroup] = useState("");
  const [questions, setQuestions] = useState<
    { id: string; text: string; group: string; createdAt: Timestamp }[]
  >([]);

  // 🟢 Lấy danh sách câu hỏi realtime từ Firestore
  useEffect(() => {
    const q = query(collection(db, "questions"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setQuestions(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          group: doc.data().group || "",
          createdAt: doc.data().createdAt,
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  // 🟢 Gửi câu hỏi mới
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (question.trim() && group.trim()) {
      await addDoc(collection(db, "questions"), {
        text: question,
        group: group,
        createdAt: Timestamp.now(),
      });
      setQuestion("");
    }
  };

  // 🟢 Xoá câu hỏi
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xoá câu hỏi này không?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "questions", id));
    } catch (error) {
      console.error("Lỗi khi xoá câu hỏi:", error);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#f4f7ff] flex flex-col items-center pt-32 px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-2xl flex flex-col items-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-[#2a2e6e] drop-shadow-lg">
          Q&A
        </h1>

        {/* form nhập câu hỏi */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xl gap-2 mb-8"
        >
          <input
            type="text"
            className="w-1/3 border rounded-lg px-4 py-3"
            placeholder="Tên nhóm..."
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          />
          <input
            type="text"
            className="flex-1 border rounded-lg px-4 py-3"
            placeholder="Nhập câu hỏi..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#3a3f8f] text-white px-6 py-3 rounded-lg hover:bg-[#2a2e6e] transition"
          >
            Gửi
          </button>
        </motion.form>

        {/* danh sách câu hỏi */}
        <motion.div className="w-full max-w-xl">
          {questions.length === 0 && (
            <p className="text-gray-500 text-center mt-8">Chưa có câu hỏi nào.</p>
          )}

          <AnimatePresence>
            {questions.map((q) => {
              const date = q.createdAt?.toDate
                ? q.createdAt.toDate().toLocaleString("vi-VN")
                : "";

              return (
                <motion.div
                  key={q.id}
                  className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-5 mb-3 shadow-lg"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-800 text-lg font-medium mb-1">
                        {q.text}
                      </p>
                      <p className="text-sm text-gray-500">Nhóm: {q.group}</p>
                      <p className="text-xs text-gray-400 mt-1">{date}</p>
                    </div>

                    {/* 🗑 Nút xoá */}
                    <button
                      onClick={() => handleDelete(q.id)}
                      className="ml-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm shadow transition"
                      title="Xoá câu hỏi"
                    >
                      Xoá
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default QAPage;
