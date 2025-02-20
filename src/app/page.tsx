import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center p-24 w-screen">
      <p className="bg-gradient-to-r from-[#8770ff] to-[#ff7eda] bg-clip-text text-transparent text-5xl text-center">
        Corodomo is under maintenance – We'll be back soon!
      </p>
      <p className="text-center mt-8">Corodomo hiện đang bảo trì – Chúng tôi sẽ sớm quay lại! 🚀</p>
    </main>
  );
}
