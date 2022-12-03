import { Box, BoxProps, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface Props extends Omit<BoxProps, 'children'> {
    selected?: boolean;
    href: string;
    text: string;
}

export function NavbarLink({ href, selected, text, ...rest }: Props) {
    return (
        <Box {...rest}>
            <Link href={href}>
                <Text
                    fontSize="md"
                    color={selected ? 'beets.highlight' : 'white'}
                    cursor="pointer"
                    _hover={{ color: 'beets.highlight' }}
                >
                    {text}
                </Text>
            </Link>
        </Box>
    );
}
