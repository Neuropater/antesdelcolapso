import { STRIPE_LINK } from "../data";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="bg-gradient-to-br from-[#1E0F33] to-[#4C1D95] text-white py-24 px-4 md:px-8 relative overflow-hidden" id="cta-final">
      {/* Soft decorative background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fucsia/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-in">
        <span className="text-xs uppercase tracking-widest text-turquesa font-bold bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/10">
          Decisión y Acción
        </span>

        {/* Closing emotional titles */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Antes de la próxima crisis, prepárate.
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-turquesa to-fucsia">
            No esperes a que todo explote para buscar respuestas.
          </h3>
        </div>

        {/* Descriptive final pitch */}
        <p className="text-sm md:text-base text-purple-100/90 leading-relaxed max-w-xl mx-auto font-medium">
          Aprende a reconocer las señales, entender qué puede estar pasando y responder antes de que tu hijo llegue al límite.
        </p>

        {/* CTA Button Block */}
        <div className="space-y-4 pt-4">
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-fucsia to-naranja text-white font-extrabold text-lg px-8 py-4.5 rounded-2xl shadow-xl shadow-fucsia-500/20 hover:scale-102 hover:brightness-105 active:scale-98 transition-all duration-300"
            id="btn-final-cta"
          >
            <span>Quiero acceder ahora por $41</span>
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </a>

          {/* Required microcopy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-purple-300 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-turquesa" />
              <span>Guía + videos + app de bono</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Acceso inmediato de por vida</span>
          </div>
        </div>

      </div>
    </section>
  );
}
