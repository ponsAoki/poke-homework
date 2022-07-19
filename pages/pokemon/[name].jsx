import { Button, Flex, Img } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

const Poke = () => {
  const router = useRouter()
  const query = router.query
  return (
    <div>
      <main>
        <Flex textTransform='capitalize'>
          <div>{query.id}</div>
          <div><Img boxSize='38px' src={query.image} alt="ポケモンの画像" /> </div>
          <div>{query.name}</div>
          <Flex>
            <div>{query.type1}</div>
            <div>{query.type2}</div>
          </Flex>
        </Flex>
        <br />
        <Link href="/">
        <Button colorScheme='blue'>一覧に戻る</Button>
        </Link>
      </main>
    </div>
  )
}

export default Poke