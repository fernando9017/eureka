// 💡 Eureka! - Base de Datos de Curiosidades

const FACTS = [
    // === 🎨 ARTE ===
    {
        category: "arte",
        emoji: "🖼️",
        title: "Van Gogh solo vendió UNA pintura en vida",
        description: "'The Red Vineyard' se vendió por 400 francos en 1890, meses antes de su muerte. Hoy sus obras valen cientos de millones de dólares.",
        era: "Siglo XIX",
        location: "Países Bajos"
    },
    {
        category: "arte",
        emoji: "🎭",
        title: "La Mona Lisa no tiene cejas",
        description: "Era moda en el Renacimiento florentino que las mujeres se afeitaran las cejas. También es posible que se hayan desvanecido con el tiempo.",
        era: "Siglo XVI",
        location: "Italia"
    },
    {
        category: "arte",
        emoji: "🌻",
        title: "Picasso podía dibujar antes de caminar",
        description: "Su primera palabra fue 'piz' (lápiz en español). Su padre, también pintor, le enseñó desde bebé. A los 13 ya superaba a su padre.",
        era: "Siglo XX",
        location: "España"
    },
    {
        category: "arte",
        emoji: "🗿",
        title: "Las estatuas griegas eran a todo color",
        description: "Las esculturas clásicas que vemos blancas estaban originalmente pintadas con colores vibrantes. La pintura se perdió con el tiempo.",
        era: "Antigua Grecia",
        location: "Grecia"
    },
    {
        category: "arte",
        emoji: "🎨",
        title: "Frida Kahlo empezó a pintar por un accidente",
        description: "A los 18 años sufrió un terrible accidente de autobús. Durante su recuperación, su madre le puso un espejo en el techo y empezó a pintar autorretratos.",
        era: "Siglo XX",
        location: "México"
    },
    {
        category: "arte",
        emoji: "🖌️",
        title: "El color más caro del mundo era el azul",
        description: "El azul ultramar se hacía de lapislázuli traído de Afganistán. Era más caro que el oro y solo se usaba para pintar a la Virgen María.",
        era: "Renacimiento",
        location: "Europa"
    },
    {
        category: "arte",
        emoji: "🏛️",
        title: "El David de Miguel Ángel mide 5 metros",
        description: "Fue esculpido de un solo bloque de mármol que otros escultores habían rechazado. Miguel Ángel tenía solo 26 años cuando lo completó.",
        era: "Siglo XVI",
        location: "Italia"
    },
    {
        category: "arte",
        emoji: "🌊",
        title: "La Gran Ola no es japonesa tradicional",
        description: "Hokusai creó 'La Gran Ola de Kanagawa' influenciado por el arte occidental. El Monte Fuji al fondo es el verdadero tema, no la ola.",
        era: "Siglo XIX",
        location: "Japón"
    },

    // === 🎵 MÚSICA ===
    {
        category: "musica",
        emoji: "🎹",
        title: "Mozart componía desde los 5 años",
        description: "Su primera composición fue un Minuet en Sol Mayor. A los 8 años ya había escrito su primera sinfonía completa.",
        era: "Siglo XVIII",
        location: "Austria"
    },
    {
        category: "musica",
        emoji: "🎸",
        title: "Beethoven compuso sordo",
        description: "Empezó a perder la audición a los 26 años. La Novena Sinfonía, su obra maestra, la compuso completamente sordo.",
        era: "Siglo XIX",
        location: "Alemania"
    },
    {
        category: "musica",
        emoji: "🎺",
        title: "El 'Cumpleaños Feliz' tiene copyright",
        description: "Warner Music cobró royalties por esta canción hasta 2016, cuando un juez determinó que el copyright no era válido. Ganaron millones por décadas.",
        era: "Siglo XX",
        location: "Estados Unidos"
    },
    {
        category: "musica",
        emoji: "🎻",
        title: "Un Stradivarius vale millones",
        description: "Solo existen unos 650 violines Stradivarius. El más caro se vendió por 16 millones de dólares. Nadie ha logrado replicar su sonido.",
        era: "Siglo XVIII",
        location: "Italia"
    },
    {
        category: "musica",
        emoji: "🎤",
        title: "Freddie Mercury tenía 4 octavas de rango vocal",
        description: "La mayoría de cantantes tienen 2 octavas. Mercury podía ir desde un bajo profundo hasta un soprano, algo casi imposible.",
        era: "Siglo XX",
        location: "Reino Unido"
    },
    {
        category: "musica",
        emoji: "🥁",
        title: "El reggaetón nació en Panamá",
        description: "Aunque se popularizó en Puerto Rico, el reggaetón tiene raíces en el reggae en español panameño de los 80s, mezclado con hip-hop.",
        era: "Siglo XX",
        location: "Panamá"
    },
    {
        category: "musica",
        emoji: "🎼",
        title: "Bach tuvo 20 hijos",
        description: "Johann Sebastian Bach tuvo 20 hijos con dos esposas. Varios de ellos también se convirtieron en compositores famosos.",
        era: "Siglo XVIII",
        location: "Alemania"
    },

    // === 📜 HISTORIA ===
    {
        category: "historia",
        emoji: "🏺",
        title: "Cleopatra vivió más cerca del iPhone que de las pirámides",
        description: "Las pirámides se construyeron en 2560 a.C. Cleopatra nació en 69 a.C. Hay más tiempo entre las pirámides y Cleopatra que entre ella y nosotros.",
        era: "Antigüedad",
        location: "Egipto"
    },
    {
        category: "historia",
        emoji: "⚔️",
        title: "Los vikingos usaban orina para hacer fuego",
        description: "Hervían orina en hongos para crear 'yesca'. El nitrato de sodio en la orina hacía que el material ardiera lentamente por días.",
        era: "Era Vikinga",
        location: "Escandinavia"
    },
    {
        category: "historia",
        emoji: "👑",
        title: "Napoleón no era tan bajito",
        description: "Medía 1.70m, altura promedio para la época. El mito viene de propaganda británica y confusión entre pulgadas francesas e inglesas.",
        era: "Siglo XIX",
        location: "Francia"
    },
    {
        category: "historia",
        emoji: "🗽",
        title: "La Estatua de la Libertad era color cobre",
        description: "Originalmente era del color del cobre pulido. El verde actual (pátina) tomó 20 años en desarrollarse por oxidación.",
        era: "Siglo XIX",
        location: "Estados Unidos"
    },
    {
        category: "historia",
        emoji: "🏰",
        title: "Los castillos medievales olían terrible",
        description: "No tenían plomería. Los baños eran hoyos que drenaban al foso. Por eso el foso no solo protegía: nadie quería caer ahí.",
        era: "Edad Media",
        location: "Europa"
    },
    {
        category: "historia",
        emoji: "📚",
        title: "La Biblioteca de Alejandría no se quemó de una vez",
        description: "Fue destruida gradualmente a lo largo de siglos por guerras, negligencia y falta de fondos. No fue un solo incendio dramático.",
        era: "Antigüedad",
        location: "Egipto"
    },
    {
        category: "historia",
        emoji: "🎭",
        title: "Los gladiadores rara vez morían",
        description: "Entrenarlos era muy caro. La mayoría de combates terminaban cuando uno se rendía. La muerte era la excepción, no la regla.",
        era: "Imperio Romano",
        location: "Italia"
    },
    {
        category: "historia",
        emoji: "🗿",
        title: "Las cabezas de Isla de Pascua tienen cuerpos",
        description: "Los famosos Moai no son solo cabezas. Están enterrados hasta el cuello, con cuerpos completos bajo tierra de hasta 10 metros.",
        era: "Siglo XIII",
        location: "Chile"
    },

    // === 🔬 CIENCIA ===
    {
        category: "ciencia",
        emoji: "🧬",
        title: "Compartimos 60% de ADN con los plátanos",
        description: "La vida en la Tierra comparte un ancestro común. Con los chimpancés compartimos 98%, con ratones 85%, y con plátanos 60%.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "💡",
        title: "Edison no inventó el foco",
        description: "Al menos 20 inventores lo crearon antes. Edison mejoró el diseño para que durara más de 1,200 horas y lo comercializó masivamente.",
        era: "Siglo XIX",
        location: "Estados Unidos"
    },
    {
        category: "ciencia",
        emoji: "⚡",
        title: "Un rayo es 5 veces más caliente que el Sol",
        description: "La temperatura de un rayo alcanza 30,000°C. La superficie del Sol está a 'solo' 5,500°C. Por eso puede fundir arena en vidrio.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "🧠",
        title: "Tu cerebro genera suficiente electricidad para encender un foco",
        description: "El cerebro humano produce entre 12 y 25 watts de electricidad. Suficiente para encender un LED pequeño.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "💎",
        title: "Llueven diamantes en Neptuno",
        description: "La presión extrema en Neptuno y Urano convierte el metano en diamantes. Llueven hacia el núcleo del planeta constantemente.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "ciencia",
        emoji: "🔥",
        title: "El fuego no tiene sombra",
        description: "El fuego emite luz, no la bloquea. Por eso no puede proyectar sombra. Aunque el humo sí puede hacerlo.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "🌡️",
        title: "El cero absoluto es inalcanzable",
        description: "-273.15°C es la temperatura más baja posible. Las partículas dejan de moverse. Acercarse requiere infinita energía.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "🧪",
        title: "Marie Curie sigue siendo radioactiva",
        description: "Sus notas y pertenencias están guardadas en cajas de plomo. Estarán radioactivas por 1,500 años más.",
        era: "Siglo XX",
        location: "Francia"
    },

    // === 🌍 CULTURA ===
    {
        category: "cultura",
        emoji: "🍕",
        title: "La pizza hawaiana se inventó en Canadá",
        description: "Sam Panopoulos, un inmigrante griego en Ontario, creó la pizza con piña en 1962. Hawaii no tuvo nada que ver.",
        era: "Siglo XX",
        location: "Canadá"
    },
    {
        category: "cultura",
        emoji: "☕",
        title: "El café fue descubierto por cabras",
        description: "Según la leyenda, un pastor etíope notó que sus cabras bailaban después de comer ciertas bayas rojas. Así nació el café.",
        era: "Siglo IX",
        location: "Etiopía"
    },
    {
        category: "cultura",
        emoji: "🥢",
        title: "En Japón sorber la sopa es educado",
        description: "Hacer ruido al comer ramen demuestra que lo disfrutas. Es un cumplido al chef. El silencio puede ser grosero.",
        era: "Contemporáneo",
        location: "Japón"
    },
    {
        category: "cultura",
        emoji: "💀",
        title: "El Día de Muertos no es Halloween mexicano",
        description: "Es una tradición prehispánica de más de 3,000 años. Se celebra la vida de los muertos, no se les teme. Son dos fiestas muy diferentes.",
        era: "Prehispánico",
        location: "México"
    },
    {
        category: "cultura",
        emoji: "🎎",
        title: "En Corea todos cumplen años el mismo día",
        description: "En el sistema tradicional, todos envejecen un año el 1 de enero, no en su cumpleaños real. Un bebé nacido el 31 de diciembre tiene '2 años' al día siguiente.",
        era: "Contemporáneo",
        location: "Corea"
    },
    {
        category: "cultura",
        emoji: "🌶️",
        title: "El chile más picante puede matarte",
        description: "El Carolina Reaper tiene 2.2 millones de unidades Scoville. Puede causar shock anafiláctico. Un jalapeño tiene solo 8,000.",
        era: "Contemporáneo",
        location: "Estados Unidos"
    },
    {
        category: "cultura",
        emoji: "📖",
        title: "Islandia publica más libros per cápita que nadie",
        description: "1 de cada 10 islandeses publicará un libro en su vida. En Navidad es tradición regalar libros y leerlos esa noche.",
        era: "Contemporáneo",
        location: "Islandia"
    },

    // === 🌿 NATURALEZA ===
    {
        category: "naturaleza",
        emoji: "🐙",
        title: "Los pulpos tienen 3 corazones y sangre azul",
        description: "Dos corazones bombean sangre a las branquias, uno al cuerpo. Su sangre usa cobre en vez de hierro, por eso es azul.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🦈",
        title: "Los tiburones son más viejos que los árboles",
        description: "Los tiburones existen desde hace 400 millones de años. Los árboles aparecieron hace 350 millones. Los tiburones vieron nacer los bosques.",
        era: "Prehistoria",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🍯",
        title: "La miel nunca caduca",
        description: "Se ha encontrado miel de 3,000 años en tumbas egipcias perfectamente comestible. Su bajo contenido de agua evita las bacterias.",
        era: "Antigüedad",
        location: "Egipto"
    },
    {
        category: "naturaleza",
        emoji: "🦋",
        title: "Las mariposas saborean con los pies",
        description: "Tienen sensores de sabor en las patas. Cuando se paran en una flor, inmediatamente saben si es comestible.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🌳",
        title: "Hay un hongo más grande que una ballena azul",
        description: "El Armillaria ostoyae en Oregon cubre 9.6 km². Es el organismo vivo más grande del mundo y tiene 2,400 años.",
        era: "Contemporáneo",
        location: "Estados Unidos"
    },
    {
        category: "naturaleza",
        emoji: "🐘",
        title: "Los elefantes son los únicos animales que no pueden saltar",
        description: "Sus patas están diseñadas para soportar peso, no para impulsarse. También son los únicos mamíferos con 4 rodillas.",
        era: "Contemporáneo",
        location: "África/Asia"
    },
    {
        category: "naturaleza",
        emoji: "🦩",
        title: "Los flamingos son blancos naturalmente",
        description: "El color rosa viene de los camarones y algas que comen, ricos en betacaroteno. En zoológicos deben darles suplementos para mantener el color.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🐋",
        title: "El corazón de una ballena azul pesa como un auto",
        description: "Pesa alrededor de 180 kg. Un humano podría nadar por sus arterias. Su latido se puede escuchar a 3 km de distancia.",
        era: "Contemporáneo",
        location: "Océanos"
    },

    // === 🚀 ESPACIO ===
    {
        category: "espacio",
        emoji: "🌍",
        title: "Un día en Venus es más largo que un año",
        description: "Venus tarda 243 días terrestres en rotar sobre sí mismo, pero solo 225 días en dar la vuelta al Sol. Su día es más largo que su año.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "👨‍🚀",
        title: "En el espacio nadie puede escucharte",
        description: "El sonido necesita un medio para viajar (aire, agua). En el vacío del espacio no hay moléculas, así que hay silencio absoluto.",
        era: "Contemporáneo",
        location: "Espacio"
    },
    {
        category: "espacio",
        emoji: "🌙",
        title: "La Luna se aleja de la Tierra cada año",
        description: "Se aleja 3.8 cm por año debido a las mareas. Hace millones de años estaba mucho más cerca y los días eran más cortos.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "⭐",
        title: "Hay más estrellas que granos de arena en la Tierra",
        description: "Se estima que hay 70 mil millones de billones de estrellas en el universo observable. Más que todos los granos de arena de todas las playas.",
        era: "Contemporáneo",
        location: "Universo"
    },
    {
        category: "espacio",
        emoji: "🕳️",
        title: "Un agujero negro puede caber en tu bolsillo",
        description: "Si comprimes la Tierra a la densidad de un agujero negro, mediría solo 1.7 cm. Pero seguiría teniendo la misma masa.",
        era: "Contemporáneo",
        location: "Universo"
    },
    {
        category: "espacio",
        emoji: "🛸",
        title: "Hay un planeta de diamante",
        description: "55 Cancri e es una 'super-Tierra' que podría estar compuesta en gran parte de diamante. Vale más que toda la economía mundial.",
        era: "Contemporáneo",
        location: "40 años luz"
    },
    {
        category: "espacio",
        emoji: "☀️",
        title: "La luz del Sol tiene 8 minutos de antigüedad",
        description: "La luz tarda 8 minutos y 20 segundos en llegar del Sol a la Tierra. El Sol que ves es como era hace 8 minutos.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "🪐",
        title: "Saturno flotaría en agua",
        description: "Es el único planeta menos denso que el agua. Si hubiera un océano suficientemente grande, Saturno flotaría (aunque sus anillos no).",
        era: "Contemporáneo",
        location: "Sistema Solar"
    }
];

const CATEGORIES = {
    all: { name: "Todos", icon: "🎲" },
    arte: { name: "Arte", icon: "🎨" },
    musica: { name: "Música", icon: "🎵" },
    historia: { name: "Historia", icon: "📜" },
    ciencia: { name: "Ciencia", icon: "🔬" },
    cultura: { name: "Cultura", icon: "🌍" },
    naturaleza: { name: "Naturaleza", icon: "🌿" },
    espacio: { name: "Espacio", icon: "🚀" }
};

// === 🆕 NUEVOS DATOS v2 ===

const FACTS_V2 = [
    // MÁS ARTE
    {
        category: "arte",
        emoji: "🎪",
        title: "Salvador Dalí pagaba en restaurantes con dibujos",
        description: "Hacía dibujos en los cheques sabiendo que nadie los cobraría porque valían más como arte. Comía gratis toda su vida.",
        era: "Siglo XX",
        location: "España"
    },
    {
        category: "arte",
        emoji: "🖼️",
        title: "El Grito de Munch ha sido robado dos veces",
        description: "Fue robado en 1994 y 2004. En el primer robo, los ladrones dejaron una nota: 'Gracias por la pobre seguridad'.",
        era: "Siglo XX",
        location: "Noruega"
    },
    
    // MÁS CIENCIA
    {
        category: "ciencia",
        emoji: "🧲",
        title: "Tu cuerpo tiene suficiente hierro para hacer un clavo",
        description: "El cuerpo humano promedio contiene 3-4 gramos de hierro, suficiente para fabricar un clavo de 7 centímetros.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "🦴",
        title: "Nacemos con 300 huesos, morimos con 206",
        description: "Muchos huesos se fusionan durante el crecimiento. Por eso los bebés son más flexibles que los adultos.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "💧",
        title: "El agua caliente se congela más rápido que la fría",
        description: "Se llama Efecto Mpemba. Aunque suena ilógico, bajo ciertas condiciones el agua caliente se congela primero.",
        era: "Siglo XX",
        location: "Tanzania"
    },
    {
        category: "ciencia",
        emoji: "🌈",
        title: "Los colores no existen realmente",
        description: "El color es solo la interpretación de tu cerebro de diferentes longitudes de onda de luz. Los objetos no 'tienen' color.",
        era: "Contemporáneo",
        location: "Global"
    },
    
    // MÁS HISTORIA
    {
        category: "historia",
        emoji: "🗡️",
        title: "Los samurái podían matar legalmente por un insulto",
        description: "Tenían el derecho de 'kiri-sute gomen': cortar y abandonar. Podían matar a cualquier plebeyo que los insultara.",
        era: "Japón Feudal",
        location: "Japón"
    },
    {
        category: "historia",
        emoji: "🏴‍☠️",
        title: "Los piratas usaban aretes por una razón práctica",
        description: "Creían que el oro mejoraba la vista. También servía para pagar su funeral si morían en el mar.",
        era: "Siglo XVII",
        location: "Caribe"
    },
    {
        category: "historia",
        emoji: "🎩",
        title: "Abraham Lincoln guardaba documentos en su sombrero",
        description: "Su icónico sombrero de copa era básicamente su maletín. Guardaba cartas, discursos y billetes ahí.",
        era: "Siglo XIX",
        location: "Estados Unidos"
    },
    {
        category: "historia",
        emoji: "🏛️",
        title: "El Coliseo tenía un techo retráctil",
        description: "El 'velarium' era una enorme lona operada por marineros que protegía a 50,000 espectadores del sol.",
        era: "Imperio Romano",
        location: "Italia"
    },
    
    // MÁS MÚSICA
    {
        category: "musica",
        emoji: "🎸",
        title: "Jimi Hendrix no sabía leer música",
        description: "Uno de los mejores guitarristas de la historia era completamente autodidacta. Tocaba de oído.",
        era: "Siglo XX",
        location: "Estados Unidos"
    },
    {
        category: "musica",
        emoji: "🎵",
        title: "La canción más cara de la historia costó 14 millones",
        description: "'Smooth Criminal' de Michael Jackson. El video con efectos especiales y coreografía costó una fortuna.",
        era: "Siglo XX",
        location: "Estados Unidos"
    },
    
    // MÁS CULTURA
    {
        category: "cultura",
        emoji: "🍫",
        title: "El chocolate era moneda en Mesoamérica",
        description: "Los aztecas usaban granos de cacao como dinero. 100 granos = 1 esclavo. El chocolate era para la élite.",
        era: "Prehispánico",
        location: "México"
    },
    {
        category: "cultura",
        emoji: "💤",
        title: "En España la siesta es patrimonio cultural",
        description: "La palabra 'siesta' viene de 'hora sexta' (mediodía romano). Está científicamente probado que mejora la productividad.",
        era: "Contemporáneo",
        location: "España"
    },
    {
        category: "cultura",
        emoji: "🎭",
        title: "En Finlandia hay competencia de cargar esposas",
        description: "El ganador recibe el peso de su esposa en cerveza. Es un deporte oficial desde 1992.",
        era: "Contemporáneo",
        location: "Finlandia"
    },
    
    // MÁS NATURALEZA
    {
        category: "naturaleza",
        emoji: "🦑",
        title: "El calamar gigante tiene el ojo más grande del mundo",
        description: "Sus ojos miden 27 cm de diámetro, del tamaño de un balón de fútbol. Pueden ver en la oscuridad total.",
        era: "Contemporáneo",
        location: "Océanos"
    },
    {
        category: "naturaleza",
        emoji: "🐌",
        title: "Los caracoles pueden dormir 3 años seguidos",
        description: "Cuando el clima no es favorable, entran en hibernación. Pueden sobrevivir sin comer durante ese tiempo.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🦎",
        title: "Los camaleones no cambian de color para camuflarse",
        description: "Cambian según su temperatura, luz y estado de ánimo. El camuflaje es solo un efecto secundario.",
        era: "Contemporáneo",
        location: "África"
    },
    {
        category: "naturaleza",
        emoji: "🐝",
        title: "Las abejas pueden reconocer rostros humanos",
        description: "Usan la misma técnica que nosotros: identifican la configuración de ojos, nariz y boca como un patrón.",
        era: "Contemporáneo",
        location: "Global"
    },
    
    // MÁS ESPACIO
    {
        category: "espacio",
        emoji: "🌑",
        title: "Hay un lado de la Luna que nunca vemos",
        description: "La Luna siempre muestra la misma cara a la Tierra debido a la rotación sincrónica. El 'lado oscuro' recibe la misma luz.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "🔭",
        title: "Hay más árboles en la Tierra que estrellas en la Vía Láctea",
        description: "Hay aproximadamente 3 billones de árboles vs 100-400 mil millones de estrellas en nuestra galaxia.",
        era: "Contemporáneo",
        location: "Tierra"
    },
    {
        category: "espacio",
        emoji: "🌌",
        title: "El espacio huele a carne quemada y metal",
        description: "Astronautas reportan un olor distintivo en sus trajes. Se cree que es por estrellas moribundas cercanas.",
        era: "Contemporáneo",
        location: "Espacio"
    },
    {
        category: "espacio",
        emoji: "🛰️",
        title: "Hay un Tesla flotando en el espacio",
        description: "Elon Musk lanzó su Tesla Roadster rojo en 2018. Starman, el maniquí al volante, orbita el Sol.",
        era: "Siglo XXI",
        location: "Órbita Solar"
    }
];

// Merge arrays
FACTS.push(...FACTS_V2);
