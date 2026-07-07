import { STRIPE_LINK } from "../data";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-purple-100 px-4 py-3 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between md:hidden animate-fade-in-up">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Antes del Colapso</span>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-extrabold text-purple-900">$41</span>
          <span className="text-[10px] text-gray-400 font-semibold line-through">$97</span>
        </div>
      </div>
      
      <a
        href={STRIPE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fucsia-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-violet-500/20 active:scale-95 transition-transform"
        id="btn-sticky-cta"
      >
        <span>Acceder por $41</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
