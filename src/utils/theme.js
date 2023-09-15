import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'gray.100',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'solid',
        colorScheme: 'green',
      },
    },
    Link: {
      baseStyle: {
        fontWeight: 600,
        ':hover': { textDecoration: 'none', color: 'green.600' },
        _activeLink: { color: 'purple.600' },
      },
    },
  },
});

export default theme;