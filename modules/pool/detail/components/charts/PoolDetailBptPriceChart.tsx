import { useMemo } from 'react';
import { EChartsOption, graphic } from 'echarts';
import { format } from 'date-fns';
import { numberFormatUSDValue } from '~/lib/util/number-formats';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '@chakra-ui/react';
import { chartGetPrimaryColor, chartGetSecondaryColor } from '~/modules/pool/detail/components/charts/chart-util';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';

interface Props {
    prices: { timestamp: number; price: string }[];
}

export function PoolDetailBptPriceChart({ prices }: Props) {
    const networkConfig = useNetworkConfig();
    const { colors } = useTheme();
    const max = Math.max(...prices.map((price) => parseFloat(price.price))) * 1.01;

    const option = useMemo<EChartsOption>(
        () => ({
            tooltip: {
                trigger: 'axis',
                type: 'shadow',
                backgroundColor: colors.beets.base['700'],
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
                        color: colors.beets.base['100'],
                        width: 2,
                        opacity: 1,
                    },
                },
            },
            xAxis: {
                show: true,
                type: 'time',
                offset: 0,
                minorSplitLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    formatter: (value: number, index: number) => {
                        return index % 2 === 0 ? format(new Date(value), 'MMM d') : '';
                    },
                    color: colors.gray['200'],
                    showMaxLabel: false,
                    showMinLabel: false,
                },
                axisPointer: {
                    type: 'line',
                    label: {
                        formatter: (params) => {
                            return format(new Date(params.value), 'MMM d');
                        },
                    },
                },
                axisLine: { show: false },
            },
            yAxis: {
                show: false,
                scale: true,
                splitLine: { show: false },
                offset: 0,
                max,
            },
            grid: {
                left: 0,
                right: 0,
                top: '5%',
                bottom: '7.5%',
                containLabel: false,
            },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    name: 'BPT price',
                    showSymbol: false,
                    data: prices.map((item) => [item.timestamp * 1000, item.price]),
                    itemStyle: {
                        color: new graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#FF5D2A' },
                            { offset: 0.25, color: '#FF00D6' },
                            { offset: 0.75, color: '#BD00FF' },
                            { offset: 1, color: '#6100FF' },

                        ]), 
                    },
                    areaStyle: {
                        shadowBlur: 100, 
                        opacity: 0.3,
                        color: new graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#FF5D2A' },
                            { offset: 0.25, color: 'rgba(255, 0, 214, 0.264)' },
                            { offset: 0.50, color: 'rgba(189, 0, 255, 0.276)' },
                            { offset: 0.75, color: 'rgba(97, 0, 255, 0.27)' },
                            { offset: 1.00, color: 'rgba(0, 156, 243, 0.072)' },
                        ]),
                    },
                    axisLine: { show: false },
                    minorSplitLine: { show: false },
                    splitLine: { show: false },

                    tooltip: {
                        valueFormatter: (value) => numberFormatUSDValue(value as number),
                    },
                },
            ],
        }),
        [JSON.stringify(prices)],
    );

    return <ReactECharts option={option} style={{ height: '100%' }} />;
}
