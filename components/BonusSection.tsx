import AppSimulator from "./AppSimulator";
import { Check, Sparkles } from "lucide-react";

export default function BonusSection() {
  const mockupAppPath = "/src/assets/images/mockup_app_asistente_1783464182689.jpg";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#D946EF] text-white py-20 px-4 md:px-8" id="bono">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-turquesa/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-purple-100 font-bold tracking-wider">
            <Sparkles className="w-4 h-4 text-turquesa" />
            <span>ACCESO INCLUIDO COMPLETAMENTE GRATIS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Bono incluido — App Asistente Anti-Crisis
          </h2>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Features checklist */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-semibold">
              Al comprar Antes del Colapso, también recibes acceso al App Asistente Anti-Crisis.
            </p>

            <div className="bg-slate-950/20 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-purple-200">
                Creado para esos momentos donde dices:
              </p>
              <p className="text-xl md:text-2xl font-extrabold italic text-white tracking-tight">
                “Esto está escalando y no sé qué hacer.”
              </p>
              <p className="text-sm text-purple-200 leading-relaxed font-medium">
                La app te ayuda a analizar la situación, identificar qué puede estar activando la crisis y recibir pasos prácticos para saber qué hacer y qué evitar.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-turquesa font-bold">
                Con el App Asistente Anti-Crisis podrás:
              </h4>

              <div className="space-y-3.5">
                {[
                  "Analizar una situación difícil en segundos.",
                  "Identificar posibles detonantes detrás de la conducta.",
                  "Ver qué puede estar pasando en el cuerpo y sistema nervioso de tu hijo.",
                  "Saber qué evitar para no empeorar el momento.",
                  "Recibir pasos prácticos para responder con más calma, conexión y estructura."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-turquesa border border-white/10">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm md:text-base font-semibold text-white/90">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="bg-[#1E0F33]/40 border border-purple-400/20 rounded-2xl p-4 inline-block text-left">
                <span className="text-[10px] uppercase tracking-widest text-purple-300 block font-bold">
                  VALOR DE MERCADO: $49
                </span>
                <p className="text-sm md:text-base font-bold text-white">
                  Valor del bono: <span className="text-turquesa font-black">incluido hoy con tu compra</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile Phone Mockup and Interactive Simulator */}
          <div className="lg:col-span-6 space-y-8 flex flex-col items-center">
            
            {/* The phone mockup frame alongside the simulator */}
            <div className="w-full">
              {/* Interactive Widget Header */}
              <div className="text-center mb-4">
                <span className="text-xs uppercase tracking-widest text-turquesa font-black">
                  ⚡ PROBADOR VIRTUAL DE LA APP
                </span>
                <p className="text-[11px] text-purple-200 font-medium">Prueba la demo interactiva aquí abajo:</p>
              </div>

              {/* Real Simulator */}
              <AppSimulator />
            </div>

            {/* Static Mockup Image */}
            <div className="bg-slate-950/20 p-4 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center gap-6 max-w-md w-full">
              <div className="w-24 sm:w-28 flex-shrink-0">
                <img
                  src={mockupAppPath}
                  alt="App Asistente Anti-Crisis Mockup"
                  className="w-full rounded-2xl object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-white">Bono 100% Digital</h4>
                <p className="text-xs text-purple-200">
                  Adaptado a teléfonos móviles, tablets y computadoras para consultas instantáneas en casa o en la escuela.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
