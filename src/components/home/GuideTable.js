import { useMemo } from 'react'
import { Table, CategoryBadge } from '../common'
import { guideList } from '../../utils/listContent'
import { IconButton, Flex, Text, Link, Icon } from '@chakra-ui/react'
import { BsFileEarmarkPdf, BsCalendar3Event,BsJournalBookmark } from "react-icons/bs";
import { Link as ReactLink } from "react-router-dom"

const PDFLink = () => {
    return <IconButton
        size="sm"
        colorScheme='red'
        aria-label='Search database'
        icon={<BsFileEarmarkPdf />}
    />
}

const GuideNamePanel = ({ item }) => {
    return (
        <Flex direction="column">
            <Link as={ReactLink} to={`/guide/${item.id}`} >
                <Text><Icon as={BsJournalBookmark} mr={2} />{item.title}</Text>
            </Link>
            <Flex mt={2}>
                <Text color="gray.500" fontSize='sm'><Icon as={BsCalendar3Event} mr={2} />{item.update}</Text>
                <CategoryBadge ml={2}>{item.category}</CategoryBadge>
            </Flex>
        </Flex>
    )
}

const GuideTable = () => {

    const columns = useMemo(() => [
        {
            header: 'คู่มือปฏิบัติงาน',
            cell: info => {
                return <GuideNamePanel item={info.row.original} />
            },
        },
        {
            header: 'อ่าน',
            accessorKey: 'reader',
        },
        {
            header: 'อภิปราย',
            accessorKey: 'discuss',
            cell: info => info.row.original.discuss.length,
        },
        {
            header: 'pdf',
            cell: info => <PDFLink />
        },
    ], [])


    return (
        <Table columns={columns} data={guideList} />
    )
}

export default GuideTable