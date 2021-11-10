import { Stack } from "@chakra-ui/layout";
import Header from "../components/Header";
import TextBox from "../components/TextBox";
import Footer from "../components/Footer";
import Fonts from "../fonts/fonts";
import userPicture from "../assets/icon.png"
import { colors } from "../constants/colors";

const user = {
    name: "Ralph Edwards",
    text: [
        "Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut",
        "Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in."
    ],
    image: userPicture.src,
    time: "3h ago"
}

const IndexPage = () => {
    const { bg } = colors
    return (
        <Stack
            h="100vh"
            w="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Fonts />
            <Stack
                w="100%"
                maxW="640px"
                alignItems="center"
                justifyContent="center"
                background={bg}
                rounded={12}
            >
                <Stack
                    spacing="24px"
                    w="100%"
                    minH="332px"
                    h="79.375%"
                    direction="column"
                    p="32px">
                    <Header user={user} colors={colors}/>
                    <TextBox user={user} colors={colors}/>
                </Stack>
                <Footer />
            </Stack>
        </Stack>)
}

export default IndexPage;