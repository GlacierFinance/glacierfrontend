import { Box, Text } from '@chakra-ui/react';

export function PoolWithdrawStablePoolDescription() {
    return (
        <>
            <Box fontFamily="JetBrains" fontWeight='300' color='white' fontSize="14">
               <Text>
                {/* Due to the unique design of stable pools, you can withdraw into a single token without encountering
                significant price impact. */}
                Withdrawing proportionally from this pool ensures you will not be subject to the potential fees caused by price impact. 
               </Text>
            </Box>
            <br />
            <Box fontFamily="JetBrains" fontWeight='300' color='white' fontSize="14">
               <Text>
               {/* Withdraws that move the token balances closer to equal ratios will receive a small bonus, while
                withdraws that move the ratios further apart will incur a small penalty. */}
                Alternatively, you can withdraw a single asset. This is similar to swapping all other assets for the selected asset, and is therefore subject to the fees associated with price impact.
               </Text>
            </Box>
            <br />
            <Box fontFamily="JetBrains" fontWeight='300' color='white' fontSize="14" >
                <Text>
                When withdrawing from any liquidity pool, your BPT tokens are exchanged for the underlying pool assets.
                </Text>
            </Box>
        </>
    );
}
