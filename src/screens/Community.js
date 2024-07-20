import { View, Text ,StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import {MaterialCommunityIcons,AntDesign} from 'react-native-vector-icons';
import DATA from '../data/chatdata';

const Community = () => {
  return (
    <View style={styles.container}>
      <View style={styles.communityContainer}>
      <View style={styles.iconContainer}>
      <MaterialCommunityIcons name='account-group' size={30} color='grey' />
      <AntDesign name='pluscircle' size={30} color='#0e806a'  marginLeft={2} marginTop={12}/>
      </View>
      <Text style={styles.communityText}>New Community</Text>
      </View>
    </View>
  )
}

export default Community

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F9F9F7'
    },
    communityContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-start',
      padding:16,
      gap:15,
      backgroundColor:'#FFFFFF'
    },
    iconContainer:{
      flexDirection:'row',
    },
    communityText:{
      fontSize:16,
      fontWeight:'600'
    }
  });
  