import { Stack, Text } from "@chakra-ui/layout"

const TextBox = (props) => {
    const { user } = props;
    return (
        <Stack
            spacing="32px"
        >
            {user.text.map((paragraph, index) => {
                return (
                    <Text
                        fontSize="18px"
                        fontFamily="Lato"
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight="25.2px"
                        color="#FFFFFF"
                        opacity="0.8"
                        key={index}
                    >
                        {paragraph}
                    </Text>
                );
            })}
        </Stack>
    )
}

export default TextBox;