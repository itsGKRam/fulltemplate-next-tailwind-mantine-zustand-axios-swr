import {
    createGetInitialProps,
    createStylesServer,
    ServerStyles,
} from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();
const stylesServer = createStylesServer();

export default class MyDocument extends Document {
    static getInitialProps = getInitialProps;

    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [
            initialProps.styles,
            <ServerStyles
                html={initialProps.html}
                server={stylesServer}
                key='styles'
            />,
        ],
    };
};