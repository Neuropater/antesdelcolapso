import { STRIPE_LINK } from "../data";
import { Sparkles, ArrowRight, ShieldCheck, Video, Smartphone } from "lucide-react";

export default function Hero() {
  // Let's use the exact generated logo and mockup paths
  const mockupPath = "/src/assets/images/mockup_guia_colapso_1783464170841.jpg";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1E0F33] via-[#3B115A] to-[#4C1D95] text-white pt-24 pb-20 px-4 md:px-8" id="hero">
      {/* Background soft glow accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-fucsia/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/10 right-1/10 w-96 h-96 bg-turquesa/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Floating Header Branding */}
      <div className="absolute top-0 left-0 right-0 py-6 px-4 md:px-8 border-b border-white/5 bg-slate-950/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base font-black tracking-wider text-white uppercase">
              Neuropaternidad Positiva LLC
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
              Acceso Inmediato Disponible
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
        {/* Left Column (Content) */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left animate-fade-in">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-purple-200 font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-fucsia" />
            <span>Método Práctico para Familias Neurodivergentes</span>
          </div>

          {/* Main Titles */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Antes del Colapso
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-turquesa via-fucsia to-naranja leading-normal">
              Aprende qué hacer antes de que tu hijo llegue al límite.
            </h2>
          </div>

          {/* Emotional Pitch Paragraph */}
          <p className="text-base md:text-lg text-purple-100/90 leading-relaxed font-normal">
            Descubre cómo reconocer las señales tempranas de una crisis en niños con{" "}
            <span className="text-white font-semibold underline decoration-turquesa decoration-2 underline-offset-4">
              Autismo, TDAH, PDA, dificultades sensoriales
            </span>{" "}
            u otras condiciones del neurodesarrollo — incluso si ahora mismo sientes que cada episodio te toma por sorpresa, te agota y te deja con culpa.
          </p>

          <p className="text-sm md:text-base text-purple-200 font-medium leading-relaxed">
            Una guía práctica con videos inmediatos para entender qué está pasando, qué evitar y cómo responder antes de que la situación escale.
          </p>

          {/* Value Stack Mini Badge list */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl p-2.5">
              <ShieldCheck className="w-5 h-5 text-turquesa" />
              <span className="text-xs font-semibold text-purple-100">Guía Práctica</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl p-2.5">
              <Video className="w-5 h-5 text-fucsia" />
              <span className="text-xs font-semibold text-purple-100">Videos de Apoyo</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl p-2.5">
              <Smartphone className="w-5 h-5 text-naranja" />
              <span className="text-xs font-semibold text-purple-100">App de Bono</span>
            </div>
          </div>

          {/* Offer & CTA Box */}
          <div className="pt-4 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="bg-purple-900/40 border border-purple-500/20 rounded-2xl px-5 py-3 text-left">
                <span className="text-[10px] uppercase tracking-widest text-purple-300 block font-bold">
                  VALOR TOTAL
                </span>
                <p className="text-sm text-purple-200 font-medium">
                  Guía + videos + app de bono por solo{" "}
                  <span className="text-2xl font-black text-white">$41</span>
                </p>
              </div>
            </div>

            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-fucsia via-pink-500 to-naranja text-white font-extrabold text-lg px-8 py-4.5 rounded-2xl shadow-xl shadow-fucsia-500/20 hover:shadow-fucsia-500/40 hover:scale-102 hover:brightness-105 active:scale-98 transition-all duration-300"
              id="btn-hero-cta"
            >
              <span>Quiero acceder ahora</span>
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </a>

            <div className="flex items-center gap-2.5 text-xs text-purple-300">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-turquesa animate-pulse"></span>
              <p>Pago seguro certificado · Acceso digital e inmediato</p>
            </div>
          </div>
        </div>

        {/* Right Column (Visual Mockup Container) */}
        <div className="lg:col-span-5 flex justify-center items-center relative animate-fade-in-up mt-4 lg:mt-0">
          <div className="relative">
            {/* Soft decorative background circles */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-fucsia to-turquesa rounded-[32px] opacity-20 blur-xl"></div>
            
            {/* The main Ebook mockup image */}
            <div className="relative bg-gradient-to-b from-[#251042] to-[#130725] rounded-[24px] p-4 shadow-2xl border border-white/10 max-w-[280px] md:max-w-[320px]">
              <img
                src={mockupPath}
                alt="Mockup Guía Antes del Colapso"
                className="w-full rounded-xl object-contain shadow-lg hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              {/* Overlay sticker */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-naranja to-fucsia text-white font-black text-xs px-4 py-2.5 rounded-full shadow-lg border border-white/10 uppercase tracking-widest animate-bounce">
                Guía + Videos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
