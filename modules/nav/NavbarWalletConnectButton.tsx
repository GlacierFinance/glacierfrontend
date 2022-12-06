import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box, Button, HStack, Skeleton, Spinner, Text, Tooltip, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import BeetsSmart from '~/assets/icons/beetx-smarts.svg';
import { useReactiveVar } from '@apollo/client';
import { txPendingVar } from '~/lib/util/useSubmitTransaction';
import { IconWallet } from '~/components/icons/IconWallet';
import { BarChart2 } from 'react-feather';
import { useUserData } from '~/lib/user/useUserData';
import { Image as ChakraImage } from '@chakra-ui/react';
import { numberFormatLargeUsdValue } from '~/lib/util/number-formats';
import { useEarlyLudwigNft } from '~/lib/global/useEarlyLudwigNft';
import { NextLink } from '~/components/link/NextLink';
import NextImage from 'next/image';
import glacierIcon from 'public/images/glaciericon.png'

export default function NavbarWalletConnectButton() {
    const txPending = useReactiveVar(txPendingVar);
    const { loading, portfolioValueUSD } = useUserData();
    const { data: earlyLudwig } = useEarlyLudwigNft();

    return (
        <ConnectButton.Custom>
            {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
                return (
                    <Box display="flex" justifyContent="flex-end">
                        {(() => {
                            if (!mounted || !account || !chain) {
                                return (
                                        <Button ml='4' borderRadius="none" px='0' backgroundColor="black" width={{ base: "80%", md: "full"}}
                                        _hover={{
                                            opacity: '100%',
                                            transform: 'scale(1.05)',
                                        }}
                                        _active={{
                                            transform: 'scale(1.05)'
                                        }}
                                        onClick={openConnectModal}>
                                            <img src="./images/walletbutton.png" />
                                        </Button>
                                    // <Button
                                    //     border="2"
                                    //     borderColor="#7d7f9a"
                                    //     color="white"
                                    //     ml="5"
                                    //     textTransform="uppercase"
                                        // _hover={{
                                        //     backgroundColor: 'black',
                                        //     transform: 'scale(1.1)',
                                        // }}
                                        // _active={{
                                        //     backgroundColor: 'black',
                                        // }}
                                        // onClick={openConnectModal}
                                        // type="button"
                                    // >
                                    //     <IconWallet stroke="black" boxSize="20px" />
                                    //     <Box ml="2">Connect Wallet</Box>
                                    // </Button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                    <Button
                                        variant="primary"
                                        backgroundColor="red.400"
                                        _hover={{ backgroundColor: 'red.600' }}
                                        onClick={openChainModal}
                                        type="button"
                                    >
                                        Wrong network
                                    </Button>
                                );
                            }

                            return (
                                <HStack spacing="0" position="relative">
                                    <HStack
                                        bgColor="#9AA4DA"
                                        pr="3"
                                        pl="2"
                                        spacing="1"
                                        height="40px"
                                        mr="-1"
                                        roundedTopLeft="md"
                                        roundedBottomLeft="md"
                                        display={{ base: 'none', lg: 'flex' }}
                                    >
                                        <BarChart2 size={18} />
                                        {loading ? (
                                            <Skeleton height="10px" width="41px" />
                                        ) : (
                                            <Box fontSize="sm" fontWeight="semibold">
                                                <Tooltip textColor="#9AA4DA" backgroundColor="black" label="Your portfolio value is cached to improve app performance. If you just made a deposit in may take up to a minute for the value to be reflected here.">
                                                    {numberFormatLargeUsdValue(portfolioValueUSD)}
                                                </Tooltip>
                                            </Box>
                                        )}
                                    </HStack>
                                    <Button
                                        backgroundColor="black"
                                        rounded="md"
                                        fontSize="md"
                                        onClick={openAccountModal}
                                        paddingX="none"
                                        padding="3px"
                                        color="gray.100"
                                        zIndex="100"
                                        position="relative"
                                        _hover={{
                                            backgroundColor: 'none',
                                            transform: 'scale(1.05)',
                                        }}
                                        _active={{
                                            backgroundColor: 'none',
                                        }}
                                        bg="beets.base.700"
                                    >
                                        <HStack width="full" height="full" spacing="1">
                                            <HStack
                                                justifyContent="center"
                                                alignItems="center"
                                                px="2"
                                                height="40px"
                                                rounded="10px"
                                                width="full"
                                            >
                                                {txPending ? (
                                                    <Spinner color="beets.green" />
                                                ) : glacierIcon ? (
                                                    <NextImage
                                                        src={glacierIcon}
                                                        width="24px"
                                                        height="24px"
                                                    />
                                                ) : (
                                                    <Image src={BeetsSmart} width="24" alt="your-profile" />
                                                )}
                                                <Text
                                                    display={{ base: 'none', sm: 'inline' }}
                                                    fontSize={{ base: 'xs', lg: 'normal' }}
                                                >
                                                    {account.displayName}
                                                </Text>
                                            </HStack>
                                        </HStack>
                                    </Button>
                                </HStack>
                            );
                        })()}
                    </Box>
                );
            }}
        </ConnectButton.Custom>
    );
}
