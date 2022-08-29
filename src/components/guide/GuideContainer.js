import { Flex, Heading, Text, SimpleGrid, Grid, GridItem } from "@chakra-ui/react"
import { DocumentToolbar, RichText } from "../common"
import TableofContent from "./TableofContent"

const GuideTitlePanel = ({ data }) => {
    return (
        <Flex w="full" direction="column" mb={6}>
            <Heading mb={4}>{data.title}</Heading>
            <DocumentToolbar tabIndex={0} id={data.id}/>
            <SimpleGrid columns={2}>
                <Text fontSize="sm" color="gray.500">โดย {data.author}</Text>
                <Text fontSize="sm" color="gray.500">แก้ไขวันที่ {data.update}</Text>
                <Text fontSize="sm" color="gray.500">ประเภท {data.category}</Text>
                <Text fontSize="sm" color="gray.500">อ่าน {data.reader} ครั้ง</Text>
            </SimpleGrid>
        </Flex>
    )
}

const GuideContainer = ({ data }) => {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={4} bgColor="palette.container" borderRadius="lg" p={4}>
                <Flex w="full" direction="column">
                    <GuideTitlePanel data={data} />
                    <RichText readOnly content={data.data} id={data.id} />
                </Flex>
            </GridItem>
            <GridItem bgColor="palette.container" borderRadius="lg" p={4}>
                <TableofContent content={data.data} />
            </GridItem>
        </Grid>
    )
}

export default GuideContainer