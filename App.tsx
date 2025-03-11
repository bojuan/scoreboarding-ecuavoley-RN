import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MarkerButton from './components/marker-button/marker-button';

export default function App() {
  return (
    <View style={styles.container}>
      <MarkerButton />
      <MarkerButton typeButton='down' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
