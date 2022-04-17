module.exports = function(app, config){

    // Cria um objeto construtor que armazena os dados do arquivo /controllers/bandas-rock
    const controllerFactory = require("../controllers/bandas-rock");
    // Como controllerFactory é só o construtor, precisamos inicializa-lo em uma variável
    // atribuímos a controller as funcionalidades do controllerFactory
    const controller = controllerFactory();

    // Criando uma rota que atende em api/v1/bandas quando um get é feito na página
    // Devolve a função showList vinda do controller
    app.route(config.get("server.path_root") + "bandas").get(controller.showList);

    // Criando uma rota que atende em api/v1/bandas quando um post é feito na página
    // Devolve a função add vinda do controller
    app.route(config.get("server.path_root") + "bandas").post(controller.add);

    // Criando uma rota que atende em api/v1/bandas quando um patch é feito na página
    // Devolve a função update vinda do controller
    app.route(config.get("server.path_root") + "bandas").patch(controller.update);

    // Criando uma rota que atende em api/v1/bandas quando um delete é feito na página
    // Devolve a função remove vinda do controller
    app.route(config.get("server.path_root") + "bandas").delete(controller.remove);
};