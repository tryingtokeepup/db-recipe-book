exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { name: "Pasta" },
        { name: "Sushi" },
        { name: "Curry" },
        { name: "Pizza" },
        { name: "Chicken Pie" }
      ]);
    });
};
