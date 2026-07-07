import { useState, FormEvent } from "react";
import { Search, BookOpen, Bookmark, Sparkles, BrainCircuit, AlertTriangle, CheckCircle2, ChevronRight, CornerDownRight } from "lucide-react";

interface Scenario {
  id: string;
  triggerText: string;
  escenario: string;
  percibe: string;
  evitar: string;
  hacer: string[];
}

const APP_SCENARIOS: Scenario[] = [
  {
    id: "tarea_lapiz",
    triggerText: "No quiere hacer la tarea y rompió el lápiz",
    escenario: "Sobrecarga por Demandas (Ansiedad)",
    percibe: "Siente tu petición (incluso una simple) como una pérdida total de autonomía. Su sistema nervioso entra en modo de lucha o huida.",
    evitar: "Elevar la voz, amenazar con castigos o forzarlo físicamente a hacerlo.",
    hacer: [
      "Retira la demanda temporalmente. \"Veo que es difícil ahora, pausa de 10 min\".",
      "Cuando retomes, no des órdenes directas, ofrece opciones: \"¿Prefieres ponerte el zapato derecho o el izquierdo primero?\""
    ]
  },
  {
    id: "supermercado",
    triggerText: "Llora sin parar en el supermercado",
    escenario: "Sobrecarga Sensorial (Saturación de Estímulos)",
    percibe: "Las luces brillantes, la multitud y el eco constante saturaron su capacidad de procesamiento. Está experimentando dolor físico por sobreestimulación.",
    evitar: "Dar explicaciones lógicas largas en público, avergonzarlo, obligarlo a calmarse de inmediato o amenazarlo.",
    hacer: [
      "Llévalo a un lugar tranquilo o fuera del establecimiento inmediatamente.",
      "Ofrécele agua o apoyos sensoriales. Valida con voz baja: \"Hay demasiado ruido aquí, ya estamos a salvo\"."
    ]
  },
  {
    id: "encerrado",
    triggerText: "Se encerró en su cuarto y no habla",
    escenario: "Shutdown Emocional (Retraimiento Defensivo)",
    percibe: "Siente que la carga relacional y las demandas son excesivas. Su cerebro se desconecta para autopreservarse de un colapso mayor.",
    evitar: "Forzar la puerta, exigir que hable ahora mismo, reclamarle que ignore tus llamadas o sermonearlo a través de la puerta.",
    hacer: [
      "Dale espacio físico pero mantén presencia silenciosa cerca. Dile: \"Sé que necesitas espacio, aquí estaré cuando estés listo\".",
      "Escríbele una nota corta por debajo de la puerta o reduce los estímulos en el pasillo exterior."
    ]
  }
];

export default function AppSimulator() {
  const [activeTab, setActiveTab] = useState<"sos" | "biblioteca" | "botiquin">("sos");
  const [inputText, setInputText] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [resultScenario, setResultScenario] = useState<Scenario | null>(null);

  const handleQuickSelect = (text: string) => {
    setInputText(text);
  };

  const handleAnalyze = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setAnalyzing(true);
    
    // Simulate a brief analysis delay to feel like a real high-tech app!
    setTimeout(() => {
      // Find matching scenario or default to the first one (tarea_lapiz)
      const found = APP_SCENARIOS.find(s => 
        inputText.toLowerCase().includes(s.triggerText.toLowerCase()) || 
        s.triggerText.toLowerCase().includes(inputText.toLowerCase())
      );
      setResultScenario(found || APP_SCENARIOS[0]);
      setAnalyzing(false);
    }, 850);
  };

  const handleReset = () => {
    setInputText("");
    setResultScenario(null);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-900 rounded-[44px] p-3.5 shadow-2xl border-4 border-slate-800 relative overflow-hidden" id="app-simulator">
      {/* Phone Camera Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-slate-800 rounded-full z-30 flex items-center justify-center">
        <div className="w-10 h-1 bg-slate-700 rounded-full"></div>
      </div>

      {/* Internal Screen Area */}
      <div className="bg-[#FAF7FF] rounded-[32px] overflow-hidden border border-slate-800 flex flex-col h-[580px] text-gray-800 relative shadow-inner">
        
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[10px] font-bold text-slate-500 bg-purple-900 select-none text-white/90 z-20">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span>5G</span>
            <div className="w-5 h-2.5 border border-white/40 rounded-xs p-0.5 flex items-center">
              <div className="w-3.5 h-full bg-white rounded-3xs"></div>
            </div>
          </div>
        </div>

        {/* Real App Header matching user's purple screenshot exactly */}
        <div className="bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white pt-4 pb-6 px-5 text-center relative shadow-md z-10">
          {/* Circular Brain Icon */}
          <div className="mx-auto w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2.5">
            <svg className="w-5.5 h-5.5 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12,3c-4.97,0-9,4.03-9,9c0,2.12,0.74,4.07,1.97,5.61L4.35,19.4c-0.39,0.39-0.39,1.02,0,1.41c0.39,0.39,1.02,0.39,1.41,0 L7.5,19.07C9.31,20.27,11.51,21,14,21c4.97,0,9-4.03,9-9C23,7.03,18.97,3,12,3z M12,19c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7 S15.86,19,12,19z"/>
              <path d="M12,6.5c-3.03,0-5.5,2.47-5.5,5.5s2.47,5.5,5.5,5.5s5.5-2.47,5.5-5.5S15.03,6.5,12,6.5z M12,15.5c-1.93,0-3.5-1.57-3.5-3.5 s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.93,15.5,12,15.5z"/>
            </svg>
          </div>
          
          <h3 className="text-base font-extrabold tracking-tight">Asistente Anti-Crisis</h3>
          <p className="text-[10px] text-purple-100 mt-1 max-w-[280px] mx-auto leading-normal">
            Describe la situación o busca en la biblioteca para saber exactamente qué hacer y qué evitar.
          </p>
        </div>

        {/* Tab Selector Matching Screenshot exactly */}
        <div className="bg-white border-b border-purple-100 flex items-center justify-around text-xs font-bold text-slate-500 z-10">
          <button
            onClick={() => { setActiveTab("sos"); handleReset(); }}
            className={`flex items-center gap-1.5 py-3.5 px-3 border-b-2 transition-all ${
              activeTab === "sos"
                ? "border-[#7C3AED] text-[#7C3AED]"
                : "border-transparent hover:text-slate-700"
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Analizador SOS</span>
          </button>
          
          <button
            onClick={() => setActiveTab("biblioteca")}
            className={`flex items-center gap-1.5 py-3.5 px-3 border-b-2 transition-all ${
              activeTab === "biblioteca"
                ? "border-[#7C3AED] text-[#7C3AED]"
                : "border-transparent hover:text-slate-700"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Biblioteca</span>
          </button>

          <button
            onClick={() => setActiveTab("botiquin")}
            className={`flex items-center gap-1.5 py-3.5 px-3 border-b-2 transition-all ${
              activeTab === "botiquin"
                ? "border-[#7C3AED] text-[#7C3AED]"
                : "border-transparent hover:text-slate-700"
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Botiquín (0)</span>
          </button>
        </div>

        {/* Screen Dynamic Body Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {activeTab === "sos" && (
            <>
              {!resultScenario ? (
                /* MAIN INPUT SCREEN (IMAGE 1) */
                <form onSubmit={handleAnalyze} className="space-y-4 animate-fade-in text-left">
                  <div className="space-y-1">
                    <h4 className="text-xs font-extrabold text-purple-950">
                      ¿Qué está pasando con tu hijo ahora mismo?
                    </h4>
                    <p className="text-[10px] text-gray-400 font-semibold leading-relaxed">
                      Ej: "Llora sin parar en el supermercado", "No quiere hacer la tarea y rompió el lápiz", "Se encerró en su cuarto y no habla".
                    </p>
                  </div>

                  {/* Suggestion Quick Tags */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="text-[9px] font-bold text-purple-400 uppercase tracking-widest">
                      Opciones rápidas para probar:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {APP_SCENARIOS.map((sc) => (
                        <button
                          key={sc.id}
                          type="button"
                          onClick={() => handleQuickSelect(sc.triggerText)}
                          className="text-[10px] font-semibold bg-purple-50 text-purple-800 px-2.5 py-1.5 rounded-lg border border-purple-100 hover:bg-purple-100 active:scale-95 transition-all text-left truncate max-w-full"
                        >
                          ✨ "{sc.triggerText}"
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Textarea Input */}
                  <div className="relative pt-1">
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Escribe aquí la situación..."
                      className="w-full h-24 p-3.5 rounded-xl border-2 border-purple-300 focus:border-fucsia focus:outline-hidden bg-white text-xs font-semibold placeholder:text-gray-400 text-gray-800 shadow-xs transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={analyzing || !inputText.trim()}
                    className="w-full bg-[#B29DF8] hover:bg-violet-600 disabled:bg-purple-200 text-white font-extrabold text-xs py-3 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{analyzing ? "Analizando..." : "Analizar y ver qué hacer"}</span>
                  </button>
                </form>
              ) : (
                /* RESULTS SCREEN (IMAGE 2) */
                <div className="space-y-4 animate-fade-in text-left">
                  
                  {/* Result Header Row */}
                  <div className="flex items-center justify-between border-b border-purple-50 pb-2">
                    <div className="flex items-center gap-1.5 text-purple-900">
                      <svg className="w-4.5 h-4.5 text-[#7C3AED] fill-current" viewBox="0 0 24 24">
                        <path d="M12,3c-4.97,0-9,4.03-9,9c0,2.12,0.74,4.07,1.97,5.61L4.35,19.4c-0.39,0.39-0.39,1.02,0,1.41c0.39,0.39,1.02,0.39,1.41,0 L7.5,19.07C9.31,20.27,11.51,21,14,21c4.97,0,9-4.03,9-9C23,7.03,18.97,3,12,3z"/>
                      </svg>
                      <span className="text-[11px] font-black uppercase tracking-wide">
                        Posible escenario: <span className="text-violet-700">{resultScenario.escenario}</span>
                      </span>
                    </div>

                    <button
                      onClick={handleReset}
                      className="text-[10px] font-bold text-slate-400 hover:text-violet-600 uppercase tracking-widest flex items-center gap-1 active:scale-95 transition-transform"
                    >
                      <span>Nueva consulta</span>
                    </button>
                  </div>

                  {/* Card 1: Lo que su cerebro percibe */}
                  <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-xs space-y-1.5">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                      LO QUE SU CEREBRO PERCIBE
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                      {resultScenario.percibe}
                    </p>
                  </div>

                  {/* Card 2: Qué NO hacer */}
                  <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 shadow-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-rose-600">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        QUÉ NO HACER (EMPEORARÁ LA CRISIS)
                      </span>
                    </div>
                    <p className="text-xs text-rose-950 font-semibold leading-relaxed">
                      {resultScenario.evitar}
                    </p>
                  </div>

                  {/* Card 3: Modo Conexión */}
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 shadow-xs space-y-3">
                    <div className="flex items-center gap-1.5 text-purple-700">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span className="text-[9px] font-black uppercase tracking-widest">
                        MODO CONEXIÓN (QUÉ HACER AHORA)
                      </span>
                    </div>

                    <div className="space-y-3.5 pl-1">
                      {resultScenario.hacer.map((item, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <span className="text-xs font-black text-purple-700 bg-white w-5 h-5 rounded-full flex items-center justify-center border border-purple-200 shadow-2xs flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-xs text-purple-950 font-semibold leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </>
          )}

          {activeTab === "biblioteca" && (
            <div className="animate-fade-in text-center py-10 space-y-4">
              <BookOpen className="w-10 h-10 text-violet-400 mx-auto" />
              <div className="space-y-1">
                <h4 className="text-sm font-extrabold text-purple-950">Biblioteca de Estrategias</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Más de 45 categorías de conductas estructuradas por niveles de sobrecarga listas para consultar.
                </p>
              </div>
              <span className="inline-block text-[10px] font-black bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full uppercase tracking-wider">
                Contenido del Bono
              </span>
            </div>
          )}

          {activeTab === "botiquin" && (
            <div className="animate-fade-in text-center py-10 space-y-4">
              <Bookmark className="w-10 h-10 text-fucsia mx-auto" />
              <div className="space-y-1">
                <h4 className="text-sm font-extrabold text-purple-950">Tu Botiquín SOS</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Guarda tus estrategias de respuesta rápida favoritas para acceder a ellas con un solo toque en momentos críticos.
                </p>
              </div>
              <span className="inline-block text-[10px] font-black bg-fucsia/10 text-fucsia px-3 py-1.5 rounded-full uppercase tracking-wider">
                Personalizable
              </span>
            </div>
          )}

        </div>

        {/* Home Bar Handle Indicator */}
        <div className="h-6 bg-white border-t border-purple-50 flex justify-center items-center pb-1 select-none">
          <div className="w-32 h-1 bg-gray-200 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
