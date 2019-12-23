const dbConn = require('../../config/dbConn');

module.exports = app => {
    const conn = dbConn();

    app.get('/', (req, res) => {
        conn.query('SELECT * FROM tasks', (err, result) => {
            // console.log(result);

            res.render('tasks/tasks', {
                news: result
            });
        })
    })

    app.post('/insert', (req, res) => {
        // console.log(req.body);
        const {
            title,
            level
        } = req.body;
        conn.query('INSERT INTO tasks SET?', {
            title,
            level
        }, (err, result) => {
            res.redirect('/');
        })
    })
}