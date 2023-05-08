import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { Icon, Header, Overlay, Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ReuseComponent from './src/widgets/reuseComponent';

export default function App() {
  const [visible, setVisible] = useState(false);

  const openOverlay = () =>{
    setVisible(!visible);
  }
  return (
    <SafeAreaProvider>    
      <Header 
        leftComponent={{icon:'menu', color:'#fff'}}
        centerComponent={{text:'My Title', style:{color:'#fff'}}}
        rightComponent={{icon:'home', color:'#fff'}}
      />
      <View style={styles.container}>
        <ReuseComponent>
          This is First Usable Component {Platform.OS}
        </ReuseComponent>
        <ReuseComponent>
          This is Second Usable Component
        </ReuseComponent>        
      <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="rowing"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>        
      <Text>Open up App.js to start working on your app!</Text>
      <Icon
        name='rowing' />

      <Icon
        name='g-translate'
        color='#00aced' 
        onPress={openOverlay}
        />
<Overlay isVisible={visible} onBackdropPress={openOverlay}>
      <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
      />

      <Icon
        reverse
        name='ios-american-football'
        type='ionicon'
        color='#517fa4'
      />

      <Icon
        raised
        name='close'
        type='font-awesome'
        color='#f50'
        onPress={openOverlay} />
        </Overlay>
      <StatusBar style="auto" />
    </View>
    </SafeAreaProvider>
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
