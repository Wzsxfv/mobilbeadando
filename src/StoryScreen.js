import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView, Alert } from "react-native";
import textFileInJSON from './story.json';

export default class StoryScreen extends Component {
    static navigationOptions = {
      title: 'Stroy',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.titleText}>
              {textFileInJSON.paragraph1.title}
            </Text>
            <Text style={styles.bodyText}>
              {textFileInJSON.paragraph1.text}
            </Text>
            <Image
              source={require('../img/maci.jpeg')}
            />
            <Button
            title={textFileInJSON.paragraph2.title}
            onPress={() => Alert.alert("",textFileInJSON.paragraph2.text)}
            color='#007C6E'
            />
        </View>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  
  container: {
    padding: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'left',
  }
});