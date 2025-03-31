import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { colors, styles } from "../data/theme"; // Import styles from theme

const { width, height } = Dimensions.get("window");

export default function Profile() {
  // State variables to manage the user's photo and username
  const [photoState, setPhotoState] = useState({});
  const [userName, setUserName] = useState("Enter Your Name");

  // Function to handle the action when changing the user photo
  async function handleChangePress() {
    const result = await launchImageLibrary(); // Launch the image library to select a photo
    if (typeof result.assets[0] === "object") {
      setPhotoState(result.assets[0]); // Set the selected photo as the user's photo
    }
  }

  // Function to handle the action when removing the user's photo
  async function handleRemovePress() {
    setPhotoState({}); // Reset the user's photo to an empty state
  }

  const hasPhoto = typeof photoState.uri !== "undefined"; // Check if the user has a photo

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.heading}>Edit Profile</Text>
        <Text style={styles.subHeading}>Mirror, Mirror On The Wall...</Text>

        {/* Display User's Photo */}
        <View style={hasPhoto ? styles.photoFullView : styles.photoEmptyView}>
          {hasPhoto ? ( // If the user has a photo
            <Image
              style={styles.photoFullImage}
              resizeMode="cover"
              source={{
                uri: photoState.uri,
                width: width,
                height: height / 2,
              }}
            />
          ) : (
            // If the user doesn't have a photo
            <>
              <TouchableOpacity
                style={styles.playButton}
                onPress={handleChangePress}
              >
                <Text style={styles.buttonText}>Add Photo</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Buttons for managing the user's photo */}
        {hasPhoto && ( // If the user has a photo
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.playButton}
              onPress={handleChangePress}
            >
              <Text style={styles.buttonText}>Change Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.playButton}
              onPress={handleRemovePress}
            >
              <Text style={styles.buttonText}>Remove Photo</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Input box for user's name */}
        <TextInput
          style={styles.inputBox}
          value={userName}
          onChangeText={(text) => setUserName(text)}
          onFocus={() => {
            if (userName === "Enter Your Name") {
              setUserName("");
            }
          }}
          onBlur={() => {
            if (!userName) {
              setUserName("Enter Your Name");
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
