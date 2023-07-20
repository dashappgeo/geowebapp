# React Native App with Expo

This repository contains a simple React Native app created using Expo. Expo is a framework and a set of tools built around React Native that helps you develop, build, and deploy React Native applications more easily.

## Getting Started

To run the app locally on your machine, follow these steps:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it from the official website: [Node.js](https://nodejs.org/).

- `npx create-expo-app SurveyApp`

- `cd SurveyApp`

2. Install the project dependencies:

- `npm install @react-navigation/native`

- `npm install @react-navigation/native-stack`

- `npm install expo-location`

- `npm install expo-camera`

### Running the App

To start the app, run the following command:

- `npx expo start`



This will start the Expo development server, and you'll see a QR code in the terminal. You can use the Expo Go app on your Android or iOS device to scan the QR code and open the app on your device. Alternatively, you can also run the app on an Android/iOS emulator on your machine.

### Folder Structure

- `App.js`: The entry point of the application. This is where the root component is defined.

- `src/`: This folder contains the source code of the application. You can organize your components, screens, styles, and other related files inside this folder.

### Additional Configuration

Expo provides an easy way to configure and customize your app using the `app.json` file. You can modify the `app.json` file to set the app's name, version, icon, splash screen, and more.

### Deployment

To build and deploy the app to the app stores (Google Play Store for Android or Apple App Store for iOS), you need to follow the Expo documentation for publishing your app. Expo provides a seamless way to publish your app without the need for complex native build configurations.

## Contributing

If you find any issues or want to contribute to this project, feel free to create a pull request or raise an issue in the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Happy coding! 🚀
