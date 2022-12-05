import Image from 'next/image';
import BeetsSmart from '~/assets/icons/beetx-smarts.svg';
import { useEarlyLudwigNft } from '~/lib/global/useEarlyLudwigNft';
import { Image as ChakraImage } from '@chakra-ui/react';
import glacierIcon from "public/images/glaciericon.png";

export function WalletUserAvatar() {
    const { data } = useEarlyLudwigNft();

    if (data) {
        return <ChakraImage src={data} />;
    }

    return <Image src={glacierIcon} width="560px" alt="your-profile" />;
}
