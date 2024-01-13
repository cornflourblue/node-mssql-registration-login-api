const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = {
   getAll
};

async function getAll() {
    return await db.Job.findAll();
}