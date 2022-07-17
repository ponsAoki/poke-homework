import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'
import {SimpleGrid, Box, Img } from "@chakra-ui/react"





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

  return data.test.map(({ id, name, image, type1, type2 }) => 
    <>
      
            <Box>
      <div key={id}>{id}</div>
      <div key={name}>{name}</div>
      <div key={image}>
       <Img boxSize='38px' src={image} alt="ポケモンの画像" /> 
      </div>
      <div key={type1}>{type1}</div>
          <div key={type2}>{type2}</div>
        </Box>
        
    </>
  )
}

export default function Home() {
  
  
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>hello Pokemon!</h1>
        <SimpleGrid
            bg='gray.50'
            columns={{ sm: 2, md: 4 }}
            spacing='8'
            p='10'
            textAlign='center'
            rounded='lg'
            color='gray.400'
          >
              <GetPokes></GetPokes>
        </SimpleGrid>
          
      </main>

    </div>
  )
}
