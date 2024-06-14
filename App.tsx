import { StyleSheet, View } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
});
