import { FEATURES } from "../data";
import { Check } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white py-20 px-4 md:px-8 border-b border-purple-50/50" id="desbloquear">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-violet-600 font-bold bg-violet-50 px-3 py-1.5 rounded-full inline-block">
            Impacto Directo
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight">
            Lo que vas a desbloquear
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
            Herramientas precisas, estructuradas de forma que puedas asimilarlas rápidamente y empezar a ver cambios reales en la convivencia diaria.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-5 md:p-6 rounded-2xl bg-[#FAF7FF] border border-purple-100/40 shadow-xs hover:shadow-md hover:border-purple-200/50 hover:scale-[1.01] transition-all duration-300"
            >
              {/* Checkbox Icon Circle */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-turquesa/10 flex items-center justify-center text-turquesa border border-turquesa/20">
                <Check className="w-4.5 h-4.5 stroke-[3]" />
              </div>
              
              {/* Text content */}
              <p className="text-sm md:text-base font-semibold text-purple-950/90 leading-relaxed pt-0.5">
                {feature.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
