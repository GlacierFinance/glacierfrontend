import { TokenPriceLineChart } from '~/components/charts/TokenPriceLineChart';
import { useTradeChart } from '~/modules/trade/lib/useTradeChart';
import { Box, Flex, HStack, Link, Skeleton, Button } from '@chakra-ui/react';
import { useTradeData } from '~/modules/trade/lib/useTradeData';
import { tokenFormatAmount } from '~/lib/services/token/token-util';
import { BeetsBox } from '~/components/box/BeetsBox';

export function TradeChart() {
    const { setRange, range, data, loading, networkStatus } = useTradeChart();
    const { tokenOut, tokenIn } = useTradeData();

    const sevenDaySelected = range === 'SEVEN_DAY';
    const thirtyDaySelected = range === 'THIRTY_DAY';

    return (
        <Box backgroundImage='./images/subtledustcardboard.png'>
            {!loading && data && data.prices.length === 0 ? (
                <BeetsBox
                    height="150px"
                    borderColor="gray.200"
                    borderWidth={1}
                    borderStyle="dashed"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    We were unable to find pricing data for the selected pair
                </BeetsBox>
            ) : (loading && !data) || !tokenIn || !tokenOut ? (
                <Skeleton height="150px" />
            ) : (
                <Box height="150px">
                    <TokenPriceLineChart
                        prices={data?.prices || []}
                        label={``}
                        priceValueFormatter={(value) =>
                            `1 ${tokenIn?.symbol} = ${tokenFormatAmount(value)} ${tokenOut?.symbol}`
                        }
                    />
                </Box>
            )}
            <Flex mt="8">
                <Box flex={1} />
                <HStack>
                <Button
                    size="xs"
                    fontFamily="JetBrains"
                    bgColor="glacier.black.100"
                    borderRadius="none"
                    borderColor="glacier.silver.100"
                    textDecoration="none"
                    border="1px"
                    color="white"
                    p="4px"
                    // _active={{
                    //     backgroundImage:
                    //       "linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)",
                    //     color: "black",
                    //     borderColor:"glacier.silver.100", 
                    //   }}
                    _hover={{
                        backgroundImage:
                          "linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)",
                        color: "black",
                        borderColor:"glacier.silver.100", 
                      }}
                      onClick={() => {
                        if (!sevenDaySelected) {
                            setRange('SEVEN_DAY');
                        }
                    }}
                >
                    {/* <Link
                        // userSelect="none"
                        // color={!sevenDaySelected ? 'gray.200' : undefined}
                        // fontWeight="bold"
                    > */}
                        1 WEEK
                    {/* </Link> */}
                    </Button>
                    <Button
                    size="xs"
                    fontFamily="JetBrains"
                    bgColor="glacier.black.100"
                    borderRadius="none"
                    borderColor="glacier.silver.100"
                    color='white'
                    border="1px"
                    p="4px"
                    // _active={{
                    //     backgroundImage:
                    //       "linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)",
                    //     color: "black",
                    //     borderColor:"glacier.silver.100", 
                    //   }}
                    _hover={{
                        backgroundImage:
                          "linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)",
                        color: "black",
                        borderColor:"glacier.silver.100", 
                      }}
                      onClick={() => {
                        if (!thirtyDaySelected) {
                            setRange('THIRTY_DAY');
                        }
                    }}
                >
                     {/* <Link
                        userSelect="none"
                        color={!thirtyDaySelected ? 'gray.200' : undefined}
                        // textDecoration={thirtyDaySelected ? 'underline' : undefined}
                        fontWeight="bold"
                    > */}
                        1 MONTH
                    {/* </Link> */}
                </Button>
                   
                </HStack>
            </Flex>
        </Box>
    );
}
