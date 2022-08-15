import { Flex } from "@chakra-ui/react"

const Body = ({ children }) => {
    return (
        <Flex w="full" minH="80vh" bgColor="#FBF7F0" p={6}>
            {children}
        </Flex>
    )
}

export default Body