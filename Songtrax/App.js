import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./components/Tabs";
import Song from "./screens/Song";
import colors from "./data/theme";
const Stack = createStackNavigator();

function App() {
  // Array to store samples
  const totalSample = [];
  // State to manage samples and re-renders
  const [samples, setSamples] = useState(totalSample);

  // Function to sort samples by name
  const sortSamples = (sample, otherSample) => {
    if (sample.name < otherSample.name) {
      return -1;
    }
    if (sample.name > otherSample.name) {
      return 1;
    }
    return 0;
  };
  // Sort the samples array
  const sortedSamples = samples.sort(sortSamples);

  return (
    // Main Application component
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      <NavigationContainer>
        {/* Stack Navigator for managing app navigation */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Tabs"}
        >
          {/* Tabs screen with sorted samples passed as props */}
          <Stack.Screen
            name="Tabs"
            children={(props) => (
              <Tabs {...props} samples={sortedSamples} setSample={setSamples} />
            )}
          />
          {/* Song screen with sorted samples passed as props */}
          <Stack.Screen
            name="Song"
            children={(props) => (
              <Song
                {...props}
                samples={sortedSamples}
                setSamples={setSamples}
              />
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
