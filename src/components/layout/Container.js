import { Flex, Divider, Heading } from "@chakra-ui/react"

const Container = ({ title, children }) => {
    return (
        <Flex w="full" bgColor="#fff" p={4} borderRadius="lg" direction="column">
            <Heading mb={4}>{title}</Heading>
            <Divider />
            {children}
        </Flex>
    )
}

export default Container