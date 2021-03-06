const crypto = require('crypto'); // It's going to generate your random ID
const connection = require('../database/connection') // Allow you to make operations with DB
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    // GET
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);    
    },

    // POST
    async create(request, response){ // async to respect the time to insert data
        const { name, email, whatsapp, city, uf } = request.body; // Data from ONGs
        const id = generateUniqueId(); // Generates your id (unit test)
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        }) // Insert can take a little while, so MUST be AWAIT
        
        return response.json({ id });
    }
};