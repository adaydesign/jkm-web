import { Button, Flex, Grid, GridItem, Text, Heading } from "@chakra-ui/react"
import { BsPlusCircle } from "react-icons/bs";
import { Link as ReactLink } from "react-router-dom";
import { DocumentToolbar } from "../common";
import DiscussBox from "./DiscussBox";

const DiscussTitlePanel = ({ data }) => {
    return (
        <Flex w="full" direction="column" mb={2}>
            <Heading mb={4}>{data.title}</Heading>
            <DocumentToolbar tabIndex={1} id={data.id} />
            <Flex justify="space-between">
                <Text fontSize="sm" color="gray.500">โดย {data.author}</Text>
                <Text fontSize="sm" color="gray.500">แก้ไขวันที่ {data.update}</Text>
            </Flex>
        </Flex>
    )
}

const DiscussButton = ({id}) => {
    return (
        <Flex w="full" p={8} justify="center" bgColor="gray.50" my={4}>
            <Button colorScheme="menu" leftIcon={<BsPlusCircle />} as={ReactLink} to={`/guide/${id}/newdiscuss`}>เริ่มการอภิปรายใหม่</Button>
        </Flex>
    )
}

const DiscussDocumentContainer = ({ data }) => {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={4} w="full" minH="60vh">
            <GridItem colSpan={5} bgColor="palette.container" borderRadius="lg" p={4}>
                <Flex w="full" direction="column">
                    <DiscussTitlePanel data={data} />
                    <DiscussButton id={data.id} />
                    <hr />
                    <Heading size="sm" my={3}>การอภิปราย ({data.discuss.length})</Heading>
                    {data.discuss.map(d => <DiscussBox discuss={d} id={data.id} />)}
                </Flex>
            </GridItem>
        </Grid>
    )
}

export default DiscussDocumentContainer