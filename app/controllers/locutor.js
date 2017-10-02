module.exports = function (app)
{
    var Locutor = app.models.locutor;
    var controller = {};

    controller.listaLocutores = function(req, res)
    {
        Locutor.find()
        .select("nome email")
        .exec()
        .then(
            function(locutores)
            {
                res.json(locutores);
                //res.render('locutor', res.json(locutores));
            },
            function(erro)
            {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemLocutor = function(req, res)
    {
        var email = req.params.email;
        Locutor.findById(email).exec()
        .then(
            function(locutor)
            {
                if (!locutor)
                    throw new Error("Locutor não encontrado!");
                    res.json(locutor);
                    //res.render('locutor', res.json(locutor));
            },
            function(erro)
            {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeLocutor = function(req, res)
    {
        var _id = req.params.id;
        Locutor.remove({"_id" : _id}).exec()
        .then(
            function()
            {
                res.status(204).end();
                //res.render('locutor', res.status(204).end());
            },
            function(erro)
            {
                return console.error(erro);
            }
        );

    };

    controller.salvaLocutor = function(req, res)
    {
        var _id = req.body._id;
        if(_id)
        {
            Locutor.findByIdAndUpdate(_id, req.body).exec()
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
            Locutor.create(req.body)
            .then(
                function(locutor)
                {
                    res.status(201).json(locutor);
                    //res.render('locutor', res.status(201).json(locutor));
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