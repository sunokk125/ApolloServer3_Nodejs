const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    getUsersByNo(
        NO:String
    ): [Users]

    getPosts:[Posts]
}
type Users{
    _no: Int
    _id: String
    _pw: String
    _email: String
}

type Posts {
    _id: Int
    user_id: Users
    contents: String
    comments:[Comments]
}

type Comments{
    _id:Int
    post_id:Int
    contents:String
}

type Message {
    token: String
    user: Users
}

type CompanyUpdateResult{
    resultCount: Int!
}

type EmployeeUpdateResult{
    resultCount: Int!
}

type PostUpdateResult{
    resultCount: Int!
}

type Mutation {
    deletePost(
        postId: ID!
    ): Int
}


`

module.exports = [ typeDefs ]