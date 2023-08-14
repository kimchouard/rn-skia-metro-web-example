import { View } from './Themed';
import Breathe from './Breathe';
// import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

export default function SkiaLoader() {
  return <Breathe />;
  // <WithSkiaWeb
  //   getComponent={() => import('../../components/Breathe')}
  //   fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
  // />
}