import { Box, Button, Container, Flex, Img, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

const Poke = () => {
  const router = useRouter()
  const query = router.query

  //タイプごとに色分ける
  const backgrounds = {
    normal: 'rgb(168, 167, 122)',
    fire: 'rgb(238, 129, 48)',
    water: 'rgb(99, 144, 240)',
    electric: 'rgb(247, 208, 44)',
    grass: 'rgb(122, 199, 76)',
    ice: 'rgb(150, 217, 214)',
    fighting: 'rgb(194, 46, 40)',
    poison: 'rgb(163, 62, 161)',
    ground: 'rgb(226, 191, 101)',
    flying: 'rgb(169, 143, 243)',
    psychic: 'rgb(249, 85, 135)',
    bug: 'rgb(166, 185, 26)',
    rock: 'rgb(182, 161, 54)',
    ghost: 'rgb(115, 87, 151)',
    dragon: 'rgb(111, 53, 252)',
    fairy: 'rgb(214, 133, 173)',
  }
  const defaultBackground = 'white'
  return (
    <Box mb='10'>
      <Container maxWidth='960' pt='10'>
        <Container>
          <VStack textTransform='capitalize' align='stretch' spacing={2} p="4" rounded='base' boxShadow='lg'>
            <Box fontWeight='bold'>No.{query.id}</Box>
            <Flex justifyContent='center'><Img maxBlockSize='280' src={query.image} alt="ポケモンの画像" /> </Flex>
            <Box fontSize='4xl' fontWeight='bold'>{query.name}</Box>
            <Flex gap={2}>
              <Box rounded='lg' px='0.6em' background={backgrounds[query.type1] || defaultBackground}>{query.type1}</Box>
              <Box rounded='lg' px='0.6em' background={backgrounds[query.type2] || defaultBackground}>{query.type2}</Box>
            </Flex>
          </VStack>
        </Container>
        <br />
        <Flex alignItems='center' justifyContent='center'>
          <Link href="/">
            <Button colorScheme='blue'>一覧に戻る</Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Poke