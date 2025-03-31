import React, { useEffect, useState } from "react";
import { SafeAreaView, View, FlatList, Text, Image } from "react-native";

import { colors, fonts, sizes, styles } from "../data/theme";
import icons from "../data/icons";

import SongCard from "../components/SongCard";
import { getSamples, getRatings } from "../components/ApiService";

/**
 * Songtrax component to display songs based on location
 * @param {object} navigation - Navigation object for routing within the app
 * @param {object} route - Route object containing parameters
 * @returns {JSX.Element} - Returns the UI elements for the Songtrax screen
 */
function Songtrax({ navigation, route }) {
  const { location } = route.params;

  const [samples, setSamples] = useState([]);
  const [ratings, setRatings] = useState([]);

  // Fetch samples and ratings data when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const samplesData = await getSamples();
        const ratingsData = await getRatings();

        setSamples(samplesData);
        setRatings(ratingsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [route]); // Re-fetch data when route changes

  // Check for the location and log it or redirect back if not available
  useEffect(() => {
    if (location) {
      console.log("Location:", location);
    } else {
      console.log("Location not available. Redirecting back...");
      navigation.goBack();
    }
  }, [location, navigation]); // Re-check when location or navigation changes

  // Render the Songtrax screen
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <View style={styles.songtraxContainer}>
        <Image
          source={icons.icon_pin_darkpurple}
          resizeMode="contain"
          style={styles.locationIcon}
        />
        <Text style={styles.heading}>{location}</Text>
      </View>

      {/* Display the list of songs */}
      <FlatList
        data={samples}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <View style={{ marginBottom: sizes.padding * 5 }}></View>
        }
        renderItem={({ item }) => {
          // Find the rating for the current sample
          const rating = ratings.find((r) => r.sample_id === item.id);

          return (
            <SongCard
              sample={{
                id: item.id,
                name: item.name,
                datetime: item.datetime,
                rating: rating ? rating.rating : 0, // Default rating is 0
                location: location,
              }}
              onPress={() =>
                navigation.navigate("Song", { sample: item, location })
              }
            />
          );
        }}
        style={{
          padding: sizes.padding,
        }}
      />
    </SafeAreaView>
  );
}

export default Songtrax;
