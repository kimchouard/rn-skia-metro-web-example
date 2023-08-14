# React Native Skia Web Build with Metro Builder

If you want to have React Native Skia working on the web with the Expo Router v2, you'll need the Metro web builder (instead of webpack).

Here's the step required to make it work.

## Init

```bash
# Create a boilerplate if you don't have a codebase already
npx create-expo-app@latest --template tabs@49

# Install React Native Skia
expo install @shopify/react-native-skia
yarn setup-skia-web # also add it to the postinstall script in package.json
```

## Make `fs` and `path` available

Making sure fs, path and os are not triggering errors by updating the package.json from canvaskit-wasm through this postinstall script:
```javascript
// To be added in package.json "postinstall": "(...) && node [name-of-this-file].js"
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, 'node_modules', 'canvaskit-wasm', 'package.json');
const packageJson = require(packageJsonPath);

packageJson.browser = {
  fs: false,
  path: false,
  os: false,
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
```