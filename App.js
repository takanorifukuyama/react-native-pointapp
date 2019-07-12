import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert
} from 'react-native';

export default class App extends React.Component {
  state = {
    point: 0,
  }
  handlePress() {
    this.setState( preState => (
      {point: preState + 1}
    ))
  }
  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <Text>あなたのポイントは</Text>
          <Text>{this.state.point}</Text>
          <Button
            onPress={this.handlePress}
            title="POINT"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        
      </SafeAreaView>
    );
  } 
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
