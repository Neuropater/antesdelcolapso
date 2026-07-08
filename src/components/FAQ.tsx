import { useState } from "react";
import { FAQs, FAQItem } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-8 border-b border-purple-50" id="preguntas-frecuentes">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-violet-600 font-bold bg-violet-50 px-3 py-1.5 rounded-full inline-block">
            Soporte y Claridad
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
            ¿Tienes alguna duda sobre el contenido, el formato o el acceso? Encuentra aquí las respuestas rápidas.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQs.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FAF7FF] rounded-2xl border border-purple-100/40 overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-semibold text-purple-950 hover:bg-purple-100/10 active:scale-99 transition-all"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-violet-600 flex-shrink-0" />
                    <span className="text-sm md:text-base font-extrabold leading-snug">
                      {faq.pregunta}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-violet-600" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-purple-100/30" : "max-h-0"
                  }`}
                >
                  <div className="p-5 md:p-6 bg-white">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-semibold">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
