import { BsFillHouseFill,BsBoxArrowInRight } from "react-icons/bs"

export const menuList = [
    {
        id: 1,
        name: "หน้าหลัก",
        link: "/",
        icon:<BsFillHouseFill />
    },
    {
        id:2,
        spacer: true
    },
    {
        id:3,
        name: "ออกจากระบบ",
        link: "/logout",
        icon:<BsBoxArrowInRight />
    }
]