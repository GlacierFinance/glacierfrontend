import { Box, BoxProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props extends BoxProps {
    children: ReactNode;
}

export function BeetsSubHeadline({ children, ...rest }: Props) {
    return (
        <Box fontSize={{ base: 'md', xl: 'lg' }} fontWeight="semibold" color="white" {...rest}>
            {children}
        </Box>
    );
}
