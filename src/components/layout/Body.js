import { Flex } from "@chakra-ui/react"

const Body = ({ children, ...rest }) => {
    return (
        <Flex w="full" minH="80vh" bgColor="palette.body" p={6} {...rest}>
            {children}
        </Flex>
    )
}

export default Body