const Mysql = require('mysql2')
const Express = require('express')
const App = Express()

const Connection = Mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB,
    port: process.env.DBPORT
})

Connection.connect()
    
App.get("/", async (req, res) => {
    let status = 200
    let message = ""
    try {
        let r = await new Promise((resolve, reject) => {
            Connection.query("select now()", (err, results, fields) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
        message = r
    } catch (e) {
        status = 500
        message = e.message
    } finally {
        res.status(status).json({message})
    }
})

App.listen(process.env.PORT, (e) => {
    if (e) {
        console.log(e)
        process.exit(1)
    }
    console.log("app running")
})
process.on('uncaughtException', function(error) {
    process.exit(1)
});