import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { theme } from '~/theme';
import { SearchContainer } from './styles';

export const SearchInput = ({ onPress }) => {
  return (
    <SearchContainer>
      <GooglePlacesAutocomplete
        placeholder="Pesquisar"
        styles={styles}
        onPress={(data, details = null) => onPress(data, details)}
        query={{
          key: 'AIzaSyD1tcNG7MAuPnA_uYAR8hxFyYjWVHhgpao',
          language: 'pt-br'
        }}
        fetchDetails={true}
        onFail={(error) => console.error(error)}
        onNotFound={() => console.log('no results')}
      />
    </SearchContainer>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: theme.metrics.px(48),
    elevation: 1
  },
  listView: {
    height: theme.metrics.px(200)
  }
});
