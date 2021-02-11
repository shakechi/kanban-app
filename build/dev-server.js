const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())

    // 以降下記にAPI実装
}