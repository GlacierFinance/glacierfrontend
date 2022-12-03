import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {}

export function BeetsBox({ children, ...rest }: Props) {
    return (
        <Box bgColor="transparent" rounded="md" {...rest}>
            {children}
        </Box>
    );
}
