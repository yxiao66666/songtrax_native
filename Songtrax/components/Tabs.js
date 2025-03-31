import React from "react";
import { View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import Home from "../screens/Home";
import Songtrax from "../screens/Songtrax";
import Profile from "../screens/Profile";

import { styles, colors } from "../data/theme";
import icons from "../data/icons";

/**
 * Icon Component for Tabs
 * @param {boolean} focused - Indicates whether the icon is currently focused
 * @param {object} icon - Icon source for the tab
 */
function TabIcon({ focused, icon }) {
  return (
    <View style={styles.tabIcon}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          styles.tabIconPressed,
          { tintColor: focused ? colors.white : colors.lightLime },
        ]}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

/**
 * Function to return options for tab configuration
 * @param {object} icon - The icon object for the tab
 * @returns {object} The options for the tab
 */
function tabOptions(icon) {
  return {
    tabBarBackground: () => (
      <LinearGradient
        colors={[colors.purpleColorLighter, colors.blueColorLighter]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
    ),
    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icon} />,
    tabBarActiveTintColor: colors.white,
    tabBarInactiveTintColor: colors.lightLime,
    headerStyle: styles.headerStyle,
    headerTintColor: colors.white,
    headerTitleAlign: "center",
    headerTitleStyle: styles.headerTitleStyle,
    tabBarStyle: styles.tabBarStyle,
    tabBarLabelStyle: styles.tabBarLabelStyle,
  };
}

/**
 * Component to display a nearby location and a sample message
 * @param {object} props - Contains location and showLocationMessage
 */
function NearbyLocation(props) {
  const navigation = useNavigation();

  if (props && props.location) {
    return (
      <SafeAreaView style={styles.nearbyLocationSafeAreaView}>
        <View style={styles.nearbyLocationView}>
          <Text style={styles.nearbyLocationText}>{props.location}</Text>
          {props.showLocationMessage && (
            <Text style={{ ...styles.nearbyLocationText, fontWeight: "bold" }}>
              A sample is nearby
            </Text>
          )}
        </View>
      </SafeAreaView>
    );
  } else {
    return null;
  }
}

/**
 * Main Component for Tabs
 */
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={Home}
        options={() => tabOptions(icons.tab_map_white)}
      />
      <Tab.Screen
        name="Songtrax"
        component={Songtrax}
        options={({ route }) => {
          const showLocationMessage =
            route.params?.showLocationMessage || false;
          const location = route.params?.proximityLocation || null;

          return {
            tabBarLabel: () => (
              <View style={{ alignItems: "center" }}>
                <Text>{location ? "A location is nearby" : ""}</Text>
                {showLocationMessage && <Text>A sample is nearby</Text>}
              </View>
            ),
            ...tabOptions(icons.logo_white),
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => tabOptions(icons.tab_profile_white)}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
