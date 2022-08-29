import {  Flex,  Text, Icon,  Link } from "@chakra-ui/react"
import { BsCalendar3Event, BsPencil } from "react-icons/bs";
import { Link as ReactLink } from "react-router-dom";

const DiscussBox = ({ id,discuss }) => {
    return (
        <Flex w="full" borderRadius="lg" bgColor="gray.50" mb={2} direction="column" _hover={{ shadow: "md" }}>
            <Flex justify="space-between" bgColor="palette.main" py={1} px={4} borderTopRadius="lg">
                <Text fontSize="sm"><Icon as={BsPencil} mr={2} />{discuss.author}</Text>
                <Text fontSize="sm"><Icon as={BsCalendar3Event} mr={2} />{discuss.date}</Text>
            </Flex>
            <Flex p={4}>
                <Link as={ReactLink} to={`/guide/${id}/discuss/${discuss.id}`} w="full">
                    <Flex w="full">
                        <Text>ข้อความแก้ไขเพิ่มเติม....</Text>
                    </Flex>
                </Link>
                <Flex direction="column" w="150px" align="center" borderRadius="md" bgColor="gray.300" mx={2}>
                    <Text fontSize="sm">จำนวนโหวต</Text>
                    <Text fontSize="30px">{discuss.vote}</Text>
                </Flex>
                <Flex direction="column" w="150px" align="center" borderRadius="md" bgColor="gray.200">
                    <Text fontSize="sm">สถานะ</Text>
                    <Text mt={2}>ยังไม่อนุมัติ</Text>
                </Flex>
            </Flex>

        </Flex>
    )
}

export default DiscussBox