import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box, Button } from '@chakra-ui/react';
import { useUserAccount } from '~/lib/user/useUserAccount';
import { ButtonProps } from '@chakra-ui/button';

export function WalletConnectButton(props: Omit<ButtonProps, 'children' | 'onClick'>) {
    const { isConnected } = useUserAccount();

    if (isConnected) {
        return null;
    }

    return (
        <ConnectButton.Custom>
            {({ account, chain, openConnectModal, mounted }) => {
                return (
                    <Box>
                        {(() => {
                            if (!mounted || !account || !chain) {
                                return (
                                    <Button ml='4' borderRadius="none" px='0' backgroundColor="black" alignItems="center"
                                    _hover={{
                                        opacity: '100%',
                                        
                                        transform: 'scale(1.05)',
                                    }}
                                    _active={{
                                        transform: 'scale(1.05)'
                                    }}
                                    onClick={openConnectModal}>
                                        <img src="./images/walletbuttonswap.png" />
                                    </Button>
                                );
                            }

                            return null;
                        })()}
                    </Box>
                );
            }}
        </ConnectButton.Custom>
    );
}
