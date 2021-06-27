const Express = require('express')
const App = Express()

App.get("/", (req, res) => {
    res.send("Ok")
})

App.listen(process.env.PORT, (e) => {
    if (e) {
        console.log(e)
        process.exit(1)
    }
    console.log("app running")
})