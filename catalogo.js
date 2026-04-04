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

const BOOKS = [
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