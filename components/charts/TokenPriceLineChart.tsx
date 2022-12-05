import { Box } from '@chakra-ui/layout';
import { EChartsOption, graphic } from 'echarts';
import ReactECharts from 'echarts-for-react';
import { useMemo } from 'react';
import { GqlTokenPriceChartDataItem } from '~/apollo/generated/graphql-codegen-generated';
import { useTheme } from '@chakra-ui/react';
import { format } from 'date-fns';

interface Props {
    label: string;
    prices: GqlTokenPriceChartDataItem[];
    priceValueFormatter: (value: number) => string;
}

export function TokenPriceLineChart({ label, prices, priceValueFormatter }: Props) {
    const { colors } = useTheme();
    const max = Math.max(...prices.map((price) => parseFloat(price.price))) * 1.01;

    const option = useMemo<EChartsOption>(
        () => ({
            tooltip: {
                trigger: 'axis',
                type: 'shadow',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderRadius: 8,
                textStyle: {
                    color: 'white',
                },
                padding: 16,
                axisPointer: {
                    animation: false,
                    type: 'cross',
                    lineStyle: {
                        color: '#F8EEFF',
                        width: 1,
                        opacity: 1,
                    },
                },
            },
            xAxis: {
                show: false,
                type: 'time',
                axisLine: { lineStyle: { color: '#8392A5' } },
                offset: 0,
                axisLabel: {
                    fontSize: 14,
                    formatter: (value: number) => format(value * 1000, 'd. MMM HH:mm'),
                },
                axisPointer: {
                    type: 'line',
                    label: {
                        formatter: (params) => {
                            return format(new Date(params.value), 'd. MMM HH:mm');
                        },
                    },
                },
            },
            yAxis: {
                show: false,
                scale: true,
                //axisLine: { lineStyle: { color: '#8392A5' } },
                splitLine: { show: false },
                offset: 0,
                max,
            },
            grid: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                containLabel: false,
            },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    name: label,
                    showSymbol: false,
                    data: prices.map((item) => [item.timestamp * 1000, item.price]),
                    itemStyle: {
                        // color: colors.beets.highlight,
                        color: new graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#FF5D2A' },
                            { offset: 0.2323, color: '#FF00D6' },
                            { offset: 0.4198, color: '#BD00FF' },
                            { offset: 0.6125, color: '#6100FF' },
                            { offset: 0.8156, color: '#009CF3' },
                            { offset: 1, color: '#00FFB2' },
                        ]), 
                        // borderColor: colors.beets.highlight,
                    },
                    areaStyle: {
                        shadowBlur: 100, 
                        opacity: 0.3,
// filter: blur(19px);  
                        color: new graphic.LinearGradient(0, 0, 0, 1, [
                            // { offset: 0, color: 'rgba(4, 4, 4, 0.5)' },
                            // { offset: .5625, color: 'rgba(0, 0, 0, 0)' },
                            // { offset: 1, color: 'rgba(0, 0, 0, 0.5)' },
                            // version 1:
                            // { offset: 0, color: 'rgba(255, 93, 42, 0.534)' },
                            // { offset: 0.20, color: 'rgba(255, 0, 214, 0.264)' },
                            // { offset: 0.40, color: 'rgba(189, 0, 255, 0.276)' },
                            // { offset: 0.60, color: 'rgba(97, 0, 255, 0.27)' },
                            // { offset: 0.80, color: 'rgba(0, 156, 243, 0.072)' },
                            // { offset: 1.00, color: 'rgba(0, 255, 178, 0)' },
                            // version 2: 
                            { offset: 0, color: 'rgba(255, 93, 42, 0.534)' },
                            { offset: 0.25, color: 'rgba(255, 0, 214, 0.264)' },
                            { offset: 0.50, color: 'rgba(189, 0, 255, 0.276)' },
                            { offset: 0.75, color: 'rgba(97, 0, 255, 0.27)' },
                            { offset: 1.00, color: 'rgba(0, 156, 243, 0.072)' },
                            // { offset: 1.00, color: 'rgba(0, 255, 178, 0)' },
                        ]),
                    },
                    tooltip: {
                        valueFormatter: (value) => priceValueFormatter(value as number),
                    },
                },
            ],
        }),
        [label, prices],
    );

    return (
        <Box width="full" height="full">
            <ReactECharts option={option} style={{ height: '100%' }} />
        </Box>
    );
}
