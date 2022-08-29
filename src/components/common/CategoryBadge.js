import { Badge } from "@chakra-ui/react";
import { useMemo } from "react";

const CategoryBadge = ({ children, ...rest }) => {
    const color = useMemo(()=>{
        if(typeof children == "string"){
            switch(children){
                case "งานไกล่เกลี่ย" : return "pink";
                case "งานคดี" : return "blue";
                case "งานประชาสัมพันธ์" : return "green";
                default : return "gray"
            }
        }else{
            return "gray"
        }
    },[children])

    return (
        <Badge colorScheme={color} {...rest}>{children}</Badge>
    )
}

export default CategoryBadge