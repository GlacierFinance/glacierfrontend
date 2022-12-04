import { Box, Button, Flex, HStack, Image, Tooltip, Text } from '@chakra-ui/react';
import NavbarWalletConnectButton from './NavbarWalletConnectButton';
import { NavbarLink } from '~/modules/nav/NavbarLink';
import { useRouter } from 'next/router';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useUserAccount } from '~/lib/user/useUserAccount';
import { FadeInOutBox } from '~/components/animation/FadeInOutBox';
import { NavbarPendingRewards } from '~/modules/nav/NavbarPendingRewards';
import { BeetsBalLogo } from '~/assets/logo/BeetsBalLogo';
import { NextLink } from '~/components/link/NextLink';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';
import { networkConfig } from '~/lib/config/network-config';
import { NetworkSelectorPopover } from '~/modules/nav/NetworkSelectorPopover';
import { Badge } from '@chakra-ui/layout';
<<<<<<< HEAD
import GlacierLogo from 'public/images/glacierlogo.png';
import NextImage from 'next/image';
import { ChevronDown } from 'react-feather';

=======
import { BeetsLogo } from '~/assets/logo/BeetsLogo';
import GlacierLogo from 'public/images/glacierlogo.png';
import NextImage from 'next/image';
import { ChevronDown } from 'react-feather';
>>>>>>> 522cc3a8a10a2f9a6fb1611d6d2827113f13e32e

interface Props {
    scrollY: MotionValue<number>;
}

export function Navbar({ scrollY }: Props) {
    const { chainId } = useNetworkConfig();
    const router = useRouter();
    const opacity = useTransform(scrollY, [0, 32], [0, 1]);
    const { isConnected } = useUserAccount();

    return (
        <>
            <Box
                width="full"
                position="sticky"
                top="0"
                zIndex="3"
                height="54px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Flex px={{ base: '4', xl: '8' }} py="0" alignItems="center">
                    <motion.div style={{ opacity, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                        <Box width="full" height="full" bg="beets.base.800" shadow="lg" />
                    </motion.div>
<<<<<<< HEAD
                    <Flex alignItems="center" mr="6" zIndex="2" cursor="pointer" flex='1'>
=======
                    <Flex alignItems="center" mr="6" zIndex="2" cursor="pointer" flex="1">
>>>>>>> 522cc3a8a10a2f9a6fb1611d6d2827113f13e32e
                        <NextLink href="/" chakraProps={{ _focus: { boxShadow: 'none' } }}>
                            {chainId === '10' ? (
                                <BeetsBalLogo width="132px" />
                            ) : (
                                <Box ml="10">
                                    <NextImage src={GlacierLogo} width="150px" />
                                </Box>
                            )}
                        </NextLink>
                        

                    </Flex>
                    <Box display="flex" zIndex="2" justifyContent="flex-end" textTransform="uppercase">
                    <NetworkSelectorPopover>
                    <HStack spacing="1.5" mr={10} cursor="pointer">
                        <Image src={networkConfig.eth.iconUrl} width="20px" height="20px" />
                        <Text fontWeight="bold">{networkConfig.networkShortName}</Text>
                        <Box>
                            <ChevronDown size={18} />
                        </Box>
                    </HStack>
                </NetworkSelectorPopover>
                        <Flex alignItems="center" display={{ base: 'none', md: 'flex' }} color='white' gap="3">
                            <NavbarLink
                                href={'/pools'}
                                selected={router.asPath.startsWith('/pool')}
                                text="Invest"
                                mr="5"
                            />
                            <NavbarLink href={'/swap'} selected={router.asPath === '/swap'} text="Swap" mr="5" />
                            {networkConfig.stakeUrl && <NavbarLink href={networkConfig.stakeUrl} text="Stake" mr={5} />}
                            {networkConfig.launchUrl && (
                                <NavbarLink href={networkConfig.launchUrl} text="Launch" mr={5} />
                            )}

                            {/*<NavbarAdditionalLinksMenu />*/}
                        </Flex>
                    </Box>
                    <FadeInOutBox mr="3" isVisible={isConnected}>
                        <HStack spacing="3">
                            <NetworkSelectorPopover>
                                <Button
                                    bgColor="white"
                                    width="50px"
                                    height="40px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexDirection="column"
                                    _hover={{ transform: 'scale(1.1)' }}
                                    px="0"
                                >
                                    <Image width="24px" height="24px" src={networkConfig.eth.iconUrl} />
                                </Button>
                            </NetworkSelectorPopover>
                            <NavbarPendingRewards />
                            {/*<NavbarAlerts />*/}
                            {/*<NavbarPortfolioDrawer />*/}
                        </HStack>
                    </FadeInOutBox>
                    <NavbarWalletConnectButton />
                </Flex>
            </Box>
        </>
    );
}
