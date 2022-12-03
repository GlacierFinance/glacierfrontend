import { Box, Button, Flex, HStack, Img, Link, Text, useTheme } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { NextLink } from '~/components/link/NextLink';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';

export function HomeHero() {
    const theme = useTheme();
    const { chainId } = useNetworkConfig();

    return (
        <Flex
            height={{ base: 'auto', lg: 'xl' }}
            mx={{ base: `-${theme.space['4']}`, xl: `-${theme.space['8']}` }}
            overflow="hidden"
            minHeight="400px"
            backgroundImage={{
                base:
                    chainId === '10'
                        ? "url('/images/hero-image-optimism-mobile.png')"
                        : "url('/images/hero-image-fantom-mobile.png')",
                md:
                    chainId === '10'
                        ? "url('/images/hero-image-optimism.jpg')"
                        : "url('/images/glacierhero.png')",
            }}
            
            backgroundPosition="75% 50%"
            
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            boxShadow="0px 0px 24px 0px rgba(0,0,0,0.25);"
        >
           
            <Flex flex="1" pl={{ base: '4', xl: '8' }} mb="12" alignItems="center">
                <Flex flexDirection="column" width={{ base: 'auto', lg: '580px' }} mr="8"
                        ml="16">
                <img src='/images/glaciertext.png'
                    width="500"
                    />
                    <Text
                        color="white"
                        textStyle={{ base: undefined, lg: 'h5' }}
                        fontSize='28px'
                        mb={{ base: '6', lg: '10' }}
                        mt="10"
                        maxW="550"
                        lineHeight="40px"
                        letterSpacing="2px"
                    >
                        The future of DeFi re-imagined. Your next generation Decentralised Exchange
                    </Text>

                    <HStack spacing="4" mb={{ base: '6', lg: '10' }}>
                        <NextLink href="/pools" chakraProps={{ _hover: { textDecoration: 'none' } }}>
                            <Button variant="primary" width={{ base: '130px', lg: '160px' }}>
                                Invest
                            </Button>
                        </NextLink>
                        <NextLink href="/swap" chakraProps={{ _hover: { textDecoration: 'none' } }}>
                            <Button width={{ base: '130px', lg: '160px' }} variant="secondary">
                                Swap
                            </Button>
                        </NextLink>
                    </HStack>
                    {/*<Link color="beets.highlight" alignSelf="flex-start">
                        {"I'm new! Help me get started."}
                    </Link>*/}
                </Flex>
                {/* <Flex justify='end' padding='4' marginLeft='36' >
                    <Image src={placeholder}  height='440px'
                    objectFit="contain"
                    />
                </Flex> */}
            </Flex>
            <Box flex="1" display={{ base: 'none', md: 'block' }} />
        </Flex>
    );
}
