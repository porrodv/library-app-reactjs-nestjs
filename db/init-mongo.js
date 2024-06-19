const conn = new Mongo();
const db = conn.getDB("library");

// set admin permissions
db.createUser({
  user: "nestuser",
  pwd: "nestpass",
  roles: [
    {
      role: "readWrite",
      db: "library",
    },
  ],
});

// init data
db.books.insertMany([
  {
    title: "El nuevo mundo",
    author: "Angel Porro",
    year: 2024,
    genre: "Ficción",
    summary:
      "Una fascinante exploración de un futuro distópico donde la humanidad lucha por sobrevivir en un planeta devastado.",
    copiesAvailable: 1,
    createdAt: "2024-06-10T17:15,:04.653+00:00",
    updatedAt: "2024-06-10T17:15,:04.653+00:00",
    __v: 0,
  },
  {
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    year: 2001,
    genre: "Misterio",
    summary:
      "En la Barcelona de la posguerra, un joven llamado Daniel descubre un libro que cambiará su vida y lo llevará a desentrañar un oscuro misterio.",
    copiesAvailable: { $numberInt: "30" },
    createdAt: "2024-06-10T17:17:43.456+00:00",
    updatedAt: "2024-06-10T17:17:43.456+00:00",
    __v: 0,
  },
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    year: 1967,
    genre: "Realismo mágico",
    summary:
      "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, una obra maestra del realismo mágico.",
    copiesAvailable: { $numberInt: "13" },
    createdAt: "2024-06-10T17:18:26.208+00:00",
    updatedAt: "2024-06-10T17:18:26.208+00:00",
    __v: 0,
  },
]);

console.log("Data inicializada con éxito");
