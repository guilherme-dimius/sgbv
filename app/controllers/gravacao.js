module.exports = function (app)
{
    var Gravacao = app.models.gravacao;
    var controller = {};

    controller.listaGravacoes = function(req, res)
    {   
        Gravacao.find()
        .select("id dirGravacao")
        .exec()
        .then(
            function(gravacoes)
            {
                res.json(gravacoes);
                //res.render('gravacao', res.json(gravacoes));
            },
            function(erro)
            {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemGravacao = function(req, res)
    {
        var _id = req.params.id;
        Gravacao.findById(_id).exec()
        .then(
            function(gravacao)
            {
                if (!gravacao)
                    throw new Error("Gravacao não encontrada!");
                    res.json(gravacao);
                    //res.render('gravacao', res.json(gravacao));
            },
            function(erro)
            {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeGravacao = function(req, res)
    {
        var _id = req.params.id;
        Gravacao.remove({"_id" : _id}).exec()
        .then(
            function()
            {
                res.status(204).end();
                //res.render('gravacao', res.status(204).end());
            },
            function(erro)
            {
                return console.error(erro);
            }
        );

    };

    controller.salvaGravacao = function(req, res)
    {
        var _id = req.body._id;
        if(_id)
        {
            Gravacao.findByIdAndUpdate(_id, req.body).exec()
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
            Gravacao.create(req.body)
            .then(
                function(gravacao)
                {
                    res.status(201).json(gravacao);
                    //res.render('gravacao', res.status(201).json(gravacao));
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