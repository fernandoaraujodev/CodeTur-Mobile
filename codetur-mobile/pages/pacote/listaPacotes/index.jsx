import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList,  Image } from 'react-native';
import PacoteServico from '../../../services/pacoteServico';
import ItemPacote from '../../../components/itemPacote';
 
const ListaPacotes = ({navigation}) => {
    const [pacotes, setPacotes] = useState([]);
 
    useEffect(() => {
        listarPacotes();
    },[])
 
    const listarPacotes = () => {
        PacoteServico
                .listar()
                .then(resultado => {
                    setPacotes(resultado.data.data);
                    console.log(resultado.data.data);
                })
                .catch(err => console.error(err));
    }
 
    const renderItem = (pacote) => {
        return (
           <ItemPacote 
                pacote={pacote.item}
                navigation={navigation} />
        )
    }
 
    return(
        <View style={styles.container}>
            <Text>Listar Pacotes</Text>
 
            {/* <Image
                style={styles.logo}
                source={{
                    uri: 'https://raw.githubusercontent.com/sena-code/React-Node/main/4%20-%20Trabalhando%20com%20react-bootstrap%20e%20react-router-dom/nyous-react/src/assets/img/Logo.svg',
                }}
            /> */}
            <FlatList
                data={pacotes}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo : {
        width: 200,
        height: 200,
    }
  });

  export default ListaPacotes;