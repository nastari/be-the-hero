const connectionn = require('../database/connection.js');


module.exports = {

    async listagem( request, response ) {

        const ong_id = request.headers.authorization;

        const casos = await connectionn('incidents')
        .where('ong_id',ong_id)
        .select('*')

        return response.json(casos);

    }




}