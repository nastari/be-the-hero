const connectionn = require('../database/connection.js');


module.exports = {

    // Função 01 para a Entidade Casos
    async create(request,response) {

        const { title, description, value } = request.body;

        const ong_id = request.headers.authorization;

        const [id] = await connectionn('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({id});

    },

    //Função 02 Listagem de Casos por ONG

    async listagem(request,response) {

        const { page = 1 } = request.query; //query params ?page=3

        const [count] = await connectionn('incidents').count();
        
        const casos = await connectionn('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')
        .limit(5)
        .offset((page-1) * 5 )
        .select([
         'incidents.*',
         'ongs.name',
         'ongs.email',
         'ongs.whatsapp',
         'ongs.cidade',
         'ongs.uf'
        ]);
    
        response.header('X-Total-Count', count['count(*)']);

        return response.json(casos);
    
     },


     async delete(request,response) {

        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const caso = await connectionn('incidents')
        .where('id',id)
        .select('ong_id')
        .first();

        if ( caso.ong_id != ong_id ){
            return response.status(401).json( { error: ' Operation not permitted. '})
        } else {
            await connectionn('incidents').where('id',id).delete();
            return response.status(204).send();
        }

        
     }


};