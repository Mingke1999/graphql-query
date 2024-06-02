export const typeDefs = `#graphql
    type Game {
        id:ID! #! required
        title:String!
        platform:[String!]! #one for element one for array
    }
    type Review{
        id:ID!,
        rating:Int!
        content:String!
    }
    type Author{
        id:ID!
        name:String!
        verified:Boolean!
    }
    type Query{
        reviews:[Review]
        review(id:ID!):Review
        games:[Game]
        game(id:ID!):Game
        authors:[Author]
        author(id:ID!):Author
    }
`