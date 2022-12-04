import { Box, Link } from '@chakra-ui/react';

interface Props {
    title: string;
    description: string;
    url: string;
    last?: boolean;
}

export function HomeLearnItem({ title, description, url, last }: Props) {
    return (
        <Box mb="6" pb="6">
            <Box>
                <Link fontSize="sm" fontWeight="semibold" href={url} target="_blank" color="#A974FF">
                    {title}
                </Link>
                <Box mt="4" fontSize="md" color="#9AA4DA" lineHeight="8" letterSpacing="1px">{description}</Box>
            </Box>
        </Box>
    );
}
