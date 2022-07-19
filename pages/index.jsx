import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'
import {SimpleGrid, Box, Img, Flex, Container } from "@chakra-ui/react"
import Link from 'next/link'
// import Link from 'next/link'





const POKEMONS = gql`
    query {
      test {
        id
        name
        image
        type1
        type2
      }
    }
  `

function GetPokes() {
  const { data,  loading, error } = useQuery(POKEMONS)
  
  if (loading) return <p>ロード中・・・</p>
  if (error) return <p>エラー</p>

  console.log(data);

  return data.test.map((poke) => {
    //ポケモン単体情報
    const pokeInfo = { id: poke.id, name: poke.name, image: poke.image, type1: poke.type1, type2: poke.type2 }
    return (
    <>
      <Link as={`/pokemon/${poke.name}`} href={{ pathname: `/pokemon/${poke.name}`, query: pokeInfo}}>
          <Flex boxShadow='lg' _hover={{ boxShadow: 'base' }} transitionDuration='0.3s' alignItems='center'
            gap='1'
            px='3'
          color='black'>
      <Box key={poke.id} fontSize='sm'>{poke.id}</Box>
      <Box key={poke.image} rounded='base'>
       <Img minW='35' maxW='45' src={poke.image} alt="ポケモンの画像" /> 
      </Box>
      <Box key={poke.name} fontSize="xl" fontWeight='bold'>{poke.name}</Box>
      {/* <div key={type1}>{type1}</div>
          <div key={type2}>{type2}</div> */}
        </Flex>
        </Link>
    </>
)} 
  )
}

export default function Home() {
  
  
  return (
    <Box>
      <Container maxW='960' pt='10' pb='20'>
        <SimpleGrid
            // bg='gray.50'
          columns={{ sm: 2, md: 3 }}
          // maxW='700'
          // mt='10'
          // mb='20'
            spacing='4'
            // p='10'
            textAlign='center'
            // rounded='lg'
          color='gray.400'
          textTransform='capitalize'
          >
              <GetPokes></GetPokes>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
