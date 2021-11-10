import { Box } from "@chakra-ui/layout"

const HeaderButton = (props) => {
    const { btnbg, btnhover, text } = props.colors
    return (
        <Box
            as="button"
            transition="all 0.3s cubic-bezier(.08,.52,.52,1)"
            fontFamily="Poppins"
            fontStyle="normal"
            lineHeight="19px"
            fontSize="13px"
            p="12px 20px"
            borderRadius="100px"
            height="44px"
            width="94px"
            bg={btnbg}
            color={text}
            _hover={{ bg: { btnhover } }}
            variant="solid"
        > 
            Funding
        </Box>
    )
}

export default HeaderButton;