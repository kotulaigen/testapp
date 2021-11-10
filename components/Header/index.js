import { Avatar } from "@chakra-ui/avatar"
import { Text, Flex, HStack, Heading } from "@chakra-ui/layout"
import Settings from "./Settings"
import HeaderButton from "./Button"


const Header = (props) => {
    const { user, colors } = props;
    const { text } = colors;
    return (
        <Flex
            justify="space-between"
            alignItems="center"
        >
            <HStack spacing="12px">
                <HeaderButton 
                    colors={colors}
                />
                <Avatar
                    height="44px"
                    width="44px"
                    name={user.name}
                    src={user.image} />
                <Heading
                    fontFamily="Poppins"
                    fontSize="18px"
                    lineHeight="27px"
                    color={text}
                >{user.name}</Heading>
                <Text
                    fontFamily="Poppins"
                    fontStyle="normal"
                    fontWeight="lighter"
                    fontSize="12px"
                    lineHeight="18px"
                    color={text}
                    opacity="0.5"
                >
                    {user.time}
                </Text>
            </HStack>
            <Settings />
        </Flex>
    )
}

export default Header