require('dotenv').config()

module.exports = (function(){
    return {
        connectionLimit: 10, // default 10
        // connectTimeout: 100, //20000, default 10000(10sec)
        acquireTimeout: 600000, //Timeout to get a new connection from pool in ms. default 10000(10sec)
        waitForConnections: true, //default true

        host: process.env.DB_HOST || "127.0.0.1",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "yongja524",
        database: process.env.DB_NAME || "test",
        port:process.env.DB_PORT || 3306
    }
})()