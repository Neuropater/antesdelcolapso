import { STRIPE_LINK } from "../data";
import { Check, ShieldCheck, Lock, CreditCard } from "lucide-react";

export default function OfferSection() {
  const mockupPath = "/src/assets/images/mockup_guia_colapso_1783464170841.jpg";

  const inclusions = [
    "Guía digital “Antes del Colapso”",
    "Videos paso a paso",
    "Herramientas prácticas para usar en casa",
    "Ejemplos claros para situaciones reales",
    "Bono: App Asistente Anti-Crisis",
    "Acceso inmediato",
    "Lenguaje simple, directo y fácil de aplicar"
  ];

  return (
    <section className="bg-[#FAF7FF] py-24 px-4 md:px-8 border-b border-purple-100" id="oferta">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        
        {/* Title block */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-violet-600 font-bold bg-violet-50 px-3 py-1.5 rounded-full inline-block">
            Oferta Especial por Lanzamiento
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-purple-950 tracking-tight leading-none">
            Hoy puedes tener acceso inmediato a Antes del Colapso
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Una sola guía, videos prácticos, un bono digital y una ruta clara para saber qué hacer antes de que la situación llegue al límite.
          </p>
        </div>

        {/* Highlighted Clean Checkout Card */}
        <div className="bg-white rounded-[32px] border border-purple-100/80 shadow-[0_20px_50px_rgba(76,29,149,0.08)] overflow-hidden max-w-3xl mx-auto text-left grid grid-cols-1 md:grid-cols-12 animate-fade-in">
          
          {/* Left Column: Product Info & Inclusions */}
          <div className="p-8 md:p-10 md:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-fucsia">
                PAQUETE COMPLETO ACCESO DE POR VIDA
              </span>
              <h3 className="text-2xl font-extrabold text-purple-950 tracking-tight">
                Antes del Colapso
              </h3>
            </div>

            {/* Inclusions checklist */}
            <div className="space-y-3.5">
              {inclusions.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-turquesa/10 flex items-center justify-center text-turquesa mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-purple-50">
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                El precio de una salida sencilla, pero con herramientas que puedes usar cada vez que sientas que una crisis viene en camino.
              </p>
            </div>
          </div>

          {/* Right Column: Checkout Pricing */}
          <div className="bg-gradient-to-b from-[#FAF7FF] to-white p-8 md:p-10 md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-purple-100/50 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex justify-center md:justify-start">
                <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Un solo pago
                </span>
              </div>

              {/* Price Tag */}
              <div className="space-y-1">
                <span className="text-xs text-gray-400 font-semibold line-through">
                  Valor Regular: $97
                </span>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-5xl font-black text-purple-950 tracking-tight">
                    $41
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    USD
                  </span>
                </div>
              </div>
            </div>

            {/* Checkout CTA */}
            <div className="space-y-4 mt-8 md:mt-0">
              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-fucsia-600 text-white font-extrabold text-sm md:text-base px-6 py-4 rounded-2xl shadow-lg shadow-violet-500/20 hover:scale-102 hover:shadow-violet-500/35 transition-all duration-300"
                id="btn-offer-cta"
              >
                <span>Quiero Antes del Colapso por $41</span>
              </a>

              {/* Microcopy below */}
              <p className="text-[10px] md:text-xs text-gray-400 font-semibold leading-relaxed text-center">
                Pago seguro · Acceso inmediato · Guía + videos + bono incluido
              </p>
            </div>
          </div>

        </div>

        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-gray-500 font-semibold">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-purple-600" />
            <span>Encriptación SSL de 256 bits</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CreditCard className="w-4 h-4 text-purple-600" />
            <span>Pago Seguro vía Stripe</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Garantía de Satisfacción</span>
          </div>
        </div>

      </div>
    </section>
  );
}
