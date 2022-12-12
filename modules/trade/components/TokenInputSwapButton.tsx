import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import Image from 'next/image';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { ChevronsDown } from 'react-feather';
import { AnimatedBox } from '~/components/animation/chakra';
import chevy from '../../../public/images/chevronright.png';


type Props = {
    isLoading?: boolean;
    onSwap?: () => void;
};
export function TokenInputSwapButton({ isLoading, onSwap }: Props) {
    return (
        <Button
            justifyContent="center"
            backgroundColor="gray.600"
            alignItems="center"
            rounded="full"
            border="4px"
            padding="1"
            borderColor="gray.500"
            zIndex="2"
            role="group"
            _hover={{ borderColor: 'glacier.silver.200', cursor: 'pointer' }}
            _active={{ backgroundColor: 'gray.600' }}
            _focus={{ outline: 'none' }}
            onClick={onSwap}
        >
            <AnimatePresence>
                <Box
                    marginTop="1px"
                    color="gray.200"
                    css={{
                        transform: 'rotate(360deg)',
                        transition: 'transform linear .15s',
                    }}
                    _groupHover={{
                        color: 'glacier.silver.200',
                        cursor: 'pointer',
                        transform: 'rotate(180deg)',
                        transition: 'all linear .15s',
                    }}
                    _groupFocus={{ color: 'glacier.silver.200', cursor: 'pointer' }}
                >
                    {!isLoading && (
                        <AnimatedBox
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <ChevronsDown size={24} color="currentColor" />
                            {/* <Image width='120px' height='120px' src={chevy} /> */}

                            {/* to be replaced with SVG, or style the existent chevronsdown w/ colors */}
                        </AnimatedBox>
                    )}
                    {isLoading && (
                        <AnimatedBox
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Spinner color="glacier.pink.100" size="sm" marginBottom="1px" />
                        </AnimatedBox>
                    )}
                </Box>
            </AnimatePresence>
        </Button>
    );
}
