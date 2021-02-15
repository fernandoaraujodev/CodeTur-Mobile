//Libs
import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Pages
import ContaServico from '../../../services/contaServico';

const Login = ({navigation}) => {

    const salvar = async (value) => {
        await AsyncStorage.setItem('@jwt-codetur-mobile', value);
    }

    const signinValidationSchema = Yup.object().shape({
        email: Yup.string()
          .email('Email inválido')         
          .required('Campo Email Obrigatório'),
        senha: Yup.string()
          .required('Campo Senha Obrigatório'),
      })


    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>CodeTur</Text>
            <Formik
            validationSchema={signinValidationSchema}
            initialValues={{
              email: '',
              senha: ''
            }}
            onSubmit={values => {
                ContaServico
                    .logar(values)
                    .then(resultado => {
                        if(resultado.data.sucesso){
                            salvar(resultado.data.data.token);
                            navigation.push('Autenticado');
                        } else {
                            alert(resultado.data.mensagem);
                        }
                    })
                    .catch(erro => {
                        
                    })
            }}
          >
            {({ handleSubmit, handleChange, isValid, values, isSubmitting, errors, touched }) => (
              <>

            <TextInput
                style={styles.input}
                value={values.email}
                onChange={handleChange('email')}
                name="email"
                placeholder="Digite seu email"
            />
            {errors.email  && touched.email ? (<Text style={styles.error}>{errors.email}</Text>) : null}

            <TextInput
                style={styles.input}
                value={values.senha}
                onChange={handleChange('senha')}
                name="senha"
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />
            {errors.senha  && touched.senha ? (<Text style={styles.error}>{errors.senha}</Text>) : null}
 
            <TouchableOpacity
                onPress={handleSubmit}
                style={styles.button}
                disabled={isSubmitting}
            >
                <Text style={styles.textButton} >ENTRAR</Text>
            </TouchableOpacity>
            </>
            )}
          </Formik>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1B19F5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input : {
        width: '90%',
        height: 40, 
        borderColor: '#04040D', 
        borderWidth: 1,
        marginTop : 20,
        padding: 5,
        backgroundColor : '#fff',
        borderRadius: 6
    },
    button : {
        backgroundColor : '#04040D',
        width: '90%',
        padding : 10,
        borderRadius: 6,
        marginTop : 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton : {
        color : 'white'
    },
    titulo : {
        fontSize : 48,
        color : 'white'
    },
    error : {
        textAlign : 'left',
        color : 'red'
    }
  });


export default Login;