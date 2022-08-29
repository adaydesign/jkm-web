import { Flex } from "@chakra-ui/react"
import { Header, Body, Footer, SubHeader } from "../components/layout"
import DefaultRouter from "../router/DefaultRouter"

const DefaultLayout = () => {
  return (
    <Flex w="full" direction="column">
        <Header />
        <SubHeader />
        <Body mt="40px">
            <DefaultRouter />
        </Body>
        <Footer />
    </Flex>
  )
}

export default DefaultLayout