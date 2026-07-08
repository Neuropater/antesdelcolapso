import { AlertOctagon, Undo2, HeartHandshake, HelpCircle } from "lucide-react";

export default function PracticalExample() {
  return (
    <section className="bg-white py-20 px-4 md:px-8 border-b border-purple-50" id="ejemplo-practico">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Title block */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-violet-600 font-bold bg-violet-50 px-3 py-1.5 rounded-full inline-block">
            Caso Real
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight">
            Ejemplo práctico
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Una mirada de cerca a cómo cambia el día a día cuando dejas de reaccionar tarde y empiezas a entender el sistema nervioso.
          </p>
        </div>

        {/* Narrative Intro */}
        <div className="text-center py-4 bg-purple-50/40 rounded-2xl max-w-lg mx-auto border border-purple-100/40">
          <p className="text-lg md:text-xl font-bold text-purple-950">
            Imagina esto...
          </p>
        </div>

        {/* Comparation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Signals */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-purple-100 shadow-xs space-y-5">
            <div className="flex items-center gap-3 text-violet-600 border-b border-purple-50 pb-3">
              <AlertOctagon className="w-5 h-5" />
              <h3 className="text-base font-extrabold text-purple-950 uppercase tracking-wider">
                Las señales iniciales
              </h3>
            </div>
            <p className="text-sm text-gray-500 font-medium">Tu hijo empieza a decir “no” a todo:</p>
            <ul className="space-y-2.5">
              {[
                "Se mueve más.",
                "Contesta más fuerte.",
                "Se tapa los oídos.",
                "Pide escapar.",
                "Llora por algo que parece pequeño.",
                "Se frustra con rapidez.",
                "No tolera una instrucción más."
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-purple-950">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Old way */}
          <div className="bg-rose-50/40 p-6 md:p-8 rounded-3xl border border-rose-100 shadow-xs space-y-5">
            <div className="flex items-center gap-3 text-rose-600 border-b border-rose-100/30 pb-3">
              <Undo2 className="w-5 h-5" />
              <h3 className="text-base font-extrabold text-purple-950 uppercase tracking-wider">
                Antes, tal vez pensabas...
              </h3>
            </div>
            
            <div className="space-y-2">
              {['“Está retando.”', '“Está manipulando.”', '“Solo quiere salirse con la suya.”', '“Tengo que ser más firme.”'].map((quote, idx) => (
                <p key={idx} className="text-sm font-bold text-rose-950/80 italic">
                  {quote}
                </p>
              ))}
            </div>

            <div className="pt-2 border-t border-rose-100/20 space-y-3">
              <p className="text-sm text-gray-600 font-medium">
                Entonces <span className="font-bold text-rose-700">insistías</span>. Y todo terminaba peor:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-rose-950/90">
                <span className="bg-white px-2.5 py-1.5 rounded-lg border border-rose-100">✖ Más gritos</span>
                <span className="bg-white px-2.5 py-1.5 rounded-lg border border-rose-100">✖ Más llanto</span>
                <span className="bg-white px-2.5 py-1.5 rounded-lg border border-rose-100">✖ Más culpa</span>
                <span className="bg-white px-2.5 py-1.5 rounded-lg border border-rose-100">✖ Más cansancio</span>
                <span className="bg-white px-2.5 py-1.5 rounded-lg border border-rose-100 col-span-2 text-center">✖ Sensación de fracaso</span>
              </div>
            </div>
          </div>

          {/* Card 3: New way */}
          <div className="bg-emerald-50/30 p-6 md:p-8 rounded-3xl border border-emerald-100 shadow-xs space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3 text-emerald-600 border-b border-emerald-100/30 pb-3">
              <HeartHandshake className="w-5 h-5" />
              <h3 className="text-base font-extrabold text-purple-950 uppercase tracking-wider">
                El Cambio de Enfoque
              </h3>
            </div>
            
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Pero cuando entiendes lo que pasa antes del colapso, <span className="text-emerald-800 font-extrabold">empiezas a ver otra cosa</span>.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              Empiezas a notar que <span className="text-purple-950 font-bold">su sistema nervioso estaba avisando</span>.
            </p>

            <div className="bg-white p-4 rounded-2xl border border-emerald-100/50 space-y-2">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">La respuesta regulada:</p>
              <p className="text-xs font-semibold text-emerald-950 leading-relaxed">
                Y en vez de esperar a que explote, puedes bajar la demanda, reducir estímulos, validar lo que está pasando y responder con más claridad.
              </p>
            </div>

            <div className="pt-2 border-t border-emerald-100/20 text-xs text-gray-500 font-medium leading-relaxed">
              Eso no significa que desaparezcan todas las crisis. Significa que <span className="text-emerald-800 font-extrabold">tú dejas de entrar a ellas sin herramientas</span>. Y eso cambia mucho.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
