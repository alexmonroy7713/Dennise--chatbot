const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');
const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

// Definir flujo secundario
const flowSecundario = addKeyword(['2', 'dos']).addAnswer([
    '📄 Por ahora, cree este modulo para mostrar el fin de todas las ramas',
    ]);


// Definir flujos de la universidad
const flowDocumentos = addKeyword(['5', 'cinco', 'documentos']).addAnswer(
    'Puedes ver los documentos necesarios desde el siguiente link 🌐')
.addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'

], null, null, [flowSecundario]);

const flowCosMatricula = addKeyword(['4', 'cuatro','matricula']).addAnswer(
    'Puedes ver el costo de la matricula desde el siguiente link 🌐')
.addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'


], null, null, [flowSecundario]);

const flowLimSolicitud = addKeyword(['3', 'tres','limite']).addAnswer(
    'Puedes ver el liite de solicitud desde el siguiente link 🌐')
.addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'

], null, null, [flowSecundario]);

const flowProSolicitud = addKeyword(['2', 'dos', 'solicitud'])
.addAnswer('Puedes hacer tu proceso de solicitud desde el siguiente link 🌐')
.addAnswer(['Enlace para descargar la convocatoria de admisión: 📄',
'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'

], null, null, [flowSecundario]);

const flowRequisitos = addKeyword(['1', 'uno', 'requisitos'])

.addAnswer([
    'Puedes ver los requisitos desde el siguiente link 🌐',
'Enlace para descargar la convocatoria de admisión: 📄',
'https://upsrj.edu.mx/wp-content/uploads/2023/07/Convocatoria-de-admision-mejorado.pdf 📎'

], null, null, [flowSecundario]);
//inica flujo de administracion
const flowAdmision = addKeyword(['1', 'uno',]).addAnswer([
    '🙌 Perfecto. Aquí tienes algunas opciones dentro del menú de Admisión:',
    '1️⃣ Requisitos de Admisión',
    '2️⃣ Proceso de Solicitud',
    '3️⃣ Fechas Límite de Solicitud',
    '4️⃣ Costos de Matrícula',
    '5️⃣ Documentos Necesarios',

], null, null, [flowRequisitos,flowProSolicitud, flowLimSolicitud, flowCosMatricula, flowDocumentos]);


const flowRobotica = addKeyword(['1', 'uno'])
.addAnswer([
    '🤖 La Ingeniería en Robótica Computacional forma profesionales para diseñar y desarrollar soluciones innovadoras en automatización mediante sistemas robóticos computacionales.',

'Los egresados pueden trabajar en áreas como software, automatización industrial, desarrollo de interfaces y proyectos especializados, tanto en el sector público como privado. 🎓',

    'Puedes ver los detalles de la carrera desde el siguiente link 🌐',
'Enlace Ingeniería en Robótica Computacional : 📄',
'https://upsrj.edu.mx/ingenieria-en-robotica-computacional/ 📎'
], null, null, [flowSecundario]);

const flowTerapia = addKeyword(['2', 'dos'])
.addAnswer([
     'Licenciatura en Terapia Física: Formamos profesionistas para estudiar y manejar problemas',
     'musculoesqueléticos, neurológicos y cardiovasculares en personas con diversidad funcional. Mejorala calidad de ',
     'vida del paciente con planes de tratamiento y ejercicio físico asertivo. Oportunidades laborales' ,
     'en el sector salud, educación e industrias con enfoque en atención personalizada.',



    'Puedes ver los detalles de la carrera desde el siguiente link 🌐',
'Enlace Licenciatura en Terapia Física: 📄',
'https://upsrj.edu.mx/terapia-fisica-2/ 📎'
], null, null, [flowSecundario]);

const flowSoftware = addKeyword(['3', 'tres'])
.addAnswer([
    'La Ingeniería en Software forma profesionales para diseñar, desarrollar e implementar ',
    'proyectos de tecnologías de la información con estándares de calidad internacional. ',
    'Oportunidades laborales en diversos sectores, como Desarrollador de software, Project Manager, Analista ',
    'de requerimientos y más. También posibilidad de emprender en el sector.',

    'Puedes ver los detalles de la carrera desde el siguiente link 🌐',
'Enlace Ingeniería en Software: 📄',
'https://upsrj.edu.mx/ingenieria-en-software/ 📎'
], null, null, [flowSecundario]);

const flowMetrologia = addKeyword(['4', 'cuatro'])
.addAnswer([
    'La Ingeniería en Metrología Industrial forma profesionales para diseñar sistemas de medición y',
     'programas de aseguramiento metrológico en diversos sectores industriales. Podrás liderar proyectos',
      'de investigación y gestionar la calidad en la producción. Oportunidades laborales en industrias',
       'automotriz, aeronáutica, química y más, así como en centros de investigación y laboratorios de calibración.',


    'Puedes ver los detalles de la carrera desde el siguiente link 🌐',
'Enlace Ingeniería en Metrología Industrial: 📄',
'https://upsrj.edu.mx/metrologia-industrial/ 📎'
], null, null, [flowSecundario]);

const flowAutomotriz = addKeyword(['5', 'CInco'])
.addAnswer([
    'La Ingeniería en Sistemas Automotrices forma profesionales para el diseño,' ,
    'desarrollo y mantenimiento de sistemas mecánicos, eléctricos y electrónicos en automotores. ',
    'Oportunidades laborales en manufactura, producción, diseño, ingeniería, calidad y administración ',
    'de empresas automotrices, así como en servicios de venta y postventa automotriz.',


    'Puedes ver los detalles de la carrera desde el siguiente link 🌐',
'Enlace Ingeniería en Sistemas Automotrices: 📄',
'https://upsrj.edu.mx/sistemas-automotrices/ 📎',
], null, null, [flowSecundario]);

const flowAnimacion = addKeyword(['6', 'seis'])
.addAnswer([
    'La Ingeniería en Animación y Efectos Visuales forma profesionales para diseñar ',
    'soluciones tecnológicas innovadoras en artes visuales y animación. Oportunidades ',
    'laborales en cine, televisión, videojuegos, publicidad, entre otros sectores.',



    'Puedes ver los detalles de la carrera desde el siguiente link 🌐',
'Enlace Ingeniería en Animación y Efectos Visuales: 📄',
'https://upsrj.edu.mx/animacion-y-efectos-visuales/ 📎',
], null, null, [flowSecundario]);

//Licenciaturas
const flowLicenciaturas = addKeyword(['1', 'uno', 'licenciaturas','regresar', ]).addAnswer([
    '🙌 Perfecto. Aquí tienes las opciones dentro del menú de Licenciaturas:',
'1️⃣ Ingeniería en Robótica Computacional 🤖💻',
'2️⃣ Licenciatura en Terapia Física 💪👩‍⚕️',
'3️⃣ Ingeniería en Software 💻👨‍💻',
'4️⃣ Ingeniería en Metrología Industrial 🔧📏🏭',
'5️⃣ Ingeniería en Sistemas Automotrices 🚗🔧',
'6️⃣ Ingeniería en Animación y Efectos Visuales 🎬🎨🚀',
], null, null, [flowRobotica,flowTerapia,flowSoftware,flowMetrologia,flowAutomotriz,flowAnimacion]);

const flowMasCalidad = addKeyword(['2', 'dos']).addAnswer([
    'Puedes ver los detalles de la Maestria desde el siguiente link 🌐',
'Enlace Maestría en Calidad y Metrología Industrial: 📄',
'https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias-2/ 📎'
    
], null, null, [flowSecundario]);

const flowMasEnseñanza = addKeyword(['1', 'uno']).addAnswer([
    'Puedes ver los detalles de la Maestria desde el siguiente link 🌐',
'Enlace Maestría en Enseñanza de las Ciencias: 📄',
'https://upsrj.edu.mx/maestria-en-ensenanza-de-las-ciencias/📎'
    
], null, null, [flowSecundario]);
//maestrias
const flowMaestrias = addKeyword(['2', 'dos','maestrias']).addAnswer([
    '🙌 Perfecto. Aquí tienes las opciones dentro del menú de Mestrías:',
'1️⃣ Maestría en Enseñanza de las Ciencias 🎓🔬',
'2️⃣ Maestría en Calidad y Metrología Industrial 🎓🔧📏',
], null, null, [flowMasEnseñanza, flowMasCalidad]);
//inicia el flujo de carreas
const flowProgramasAcademicos = addKeyword(['2', 'dos']).addAnswer([
    '🙌 Perfecto. Aquí tienes algunas opciones dentro del menú de Programas Académicos:',
    '1️⃣ Licenciaturas 🎓',
    '2️⃣ Maestrías 🎓📚',
    
], null, null, [flowLicenciaturas,flowMaestrias])

const flowServiciosEstudiantiles = addKeyword(['3', 'tres']).addAnswer([
    '🙌 Perfecto. Aquí tienes algunas opciones dentro del menú de Programas Académicos:',
    '1) Licenciaturas',
    '2) Maestrías',
    '3) Doctorados',
], null, null, [flowSecundario]);

const flowBecaExcelencia= addKeyword(['1', '2',]).addAnswer([
    'Beca Excelencia 🎗️',
    '',
    'Se otorga para distinguir a los alumnos que hayan alcanzado los mejores promedios de calificaciones en el cuatrimestre inmediato anterior. Esta beca comprende la condonación hasta del 100% del monto correspondiente al pago de la cuota de reinscripción. Superior o igual a 9.5 deberá ser el promedio inmediato anterior.🦉',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
    
], null, null, [flowSecundario]);
const flowBecaAcademica= addKeyword(['2', 'dos',]).addAnswer([
    'Beca Academica 📚',
    '',
    'Esta beca comprende la condonación hasta de un 80% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que hayan conservado un promedio comprendido en el intervalo de 8.5 a 9.4',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',

    
    
], null, null, [flowSecundario]);
const flowBecaExtension= addKeyword(['3', 'tres',]).addAnswer([
    'Beca Extension 🏋️‍♂️🎭',
    '',
    'Se otorga a los alumnos regulares que tengan una participación deportiva y/o cultural relevante en equipo o grupos representativos de la Universidad, o estén inscritos en algún programa de Cultura Verde (sustentabilidad) participando en eventos locales, estatales, regionales, nacionales o internacionales. Esta beca comprende la condonación hasta el 90% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que hayan manteniendo un promedio mínimo de 8.0.',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐', 
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',

    
    
], null, null, [flowSecundario]);

const flowBecaApoyoEconómico= addKeyword(['4', 'cuatro',]).addAnswer([
    'Beca Apoyo Economico 💰',
    '',
    'Esta beca comprende la condonación de hasta un 70% del monto correspondiente al pago de la cuota de reinscripción. Se otorga a los alumnos que demuestren no contar con recursos económicos suficientes para continuar sus estudios y conservan un promedio mínimo de 8.0.',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',

    
    
], null, null, [flowSecundario]);
const flowBecaEspecial= addKeyword(['5', 'cinco',]).addAnswer([
    'Beca Especial 🌟',
    '',
    'Esta beca comprende la condonación de un porcentaje de la cuota de reinscripción definido. Se otorga a los alumnos regulares bajo las siguientes características:',
    '',
    'Que acrediten una condición de vulnerabilidad (madres solteras, indígenas u otras).',
    'Alumnos de la Licenciatura en Terapia Física que realizan su periodo de Servicio Social en modalidad CIFRHS o en otra institución, en este caso los alumnos estarán exentos de realizar servicio becario por el Consejo de Calidad de la UPSRJ.',
    '',
    'Puedes hacer tu proceso de solicitud desde el siguiente link 🌐',
    'https://upsrj.edu.mx/wp-content/uploads/2023/07/CONVOCATORIA-BECAS-INSTITUCIONALES-SEP-DIC-2023.pdf',
    
    



    
    
], null, null, [flowSecundario]);

const flowBecasEstudiantes = addKeyword(['4', 'cuatro']).addAnswer([
    '🏫 ¡Becas disponibles en la Universidad Politécnica de Santa Rosa! 🎓',
    '',
    'Modalidades de beca:',
    
    
    
    
    

    '1️⃣ Beca Excelencia 🏆',
    '2️⃣ Beca Académica 📚',
    '3️⃣ Beca Extensión 🏋️‍♂️🎭n',
    '4️⃣ Beca Apoyo Económico 💰',
    '5️⃣ Beca Especial 🌟',
    '',
    
    '¡Estamos aquí para ayudarte en tu camino educativo! 🌟',
], null, null, [flowBecaExcelencia,flowBecaAcademica, flowBecaEspecial,flowBecaApoyoEconómico,flowBecaExtension]);

// Definir flujo de Denisse
const flowDenisse = addKeyword(['2008mt']).addAnswer([
    'Te quiero mucho, este proyecto es para ti.',
    'Me sacas canas verdes, pero siempre te voy a querer',
    'Porque eres mi mayor orgullo.',
], null, null, [flowSecundario]);

// Definir flujo de la universidad
const flowUniversidad = addKeyword(['1', 'uno']).addAnswer([
    '📚 ¡Hola! Bienvenido/a a los servicios escolares upsrj.',
    '¿En qué puedo ayudarte hoy?',
    '1) Admisión',
    '2) Programas Académicos',
    '3) Servicios Estudiantiles',
    '4) Becas a estudiantes',
], null, null, [flowAdmision, flowProgramasAcademicos, flowServiciosEstudiantiles, flowBecasEstudiantes]);

// Resto del código...

//Codigo para la clinica de fisioterapia


// Flujo Información General
const flowInformacionGeneral = addKeyword(['1', 'uno'])
  .addAnswer([
    '🏢 La clínica está ubicada en https://goo.gl/maps/ZGTYY79t7Nn2Foxi7 y nuestro horario de atención tambien lo puede revisar en el link anterior'
  ], null, null, [flowSecundario]);

// Flujo Servicios y Costos
const flowServiciosCostos = addKeyword(['2', 'dos'])
  .addAnswer([
    '🏥 Ofrecemos diversos servicios de fisioterapia, incluyendo [lista de servicios]. Los precios varían según el tipo de servicio, te proporcionaré la información detallada sobre costos al agendar una cita.'
  ], null, null, [flowSecundario]);

// Flujo Proceso de Tratamiento
const flowProcesoTratamiento = addKeyword(['3', 'tres'])
  .addAnswer([
    '🏋️‍♂️ La duración promedio de una sesión de terapia es de [duración]. La cantidad de sesiones necesarias puede variar según el tratamiento y la condición del paciente. Nuestros fisioterapeutas evaluarán tu situación y te darán una recomendación específica.'
  ], null, null, [flowSecundario]);

// Flujo Requerimientos y Contacto
const flowRequerimientosContacto = addKeyword(['4', 'cuatro'])
  .addAnswer([
    '📝 No es necesario tener una remisión médica para programar una cita. Puedes agendar directamente. También puedes hablar con uno de nuestros fisioterapeutas para obtener más información antes de agendar.'
  ], null, null, [flowSecundario]);

// Flujo Administrativo
const flowAdministrativo = addKeyword(['5', 'cinco'])
  .addAnswer([
    '❌ Nuestra política de cancelación establece que si necesitas cancelar una cita, te pedimos que lo hagas con al menos [tiempo de anticipación] de antelación para que podamos reprogramarla sin costo adicional.'
  ], null, null, [flowSecundario]);

// Flujo Cierre de la Conversación
const flowCierre = addKeyword(['6', 'seis'])
  .addAnswer([
    '👋 "👋 ¡Gracias por platicar conmigo! Fue genial ayudarte. Si tienes más preguntas o necesitas asistencia, siempre estaré aquí para ti. ¡Que tengas un día lleno de sonrisas y bienestar! 😊💫"'
  ], null, null, [flowSecundario]);

// Flujo Principal de la Clínica
const flowClinica = addKeyword(['2', 'dos', 'segunda', 'clinica', 'fisioterapia'])
  .addAnswer('🙋🏽‍♀️ ¡Hola! Bienvenido/a a la clinica. ¿En qué puedo ayudarte hoy?')
  .addAnswer([
    '1️⃣ Información general',
    '2️⃣ Servicios y costos',
    '3️⃣ Proceso de tratamiento',
    '4️⃣ Requerimientos y contacto',
    '5️⃣ Administrativo',
    '6️⃣ Cierre de la conversación'
  ], null, null, [flowInformacionGeneral, flowServiciosCostos, flowProcesoTratamiento, flowRequerimientosContacto, flowAdministrativo, flowCierre, flowSecundario]);

// Resto del código...
// Definir flujo principal
const flowPrincipal = addKeyword(['hola', 'hello', 'hi', 'ole', 'alo'])
  .addAnswer('🙋🏽‍♀️ ¡Hola! Soy Denisse, tu asistente virtual👩🏽‍💻📚')
  .addAnswer([
    '¡🌐🎓 Bienvenido/a a la universidad politécnica de santa rosa jauregui!',
    '¿En qué puedo ayudarle hoy?',
    ' ',
    '1️⃣ Información sobre la universidad 🏢',
    '2️⃣ Clínica de fisioterapia 🏥',
    '3️⃣ Por ahora no necesito nada ❌',
  ], null, null, [flowUniversidad, flowDenisse, flowClinica, flowSecundario]);

//Fin del codigo para la clinica de fisioterapia








// Función principal
const main = async () => {
    const adapterDB = new MockAdapter();
    const adapterFlow = createFlow([flowPrincipal]);
    const adapterProvider = createProvider(BaileysProvider);

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    });

    QRPortalWeb();
};

main();