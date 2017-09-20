
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('user', t => {
    t.string('avatar_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('user', t => {
    t.dropColum('avatar_url')
  })
};
