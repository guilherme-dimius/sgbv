module.exports = function (app)
{
    var Voz = app.models.voz;
    var controller = {};

    controller.listaVozes = function(req, res)
    {
        Voz.find()
        .select("rotulo nomeArquivo")
        .exec()
        .then(
            function(vozes)
            {
                //res.render('voz', res.json(vozes));
                res.json(vozes);
            },
            function(erro)
            {
                console.error(erro);
                res.status(500).json(erro);
                //res.render('voz', res.status(500).json(erro));
            }
        );        
    };

    controller.obtemVoz = function(req, res)
    {
        var _id = req.params.id;
        Voz.findById(_id).exec()
        .then(
            function(voz)
            {
                if (!voz)
                    throw new Error("Voz não encontrada!");
                    res.json(voz);
                    //res.render('voz', res.json(voz));
            },
            function(erro)
            {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeVoz = function(req, res)
    {
        var _id = req.params.id;
        Voz.remove({"_id" : _id}).exec()
        .then(
            function()
            {
                res.status(204).end();
                //res.render('voz', res.status(204).end());
            },
            function(erro)
            {
                return console.error(erro);
            }
        );

    };

    controller.salvaVoz = function(req, res)
    {
        var _id = req.body._id;
        if(_id)
        {
            Voz.findByIdAndUpdate(_id, req.body).exec()
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
            Voz.create(req.body)
            .then(
                function(voz)
                {
                    res.status(201).json(voz);
                    //res.render('voz', res.status(201).json(voz));
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