import { StyleSheet } from 'react-native';


import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import SkiaLoader from '../../components/SkiaLoader';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <SkiaLoader />
      {/* <WithSkiaWeb
        getComponent={() => import('../../components/Breathe')}
        fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
