import { createContext, useContext, useMemo } from 'react'

const ScrollContext = createContext(0)

export default ScrollContext

export const useScrollContext = ()=>{
    const [scrollPos, setScrollPos] = useContext(ScrollContext)

    const fixedTop = useMemo(()=>{
        return scrollPos > 60
    },[scrollPos])

    return {scrollPos, setScrollPos, fixedTop}
}