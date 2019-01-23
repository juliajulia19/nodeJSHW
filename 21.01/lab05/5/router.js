let express = require('express'); //подключаем модуль express
let router = express.Router(); //создаем новый роутер

router.post('/new', (req, res, next) => {
    console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
    res.render('index', { title: 'Thank you for your registration!' });
});



module.exports = router; //Экспортируем роутер из модуля
