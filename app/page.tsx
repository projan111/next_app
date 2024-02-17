import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <div className="relative h-full">
        <Navbar />
        <div className="card absolute z-20 flex flex-col items-center w-full h-[100vh] justify-center">
          <span className="font-bold uppercase text-[#333] text-5xl rounded-full flex flex-col items-center text-center justify-center">
            Welcome to Simotap
          </span>
          <p className="text-xl font-medium text-black leading-10 uppercase tracking-widest felx justify-center text-center items-center py-2">
            We&apos;re Undermaintenance
          </p>
          {/* <Image
            src={under}
            alt="under-main"
            height={200}
            className="opacity-50 rounded-lg backdrop-blur-sm"
          /> */}
        </div>
        <BackgroundGradientAnimation />
      </div>
    </main>
  );
}
