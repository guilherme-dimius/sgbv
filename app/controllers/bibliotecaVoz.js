module.exports = function (app)
{
    var Biblioteca = app.models.biblioteca;
    var controller = {};

    controller.listaBibliotecas = function(req, res)
    {
        Biblioteca.find()
        .select("nome")
        .exec()
        .then(
            function(bibliotecas)
            {
                res.json(bibliotecas);
                //res.render('bibliotecaVoz', res.json(bibliotecas));
            },
            function(erro)
            {
                console.error(erro);
                res.status(500).json(erro);
                //res.render('bibliotecaVoz', res.status(500).json(erro));
            }
        );        
    };

    controller.obtemBiblioteca = function(req, res)
    {
        var _id = req.params.id;
        Biblioteca.findById(_id).exec()
        .then(
            function(biblioteca)
            {
                if (!biblioteca)
                    throw new Error("Biblioteca não encontrada!");
                    res.json(biblioteca);
                    //res.render('bibliotecaVoz', res.json(biblioteca));
                    res.json(biblioteca);
            },
            function(erro)
            {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeBiblioteca = function(req, res)
    {
        var _id = req.params.id;
        Biblioteca.remove({"_id" : _id}).exec()
        .then(
            function()
            {
                res.status(204).end();
                //res.render('bibliotecaVoz', res.status(204).end());
            },
            function(erro)
            {
                return console.error(erro);
            }
        );

    };

    controller.salvaBiblioteca = function(req, res)
    {
        var _id = req.body._id;
        if(_id)
        {
            Biblioteca.findByIdAndUpdate(_id, req.body).exec()
            .then(
                function(erro)
                {
                    console.error(erro);
                    res.status(500).json(erro);
                }
            );
        }
        else
        {
            Biblioteca.create(req.body)
            .then(
                function(biblioteca)
                {
                    res.status(201).json(biblioteca);
                    //res.render('bibliotecaVoz', res.status(201).json(biblioteca));
                },
                function(erro)
                {
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        } 
    };

    return controller;
};