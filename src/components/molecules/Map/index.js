import MapView from 'react-native-maps';

export const Map = ({ mapLocation, children, style }) => {
  return (
    <MapView
      style={{ height: '100%', width: '100%', ...style }}
      region={mapLocation}
      showsUserLocation={true}
      showsMyLocationButton={false}
      showsCompass={false}
    >
      {children}
    </MapView>
  );
};
