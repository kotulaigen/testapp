import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import InputIcon from "../Icon/InputIcon"

const FooterInput = () => {
    return (
        <InputGroup
            background="rgba(95, 116, 149, 0.2)"
            borderRadius="100px"
        >
            <Input
                color="#FFFFFF"
                h="48px"
                borderRadius="100px"
                border="none" 
                placeholder="Type here..."
                opacity="0.5"
                fontSize="16px"
                lineHeight="19px" 
                fontFamily="Lato"
                _focus={{opacity: "0.8"}}
            />
            <InputRightElement>
                <InputIcon />
            </InputRightElement>
        </InputGroup>
    )
}

export default FooterInput;