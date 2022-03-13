const db = require("./dbCreate");
const logger = require('winston');
const log = (msg) => logger.info(msg);

function batchingItem(batch, rows, item) {
    const obj = {}
    batch.map(id => (obj[id]=[]))
    rows.map(row => obj[item(row)].push(row))

    return obj;
}

module.exports = {
    // Query
    getUsersByNoExe: async function (NO = null) {
        try {
            console.log(NO)
            let queryString =
                "SELECT * " +
                "FROM users ";

            if (NO) {
                queryString +=
                    "WHERE _no = " + NO;
            }

            let result;
            log('getUsersByNoExe executed');
            result = await db.exe(queryString);
            return result[0];
        }
        catch (err) {
            console.error("getUsersByNoExe Error: " + err);
            throw err;
        }
    },
    getPostsExe: async function(){
        try {
            console.log('posts exe in')
            let querys = "SELECT * FROM Posts"

            let results = await db.exe(querys)

            console.log('posts exe out')
            return results
        } catch (error) {
            console.log(error)
        }
    },
    getCommentsExe: async function(keys){
        try {
            let queryString = `
                SELECT * FROM Comments 
                WHERE post_id in (${keys.map(key => `'${key}'`)})
            `
            console.log(queryString)
            let result = await db.exe(queryString)

            const batchingData = batchingItem(keys, result, item=>item['post_id'])

            return keys.map(id =>batchingData[id])
        } catch (error) {
            console.log(error)
        }
    }
    
}
