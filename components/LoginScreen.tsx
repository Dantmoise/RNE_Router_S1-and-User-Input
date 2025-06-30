import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="E-mail or Phone number"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

 
    <Text style={styles.orText}>OR</Text>





 <Pressable style={styles.button2} onPress={handleLogin}>
        <Text style={styles.buttonText2}>Login With Facebook</Text>
      </Pressable>



    </View>




  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
  alignSelf: 'flex-start',
  marginTop: 1,
  color: '#FF6984',
   
  },


  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: '#FF6984',
    paddingVertical: 14,
    borderRadius: 8,
  },
 button2: {
    backgroundColor: '#2e86de',
    paddingVertical: 14,
    borderRadius: 8,
 },


  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
buttonText2: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,

},
orText: {
  textAlign: 'center',
  marginVertical: 12,
  fontSize: 16,
  color: '#666',
  fontWeight: '500',
},



});