import { Heading, Stack } from "@chakra-ui/layout"
import FooterInput from "./Input"

const Footer = () => {
    const text = "How can you help with this Request?"

    return (
        <Stack
            padding="24px"
            spacing="12px"
            mt="0 !important"
            w="100%"
            minH="132px"
            h="20.625%"
            background="rgba(95, 116, 149, 0.101961)"
        >
            <Heading
                fontFamily="Poppins"
                fontStyle="normal"
                fontWeight="600"
                fontSize="16px"
                lineHeight="24px"
                color="#FFFFFF"
            >
                {text}
            </Heading>
            <FooterInput />
        </Stack>
    )
}

export default Footer;
