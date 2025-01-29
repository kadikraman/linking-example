# Example project: iOS Universal Links and Android App Links

This is an example project, demonstrating how to set up [iOS Universal Links](https://docs.expo.dev/linking/ios-universal-links/) and [Android App Links](https://docs.expo.dev/linking/android-app-links/) on an Expo Router project.

See the corresponding YouTube Video here. (TODO)

<img width="1368" alt="Screenshot 2025-01-29 at 14 48 40" src="https://github.com/user-attachments/assets/0bb6326c-a3e0-4bbe-94b7-05604c552261" />


## iOS

- [Expo](https://docs.expo.dev/linking/ios-universal-links/) Documentation
- [iOS](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app) Documentation

## Android

- [Expo](https://docs.expo.dev/linking/android-app-links/) Documentation
- [Android](https://developer.android.com/training/app-links) Documentation

## Try it yourself

[Website](https://linking-example.expo.app) | iOS app | [Andorid app](https://expo.dev/accounts/expokadi/projects/linking-example/builds/7c4b06ca-8914-4bf1-94ed-c6b76b706c88)

The following links were used in the video:

1. **Home page** (opens website): https://linking-example.expo.app
2. **PLP** (opens app): https://linking-example.expo.app/products
3. **PDP** (opens app): https://linking-example.expo.app/products/1
4. **PDP** with URL params (opens app with a sale): https://linking-example.expo.app/products/1?sale=true

## Run this project locally

### 🔗 Website
```sh
yarn
npx expo start --web
```

### 🍏 iOS app

Build locally:

```sh
yarn
npx expo run:ios
```

Or to build on [EAS](https://docs.expo.dev/build/introduction/), remove the `projectId` and `bundleIdentifier` from `app.json`, then
```sh
npm i -g eas-cli
eas build --platform ios --profile development # or preview
```

### 🤖 Android app

Build locally:

```sh
yarn
npx expo run:android
```

Or to build on [EAS](https://docs.expo.dev/build/introduction/), remove the `projectId` from `app.json`, then
```sh
npm i -g eas-cli
eas build --platform android --profile development # or preview
```
