const sql = require("../db/dbExe");
const logger = require('../logger/winston');
const loaders = require('../dataloader/dataloaders')
// const login = require('../auth/login');

const log = (msg) => logger.info(msg);

const resolvers = {
    Query: {
        getUsersByNo: async (_,{
            NO }
        ) => {
            try {
                log('getUsersByNo');
                let userNoResults = JSON.stringify(NO);

                let result = await sql.getUsersByNoExe(userNoResults);
                return result;
            }
            catch (err) {
                log("getUsersByNo error : " + err);
                throw err;
            }
        },
        getPosts: async()=>{
            try {
                console.log('getpost in')
                let results = await sql.getPostsExe();
                console.log('getpost out')
                return results
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation:{

    },
    Posts:{
        // user_id: async (keys) =>{
        //     try {
        //         console.log(keys)
        //         let results = await loaders.getUsersLoader.load(keys.user_id)
        //         return results
        //     } catch (error) {
        //         console.log(error)
        //         throw error
        //     }
        // }
        comments: async ( keys ) => {
            try {
                console.log(keys)
                let results = await loaders.getCommentsLoader.load(keys._id)
                return results
            } catch (error) {
                console.log(error)
                throw error
            }
        }
    }
}
module.exports = resolvers