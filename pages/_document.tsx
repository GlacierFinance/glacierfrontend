import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { chakraTheme } from '~/styles/chakraTheme';

class BeetsDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" content="Glacier Finance" />
                    <meta
                        name="description"
                        content="The future of DeFi re-imagineered. Your next generation Decentralised Exchange."
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${process.env.VERCEL_URL}`} />
                    <meta property="og:title" content="Glacier Finance" />
                    <meta
                        property="og:description"
                        content="The future of DeFi re-imagineered. Your next generation Decentralised Exchange."
                    />
                    <meta
                        property="og:image"
                        content="https://github.com/GlacierFinance/glacierfrontend/blob/main/public/images/glacierhero.png"
                    />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={`${process.env.VERCEL_URL}`} />
                    <meta property="twitter:title" content="Glacier Finance" />
                    <meta
                        property="twitter:description"
                        content="The future of DeFi re-imagineered. Your next generation Decentralised Exchange."
                    />
                    <meta
                        property="twitter:image"
                        content="https://github.com/GlacierFinance/glacierfrontend/blob/main/public/images/glacierhero.png"
                    />

                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', { page_path: window.location.pathname });
                            `,
                        }}
                    />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default BeetsDocument;
