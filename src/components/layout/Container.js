import { Flex, Divider, Heading } from "@chakra-ui/react"

const Container = ({ title, children }) => {
    return (
        <Flex w="full" bgColor="palette.container" p={4} borderRadius="lg" direction="column">
            <Heading mb={4} size="md">{title}</Heading>
            <Divider mb={2} />
            {children}
        </Flex>
    )
}

export default Container