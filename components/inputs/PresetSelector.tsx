import { Button } from '@chakra-ui/button';
import { HStack } from '@chakra-ui/layout';

type Preset = {
    label: string;
    value: number;
};
interface Props {
    onPresetSelected: (preset: number) => void;
    presets?: Preset[];
}

const defaultPresets = [
    {
        label: '25%',
        value: 0.25,
    },
    {
        label: '50%',
        value: 0.5,
    },
    {
        label: '75%',
        value: 0.75,
    },
    {
        label: '100%',
        value: 1,
    },
];
export default function PresetSelector({ onPresetSelected, presets = defaultPresets }: Props) {
    const handlePresetSelected = (preset: number) => () => {
        onPresetSelected(preset);
    };
    return (
        <HStack width="full">
            {presets.map((preset) => (
                <Button
                    key={`preset-${preset.label}`}
                    _focus={{ outline: 'none' }}
                    onClick={handlePresetSelected(preset.value)}
                    size="sm"
                    width="full"
                    bgColor="glacier.black.100"
                    borderRadius="0px"
                    borderColor="beets.glacierAlpha.50"
                    border="1px"
                    borderStyle="inner"
                    _hover={{
                        backgroundImage:
                          "linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 86.26%, #F6ECFD 100%)",
                        color:"black"
                      }}
                >
                    {preset.label}
                </Button>
            ))}
        </HStack>
    );
}
