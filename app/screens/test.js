import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageScreen from './ImageScreen';


const TEST = () => {
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageScreen/>
        </SafeAreaView>
    )

}
    
export default TEST;
