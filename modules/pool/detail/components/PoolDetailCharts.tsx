import { HStack, Select } from '@chakra-ui/react';
import Card from '~/components/card/Card';
import { PoolDetailBptPriceChart } from '~/modules/pool/detail/components/charts/PoolDetailBptPriceChart';
import { useState } from 'react';
import { PoolDetailVolumeLiquidityChart } from '~/modules/pool/detail/components/charts/PoolDetailVolumeLiquidityChart';
import { PoolDetailFeesChart } from '~/modules/pool/detail/components/charts/PoolDetailFeesChart';
import { GqlPoolSnapshotDataRange, useGetPoolSnapshotsQuery } from '~/apollo/generated/graphql-codegen-generated';
import { usePool } from '~/modules/pool/lib/usePool';

type ChartType = 'BPT_PRICE' | 'VOLUME_TVL' | 'FEES' | 'TVL';

export function PoolDetailCharts() {
    const { pool } = usePool();
    const [chartType, setChartType] = useState<ChartType>('BPT_PRICE');
    const [range, setRange] = useState<GqlPoolSnapshotDataRange>('THIRTY_DAYS');
    const { data } = useGetPoolSnapshotsQuery({ variables: { poolId: pool.id, range } });

    return (
        <Card height="full" minHeight="540px" background="transparent">
            <HStack padding={{ base: '2', lg: '' }} pb="0" justify={{ base: 'space-between', lg: 'flex-end' }}>
                <Select
                    value={chartType}
                    onChange={(e) => setChartType(e.currentTarget.value as ChartType)}
                    width="160px"
                    textColor="black"
                    textTransform="uppercase"
                    fontSize="14px"
                    fontFamily="JetBrains" 
                    color="black"
                    bg="linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)"
                >
                    <option value="BPT_PRICE">BPT price</option>
                    <option value="FEES">Fees</option>
                    <option value="TVL">TVL</option>
                    <option value="VOLUME_TVL">Volume / TVL</option>
                </Select>
                <Select
                    fontFamily="JetBrains" 
                    textTransform="uppercase"
                    fontSize="14px"
                    value={range}
                    onChange={(e) => setRange(e.currentTarget.value as GqlPoolSnapshotDataRange)}
                    width="160px"
                    color="black"
                    bg="linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)"
                >
                    <option value="THIRTY_DAYS">last 30 days</option>
                    <option value="NINETY_DAYS">last 90 days</option>
                    <option value="ONE_HUNDRED_EIGHTY_DAYS">last 180 days</option>
                    <option value="ONE_YEAR">last 365 days</option>
                    <option value="ALL_TIME">All time</option>
                </Select>
            </HStack>
            {chartType === 'BPT_PRICE' && (
                <PoolDetailBptPriceChart
                    prices={(data?.snapshots || []).map((snapshot) => ({
                        timestamp: snapshot.timestamp,
                        price: snapshot.sharePrice,
                    }))}
                />
            )}
            {chartType === 'VOLUME_TVL' && <PoolDetailVolumeLiquidityChart data={data?.snapshots || []} />}
            {chartType === 'TVL' && <PoolDetailVolumeLiquidityChart data={data?.snapshots || []} hideVolume />}
            {chartType === 'FEES' && <PoolDetailFeesChart data={data?.snapshots || []} />}
        </Card>
    );
}
