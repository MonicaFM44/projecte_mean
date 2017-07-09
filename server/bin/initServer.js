/*
    Initialize the server & set the global vars via dotenv
*/

const dotenv = require("dotenv").config()

const Server = require("../server")

let server = new Server()
server.start(process.env.PORT)