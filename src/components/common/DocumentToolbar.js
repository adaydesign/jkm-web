import { Text, Icon, Link, Spacer, Tabs, TabList, Tab } from "@chakra-ui/react"
import { BsChatText, BsPencil, BsBook } from "react-icons/bs";
import { Link as ReactLink } from "react-router-dom";

const DocumentToolbar = ({ tabIndex, id }) => {
    return (
        <Tabs defaultIndex={tabIndex} colorScheme='menu' size='sm' mb={3}>
            <TabList>
                <Link as={ReactLink} to={`/guide/${id}/`}>
                    <Tab>
                        <Text fontSize="sm"><Icon as={BsBook} mr={1} />อ่าน</Text>
                    </Tab>
                </Link>
                <Link as={ReactLink} to={`/guide/${id}/discuss`} ml={2}>
                    <Tab>
                        <Text fontSize="sm" ><Icon as={BsChatText} mr={1} />อภิปราย</Text>
                    </Tab>
                </Link>
                <Spacer />
                <Link as={ReactLink} to={`/guide/${id}/edit`}>
                    <Tab>
                        <Text fontSize="sm"><Icon as={BsPencil} mr={1} />แก้ไข</Text>
                    </Tab>
                </Link>
            </TabList>
        </Tabs>
    )
}

export default DocumentToolbar