import AppSimulator from "./AppSimulator";
import { Check, Sparkles } from "lucide-react";
import mockupAppPath from "../assets/images/mockup_app_asistente_1783464182689.jpg";

export default function BonusSection() {

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3B115A] via-[#4C1D95] to-[#7C3AED] text-white py-24 px-4 md:px-8" id="bono">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-turquesa/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fucsia/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-turquesa/20 to-fucsia/20 backdrop-blur-md border border-white/20 text-xs text-white font-extrabold tracking-wider shadow-lg animate-pulse">
            <Sparkles className="w-4 h-4 text-turquesa animate-spin" style={{ animationDuration: '3s' }} />
            <span>🎁 BONO EXCLUSIVO — 100% GRATUITO HOY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Tu Co-Piloto en Momentos de Tensión: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquesa to-fucsia">
              App Asistente Anti-Crisis
            </span>
          </h2>
          <p className="text-sm md:text-base text-purple-100/90 max-w-xl mx-auto font-medium">
            La primera herramienta digital interactiva que te guía paso a paso sobre qué decir, qué hacer y qué evitar exactamente durante un desborde emocional.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features checklist */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-semibold">
              Al comprar la guía <span className="text-white font-black underline decoration-turquesa decoration-2 underline-offset-4">Antes del Colapso</span>, también recibes acceso inmediato a esta potente herramienta.
            </p>

            <div className="bg-gradient-to-r from-slate-950/40 to-purple-950/40 p-6 rounded-3xl border border-white/10 space-y-3 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fucsia/10 rounded-full blur-2xl pointer-events-none"></div>
              <p className="text-xs font-bold uppercase tracking-wider text-turquesa">
                Creado para esos momentos de desesperación:
              </p>
              <p className="text-xl md:text-2xl font-black italic text-white tracking-tight">
                “Esto está escalando y no sé qué hacer.”
              </p>
              <p className="text-sm text-purple-200 leading-relaxed font-medium">
                Esta app inteligente analiza la situación en tiempo real, identifica el detonante oculto del desborde y te da la respuesta exacta para restaurar la calma sin gritos ni amenazas.
              </p>
            </div>

            <div className="space-y-5">
              <h4 className="text-xs uppercase tracking-widest text-turquesa font-black">
                Con el App Asistente Anti-Crisis podrás:
              </h4>

              <div className="space-y-4">
                {[
                  { text: "Analizar cualquier crisis o rabieta", bold: " en cuestión de segundos." },
                  { text: "Identificar los detonantes ocultos", bold: " detrás del comportamiento de tu hijo." },
                  { text: "Ver qué ocurre biológicamente", bold: " en su cuerpo y sistema nervioso." },
                  { text: "Saber exactamente qué evitar", bold: " para no encender más el fuego del momento." },
                  { text: "Recibir respuestas listas para usar", bold: " que generen calma, conexión y estructura de inmediato." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-turquesa to-emerald-500 flex items-center justify-center text-slate-950 shadow-md">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm md:text-base text-white/90 leading-snug">
                      <span className="font-bold text-white">{item.text}</span>{item.bold}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#1E0F33]/60 to-[#3B115A]/60 border border-purple-400/30 rounded-2xl p-5 inline-flex flex-col sm:flex-row items-center gap-4 text-left shadow-lg w-full sm:w-auto">
                <div className="text-center sm:text-left">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-rose-500/20 text-rose-300 text-[10px] font-bold uppercase tracking-wider mb-1 border border-rose-500/30">
                    VALOR DE MERCADO: $49.00 USD
                  </span>
                  <p className="text-base md:text-lg font-bold text-white">
                    ¡Por tiempo limitado! <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquesa to-emerald-400 font-black">100% INCLUIDO GRATIS</span> hoy con tu compra de "Antes del Colapso".
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile Phone Mockup and Interactive Simulator */}
          <div className="lg:col-span-6 space-y-8 flex flex-col items-center">
            
            {/* The phone mockup frame alongside the simulator */}
            <div className="w-full">
              {/* Interactive Widget Header */}
              <div className="text-center mb-6 space-y-1">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-turquesa font-black bg-turquesa/10 px-3 py-1 rounded-full border border-turquesa/20">
                  <span className="w-2 h-2 rounded-full bg-turquesa animate-ping"></span>
                  ⚡ DEMO INTERACTIVA EN VIVO
                </span>
                <p className="text-xs text-purple-200 font-medium">
                  Prueba el funcionamiento real del asistente justo aquí abajo:
                </p>
              </div>

              {/* Real Simulator */}
              <AppSimulator />
            </div>

            {/* Static Mockup Image */}
            <div className="bg-slate-950/30 p-4 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center gap-6 max-w-md w-full hover:border-purple-400/40 transition-all duration-300 shadow-xl group">
              <div className="w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <img
                  src={mockupAppPath}
                  alt="App Asistente Anti-Crisis Mockup"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h4 className="text-sm font-black text-white">Acceso Vitalicio & 100% Digital</h4>
                </div>
                <p className="text-xs text-purple-200 leading-relaxed font-medium">
                  Optimizado para celulares, tablets y computadoras. Consúltalo instantáneamente en casa, en la calle o en la escuela de forma rápida.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
