import { Flex } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Features from '../components/Features'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Features />
    </Flex>
  )
}
