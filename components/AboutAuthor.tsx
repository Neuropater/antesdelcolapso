import { Award, BookOpen, HeartHandshake } from "lucide-react";

export default function AboutAuthor() {
  return (
    <section className="bg-white py-20 px-4 md:px-8 border-b border-purple-50" id="autora">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-violet-600 font-bold bg-violet-50 px-3 py-1.5 rounded-full inline-block">
            Autoridad y Corazón
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight">
            Sobre la autora
          </h2>
        </div>

        {/* Author Card Box */}
        <div className="bg-[#FAF7FF] rounded-[32px] border border-purple-100/40 p-8 md:p-12 shadow-xs max-w-3xl mx-auto text-center space-y-6">
          
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-purple-950 tracking-tight">
              Berenice L. Vázquez Serrano
            </h3>
            <p className="text-xs text-violet-600 font-extrabold uppercase tracking-widest">
              Ed.D(c), MSW • Fundadora de NeuroPaternidad Positiva
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold">
              Berenice es neuroeducadora, especialista en autismo, conducta, disciplina positiva y neurodivergencia. También es madre y adulta autista, por lo que entiende este tema desde la experiencia profesional y personal.
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
              Su trabajo se enfoca en ayudar a familias y profesionales a mirar la conducta desde el cerebro, la conexión, la regulación y la dignidad del niño.
            </p>
          </div>

          {/* Quick Badges of Core Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2.5 bg-white p-3 rounded-xl border border-purple-100/50">
              <BookOpen className="w-5 h-5 text-violet-600 flex-shrink-0" />
              <span className="text-xs font-bold text-purple-950">Neuroeducación</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-white p-3 rounded-xl border border-purple-100/50">
              <Award className="w-5 h-5 text-fucsia flex-shrink-0" />
              <span className="text-xs font-bold text-purple-950">Especialista Autismo</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-white p-3 rounded-xl border border-purple-100/50">
              <HeartHandshake className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" strokeWidth={2} />
              <span className="text-xs font-bold text-purple-950">Dignidad Infantil</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
