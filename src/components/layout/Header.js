import { Flex, Icon, Center, Heading, Spacer, Avatar, Text, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { BsFillJournalBookmarkFill, BsSearch } from "react-icons/bs"
import { APP_NAME } from "../../config"

const Logo = () => {
    return (
        <Center>
            <Icon as={BsFillJournalBookmarkFill} mr={3} />
            <Heading size="md">{APP_NAME}</Heading>
        </Center>
    )
}

const SearchBar = ({...rest}) => {
    return (
        <Center {...rest}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={BsSearch} color='gray.300' />}
                />
                <Input type='text' placeholder='ค้นหา' size="sm" />
            </InputGroup>
        </Center>
    )
}

const UserPanel = () => {
    return (
        <Flex align="center">
            <Avatar name='นายสามารถ ดีเยี่ยม' size="sm" mr={3} />
            <Text fontSize='md'>นายสามารถ ดีเยี่ยม</Text>
        </Flex>
    )
}

const Header = () => {
    return (
        <Flex w="full" p={4} bgColor="palette.main" color="#fff" align="center">
            <Logo />
            <SearchBar ml={4}/>
            <Spacer />
            <UserPanel />
        </Flex>
    )
}

export default Header