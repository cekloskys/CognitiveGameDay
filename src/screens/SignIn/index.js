import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useMutation, gql, ApolloError, useQuery } from '@apollo/client';
import 'localstorage-polyfill'; 


const SIGN_IN = gql`
mutation signIn($id: String!, $pass: String!) {
  signIn(input: {id: $id, pass: $pass}) {
    user {
      id
      name
    }
    token
  }
}
`;


const SignInScreen = () => {

  const [id, setUserID] = useState('')
  const [pass, setPassword] = useState('')

  const navigation = useNavigation();

  const [signIn, { data, error, loading }] = useMutation(SIGN_IN);

  useEffect(() => {
    if (error) {
        console.log(error);
        Alert.alert( 'Invalid credentials, try again',error.message);
    }
  }, [error])

  if (data) {
    // save token
    localStorage.setItem('token', data.signIn.token)
    localStorage.setItem('Name', data.signIn.user.name)
    navigation.navigate('Admin')
    
  }

  const onSubmit = async () => {
    const input = {
        id,
        pass
    } 
    await signIn({ variables: { id: id, pass: pass }}).catch((error) => console.log(error))
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput 
        placeholder="User ID"
        value={id}
        onChangeText={setUserID}
        style={{
          color: 'black',
          fontSize: 18,
          width: '100%',
          marginVertical: 25, 
        }}
      />

      <TextInput 
        placeholder="Password"
        value={pass}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          color: 'black',
          fontSize: 18,
          width: '100%',
          marginVertical: 25, 
        }}
      />
      <Pressable 
        onPress={onSubmit} 
        disabled={loading}
        style={{ 
          backgroundColor: 'black',
          height: 50,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          width: '90%',
        }}
      >
        <Text 
          style={{
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
            Sign In
        </Text>
      </Pressable>

    </View>
  )
}

export default SignInScreen