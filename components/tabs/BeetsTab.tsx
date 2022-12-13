import { Button, TabProps, HStack, Flex, Tab, Text, useTab, useMultiStyleConfig, Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { forwardRef } from 'react';
import { Eye } from 'react-feather';
import { AnimatedBox } from '~/components/animation/chakra';

const BeetsTab = forwardRef((props: { children: any } & TabProps, ref: any) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps['aria-selected'];

    return (
        <Flex gap="0" >
        <Button
            fontSize="sm"
            marginX={0}
            border="1px"
            borderColor="white"
            textTransform="uppercase"
            rounded="1px"
            color={isSelected ? 'glacier.black.100' : 'white'}
            bg={isSelected ? 'linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)' : 'glacier.black.100'}
            _hover={{ bgGradient: 'linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)', color: 'glacier.black.100', bgOpacity: '10' }}
            _focus={{ outline: 'none !important' }}
            height="fit-content"
            paddingY="3"
            paddingX="4"
            {...tabProps}
            {...props}
        >
            {/* <HStack spacing={0}>
                <Box>{tabProps.children}</Box>
                {isSelected && <Eye size={16} />} 
            </HStack> */}
        </Button>
        </Flex>
    );
});

BeetsTab.displayName = 'BeetsTab';
export default BeetsTab;
