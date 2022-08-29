import { Button, Flex, Grid, GridItem,Text, Icon, Heading } from "@chakra-ui/react"
import { DocumentToolbar, RichText } from "../common"
import { Container } from "../layout"
import { BsGear, BsCalendar3Event,BsPencil } from "react-icons/bs";

const TitlePanel = ({ data }) => {
    return (
        <Flex w="full" direction="column">
            <Heading mb={4}>{data.title}</Heading>
            <DocumentToolbar tabIndex={1} id={data.id} />
        </Flex>
    )
}

const InfoPanel = ({ data }) => {
    return (
        <Flex w="full" shadow="lg" direction="column" p={4}>
            <Text mb={4}><Icon as={BsGear} mr={1} />จัดการ</Text>
            <Text mb={1} fontSize="sm">เจ้าของบทความ</Text>
            <Text mb={1} fontSize="sm"><Icon as={BsPencil} mr={2} />{data.author}</Text>
            <Text mb={1} fontSize="sm"><Icon as={BsCalendar3Event} mr={2} />{data.update}</Text>
            <Button mt={3} mb={1} size="sm" colorScheme="green">เพิ่มบทอภิปราย</Button>
        </Flex>
    )
}

const NewDiscussDocumentContainer = ({ data }) => {
    return (
        <Container title="เพิ่มบทอภิปรายใหม่">
            <Grid templateColumns='repeat(5, 1fr)' gap={4} w="full" minH="60vh">
                <GridItem colSpan={4} bgColor="palette.container" borderRadius="lg" p={4}>
                    <Flex w="full" direction="column">
                        <TitlePanel data={data} />
                        <RichText content={data.data} />
                    </Flex>
                </GridItem>
                <GridItem bgColor="palette.container" borderRadius="lg" p={4}>
                    <InfoPanel data={data} />
                </GridItem>
            </Grid>
        </Container>
    )
}

export default NewDiscussDocumentContainer