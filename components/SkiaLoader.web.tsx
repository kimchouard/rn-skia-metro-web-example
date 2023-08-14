import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';
import { Text } from './Themed';

export default function SkiaLoader() {
  return (<WithSkiaWeb
    getComponent={() => import('./Breathe')}
    fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
  />);
}