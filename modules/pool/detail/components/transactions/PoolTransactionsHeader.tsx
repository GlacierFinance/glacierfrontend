import { Text } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/react';

export default function PoolTransactionHeader() {
    return (
        <Grid
            px="4"
            py={{ base: '4', xl: '2' }}
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            alignItems="center"
            background="glacier.black.200"
            borderBottom="2px"
            borderColor="beets.base.500"
            mb={{ base: '4', lg: '0' }}
            templateColumns={'200px 1fr 200px 200px'}
            gap="0"
            display={{ base: 'none', xl: 'grid' }}
        >
            <GridItem>
                <Text fontSize="md" fontWeight="semibold" color="glacier.silver.200">
                    Action
                </Text>
            </GridItem>
            <GridItem>
                <Text fontSize="md" fontWeight="semibold" color="glacier.silver.200">
                    Details
                </Text>
            </GridItem>
            <GridItem>
                <Text fontSize="md" fontWeight="semibold" color="glacier.silver.200">
                    Value
                </Text>
            </GridItem>
            <GridItem>
                <Text
                    fontSize="md"
                    fontWeight="semibold"
                    color="glacier.silver.200"
                    textAlign={{ base: 'left', lg: 'right' }}
                    mr="6"
                >
                    Time
                </Text>
            </GridItem>
        </Grid>
    );
}
