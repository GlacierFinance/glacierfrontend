import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { IconDiscord } from '~/components/icons/IconDiscord';
import { capitalize } from 'lodash';
import { IconTwitter } from '~/components/icons/IconTwitter';
import { IconMedium } from '~/components/icons/IconMedium';
import { GqlContentNewsItem } from '~/apollo/generated/graphql-codegen-generated';
import { formatDistanceToNow } from 'date-fns';

interface Props {
    item: GqlContentNewsItem;
}

export function HomeNewsCard({ item }: Props) {
    const { image, source, text, timestamp, url, discussionUrl } = item;

    return (
        <Box bgColor="whiteAlpha.100" borderRadius="md" p="4">
            {image && <Image width="full" src={image} borderRadius="md" />}
            <Flex mt="4" mb="6" alignItems="center">
                <Box color="glacier.silver.300" flex="1">
                    {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}{' '}
                    <Link color="glacier.silver.300"  href={url} target="_blank">
                        via <u>{capitalize(source)}</u>
                    </Link>
                </Box>
                {source === 'twitter' && <IconTwitter />}
                {source === 'discord' && <IconDiscord />}
                {source === 'medium' && <IconMedium />}
            </Flex>
            <Box fontFamily="JetBrains" whiteSpace="pre-line">{text}</Box>
            {discussionUrl && (
                <Box mt="2">
                    <Link href={discussionUrl} target="_blank">
                        Join the discussion
                    </Link>
                </Box>
            )}
        </Box>
    );
}
