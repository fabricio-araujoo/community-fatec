import { Marker } from 'react-native-maps';
import { PinMarker } from './styles';

export const MapMarker = ({ id, coordinate, onPress }) => {
  return (
    <Marker identifier={id} coordinate={coordinate} onPress={onPress}>
      <PinMarker />
    </Marker>
  );
};
