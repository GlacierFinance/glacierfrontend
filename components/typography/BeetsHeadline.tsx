import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends BoxProps {
    children: ReactNode;
}

export function BeetsHeadline({ children, ...rest }: Props) {
    return (
        <Box fontSize={{ base: '2xl', xl: '3xl' }} fontWeight="bold" color="white" textTransform="uppercase" {...rest}>
            {children}
        </Box>
    );
}
