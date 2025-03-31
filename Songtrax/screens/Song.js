import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { colors, fonts, sizes, styles } from "../data/theme";
import icons from "../data/icons";
import RatingBar from "../components/RatingBar";
import { getRatings } from "../components/ApiService";

function Song({ navigation, route }) {
  // Destructuring values from the route parameters
  const { sample, uploadedImage, username, location } = route.params;

  // State to manage ratings and sample rating
  const [ratings, setRatings] = useState([]);
  const [sampleRating, setSampleRating] = useState(null);

  // Fetch ratings data and sample rating based on the sample ID
  useEffect(() => {
    async function fetchData() {
      try {
        const ratingsData = await getRatings();
        setRatings(ratingsData);

        // Find the rating that matches the sample's ID
        const sampleRating = ratingsData.find(
          (rating) => rating.sample_id === sample.id
        );
        if (sampleRating) {
          setSampleRating(sampleRating.rating);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [sample.id]);

  // Header bar rendering function
  function renderHeaderBar() {
    // Return the header bar containing a 'Go Back' button
    return (
      <View style={{ backgroundColor: colors.purpleColorLighter }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: sizes.padding,
            height: 50,
          }}
        >
          {/* Go Back */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back}
              style={{
                width: 25,
                height: 25,
                tintColor: colors.white,
                marginRight: sizes.padding / 2,
              }}
            />
            <Text
              style={{
                color: colors.white,
                fontWeight: "bold",
                fontSize: sizes.body2,
              }}
            >
              Back To All Songs
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Function to handle playing music
  function handleChangePress() {}

  // Function to render song information
  function renderInfo() {
    return (
      <View style={styles.container}>
        <View>
          {/* Display song name */}
          <Text style={[styles.songName, { paddingBottom: 25 }]}>
            {sample?.name}
          </Text>
        </View>

        {/* Play Music Button */}
        <TouchableOpacity style={[styles.playButton, { width: "100%" }]}>
          <Text style={styles.buttonText}>Play Music</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: sizes.padding,
            paddingVertical: sizes.padding / 4,
          }}
        >
          {/* Display Rating Bar */}
          <RatingBar sample={{ rating: sampleRating }} />
        </View>
      </View>
    );
  }

  // Return the entire Song screen
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Render Header Bar */}
      {renderHeaderBar()}

      {/* Song Information */}
      <FlatList
        sampleName={(sample) => sample.id}
        sampleRating={(sample) => sample.rating}
        ListHeaderComponent={
          <View style={{ marginBottom: sizes.padding / 2 }}>
            <View style={styles.songtraxContainer}>
              <Image
                source={icons.icon_pin_darkpurple}
                resizeMode="contain"
                style={styles.locationIcon}
              />
              <Text style={[styles.heading]}>{location}</Text>
            </View>

            {/* Render Song Info */}
            {renderInfo()}
          </View>
        }
      />

      {/* Render user's uploaded image or default icon */}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 20,
          marginBottom: 30,
        }}
      >
        <Text style={styles.locationHeading}>Currently At This Location:</Text>

        {/* Render the uploaded image or a default icon */}
        <View
          style={{
            alignItems: "center",
            flex: 1,
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          {uploadedImage && uploadedImage.uri ? (
            <Image
              source={{ uri: uploadedImage.uri }}
              resizeMode="contain"
              style={styles.profileContainer}
            />
          ) : (
            <Image
              source={icons.tab_profile_darkpurple}
              resizeMode="contain"
              style={styles.profileContainer}
            />
          )}
          <Text style={styles.purpleText}>
            {username || "NO_USERNAME_GIVEN"}
          </Text>
        </View>

        {/* Render a smiley icon and corresponding text */}
        <View
          style={{
            alignItems: "center",
            flex: 1,
            flexDirection: "row",
            marginTop: 50,
          }}
        >
          <Image
            source={icons.icon_smiley_darkpurple}
            resizeMode="contain"
            style={styles.profileContainer}
          />
          <Text style={styles.purpleText}>And Others...</Text>
        </View>
      </View>
    </View>
  );
}

export default Song;
