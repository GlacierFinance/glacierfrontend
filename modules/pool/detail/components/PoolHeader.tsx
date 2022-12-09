import {
    Box,
    Flex,
    HStack,
    Popover,
    PopoverContent,
    PopoverTrigger as OrigPopoverTrigger,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import numeral from 'numeral';
import { PoolTokenPill } from '~/components/token/PoolTokenPill';
import PoolOwnerImage from '~/assets/images/pool-owner.png';
import Image from 'next/image';
import { HelpCircle } from 'react-feather';
import { useNetworkConfig } from '~/lib/global/useNetworkConfig';
import { AddressZero } from '@ethersproject/constants';
import { usePool } from '~/modules/pool/lib/usePool';

function PoolHeader() {
    const networkConfig = useNetworkConfig();
    const { pool } = usePool();

    // temp fix: https://github.com/chakra-ui/chakra-ui/issues/5896#issuecomment-1104085557
    const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;

    const hasBeetsOwner = pool.owner === networkConfig.beetsPoolOwnerAddress;
    const hasZeroOwner = pool.owner === AddressZero;
    const swapFeeType = hasZeroOwner ? 'Fixed' : 'Dynamic';
    const tooltipText1 = `Liquidity providers earn ${swapFeeType.toLowerCase()} swap fees on every trade utilizing the liquidity in this pool.`;
    const tooltipText2 = `Dynamic swap fees are controlled by the ${
        hasBeetsOwner ? 'Beethoven X Liquidity Committee Multisig' : 'pool owner'
    }.`;

    return (
        <VStack width="full" alignItems="flex-start" justifyContent="center" mb="12" gap="9px">
            <Text   fontSize="24px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    bg="linear-gradient(to bottom, #F4F1F7 0%, #ECE3F3 25.13%, #AC3DB0 50.9%, #7054E0 58.19%, #C0AFF1 67.05%, #FFFFFF 81.11%, #F6ECFD 90.48%), linear-gradient(180deg, #DFCAD7 16.67%, #A16AB8 49.48%, #BACDFF 75.38%, #5D9988 100%)"
                    color="transparent"
                    backgroundClip="text"
                    border="1.64px solid linear-gradient(180deg, #DFCAD7 16.67%, #A16AB8 49.48%, #BACDFF 75.38%, #5D9988 100%)"
                    mr="4" display={{ base: 'block', lg: 'none' }}>
                {pool.name}
            </Text>
            <Wrap alignItems="center" justifyContent="center" >
                <WrapItem display={{ base: 'none', lg: 'flex' }} justifyContent="center" alignItems="center">
                <h1 style={{
                fontSize: '36px',
                alignItems: 'center', justifyContent: 'center', 
                fontWeight: 'semibold',
                textTransform: 'uppercase', 
                background: 'linear-gradient(to bottom, #F4F1F7 0%, #ECE3F3 25.13%, #AC3DB0 50.9%, #7054E0 58.19%, #C0AFF1 67.05%, #FFFFFF 81.11%, #F6ECFD 90.48%), linear-gradient(180deg, #DFCAD7 16.67%, #A16AB8 49.48%, #BACDFF 75.38%, #5D9988 100%)', 
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text', 
                // border: '1.64px solid',
                // borderImageSource: 'linear-gradient(180deg, #DFCAD7 16.67%, #A16AB8 49.48%, #BACDFF 75.38%, #5D9988 100%)', 
                }}>
                        {pool.name}
                    </h1>
                </WrapItem>
                {pool.displayTokens.map((token, index) => (
                    <WrapItem key={index}>
                        <PoolTokenPill token={token} />
                    </WrapItem>
                ))}
            </Wrap>
            <Popover trigger="hover" placement="right-start">
                <PopoverTrigger>
                    <HStack
                        padding="5px"
                        bg="glacier.silver.400"
                        fontFamily="JetBrains"
                        spacing="2"
                        fontSize="14px"
                        textTransform="uppercase"
                        rounded="none"
                        color="glacier.silver.200"
                        justifyContent="center"
                        fontWeight="500"
                    >
                        {!hasZeroOwner && (
                            <Flex alignItems="center">
                                {hasBeetsOwner ? (
                                    <Image src={PoolOwnerImage} width="24" height="24" alt="Pool Owner Image" />
                                ) : (
                                    <HelpCircle size="24" />
                                )}
                            </Flex>
                        )}
                        <HStack spacing="1" >
                            <Text>{numeral(pool.dynamicData.swapFee).format('0.0[00]%')}</Text>
                            <Text>{swapFeeType} Fee</Text>
                        </HStack>
                    </HStack>
                </PopoverTrigger>
                <PopoverContent w="200px" bgColor="glacier.silver.400" shadow="4xl">
                    <Box p="1" fontSize="12px" fontFamily="JetBrains" bgColor="glacier.silver.400">
                        {tooltipText1} {!hasZeroOwner && tooltipText2}
                    </Box>
                </PopoverContent>
            </Popover>
        </VStack>
    );
}

export default PoolHeader;
