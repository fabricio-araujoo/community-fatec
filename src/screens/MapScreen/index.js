import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Backdrop,
  Container,
  Map,
  MapMarker,
  SearchInput,
  Text
} from '~/components';
import { setMapLocation } from '~/reducers/map';
import { CommunityService } from '~/services/communityService';
import { store } from '~/stores';
import { theme } from '~/theme';

export const MapScreen = () => {
  const [visibleBackdrop, setVisibleBackdrop] = useState(false);
  const [pointInfo, setPointInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const { coords } = useSelector((state) => state.mapLocation);
  const { user } = store.getState().userSession;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.keys(coords).length === 0 &&
      (async function () {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted') {
          await Location.getCurrentPositionAsync({}).then((response) => {
            dispatch(
              setMapLocation({
                ...response.coords,
                latitudeDelta: 0.043,
                longitudeDelta: 0.034
              })
            );
          });
        } else {
          console.log('Permission to access location was denied');
        }
      })();
  }, []);

  useEffect(() => {
    getMarkers();
  }, []);

  const handlePressSearch = (data, details) => {
    dispatch(
      setMapLocation({
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
        latitudeDelta: 0.043,
        longitudeDelta: 0.034
      })
    );
  };

  const handleOpenBackdrop = () => {
    setVisibleBackdrop(true);
  };

  const handleCloseBackdrop = () => {
    setVisibleBackdrop(false);
  };

  const getMarkers = async () => {
    setMarkers(await CommunityService.getMarkers());
  };

  if (Object.keys(coords).length === 0) {
    return (
      <Container align="center" justify="center">
        <ActivityIndicator size="large" color={theme.colors.green} />
      </Container>
    );
  }

  return (
    <Container align="center" justify="center">
      <Map mapLocation={coords}>
        {markers &&
          markers.map((marker, index) => (
            <MapMarker
              key={index}
              id={`${index}`}
              coordinate={marker.coords}
              onPress={() => {
                setPointInfo(marker);
                handleOpenBackdrop();
                dispatch(
                  setMapLocation({
                    ...marker.coords,
                    latitudeDelta: 0.043,
                    longitudeDelta: 0.034
                  })
                );
              }}
            />
          ))}
      </Map>
      <SearchInput onPress={handlePressSearch} />
      {pointInfo && (
        <Backdrop
          visible={visibleBackdrop}
          handleOpen={handleOpenBackdrop}
          handleClose={handleCloseBackdrop}
        >
          <Text fontFamily="Nunito-Bold" size={18}>
            {pointInfo.title}
          </Text>

          {pointInfo.details.map((item, index) => (
            <View key={index}>
              <Text fontFamily="Nunito-Bold" mt={24}>
                {item.label}
              </Text>
              <Text mt={8}>{item.value}</Text>
            </View>
          ))}
        </Backdrop>
      )}
    </Container>
  );
};
