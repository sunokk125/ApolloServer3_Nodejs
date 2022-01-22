const express = require('express')
const cors = require('cors')
const http = require('http')

const typeDefs = require('./gql/gql_schemas')
const resolvers = require('./gql/resolvers')

const { ApolloServer } = require('apollo-server-express')

const port = process.env.PORT || 3000;

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:true,
    context: ({req}) =>{
        try{
            console.log('--------HEADER START--------')
            console.log(req.headers)
            console.log('---------HEADER END---------')
            console.log('---------BODY START---------')
            console.log(req.body)
            console.log('----------BODY END----------')
        }catch(e){
            throw e
        }
    }
})


server.applyMiddleware({ 
    app,
    path:'/graphql' 
})

// app.get('/', (req, res) => {
//     res.json({
//         sucess: true,
//     });
// });
httpServer.listen(port, () => {
    console.log(`Server is listening at Port : ${port}`)
})
