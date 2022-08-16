export default {
  colors: {
    background: {
      primary: '#8c00ff',
      secondary: '#a436ff',
    },
    primary: '#320f50',
    accent: '#dbc556',
    white: '#ffffff',
    glass: '#cccccc55',
  },
  fonts: {
    title: 'Roboto-bold',
    subtitle: 'Roboto-Medium',
    content: 'Roboto-Regular',
  },
};

export type ThemeType = {
  theme: {
    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      primary: string;
      accent: string;
      white: string;
      glass: string;
    };
    fonts: {
      content: string;
      title: string;
      subtitle: string;
    };
  };
};
