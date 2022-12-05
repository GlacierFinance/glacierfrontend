import { Box, BoxProps, Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import AprTooltip from '~/components/apr-tooltip/AprTooltip';
import TokenAvatarSet from '~/components/token/TokenAvatarSet';
import { GqlPoolCardDataFragment } from '~/apollo/generated/graphql-codegen-generated';
import numeral from 'numeral';
import { NextLinkOverlay } from '~/components/link/NextLink';

interface Props extends BoxProps {
    pool: GqlPoolCardDataFragment;
}

export function PoolCard({ pool, ...rest }: Props) {
    const dailyApr = parseFloat(pool.dynamicData.apr.total) / 365;

    return (
        <LinkBox as="article" flex="1" {...rest} >
            <Box position="relative" width="full"
                border="1px" mb="1" 
                style={{borderImage:'linear-gradient(180deg,#8F7D9D 0%, #ECE3F3 44.13%, #ECE3F3  50.9%, #F6ECFD 100%) 1' }} bgColor="transparent" height="216px" borderRadius="none" p="4" flexDirection="column">
                    <Box position="absolute" right="-0.5" top='-1' >                    
                        <img src="./images/gradientbar.png" />
                    </Box>
                <Box fontSize="lg" pb="6" flex="1">
                    <NextLinkOverlay href={`pool/${pool.id}`}>
                        <Text noOfLines={2}>{pool.name}</Text>
                    </NextLinkOverlay>
                </Box>
                <Box position="absolute" bottom="2">
                <TokenAvatarSet
                    tokenData={pool.displayTokens.map((token) => ({
                        address: token.address,
                        ...(token.weight && { weight: token.weight }),
                    }))}
                    width={140}
                    imageSize={42}
                    renderPopover={false}
                />
                <Box flex="1" pt="6">
                    <AprTooltip
                        textProps={{ fontSize: 'xl', fontWeight: 'normal', mr: '0', lineHeight: '26px', color: '#FF00D6' }}
                        data={pool.dynamicData.apr}
                        placement="left"
                    />
                    <Text color="#9AA4DA" fontSize="sm">{numeral(dailyApr).format('0.00[0]%')} Daily</Text>
                </Box>
                </Box>
            </Box>
        </LinkBox>
    );
}
