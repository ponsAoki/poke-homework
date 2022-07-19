import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'
import {SimpleGrid, Box, Img, Flex } from "@chakra-ui/react"
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
      <Flex boxShadow='lg'>
      <div key={poke.id}>{poke.id}</div>
      <div key={poke.image}>
       <Img boxSize='38px' src={poke.image} alt="ポケモンの画像" /> 
      </div>
      <div key={poke.name}>{poke.name}</div>
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
    <div className={styles.container}>

      <main className={styles.main}>
        <SimpleGrid
            bg='gray.50'
            columns={{ sm: 2, md: 4 }}
            spacing='8'
            // p='10'
            textAlign='center'
            rounded='lg'
          color='gray.400'
          textTransform='capitalize'
          >
              <GetPokes></GetPokes>
        </SimpleGrid>
          
      </main>

    </div>
  )
}
