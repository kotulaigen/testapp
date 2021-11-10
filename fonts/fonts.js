import Head from "next/head"

export default function Fonts() {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Poppins:wght@200;400;600&display=swap" rel="stylesheet" />
            </Head>
        </div>
    )
}