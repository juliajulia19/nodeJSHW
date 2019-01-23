let express = require('express'); //подключаем модуль express
let router = express.Router(); //создаем новый роутер

router.post('/new', (req, res, next) => {
    console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
    res.send(JSON.stringify(req.body));
});



module.exports = router; //Экспортируем роутер из модуля
