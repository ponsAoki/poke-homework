const { ApolloServer, gql } = require("apollo-server-micro");
import Cors from 'micro-cors'
import axios from 'axios';


const cors = Cors()

//データ
//pokeAPIから取ってくるもの: id, name(en), t
// const pokes = [{
//   name: "フシギダネ",
//   no: 1,
// },
// {
//   name: "フシギソウ",
//   no: 2,
// }
// ]
const pokeMass = []
const getData = async() => {
        for (let i = 1; i <= 151; i++) {
            const pokeObj = new Object()
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .catch(err => console.log("接続エラー", err))
            const data = response.data
            const pokeId = data.id
            const pokeName = data.name
            const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`
            console.log(pokeImage);
            const pokeType1 = data.types[0].type.name
            const pokeType2 = data.types.length > 1 ? data.types[1].type.name : null
                // console.log(pokeType1);
            console.log(pokeType2);
            // console.log(pokeId);
            pokeObj.id = pokeId
            pokeObj.name = pokeName
            pokeObj.image = pokeImage
            pokeObj.type1 = pokeType1
            pokeObj.type2 = pokeType2
            pokeMass.push(pokeObj)
        }
        return pokeMass
    }
    // getData()


const typeDefs = gql `
  type Poke {
    id: Int,
    name: String,
    image: String,
    type1: String,
    type2: String,
  }

  type Query {
    test: [Poke]
  }
`

const resolvers = {
    Query: {
        test: () => getData(),
    }
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
})

const startServer = apolloServer.start()

export default cors(async(req, res) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    await startServer
    await apolloServer.createHandler({ path: "/api/graphql" })(req, res)
})

export const config = {
    api: {
        bodyParser: false,
    }
}