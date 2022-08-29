import { Flex, Text, Icon } from "@chakra-ui/react"
import { APP_NAME, APP_VERSION } from "../../config"
import { BsFillJournalBookmarkFill } from "react-icons/bs"

// D9E4DD
const Footer = () => {
  return (
    <Flex w="full" color="white" bgColor="palette.footer" justify="center" align="center" py={3}>
      <Icon as={BsFillJournalBookmarkFill} mr={3}/>
      <Text fontSize='md'>{APP_NAME} เวอร์ชัน {APP_VERSION}</Text>
    </Flex>
  )
}

export default Footer