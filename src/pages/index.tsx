import { Box, Flex, Heading } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Banner from '../components/Banner'
import Features from '../components/Features'
import { Header } from '../components/Header'
import Slider from '../components/Slider'
import { getPrismicClient } from '../services/prismic'

interface HomeProps {
  continents: {
    slug: string
    title: string
    summary: string
    image: string
  }[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Features />
      <Box
        w={['60px', '90px']}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={['9', '20']}
      />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({})
  const response = await prismic.getByType('continent')

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider,
    }
  })

  return {
    props: {
      continents,
    },
  }
}
