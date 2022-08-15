import { Flex, Button,Spacer } from "@chakra-ui/react"
// menu
import { menuList } from "../../utils/defaultMenu"

const MenuItem = ({item})=>{
    return item.spacer ? <Spacer /> : <Button leftIcon={item.icon} size="sm" >{item.name}</Button>
}

const Menus = ()=>{
    return (
        menuList.map(m=><MenuItem item={m} key={m.id} />)
    )
}
const SubHeader = () => {
    return (
        <Flex w="full" p={2} bgColor="#CDC9C3" align="center">
            <Menus />
        </Flex>
    )
}

export default SubHeader