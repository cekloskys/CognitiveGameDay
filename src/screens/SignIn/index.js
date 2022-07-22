import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useMutation, gql, ApolloError, useQuery} from '@apollo/client';
import 'localstorage-polyfill';

const SIGN_IN = gql`
  mutation signInGame($signInGameId: String, $pass: String) {
    signInGame(id: $signInGameId, pass: $pass) {
      user {
        id
        name
      }
      token
    }
  }
`;

const SignInScreen = () => {
  const [id, setUserID] = useState('');
  const [pass, setPassword] = useState('');

  const navigation = useNavigation();

  const [signIn, {data, error, loading}] = useMutation(SIGN_IN);

  useEffect(() => {
    if (error) {
      Alert.alert('Invalid credentials, try again', error.message);
    }
  }, [error]);
  useEffect(() => {
    if (data) {
      // save token
      localStorage.setItem('token', data.signInGame.token);
      localStorage.setItem('Name', data.signInGame.user.name);
      navigation.navigate('Admin');
    }
  }, [data]);

  const onSubmit = async () => {
    if (!id || !pass) {
      Alert.alert('Invalid Input', 'User ID and Password are required!');
      return;
    }
    const input = {
      id,
      pass,
    };
    await signIn({variables: {signInGameId: id, pass: pass}}).catch(error =>
      console.log(error),
    );
  };

  return (
    <View style={{padding: 20}}>
      <TextInput
        placeholder="Enter User ID"
        placeholderTextColor="grey"
        value={id}
        autoCapitalize="none"
        onChangeText={setUserID}
        style={{
          color: 'black',
          fontSize: 16,
          width: '100%',
          marginVertical: 15,
          borderColor: 'lightgrey',
          borderBottomWidth: 1.0,
        }}
      />
      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="grey"
        value={pass}
        autoCapitalize="none"
        onChangeText={setPassword}
        secureTextEntry
        style={{
          color: 'black',
          fontSize: 16,
          width: '100%',
          marginVertical: 15,
          borderColor: 'lightgrey',
          borderBottomWidth: 1.0,
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
        }}>
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
  );
};

export default SignInScreen;
