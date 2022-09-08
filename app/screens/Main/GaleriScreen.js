import { View, StyleSheet,Image } from 'react-native'
import React from 'react'
import * as RN from 'react-native';


export default function GaleriScreen() {
  return (
    <View style={styles.container1}>
         <RN.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <Image 
          style ={styles.tinyLogo}
          source={require('../../../assets/1.png')}
      />
         <Image 
          style ={styles.tinyLogo}
          source={require('../../../assets/2.png')}
      />
           <Image 
          style ={styles.tinyLogo}
          source={require('../../../assets/3.png')}
      />
           <Image 
          style ={styles.tinyLogo}
          source={require('../../../assets/4.png')}
      />
            <Image 
          style ={styles.tinyLogo}
          source={require('../../../assets/5.png')}
      />
            <Image 
          style ={styles.tinyLogo}
          source={require('../../../assets/6.png')}
      />
            <Image 
          style ={styles.tinyLogo}
          source={require('../../../assets/7.png')}
      />
                <Image 
          style ={styles.tinyLogo}
          source={require('../../../assets/8.png')}
      />
      </RN.ScrollView>
    </View>
    
  )
}
const styles = StyleSheet.create({

  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
},
  tinyLogo: {
      width: 330,
      height: 330,
      marginTop: 10,
      marginBottom: 10,
  },
  
  
  });