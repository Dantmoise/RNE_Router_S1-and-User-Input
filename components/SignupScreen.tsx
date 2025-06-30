import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const SignupScreen: React.FC = () => {
const [fullname,setFullname]= useState('');
const [phonenumber,setPhonenumber]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Add your signup logic here
    console.log('Signing up with:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new account</Text>

 <TextInput
        placeholder="Full Name"
        value={fullname}
        onChangeText={setFullname}
        style={styles.input}
      
      />

<TextInput
        placeholder="Phone Number"
        value={phonenumber}
        onChangeText={setPhonenumber}
        style={styles.input}
       
      />



      <TextInput
        placeholder="Email"
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

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

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
    textAlign: 'left',
    fontWeight: 'bold',
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});