import { HelpCircle, AlertTriangle, Lightbulb, Compass } from "lucide-react";

export default function ProductExplanation() {
  return (
    <section className="bg-[#FAF7FF] py-20 px-4 md:px-8 border-b border-purple-100/30" id="explicacion">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-fucsia font-bold bg-fucsia/10 px-3 py-1.5 rounded-full inline-block">
            Detrás de la Conducta
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight">
            ¿Por qué nace esta guía?
          </h2>
        </div>

        {/* Narrative Flow */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-base md:text-lg">
          
          {/* Box 1 */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-100/40 shadow-xs space-y-4">
            <div className="flex items-center gap-3 text-violet-600">
              <HelpCircle className="w-6 h-6" />
              <h3 className="text-lg md:text-xl font-bold text-purple-950">
                Esto no es otra guía llena de teoría difícil
              </h3>
            </div>
            <p className="font-medium text-gray-600">
              <span className="text-purple-900 font-bold">Antes del Colapso</span> es una herramienta directa, práctica y creada para padres, madres y cuidadores que necesitan saber qué hacer cuando sienten que una crisis viene en camino.
            </p>
          </div>

          {/* Deep Insight Highlight */}
          <div className="border-l-4 border-fucsia pl-6 md:pl-8 py-2 space-y-4">
            <p className="text-xl md:text-2xl font-extrabold text-purple-950 tracking-tight leading-snug">
              "Porque muchas veces la crisis no empieza cuando tu hijo grita, se tira al piso, empuja, llora, huye o se encierra."
            </p>
            <p className="text-lg md:text-xl font-bold text-fucsia">
              Empieza antes.
            </p>
          </div>

          {/* The "When it starts" block */}
          <div className="bg-gradient-to-br from-[#FAF7FF] to-white p-6 md:p-8 rounded-3xl border border-purple-100/40 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Empieza cuando...</h4>
            <ul className="space-y-3">
              {[
                "Su cuerpo ya está cansado.",
                "El ruido le pesa.",
                "La transición fue demasiado.",
                "La demanda fue muy alta.",
                "El hambre, el dolor, el sueño o la frustración ya están activando su sistema nervioso."
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-purple-950">
                  <span className="w-2 h-2 rounded-full bg-fucsia"></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Problem Block */}
          <div className="bg-rose-50/50 p-6 md:p-8 rounded-3xl border border-rose-100/30 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-lg md:text-xl font-extrabold text-purple-950">
                El problema es que muchos adultos no aprendieron a leer esas señales
              </h3>
            </div>
            <p className="font-semibold text-rose-950/80">Entonces reaccionan tarde:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { verb: "Corregir", desc: "cuando el niño ya no puede escuchar." },
                { verb: "Explicar", desc: "cuando el cerebro ya está en supervivencia." },
                { verb: "Amenazar", desc: "cuando lo que el niño necesita es bajar la carga." },
                { verb: "Insistir", desc: "cuando el cuerpo ya llegó al límite." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-rose-100/20 shadow-xs">
                  <span className="text-xs uppercase tracking-widest text-rose-600 font-bold block mb-1">
                    {item.verb}
                  </span>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Perspective Shift */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-100/40 shadow-xs space-y-4">
            <div className="flex items-center gap-3 text-turquesa">
              <Lightbulb className="w-6 h-6" />
              <h3 className="text-lg md:text-xl font-bold text-purple-950">
                Mirar la conducta desde otra perspectiva
              </h3>
            </div>
            <p className="text-gray-600 font-medium">
              Esta guía te ayuda a mirar la conducta desde otra perspectiva. No para justificarlo todo, no para permitirlo todo, no para vivir sin límites. Sino para <span className="text-purple-900 font-bold underline decoration-turquesa">entender qué está pasando antes de responder</span>.
            </p>
          </div>

          {/* Summary Box */}
          <div className="bg-gradient-to-r from-purple-900 to-violet-900 text-white p-6 md:p-10 rounded-3xl shadow-xl space-y-6 text-center">
            <div className="flex justify-center text-turquesa">
              <Compass className="w-10 h-10 animate-spin-slow" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-purple-200">
                <span>Sin teoría vacía</span>
                <span>•</span>
                <span>Sin lenguaje complejo</span>
                <span>•</span>
                <span>Sin consejos genéricos</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">El objetivo es uno solo:</h3>
            </div>
            <p className="text-lg md:text-xl font-bold text-turquesa bg-slate-950/30 py-3.5 px-6 rounded-2xl max-w-xl mx-auto inline-block">
              Que llegues a la próxima situación con más claridad, más calma y un plan.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
