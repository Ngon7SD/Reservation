const knex = require("../db/connection.js");

function list(reservation_date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date })
    .orderBy("reservation_time", "asc");
}

function create(newReservation){
    return knex("reservations")
    .insert(newReservation)
    .returning("*")
    .then((createdRecord) => createdRecord[0]);
}

module.exports = {
    list,
    create,
}
