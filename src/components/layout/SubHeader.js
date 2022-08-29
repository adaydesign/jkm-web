import { useState, useEffect, useMemo } from 'react'
import { Flex, Button, Spacer } from "@chakra-ui/react"
// menu
import { menuList } from "../../utils/defaultMenu"
import { Link as ReactLink } from "react-router-dom"

const MenuItem = ({ item }) => {

    if(item.spacer){
        return <Spacer />
    }

    return <Button leftIcon={item.icon} size="sm" as={ReactLink} to={item.link} colorScheme={item.color || 'menu'} mr={2}>{item.name}</Button>
}

const Menus = () => {
    return (
        menuList.map(m => <MenuItem item={m} key={m.id} />)
    )
}
const SubHeader = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const fixedTop = useMemo(()=>{
        return scrollPosition > 60
    },[scrollPosition])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    

    return (
        <Flex w="full" p={2} bgColor="palette.secondary" align="center" position="fixed" top={fixedTop ? `0px`: `${60-scrollPosition}px`} shadow={fixedTop? "lg":""} zIndex={1}>
            <Menus />
        </Flex>
    )
}

export default SubHeader