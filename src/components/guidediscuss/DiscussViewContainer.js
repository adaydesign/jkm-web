import { Button, Flex, Grid, GridItem,  Text,  Heading, Icon } from "@chakra-ui/react"
import { DocumentToolbar, RichText } from "../common"
import { Container } from "../layout"
import { BsEmojiLaughing,BsCalendar3Event,BsPencil } from "react-icons/bs";

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
            <Text mb={1} fontSize="sm">ผู้แก้ไข</Text>
            <Text mb={1} fontSize="sm"><Icon as={BsPencil} mr={2} />{data.author}</Text>
            <Text mb={1} fontSize="sm"><Icon as={BsCalendar3Event} mr={2} />{data.date}</Text>

            <Text mt={4} mb={1} fontSize="sm">คะแนนโหวตปัจจุบัน</Text>
            <Text mb={1} fontSize="30px">5</Text>

            <Text mt={4} mb={1} fontSize="sm">ให้คะแนน</Text>
            <Button size="sm" colorScheme="blue" leftIcon={<BsEmojiLaughing />}>โหวตให้ +1 คะแนน</Button>
        </Flex>
    )
}

const DiscussViewContainer = ({ data }) => {
    return (
        <Container title="อ่านบทอภิปรายบทความ">
            <Grid templateColumns='repeat(5, 1fr)' gap={4} w="full" minH="60vh">
                <GridItem colSpan={4} bgColor="palette.container" borderRadius="lg" p={4}>
                    <Flex w="full" direction="column">
                        <TitlePanel data={data} />
                        <RichText readOnly content={data.data} />
                    </Flex>
                </GridItem>
                <GridItem bgColor="palette.container" borderRadius="lg" p={4}>
                    <InfoPanel data={data} />
                </GridItem>
            </Grid>
        </Container>
    )
}

export default DiscussViewContainer