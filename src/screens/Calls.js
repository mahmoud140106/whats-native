import { View, Text ,StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import {MaterialCommunityIcons,MaterialIcons,Fontisto} from 'react-native-vector-icons';
import DATA from '../data/chatdata';


const Calls = () => {
  const [callData, setCallData]=useState(DATA);
  useEffect(()=>{
    setCallData(DATA)
  },[])
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.callContainer}>
          <View style={styles.linkContainer}>
            <Fontisto name='link' size={24} color='white' />
          </View>
          <View>
            <Text style={styles.callLink}>Create a call link</Text>
            <Text style={styles.subtext}>Share a link for your whats app call</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.recentText}>Recent</Text>
      <FlatList 
        data={callData}
        keyExtractor={(item) =>item.id.toString()}
        renderItem={({item}) =>(
          <View style={styles.callContainer}>
            <Image source={item.photos} style={styles.image}/>
            <View style={styles.callIconContainer}>
              <View>
                <Text style={styles.callName}>{item.name}</Text>
                <View style={styles.callDetails}>
                  <MaterialCommunityIcons name="call-received" size={15} color='#075e54' />
                  <Text style={styles.callTime}>{item.time}</Text>
                </View>
              </View>
            </View>

              <TouchableOpacity>
                <MaterialIcons name='call' size={22} color='#075e54' />
              </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
            style={styles.callButton}
            onPress={() => ('#')}
            >
        <MaterialIcons name='add-call' size={22} color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    callContainer:{
      flexDirection:'row',
      alignItems:'center',
      padding:16
    },
    linkContainer:{
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor:'#128c7e',
      alignItems:'center',
      justifyContent:'center',
      marginRight:16,
    },
    callLink:{
      fontSize:16,
      fontWeight:'600'
    },
    subtext:{
      fontSize:14,
      color:'grey'
    },
    recentText:{
      fontSize:15,
      fontWeight:'600',
      color:'grey',
      marginVertical:10,
      marginLeft:16
    },
    image:{
      width:50,
      height:50,
      borderRadius:25,
      marginRight:16,
      objectFit:'contain'
    },
    callName:{
      fontSize:16,
      fontWeight:'600'
    },
    callDetails:{
      flexDirection:'row',
      alignItems:'center',
    },
    callTime:{
      fontSize:14,
      color:'grey',
      marginLeft:5
    },
    callIconContainer:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    callButton:{
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
  