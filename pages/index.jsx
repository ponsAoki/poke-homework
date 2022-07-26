// import { useState } from 'react'
import { gql} from '@apollo/client'
// import client from './apollo-client'
import {SimpleGrid, Box, Img, Flex, Container } from "@chakra-ui/react"
import Link from 'next/link'
import { useEffect, useState } from 'react'
// import { client } from './apollo-client'
import * as Apollo from '@apollo/client'
import { usePokemonQuery } from './api/graphql'




  // const POKEMONS = gql`
  //   query {
  //     test {
  //       id
  //       name
  //       image
  //       type1
  //       type2
  //     }
  //   }
  // `
//SSGで上手く実装する方法が分かりませんでした。
// export const getStaticProps = async() => {

//   const {data} = await client.query ({
//     query: gql`
//     query Poke {
//       test {
//         id
//         name
//         image
//         type1
//         type2
//       }
//     }
//   `
//   })
//   // if (loading) return <p>loading..</p>
//   // if (error) return <p>error!</p>

//   return {
//     props: {
//       pokeData: data
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   // const data = 

// }

// const GetData = async() => {
//   const { data, loading, error } = useQuery(POKEMONS)
//   if (loading) return <p>読み込み中・・・</p>
//   if (error) return <p>エラー</p>
//   return await data
// }

const GetPokes = () => {

  // const [pokemons, setPokemons] = useState([])

  // useEffect(() => {
  //   (() => {
  const { data, loading } = usePokemonQuery()
  console.log(data);
      
      if (loading) {
        return <p>読み込み中</p>
      }

      // const { data } = await client.query({
      //   query: gql`
      //     query Poke {
      //       test {
      //         id
      //         name
      //         image
      //         type1
      //         type2
      //       }
      //     }
      //   `
      // }) 
      // console.log(data.test);
      // setPokemons(data.test);
  //   })()
  // })

  // const {data, loading, error} = useQuery(POKEMONS)
  
  // if (loading) return <p>読み込み中・・・</p>
  // if (error) return <p>エラー</p>

  // console.log(data);

  return data.test.map((poke) => {
    //ポケモン単体情報
    const pokeInfo = { id: poke.id, name: poke.name, image: poke.image, type1: poke.type1, type2: poke.type2 }
    return (
    <>
      <Link as={`/pokemon/${poke.name}`} href={{ pathname: `/pokemon/${poke.name}`, query: pokeInfo}}>
        <Flex boxShadow='lg' cursor='pointer' _hover={{ boxShadow: 'base' }} transitionDuration='0.3s' alignItems='center'
        gap='1'
        px='3'
        color='black'>
          <Box key={poke.id} fontSize='sm'>{poke.id}</Box>
          <Box key={poke.image} rounded='base'>
          <Img minW='35' maxW='45' src={poke.image} alt="ポケモンの画像" /> 
          </Box>
          <Box key={poke.name} fontSize="xl" fontWeight='bold'>{poke.name}</Box>
        </Flex>
      </Link>
    </>
)} 
  )
}

const Home = () => {
  
  return (
    <Box>
      <Container maxW='960' pt='10' pb='20'>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
            spacing='4'
            textAlign='center'
          textTransform='capitalize'
          >
          <GetPokes></GetPokes>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Home
