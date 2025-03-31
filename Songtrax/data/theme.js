// Colours
export const colors = {
  darkGreen: "#229879",
  darkLime: "#1A8871",
  lightLime: "#BBD6C5",
  lime: "#2AD699",
  lightGreen: "#E7F9EF",
  lightGreen2: "#8EbCA0",

  white: "#fff",
  black: "#000",
  blue: "#4096FE",
  grayDark: "#999",
  grayLight: "#ddd",

  transparentBlack1: "rgba(0, 0, 0, 0.1)",
  transparentBlack3: "rgba(0, 0, 0, 0.3)",
  transparentBlack5: "rgba(0, 0, 0, 0.5)",
  transparentBlack7: "rgba(0, 0, 0, 0.7)",
  transparentBlack9: "rgba(0, 0, 0, 0.9)",

  transparentGray: "rgba(77,77,77, 0.8)",
  transparentDarkGray: "rgba(20,20,20, 0.9)",

  transparent: "transparent",

  // Songtrax
  purpleColorLighter: "#A42DE8",
  blueColorLighter: "#318AFF",
  blueColorDarker: "#2D3DE8",
  blackColorTranslucentLess: "rgba(0,0,0,0.35)",
  blackColorTranslucentMore: "rgba(0,0,0,0.7)",
  whiteColor: "#ffffff",
  whiteColorTranslucent: "rgba(255,255,255, 0.5)",
  //pinkColor:"#FAECFA",
  light: {
      bgColor: "#ffffff",
      fgColor: "#800080",
      fgColorLighter: "rgba(128,0,128,0.5)",
      headerTextColor: "#ffffff",
  },
  dark: {
      bgColor: "#422142",
      fgColor: "#f0c4f0",
      fgColorLighter: "rgba(210,169,210,0.5)",
      headerTextColor: "#f0c4f0",
  },
};

// Sizes

export const sizes = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  headerHeight: 300,

  // Font sizes
  heading: 22,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
};

// Fonts

export const fonts = {
  heading: {
      paddingBottom: sizes.padding / 2,
      color: colors.black,
      fontFamily: "System",
      fontSize: sizes.heading,
      lineHeight: 30,
  },
  body1: {
      color: colors.black,
      fontFamily: "System",
      fontSize: sizes.body1,
      lineHeight: 36,
  },
  body2: {
      color: colors.black,
      fontFamily: "System",
      fontSize: sizes.body2,
      lineHeight: 30,
  },
  body3: {
      color: colors.black,
      fontFamily: "System",
      fontSize: sizes.body3,
      lineHeight: 22,
  },
  body4: {
      color: colors.black,
      fontFamily: "System",
      fontSize: sizes.body4,
      lineHeight: 22,
  },
  body5: {
      color: colors.black,
      fontFamily: "System",
      fontSize: sizes.body5,
      lineHeight: 22,
  },
};

// Songtrax
export const mode = "light"; // Setting initial mode as light mode
const height = 600;

export const styles = {
  nearbyAndPlayContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 10,
      backgroundColor: colors[mode].bgColor,
  },
  heading: {
      fontSize: 30,
      fontWeight: "bold",
      color: colors[mode].fgColor,
      paddingBottom: 0,
  },
  subHeading: {
      fontSize: 14,
      color: colors[mode].fgColor,
      paddingBottom: 25,
  },
  songName: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors[mode].fgColor,
      paddingBottom: 0,
  },
  location: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
  },
  locationHeading: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors[mode].fgColor,
      paddingBottom: 6,
  },
  playButton: {
      backgroundColor: colors[mode].fgColor,
      color: colors[mode].bgColor,
      fontWeight: "bold",
      padding: 10,
      borderRadius: 10,
      textAlign: "center",
      width: "49%",
  },
  locationIcon: {
      width: 35,
      height: 105,
  },
  currentLocation: {
      marginBottom: 10,
  },
  ratingComponent: {
      paddingTop: 15,
  },
  profileContainer: {
      width: 70,
      marginRight: 10,
  },
  photoEmptyView: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: colors[mode].fgColorLighter,
      borderStyle: "dashed",
      height: height / 1.625,
  },
  photoFullImage: {
      width: "100%",
      borderRadius: 10,
  },
  addPhoto: {
      backgroundColor: colors[mode].fgColor,
      color: colors[mode].bgColor,
      fontWeight: "bold",
      padding: 10,
      borderRadius: 10,
      textAlign: "center",
      width: "50%",
      marginLeft: "25%",
      marginTop: -(height / 3.25),
  },
  changePhoto: {
      backgroundColor: colors[mode].fgColor,
      color: colors[mode].bgColor,
      fontWeight: "bold",
      padding: 10,
      borderRadius: 10,
      textAlign: "center",
      width: "50%",
      marginLeft: "25%",
      marginTop: -(height / 12),
  },

  container: {
      padding: 20,
  },
  songtraxContainer: {
      paddingHorizontal: 70,
      paddingTop: 30,
      paddingBottom: 10,
      alignItems: "center",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
  },
  photoFullView: {
      marginBottom: 20,
  },
  photoEmptyView: {
      borderWidth: 3,
      borderRadius: 10,
      borderColor: colors.purpleColorLighter,
      borderStyle: "dashed",
      height: height / 2,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center",
  },
  photoFullImage: {
      width: "100%",
      borderRadius: 10,
  },
  buttonView: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 20,
  },
  inputBox: {
      width: "100%",
      borderWidth: 1,
      borderColor: colors.purpleColorLighter,
      borderRadius: 10,
      paddingHorizontal: 10,
      backgroundColor: "rgba(128,0,128,0.5)",
      textAlign: "center",
  },
  buttonText: {
      color: colors.whiteColor,
      textAlign: "center",
  },
  purpleText: {
      flex: 1,
      ...fonts.songName,
      color: colors.purpleColorLighter,
  },
  tabIcon: {
      alignItems: "center",
      justifyContent: "center",
      height: 80,
      width: 50,
  },
  tabIconPressed: {
      width: 100,
      height: 30,
  },
  headerStyle: {
      backgroundColor: colors.purpleColorLighter,
      height: 50,
  },
  headerTitleStyle: {
      fontSize: sizes.body2,
  },
  tabBarStyle: {
      height: 70,
      padding: sizes.padding,
  },
  tabBarLabelStyle: {
      padding: sizes.padding / 2,
  },

  
};

const appTheme = {
  colors,
  sizes,
  fonts,
  mode,
  styles
};
export default appTheme;