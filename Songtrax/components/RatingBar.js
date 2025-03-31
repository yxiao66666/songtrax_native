import React from "react";
import { View, Image } from "react-native";

/**
 * RatingBar component displays a row of stars based on the 'sample.rating' value.
 * @param {Object} sample - The sample object containing a 'rating' value.
 * @returns {JSX.Element} A row of stars representing the rating.
 */
function RatingBar({ sample }) {
  // An array to hold the star icons
  const ratingIcons = [];

  // Loop to create star icons based on the 'sample.rating'
  for (let i = 1; i <= 5; i++) {
    ratingIcons.push(
      <Image
        key={i}
        source={
          i <= sample.rating
            ? require("../AppIcons/star-full.png") // If index is less than or equal to the rating, display a full star
            : require("../AppIcons/star-empty.png") // Otherwise, display an empty star
        }
        style={{ width: 30, height: 30 }}
      />
    );
  }

  // Return a View containing the row of star icons
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {ratingIcons}
    </View>
  );
}

export default RatingBar;
