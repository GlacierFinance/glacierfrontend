import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { TradeInterfaceContainer } from '~/modules/trade/components/TradeInterfaceContainer';
import { TradePageHeader } from '~/modules/trade/components/TradePageHeader';
import { TradeChart } from '~/modules/trade/components/TradeChart';
import { useGetTokens } from '~/lib/global/useToken';
import { useTradeData } from '~/modules/trade/lib/useTradeData';
import { useTrade } from '~/modules/trade/lib/useTrade';
import { BatchSwapSorRoute } from '~/components/batch-swap/BatchSwapSorRoute';
import { BatchSwapList } from '~/components/batch-swap/BatchSwapList';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

export function TradeContainer() {
    const { priceFor } = useGetTokens();
    const { tokenInData, tokenOutData, tokenInDynamicData, tokenOutDynamicData, tokenOut, tokenIn } = useTradeData();
    const { swapInfo, loadingSwaps, isNativeAssetUnwrap, isNativeAssetWrap } = useTrade();
    const showRouting = !isNativeAssetUnwrap && !isNativeAssetWrap && swapInfo && swapInfo.swaps.length > 0;
    const hasNoRoute = !loadingSwaps && (!swapInfo || swapInfo.swaps.length === 0);

    return (
        <Box
            // backgroundImage='./images/bg.png'
        >
            <Grid
                templateAreas={{
                    base: `"swap"
                       "chart-route"`,
                    xl: `"swap chart-route"`,
                }}
                templateColumns={{ base: '1fr', xl: '412px 1fr' }}
                gap="10"
                pb="20"
                //pt="8"
            >
                <GridItem area="swap" backgroundColor="">
                    <TradeInterfaceContainer />
                </GridItem>
                <GridItem area="chart-route">
                    <TradePageHeader />

                    <Box mt="2">
                        <TradeChart />
                    </Box>

                    <Box display={{ base: 'none', md: 'block' }}>
                        {/*
                    // @ts-ignore */}
                        <AnimateSharedLayout>
                            <AnimatePresence>
                                {showRouting && (
                                    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                        <Text fontSize="xl" fontWeight="bold" lineHeight="1.2rem" mt="48" textTransform="uppercase">
                                            Smart order routing
                                        </Text>
                                        <Text mb="16" mt="8" color="glacier.silver.200" fontFamily="JetBrains" >
                                            The SOR searches all Glacier Finance pools to ensure you receive the best
                                            available price.
                                        </Text>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {showRouting && <BatchSwapSorRoute swapInfo={swapInfo} />}

                            <motion.div layout >
                                <Text fontSize="xl" fontWeight="bold" lineHeight="1.2rem" mt="14" textTransform="uppercase">
                                    Latest swaps
                                </Text>
                                <Text mb="12" mt="4" color="glacier.silver.200" fontFamily="JetBrains">
                                    The latest swaps for your selected token pair.
                                </Text>
                            </motion.div>
                            {tokenIn && tokenOut && (
                                <BatchSwapList tokenIn={tokenIn.address} tokenOut={tokenOut.address} />
                            )}
                        </AnimateSharedLayout>
                    </Box>

                    {/*<Flex mt="12" mb="8">
                        {tokenIn ? (
                            <TradeTokenDataCard
                                token={tokenIn}
                                price={priceFor(tokenIn.address)}
                                data={tokenInData}
                                dynamicData={tokenInDynamicData}
                                flex={1}
                                mr="4"
                            />
                        ) : null}
                        {tokenOut ? (
                            <TradeTokenDataCard
                                token={tokenOut}
                                price={priceFor(tokenOut.address)}
                                data={tokenOutData}
                                dynamicData={tokenOutDynamicData}
                                flex={1}
                            />
                        ) : null}
                    </Flex>
                    <Box height="2xs" />*/}
                </GridItem>
            </Grid>
        </Box>
    );
}
