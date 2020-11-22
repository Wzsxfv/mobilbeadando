import React, { Component } from "react";
import { View, Button, StyleSheet, SafeAreaView, Image } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Home',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <SafeAreaView style={styles.container}>
        <Image
          source={require('../img/h.jpg')}
        />
        <Separator />
        <Button 
          title="Story"
          onPress={() => navigate('Story')}
          color='#007C6E'

        />
        <Separator />
        <Button
          title="ShoppingList"
          onPress={() => navigate('ShoppingList')}
          color='#007C6E'
        />
        <Separator />
        <Button
          title="Wait!"
          onPress={() => navigate('Animation')}
          color='#007C6E'
        />
        </SafeAreaView>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});