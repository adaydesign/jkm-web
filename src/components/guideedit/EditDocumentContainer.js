import { Button, Flex, Grid, GridItem, Input, Select, Text, Icon } from "@chakra-ui/react"
import { DocumentToolbar, RichText } from "../common"
import { Container } from "../layout"
import { BsGear, BsCalendar3Event } from "react-icons/bs";

const TitlePanel = ({ data }) => {
    return (
        <Flex w="full" direction="column">
            <DocumentToolbar tabIndex={2} id={data.id} />
            <Input placeholder='พิมพ์ชื่อเรื่อง' w="full" autoFocus border={0} size="lg" mb={2} variant='flushed' defaultValue={data.title} />
        </Flex>
    )
}

const InfoPanel = ({ data }) => {
    return (
        <Flex w="full" shadow="lg" direction="column" p={4}>
            <Text mb={4}><Icon as={BsGear} mr={1} />จัดการข้อมูล</Text>
            <Text mb={1} fontSize="sm">หมวดหมู่</Text>
            <Select placeholder='เลือกหมวดหมู่' size="sm" defaultValue={data.category}>
                <option>งานคดี</option>
                <option>งานประชาสัมพันธ์</option>
                <option>งานไกล่เกลี่ย</option>
            </Select>

            <Text mt={4} mb={1} fontSize="sm">แนบไฟล์ PDF</Text>
            <Input mb={1} type="file" size="sm" />

            <Text mt={4} mb={1} fontSize="sm">แก้ไขล่าสุดเมื่อ</Text>
            <Text mb={1} fontSize="sm" color="gray.400"><Icon as={BsCalendar3Event} mr={2} />{data.update}</Text>

            <Text mt={4} mb={1} fontSize="sm">การเผยแพร่</Text>
            <Select placeholder='เลือกสถานะการเผยแพร่' size="sm">
                <option>ไม่เผยแพร่</option>
                <option>ฉบับร่าง</option>
                <option selected>เผยแพร่</option>
            </Select>
            <Button mt={3} mb={1} size="sm" variant="outline" colorScheme="orange">บันทึกฉบับร่าง</Button>
            <Button size="sm" colorScheme="green">บันทึกและเผยแพร่</Button>
        </Flex>
    )
}

const EditDocumentContainer = ({ data }) => {
    return (
        <Container title="แก้ไขบทความ">
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

export default EditDocumentContainer