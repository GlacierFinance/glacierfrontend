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
                fontSize: '74px',
                fontWeight: 'semibold',
                textTransform: 'uppercase', 
                background: 'linear-gradient(to bottom, #F4F1F7 0%, #ECE3F3 25.13%, #AC3DB0 50.9%, #7054E0 58.19%, #C0AFF1 67.05%, #FFFFFF 81.11%, #F6ECFD 90.48%), linear-gradient(180deg, #DFCAD7 16.67%, #A16AB8 49.48%, #BACDFF 75.38%, #5D9988 100%)', 
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text', 
                border: '1.64px solid',
                borderImageSource: 'linear-gradient(180deg, #DFCAD7 16.67%, #A16AB8 49.48%, #BACDFF 75.38%, #5D9988 100%)', 
                }}>
                {title}
                </h1>
                
            {/* </Text> */}
            {/* <Box alignItems="flex-end" display={{ base: 'none', md: 'flex' }}>
                {image}
            </Box> */}
        </Flex>
    );
}
