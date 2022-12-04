import { GqlPoolApr } from '~/apollo/generated/graphql-codegen-generated';
import {
    Box,
    Button,
    Flex,
    HStack,
    PlacementWithLogical,
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger as OrigPopoverTrigger,
    Text,
    TextProps,
} from '@chakra-ui/react';
import StarsIcon from '~/components/apr-tooltip/StarsIcon';
import numeral from 'numeral';
import { AprText } from '~/components/apr-tooltip/AprText';
import { Info } from 'react-feather';

interface Props {
    data: GqlPoolApr;
    textProps?: TextProps;
    onlySparkles?: boolean;
    placement?: PlacementWithLogical;
    aprLabel?: boolean;
    sparklesSize?: 'sm' | 'md';
}

function AprTooltip({ data, textProps, onlySparkles, placement, aprLabel, sparklesSize }: Props) {
    // temp fix: https://github.com/chakra-ui/chakra-ui/issues/5896#issuecomment-1104085557
    const formatApr = (apr: string) => {
        if (parseFloat(apr) < 0.0000001) {
            return '0.00%';
        }

        return numeral(apr).format('0.00%');
    };

    return (
            <HStack align="center">
                {!onlySparkles && (
                    <Text {...textProps} >
                        {formatApr(data.total)}
                        {aprLabel ? ' APR' : ''}
                    </Text>
                )}
            </HStack>
    );
}

export default AprTooltip;
