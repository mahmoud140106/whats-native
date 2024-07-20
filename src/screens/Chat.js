import { View, Text ,StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import DATA from '../data/chatdata';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

const Chat = () => {
  const [chatData, setChatData]=useState(DATA);
  useEffect(()=>{
    setChatData(DATA)
  },[])
  return (
    <View style={styles.container}>
      <FlatList 
        data={chatData}
        keyExtractor={(item) =>item.id.toString()}
        renderItem={({item}) =>(
          <View style={styles.chatContainer}>
            <Image source={item.photos} style={styles.image}/>
            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>

              <View style={styles.messages}>
                <Text style={styles.chatMessage} numberOfLines={1}>{item.lastMessage}</Text>
                {item.totalUnread >0 && (
                  <View style={styles.unreadContainer}>
                    <Text style={styles.totalUnread}>{item.totalUnread}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
      style={styles.chatButton}
      onPress={() => ('#')}
      >
        <MaterialCommunityIcons name='android-messages' size={24} color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:16
    },
    chatContainer: {
      flexDirection:'row',
      marginLeft:16,
      marginRight:16,      
    },
    image :{
      width:50,
      height:50,
      backgroundColor:'#128C7E',
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      objectFit:'contain'
    },
    chatContent: {
      flex:5,
      borderBottomWidth:0,
      marginLeft:16,
      paddingBottom:16,
      marginBottom:13,
    },
    chatHeader:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:2,
      marginTop:4,
    },
    chatName: {
      fontSize:16,
      fontWeight:'bold',
    },
    chatTime: {
      fontSize:12,
      color:'#A0A09E',
    },
    messages: {
      flexDirection:'row',
      justifyContent:'space-between'
    },
    chatMessage: {
      fontSize:14,
      color:'#A0A09E',
      width:'90%',
      textAlign:'left'
    },
    unreadContainer: {
      height:20,
      width:25,
      borderRadius:20,
      backgroundColor:'#25D366',
      alignItems:'center',
      justifyContent:'center',
    },
    totalUnread: {
      fontSize:10,
      fontWeight:'600',
      color:'#fff',
    },
    chatButton : {
      position:'absolute',
      bottom:30,
      right:20,
      backgroundColor:'#0e806a',
      width:60,
      height:60,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'center',
    }
  });
  