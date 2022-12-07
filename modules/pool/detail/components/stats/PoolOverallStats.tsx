import { Badge, Box, Divider, HStack, Text, Flex } from '@chakra-ui/layout';
import numeral from 'numeral';
import AprTooltip from '~/components/apr-tooltip/AprTooltip';
import { PercentChangeBadge } from '~/components/badge/PercentChangeBadge';
import { numberFormatUSDValue } from '~/lib/util/number-formats';
import { usePool } from '~/modules/pool/lib/usePool';
import TokenAvatar from '~/components/token/TokenAvatar';
import { Skeleton, Tooltip } from '@chakra-ui/react';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { networkConfig } from '~/lib/config/network-config';
import {
    useGetBlocksPerDayQuery,
    useGetPoolBptPriceChartDataQuery,
} from '~/apollo/generated/graphql-codegen-generated';
import { useGetTokens } from '~/lib/global/useToken';
import { sumBy } from 'lodash';
import { InfoButton } from '~/components/info-button/InfoButton';

export default function PoolOverallStats() {
    const { pool } = usePool();
    const { priceFor } = useGetTokens();
    const { data: blocksData } = useGetBlocksPerDayQuery({ fetchPolicy: 'cache-first' });
    const data = pool.dynamicData;
    const volumeYesterday = parseFloat(data.volume48h) - parseFloat(data.volume24h);
    const volumePercentChange = (parseFloat(data.volume24h) - volumeYesterday) / volumeYesterday;
    const tvlPercentChange =
        (parseFloat(data.totalLiquidity) - parseFloat(data.totalLiquidity24hAgo)) /
        parseFloat(data.totalLiquidity24hAgo);

    const sharePrice = parseFloat(pool.dynamicData.totalLiquidity) / parseFloat(pool.dynamicData.totalShares);
    const totalShares24hAgo = parseFloat(pool.dynamicData.totalShares24hAgo);
    const sharePrice24hAgo =
        totalShares24hAgo > 0 ? parseFloat(pool.dynamicData.totalLiquidity24hAgo) / totalShares24hAgo : 0;
    const sharePricePercentChange = (sharePrice - sharePrice24hAgo) / sharePrice24hAgo;
    const beetsPerDay = parseFloat(pool.staking?.farm?.beetsPerBlock || '0') * (blocksData?.blocksPerDay || 0);

    const incentivesDailyValue =
        beetsPerDay * priceFor(networkConfig.beets.address) +
        sumBy(
            pool.staking?.farm?.rewarders || [],
            (rewarder) => priceFor(rewarder.tokenAddress) * parseFloat(rewarder.rewardPerSecond) * 86400,
        );

    return (
        <Flex width="full" flexDirection="column" alignItems="flex-start" px="2">
            <Flex flexDirection="column" alignItems="flex-start">
                <Text lineHeight="1rem" fontWeight="semibold" fontSize="sm" color="glacier.silver.200" fontFamily="JetBrains">
                    Pool APR
                </Text>
                <HStack>
                    <Box textColor="white" fontSize="42">{numeral(data.apr.total).format('0.00%')}</Box>
                    <AprTooltip onlySparkles data={data.apr} />
                </HStack>
            </Flex>
            <Divider />
            <Flex mt="5" flexDirection="column" width="full">
                <Text lineHeight="1rem" fontWeight="semibold" fontSize="sm" color="glacier.silver.200" fontFamily="JetBrains">
                    BPT price
                </Text>
                <Flex display="flex" flexDirection="row" flex="1" justifyContent='space-between' alignItems="center">                
                <Text color="white" fontSize="1.75rem">
                    {numberFormatUSDValue(sharePrice)}
                </Text>
                <Box display="flex" justifyContent="flex-end">
                    <PercentChangeBadge percentChange={sharePricePercentChange} />
                </Box>
               </Flex>
            </Flex>
            <Flex mt="5" flexDirection="column" width="full">
                <Text lineHeight="1rem" fontWeight="semibold" fontSize="sm" color="glacier.silver.200" fontFamily="JetBrains">
                    TVL
                </Text>
                <Flex display="flex" flexDirection="row" flex="1" justifyContent='space-between' alignItems="center">                
                <Text color="white" fontSize="1.75rem">
                    {numberFormatUSDValue(sharePrice)}
                </Text>
                <Box display="flex" justifyContent="flex-end">
                    <PercentChangeBadge percentChange={sharePricePercentChange} />
                </Box>
               </Flex>
            </Flex>
            <Flex mt="5" flexDirection="column" width="full">                
            <Text lineHeight="1rem" fontWeight="semibold" fontSize="sm" color="glacier.silver.200" fontFamily="JetBrains">
                    24h Volume
                </Text>
                <Flex display="flex" flexDirection="row" flex="1" justifyContent='space-between' alignItems="center">                
                <Text color="white" fontSize="1.75rem">
                    {numberFormatUSDValue(sharePrice)}
                </Text>
                <Box display="flex" justifyContent="flex-end">
                    <PercentChangeBadge percentChange={sharePricePercentChange} />
                </Box>
               </Flex>
            </Flex>
            <Flex mt="5" flexDirection="column" width="full">                
            <Text lineHeight="1rem" fontWeight="semibold" fontSize="sm" color="glacier.silver.200" fontFamily="JetBrains">
                    24h Fees
                </Text>
                <Text color="white" fontSize="1.75rem">
                    {numeral(data.fees24h).format('$0,0.00a')}
                </Text>
            </Flex>
            {pool.staking?.farm && (
                <Flex mt="5" flexDirection="column" width="full">                    <InfoButton
                        labelProps={{
                            lineHeight: '1rem',
                            fontWeight: 'semibold',
                            fontSize: 'sm',
                            textColor: "glacier.silver.200",
                            fontFamily: "JetBrains",
                        }}
                        label="Liquidity incentives"
                        infoText={`Liquidity incentives are additional incentives available for this pool when you stake your BPT in the ${networkConfig.farmTypeName}. The daily value is an approximation based on current token prices and emissions.`}
                    />
                    <Text color="white" fontSize="1.75rem">
                        ~{numeral(incentivesDailyValue).format('$0,0.00a')}
                        <Text as="span" fontSize="md">
                            {' '}
                            / day
                        </Text>
                    </Text>
                    <Box>
                        {beetsPerDay > 0 && (
                            <HStack spacing="1" mb="0.5">
                                <TokenAvatar height="20px" width="20px" address={networkConfig.beets.address} />
                                <Tooltip
                                    label={`BEETS emissions are calculated per block, so daily emissions are an estimate based on an average block time over last 5,000 blocks. Avg block time: ${blocksData?.avgBlockTime}s.`}
                                >
                                    <Text fontSize="1rem" lineHeight="1rem">
                                        {numeral(beetsPerDay).format('0,0')} / day
                                    </Text>
                                </Tooltip>
                            </HStack>
                        )}
                        {pool.staking.farm.rewarders?.map((rewarder) => (
                            <HStack spacing="1" mb="0.5" key={rewarder.id}>
                                <TokenAvatar height="20px" width="20px" address={rewarder.tokenAddress} />
                                <Text fontSize="1rem" lineHeight="1rem">
                                    {numeral(parseFloat(rewarder.rewardPerSecond) * 86400).format('0,0')} / day
                                </Text>
                            </HStack>
                        ))}
                    </Box>
                </Flex>
            )}
        </Flex>
    );
}
