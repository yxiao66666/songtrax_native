import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { colors, sizes, fonts, styles } from "../data/theme";
import RatingBar from "../components/RatingBar";

function SongCard({ sample, onPress }) {
  return (
    // TouchableOpacity to make the card tappable
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: sizes.padding / 2,
        marginBottom: sizes.padding,
        borderRadius: sizes.radius,
        backgroundColor: colors.grayLight,
      }}
      onPress={onPress}
    >
      {/* Details container for sample information */}
      <View
        style={{
          paddingHorizontal: sizes.padding / 2,
        }}
      >
        {/* Song name */}
        <Text style={styles.purpleText}>{sample.name}</Text>
        {/* Song datetime created*/}
        <Text
          style={{
            ...fonts.songName,
            color: colors.gray,
          }}
        >
          Time: {sample.datetime}
        </Text>
        {/* Rating Bar component */}
        <RatingBar sample={sample} />
      </View>
    </TouchableOpacity>
  );
}

export default SongCard;
