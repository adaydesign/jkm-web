import { Button, Flex, Grid, GridItem, Input, Select, Text , Icon} from "@chakra-ui/react"
import { RichText } from "../common"
import { Container } from "../layout"
import { BsGear } from "react-icons/bs";

const TitlePanel = () => {
    return (
        <Input placeholder='พิมพ์ชื่อเรื่อง' w="full" autoFocus border={0} size="lg" mb={2} variant='flushed' />
    )
}

const InfoPanel = () => {
    return (
        <Flex w="full" shadow="lg" direction="column" p={4}>
            <Text mb={4}><Icon as={BsGear} mr={1}/>จัดการข้อมูล</Text>
            <Text mb={1} fontSize="sm">หมวดหมู่</Text>
            <Select placeholder='เลือกหมวดหมู่' size="sm">
                <option>งานคดี</option>
                <option>งานประชาสัมพันธ์</option>
                <option>งานไกล่เกลี่ย</option>
            </Select>
            
            <Text mt={4} mb={1} fontSize="sm">แนบไฟล์ PDF</Text>
            <Input mb={1} type="file" size="sm" />

            <Text mt={4} mb={1} fontSize="sm">การเผยแพร่</Text>
            <Button mb={1} size="sm" variant="outline" colorScheme="orange">บันทึกฉบับร่าง</Button>
            <Button size="sm" colorScheme="green">บันทึกและเผยแพร่</Button>
        </Flex>
    )
}

const NewDocumentContainer = () => {
    return (
        <Container title="เพิ่มบทความใหม่">
            <Grid templateColumns='repeat(5, 1fr)' gap={4} w="full" minH="60vh">
                <GridItem colSpan={4} bgColor="palette.container" borderRadius="lg" p={4}>
                    <Flex w="full" direction="column">
                        <TitlePanel />
                        <RichText />
                    </Flex>
                </GridItem>
                <GridItem bgColor="palette.container" borderRadius="lg" p={4}>
                    <InfoPanel />
                </GridItem>
            </Grid>
        </Container>
    )
}

export default NewDocumentContainer