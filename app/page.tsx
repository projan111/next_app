import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { CardContainer } from "./components/ui/3d-card";
import { SparklesCore } from "./components/ui/sparkles";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="card absolute z-10 flex items-center w-full h-full justify-center">
          <h1 className="font-bold uppercase text-3xl px-5 py-36 rounded-full">
            Welcome to webX
          </h1>
        </div>
        <BackgroundGradientAnimation />
      </div>
    </main>
  );
}
