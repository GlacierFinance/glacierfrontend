import { Box, BoxProps, Button, Flex, Text } from '@chakra-ui/react';
import { BeetsHeadline } from '~/components/typography/BeetsHeadline';
import NextImage from 'next/image';
import BeetsTokenInfoImage from '~/assets/images/beets-token-info.png';
import BeetsTokenInfoOpImage from '~/assets/images/beets-token-info-OP.png';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';

export function HomeBeetsInfo(props: BoxProps) {
    const { chainId } = useNetworkConfig();

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="relative">
           <Box position="absolute" left="20px" top="-60px">
                <img src="./images/governance.png" width="600" />
           </Box>
           <Box position="absolute" left="420px" top="-10px">
                <img src="./images/redefined.png" width="400" />
           </Box>
            <Box mb="10" mt="32" justifyContent="center" textAlign="center" minW="800px" color="#9AA4DA" letterSpacing="1px">
                Bringing power back to the people: The BEETs token grants users the ability to influence the evolution
                of the protocol through decentralized governance; make sure your voice is heard and have your say in
                decisions that shape the future of Beethoven X.
            </Box>
            <Button as="a" href="https://docs.beets.fi/beets/tokenomics" target="_blank" borderRadius="none" mb="-6" backgroundColor="transparent"     _hover={{
                                            background: "transparent",
                                            transform: 'scale(1.05)',
                                            opacity: "60%"
                                        }}
                                        _active={{
                                            transform: 'scale(1.05)'
                                        }}>
                <img src="./images/beetsbutton.png" />
            </Button>
        </Box>
    );
}
