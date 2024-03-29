import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { useTradeData } from '~/modules/trade/lib/useTradeData';
import { useTradeChart } from '~/modules/trade/lib/useTradeChart';
import { PercentChangeBadge } from '~/components/badge/PercentChangeBadge';
import { InfoButton } from '~/components/info-button/InfoButton';

export function TradePageHeader() {
    const { tokenOut, tokenIn, currentRatio, reverseRatio } = useTradeData();
    const { startingRatio, range } = useTradeChart();
    const percentChange = startingRatio ? (reverseRatio - startingRatio) / startingRatio : null;

    return (
        <>
            <Flex>
                <Text fontSize="2xl" fontWeight="bold" color="white">
                    1
                    <Text as="span" fontSize="lg" fontWeight="normal" color="glacier.silver.200" fontFamily="JetBrains">
                        {' '}
                        {tokenIn?.symbol}
                        {' = '}
                    </Text>
                    {tokenFormatAmount(reverseRatio)}
                    <Text as="span" fontSize="lg" fontWeight="normal" color="glacier.silver.200" fontFamily="JetBrains">
                        {' '}
                        {tokenOut?.symbol}
                    </Text>
                </Text>
                <Box display="flex" alignItems="flex-end" mb="6px" ml="1">
                    <InfoButton infoText="Global average price" />
                </Box>
            </Flex>
            {percentChange !== null && (
                <HStack fontFamily="JetBrains">
                    <PercentChangeBadge percentChange={percentChange} />
                    <Text fontFamily="JetBrains" color="glacier.silver.200">in the past {range === 'SEVEN_DAY' ? 'week' : 'month'}</Text>
                </HStack>
            )}
        </>
    );
}
