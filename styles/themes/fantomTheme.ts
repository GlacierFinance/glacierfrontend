import { ChakraTheme } from '@chakra-ui/theme';

export const fantomTheme: Partial<ChakraTheme> = {
    styles: {
        global: {
            html: {
                backgroundColor:
               'black'
            },
            body: {
            },
        },
    },
    fonts: {
<<<<<<< HEAD
        heading: `'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        body: `'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
    },
    textStyles: {
        h1: {
            fontFamily: `'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        },
        h2: {
            fontFamily: `'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        },
        h3: {
            fontFamily: `'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        },
        h4: {
            fontFamily: `'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        },
        h5: {
            fontFamily: `'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        },
        h6: {
            fontFamily: `'Space Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
=======
        heading: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
        body: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
    },
    textStyles: {
        h1: {
            fontFamily: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            fontSize: ['3.0rem'],
            lineHeight: '100%',
            fontWeight: 'bold',
            letterSpacing: '-0.1rem',
        },
        h2: {
            fontFamily: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            fontSize: ['2.7rem'],
            fontWeight: '300',
            lineHeight: '100%',
            letterSpacing: '-0.1rem',
        },
        h3: {
            fontFamily: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            fontSize: ['1.8rem'],
            fontWeight: '300',
            lineHeight: '115%',
            letterSpacing: '-0.05rem',
        },
        h4: {
            fontFamily: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            fontSize: ['1.8rem'],
            fontWeight: '300',
            lineHeight: '115%',
            letterSpacing: '-0.05rem',
        },
        h5: {
            fontFamily: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            fontSize: ['1.5rem'],
            fontWeight: '300',
            lineHeight: '115%',
            letterSpacing: '-0.03rem',
        },
        h6: {
            fontFamily: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            fontSize: ['1.2rem'],
            fontWeight: '300',
            lineHeight: '115%',
            letterSpacing: '-0.03rem',
>>>>>>> 522cc3a8a10a2f9a6fb1611d6d2827113f13e32e
        },
        
        homehero: {
            fontFamily: `'Space', 'Gotham', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
            fontSize: ['112px'],
            fontWeight: '700',
            lineHeight: '134px',
            letterSpacing: '1.92px',
            backgroundClip:'text', 
            border: '2.47px solid', 
            borderImageSource: "linear-gradient(180deg, #DFCAD7 16.67%, #A16AB8 49.48%, #BACDFF 75.38%, #5D9988 100%)",
            borderImageSlice:'1', 
            mixBlendMode:'screen', 
            textShadow:'text-shadow: 0px 8.50312px 76.528px rgba(0, 0, 0, 0.5), 0px 6.43072px 10.3881px #000000', 
            WebkitTextFillColor:'transparent', 
            backgroundImage: 'linear-gradient(180deg, #F4F1F7 0%, #ECE3F3 44.13%, #8F7D9D 50.9%, #F6ECFD 100%)', 
        },
    },
    colors: {
        gray: {
            '100': '#C1C1D1',
            '200': '#828291',
            '300': '#54546C',
            '400': '#33334A',
            '500': '#212138',
            '600': '#141423',
            '700': '#10101E',
            '800': '#090911',
        },
        box: {
            '300': 'rgba(27,20,100,0.25)',
            '500': 'rgba(255,255,255,0.05)',
        },
        beets: {
            green: '#00F89C',
            red: '#FF0000',
            highlight: '#00FFFF',
            base: {
                '50': '#C3C5E9',
                '100': '#8F93D6',
                '200': '#585FC6',
                '300': '#3D3FA9',
                '400': '#292985',
                '500': '#1B1464',
                '600': '#1B1464',
                '700': '#100A49',
                '800': '#0B0737',
                '900': '#030024',
            },
            light: 'rgba(46,49,146, 1.0)',
            lightAlpha: {
                '50': 'rgba(46,49,146, 0.05)',
                '100': 'rgba(46,49,146, 0.1)',
                '200': 'rgba(46,49,146, 0.2)',
                '300': 'rgba(46,49,146, 0.3)',
                '500': 'rgba(46,49,146, 0.5)',
            },
            greenAlpha: {
                '50': 'rgba(0,248,156, 0.05)',
                '100': 'rgba(0,248,156, 0.1)',
                '200': 'rgba(0,248,156, 0.2)',
                '300': 'rgba(0,248,156, 0.3)',
                '400': 'rgba(0,248,156, 0.4)',
                '500': 'rgba(0,248,156, 0.5)',
                '600': 'rgba(0,248,156, 0.6)',
                '700': 'rgba(0,248,156, 0.7)',
                '800': 'rgba(0,248,156, 0.8)',
                '900': 'rgba(0,248,156, 0.9)',
            },
            highlightAlpha: {
                '50': 'rgba(0, 255, 255, 0.05)',
                '100': 'rgba(0, 255, 255, 0.1)',
                '200': 'rgba(0, 255, 255, 0.2)',
                '300': 'rgba(0, 255, 255, 0.3)',
                '400': 'rgba(0, 255, 255, 0.4)',
                '500': 'rgba(0, 255, 255, 0.5)',
                '600': 'rgba(0, 255, 255, 0.6)',
                '700': 'rgba(0, 255, 255, 0.7)',
                '800': 'rgba(0, 255, 255, 0.8)',
                '900': 'rgba(0, 255, 255, 0.9)',
            },
        },
    },
    components: {
        Select: {
            parts: ['field'],
            variants: {
                filled: {
                    field: {
                        color: 'white',
                        bgColor: 'beets.lightAlpha.500',
                        borderColor: 'transparent',
                        _hover: {
                            borderColor: 'beets.base.200',
                            bgColor: 'beets.lightAlpha.500',
                        },
                        _focus: {
                            bgColor: 'beets.lightAlpha.500',
                        },
                    },
                },
            },
        },
        Input: {
            parts: ['field'],
            variants: {
                filled: {
                    field: {
                        color: 'gray.100',
                        bgColor: 'beets.lightAlpha.500',
                        borderColor: 'transparent',
                        //color: 'gray.100',
                        _hover: {
                            borderColor: 'beets.base.200',
                            bgColor: 'beets.lightAlpha.500',
                        },
                        _focus: {
                            bgColor: 'beets.lightAlpha.500',
                            borderColor: 'beets.base.200',
                        },
                        _placeholder: {
                            color: 'gray.200',
                        },
                    },
                },
            },
        },
        Tabs: {
            parts: ['tab'],
            baseStyle: {
                tab: {
                    _focus: {
                        boxShadow: 'none',
                    },
                },
            },
        },
        Link: {
            baseStyle: {
                color: 'beets.highlight',
            },
        },
        Tooltip: {
            baseStyle: {
                color: 'white',
            },
        },
        Alert: {
            parts: ['container'],
            baseStyle: {
                container: {
                    borderRadius: 'md',
                    alignItems: 'flex-start',
                },
            },
        },
        Button: {
            variants: {
                primary: {
                    background: 'beets.green',
                    color: 'gray.500',
                    _active: { bgColor: 'beets.green' },
                    _focus: { outline: 'none', boxShadow: 'none' },
                    rounded: 'xl',
                    _hover: {
                        bgColor: 'beets.highlight',
                        transform: 'scale(1.01)',
                        _disabled: {
                            transform: 'none',
                            background: 'gray.400',
                        },
                    },
                    _disabled: {
                        bgColor: 'gray.400',
                        opacity: 1,
                        color: 'whiteAlpha.700',
                        cursor: 'not-allowed',
                        _active: { bgColor: 'gray.400' },
                    },
                },
                secondary: {
                    bgColor: 'beets.greenAlpha.300',
                    color: 'white',
                    _active: { bgColor: 'beets.greenAlpha.300' },
                    _focus: { outline: 'none', boxShadow: 'none' },
                    rounded: 'xl',
                    _hover: {
                        transform: 'scale(1.01)',
                        bgColor: 'beets.highlightAlpha.200',
                        _disabled: {
                            transform: 'none',
                            background: 'gray.400',
                        },
                    },
                    _disabled: {
                        bgColor: 'gray.400',
                        opacity: 1,
                        color: 'whiteAlpha.700',
                        cursor: 'not-allowed',
                        _active: { bgColor: 'gray.400' },
                    },
                },
            },
        },
        Skeleton: {
            baseStyle: {
                borderRadius: 'md',
            },
            defaultProps: {
                startColor: 'gray.400',
                endColor: 'gray.500',
            },
        },
        Text: {
            variants: {
                cardHeadline: {
                    fontWeight: 'semibold',
                    fontSize: 'xl',
                    color: 'white',
                },
            },
        },
    },
};
