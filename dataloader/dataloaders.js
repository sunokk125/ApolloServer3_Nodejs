const dataloader = require('dataloader')
const db = require('../db/dbExe')

module.exports = {
    // getUsersLoader: new dataloader(async (keys) => {
    //     console.log(keys)
    //     let queryString = `
    //         SELECT * FROM users 
    //         WHERE _no in ('${keys}')
    //     `
    //     let result = await db.exe(queryString)
    //     return result
    // }),
    getCommentsLoader: new dataloader(async (keys) => {
        console.log(keys)
        let result = await db.getCommentsExe(keys)
        return result
    })
}