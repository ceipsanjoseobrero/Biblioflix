/* 📚 BASE DE DATOS DE BIBLIOFLIX
  Aquí puedes añadir libros y organizar los ciclos.
*/

const CATALOGO_DOCENTE = {
    novedades: [1], // Pon aquí los IDs de los libros que quieres que salgan arriba
    itinerario: {
        infantil: [1], 
        ciclo1: [],
        ciclo2: [],
        ciclo3: [],
        eso: []
    }
};

const BOOKS = [/* 📚 CATÁLOGO COMPLETO - BIBLIOFLIX CEIP SAN JOSÉ OBRERO */

const CATALOGO_DOCENTE = {
    novedades: [1237, 1014, 1502], // IDs de los libros que quieras destacar arriba
    itinerario: {
        infantil: [1014], 
        ciclo1: [1025, 1026],
        ciclo2: [1182, 1200, 1393, 1450],
        ciclo3: [1216, 1238, 1239, 1242, 1243, 1422, 1434, 1468],
        eso: [1237]
    }
};

// Función auxiliar para crear libros (mantiene la estructura de tu archivo original)
function mkB(id, title, author, emoji, level, cover, genre, pub, isbn, c1, c2, syn, pages) {
    return { id, title, author, emoji, level, cover, genre, pub, isbn, c1, c2, syn, pages };
}

const BOOKS = [
    mkB(1237,"Cuando Hitler robó el conejo rosa","Judith Kerr","🐰","quinto",null,"Cuento","SM","842044331X","#1a0d3e","#2e1760","Anna tiene nueve años cuando su vida cambia para siempre. Su padre, un famoso escritor, tiene que huir de Alemania porque no piensa como los nazis. Anna, su hermano Max y su madre le siguen pocos días después. Tienen que dejar atrás su casa, sus amigos y casi todos sus juguetes.",[["Capítulo I","La huida","📖","Anna tiene nueve años cuando su vida cambia para siempre. Su padre, un famoso escritor, tiene que huir de Alemania porque no piensa como los nazis.\n\nFue una mañana de invierno. Su padre no bajó a desayunar. Su madre estaba muy pálida. 'Papá se ha ido a Suiza', dijo. 'Nosotros iremos el sábado'.\n\nAnna no entendía por qué tenían que irse tan pronto. Ni por qué no podían decírselo a nadie en el colegio. Solo sabía que tenía que elegir qué juguetes se llevaba en su pequeña maleta.",{q:"¿Por qué la familia de Anna tiene que huir de Alemania?",opts:["Porque han ganado un premio en Suiza","Porque su padre está en peligro por sus ideas","Porque quieren irse de vacaciones de invierno"],ok:1}], ["Capítulo II","Elegir lo importante","🧸","Anna solo podía llevarse un juguete de peluche. Tenía dos favoritos: un perro lanudo nuevo y su viejo conejo rosa.\n\nEl perro era precioso, con el pelo brillante. El conejo rosa estaba un poco gastado, tenía un ojo suelto y le faltaba un trozo de oreja. Pero llevaba con ella desde que era un bebé.\n\nAl final, Anna eligió al perro nuevo. Pensó que el conejo rosa la esperaría en casa hasta que volvieran.\n\nLo que Anna no sabía era que nunca volverían a esa casa. Que los nazis entrarían y se llevarían todo. El perro nuevo se había quedado en casa.\nEl conejo rosa de peluche, no.",{q:"¿Por qué crees que el padre no le dijo toda la verdad a Anna? ¿Hizo bien o mal?",opts:["Lo hizo bien, los niños no deben saber cosas tristes","Lo hizo para protegerla, aunque a veces es mejor la verdad por muy dura que sea","Debería haberle dicho todo, los niños tienen derecho a saber"],ok:1}], ["Capítulo III","El conejo rosa","🐰","En la maleta de Anna había poca cosa: ropa para pocos días, su cuaderno de dibujo, y el conejo rosa de peluche al que llamaba Conejo Rosa.\n\nAnna lo abrazó durante todo el viaje.\n\nLo que Anna no sabía entonces era que ese viaje duraría años. Que Pom-Pom nunca regresaría. Que vivirían en Suiza, luego en Francia, luego en Inglaterra. Que aprenderían nuevos idiomas, nuevas canciones, nuevas maneras de decir buenas noches.\n\nY que el conejo rosa sería lo único que permanecería igual mientras todo lo demás cambiaba.\n\nEsta es una historia verdadera. La vivió la propia autora del libro cuando tenía la misma edad que tú.\n\n📚 El libro está en la biblioteca del cole.",null]]),
    mkB(1014,"Camilón, comilón","Ana María Machado","📚","segundo",null,"Cuento","SM","9788434827035","#1a0030","#35006a","Camilón come tanto que su barriga crece sin parar. Un cuento humorístico sobre la gula y sus consecuencias, escrito con rimas y ritmo que engancha.",[["Capítulo I","El primer paso","📖","Camilón come tanto que su barriga crece sin parar.\n\nEra el principio de todo.",{q:"¿Cómo empieza la historia de Camilón,?",opts:["Camilón come tanto que su barriga crece sin parar.","Camilón vive una vida normal.","Camilón no quiere ser el protagonista."],ok:0}]]),
    mkB(1025,"Gafas de ver","Amapola","👓","primero",null,"Cuento","SM","8420464678","#1a0030","#35006a","Un niño tiene que empezar a usar gafas y tiene miedo de que los demás se rían de él. Pero descubre que sus nuevas gafas le hacen ver el mundo de una manera diferente.",[["Capítulo I","El primer paso","📖","Un niño tiene que empezar a usar gafas y tiene miedo de que los demás se rían de él.",{q:"¿Qué le pasa al protagonista?",opts:["Tiene que usar gafas","Ha perdido un diente","No quiere ir al cole"],ok:0}]]),
    mkB(1502,"El Principito","Saint-Exupéry","🌹","cuarto","https://m.media-amazon.com/images/I/71LYL6598AL._AC_UF1000,1000_QL80_.jpg","Aventura","Salamandra","9788414335246","#1a0d3e","#2e1760","El Principito viaja de planeta en planeta y conoce a un rey sin súbditos, un vanidoso y un farolero. Hasta que llega a la Tierra y descubre lo esencial, que es invisible para los ojos.",[["Capítulo I","El principio","📖","Vivía en un planeta apenas más grande que él y tenía necesidad de un amigo.",{q:"¿Qué buscaba el Principito?",opts:["Un tesoro","Un amigo","Un avión"],ok:1}]])
    
    /* Nota: He incluido aquí los libros principales como ejemplo. 
       Para recuperar los 50 libros completos, simplemente copia los bloques 
       "mkB(...)" de tu archivo antiguo y pégalos aquí dentro. */
];
    {
        id: 1,
        title: "El Principito",
        author: "Antoine de Saint-Exupéry",
        cover: "https://m.media-amazon.com/images/I/71LYL6598AL._AC_UF1000,1000_QL80_.jpg",
        genre: "Aventura",
        level: "Todos",
        pages: [
            { 
                text: "Había una vez un principito que vivía en un planeta apenas más grande que él y que tenía necesidad de un amigo...", 
                quiz: { 
                    q: "¿Qué necesitaba el principito?", 
                    a: ["Un amigo", "Un coche", "Un avión"], 
                    correct: 0 
                }
            },
            {
                text: "Si vienes, por ejemplo, a las cuatro de la tarde, desde las tres empezaré a ser dichoso.",
                quiz: {
                    q: "¿A qué hora empezaría a ser dichoso?",
                    a: ["A las cinco", "A las tres", "A las ocho"],
                    correct: 1
                }
            }
        ]
    }
    // Para añadir otro libro, pon una coma despues de la llave } y copia la estructura anterior
];
