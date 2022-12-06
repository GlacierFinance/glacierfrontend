import { Box, Flex, Grid, GridItem, HStack, Link, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import DegenBand from '~/assets/images/degen-band.png';
import FooterImageOp from '~/assets/images/footer-OP.png';
import DiscordIcon from '~/assets/icons/discordicon.png';
import TwitterIcon from '~/assets/icons/twittericon.png';
import YouTubeIcon from '~/assets/icons/youtubeicon.png';
import GithubIcon from '~/assets/icons/githubicon.png';
import TelegramIcon from '~/assets/icons/telegramicon.png';
import { FooterLink } from '~/modules/nav/FooterLink';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';
import { networkConfig } from '~/lib/config/network-config';
import GlacierLogo from 'public/images/glacierlogo.png';
import { SubNavBarStat } from './SubNavBarStat';
import { BeetsBox } from '~/components/box/BeetsBox';
import { useGetProtocolDataQuery } from '~/apollo/generated/graphql-codegen-generated';
// import { BeetsBalLogo } from '~/assets/logo/BeetsBalLogo';
// import { BeetsLogo } from '~/assets/logo/BeetsLogo';
   
export function Footer() {
    const networkConfig = useNetworkConfig();
    const { data, loading } = useGetProtocolDataQuery({ fetchPolicy: 'cache-first' });
    const protocolData = data?.protocolData;
    const beetsPrice = data?.beetsPrice;
    const { chainId } = useNetworkConfig();

    return (
        <Box width="full" px={{ base: '10', xl: '20' }} bgColor="transparent" backgroundImage="./images/gridbg-footer.png" >
            <Flex pt="20">
                <Box flex="1">
                    <Flex display="flex" justifyContent="space-between" alignItems="center">
                        <Flex display="flex" flexDirection="row" gap="8">
                            <Box width={{ base: "130px", md: "160px"}} >
                                <NextImage src={GlacierLogo} />
                            </Box>
                            <Flex display="flex" gap="2">
                            <BeetsBox display={{ base: 'none', lg: 'flex' }} alignItems="center">
                                <SubNavBarStat
                                    loading={loading && !protocolData}
                                    value={protocolData?.totalLiquidity || '0'}
                                    label="TVL"
                                    display={{ base: 'none', sm: 'flex' }}
                                    border="1px"
                                    style={{borderImage:'linear-gradient(180deg,#ECE3F3 0%, #ECE3F3 44.13%, #8F7D9D  50.9%, #F6ECFD 100%) 1' }}
                                    px="4"
                                    py="0.5"
                                    />
                            </BeetsBox>
                            <BeetsBox display={{ base: 'none', lg: 'flex' }} alignItems="center">
                                <SubNavBarStat
                                    loading={loading && !protocolData}
                                    value={protocolData?.totalLiquidity || '0'}
                                    label="TVL"
                                    display={{ base: 'none', sm: 'flex' }}
                                    border="1px"
                                    style={{borderImage:'linear-gradient(180deg,#ECE3F3 0%, #ECE3F3 44.13%, #8F7D9D  50.9%, #F6ECFD 100%) 1' }}
                                    px="4"
                                    py="0.5"
                                    />
                            </BeetsBox>
                            </Flex>
                        </Flex>
                    {/* <Box>{chainId === '10' ? <BeetsBalLogo /> : <BeetsLogo />}</Box> */}
                    <Flex display="flex" flexDirection="row" justifyContent="flex-end" gap={{ base: "5", md: "8"}} fontSize={{ base: "sm", md: "lg"}} alignItems="center">
                            <FooterLink href="/pools" linkType="internal">
                                Invest
                            </FooterLink>
                            <FooterLink href="/swap" linkType="internal">
                                Swap
                            </FooterLink>
                            <FooterLink href="https://v1.beets.fi/#/stake" linkType="internal">
                                Stake
                            </FooterLink>
                            <FooterLink href="https://v1.beets.fi/#/launch" linkType="internal">
                                Launch
                            </FooterLink>
                        </Flex>
                    </Flex>
                    <Flex display="flex" flex="1" justifyContent='space-between' alignItems="center" gap="8">
                    <HStack gap={{ base: "5", md: "8"}} mt="24" mb="20">
                        <Box>
                            <Link href="https://discord.gg/jedS4zGk28" target="_blank" _active={{ boxShadow: 'none' }}>
                                <NextImage src={DiscordIcon} />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                href="https://twitter.com/beethoven_x"
                                target="_blank"
                                _active={{ boxShadow: 'none' }}
                            >
                                <NextImage src={TwitterIcon} />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                href="https://telegram.com/"
                                target="_blank"
                                _active={{ boxShadow: 'none' }}
                            >
                                <NextImage src={TelegramIcon} />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                href="https://github.com/beethovenxfi"
                                target="_blank"
                                _active={{ boxShadow: 'none' }}
                            >
                                <NextImage src={GithubIcon} />
                            </Link>
                        </Box>
                        <Box>
                            <Link
                                href="https://youtube.com/"
                                target="_blank"
                                _active={{ boxShadow: 'none' }}
                            >
                                <NextImage src={YouTubeIcon} />
                            </Link>
                        </Box>
                    </HStack>
                    <Text display="flex" justifyContent="flex-end" fontSize={{ base: "sm", md: "lg"}} minW="180px">
                Copyright &copy; GLACIER 2022
                    </Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
