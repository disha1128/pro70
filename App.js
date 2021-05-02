import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStory from './screens/readStory'
import WriteStory from './screens/writeStory'
import {Header} from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
     
      <SafeAreaProvider>
      <Header centerComponent={{title:'story hub' , style:{color:"orange"}}} backgroundColor="orange"></Header>
      <AppContainer/>
      </SafeAreaProvider>
    
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




const AppNavigator= createBottomTabNavigator({
  ReadStory:ReadStory,
  WriteStory:WriteStory
},
{
defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
const routeName=navigation.state.routeName
if(routeName==='ReadStory'){
  return(
<Image style={{width:30 , height:30}} source={require('./assets/read.png')}></Image>
  )
}
else if(routeName==='WriteStory'){
  return(
<Image style={{width:30 , height:30}} source={require('./assets/write.png')}></Image>
  )
}
  }
})



})

const AppContainer= createAppContainer(AppNavigator)

