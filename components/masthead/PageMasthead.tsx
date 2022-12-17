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
            mb={{ base: '6', lg: '12' }}
            paddingX={{ base:'2', lg:'2' }}
            alignItems="flex-end"
            >
            {/* <Text fontSize="28px" fontWeight="semibold" as="h1" 
            flex="1" mb="2" 
            textTransform="uppercase"
            > */}
           
      <Box        >
        
    </Box>
        <Text style={{
                fontSize:'72px', 
                fontWeight: 'semibold',
                textTransform: 'uppercase', 
                backgroundImage:
                'linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #000000 44.14%, #AC3DB0 50.9%, #7054E0 58.19%, #C0AFF1 67.05%, #FFFFFF 81.11%, #F6ECFD 90.48%), linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 50.9%, #F6ECFD 100%), linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 50.9%, #F6ECFD 100%)',                
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text', 
                }}>
                {title}
                </Text>
                
            {/* </Text> */}
            {/* <Box alignItems="flex-end" display={{ base: 'none', md: 'flex' }}>
                {image}
            </Box> */}
        </Flex>
    );
}
