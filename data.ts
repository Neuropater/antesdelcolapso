export interface FAQItem {
  id: string;
  pregunta: string;
  respuesta: string;
}

export interface LearnStep {
  numero: string;
  titulo: string;
  descripcion: string;
}

export interface FeatureItem {
  texto: string;
}

export const FAQs: FAQItem[] = [
  {
    id: "faq-1",
    pregunta: "¿Qué recibo al comprar?",
    respuesta: "Recibes la guía digital Antes del Colapso, videos paso a paso y el bono de acceso al App Asistente Anti-Crisis para apoyarte en momentos de alta carga emocional."
  },
  {
    id: "faq-2",
    pregunta: "¿Es solo para autismo?",
    respuesta: "No. También puede ayudar a familias de niños con TDAH, PDA (Evitación Extrema de la Demanda), dificultades sensoriales, discapacidad intelectual y otras condiciones del neurodesarrollo que experimentan sobrecarga en su sistema nervioso."
  },
  {
    id: "faq-3",
    pregunta: "¿Esto sustituye terapia?",
    respuesta: "No. Es una herramienta educativa y práctica para el hogar. No sustituye evaluación, diagnóstico, terapia, tratamiento médico ni intervención profesional individualizada."
  },
  {
    id: "faq-4",
    pregunta: "¿Cuánto tiempo me toma?",
    respuesta: "Está diseñado para trabajarlo de forma simple, con videos y pasos claros de corta duración que puedes ver y aplicar de inmediato en tu rutina en casa."
  },
  {
    id: "faq-5",
    pregunta: "¿El acceso es inmediato?",
    respuesta: "Sí. Inmediatamente después de realizar tu pago seguro, recibirás un correo electrónico con tus datos de acceso para ingresar a todo el contenido digital."
  },
  {
    id: "faq-6",
    pregunta: "¿Qué hace el App Asistente Anti-Crisis?",
    respuesta: "Te ayuda a analizar situaciones difíciles en tiempo real. Al ingresar qué conducta observas, el asistente te guía para identificar posibles detonantes en el sistema nervioso de tu hijo y te ofrece pasos prácticos de qué hacer y qué evitar inmediatamente."
  }
];

export const LEARN_STEPS: LearnStep[] = [
  {
    numero: "Paso 01",
    titulo: "Reconocer cuándo una crisis está comenzando",
    descripcion: "Vas a aprender a identificar señales tempranas en el cuerpo, la voz, la mirada, el movimiento, la tolerancia y la conducta de tu hijo antes de que llegue al punto de explosión."
  },
  {
    numero: "Paso 02",
    titulo: "Entender qué puede estar activando la conducta",
    descripcion: "Vas a mirar posibles detonantes como cansancio, hambre, dolor, ruido, frustración, cambios inesperados, demandas, espera, transición o sobrecarga sensorial."
  },
  {
    numero: "Paso 03",
    titulo: "Saber qué evitar para no empeorar el momento",
    descripcion: "Vas a conocer respuestas comunes que muchos padres hacen con buena intención, pero que pueden escalar la crisis: hablar demasiado, exigir contacto visual, castigar en pleno colapso, amenazar, levantar la voz o seguir aumentando demandas."
  },
  {
    numero: "Paso 04",
    titulo: "Responder con calma y estructura",
    descripcion: "Vas a aprender pasos simples para bajar estímulos, validar, reducir demandas, ofrecer seguridad y acompañar sin perder el control del momento."
  },
  {
    numero: "Paso 05",
    titulo: "Crear tu plan antes del colapso",
    descripcion: "Vas a organizar señales, detonantes, frases útiles, apoyos y acciones para que no tengas que improvisar cada vez que aparece una crisis."
  }
];

export const FEATURES: FeatureItem[] = [
  { texto: "Aprenderás a identificar señales tempranas antes de que la crisis explote." },
  { texto: "Entenderás qué puede estar comunicando la conducta de tu hijo más allá de “se está portando mal”." },
  { texto: "Sabrás qué NO hacer cuando tu hijo ya está sobrecargado y cualquier palabra puede empeorar el momento." },
  { texto: "Tendrás pasos simples para responder con más calma, conexión y claridad." },
  { texto: "Aprenderás a diferenciar entre perreta, meltdown, shutdown, sobrecarga y cansancio." },
  { texto: "Podrás crear un plan básico para actuar antes de que todo termine en gritos, llanto o agotamiento." },
  { texto: "Recibirás videos cortos para aplicar el contenido sin sentir que tienes que estudiar teoría complicada." },
  { texto: "Tendrás acceso al bono App Asistente Anti-Crisis para esos momentos donde necesitas orientación rápida." }
];

// Interactive simulator sample data to make the app assistant interactive & premium!
export interface SimulatorScenario {
  id: string;
  comportamiento: string;
  detonantePosible: string;
  explicacionSistema: string;
  evitar: string;
  hacer: string;
}

export const SIMULATOR_SCENARIOS: SimulatorScenario[] = [
  {
    id: "gritos",
    comportamiento: "Grita, empuja o lanza objetos de repente",
    detonantePosible: "Sobrecarga sensorial o emocional (demasiado ruido, frustración acumulada, transición abrupta).",
    explicacionSistema: "Su cerebro entró en modo de supervivencia (lucha o huida). No puede procesar palabras ni razonamientos lógicos.",
    evitar: "Dar sermones, gritar para que te escuche, amenazar con castigos o exigir contacto visual inmediato.",
    hacer: "Bajar la carga del entorno: reduce ruidos, apaga pantallas. Ponte a su nivel físico, usa pocas palabras con tono suave, y ofrece presencia física segura sin forzar contacto."
  },
  {
    id: "se_tapa_oidos",
    comportamiento: "Se tapa los oídos y se tira al suelo",
    detonantePosible: "Saturación de estímulos auditivos, visuales o cansancio extremo del día escolar.",
    explicacionSistema: "El sistema de procesamiento sensorial colapsó. El ruido normal se siente doloroso o insoportable.",
    evitar: "Obligarlo a permanecer en el lugar, decirle 'no pasa nada' o intentar forzarlo a quitarse las manos de los oídos.",
    hacer: "Retíralo a un espacio más tranquilo. Ofrece audífonos canceladores si tienes. Dile con calma: 'Estás a salvo aquí, voy a apagar el ruido'."
  },
  {
    id: "escapar",
    comportamiento: "Intenta huir, salir corriendo o se encierra en un clóset",
    detonantePosible: "Necesidad urgente de escapar de una demanda excesiva o transición inesperada.",
    explicacionSistema: "Su amígdala cerebral se activó con la respuesta de 'huida'. Busca protegerse aislando su cuerpo.",
    evitar: "Correr tras él gritando, forzar la puerta para abrirla de golpe, o exigir que enfrente la situación de inmediato.",
    hacer: "Asegura el entorno físico para que no corra peligro. Si se encerró en un clóset o rincón seguro, mantente cerca en silencio. Dile de forma suave: 'Aquí estoy cerca si me necesitas. Te daré tu espacio'."
  },
  {
    id: "llanto_pequeno",
    comportamiento: "Llora intensamente por algo aparentemente 'insignificante'",
    detonantePosible: "Agotamiento acumulado. El detonante pequeño fue solo la gota que derramó el vaso (meltdown).",
    explicacionSistema: "Fatiga del sistema nervioso o cansancio extremo tras contenerse mucho tiempo (por ejemplo, al volver a casa).",
    evitar: "Minimizar su dolor diciendo 'es una tontería', corregirlo racionalmente, o decirle que deje de llorar.",
    hacer: "Valida la emoción: 'Sé que es muy difícil para ti ahora mismo. Estoy aquí contigo'. Permite que descargue la tensión llorando mientras lo acompañas con afecto seguro."
  }
];
export const STRIPE_LINK = "https://www.neuropaternidad.com/antesdelcolapso/buy";
