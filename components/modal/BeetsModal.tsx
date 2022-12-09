import { ModalBody, ModalBodyProps, ModalContent, ModalContentProps, ModalHeaderProps } from '@chakra-ui/modal';
import { Heading, ModalHeader, Text, TextProps } from '@chakra-ui/react';
import { Box, HeadingProps } from '@chakra-ui/layout';

export function BeetsModalContent(props: ModalContentProps) {
    return (
        <ModalContent {...props}>
            <Box bg="black" border="2px">
                <Box className="bg">{props.children}</Box>
            </Box>
        </ModalContent>
    );
}

export function BeetsModalHeader(props: ModalHeaderProps) {
    return <ModalHeader {...props} />;
}

export function BeetsModalBody(props: ModalBodyProps) {
    return <ModalBody {...props} />;
}

export function BeetsModalHeadline(props: HeadingProps) {
    return <Heading size="md" {...props} />;
}

export function BeetsModalSubHeadline(props: TextProps) {
    return <Text color="gray.200" fontSize="md" {...props} />;
}
