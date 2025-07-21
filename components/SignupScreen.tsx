import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = () => {
    if (!fullname.trim() || !phonenumber.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Signup logic here...
    console.log('Signing up with:', email, password);

    setSubmitted(true); // Show submitted details
  };

  const handleClear = () => {
    setFullname('');
    setPhonenumber('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSubmitted(false);
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
        keyboardType="phone-pad"
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

      <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
        <Text style={styles.buttonText}>Clear</Text>
      </Pressable>

      {submitted && (
        <View style={styles.submittedInfo}>
          <Text style={styles.submittedTitle}>Submitted Information:</Text>
          <Text>Full Name: {fullname}</Text>
          <Text>Phone Number: {phonenumber}</Text>
          <Text>Email: {email}</Text>
        </View>
      )}
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
    marginTop: 10,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#aaa',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  submittedInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  submittedTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
});
