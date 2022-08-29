import { Flex, Heading, Link, Text, Icon } from "@chakra-ui/react"
import { useMemo } from "react"
import { sectionId } from "../../utils/link-utils"
import { BsJournalBookmark } from "react-icons/bs";

const TOCItem = ({ item }) => {
    const ml = useMemo(() => {
        switch (item.type) {
            case "heading-two": return 8
            case "heading-three": return 12
            default: return 0 // "heading-ong"
        }

    }, [item])
    return (
        <Link href={`#${item.sectionId}`}>
            <Text ml={ml} fontSize="sm">{ml===0 && <Icon as={ BsJournalBookmark } mr={1} />}{item.text}</Text>
        </Link>
    )
}

const TableofContent = ({ content }) => {

    const items = useMemo(() => {
        const data = content.filter(i => i.type === "heading-one" || i.type === "heading-two")
        // console.log(content)
        return data.map((i, index) => {
            let t = ""
            if (i.children?.length > 0) {
                t = i.children.map(ch => ch.text || '').join('')
            }
            return {
                id: index,
                type: i.type,
                text: t,
                sectionId: sectionId(t)
            }
        })
    }, [content])

    return (
        <Flex w="full" direction="column">
            <Heading size="sm" mb={2}>สารบัญ</Heading>
            {items.map(i => <TOCItem item={i} key={i.id} />)}
        </Flex>
    )
}

export default TableofContent