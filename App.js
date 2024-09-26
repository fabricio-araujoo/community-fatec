import { useFonts } from '@expo-google-fonts/nunito';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Container } from '~/components';
import { Routes } from '~/routes';
import { store } from '~/stores';
import { theme } from '~/theme';

export default function App() {
  const [fontsLoaded] = useFonts(theme.fonts);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {!fontsLoaded ? (
          <Container align="center" justify="center">
            <ActivityIndicator size="large" color={theme.colors.green} />
          </Container>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </Provider>
  );
}
