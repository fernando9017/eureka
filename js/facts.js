// 💡 Eureka! v2.1 - Base de Datos con Imágenes

const FACTS = [
    // === 🎨 ARTE ===
    {
        category: "arte",
        emoji: "🖼️",
        image: "van-gogh,painting",
        title: "Van Gogh solo vendió UNA pintura en vida",
        description: "'The Red Vineyard' se vendió por 400 francos en 1890, meses antes de su muerte. Hoy sus obras valen cientos de millones de dólares.",
        era: "Siglo XIX",
        location: "Países Bajos"
    },
    {
        category: "arte",
        emoji: "🎭",
        image: "mona-lisa,louvre",
        title: "La Mona Lisa no tiene cejas",
        description: "Era moda en el Renacimiento florentino que las mujeres se afeitaran las cejas. También es posible que se hayan desvanecido con el tiempo.",
        era: "Siglo XVI",
        location: "Italia"
    },
    {
        category: "arte",
        emoji: "🌻",
        image: "picasso,art",
        title: "Picasso podía dibujar antes de caminar",
        description: "Su primera palabra fue 'piz' (lápiz en español). Su padre, también pintor, le enseñó desde bebé. A los 13 ya superaba a su padre.",
        era: "Siglo XX",
        location: "España"
    },
    {
        category: "arte",
        emoji: "🗿",
        image: "greek-statue,marble",
        title: "Las estatuas griegas eran a todo color",
        description: "Las esculturas clásicas que vemos blancas estaban originalmente pintadas con colores vibrantes. La pintura se perdió con el tiempo.",
        era: "Antigua Grecia",
        location: "Grecia"
    },
    {
        category: "arte",
        emoji: "🎨",
        image: "frida-kahlo,mexican-art",
        title: "Frida Kahlo empezó a pintar por un accidente",
        description: "A los 18 años sufrió un terrible accidente de autobús. Durante su recuperación, su madre le puso un espejo en el techo y empezó a pintar autorretratos.",
        era: "Siglo XX",
        location: "México"
    },
    {
        category: "arte",
        emoji: "🖌️",
        image: "blue-paint,pigment",
        title: "El color más caro del mundo era el azul",
        description: "El azul ultramar se hacía de lapislázuli traído de Afganistán. Era más caro que el oro y solo se usaba para pintar a la Virgen María.",
        era: "Renacimiento",
        location: "Europa"
    },
    {
        category: "arte",
        emoji: "🏛️",
        image: "david-michelangelo,florence",
        title: "El David de Miguel Ángel mide 5 metros",
        description: "Fue esculpido de un solo bloque de mármol que otros escultores habían rechazado. Miguel Ángel tenía solo 26 años cuando lo completó.",
        era: "Siglo XVI",
        location: "Italia"
    },
    {
        category: "arte",
        emoji: "🌊",
        image: "great-wave,japanese-art",
        title: "La Gran Ola no es japonesa tradicional",
        description: "Hokusai creó 'La Gran Ola de Kanagawa' influenciado por el arte occidental. El Monte Fuji al fondo es el verdadero tema, no la ola.",
        era: "Siglo XIX",
        location: "Japón"
    },
    {
        category: "arte",
        emoji: "🎪",
        image: "salvador-dali,surrealism",
        title: "Salvador Dalí pagaba en restaurantes con dibujos",
        description: "Hacía dibujos en los cheques sabiendo que nadie los cobraría porque valían más como arte. Comía gratis toda su vida.",
        era: "Siglo XX",
        location: "España"
    },
    {
        category: "arte",
        emoji: "😱",
        image: "the-scream,edvard-munch",
        title: "El Grito de Munch ha sido robado dos veces",
        description: "Fue robado en 1994 y 2004. En el primer robo, los ladrones dejaron una nota: 'Gracias por la pobre seguridad'.",
        era: "Siglo XX",
        location: "Noruega"
    },

    // === 🎵 MÚSICA ===
    {
        category: "musica",
        emoji: "🎹",
        image: "mozart,classical-music",
        title: "Mozart componía desde los 5 años",
        description: "Su primera composición fue un Minuet en Sol Mayor. A los 8 años ya había escrito su primera sinfonía completa.",
        era: "Siglo XVIII",
        location: "Austria"
    },
    {
        category: "musica",
        emoji: "🎸",
        image: "beethoven,piano",
        title: "Beethoven compuso sordo",
        description: "Empezó a perder la audición a los 26 años. La Novena Sinfonía, su obra maestra, la compuso completamente sordo.",
        era: "Siglo XIX",
        location: "Alemania"
    },
    {
        category: "musica",
        emoji: "🎺",
        image: "birthday-cake,celebration",
        title: "El 'Cumpleaños Feliz' tiene copyright",
        description: "Warner Music cobró royalties por esta canción hasta 2016, cuando un juez determinó que el copyright no era válido.",
        era: "Siglo XX",
        location: "Estados Unidos"
    },
    {
        category: "musica",
        emoji: "🎻",
        image: "violin,stradivarius",
        title: "Un Stradivarius vale millones",
        description: "Solo existen unos 650 violines Stradivarius. El más caro se vendió por 16 millones de dólares. Nadie ha logrado replicar su sonido.",
        era: "Siglo XVIII",
        location: "Italia"
    },
    {
        category: "musica",
        emoji: "🎤",
        image: "freddie-mercury,queen",
        title: "Freddie Mercury tenía 4 octavas de rango vocal",
        description: "La mayoría de cantantes tienen 2 octavas. Mercury podía ir desde un bajo profundo hasta un soprano, algo casi imposible.",
        era: "Siglo XX",
        location: "Reino Unido"
    },
    {
        category: "musica",
        emoji: "🥁",
        image: "reggaeton,latin-music",
        title: "El reggaetón nació en Panamá",
        description: "Aunque se popularizó en Puerto Rico, el reggaetón tiene raíces en el reggae en español panameño de los 80s.",
        era: "Siglo XX",
        location: "Panamá"
    },
    {
        category: "musica",
        emoji: "🎼",
        image: "bach,baroque",
        title: "Bach tuvo 20 hijos",
        description: "Johann Sebastian Bach tuvo 20 hijos con dos esposas. Varios de ellos también se convirtieron en compositores famosos.",
        era: "Siglo XVIII",
        location: "Alemania"
    },
    {
        category: "musica",
        emoji: "🎸",
        image: "jimi-hendrix,guitar",
        title: "Jimi Hendrix no sabía leer música",
        description: "Uno de los mejores guitarristas de la historia era completamente autodidacta. Tocaba de oído.",
        era: "Siglo XX",
        location: "Estados Unidos"
    },

    // === 📜 HISTORIA ===
    {
        category: "historia",
        emoji: "🏺",
        image: "cleopatra,egypt",
        title: "Cleopatra vivió más cerca del iPhone que de las pirámides",
        description: "Las pirámides se construyeron en 2560 a.C. Cleopatra nació en 69 a.C. Hay más tiempo entre las pirámides y Cleopatra que entre ella y nosotros.",
        era: "Antigüedad",
        location: "Egipto"
    },
    {
        category: "historia",
        emoji: "⚔️",
        image: "viking,warrior",
        title: "Los vikingos usaban orina para hacer fuego",
        description: "Hervían orina en hongos para crear 'yesca'. El nitrato de sodio hacía que el material ardiera lentamente por días.",
        era: "Era Vikinga",
        location: "Escandinavia"
    },
    {
        category: "historia",
        emoji: "👑",
        image: "napoleon,france",
        title: "Napoleón no era tan bajito",
        description: "Medía 1.70m, altura promedio para la época. El mito viene de propaganda británica y confusión entre medidas.",
        era: "Siglo XIX",
        location: "Francia"
    },
    {
        category: "historia",
        emoji: "🗽",
        image: "statue-of-liberty,new-york",
        title: "La Estatua de la Libertad era color cobre",
        description: "Originalmente era del color del cobre pulido. El verde actual tomó 20 años en desarrollarse por oxidación.",
        era: "Siglo XIX",
        location: "Estados Unidos"
    },
    {
        category: "historia",
        emoji: "🏰",
        image: "medieval-castle,fortress",
        title: "Los castillos medievales olían terrible",
        description: "No tenían plomería. Los baños drenaban al foso. Por eso el foso no solo protegía: nadie quería caer ahí.",
        era: "Edad Media",
        location: "Europa"
    },
    {
        category: "historia",
        emoji: "📚",
        image: "library,ancient-books",
        title: "La Biblioteca de Alejandría no se quemó de una vez",
        description: "Fue destruida gradualmente a lo largo de siglos por guerras, negligencia y falta de fondos.",
        era: "Antigüedad",
        location: "Egipto"
    },
    {
        category: "historia",
        emoji: "🎭",
        image: "gladiator,colosseum",
        title: "Los gladiadores rara vez morían",
        description: "Entrenarlos era muy caro. La mayoría de combates terminaban cuando uno se rendía. La muerte era la excepción.",
        era: "Imperio Romano",
        location: "Italia"
    },
    {
        category: "historia",
        emoji: "🗿",
        image: "easter-island,moai",
        title: "Las cabezas de Isla de Pascua tienen cuerpos",
        description: "Los famosos Moai no son solo cabezas. Están enterrados hasta el cuello, con cuerpos de hasta 10 metros.",
        era: "Siglo XIII",
        location: "Chile"
    },
    {
        category: "historia",
        emoji: "🗡️",
        image: "samurai,japan",
        title: "Los samurái podían matar legalmente por un insulto",
        description: "Tenían el derecho de 'kiri-sute gomen': podían matar a cualquier plebeyo que los insultara.",
        era: "Japón Feudal",
        location: "Japón"
    },
    {
        category: "historia",
        emoji: "🏴‍☠️",
        image: "pirate,caribbean",
        title: "Los piratas usaban aretes por una razón práctica",
        description: "Creían que el oro mejoraba la vista. También servía para pagar su funeral si morían en el mar.",
        era: "Siglo XVII",
        location: "Caribe"
    },
    {
        category: "historia",
        emoji: "🎩",
        image: "abraham-lincoln,president",
        title: "Abraham Lincoln guardaba documentos en su sombrero",
        description: "Su icónico sombrero de copa era básicamente su maletín. Guardaba cartas, discursos y billetes ahí.",
        era: "Siglo XIX",
        location: "Estados Unidos"
    },
    {
        category: "historia",
        emoji: "🏛️",
        image: "colosseum,rome",
        title: "El Coliseo tenía un techo retráctil",
        description: "El 'velarium' era una enorme lona operada por marineros que protegía a 50,000 espectadores del sol.",
        era: "Imperio Romano",
        location: "Italia"
    },

    // === 🔬 CIENCIA ===
    {
        category: "ciencia",
        emoji: "🧬",
        image: "dna,genetics",
        title: "Compartimos 60% de ADN con los plátanos",
        description: "La vida en la Tierra comparte un ancestro común. Con los chimpancés compartimos 98%, con plátanos 60%.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "💡",
        image: "light-bulb,edison",
        title: "Edison no inventó el foco",
        description: "Al menos 20 inventores lo crearon antes. Edison mejoró el diseño para que durara más y lo comercializó.",
        era: "Siglo XIX",
        location: "Estados Unidos"
    },
    {
        category: "ciencia",
        emoji: "⚡",
        image: "lightning,storm",
        title: "Un rayo es 5 veces más caliente que el Sol",
        description: "La temperatura de un rayo alcanza 30,000°C. La superficie del Sol está a 'solo' 5,500°C.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "🧠",
        image: "brain,neuroscience",
        title: "Tu cerebro genera suficiente electricidad para encender un foco",
        description: "El cerebro humano produce entre 12 y 25 watts de electricidad. Suficiente para encender un LED.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "💎",
        image: "diamond,crystal",
        title: "Llueven diamantes en Neptuno",
        description: "La presión extrema convierte el metano en diamantes. Llueven hacia el núcleo del planeta constantemente.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "ciencia",
        emoji: "🔥",
        image: "fire,flames",
        title: "El fuego no tiene sombra",
        description: "El fuego emite luz, no la bloquea. Por eso no puede proyectar sombra. Aunque el humo sí puede.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "🌡️",
        image: "thermometer,cold",
        title: "El cero absoluto es inalcanzable",
        description: "-273.15°C es la temperatura más baja posible. Las partículas dejan de moverse. Acercarse requiere infinita energía.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "🧪",
        image: "marie-curie,radioactive",
        title: "Marie Curie sigue siendo radioactiva",
        description: "Sus notas y pertenencias están guardadas en cajas de plomo. Estarán radioactivas por 1,500 años más.",
        era: "Siglo XX",
        location: "Francia"
    },
    {
        category: "ciencia",
        emoji: "🧲",
        image: "iron,metal",
        title: "Tu cuerpo tiene suficiente hierro para hacer un clavo",
        description: "El cuerpo humano contiene 3-4 gramos de hierro, suficiente para fabricar un clavo de 7 centímetros.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "🦴",
        image: "skeleton,bones",
        title: "Nacemos con 300 huesos, morimos con 206",
        description: "Muchos huesos se fusionan durante el crecimiento. Por eso los bebés son más flexibles.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "ciencia",
        emoji: "💧",
        image: "ice,frozen-water",
        title: "El agua caliente se congela más rápido que la fría",
        description: "Se llama Efecto Mpemba. Bajo ciertas condiciones el agua caliente se congela primero.",
        era: "Siglo XX",
        location: "Tanzania"
    },
    {
        category: "ciencia",
        emoji: "🌈",
        image: "rainbow,prism",
        title: "Los colores no existen realmente",
        description: "El color es la interpretación de tu cerebro de diferentes longitudes de onda. Los objetos no 'tienen' color.",
        era: "Contemporáneo",
        location: "Global"
    },

    // === 🌍 CULTURA ===
    {
        category: "cultura",
        emoji: "🍕",
        image: "hawaiian-pizza,pineapple",
        title: "La pizza hawaiana se inventó en Canadá",
        description: "Sam Panopoulos, un inmigrante griego en Ontario, creó la pizza con piña en 1962. Hawaii no tuvo nada que ver.",
        era: "Siglo XX",
        location: "Canadá"
    },
    {
        category: "cultura",
        emoji: "☕",
        image: "coffee-beans,ethiopia",
        title: "El café fue descubierto por cabras",
        description: "Según la leyenda, un pastor etíope notó que sus cabras bailaban después de comer ciertas bayas rojas.",
        era: "Siglo IX",
        location: "Etiopía"
    },
    {
        category: "cultura",
        emoji: "🥢",
        image: "ramen,japanese-food",
        title: "En Japón sorber la sopa es educado",
        description: "Hacer ruido al comer ramen demuestra que lo disfrutas. Es un cumplido al chef.",
        era: "Contemporáneo",
        location: "Japón"
    },
    {
        category: "cultura",
        emoji: "💀",
        image: "day-of-dead,mexico",
        title: "El Día de Muertos no es Halloween mexicano",
        description: "Es una tradición prehispánica de más de 3,000 años. Se celebra la vida de los muertos, no se les teme.",
        era: "Prehispánico",
        location: "México"
    },
    {
        category: "cultura",
        emoji: "🎎",
        image: "korea,seoul",
        title: "En Corea todos cumplen años el mismo día",
        description: "En el sistema tradicional, todos envejecen un año el 1 de enero, no en su cumpleaños real.",
        era: "Contemporáneo",
        location: "Corea"
    },
    {
        category: "cultura",
        emoji: "🌶️",
        image: "carolina-reaper,hot-pepper",
        title: "El chile más picante puede matarte",
        description: "El Carolina Reaper tiene 2.2 millones de unidades Scoville. Puede causar shock anafiláctico.",
        era: "Contemporáneo",
        location: "Estados Unidos"
    },
    {
        category: "cultura",
        emoji: "📖",
        image: "iceland,books",
        title: "Islandia publica más libros per cápita que nadie",
        description: "1 de cada 10 islandeses publicará un libro. En Navidad es tradición regalar libros y leerlos esa noche.",
        era: "Contemporáneo",
        location: "Islandia"
    },
    {
        category: "cultura",
        emoji: "🍫",
        image: "cacao,chocolate",
        title: "El chocolate era moneda en Mesoamérica",
        description: "Los aztecas usaban granos de cacao como dinero. 100 granos = 1 esclavo. El chocolate era para la élite.",
        era: "Prehispánico",
        location: "México"
    },
    {
        category: "cultura",
        emoji: "💤",
        image: "siesta,spain",
        title: "En España la siesta es patrimonio cultural",
        description: "La palabra viene de 'hora sexta'. Está científicamente probado que mejora la productividad.",
        era: "Contemporáneo",
        location: "España"
    },
    {
        category: "cultura",
        emoji: "🎭",
        image: "finland,nordic",
        title: "En Finlandia hay competencia de cargar esposas",
        description: "El ganador recibe el peso de su esposa en cerveza. Es un deporte oficial desde 1992.",
        era: "Contemporáneo",
        location: "Finlandia"
    },

    // === 🌿 NATURALEZA ===
    {
        category: "naturaleza",
        emoji: "🐙",
        image: "octopus,ocean",
        title: "Los pulpos tienen 3 corazones y sangre azul",
        description: "Dos corazones bombean sangre a las branquias, uno al cuerpo. Su sangre usa cobre, por eso es azul.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🦈",
        image: "shark,underwater",
        title: "Los tiburones son más viejos que los árboles",
        description: "Los tiburones existen desde hace 400 millones de años. Los árboles aparecieron hace 350 millones.",
        era: "Prehistoria",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🍯",
        image: "honey,bees",
        title: "La miel nunca caduca",
        description: "Se ha encontrado miel de 3,000 años perfectamente comestible. Su bajo contenido de agua evita las bacterias.",
        era: "Antigüedad",
        location: "Egipto"
    },
    {
        category: "naturaleza",
        emoji: "🦋",
        image: "butterfly,colorful",
        title: "Las mariposas saborean con los pies",
        description: "Tienen sensores de sabor en las patas. Cuando se paran en una flor, saben si es comestible.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🌳",
        image: "mushroom,forest",
        title: "Hay un hongo más grande que una ballena azul",
        description: "El Armillaria en Oregon cubre 9.6 km². Es el organismo vivo más grande del mundo.",
        era: "Contemporáneo",
        location: "Estados Unidos"
    },
    {
        category: "naturaleza",
        emoji: "🐘",
        image: "elephant,africa",
        title: "Los elefantes son los únicos animales que no pueden saltar",
        description: "Sus patas están diseñadas para soportar peso, no para impulsarse. Tienen 4 rodillas.",
        era: "Contemporáneo",
        location: "África/Asia"
    },
    {
        category: "naturaleza",
        emoji: "🦩",
        image: "flamingo,pink",
        title: "Los flamingos son blancos naturalmente",
        description: "El color rosa viene de los camarones que comen. En zoológicos deben darles suplementos.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🐋",
        image: "blue-whale,ocean",
        title: "El corazón de una ballena azul pesa como un auto",
        description: "Pesa alrededor de 180 kg. Un humano podría nadar por sus arterias.",
        era: "Contemporáneo",
        location: "Océanos"
    },
    {
        category: "naturaleza",
        emoji: "🦑",
        image: "giant-squid,deep-sea",
        title: "El calamar gigante tiene el ojo más grande del mundo",
        description: "Sus ojos miden 27 cm, del tamaño de un balón de fútbol. Pueden ver en la oscuridad total.",
        era: "Contemporáneo",
        location: "Océanos"
    },
    {
        category: "naturaleza",
        emoji: "🐌",
        image: "snail,garden",
        title: "Los caracoles pueden dormir 3 años seguidos",
        description: "Cuando el clima no es favorable, entran en hibernación. Sobreviven sin comer.",
        era: "Contemporáneo",
        location: "Global"
    },
    {
        category: "naturaleza",
        emoji: "🦎",
        image: "chameleon,colorful",
        title: "Los camaleones no cambian de color para camuflarse",
        description: "Cambian según temperatura, luz y estado de ánimo. El camuflaje es un efecto secundario.",
        era: "Contemporáneo",
        location: "África"
    },
    {
        category: "naturaleza",
        emoji: "🐝",
        image: "bee,flower",
        title: "Las abejas pueden reconocer rostros humanos",
        description: "Identifican la configuración de ojos, nariz y boca como un patrón, igual que nosotros.",
        era: "Contemporáneo",
        location: "Global"
    },

    // === 🚀 ESPACIO ===
    {
        category: "espacio",
        emoji: "🌍",
        image: "venus,planet",
        title: "Un día en Venus es más largo que un año",
        description: "Venus tarda 243 días terrestres en rotar, pero solo 225 en dar la vuelta al Sol.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "👨‍🚀",
        image: "astronaut,space",
        title: "En el espacio nadie puede escucharte",
        description: "El sonido necesita un medio para viajar. En el vacío del espacio hay silencio absoluto.",
        era: "Contemporáneo",
        location: "Espacio"
    },
    {
        category: "espacio",
        emoji: "🌙",
        image: "moon,lunar",
        title: "La Luna se aleja de la Tierra cada año",
        description: "Se aleja 3.8 cm por año debido a las mareas. Hace millones de años estaba mucho más cerca.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "⭐",
        image: "stars,milky-way",
        title: "Hay más estrellas que granos de arena en la Tierra",
        description: "Hay 70 mil millones de billones de estrellas en el universo observable.",
        era: "Contemporáneo",
        location: "Universo"
    },
    {
        category: "espacio",
        emoji: "🕳️",
        image: "black-hole,space",
        title: "Un agujero negro puede caber en tu bolsillo",
        description: "Si comprimes la Tierra a densidad de agujero negro, mediría solo 1.7 cm. Misma masa.",
        era: "Contemporáneo",
        location: "Universo"
    },
    {
        category: "espacio",
        emoji: "🛸",
        image: "exoplanet,space",
        title: "Hay un planeta de diamante",
        description: "55 Cancri e podría estar compuesta de diamante. Vale más que toda la economía mundial.",
        era: "Contemporáneo",
        location: "40 años luz"
    },
    {
        category: "espacio",
        emoji: "☀️",
        image: "sun,solar",
        title: "La luz del Sol tiene 8 minutos de antigüedad",
        description: "La luz tarda 8 minutos en llegar. El Sol que ves es como era hace 8 minutos.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "🪐",
        image: "saturn,rings",
        title: "Saturno flotaría en agua",
        description: "Es el único planeta menos denso que el agua. Si hubiera un océano grande, flotaría.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "🌑",
        image: "moon-dark-side,lunar",
        title: "Hay un lado de la Luna que nunca vemos",
        description: "La Luna siempre muestra la misma cara debido a la rotación sincrónica.",
        era: "Contemporáneo",
        location: "Sistema Solar"
    },
    {
        category: "espacio",
        emoji: "🔭",
        image: "trees,forest",
        title: "Hay más árboles en la Tierra que estrellas en la Vía Láctea",
        description: "Hay 3 billones de árboles vs 100-400 mil millones de estrellas en nuestra galaxia.",
        era: "Contemporáneo",
        location: "Tierra"
    },
    {
        category: "espacio",
        emoji: "🌌",
        image: "nebula,space",
        title: "El espacio huele a carne quemada y metal",
        description: "Astronautas reportan un olor distintivo en sus trajes. Se cree que es por estrellas moribundas.",
        era: "Contemporáneo",
        location: "Espacio"
    },
    {
        category: "espacio",
        emoji: "🛰️",
        image: "tesla,roadster",
        title: "Hay un Tesla flotando en el espacio",
        description: "Elon Musk lanzó su Tesla Roadster en 2018. Starman, el maniquí al volante, orbita el Sol.",
        era: "Siglo XXI",
        location: "Órbita Solar"
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

// Helper function to get Unsplash image URL
function getImageUrl(searchTerms) {
    return `https://source.unsplash.com/800x600/?${encodeURIComponent(searchTerms)}`;
}
