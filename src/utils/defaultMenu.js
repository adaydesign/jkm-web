import { BsFillHouseFill, BsBoxArrowInRight,BsJournalPlus } from "react-icons/bs"

export const menuList = [
    {
        id: 1,
        name: "หน้าหลัก",
        link: "/",
        icon:<BsFillHouseFill />
    },
    {
        id: 2,
        name: "เพิ่มบทความ",
        link: "/new",
        icon:<BsJournalPlus />
    },
    {
        id:3,
        spacer: true
    },
    {
        id:4,
        name: "ออกจากระบบ",
        link: "/logout",
        icon:<BsBoxArrowInRight />,
        color: 'red',
    }
]