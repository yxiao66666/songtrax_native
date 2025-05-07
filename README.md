# SongTrax - React Native App

## Overview
SongTrax is a mobile application designed to provide users with a music and location-based experience similar to Pokémon GO. Users can explore music samples by physically visiting designated locations. This app is the mobile component of a cross-platform project that also includes a web app where users can create and share music samples.

This project demonstrates the use of React Native to build an interactive mobile app with integrated APIs, geolocation, maps, and media playback functionalities.

## Features
- **React Native Implementation**: Created using React Native and tested on iOS/Android simulators.
- **Navigation & Routing**: Multi-screen navigation using React Navigation.
- **State Management**: Uses React hooks to manage data and interact with a RESTful API.
- **Map Integration**: Displays predefined locations and user’s current location using `react-native-maps`.
- **Music Playback**: Streams music samples via a WebView using Tone.js.
- **Photo Upload**: Integrates an image picker for users to upload profile pictures.
- **User Location Detection**: Identifies when users are near a music location (within 100 meters) and unlocks content.
- **Rating System**: Allows users to rate music samples using the provided API.
- **Light & Dark Mode**: Adapts UI to the device’s color scheme.

## Target Platform
`android`.

## Technologies Used
- React Native
- React Navigation
- React Native Maps
- @react-native-community/geolocation
- Geolib (for distance calculations)
- React Native WebView
- React Native Image Picker
- React Native Elements - Ratings Component
- React Native Linear Gradient

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js
- React Native CLI or Expo CLI
- Xcode (for iOS) or Android Studio (for Android)

### Steps to Run the App
1. Clone the repository:
   ```sh
   git clone https://github.com/yxiao66666/songtrax.git
   cd songtrax
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the API key in an environment file:
   ```sh
   echo "API_KEY=api_key" > .env
   ```
4. Run the app:
   - iOS:
     ```sh
     npx react-native run-ios
     ```
   - Android:
     ```sh
     npx react-native run-android
     ```

## API Usage
SongTrax interacts with a RESTful API for storing and retrieving data. Key endpoints include:
- `GET /api/sampletolocation/?api_key=[api_key]&location_id=1` - Retrieves samples at a specific location.
- `POST /api/samplerating/` - Submits a rating for a sample.

## App Structure
```
├── src
│   ├── components   # Reusable React Native components
│   ├── screens      # App screens (Map, Music, Profile, etc.)
│   ├── navigation   # Navigation setup
│   ├── assets       # Icons, images, and styles
│   ├── api          # API interaction logic
│   └── utils        # Helper functions
└── App.js           # Main application entry point
```

## Screenshots
### Map Page
- Displays a map with music locations.
- Shows user’s current location.
<p align="center">
  <img src = images/lightmode_maps.png alt = "lightmode_maps" width = 20% >
<p>
<p align="center">
  Map Screenshots
<p>
   
### Music at Location Page
- Lists available samples at a nearby location.
- Users can play samples and see ratings.
<p align="center">
  <img src = images/lightmode_songsatlocation.png alt = "lightmode_songsatlocation" width = 20% >
<p>
<p align="center">
  Music at Location Screenshots
<p>
   
### Play Sample Page
- Plays music samples via WebView.
- Users can rate the sample.
<p align="center">
  <img src = images/lightmode_playsong.png alt = "lightmode_playsong" width = 20% >
<p>
<p align="center">
  Play Song Screenshots
<p>

### Profile Page
- Allows users to set their name and upload a profile picture.
<p align="center">
  <img src = images/lightmode_photoadded.png alt = "lightmode_photoadded" width = 20% >
<p>
<p align="center">
  Play Profile Screenshots
<p>

### Video Demonstration 
- A video that demonstrates Songtrax's functionality.
<p align="center">
  <img src = images/Songtrax_Native_Video.mp4 alt = "Songtrax_Native_Video" width = 20% >
<p>
<p align="center">
  Video Demonstration
<p>


## Contributing
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

