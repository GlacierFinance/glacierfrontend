import { HStack, VStack } from '@chakra-ui/layout';
import Card from '~/components/card/Card';
import PoolUserStats from './PoolUserStats';
import PoolOverallStats from './PoolOverallStats';
import { TabList, Tabs } from '@chakra-ui/tabs';
import BeetsTab from '~/components/tabs/BeetsTab';
import { useState } from 'react';
import { usePoolUserBptBalance } from '~/modules/pool/lib/usePoolUserBptBalance';

export default function PoolStats() {
    const { hasBpt } = usePoolUserBptBalance();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChanged = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };
    return (
        <Card px="2" py="4" height="full" background="glacier.black.200">
            <VStack height="full" spacing="4">
                {hasBpt && (
                    <Tabs width="full" variant="soft-rounded" display="flex" onChange={handleTabChanged} px="2">
                        <TabList>
                            <HStack>
                                <BeetsTab paddingX="4" paddingY="2" fontSize="xs" textTransform="uppercase">
                                    My Stats
                                </BeetsTab>
                                <BeetsTab paddingX="4" paddingY="2" fontSize="xs" textTransform="uppercase">
                                    Pool Stats
                                </BeetsTab>
                            </HStack>
                        </TabList>
                    </Tabs>
                )}
                {hasBpt && activeTab === 0 && <PoolUserStats />}
                {(!hasBpt || activeTab === 1) && <PoolOverallStats />}
            </VStack>
        </Card>
    );
}
