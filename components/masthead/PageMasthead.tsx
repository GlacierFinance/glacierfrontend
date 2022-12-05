import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
    title: string;
    image: ReactNode;
}

export function PageMasthead({ title, image }: Props) {
    return (
        <Flex
            // borderBottomWidth={5}
            // borderBottomColor="beets.base.500"
            mb={{ base: '6', lg: '8' }}
            alignItems="flex-end"
            >
            {/* <Text fontSize="28px" fontWeight="semibold" as="h1" 
            flex="1" mb="2" 
            textTransform="uppercase"
            > */}
             <h1 style={{
                fontSize: '28px',
                fontWeight: 'semibold',
                textTransform: 'uppercase', 
                background: 'linear-gradient(to right, blue, red)',
                textShadow: '0px 4.27635px 6.90795px #000000', 
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text'
                }}>
                {title}
                </h1>
            {/* </Text> */}
            <Box alignItems="flex-end" display={{ base: 'none', md: 'flex' }}>
                {image}
            </Box>
        </Flex>
    );
}
