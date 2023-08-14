# Steps

Steps to reproduce this repo:

```bash
# Create a boilerplace
npx create-expo-app@latest --template tabs@49

# Install React Native Skia
expo install @shopify/react-native-skia
yarn setup-skia-web # also add it to the postinstall script in package.json
```
