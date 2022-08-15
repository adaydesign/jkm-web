import { Flex, Icon, Center, Heading, Spacer,Avatar,Text } from "@chakra-ui/react"
import { BsFillJournalBookmarkFill } from "react-icons/bs"
import { APP_NAME } from "../../config"

const Logo = () => {
    return (
        <Center>
            <Icon as={BsFillJournalBookmarkFill} mr={3}/>
            <Heading size="md">{APP_NAME}</Heading>
        </Center>
    )
}

const UserPanel = () => {
    return (
        <Flex align="center">
            <Avatar name='Dan Abrahmov' size="sm"  mr={3}/>
            <Text fontSize='md'>Dan Abrahmov</Text>
        </Flex>
    )
}

const Header = () => {
    return (
        <Flex w="full" p={4} bgColor="#555555" color="#fff" align="center">
            <Logo />
            <Spacer />
            <UserPanel />
        </Flex>
    )
}

export default Header