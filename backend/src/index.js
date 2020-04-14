const express = require("express");
const routes = require("./routes");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); // Antes de todas as requisições. To falando express transformar JSon em ObjetoJS
app.use(routes);

app.listen(3333);
/**
 * Rotas e Recursos www.google.com/ '-'
 */


 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do Back-end
  * 
  *  qualquer tipo de retorno de informacao
  * 
  * POST: Criar uma informacao no back-end
  * 
  * PUT : Alterar uma informacao no back end
  * 
  * DELETE: Deletar uma informacao no back end
  */



  /**
   * Tipos de Parametros que pode ENVIAR NUMA ROTA!!!!
   * 
   * Query Params: nomeados enviados na rota após "?" ( Filtros, Paginação,  nessa pegada aí)
   * Route Params: Parametros utilizados para identificar recursos (rotas)
   * Request Body: Corpor da Requisição, para criar ou alterar recursos( objetos )
   */
