import { Box, HStack, Image, Skeleton, Text, Flex } from '@chakra-ui/react';
import { useGetProtocolDataQuery } from '~/apollo/generated/graphql-codegen-generated';
import { ChevronDown } from 'react-feather';
import { BeetsBox } from '~/components/box/BeetsBox';
import TokenAvatar from '~/components/token/TokenAvatar';
import numeral from 'numeral';
import { SubNavBarStat } from '~/modules/nav/SubNavBarStat';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';
import { NetworkSelectorPopover } from '~/modules/nav/NetworkSelectorPopover';

export function SubNavBar() {
    const networkConfig = useNetworkConfig();
    const { data, loading } = useGetProtocolDataQuery({ fetchPolicy: 'cache-first' });
    const protocolData = data?.protocolData;
    const beetsPrice = data?.beetsPrice;

    return (
        <HStack px={{ base: '4', xl: '8' }} justifyContent="flex-end" mt="5">
            <Flex display="flex" gap="0">
            <BeetsBox px="3" py="1" rounded="none" border="1px"                                     style={{borderImage:'linear-gradient(180deg,#ECE3F3 0%, #ECE3F3 44.13%, #8F7D9D  50.9%, #F6ECFD 100%) 1' }} display="flex">
                <SubNavBarStat
                    loading={loading && !protocolData}
                    value={protocolData?.totalLiquidity || '0'}
                    label="TVL"
                    display={{ base: 'none', sm: 'flex' }}
                />
                </BeetsBox>
            <BeetsBox px="3" py="1" rounded="none" border="1px"                                     style={{borderImage:'linear-gradient(180deg,#ECE3F3 0%, #ECE3F3 44.13%, #8F7D9D  50.9%, #F6ECFD 100%) 1' }} display="flex">
                <SubNavBarStat
                    loading={loading && !protocolData}
                    value={protocolData?.swapVolume24h || '0'}
                    label="Volume (24h)"
                    display={{ base: 'none', lg: 'flex' }}
                />
                </BeetsBox>
            <BeetsBox px="3" py="1" rounded="none" border="1px"                                     style={{borderImage:'linear-gradient(180deg,#ECE3F3 0%, #ECE3F3 44.13%, #8F7D9D  50.9%, #F6ECFD 100%) 1' }}  display="flex">
                <SubNavBarStat
                    loading={loading && !protocolData}
                    value={protocolData?.swapFee24h || '0'}
                    label="Fees (24h)"
                    display={{ base: 'none', lg: 'flex' }}
                />
                </BeetsBox>
                <HStack>
                <BeetsBox px="3" py="1" rounded="none" border="1px"                                     style={{borderImage:'linear-gradient(180deg,#ECE3F3 0%, #ECE3F3 44.13%, #8F7D9D  50.9%, #F6ECFD 100%) 1' }} display="flex">
                    <TokenAvatar address={networkConfig.beets.address} style={{ width: '20px', height: '20px' }} />
                    {loading && !beetsPrice ? (
                        <Skeleton height="16px" width="54px" />
                    ) : (
                        <Text fontWeight="semibold" fontSize={{ base: 'xs', lg: 'sm' }}>
                            {numeral(beetsPrice).format('$0.00[00]')}
                        </Text>
                    )}
                    </BeetsBox>
                </HStack>
            </Flex>
        </HStack>
    );
}
