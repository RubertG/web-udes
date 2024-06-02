import { STAGES, SYSTEMS_CORPORALS, USABILITY } from '@/const/const'
import { type Application } from '@/types/types'

export const applications: Application[] = [
  {
    description: '<p>El sensor Kinect en terapia es una  herramienta eficaz para ayudar a los pacientes en el movimiento y fortalecimiento, tiene la capacidad de detectar y rastrear el movimiento del cuerpo en tiempo real, tanto el terapeuta como el paciente pueden evaluar la calidad y precisión de los movimientos. Además, el sensor proporciona retroalimentación visual y auditiva instantánea, lo que permite al paciente corregir su postura y movimiento de manera adecuada.</p>',
    technology: 'Software de realidad aumentada producido por Microsoft.',
    stage: [STAGES.MAINTENANCE],
    usability: [USABILITY.THERAPIST],
    accessibility: 'compatible con Windows 10.',
    mode: 'El sensor Kinect puede comprender ejercicios asistidos, monitoreo, seguimiento del progreso, retroalimentación en tiempo real sobre el movimiento.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'Requiere un espacio de juego despejado para funcionar correctamente. La precisión del Kinect puede variar según el entorno y la distancia entre el usuario y el sensor. Además, se requiere cierto nivel de técnica para configurar y usar el Kinect con software de rehabilitación.',
    urls: [{
      name: 'Aplicación de mentor de fisioterapia integrada basada en Kinect para lesiones en el hombro.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1016/j.future.2021.04.003'
    }],
    image: 'sensor-kinect.png',
    name: 'sensor Kinect'
  },
  {
    description: '<p>My Exercise Messages es una aplicación gratuita en Apple App Store y Google Play,diseñada para asistir a personas que padecen osteoartritis. Permite una rutina de ejercicios de manera regular, compatible con cualquier plan de ejercicios recomendado por profesionales de la salud,establece objetivos semanales de ejercicio y recibe recordatorios personalizados para registrar las sesiones de actividad física, la misma funciona rastreando la finalización de las sesiones de ejercicio semanales, proporciona mensajes regulares facilitando el ejercicio semanal y mensajes personalizados en apoyo a superar las barreras individuales para la participación en el ejercicio.</p>',
    technology: 'Software de Inteligencia Artificial',
    stage: [STAGES.DEVELOPMENT],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Accesibles para personas con discapacidad auditiva y baja visión. La aplicación tiene un plan básico de uso gratuito, tiene una interfaz sencilla e intuitiva que facilita la navegación. Está disponible para dispositivos iOS con iOS 11.0 o posterior. Esto incluye iPhones, iPads y iPod touch.',
    mode: 'Comprende ejercicios asitidos y monitoreo remoto, educación en salud, permitiendo  registrar la duración, el tiempo y la intensidad de cada ejercicio, ofrece un seguimiento del progreso mostrando la distancia recorrida, las calorías quemadas y otros indicadores y monitoriza el avance hacia su logro.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'Solo disponible en el idioma ingles y dificultades para usar la aplicación debido a su falta de familiaridad con la tecnología',
    urls: [{
      name: 'Cumplimiento del ejercicio Aplicación móvil para la osteoartritis de rodilla: protocolo para el ensayo controlado aleatorio MappKO.',
      url: 'https://bmcmusculoskeletdisord-biomedcentral-com.ezproxy.udes.edu.co/articles/10.1186/s12891-022-05816-6#citeas:~:text=%2C%20874%20(2022)'
    }, {
      name: 'Descargar cita.',
      url: 'https://doi%2Dorg.ezproxy.udes.edu.co/10.1186/s12891%2D022%2D05816%2D6'
    }],
    image: 'my-exercise-messages.png',
    linksInfoApp: [{
      name: 'Descarga la aplicación en la App Store.',
      url: 'https://apps.apple.com/nz/app/my-exercise-messages/id1529053965'
    }],
    name: 'My Exercise Messages'
  },
  {
    description: '<p>Esta aplicación ofrece una herramienta de medición para evaluar la fuerza, flexibilidad y rango de movimiento de la rodilla, identificando posibles desequilibrios musculares que podrían estar relacionados con el dolor femororrotuliano (PFPS).</p><p>Además, proporciona rutinas de ejercicios adaptadas a cada usuario para fortalecer los músculos  y aumentar la flexibilidad, asimismo, permite monitorear el progreso del paciente a lo largo del tiempo, facilitando un seguimiento detallado de su evolución.</p>',
    technology: 'Software',
    stage: [STAGES.DEVELOPMENT],
    usability: [USABILITY.THERAPIST, USABILITY.PATIENT],
    accessibility: 'No gratuita, prueba gratis. Es compatible con los sistemas operativos Windows, Android o IOS (teléfonos o tabletas) y accesibles para personas con discapacidad auditiva y baja visión.',
    mode: 'Esta aplicación proporciona ejercicios basados en evidencia y monitoreo de forma remota brinda educacion a los usuarios.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'El uso de esta herramienta tiene algunas limitaciones en las cuales se encuentra que los usuarios  prefieren utilizar la aplicación en sus teléfonos móviles y no en el sistema operativo Windows. Además no permite enviar archivos en formato de vídeo lo que imposibilita controlar la exactitud de la realización del ejercicio.',
    urls: [{
      name: 'Desarrollo de una aplicación web progresiva basada en evidencia para promover la terapia con ejercicios y la telemonitorización para personas con síndrome de dolor femororrotuliano: un estudio de usabilidad',
      url: 'https://doi.org/10.5812/semj-126461'
    }],
    image: 'vitoapp.png',
    name: 'Vitoapp'
  },
  {
    description: '<p>La aplicación genera un plan de acción personalizado adaptado a los síntomas y necesidades individuales del usuario, incluye ejercicios de relajación y técnicas de respiración para mejorar la capacidad pulmonar,consejos para manejar la EPOC, así como el seguimiento de los síntomas, facilita el seguimiento manual o mediante dispositivos de salud conectados para registrar síntomas como dificultad para respirar y tos. </p><p>Además, proporciona información sobre la EPOC y su manejo, cuenta con un foro comunitario para que los usuarios se conecten entre sí y reciban apoyo de profesionales de la salud.</p>',
    technology: 'Software de Inteligencia artificial',
    stage: [STAGES.IMPLEMENTATION, STAGES.MAINTENANCE],
    usability: [USABILITY.THERAPIST, USABILITY.PATIENT],
    accessibility: 'No gratuita, prueba gratis requiere de suscripcion mensualAccesible para personas con discapacidad visual o auditiva. Compatible con teléfonos inteligentes y tabletas (iOS y Android) pero no esta disponible para Colombia.',
    mode: 'esta app es especifica para el diagnostico de EPOC el cual comprende ejercicios asistidos,educacion en salud,  retroalimentación sobre los ejercicios de respiración del usuario,seguimiento de sus síntomas.',
    systemsCorporals: [SYSTEMS_CORPORALS.CARDIORESPIRATORY],
    barriers: 'Interfaz de usuario puede no ser intuitiva para todos los usuarios, lo que puede dificultar la navegación y el uso de la aplicación. Se necesita disponer de un dispositivo smartphone con acceso a Internet.',
    urls: [{
      name: 'Digitalización de la rehabilitación pulmonar multidisciplinar en EPOC con una aplicación para smartphones: un estudio piloto observacional internacional',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30538444/'
    }],
    image: 'kaia-copd.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.kaiahealth.copd'
    }],
    name: 'Kaia COPD'
  },
  {
    description: '<p>La aplicación ofrece rutinas diarias de ejercicios para los hombros con instrucciones detalladas, utilizando información precisa sobre el rango de movimiento (ROM) del hombro obtenida a través de tres sensores portátiles, presenta siete series de ejercicios de entrenamiento domiciliario, incluyendo estiramientos específicos para diferentes direcciones de movimiento del hombro,estas rutinas son asignadas como "tareas diarias" por fisioterapeutas o médicos, con demostraciones proporcionadas por un avatar 3D que refleja los movimientos del usuario a través de la información angular de los sensores de movimiento. Cada usuario tiene una cuenta personalizada para acceder a su progreso diario y la finalización de las tareas asignadas.</p>',
    technology: 'Inteligencia artificial Realidad aumentada, internet de las cosas.',
    stage: [STAGES.DEVELOPMENT],
    usability: [USABILITY.THERAPIST, USABILITY.PATIENT],
    accessibility: 'Requiere suscripción premium Limitación para personas con discapacidades cognitivas. La aplicación no es compatible con lectores de pantalla ni con otros dispositivos de asistencia.',
    mode: 'Esta app brinda rehabilitación asistida por sensores de movimiento, Rastrea los movimientos, monitorea los datos registrados por los pacientes.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'aplicación móvil requiere ser utiliza junto con un dispositivo sensor de movimiento para la rehabilitación del hombro. Los movimientos prescritos no deben exceder el rango de detección de Bluetooth. Requiere un área despejada donde el usuario pueda realizar movimientos como doblar la cintura y levantar las piernas Se requiere de mayor espacio para grabaciones en tiempo real dependiendo del ejercicio prescrito.',
    urls: [{
      name: 'Dispositivo de sensor de movimiento portátil para facilitar la rehabilitación en pacientes con capsulitis adhesiva del hombro: estudio piloto para evaluar la viabilidad',
      url: 'https://doi.org/10.2196/17032'
    }],
    image: 'boostfix.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.compal.boostfix_user_mpd_std&hl=es_CO&gl=US'
    }],
    name: 'BoostFix'
  },
  {
    description: '<p>Prognosis monitorea activamente el habla, la escritura y la expresión facial de los pacientes, detecta  disartrofonía y festinación de la lengua,a través del análisis de voz durante llamadas telefónicas, mientras que el uso del teclado revela bradicinesia e hipocinesia, temblor y rigidez,la hipomimia y depresión se evalúa a través de selfies, analizando la expresión facial sin almacenar imágenes. Además, las emociones y el estado de ánimo se evaluan a través de mensajes de texto después de aplicar un esquema de codificación.</p><p> KinetiGraph es un dispositivo de registro de datos que se usa en la muñeca. Es una forma de acelerometría que recoge datos sobre el movimiento, el paciente usa el sensor de la muñeca de la mano más afectada y se recoge una medida cada dos minutos, suministra datos sobre bradicinesia, discinesia y temblores, detecta movimientos tácitos y la retirada del dispositivo desde la muñeca. Compara el rendimiento de los parámetros de pacientes con la función motora de un grupo control sanos.</p>',
    technology: 'Software: Prognosis. KinetiGraph (PKG)',
    stage: [STAGES.DEVELOPMENT],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Disponibilidad especifica bajo consentimiento informado',
    mode: 'Es utilizado para el diagnostico de parkinson, proporciona monitoreo continuo para recopilar datos sobre el movimiento como temblores y rigidez, congelación de la marcha y problemas al caminar, cambios en la expresión facial, bradicinesia y la discinesia, disartrofonía',
    systemsCorporals: [SYSTEMS_CORPORALS.NERVOUS_CENTRAL],
    barriers: 'Última actualizacion 25 feb 2020, disponible en ingles.',
    urls: [{
      name: 'El uso de wearables para el diagnóstico y tratamiento de la enfermedad de Parkinson',
      url: 'https://doi.org/10.1007/s00702-022-02575-5'
    }],
    image: 'prognosis.png',
    linksInfoApp: [{
      name: 'Más información sobre la aplicación en Euronews.',
      url: 'https://es.euronews.com/2019/04/04/una-aplicacion-movil-para-detectar-senales-tempranas-de-parkinson'
    }],
    name: 'Prognosis'
  },
  {
    description: '<p>9zest Stroke Rehab es una App que brinda herramientas necesarias para la recuperación tras un accidente cerebrovascular,su objetivo principal es minimizar las posibilidades de recaída mediante una serie de ejercicios enfocados en la prevención y la recuperación. Ofrece una amplia variedad de ejercicios que ayudan a mejorar la capacidad para realizar actividades de la vida diaria, permite realizar una evaluación sencilla para crear un programa de terapia personalizado, incluye sesiones de entrenamiento audiovisuales fáciles de seguir con un vídeo de demostración para cada ejercicio.</p><p>Además, mide el progreso mediante pruebas que permiten rastrear las mejoras para un objetivo elegido, ofrece una variedad de ejercicios para mejorar el equilibrio, postura, movilidad y resistencia al caminar, ayuda a superar problemas del habla y la deglución mejora la capacidad de comunicación permite realizar tareas.</p>',
    technology: 'Software: 9zest Stroke App, IA',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Gratuita Plan Básico, Requiere de suscripcion mensual compatibilidad con varios sistemas operativos  IOS y Android, Windows 10 Accesibles para personas con discapacidad auditiva y baja visión.',
    mode: 'Proporciona ejercicios asistidos,monitoreo, diseña un programa de fisioterapia personalizado para mejorar el equilibrio, la postura, la movilidad y la resistencia al caminar.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NERVOUS_CENTRAL],
    barriers: 'Disponible en idioma ingles aplicación puede ser difícil de usar para personas con discapacidades cognitivas como la demencia o la afasia.',
    urls: [{
      name: 'Ensayo piloto de una intervención de telerehabilitación para mejorar los resultados después de un accidente cerebrovascular en Ghana: un estudio de viabilidad y satisfacción del usuario',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1016/j.jns.2018.01.039'
    }],
    image: '9zest-stroke-app.png',
    linksInfoApp: [{
      name: 'Más información sobre la aplicación en CNET.',
      url: 'https://download.cnet.com/9zest-stroke-rehab/3000-2129_4-78426431.html?ex=RAMP-1939.2'
    }],
    name: '9zest Stroke App'
  },
  {
    description: '<p>La aplicación BART proporciona entrenamiento de recuperación respiratoria progresiva con o sin biorretroalimentación de variabilidad de la frecuencia cardíaca a través de un protocolo de autocontrol, recibe datos en tiempo real de un sensor de frecuencia cardíaca conectado por Bluetooth y proporciona una biorretroalimentación de frecuencia cardíaca que muestra el movimiento durante situaciones más tranquila y estresantes.</p>',
    technology: 'software de inteligencia artificial',
    stage: ['investigación', STAGES.DEVELOPMENT],
    usability: [USABILITY.USERS, USABILITY.INVESTIGATORS],
    accessibility: 'No está disponible publicamente. Disponibilidad especifica bajo consentimiento informado. Se utiliza principalmente en estudios de investigación.',
    mode: 'La aplicación BART recibe datos en tiempo real desde un sensor de frecuencia cardíaca conectado por Bluetooth, brinda biorretroalimentación de variabilidad de la frecuencia cardíaca para indicar el movimiento entre estados más tranquilos.',
    systemsCorporals: [SYSTEMS_CORPORALS.SENSORIAL, SYSTEMS_CORPORALS.CARDIORESPIRATORY],
    barriers: 'Tener acceso a dispositivos móviles compatibles, como teléfonos inteligentes o tabletas, para poder utilizar la aplicación y deben estar familiarizados con su uso  para participar en el estudio. Su ultima actualizacion fue en noviembre 8, 2019 Esta aplicación, disponible únicamente para los participantes del estudio. Las App puede ser difícil de usar para personas con discapacidades cognitivas como la demencia o la afasia o problemas de comunicación.',
    urls: [{
      name: 'Entrenamiento en resiliencia asistida por biorretroalimentación para el estrés traumático y operativo: análisis preliminar de una metodología de salud digital autodidacta.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.2196/12590'
    }],
    image: 'bard.jpg',
    linksInfoApp: [{
      name: 'Enlace de descarga en Apkcombo.',
      url: 'https://apkcombo.com/es/bart-biofeedback-assisted-resi/air.org.rti.phit.bart/download/apk#old-versions'
    }, {
      name: 'Más información en LDPlayer.',
      url: 'https://www.ldplayer.net/home?n=18484125#utm_source=aff&utm_medium=aff&utm_campaign=aff18484125'
    }],
    name: 'Bard'
  },
  {
    description: '<p>Lindera Movility analysis identifica y rastrea con precisión los factores de riesgo de caída de cada persona a través del análisis de grabaciones de video de la caminata del paciente y un cuestionario digital,quienes requieren atención reciben información detallada sobre los parámetros de su caminata y los factores de riesgo de caídas identificados, junto con recomendaciones personalizadas para reducir el riesgo.</p>',
    technology: 'software de Inteligencia artificial',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Gratuita Plan Básico, require suscripción mensual- La aplicación está disponible en la App Store y en Google Play. Comaptible Sistemas IOS y Android',
    mode: 'esta app brinda seguimiento remoto donde se proporciona informacion del riesgo de caidas que tiene el usuario, analizando la marcha  a travez del algoritmo de inteligencia artificial incorporado en la aplicación.',
    systemsCorporals: [SYSTEMS_CORPORALS.NERVOUS, SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.CARDIOVASCULAR],
    barriers: 'Habilidades tecnológicas deficientes entre los usuarios mayores.',
    urls: [{
      name: 'Evaluación basada en aplicaciones del riesgo de caídas de las personas mayores mediante la aplicación mHealth Análisis de movilidad Lindera: estudio exploratorio.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.2196/36872'
    }],
    image: 'lindera-mobility-analysis.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store.',
      url: 'https://play.google.com/store/apps/details?id=com.linderaredux&hl=en_US'
    }],
    name: 'Lindera Mobility Analysis (lin)'
  },
  {
    description: '<p>Nola es una aplicación de salud digital que utiliza tecnología de digital para mejorar el tratamiento de enfermedades musculoesqueléticas (MSK),la aplicación funciona a través de software diseñado para proporcionar ejercicios y recomendaciones personalizadas a cada usuario, según sus necesidades específicas.</p>',
    technology: 'La aplicación Nola es un software de Inteligencia artificial',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.ESTUDENTS],
    accessibility: 'Requiere una suscripción mensual. La plataforma es compatible con cualquier navegador moderno y está diseñada para ser accesible para personas con discapacidad auditiva y baja visión, asegurando una experiencia inclusiva para todos los usuarios.',
    mode: 'se utiliza como tratamiento fisioterapéutico independiente o adicional. Proporciona ejercicios y recomendaciones personalizadas para reducir el dolor y mejorar la fuerza y la movilidad en pacientes con enfermedades MSK.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'Disponible solo en idioma aleman.',
    urls: [{
      name: 'Evaluación de la aplicación digital de atención sanitaria "Nola" en pacientes con enfermedades musculoesqueléticas: un estudio piloto | Evaluación der digitalen Gesundheitsanwendung "Nola" bei Patienten mit muskuloskelettalen Beschwerdebildern: Eine Pilotstudie.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1016/j.orthtr.2022.12.001'
    }],
    image: 'nola.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store.',
      url: 'https://play.google.com/store/apps/details?id=com.myletics.nola&hl=es&gl=US'
    }],
    name: 'Nola'
  },
  {
    description: '<p>ReWin es una plataforma de terapia digital diseñada para proporcionar rehabilitación a personas que han sufrido un accidente cerebrovascular,ofrece recursos terapéuticos en formato de video, evaluaciones terapéuticas y rehabilitación a través de la retroalimentación de sensores biométricos y realidad virtual.</p>',
    technology: 'Biorretroalimentacion y realidad virtual.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.ESTUDENTS],
    accessibility: 'No gratuita Requiere de suscripcion mensual.',
    mode: 'La aplicación ReWin ofrece ejercicios asistidos por tecnologia, información terapéutica en formato de vídeo, evaluación terapéutica y rehabilitación a través de sensores de bio-retroalimentación y realidad virtual.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NEUROLOGICAL],
    barriers: 'la accesibilidad puede ser limitada para aquellos con discapacidades severas o problemas de comunicación. disponibilidad de contenido en un solo idioma. Requiere un dispositivo compatible, como un teléfono inteligente o una tableta,conexión de Bluetooth. ReWin puede ser costoso, tanto por la suscripción al servicio como por los dispositivos adicionales que pueden ser necesarios.',
    urls: [{
      name: 'Evaluación de la viabilidad y aceptabilidad de ReWin-A, una innovación de rehabilitación terapéutica digital para personas con discapacidades relacionadas con accidentes cerebrovasculares en la India.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.3389/fneur.2022.936787'
    }],
    image: 'rewin.png',
    linksInfoApp: [{
      name: 'Más información en Frontiersin.',
      url: 'https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.936787/full'
    }],
    name: 'ReWin'
  },
  {
    description: '<p>La aplicación ofrece un monitoreo remoto a los pacientes mediante un sistema de mensajería segura, consta de una app móvil para el paciente y un portal web que permite al fisioterapeuta visualizar diariamente los datos del paciente, se intercambia información a través de la aplicación y la pulsera inteligente para obtener una mejor visión de su perfil, nivel de dolor, actividad física y expectativas, adherencia al ejercicio.</p><p>Los datos se recopilaron datos objetivos durante todo el proceso de recuperación mediante un rastreador de actividad comercial que los pacientes llevan puesto las 24 horas del día basándose en la retroalimentación diaria tanto objetiva como subjetiva del paciente, se realizaron ejercicios diariamente, evaluando la adherencia informada por el paciente para cada uno de ellos, permite realizar grabaciones videos del rango de movimiento de la rodilla semanalmente desde el día de la cirugía hasta dos meses después de la misma, así como tomar fotografías de la herida o la pierna para compartirlas a través de la aplicación, facilitando adaptar el plan de tratamiento sin necesidad de consultas físicas sistemáticas.</p>',
    technology: 'Inteligencia Artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Requiere  de suscripcion premium. Compatible  para teléfonos inteligentes o tabletas iOS y Android). Restricciones para personas con afecciones del sistema nervioso central (Parkinson, esclerosis múltiple, accidente vascular cerebral) o trastorno psiquiátrico.',
    mode: 'La aplicacion ofrece una biblioteca de ejercicios predefinidos con instruciciones detalladas en video, adapta los ejercicios a las necesidades y capacidades, brinda monitoreo y retroalimentación de la actividad en tiempo real, recopila datos de seguimiento de la actividad física, monitoriza el progreso de las usuarias a distancia y ofrece apoyo y asesoramiento personalizado.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NERVOUS_CENTRAL],
    barriers: 'Usuarios con alteraciones cognitivas y con problemas de motricidad fina. Está disponible en ingles',
    urls: [{
      name: 'Rehabilitación digital después de una artroplastia de rodilla: un estudio de cohorte longitudinal prospectivo multicéntrico',
      url: 'https://doi.org/10.3390/jpm13050824'
    }],
    image: 'moveup.webp',
    linksInfoApp: [{
      name: 'Más información en la página de MoveUp.',
      url: 'https://www.moveup.care/appinfo'
    }, {
      name: 'Enlace de descarga en Play Store.',
      url: 'https://play.google.com/store/apps/details?id=com.moveup.patient'
    }, {
      name: 'Enlace de descarga en App Store.',
      url: 'https://apps.apple.com/be/app/moveup/id1437981269'
    }],
    name: 'MoveUp'
  },
  {
    description: '<p>Physitrack permite el fisioterapeuta hacer un seguimiento detallado de su progreso y intervenir si es necesario, así como informar de manera segura cuánto completó de un ejercicio determinado y si experimentó dolor.</p>',
    technology: 'software de inteligencia artificial.',
    stage: [STAGES.MAINTENANCE],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'La aplicación está disponible para dispositivos iOS y Android. Es gratuita para los pacientes, las clínicas de fisioterapia deben pagar una suscripción para poder utilizarla.',
    mode: 'Ejercicios asistidos por tecnología, recopila datos y monitoriza el progreso del paciente,brinda educación en salud y retroalimentacion en tiempo real sobre la ejecucion de los ejercicios  ',
    systemsCorporals: [SYSTEMS_CORPORALS.CARDIOVASCULAR, SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NEUROLOGICAL],
    barriers: 'La aplicación no está disponible en todos los países. No tener las habilidades digitales necesarias para usar la aplicación.',
    urls: [{
      name: 'Investigando el uso de herramientas digitales de salud en fisioterapia: facilitadores y barreras.',
      url: 'https://doi.org/10.1080/09593985.2022.2042439'
    }],
    image: 'physitrack.png',
    linksInfoApp: [{
      name: 'Página web de Physitrack',
      url: 'https://www.physitrack.com/es'
    }, {
      name: 'Más información en PhysiTrack.',
      url: 'https://www.physitrack.com/es/features'
    }],
    name: 'Physitrack'
  },
  {
    description: '<p>Esta app permite a Los profesionales crear programas de entrenamiento personalizados con énfasis en contracciones rápidas o sostenidas, además ofrece estímulo visual a través de animaciones que guían al usuario sobre la posición del ejercicio (de pie, sentado o tumbado) y como guía del ejercicio, muestra cuándo el participante debe contraerse y sostenerse o contraerse y relajarse, además de la duración y el número de repeticiones, los ejercicios son acompañados con una melodía que contribuye a mantener el ritmo del entrenamiento, que se compone de ciclos, ritmos y cadencias, proporciona notificaciones en forma de recordatorios, pemite el registro del progreso, el programa también tiene la función de un diario de grabación. </p><p>Los datos se almacenan en la nube para que los profesionales sanitarios y los investigadores puedan seguir el proceso de rehabilitación del paciente,monitorear los momentos de mejora y adherencia de forma analítica. </p>',
    technology: 'aplicación móvil Diário Saúde, (diario de salud).',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.PATIENT],
    accessibility: 'Gratuita Plan Básico,requiere suscripcion mensual  Accesibles para personas con discapacidad auditiva y baja visión. disponible para Android e iOS.',
    mode: 'La aplicación ofrece instrucciones y guías para realizar los ejercicios  recopila datos y monitoriza el progreso.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'La App requiere un dispositivo móvil compatible. La aplicación está disponible solo en español y portugués.',
    urls: [{
      name: 'La adherencia al entrenamiento de los músculos del suelo pélvico en casa mediante una aplicación de dispositivo móvil para mujeres con incontinencia urinaria: un ensayo controlado aleatorio',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1097/spv.0000000000000670'
    }],
    image: 'diario-saude.png',
    linksInfoApp: [{
      name: 'Más información en la página de la UDES.',
      url: 'https://journals-lww-com.ezproxy.udes.edu.co/fpmrs/pages/video.aspx?autoPlay=false&v=10'
    }, {
      url: 'https://www.inova.unicamp.br/2022/10/aplicativo-de-celular-auxilia-na-prevencao-e-tratamento-da-incontinencia-urinaria/',
      name: 'Más información en la página de la INOVA.'
    }],
    name: 'Diário Saúde'
  },
  {
    description: '<p>Hospital Fit es una aplicación móvil diseñada para pacientes hospitalizados que se conecta a un acelerómetro para teléfono inteligente, se conecta al monitor de actividad MOX a través de Bluetooth para recopilar datos de actividad física,el dispositivo contiene un sensor acelerómetro triaxial (ADXL362.</p><p>La aplicación proporciona datos sobre la cantidad de tiempo que los pacientes pasan de pie y caminando cada día, lo que permite un seguimiento preciso de su actividad. </p><p>La aplicación además, ofrece información sobre el progreso de la recuperación y brinda un programa de ejercicios personalizado con videos para ayudar en el proceso de rehabilitación.</p>',
    technology: 'Software de inteligencia artificial.',
    stage: [STAGES.MAINTENANCE],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'La aplicación está disponible de forma gratuita para pacientes que se han sometido a una cirugía de reemplazo articular en el hospital piloto. compatible con una amplia gama de dispositivos móviles, incluidos teléfonos inteligentes y tabletas.  disponible para dispositivos Android e iOS.',
    mode: 'monitoriza el progreso, rastrea el tiempo que los pacientes pasan de pie, caminando y realizando otras actividades,registra paso,distancia y calorias quemadas, proporciona videos de ejercicios para ayudar a los pacientes a mejorar su fuerza, flexibilidad y rango de movimiento.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'La aplicación es difícil de usar para personas con discapacidades como el deterioro cognitivo (delirio/demencia)  ultima actualizacion 21 de febrero de 2020 Requiere de conexion a Bluetooth para recopilar datos de actividad física y un sensor acelerómetro triaxial ',
    urls: [{
      name: 'La aplicación para teléfonos inteligentes con acelerómetro mejora la actividad física de los pacientes después de una cirugía ortopédica electiva: un estudio piloto',
      url: 'https://doi.org/10.3390/s20154317'
    }],
    image: 'hospital-fit.png',
    linksInfoApp: [{
      name: 'Enlace para la página oficial de Hospital Fit.',
      url: 'https://hospital-fit.com/'
    }],
    name: 'Hospital Fit'
  },
  {
    description: '<p>Telerehabilitación mediante grabaciones de video, seguidas de llamadas telefónicas periódicas para motivar e instruir a los participantes,Los participantes reciben acceso al protocolo del circuito a través de grabaciones de video entregadas a través de DVD, sitio web, canal de Youtube y/o vídeos a través de una aplicación móvil.</p>',
    technology: 'software: Telerehabilitación mediante grabaciones de video.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Disponible en cualquier sistema operativo',
    mode: 'Ejercicios asistidos por tecnología,La aplicación proporciona instrucciones y retroalimentación sobre los ejercicios. El fisioterapeuta puede monitorear el progreso del paciente a través de la aplicación.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'Traumatismos recientes, uso de infiltración de corticoides en rodillas en los últimos 6 meses. Limitada para usuarios con deterioro cognitivo. No es accesible para usuarios con su IMC  > 30.',
    urls: [{
      name: 'La realización de entrenamiento en circuito presencial y por telerehabilitación tiene beneficios y aceptabilidad similares en pacientes con osteoartritis de rodilla: un ensayo aleatorizado',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1016/j.jphys.2023.08.014'
    }],
    image: 'telerehabilitacion.png',
    linksInfoApp: [{
      name: 'Canal de Youtube',
      url: 'https://www.youtube.com/channel/UCy3hUVdqstyZCIC4ikAFOwQ'
    }, {
      name: 'Sitio web',
      url: 'http://exercicio-joelho.trekeducation.org'
    }],
    name: 'telerehabilitacion'
  },
  {
    description: '<p>RelieVRx es un sistema de realidad virtual prescrito para proporcionar terapia complementaria para el dolor lumbar crónico,sus sesiones diarias incluyen técnicas establecidas de terapia cognitivo-conductual, como conciencia corporal, distracción del dolor, relajación, autoconciencia, respiración guiada y educación del paciente,cada sesión se construye sobre la anterior, promoviendo la neuroplasticidad, es decir, la capacidad del cerebro para adaptarse y cambiar en respuesta a la experiencia,este programa es fácil de usar y ha demostrado generar una alta satisfacción entre los usuarios.</p>',
    technology: 'RelieVRx - Realidad virtual',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'El sistema RelieVRx puede ser costoso, tanto por el hardware como por la suscripción al software.',
    mode: 'El sistema RelieVRr brinda seguimiento del progreso, proporciona realidad virtual.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'relieVRx requiere cierta familiaridad con la tecnología de realidad virtual y los teléfonos inteligentes.',
    urls: [{
      name: 'La terapia digital (DTx) amplia las opciones de tratamiento multimodal para el dolor lumbar crónico: el nexo entre la medicina de precisión, la educación del paciente y la salud pública',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.3390/healthcare11101469'
    }],
    image: 'relievrx.png',
    linksInfoApp: [{
      name: 'Sitio web',
      url: 'https://www.relievrx.com/about'
    }],
    name: 'RelieVRx'
  },
  {
    description: '<p>Es una aplicación diseñada específicamente para personas que sufren de dolor lumbar. Ofrece una variedad de recursos, que incluyen videos instructivos para aliviar el dolor, herramientas para rastrear el dolor y el progreso, contenido educativo y, de manera destacada, acceso a un grupo de pares que brindan apoyo mutuo.</p>',
    technology: 'BackRx ofrece ejercicios de yoga y Pilates para pacientes con CLPB discogénico',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.USERS],
    accessibility: 'BackRx solo está disponible para ordenadores Windows y Mac, el sistema BackRx no es compatible con dispositivos móviles como tabletas o teléfonos inteligentes.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'BackRx requiere espacio suficiente para realizar los ejercicios de forma segura y cómoda.',
    urls: [{
      name: 'BackRx, una aplicación de teléfono móvil personalizada para el dolor lumbar crónico discogénico: un estudio piloto prospectivo',
      url: 'https://bmcmusculoskeletdisord.biomedcentral.com/articles/10.1186/s12891-022-05883-9'
    }],
    image: 'back-rx.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en la App Store',
      url: 'https://apps.apple.com/us/app/back-rx/id1484288564'
    }],
    name: 'BackRx'
  },
  {
    description: '<p>PainNavigator: Es un sistema digital diseñado para el manejo del dolor crónico, especialmente dirigido a aquellos que sufren de dolor lumbar crónico. Este programa se adapta al estilo de vida de cada usuario y aborda los diversos impactos físicos, psicológicos y sociales del dolor en el bienestar general. </p><p>Ofrece un curso completo de educación médica y estrategias de bienestar, diseñado para completarse en promedio en 8 semanas, así como ejercicios personalizados creados por un Doctor en Fisioterapia. Además, proporciona sesiones de yoga y atención plena dirigidas por un instructor certificado, diarios para gestionar el dolor de manera efectiva y acceso a un Entrenador de salud humano certificado disponible en todo momento.</p>',
    technology: 'Software de inteligencia artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'El plan basico requiere de suscripcion mensual. La aplicación funciona en teléfonos inteligentes y tabletas con Android iOS.',
    mode: 'La aplicación crea un plan de ejercicios personalizado para cada usuario, brinda educacion y seguimiento del progreso motivación.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'La suscripción puede ser costosa para algunos usuarios.',
    urls: [{
      name: 'PainNavigator Una evaluación de una aplicación móvil para el tratamiento del dolor lumbar crónico: estudio piloto prospectivo.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/36227637/'
    }],
    image: 'pain-navigator.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.PainNavigator'
    }, {
      name: 'Enlace de descarga en Apkpure',
      url: 'https://apkpure.com/es/painnavigator/com.PainNavigator'
    }],
    name: 'PainNavigator'
  },
  {
    description: '<p>ReHand es una herramienta diseñada para la prescripción y realización de programas de ejercicio terapéutico dirigidos a la rehabilitación de la muñeca, mano y dedos. Está destinada a pacientes con lesiones traumatológicas, ortopédicas o neurológicas en esta área, proporcionándoles un programa de ejercicios adaptado a su situación y etapa de recuperación. </p><p>Además, ofrece a los profesionales de la salud una herramienta para prescribir y monitorear el ejercicio terapéutico, se realizan mediante interacción táctil en una tablet,guiados por retroalimentación para facilitar el reentrenamiento funcional de la zona afectada. </p><p>Antes de cada ejercicio, se realiza un ajuste para garantizar que el paciente trabaje sin dolor y dentro de sus límites de movimiento,los ejercicios se adaptan y progresan según la evolución del paciente, manteniendo un nivel de desafío y atención adecuado. </p><p>Además, la aplicación incluye vídeos explicativos y proporciona instrucciones auditivas para cada ejercicio.</p>',
    technology: 'La aplicación ReHand utiliza  Inteligencia artificial  ',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'La aplicación ReHand está disponible para dispositivos iOS y Android. Está disponible en varios idiomas, incluyendo español. Gratuita Plan Básico, requiere de suscrpcion mensual.',
    mode: 'Ejercicios asistidos por tecnología: La aplicación proporciona instrucciones y retroalimentación en tiempo real sobre la ejecución de los ejercicios,monitorea el progreso.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NEUROLOGICAL],
    barriers: 'problemas con la compatibilidad de las tabletas.',
    urls: [{
      name: 'Los ejercicios guiados por retroalimentación realizados en la pantalla táctil de una tableta mejoran el regreso al trabajo, la función, la fuerza y ​​el uso de atención médica más que un programa de ejercicios prescrito en papel para personas con lesiones en la muñeca, la mano o los dedos: un ensayo aleatorio',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1016/j.jphys.2020.09.012'
    }],
    image: 'rehand.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.healthinn.rehand&hl=es&gl=US'
    }, {
      name: 'Enlace de descarga en Apple Store',
      url: 'https://apps.apple.com/es/app/rehand-rehabilitaci%C3%B3n-de-mano/id1188291271'
    }],
    name: 'ReHand'
  },
  {
    description: '<p>Es una plataforma intuitiva que simplifica el diseño, la prescripción y la implementación de ejercicios personalizados en un portal médico  accesible. A través de una aplicación móvil fácil de usar, los pacientes pueden medir y realizar un seguimiento digital de su rehabilitación vestibular, utilizando un sensor de cabeza innovador que se conecta sin complicaciones a sus teléfonos mediante Bluetooth. </p><p>Los fisioterapeutas cuentan con un portal dedicado para prescribir y desplegar ejercicios directamente en la aplicación del paciente, permitiendo un monitoreo continuo del progreso y la adaptación de las rutinas según sea necesario. </p><p>Además de proporcionar material educativo y lecturas, el sistema ofrece retroalimentación en tiempo real tanto para el paciente como para el médico, promoviendo una mejor comprensión del tratamiento y facilitando el seguimiento del avance. </p><p>El sensor de cabeza portátil, colocado discretamente detrás de la oreja, proporciona información instantánea sobre la ejecución de los ejercicios, permitiendo a los pacientes revisar y mejorar su técnica, mientras que brinda a los profesionales una visión detallada del progreso del paciente.</p>',
    technology: 'Realidad Virtual',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Accesible para  usuarios con discapacidad visual y auditiva.',
    mode: 'Proporciona información en tiempo real sobre la frecuencia de la cabeza prescrita y la real durante los ejercicios,ofrece registro de seguimiento de los síntomas y el progreso de su paciente, monitorea y guia a los pacientes de forma remota.',
    systemsCorporals: [SYSTEMS_CORPORALS.VESTIBULAR],
    barriers: 'Disponible en idioma ingles. Requiere conexión mediante Bluetooth a la aplicación del teléfono inteligente. Es costoso, tanto por la suscripción al servicio como por los dispositivos adicionales que pueden ser necesarios.',
    urls: [{
      name: 'Hacia una intervención de salud digital para la rehabilitación vestibular: usabilidad y resultados subjetivos de una plataforma novedosa',
      url: 'https://doi.org/10.3389/fneur.2022.836796'
    }],
    image: 'vertigenius.png',
    linksInfoApp: [{
      name: 'Más información en la página de Vertigenius.',
      url: 'https://www.vertigenius.com/'
    }],
    name: 'Vertigenius'
  },
  {
    description: '<p>La aplicación ofrece una variedad de videos con instrucciones verbales y explicaciones para ejercicios de activación física específicos para personas con Parkinson, estos ejercicios incluyen resistencia, fuerza y equilibrio, están disponibles en diferentes niveles de dificultad, además la aplicación ofrece actividades como marcha nórdica, Tai Chi y baile.</p><p>Los usuarios pueden programar su programa de entrenamiento personalizado en  un calendario integrado, y recibirán recordatorios auditivos y/o notificaciones para realizar sus ejercicios programados, los videos proporcionan apoyo visual para una ejecución correcta de los ejercicios, y al completar una sesión, los usuarios registran su progreso y cualquier dificultad experimentada, así como su nivel de bienestar, esfuerzo y diversión, Los datos recopilados se transfieren automáticamente a un panel de administración en la clínica, donde el fisioterapeuta supervisor puede monitorear la adherencia del paciente y ajustar el programa de entrenamiento según sea necesario, La aplicación utiliza la red móvil para transmitir datos a intervalos regulares, permitiendo así que el fisioterapeuta proporcione comentarios y correcciones de forma remota. Esto es especialmente importante debido a las pequeñas amplitudes de movimiento que los pacientes con Parkinson pueden experimentar durante el ejercicio, que pueden necesitar correcciones regulares</p>',
    technology: 'Inteligencia Artificial (IA): Realidad Virtual (RV): ',
    stage: [STAGES.DEVELOPMENT],
    usability: [USABILITY.USERS],
    accessibility: 'La interfaz es clara y fácil de entender, con iconos y textos fácilmente reconocibles. Accesibles para personas con discapacidad auditiva y baja visión y en limitaciones fisicas (movilidad limitada). La aplicación es fácil de aprender a usar, incluso para personas con poca experiencia con tecnología. Soporte e instrucciones',
    mode: 'El programa ofrece una variedad de ejercicios para ayudar a mejorar la movilidad, el equilibrio y la coordinación. La aplicación proporciona retroalimentación en tiempo real  permite a los pacientes realizar un seguimiento de su progreso con el tiempo.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NERVOUS, SYSTEMS_CORPORALS.CARDIOVASCULAR],
    barriers: 'Acceso a tablets o equipos que tengan la capacidad para el uso de la app.',
    urls: [{
      name: 'ParkProTrain: un programa de entrenamiento de fisioterapia individualizado basado en tabletas destinado a mejorar la calidad de vida y las restricciones de participación en pacientes con EP: un protocolo de estudio para un estudio multimétodo cuasi aleatorizado, longitudinal y secuencial',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1186/s12883-019-1355-x'
    }],
    image: 'parkprotrain.png',
    linksInfoApp: [{
      name: 'Más información del artículo en la página de la UDES',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1186/s12883-019-1355-x'
    }],
    name: 'ParkProTrain'
  },
  {
    description: '<p>My mobility y Apple Watch se unen para ofrecer una solución completa que respalda tanto la preparación prequirúrgica como la recuperación de los pacientes mediante la supervisión remota y la recolección de datos clínicos, esta plataforma digital proporciona apoyo continuo y orientación a los pacientes, garantizando una experiencia conectada,brinda  información en tiempo real y retroalimentación valiosa de los pacientes para mejorar la atención, los resultados y la satisfacción durante todo el proceso, desde la preparación hasta la recuperación quirúrgica.</p><p> Esta aplicación ofrece recursos educativos accesibles, respuestas a preguntas frecuentes y ejercicios adaptados a cada paciente mediante alertas como las excepciones de marcha, detecta posibles problemas en la recuperación y permite ajustar el plan de atención según sea necesario,facilita tanto a los pacientes como a los equipos de atención realizar un seguimiento efectivo de la recuperación, enfocándose en actividades específicas como caminar y estableciendo metas alcanzables basadas en datos comparativos con otros pacientes en situaciones similares.</p>',
    technology: 'software de Inteligencia artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Requiere suscripcion mensual ',
    mode: 'proporciona informacion del paciente mediante el seguimiento del progreso centrandose en actividades como sesiones de caminata y pasos, monitoreo  remoto, y recopilación de la información de la velocidad de la marcha, educación sobre procedimientos amigable para el paciente, respuestas a preguntas frecuentes y ejercicios basados ​​en un protocolo de tratamiento individual. ',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NEUROLOGICAL, SYSTEMS_CORPORALS.CARDIOVASCULAR],
    barriers: 'Acceso: la tecnología de rehabilitación no está disponibles en todas las áreas. Requiere de conexión a conexión  de Bluetooth.',
    urls: [{
      name: 'Percepciones de los pacientes sobre la monitorización remota y los programas de rehabilitación basados ​​en aplicaciones: una comparación de la artroplastia total de cadera y rodilla.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1016/j.arth.2023.04.032'
    }],
    image: 'mymobility.png',
    linksInfoApp: [{
      name: 'Más información en Zimmerbiomet',
      url: 'https://www.zimmerbiomet.com/en/products-and-solutions/zb-edge/mymobility.html#02-value'
    }],
    name: 'MyMobility, Zimmer Biomet'
  },
  {
    description: '<p>Esta aplicación proporciona un seguimiento detallado y la capacidad de medir el rango de movimiento, además de ofrecer ejercicios simples para realizar sin dolor tanto en el trabajo como en el hogar. También incluye actividades de mindfulness diseñadas para ayudar a manejar el estrés, la ansiedad y el dolor, ofrece información oportuna y relevante sobre la recuperación del usuario, así como seguimiento del progreso mediante evaluaciones clínicamente validadas. Además, cuenta con una función de medición de movimiento inteligente denominada SMART Motion.</p>',
    technology: 'IA y Realidad Aumentada.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.USERS],
    accessibility: 'Disponible para Android e iOS Limitada a usuarios con smartphone compatible Plan basico pero requiere de suscripción mensual',
    mode: 'Ejercicios asistidos por tecnología y monitoreo remoto de la rehabilitación',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'Limitada a usuarios con paraplejia o tetraplejia. Requiere capacitación del paciente para utilizar con precisión la herramienta.',
    urls: [{
      name: 'Precisión de una aplicación de software para teléfonos inteligentes en comparación con un goniómetro portátil para medir el rango de movimiento del hombro en adultos asintomáticos.',
      url: 'https://journals.sagepub.com/doi/10.1177/23259671231187297'
    }],
    image: 'bardavon.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.peerwell'
    }],
    name: 'Bardavon Recovery PeerWell, Inc.'
  },
  {
    description: '<p>FocusMotion es una tecnología de recuperación ortopédica innovadora,se  centra en capturar la actividad física y los movimientos de los pacientes de manera precisa, utilizando una combinación de una rodillera inteligente y una aplicación móvil, esta tecnología se integra con dispositivos como relojes inteligentes y pulseras de actividad física, permite realizar un seguimiento exhaustivo de los ejercicios anaeróbicos, así como de otros movimientos del usuario.<p></p>La aplicación aprovecha diversas funcionalidades del dispositivo, como el giroscopio, el acelerómetro, el magnetómetro y la electromiografía, para registrar y comprender los movimientos y el ritmo del usuario de manera automatizada. Este enfoque ofrece a los terapeutas una herramienta poderosa para monitorear la actividad física de sus pacientes de manera más precisa y eficiente.</p>',
    technology: 'Inteligencia artificial',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Gratis para dispositivos móviles Android e iOS. Requiere un smartphone o tablet compatible con RA.',
    mode: 'Esta tecnología ofrece entrenamientos respaldados por la última tecnología, seguimiento detallado del progreso y una recolección precisa de datos de movimiento,proporciona retroalimentación instantánea en tiempo real, registra el movimiento y supervisa ejercicios como estiramientos y tareas de movilidad, incluida la prueba de cronometraje,sigue de cerca la progresión del rango de movimiento en cada repetición realizados por el paciente.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NEUROLOGICAL],
    barriers: 'Require de un teléfono inteligente capaz de ejecutar la plataforma de participación del paciente y el monitor de actividad portátil Es costoso, tanto por la suscripción al servicio como por los dispositivos adicionales que pueden ser necesarios.',
    urls: [{
      name: 'Premio Chitranjan S. Ranawat: El uso de torniquetes no afecta la trayectoria de la recuperación temprana de la artroplastia total de rodilla: un ensayo controlado, aleatorizado y prospectivo.',
      url: 'https://doi.org/10.1016/j.arth.2023.03.081'
    }],
    image: 'focusmotion-health.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store.',
      url: 'https://play.google.com/store/apps/details?id=com.globusmedical.tkr&hl=en_US'
    }],
    name: 'FocusMotion Health'
  },
  {
    description: '<p>El programa  consiste en un dispositivo de entrenamiento para la rodilla y una aplicación llamada GenuSport, el  dispositivo incluye tres sensores de presión que se colocan en la parte posterior de la rodilla, diseñados para la rehabilitación después de lesiones o cirugías de rodilla, puede utilizarse inmediatamente después de la lesión, antes de una posible cirugía, o directamente después de esta, su enfoque se centra en fomentar un entrenamiento responsable, proporcionar retroalimentación en tiempo real y mejorar la fuerza, flexibilidad y control de la rodilla, el entrenamiento de rehabilitación se divide en dos modos principales, en el primero, denominado"golpe alto", el paciente debe presionar la rodilla contra el sensor durante 5 segundos para alcanzar una fuerza objetivo establecida por la aplicación. <p></p>En el segundo modo, llamado "simulador de vuelo", el objetivo es mantener la rodilla en el aire durante 100 segundos, al final de cada sesión de entrenamiento, los pacientes pueden revisar su desempeño, también tienen la opción de comparar el progreso entre ambas rodillas, cada sesión de entrenamiento tiene una duración aproximada de 5 minutos.</p>',
    technology: 'Contiene 3 sensores que se colocan en la rodilla. Además tiene realidad aumentada',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'La aplicación está disponible de forma gratuita para dispositivos iOS y Android. Los pacientes deben tener un teléfono inteligente o tableta compatible con la aplicación.',
    mode: 'proporciona a los usuarios ejercicios de recuperación diarios y los guía a través de la rutina, brindándoles comentarios en tiempo real,monitorización de rehabilitación del espectro de velocidades,monitorea ejercicios de estiramiento y tareas de movilidad, como la prueba de cronometrado y listo. monitorea la progresión del rango de movimiento en cada repetición de cada conjunto de movimientos.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'dificultades para usar la aplicación debido a su falta de familiaridad con la tecnología. Aunque la aplicación es gratuita, los pacientes pueden tener que pagar por el monitor de actividad.',
    urls: [{
      name: 'Programa de rehabilitación basado en aplicaciones después de una artroplastia total de rodilla: un ensayo controlado aleatorio.',
      url: 'https://doi.org/10.1007/s00402-021-03789-0'
    }],
    image: 'genu-sport.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store',
      url: 'https://play.google.com/store/apps/details?id=de.genusport.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
    }],
    name: 'GenuSport'
  },
  {
    description: '<p>El programa se centra en ejercicios que abarcan desde entrenamiento de resistencia de los principales grupos musculares de las extremidades hasta ejercicios de equilibrio,cada ejercicio tiene tres niveles de dificultad y cuatro subniveles de progresión,se realiza de tres a cinco veces por semana con alta intensidad, con tres series de repeticiones personalizadas según la calificación Borg modificada del esfuerzo percibido en las repeticiones finales, los participantes elegirán una actividad diaria desafiante para mejorar a corto plazo, los ejercicios se llevan a cabo siempre en presencia de un acompañante o cuidador y serán seguidos mediante llamadas telefónicas semanales y reuniones mensuales cara a cara, el nivel de dificultad de los ejercicios progresarán mensualmente y los subniveles de dificultad progresarán semanalmente, según corresponda.</p>',
    technology: 'Sofware Inteligencia artificial y telereabilitacion',
    stage: [STAGES.DEVELOPMENT],
    usability: [USABILITY.USERS],
    accessibility: 'La aplicación estará disponible para adultos mayores que esperan fisioterapia ambulatoria en el sistema público de salud. Disponible para dispositivos Android e iOS. Requisitos: Se requiere un teléfono inteligente con cámara y acceso a internet. La app será gratuita para los participantes del estudio.',
    mode: 'Ejercicios asistidos por tecnología: La aplicación proporcionará instrucciones visuales y auditivas para realizar los ejercicios. Monitoreo remoto de la rehabilitación: Los fisioterapeutas monitorearán el progreso de los participantes a través de llamadas telefónicas y videoconferencias.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'disponer de un dispositivo smartphone con acceso a Internet  Dificultades para usar la tecnología. Falta de motivación para realizar los ejercicios. No es accesible para personas con limitaciones  moviilidad  exclusion:pacientes con enfermedad neurológica, como Parkinson o accidente cerebrovascular.',
    urls: [{
      name: 'Programa de telerehabilitación para adultos mayores en lista de espera para fisioterapia después del alta hospitalaria: protocolo de estudio para un protocolo pragmático de ensayo aleatorio',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1186/s13063-021-05387-2'
    }],
    image: 'exercise-protocol.png',
    linksInfoApp: [{
      name: 'Más información en la página de Trials Journal',
      url: 'https://trialsjournal-biomedcentral-com.ezproxy.udes.edu.co/articles/10.1186/s13063-021-05387-2#Tab1'
    }],
    name: 'exercise protocol'
  },
  {
    description: '<p>La aplicación ofrece un enfoque completo, científico y fácil de usar para abordar el dolor de espalda,proporciona una guía paso a paso que incluye ejercicios terapéuticos y contenido educativo, está diseñada para personas diagnosticadas con dolor de espalda que no han encontrado alivio con otros tratamientos,personaliza los ejercicios según el nivel de condición física y el dolor del usuario mediante algoritmos inteligentes,evalúa la ubicación, intensidad del dolor y nivel de condición física para crear un plan de entrenamiento adaptado,los ejercicios se ajustan continuamente según la retroalimentación del usuario,los videos de alta calidad aseguran la correcta ejecución de los ejercicios. </p><p>Kaia motiva al usuario para alcanzar sus objetivos de entrenamiento personales y realiza un seguimiento del progreso,frece una variedad de ejercicios, desde fortalecimiento muscular hasta técnicas de relajación, junto con conocimientos sobre el dolor y consejos para manejarlo.</p>',
    technology: 'Inteligencia artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'No gratuita, prueba gratuita por 7 dias. Disponible para iOS y Android Requiere un teléfono inteligente o tableta compatible.',
    mode: 'Ejercicios asistidos por tecnología, monitoreo remoto de la rehabilitación, brinda educacion en salud Y Seguimiento del proceso.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'Falta de acceso a un teléfono inteligente o tableta compatible, falta de conocimientos técnicos, dificultades con la interfaz de usuario, costos de datos móviles, dominar el idioma alemán, no disponible en español.',
    urls: [{
      name: 'Tratamiento multidisciplinario del dolor de espalda basado en aplicaciones versus fisioterapia combinada más educación en línea: un ensayo controlado aleatorio',
      url: 'https://doi.org/10.1038/s41746-019-0109-x'
    }, {
      name: 'Uso de la vigilancia poscomercialización para evaluar eventos relacionados con la seguridad en una aplicación de rehabilitación digital (aplicación Kaia): estudio observacional',
      url: 'https://doi.org/10.2196/25453'
    }],
    image: 'kaia.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store.',
      url: 'https://play.google.com/store/apps/details?id=com.kaiahealth.app'
    }, {
      name: 'Enlace de descarga en App Store.',
      url: 'https://apps.apple.com/us/app/kaia-health/id1100673977'
    }],
    name: 'kaia Health'
  },
  {
    description: '<p>SelfBack ofrece un programa de autogestión que se adapta semanalmente según el progreso del usuario,este incluye ejercicios, material educativo y un objetivo de actividad, todo ajustable para adaptarse al tiempo disponible del usuario,además del programa principal, proporciona diversas herramientas para el autocontrol durante episodios de dolor intenso, como ejercicios para aliviar el dolor y sugerencias de posición para dormir.</p>',
    technology: 'Software de Inteligencia artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Esta aplicación está disponible en el idioma ingles. Es gratuita pero no esta disponible en Colombia. La aplicación está disponible para iOS y Android.',
    mode: 'La aplicación proporciona un plan de ejercicios personalizado para cada usuario, brinda educacion sobre el dolor lumbar y cómo manejarlo. permite a los usuarios conectarse con otros usuarios de SelfBack para obtener apoyo y consejos. Brinda Seguimiento del progreso.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'No esta disponible en Colombia. Solo esta disponible en europa y en el idioma ingles.',
    urls: [{
      name: 'Un sistema digital de apoyo a la decisión (selfBACK) para mejorar el autocontrol del dolor lumbar: un estudio piloto con un seguimiento de 6 semanas',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1186/s40814-020-00604-2'
    }],
    image: 'selfback.webp',
    linksInfoApp: [{
      name: 'Enlace de descarga en Play Store.',
      url: 'https://play.google.com/store/apps/details?id=dk.selfback.selfback'
    }],
    name: 'SelfBack'
  },
  {
    description: '<p>PatientConcept es una aplicación diseñada para mejorar la experiencia del paciente en el ámbito de la atención médica,ofrece una plataforma interactiva que facilita el acceso del paciente a información relevante sobre su salud y tratamiento. </p><p>Entre sus características se incluye la gestión de citas, brinda un espacio  seguro para almacenar el historial médico completo del paciente, incluyendo diagnósticos previos, tratamientos y medicamentos recetados, envía recordatorios automáticos y facilita la comunicación segura entre el paciente y su equipo médico,proporciona recursos educativos sobre condiciones médicas y tratamientos, capacitando a los pacientes para tomar decisiones informadas sobre su cuidado,asimismo permite a los pacientes realizar un seguimiento de su progreso a lo largo del tiempo, ingresando datos como síntomas y niveles de actividad, entre otros aspectos relevantes para su salud.</p>',
    technology: 'Software de Inteligencia artificial.',
    stage: [STAGES.MAINTENANCE],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'facil acceso y está disponible gratuita plan basico. Compatible (para teléfonos inteligentes o tabletas iOS y Android). Se puede utilizar de forma multilingüe (alemán, inglés, italiano, francés, portugués. La app permite una comunicación estructurada bidireccional.',
    mode: 'la aplicación proporciona un temporizador de medicación y simplifica la solicitud de recetas de seguimiento de medicamentos y terapias no farmacológicas  al médico tratante con el mínimo esfuerzo. acompaña el paciente en el cumplimiento del seguimiento especificado. recuerda al paciente las citas de seguimiento exámen]es de imagen, de laboratorio o de consulta.',
    systemsCorporals: [SYSTEMS_CORPORALS.CARDIORESPIRATORY, SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.DIGESTIVE, SYSTEMS_CORPORALS.URINARY, SYSTEMS_CORPORALS.NEUROLOGICAL],
    barriers: 'Limitaciones de los dispostivos, la eficiencia en la conectividad de la app, los costos de mantener una app con este flujo de información. No esta disponible en español.',
    urls: [{
      name: 'Una aplicación asociada a la identificación para facilitar el tratamiento de la esclerosis múltiple adaptado al paciente',
      url: 'https://doi.org/10.3390/brainsci11081061'
    }],
    image: 'patientconcept.png',
    linksInfoApp: [{
      name: 'Más información en la página de PatientConcept.',
      url: 'https://patientconcept.app/'
    }],
    name: 'patientconcept'
  },
  {
    description: '<p>La aplicación se enfoca en cuatro áreas, entrenamiento de la vejiga, psicoeducación, consejos sobre estilo de vida y mensajes de  refuerzo automático,además, incluye un registro de ejercicios, consejos personalizados se crean utilizando la información del diario de la vejiga del usuario y las respuestas al cuestionario inicial, con el objetivo de dirigir al usuario hacia las características de la aplicación más pertinentes para sus síntomas y estilo de vida.</p>',
    technology: 'software y inteligencia artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.PATIENT],
    accessibility: 'Accesibles para personas con discapacidad auditiva y baja visión. App movil disponible para cualquier sistema operativo.',
    mode: 'Esta aplicación brinda educacion en salud, rastreo de sintomas medicamentos y citas. entrenamiento de los músculos del suelo pélvico, entrenamiento de la vejiga.',
    systemsCorporals: [SYSTEMS_CORPORALS.URINARY],
    barriers: 'Ultima actualizacion 2017',
    urls: [{
      name: 'Una aplicación móvil para el autocontrol de la incontinencia urinaria mixta y de urgencia en mujeres: ensayo controlado aleatorio',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.2196/19439'
    }],
    image: 'tat-2.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en la Play Store',
      url: 'https://play.google.com/store/apps/details?id=tat2.tat2'
    }],
    name: 'aplicación Tät II'
  },
  {
    description: '<p>Esta App permite abordar problemas reumatológicos de mano y dedos, ofrece un programa completo y personalizado para cada usuario, mediante esta aplicación, los pacientes podrán acceder a una serie de ejercicios y recomendaciones adaptadas a su patología y momento de recuperación. Además, la app cuenta con funcionalidades especiales para profesionales, quienes podrán realizar un seguimiento del desempeño de cada usuario y analizar variables relacionadas con el dolor y la funcionalidad.</p> <p>Con esta descripción, queda claro que la app es una herramienta integral y especializada en la rehabilitación de problemas reumatológicos de mano y dedos.</p>',
    technology: '"Software de Inteligencia artificial, Biofeeback.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'Es especificola intervencion fisioterapeutica de mano, comprende un  sistema conjunto de prescripcion ,tratamiento, ejercicios asistidos, asesoramientos  educativos estrategias de adherencia y seguimiento para la rehabilitacion, monitoreo, evalua aspectos generales de la mano, como la intensidad del dolor, la rigidez, la fuerza de agarre y pellizco, con el propósito de arrojar luz sobre la eficacia de estas intervenciones en pacientes que sufren de artritis reumatoide en las manos.',
    mode: 'esta app roporciona asesoramiento educativo, y un método estándar. Se evaluan aspectos generales de la mano, como la intensidad del dolor, la rigidez, y la fuerza de agarre y pellizco, con el propósito de arrojar luz sobre la eficacia de estas intervenciones en pacientes que sufren de artritis reumatoide en las manos.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL, SYSTEMS_CORPORALS.NERVOUS],
    barriers: 'Debe ser usada en un dispositivo Tablet con un sistema operativo igual o superior a android 6.0.1 e igual o superior a IOS 14.0. Con una pantalla mayor a 7 y una conexión a internet estable para no limitar las funcionalidadesde la aplicación. Su ultima actualizacion 2019',
    urls: [{
      name: 'Un programa de ejercicio, educativo y de autocuidado ofrecido con una aplicación para teléfono inteligente (CareHand) en adultos con artritis reumatoide de las manos: ensayo controlado aleatorio. JMIR Mhealth Uhealth.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.2196/35462'
    }, {
      name: 'Un programa de ejercicio, educativo y de autocuidado ofrecido con una aplicación para teléfono inteligente (CareHand) en adultos con artritis reumatoide de las manos: ensayo controlado aleatorio. JMIR Mhealth Uhealth.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32912305/'
    }],
    image: 'carehand.png',
    linksInfoApp: [{
      name: 'Más información en la página de CareHand',
      url: 'https://appadvice.com/app/carehand-mano-reumatol-c3-b3gica/1465692985'
    }],
    name: 'CareHand'
  },
  {
    description: '<p>Desarrollado para su uso en clínicas para permitir a los profesionales ofrecer un servicio único e innovador a sus clientes,el sistema evalúa la postura general para mejorar la simetría muscular y abordar los trastornos musculoesqueléticos relacionados con el dolor de espalda y otras molestias, ofrece una evaluación  detallada y cuantificable de las desviaciones posturales, así como un programa de ejercicios personalizado en solo cuatro pasos. </p><p>Estos incluyen la captura de imágenes sin contacto, la detección y corrección de desviaciones impulsadas por inteligencia artificial, la personalización del programa de ejercicios, que puede ser ajustado por un profesional, y el seguimiento del progreso postural y del dolor.</p>',
    technology: 'el software Fizyoprint Inteligencia artificial',
    stage: [STAGES.DEVELOPMENT],
    usability: [USABILITY.THERAPIST],
    accessibility: 'plan basico requieree de suscripcion mensual compatible con el sistema de análisis postural BioTonix para la evaluación de la postura de pie.',
    mode: 'Uso de apps moviles mediante ejercicios guiados. La app Te pedirá que te tomes fotos desde diferentes ángulos (frente, espalda y lateral). La aplicación analizará tus fotos y te dará un informe con tus medidas posturales. Proporcionará ejercicios y consejos para ayudarte a mejorar tu postura.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'Se necesitan más estudios para probar la aplicación actual en diferentes poblaciones y condiciones musculoesqueléticas. La aplicación requiere que los usuarios tengan un conocimiento básico de anatomía y fisioterapia.',
    urls: [{
      name: 'Una herramienta de aplicación móvil para el análisis de la postura de pie: desarrollo, validez y confiabilidad.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1007/s11845-021-02827-5'
    }],
    image: 'fizyoprint.png',
    linksInfoApp: [{
      name: 'Más información en la página de Biotonix',
      url: 'https://biotonixposture.com/'
    }, {
      name: 'Biotonix Fizyoprint notre produit',
      url: 'https://biotonixposture.com/notre-produit/'
    }, {
      name: 'Biotonix Fizyoprint professionals',
      url: 'https://biotonixposture.com/professionals/'
    }],
    name: 'Biotonix Fizyoprint'
  },
  {
    description: '<p>El programa SVS SET (Sistema de evaluación de seguridad vascular) aprovecha los sensores y la conectividad de los teléfonos inteligentes para registrar y envia datos sobre la actividad física durante las sesiones de ejercicio, esta operación requiere una aplicación móvil y abarca desde una evaluación inicial hasta caminatas diarias de cinco días a la semana, complementadas con contenido de podcast y motivación adicional, incluye también una evaluación de progreso a mitad del camino y otra al final del programa, así como asesoramiento constante sobre salud, ofrece unidades educativas y encuestas opcionales, brindando la posibilidad de interactuar con entrenadores de salud y recibir dosis diarias de motivación.</p>',
    technology: 'Inteligencia artificial que se utiliza para calcular la puntuación de riesgo individualizada.',
    stage: [STAGES.DEVELOPMENT],
    usability: [USABILITY.THERAPIST],
    accessibility: 'Compatibilidad con dispositivos: SVS SET es compatible con la mayoría de los navegadores web y dispositivos móviles. SVS SET es compatible con algunas tecnologías de asistencia.',
    mode: 'La herramienta utiliza un algoritmo para calcular una puntuación de riesgo individualizada para el paciente. La puntuación de riesgo se puede utilizar para ayudar a los médicos a tomar decisiones sobre el tratamiento y la planificación preoperatoria.',
    systemsCorporals: [SYSTEMS_CORPORALS.CARDIOVASCULAR],
    barriers: 'Familiaridad con la herramienta.',
    urls: [{
      name: 'Uso de un programa de terapia de ejercicio basado en una aplicación que incluye técnicas cognitivo-conductuales para el tratamiento de la claudicación intermitente',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1016/j.jvs.2022.06.087'
    }],
    image: 'svs.png',
    linksInfoApp: [{
      name: 'Más información de la aplicación en el sitio web de Vascular News',
      url: 'https://vascularnews.com/svs-pilots-set-app-for-peripheral-arterial-disease-patients/'
    }],
    name: 'SVS SET'
  },
  {
    description: '<p>La aplicación está diseñada para empoderar a los pacientes en el manejo de la hipertensión, ofreciendo herramientas para el autocontrol de la salud, esto incluye el registro de diversos factores relacionados con la hipertensión, como la presión arterial, el peso, la circunferencia de la cintura, entre otros, también proporciona evaluaciones de riesgos basadas en valores de referencia, recomendaciones, alertas y recordatorios sobre medicamentos, así como registros de actividad física y mediciones de presión arterial,todos estos elementos están centrados en promover un estilo de vida saludable que facilite el tratamiento de la hipertensión.</p><p> Los datos del paciente se almacenan en la nube y pueden ser accesibles para profesionales de la salud autorizados a través de un panel web, lo que permite un seguimiento remoto del paciente.</p>',
    technology: 'Software con Inteligencia artificial',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'es de facil acceso. Accesibles para personas con discapacidad auditiva y baja visión ',
    mode: 'proporciona ejercicios guiados, seguimiento de su progreso a lo largo del tiempo, educacion en salud.',
    systemsCorporals: [SYSTEMS_CORPORALS.CARDIOVASCULAR, SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'Última actuallizacion 17/06/2019',
    urls: [{
      name: 'Uso de una aplicación de salud móvil para mejorar la adherencia de los pacientes al tratamiento de la hipertensión: un ensayo clínico no aleatorizado.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.7717/peerj.11491'
    }],
    image: 'e-lifestyle.png',
    linksInfoApp: [{
      name: 'Más información en el sitio web de la UDES.',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.7717/peerj.11491'
    }],
    name: 'e-LifeStyle'
  },
  {
    description: '<p>La aplicación mymobility® con Apple Watch permite a los pacientes conectarse con su cirujano y equipo médico antes y después de ciertos procedimientos quirúrgicos, lesiones o traumatismos,proporciona instrucciones detalladas y listas de tareas diarias para respaldar la preparación y recuperación del paciente,a través de la aplicación en el iPhone, los usuarios pueden acceder a educación, encuestas y ejercicios seleccionados por su cirujano,el progreso del paciente se monitorea mediante el Apple Watch, que registra datos como pasos, pisos y frecuencia cardíaca, genera informes clínicos basados en estos datos y proporciona recordatorios para completar actividades. </p><p>Además, realiza un seguimiento de la recuperación del paciente mediante el recuento de pasos, pisos y métricas de frecuencia cardíaca, lo que ayuda al paciente y al cirujano a evaluar el progreso funcional durante la recuperación.</p>',
    technology: 'Sofware con inteligencia artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'La plataforma es compatible con la mayoría de los navegadores web y dispositivos móviles. Tecnologías de asistencia',
    mode: 'proporciona ejercicios asistidos personalziados y monitoreo remoto',
    systemsCorporals: [SYSTEMS_CORPORALS.CARDIOVASCULAR],
    barriers: 'los  usuarios deben posser iPhone de Apple capaz de emparejarse con el Apple Watch y ser móviles con no más de un bastón o una sola muleta como ayuda. La aplicación puede ser costosa para algunos usuarios.',
    urls: [{
      name: 'Uso de una plataforma de atención basada en teléfonos inteligentes después de una artroplastia primaria parcial y total de rodilla: seguimiento de 1 año de un ensayo controlado aleatorio prospectivo',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.1016/j.arth.2023.02.082'
    }],
    image: 'mymobility.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en la App Store',
      url: 'https://apps.apple.com/us/app/mymobility-patient-app/id1438566065'
    }],
    name: 'mymobility® con Apple Watch'
  },
  {
    description: '<p>La aplicación PhysiApp® permite acceder al programa de ejercicios personalizado, utilizando el código de acceso proporcionado por el proveedor de atención médica, donde puedes descargar el programa de ejercicios en casa, el cual incluye videos de alta definición y narración clara, además, puedes usar Chromecast para reproducir los videos en tu dispositivo Chromecast.</p><p>Con esta aplicación, conocerás con precisión los ejercicios prescritos y cómo realizarlos correctamente, también puedes proporcionar información segura a tu fisioterapeuta sobre cuánto has completado de cada ejercicio y si has experimentado algún dolor, realiza seguimiento detallado de tu progreso facilitando. la intervención del fisioterapeuta si es necesario.</p>',
    technology: 'Sofware de inteligencia artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.USERS],
    accessibility: 'plan basico, requiere de suscrpcion mensual. Interfaz de usuario intuitiva  accesible para  usuarios con discapacidad visual y auditiva ',
    mode: 'esta app proporciona a los pacientes ejercicios asistidos con  monitoreo de forma remota,brinda seguimiento del progreso.',
    systemsCorporals: [SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'el usuario requiere código de acceso para poder ingresar a la app.',
    urls: [{
      name: 'Viabilidad, usabilidad y disfrute de un programa de ejercicio en el hogar impartido a través de una aplicación de ejercicio para la salud musculoesquelética en adultos mayores que viven en la comunidad: estudio piloto prospectivo a corto plazo',
      url: 'https://doi-org.ezproxy.udes.edu.co/10.2196/21094'
    }],
    image: 'physiapp-2.png',
    linksInfoApp: [{
      name: 'Enlace de descarga en la Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.physitrack.physiapp&hl=es_DO'
    }],
    name: 'PhysiApp'
  },
  {
    description: '<p>Fitbit es una aplicación diseñada para promover un estilo de vida activo y saludable, ofreciendo diversas características para monitorear y mejorar la salud en general, permite el seguimiento de la actividad física, el sueño y la ingesta de alimentos, así como el ritmo cardíaco si el dispositivo cuenta con un sensor de ritmo cardíaco, también fomenta la conexión social al permitir a los usuarios conectarse con amigos y familiares para compartir logros y participar en desafíos.</p>',
    technology: 'software móvil con IA Inteligencia Artificial.',
    stage: [STAGES.IMPLEMENTATION],
    usability: [USABILITY.THERAPIST, USABILITY.PATIENT, USABILITY.USERS],
    accessibility: 'Requiere de suscripcion premium. La App ofrece algunas funciones de accesibilidad para usuarios con discapacidades auditivas.',
    mode: '<p>Monitoreo de la actividad física: La aplicación Fitbit puede usarse para rastrear una variedad de actividades, como pasos, distancia recorrida, calorías quemadas y minutos de actividad física. </p><p><strong>Seguimiento del sueño:</strong> La aplicación Fitbit puede usarse para rastrear la calidad y la duración del sueño. </p><p><strong>Establecimiento de objetivos:</strong> La aplicación Fitbit permite a los usuarios establecer objetivos de actividad física y sueño. </p><p><strong>Seguimiento del progreso:</strong> La aplicación Fitbit permite a los usuarios seguir su progreso a lo largo del tiempo y ver cómo sus hábitos están mejorando. </p><p>Ofrece funciones de motivación, como desafíos y recompensas, para ayudar a los usuarios a mantenerse activos, biofeedback.</p>',
    systemsCorporals: [SYSTEMS_CORPORALS.CARDIOVASCULAR, SYSTEMS_CORPORALS.MUSCULOSKELETAL],
    barriers: 'La precisión de algunos de los sensores de la aplicación Fitbit puede ser cuestionable. No es lo suficientemente motivadora para ayudarlos a mantener un estilo de vida activo.',
    urls: [{
      name: 'Intervenciones basadas en Fitbit para obtener resultados de un estilo de vida saludable: revisión sistemática y metanálisis',
      url: 'https://www.jmir.org/2020/10/e23954/'
    }],
    image: 'fitbit.png',
    linksInfoApp: [{
      name: 'Más información en Fitbit',
      url: 'https://www.fitbit.com/global/es/technology/fitbit-app'
    }],
    name: 'Fitbit'
  }
] as const
