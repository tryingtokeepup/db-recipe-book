exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Tomatoes" },
        { name: "Seaweed" },
        { name: "Onions" },
        { name: "Cheese" },
        { name: "Mushrooms" },
        { name: "Noodles" }
      ]);
    });
};
