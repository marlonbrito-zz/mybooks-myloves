
import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text, Animated } from 'react-native';
import logo from "./assets/images/logo.svg"


export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }))
  const [opacity] = useState(new Animated.Value(0))
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
    ]).start();
  }, [])
  function validate() {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(mail) === false) {
      alert("Email invalido");
      handleSubmit
      return false;
    }
    else {
      handleSubmit()

    }
  }
  function handleSubmit() {
    if (mail === null || mail === undefined || mail === '' || mail === ' ') {
      alert('Informe um e-mail valido!')
    } else {
      if (pass === null || pass === undefined || pass === '' || pass === ' ') {
        alert('Informe Sua senha!')
      } else {
        if (pass.length < 6) {
          alert('Senha inválida!')
        } else {
          //chama login
          alert(mail)
        }
      }
    }
  }
  async function login(mail, pass) {
    const response = await api.get('/login', {
      params: {
        mail,
        pass,
      }
    });
    if(response.data.name === null || response.data.name === undefined){
      //chama cadastro
      alert('Primeiro realize seu cadastro!')
    }else{
      
    }
  }
  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
        <Text style={styles.textLogo}>My books</Text>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textLogo}>My Loves</Text>
      </View>

      <Animated.View
        style={[styles.container, {
          transform: [{
            translateY: offset.y
          }]
        }]}

      >

        <TextInput
          name='mail'
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          onChangeText={(text) => { setMail(text) }}
        />

        <TextInput
          name='pass'
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={(text) => { setPass(text) }}
        />

        <TouchableOpacity onPress={validate} style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>

  );
}



const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2B2C5'
  },
  containerLogo: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    resizeMode: 'contain'


  },
  textLogo: {
    color: '#EB5E76',
    fontSize: 51,
    fontFamily: 'RougeScript-Regular'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,

  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: '15',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    marginTop: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10

  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10,

  },
  registerText: {
    color: '#FFF'
  }
});

