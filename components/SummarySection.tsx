import { CheckCircle2, XCircle, Heart } from "lucide-react";

export default function SummarySection() {
  const targetAudience = [
    "Padres, madres y cuidadores que están cansados de vivir apagando fuegos.",
    "Quienes sienten que aman profundamente a su hijo, pero muchas veces no saben qué hacer cuando la conducta escala.",
    "Familias de niños con Autismo, TDAH, PDA, dificultades sensoriales, discapacidad intelectual u otras condiciones del neurodesarrollo que necesitan una guía práctica, clara y humana."
  ];

  const doNotNeed = [
    "Ser terapeuta.",
    "Saber neurociencia.",
    "Tener todas las respuestas.",
    "Hacerlo perfecto.",
    "Esperar a que todo explote para buscar ayuda."
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 border-b border-purple-50" id="resumen">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-violet-600 font-bold bg-violet-50 px-3 py-1.5 rounded-full inline-block">
            Resumen de Propósito
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight">
            ¿Es esto para ti?
          </h2>
        </div>

        {/* Audience Checklist */}
        <div className="space-y-6">
          <h3 className="text-lg md:text-xl font-bold text-purple-950 text-center">
            Antes del Colapso es para...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetAudience.map((text, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7FF] p-6 rounded-3xl border border-purple-100/40 space-y-4 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                  <Heart className="w-5 h-5 fill-violet-600" />
                </div>
                <p className="text-sm md:text-base font-semibold text-purple-950/90 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What you don't need vs what you do need */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-6">
          
          {/* Column: No necesitas */}
          <div className="bg-rose-50/30 p-6 md:p-8 rounded-[32px] border border-rose-100/40 space-y-5">
            <h3 className="text-base font-extrabold text-rose-700 uppercase tracking-wider">
              No necesitas:
            </h3>
            <div className="space-y-3">
              {doNotNeed.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mt-0.5">
                    <XCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-rose-950/80">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column: Sí necesitas */}
          <div className="bg-emerald-50/20 p-6 md:p-8 rounded-[32px] border border-emerald-100/30 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-base font-extrabold text-emerald-700 uppercase tracking-wider">
                Solo necesitas:
              </h3>
              <p className="text-lg md:text-xl font-extrabold text-purple-950 leading-relaxed">
                Una guía clara para empezar a observar, entender y responder mejor.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 p-4 bg-white rounded-2xl border border-emerald-100">
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                Nuestra misión no es complicar tu rutina con teorías extensas, sino simplificarla con pasos humanos y respetuosos que protejan tu paz mental y el bienestar de tu hijo.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
