import React from 'react';
import { useEffect } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native'
 
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#F7F7F7',
        marginTop : 60
    },
    listItem : {
        margin : 10,
        padding:10,
        backgroundColor : '#FFF',
        width : '80%',
        flex : 1,
        alignSelf : 'center',
        flexDirection : 'row',
        borderRadius : 5
    }
});
 
const ItemPacote = ({pacote, navigation}) => {
  
    return (
        <View style={styles.listItem}>
            <Image 
                source={{uri : pacote.imagem}} 
                style={{width :60, height : 60, borderRadius :30}}
            />
            <View style={{alignItems : 'center', flex :1}}>
                <Text style={{fontWeight : 'bold', marginLeft : '20px'}}>{pacote.titulo}</Text>
            </View>
            <TouchableOpacity 
                onPress={() => navigation.push('DetalhesPacote',{
                    pacote : pacote
                })}
                style={{height:50, 
                        width:50, 
                        justifyContent: 'center', 
                        alignItems :'center'}}>
                <Text style={{color: 'red'}}>Ver</Text>
            </TouchableOpacity>
        </View>
    )
}
 
export default ItemPacote;