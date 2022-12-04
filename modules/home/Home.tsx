import { Box, Grid, GridItem, Flex, useTheme } from '@chakra-ui/react';
import { HomeHero } from '~/modules/home/components/HomeHero';
import { HomePools } from '~/modules/home/components/HomePools';
import { HomeNews } from '~/modules/home/components/HomeNews';
// import { HomeWhyUs } from '~/modules/home/components/HomeWhyUs';
import { HomeBeetsInfo } from '~/modules/home/components/HomeBeetsInfo';
import { HomeLearn } from '~/modules/home/components/HomeLearn';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';
<<<<<<< HEAD
import image from '/Users/topg/glacierfrontend/public/images/HomeBg01.png'
=======
import bg from '../../public/images/HomeBg01.png'; 
>>>>>>> 522cc3a8a10a2f9a6fb1611d6d2827113f13e32e

export function Home() {
    const theme = useTheme();
    const { chainId } = useNetworkConfig();
    return (
        <Box>    
    <HomeHero />
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
                columnGap={{ base: '0', lg: '16' }}
                rowGap="12"
                mt={{ base: '12', lg: '16', xl: '20' }}
                borderBottomWidth={2}
                borderBottomColor="gray.100"
                pb="24"
            >
                <GridItem colSpan={2} maxW="100%">
                    <HomePools />
                </GridItem>
                <GridItem>
                    <HomeNews />
                </GridItem>
            </Grid>
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
                columnGap={{ base: '0', lg: '16' }}
                rowGap="12"
                mt="20"
                borderBottomWidth={2}
                borderBottomColor="gray.100"
                pb="24"
            >
                <GridItem>
                    {/* <HomeWhyUs /> */}
                </GridItem>
                <GridItem>
                    <HomeBeetsInfo />
                </GridItem>
            </Grid>
            <Box mt="20">
                <HomeLearn />
            </Box>
        </Box>
            
            );
}
