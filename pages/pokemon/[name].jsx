import { Box, Button, Container, Flex, Img, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

const Poke = () => {
  const router = useRouter()
  const query = router.query
  return (
    <Box mb='10'>
      <Container maxWidth='960' pt='10'>
        <Container>
          <VStack textTransform='capitalize' align='stretch' spacing={2} p="4" rounded='base' boxShadow='lg'>
            <Box fontWeight='bold'>No.{query.id}</Box>
            <Flex justifyContent='center'><Img boxSize='280' src={query.image} alt="ポケモンの画像" /> </Flex>
            <Box fontSize='4xl' fontWeight='bold'>{query.name}</Box>
            <Flex gap={2}>
              <Box rounded='lg' px='0.6em'>{query.type1}</Box>
              <Box rounded='lg' px='0.6em'>{query.type2}</Box>
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