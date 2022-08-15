import { useMemo } from 'react'
import { Table } from '../common'
import { guideList } from '../../utils/userGuideList'
import { IconButton, Flex, Text,Badge  } from '@chakra-ui/react'
import { BsFileEarmarkPdf } from "react-icons/bs";


const PDFLink = () =>{
    return <IconButton
    size="sm"
    colorScheme='red'
    aria-label='Search database'
    icon={<BsFileEarmarkPdf />}
  />
}

const GuideNamePanel = ({item}) => {
    return (
        <Flex direction="column">
            <Text>{item.title}</Text>
            <Flex>
                <Text color="gray.500" fontSize='sm'>ปรับปรุงวันที่ : {item.update}</Text>
                <Badge ml={2}>{item.category}</Badge>
            </Flex>
        </Flex>
    )
}


const GuideTable = () => {

    const columns = useMemo(() => [
        {
            header: '#',
            cell: info => parseInt(info.row.id)+1,
        },
        {
            header: 'คู่มือปฏิบัติงาน',
            cell: info => {
                return <GuideNamePanel item={info.row.original} />
            }
           
        },
        {
            header: 'อ่าน',
            accessorKey: 'reader',
        },
        {
            header: 'pdf',
            cell: info => <PDFLink/>
        },
    ], [])


    return (
        <Table columns={columns} data={guideList} />
    )
}

export default GuideTable