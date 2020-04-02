const connectionn = require('../database/connection.js');
const crypto = require('crypto');


module.exports = {



    //Function 01 Create para ONG'S 
    async create(request, response) {

        const { name, email, whatsapp, cidade, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connectionn('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf,
        })
    
        return response.json({id});

    },


    // FUNÇÃO 02, LISTAGEM DAS ONGS
    async listagem(request,response){

        const ongs = await connectionn('ongs').select('*');

        return response.json(ongs);
    }



}