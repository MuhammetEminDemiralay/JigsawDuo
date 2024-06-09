import {  StyleSheet, View } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : '100%'
  },
});
