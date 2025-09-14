import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QuestionSection = () => {
  const data = [
    {
      id: 1,
      question: "Apa itu layanan internet yang kami tawarkan?",
      answer:
        "Kami menyediakan layanan internet berkecepatan tinggi untuk kebutuhan rumah, bisnis, dan institusi dengan jaringan fiber optik yang stabil dan handal.",
    },
    {
      id: 2,
      question: "Bagaimana cara berlangganan layanan internet?",
      answer:
        "Anda dapat menghubungi tim sales kami melalui WhatsApp, telepon, atau mengisi formulir pendaftaran di website. Tim kami akan mengatur jadwal survei dan instalasi.",
    },
    {
      id: 3,
      question: "Berapa lama proses pemasangan internet?",
      answer:
        "Proses pemasangan biasanya memakan waktu 1–3 hari kerja setelah pendaftaran dan survei lokasi selesai dilakukan.",
    },
    {
      id: 4,
      question: "Apakah kecepatan internet sesuai dengan paket yang dipilih?",
      answer:
        "Ya, kami berkomitmen memberikan kecepatan sesuai paket yang dipilih, dengan performa maksimal melalui jaringan fiber optik kami.",
    },
    {
      id: 5,
      question: "Apakah tersedia layanan dukungan teknis?",
      answer:
        "Tentu, tim teknis kami siap membantu Anda 24/7 jika terjadi kendala jaringan atau gangguan layanan.",
    },
    {
      id: 6,
      question: "Apakah ada batasan kuota (FUP)?",
      answer:
        "Untuk paket tertentu tersedia FUP (Fair Usage Policy), namun kami juga menyediakan paket tanpa batas kuota sesuai kebutuhan Anda.",
    },
  ];

  return (
   <>
    <h2 className="text-xl md:text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-950 to-blue-700 mb-2 md:mb-4">
             Pertanyaan yang Sering Diajukan (FAQ)
           </h2>
    <div className=" w-full p-3 md:max-w-4xl mx-auto py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          {data.map((item) => (
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="hidden md:block">
          <img src="./qna.svg" alt="" />
        </div>
      </div>
    </div>
   </>
  );
};

export default QuestionSection;
