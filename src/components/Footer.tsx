export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4 md:px-8 border-t border-slate-900 pb-24 md:pb-16" id="footer">
      <div className="max-w-5xl mx-auto space-y-8 text-center md:text-left">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 pb-8 border-b border-slate-900">
          <div className="space-y-2">
            <h4 className="text-sm font-extrabold text-white tracking-widest uppercase">
              Neuropaternidad Positiva LLC
            </h4>
            <p className="text-xs text-slate-500 font-semibold">
              © {currentYear} Antes del Colapso. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
            <a
              href="https://www.neuropaternidad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              www.neuropaternidad.com
            </a>
          </div>
        </div>

        {/* Disclaimer / Aviso importante */}
        <div className="space-y-3 bg-slate-900/40 p-6 rounded-2xl border border-slate-900/60 text-left">
          <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
            Aviso importante:
          </span>
          <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
            Este recurso es educativo y no sustituye servicios médicos, psicológicos, terapéuticos, educativos individualizados ni servicios de emergencia. Si existe riesgo de daño, emergencia médica o crisis severa, busca ayuda profesional inmediata.
          </p>
        </div>

      </div>
    </footer>
  );
}
