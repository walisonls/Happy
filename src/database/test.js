const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-22.5787973",
    lng: "-47.4595751",
    name: "Lar dos meninos",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nulla provident quam. Minima quia molestias voluptatum similique!",
    whatsapp: "987654321",
    images: [
      "https://images.unsplash.com/photo-1600533379073-695a6f0473d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "https://images.unsplash.com/photo-1602061970430-4fbf0ddc4c16?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ].toString(),
    instructions:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquam amet porro?",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1",
  });

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orfanato, pelo id
  const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '1'");
  console.log(orphanage);

  // deletar dados da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));
});
