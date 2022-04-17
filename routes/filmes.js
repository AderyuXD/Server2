// Importa em controller o objeto retornado pelo arquivo bandas-rock.js que está em controllers
import controller from "../controllers/filmes.js";

const nomeRota = "filmes";

export default function(app, config){//Export default = module.exports
    // Criando uma rota que atende em api/v1/bandas quando um get é feito na página
    // Devolve a função showList vinda do controller
    app.route(config.get("server.path_root") + nomeRota).get(controller.showList);

    // Criando uma rota que atende em api/v1/bandas quando um post é feito na página
    // Devolve a função add vinda do controller
    app.route(config.get("server.path_root") + nomeRota).post(controller.add);

    // Criando uma rota que atende em api/v1/bandas quando um patch é feito na página
    // Devolve a função update vinda do controller
    app.route(config.get("server.path_root") + nomeRota).put(controller.update);

    // Criando uma rota que atende em api/v1/bandas quando um delete é feito na página
    // Devolve a função remove vinda do controller
    app.route(config.get("server.path_root") + nomeRota).delete(controller.remove);

    console.log(`Rota [${nomeRota}] carregada...`);
};