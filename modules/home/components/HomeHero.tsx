import { Box, Button, Flex, HStack, Img, Link, Text, useTheme } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import { NextLink } from '~/components/link/NextLink';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';
import  placeholder from '../../../public/images/glacierhero.png'; 
export function HomeHero() {
    const theme = useTheme();
    const { chainId } = useNetworkConfig();

    return (
        <Flex
            height={{ base: 'lg', xl: '2xl' }}
            ml={{ base: `-${theme.space['4']}`, xl: `-${theme.space['8']}` }}
            overflow="hidden"
            // backgroundImage="./images/gridbg02.png"
            // backgroundPosition="10% 120%"
            // backgroundRepeat="no-repeat"
            backgroundImage={{
                md:
                    chainId === '10'
                        ? "url('/images/hero-image-optimism.jpg')"
                        : "url('/images/glacierhero.png')",
            }}
            
            backgroundPosition="88% 10%"
            backgroundRepeat="no-repeat"
            boxShadow="0px 0px 24px 0px rgba(0,0,0,0.25);"
        >     
            <Flex flex="1" pl={{ base: '4', xl: '8' }} mb="12" alignItems="center">
                <Flex flexDirection="column" width={{ md: '40%', lg: '80%' }} mr={{ base: "10", lg: "20"}} ml="32">
               <Box>
                <img src='/images/glaciertext.png'
                     width='470'
                    />
               </Box>
                    <Text
                        color="white"
                        fontSize='22px'
                        mb={{ base: '6', lg: '10' }}
                        mt="40px"
                        maxW='450'
                        lineHeight="40px"
                        letterSpacing="2px"
                    >
                        The future of DeFi re-imagined. Your next generation Decentralised Exchange
                    </Text>

                    <HStack spacing="16" mb={{ base: '6', lg: '10' }}>
                        <NextLink href="/pools" chakraProps={{ _hover: { opacity: '60%', transform: 'scale(1.05)'}}} 
                        // chakraProps={{ _hover: { textDecoration: 'none' } }}>
                        >
                            {/* <Button bgImage='./images/investbutton.png' width='193px'>
                                Invest
                            </Button> */}
                            <img src='./images/investbutton.png' width='193px' />
                        {/* dont love this because no hover effects but it works minimally  */}
                        </NextLink>
                        {/* <NextLink href="/swap" chakraProps={{ _hover: { textDecoration: 'none' } }}>
                            <Button width={{ base: '130px', lg: '160px' }} variant="secondary">
                                Swap
                            </Button>
                        </NextLink> */}
                        <NextLink href="/swap" chakraProps={{ _hover: { opacity: '60%', transform: 'scale(1.05)'}}}>
                            <img src="./images/swapbutton.png" width='200px' />
                        </NextLink>
                    </HStack>
                    {/*<Link color="beets.highlight" alignSelf="flex-start">
                        {"I'm new! Help me get started."}
                    </Link>*/}
                </Flex>
                {/* <Box mr="144">
                <img src='/images/glacierhero.png'
                    width="700px"
                    />
               </Box> */}
                {/* <Flex justify='end' padding='4' marginLeft='72' >
                    <Image src={placeholder}  height='440px'
                    objectFit="contain"
                    />
                </Flex> */}
            </Flex>
            {/* <Box display="flex" flex="1" position="relative">
               <Box position="absolute" left='150px' top="100px" width="400px">
                <img src="./images/glacierherobg.png" />
               </Box>
               <Box position="absolute" left='150px' top="0" width="600px">
                <img src="./images/glacierhero.png" />
               </Box>
            </Box> */}
            <Box flex="0" display={{ base: 'none', md: 'block' }} />
        </Flex>
    );
}
