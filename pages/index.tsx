import { Home } from '~/modules/home/Home';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { initializeApolloClient, loadApolloState } from '~/apollo/client';
import { GetHomeData } from '~/apollo/generated/operations';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
function useV1Redirect() {
    const { push } = useRouter();
    const redirectChecked = useRef(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash && !redirectChecked.current) {
            const hash = window.location.hash;

            redirectChecked.current = true;

            if (hash.indexOf('#/pool/') === 0) {
                const poolId = hash.slice(7, 74);

                push(`/pool/${poolId}`);
            } else if (hash.indexOf('#/pools') === 0) {
                push('/pools');
            } else if (hash.indexOf('#/trade') === 0) {
                push('/swap');
            }
        }
    });
}

function HomePage() {
    useV1Redirect();
    return (
        <>
            <Head>
                <title>Glacier Fi</title>
            </Head>
            <Box backgroundImage='./images/gridbg02.png' backgroundRepeat="no-repeat" backgroundPosition="45% 6%" position="relative">
                <Home />
            </Box>
        </>
    );
}

export async function getStaticProps() {
    const client = initializeApolloClient();

    return loadApolloState({
        client,
        pageSetup: async () => {
            await client.query({ query: GetHomeData });
        },
    });
}

export default HomePage;
