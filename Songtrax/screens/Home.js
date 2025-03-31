// Import React Native
import React, { useState, useEffect } from "react";
import {
  PermissionsAndroid,
  StyleSheet,
  Appearance,
  View,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { getDistance } from "geolib";

import { getLocations } from "../components/ApiService";

// Array of preset locations
const locations = [
  {
    id: "3",
    location: "UQ Lakes Bus Station, UQ",
    suburb: "St Lucia",
    state: "QLD",
    country: "Australia",
    latlong: "-27.498248114899546, 153.01788081097033",
  },
  {
    id: "2",
    location: "General Purpose South, UQ",
    suburb: "St Lucia",
    state: "QLD",
    country: "Australia",
    latlong: "-27.499896755131353, 153.0148290862863",
  },
  {
    id: "1",
    location: "Great Court, UQ",
    suburb: "St Lucia",
    state: "QLD",
    country: "Australia",
    latlong: "-27.49763309197018, 153.01291742634757",
  },
];

// Define Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nearbyLocationSafeAreaView: {
    backgroundColor: "black",
  },
  nearbyLocationText: {
    color: "white",
    lineHeight: 25,
    padding: 20,
  },
});
const colorScheme = Appearance.getColorScheme();

// Component for displaying nearest location and whether it's within 100 metres
function NearbyLocation(props) {
  if (typeof props.location != "undefined") {
    return (
      <SafeAreaView style={styles.nearbyLocationSafeAreaView}>
        <View style={styles.nearbyLocationView}>
          {props.distance.nearby && (
            <Text
              style={{
                ...styles.nearbyLocationText,
                fontWeight: "bold",
              }}
            >
              {props.location} Is Within 100 Metres!
            </Text>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

// Main component for displaying the map and markers
export default function ShowMap({ navigation }) {
  const [location, setLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedLocations = await getLocations();
        const updatedLocations = fetchedLocations.map((location) => ({
          ...location,
          coordinates: {
            latitude: parseFloat(location.latitude),
            longitude: parseFloat(location.longitude),
          },
        }));
        setLocations(updatedLocations);
        console.log(updatedLocations);
        setMapState((prevState) => ({
          ...prevState,
          //locations: updatedLocations,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Convert string-based latlong to object-based on each location
  const updatedLocations = locations.map((location) => {
    const latlong = location.latlong.split(", ");
    location.coordinates = {
      latitude: parseFloat(latlong[0]),
      longitude: parseFloat(latlong[1]),
    };
    return location;
  });

  // Setup state for map data
  const initialMapState = {
    locationPermission: false,
    locations: updatedLocations,
    userLocation: {
      latitude: -27.49763309197018,
      longitude: 153.01291742634757,
      // Starts at UQ Great Court
    },
    nearbyLocation: {},
  };
  const [mapState, setMapState] = useState(initialMapState);

  // Run location permissions check after render due to side effects
  // Only Android needs extra code to check for permissions (in addition to android/app/src/main/AndroidManifest.xml)
  // iOS relies on ios/mapApp/Info.plist
  useEffect(() => {
    async function requestAndroidLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app will put your location on the map.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setMapState({
            ...mapState,
            locationPermission: true,
          });
        }
      } catch (error) {
        console.warn(error);
      }
    }

    if (Platform.OS === "android") {
      requestAndroidLocationPermission();
    } else {
      setMapState({
        ...mapState,
        locationPermission: true,
      });
    }
  }, []);

  /**
   * Function to calculate the distance between the user and locations.
   * @param {Object} userLocation - The user's current location coordinates.
   * @returns {Object} The nearest location within 100 meters.
   */
  function calculateDistance(userLocation) {
    const nearestLocations = mapState.locations
      .map((location) => {
        const metres = getDistance(userLocation, location.coordinates);
        location["distance"] = {
          metres: metres,
          nearby: metres <= 100 ? true : false,
        };
        return location;
      })
      .sort((previousLocation, thisLocation) => {
        return previousLocation.distance.metres - thisLocation.distance.metres;
      });
    return nearestLocations.shift();
  }

  // Only watch the user's current location when device permission granted
  if (mapState.locationPermission) {
    Geolocation.watchPosition(
      (position) => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        const nearbyLocation = calculateDistance(userLocation);

        if (nearbyLocation) {
          navigation.navigate("Songtrax", {
            location: nearbyLocation.location,
          });
        }

        setMapState({
          ...mapState,
          userLocation,
          nearbyLocation: nearbyLocation,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000 }
    );
  }

  return (
    <>
      <MapView
        camera={{
          center: mapState.userLocation,
          pitch: 0, // Angle of 3D map
          heading: 0, // Compass direction
          altitude: 3000, // Zoom level for iOS
          zoom: 15, // Zoom level For Android
        }}
        showsUserLocation={mapState.locationPermission}
        style={styles.container}
      >
        {mapState.locations.map((location) => (
          <Circle
            key={location.id}
            center={location.coordinates}
            radius={100}
            strokeWidth={3}
            strokeColor="#A42DE8"
            fillColor={
              colorScheme == "dark"
                ? "rgba(128,0,128,0.5)"
                : "rgba(210,169,210,0.5)"
            }
          />
        ))}
      </MapView>
      <NearbyLocation {...mapState.nearbyLocation} />
    </>
  );
}
