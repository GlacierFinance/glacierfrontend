import { Box, Text } from '@chakra-ui/react';

export function PoolWithdrawStablePoolDescription() {
    return (
        <>
            <Box fontFamily="JetBrains" fontWeight='300' color='glacier.silver.200' fontSize="14">
               <Text>
                Due to the unique design of stable pools, you can withdraw into a single token without encountering
                significant price impact.
               </Text>
            </Box>
            <br />
            <Box fontFamily="JetBrains" fontWeight='300' color='glacier.silver.200' fontSize="14">
               <Text>
               Withdraws that move the token balances closer to equal ratios will receive a small bonus, while
                withdraws that move the ratios further apart will incur a small penalty.
               </Text>
            </Box>
            <br />
            <Box fontFamily="JetBrains" fontWeight='300' color='glacier.silver.200' fontSize="14" >
                <Text>
                When withdrawing from any liquidity pool, your BPT tokens are exchanged for the underlying pool assets.
                </Text>
            </Box>
        </>
    );
}
