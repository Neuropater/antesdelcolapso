import { Heart, Sparkles } from "lucide-react";

export default function TrustMessage() {
  const promises = [
    "Que puedas reconocer señales antes.",
    "Que entiendas mejor qué puede estar pasando.",
    "Que evites respuestas que empeoran el momento.",
    "Que tengas herramientas para acompañar con más calma.",
    "Que dejes de sentir que estás improvisando en cada crisis."
  ];

  return (
    <section className="bg-[#FAF7FF] py-20 px-4 md:px-8 border-b border-purple-100/50" id="confianza">
      <div className="max-w-3xl mx-auto space-y-10 text-center">
        
        {/* Heart icon separator */}
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 animate-pulse">
            <Heart className="w-6 h-6 fill-pink-500" />
          </div>
        </div>

        {/* Headings */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight">
            No necesitas hacerlo perfecto.
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-fucsia">
            Necesitas saber por dónde empezar.
          </h3>
        </div>

        {/* Realistic promise box */}
        <div className="bg-white p-6 md:p-8 rounded-[32px] border border-purple-100/60 shadow-xs text-left space-y-6">
          <div className="border-b border-purple-50 pb-4">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
              Lo que realmente vas a conseguir:
            </p>
            <p className="text-lg font-bold text-purple-950 mt-1">
              Esta guía no promete que nunca más habrá una crisis. Promete algo más real:
            </p>
          </div>

          <div className="space-y-3.5">
            {promises.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-turquesa/10 flex items-center justify-center text-turquesa mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-turquesa"></span>
                </div>
                <p className="text-sm md:text-base font-semibold text-gray-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional conclusion */}
        <div className="space-y-4 max-w-xl mx-auto pt-4">
          <p className="text-xl md:text-2xl font-extrabold text-purple-950 leading-snug">
            “Tu hijo no necesita un adulto perfecto. Necesita un adulto que pueda entender mejor lo que su conducta intenta comunicar.”
          </p>
          <div className="flex justify-center gap-1.5 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-fucsia" />
            <span>Abordaje basado en el respeto y la dignidad</span>
          </div>
        </div>

      </div>
    </section>
  );
}
