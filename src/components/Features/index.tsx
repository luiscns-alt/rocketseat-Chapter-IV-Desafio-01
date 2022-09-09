import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Features() {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <Flex direction={['row', 'column']} align="center" justify="center">
          {isMobile ? (
            <Image src={`/cocktail.svg`} w="85px" h="85px" mb="6" />
          ) : (
            <Text color="yellow.400" fontSize="4xl" mr="2">
              •
            </Text>
          )}
          <Text
            fontWeight="600"
            color="gray.700"
            fontSize={['md', 'xl', '2xl']}
          >
            vida noturna
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex direction={['row', 'column']} align="center" justify="center">
          {isMobile ? (
            <Image src={`/surf.svg`} w="85px" h="85px" mb="6" />
          ) : (
            <Text color="yellow.400" fontSize="4xl" mr="2">
              •
            </Text>
          )}
          <Text
            fontWeight="600"
            color="gray.700"
            fontSize={['md', 'xl', '2xl']}
          >
            praia
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex direction={['row', 'column']} align="center" justify="center">
          {isMobile ? (
            <Image src={`/building.svg`} w="85px" h="85px" mb="6" />
          ) : (
            <Text color="yellow.400" fontSize="4xl" mr="2">
              •
            </Text>
          )}
          <Text
            fontWeight="600"
            color="gray.700"
            fontSize={['md', 'xl', '2xl']}
          >
            moderno
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex direction={['row', 'column']} align="center" justify="center">
          {isMobile ? (
            <Image src={`/museum.svg`} w="85px" h="85px" mb="6" />
          ) : (
            <Text color="yellow.400" fontSize="4xl" mr="2">
              •
            </Text>
          )}
          <Text
            fontWeight="600"
            color="gray.700"
            fontSize={['md', 'xl', '2xl']}
          >
            clássico
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Flex direction={['row', 'column']} align="center" justify="center">
          {isMobile ? (
            <Image src={`/earth.svg`} w="85px" h="85px" mb="6" />
          ) : (
            <Text color="yellow.400" fontSize="4xl" mr="2">
              •
            </Text>
          )}
          <Text
            fontWeight="600"
            color="gray.700"
            fontSize={['md', 'xl', '2xl']}
          >
            e mais...
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  )
}
