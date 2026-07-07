import { LEARN_STEPS } from "../data";
import { Eye, Search, AlertCircle, Sparkles, ClipboardList } from "lucide-react";

export default function WhatYouWillLearn() {
  // Map icons to each step to enhance visual structure professionally
  const stepIcons = [
    <Eye className="w-6 h-6 text-violet-600" />,
    <Search className="w-6 h-6 text-turquesa" />,
    <AlertCircle className="w-6 h-6 text-rose-500" />,
    <Sparkles className="w-6 h-6 text-fucsia" />,
    <ClipboardList className="w-6 h-6 text-naranja" />
  ];

  // Map left-borders and colors for each step to give it a rich professional feel
  const stepBorderColors = [
    "border-l-4 border-[#7C3AED]",
    "border-l-4 border-[#14B8A6]",
    "border-l-4 border-[#F97316]",
    "border-l-4 border-[#D946EF]",
    "border-l-4 border-[#4C1D95]"
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 border-b border-purple-50" id="aprendizaje">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title block */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-violet-600 font-bold bg-violet-50 px-3 py-1.5 rounded-full inline-block">
            Paso a Paso
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight">
            Lo que vas a aprender
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Una ruta de 5 pasos diseñada para equiparte con conocimientos aplicables de inmediato, desde el reconocimiento inicial hasta la ejecución de tu propio plan de apoyo.
          </p>
        </div>

        {/* Banner: Después de leer esto vas a poder... */}
        <div className="bg-white rounded-3xl border border-purple-100/80 border-l-8 md:border-l-[16px] border-[#7C3AED] shadow-xs p-6 md:p-10 space-y-6 text-left max-w-4xl mx-auto my-8">
          <div className="space-y-2">
            <span className="text-xs md:text-sm font-black uppercase tracking-wider text-[#7C3AED] block">
              Esto no es solo una guía
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-purple-950 tracking-tight leading-snug">
              Después de leer esto vas a poder...
            </h3>
          </div>

          <ul className="space-y-3.5 text-sm md:text-base text-gray-700 font-semibold pl-1">
            {[
              "Identificar las 5 señales tempranas antes de que llegue el colapso",
              "Dejar de confundir neurofatiga con conducta desafiante",
              "Saber exactamente qué hacer (y qué NO hacer) cuando aparecen",
              "Intervenir desde la comprensión, no desde la reacción"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] flex-shrink-0 mt-2"></span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm md:text-base text-gray-600 font-medium border-t border-purple-50 pt-5 leading-relaxed">
            Esta guía es para ti padre, madre o profesional que deseas reconocer señales tempranas para prevenir una neurofatiga en una persona dentro del espectro autista.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="relative border-l border-purple-100 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 py-4">
          {LEARN_STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Dot / Number Badge on the left timeline line */}
              <div className="absolute -left-12.5 md:-left-16.5 top-0.5 w-9 h-9 rounded-full bg-white border-2 border-purple-200 text-purple-800 flex items-center justify-center font-black text-xs shadow-sm group-hover:border-violet-500 group-hover:bg-violet-50 transition-colors">
                {idx + 1}
              </div>

              {/* Step Card */}
              <div className={`space-y-3 bg-[#FAF7FF] p-6 rounded-r-3xl rounded-l-none ${stepBorderColors[idx]} shadow-sm hover:shadow-md transition-all duration-300`}>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-black uppercase tracking-wider text-violet-600">
                    {step.numero}
                  </span>
                  <span className="text-gray-300 hidden sm:inline">•</span>
                  <div className="p-1 rounded-md bg-white border border-purple-50">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-purple-950 tracking-tight">
                  {step.titulo}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                  {step.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Section matching the new smartphone mockup */}
        <div className="bg-[#FAF7FF] rounded-[32px] p-6 md:p-10 border border-purple-100/50 shadow-xs mt-16 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Image Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
              {/* Soft glow background */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-fucsia to-violet-600 rounded-[32px] opacity-15 blur-lg group-hover:opacity-25 transition-all"></div>
              
              {/* Phone image container */}
              <div className="relative bg-[#1E0F33] rounded-[32px] p-2.5 shadow-xl border border-purple-950/20 overflow-hidden">
                <img
                  src="/src/assets/images/mockup_video_app_1783464885227.jpg"
                  alt="Videos del App Antes del Colapso"
                  className="w-full rounded-[24px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Video Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-fucsia bg-fucsia/10 px-3 py-1.5 rounded-full inline-block">
                Clases en Video Incluidas
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-purple-950 tracking-tight leading-tight">
                Neurofatiga, Shutdown y Burnout
              </h3>
              <p className="text-xs uppercase font-extrabold tracking-widest text-[#7C3AED]">
                Antes del Colapso • Video 1
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-sm md:text-base leading-relaxed font-semibold text-gray-600">
                En este primer video entenderás las diferencias fundamentales entre neurofatiga, shutdown y burnout: tres estados que muchas familias confunden y que marcan el verdadero inicio de una crisis.
              </p>

              {/* Time Indicator Card */}
              <div className="bg-white p-4 rounded-xl border border-purple-100/60 flex items-center gap-3 text-[#7C3AED]">
                <div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100 shadow-2xs">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="text-xs">
                  <p className="font-bold text-purple-950">Duración del Video</p>
                  <p className="text-purple-600 font-extrabold">12:45 min de contenido al grano</p>
                </div>
              </div>

              {/* Bullet Points of Learning */}
              <div className="bg-white p-5 rounded-2xl border border-purple-100/50 shadow-2xs space-y-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                  Lo que aprenderás:
                </span>
                <div className="space-y-2.5">
                  {[
                    "Qué es la neurofatiga y cómo identificarla antes de que se acumule.",
                    "Qué ocurre exactamente en el cerebro durante un shutdown emocional.",
                    "Cómo el burnout crónico afecta el sistema nervioso de tu hijo a largo plazo.",
                    "Por qué es una clave de supervivencia familiar reconocer cada estado a tiempo."
                  ].map((bullet, bidx) => (
                    <div key={bidx} className="flex gap-2.5 items-start text-xs font-bold text-gray-700">
                      <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
