import * as React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
//import {Header} from 'react-native-elements'
//import { SafeAreaProvider } from 'react-native-safe-area-context'


export default class WriteStory extends React.Component {
  render(){
      return(
          <View style={styles.container}>
       

            <TextInput placeholder='Title of the story' ></TextInput>
            <TextInput placeholder='author of the story' ></TextInput>
            <TextInput multiline={true} placeholder='write story'  ></TextInput>
          </View>
        
      )
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
    
 /* <SafeAreaProvider></SafeAreaProvider>
<Header centerComponenet={{text:'Read Story', style:{color:'#fffadd'}}}></Header>*/