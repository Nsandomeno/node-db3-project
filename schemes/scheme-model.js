// Import config as db
const db = require('../data/dbConfig.js');
// Export all functions created in the object directly below
module.exports = {
    // helper functions
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({ id }).first()
        // .then((scheme) => {
        //     scheme ? scheme : null
        // })
}

function findSteps(id) {
    return db("schemes")
        .join("steps", "steps.scheme_id", "schemes.id")
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
}

function add(scheme) {
    return db("schemes")
        .insert(scheme, "id")
}

function update(changes, id) {
    return db("schemes")
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db("schemes")
        .where({ id })
        .del()
}



