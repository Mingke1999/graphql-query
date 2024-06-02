import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js';

const resolvers = {
    Query:{
        games:()=> db.games,
        reviews:() => db.reviews,
        authors:() => db.authors,
        review(_, args){
            return db.reviews.find((review)=>args.id === review.id)
        },
        author(_, args){
            return db.authors.find((author)=>args.id === author.id)
        },
        game(_, args){
            return db.games.find((game)=>args.id === game.id)
            //Game parent argument
        }
    },
    Game: {
        reviews(parent){
            //parent argument is a reference to the value returnde by parent resolver
            return db.reviews.filter((review)=>parent.id === review.game_id)
        }
    },
    Author:{
        reviews(parent){
            //parent argument is a reference to the value returnde by parent resolver
            return db.reviews.filter((review)=>parent.id === review.author_id)
        }
    },
    Review:{
        author(parent){
            return db.authors.find((author)=> author.id === parent.author_id)
        },
        game(parent){
            return db.games.find((game)=> game.id === parent.game_id)
        }
    },
    Mutation:{
        deleteGame(_, args){
            db.games = db.games.filter((game) => game.id !== args.id)
            return db.games
        },
        addGame(_,args){
            let game = {
                ...args.game,
                id:Math.floor(Math.random()*1000).toString()
            }

            db.games.push(game)
            return game
        },
        updateGame(_, args){
            db.games = db.games.map((game)=> {
                if(game.id === args.id){
                    return {...game, ...args.edits}
                }
                return game
            })
            return db.games.find((game)=> game.id === args.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})



const {url} = await startStandaloneServer(
    server,{
        listen:{port:4000}
    }
)
console.log(`🚀  Server ready at: ${url}`);