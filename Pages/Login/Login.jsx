import React, { useState } from 'react';
import { StatusBar ,TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './styles';
import { FirebaseSetup } from '../../firebase';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function Login(){
        try {
            const auth = getAuth(FirebaseSetup);
            await signInWithEmailAndPassword(auth, email, password)
            navigation.navigate('Home')
            setEmail('');
            setPassword('');
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <KeyboardAvoidingView
                behavior='padding'
                style={styles.container}
            >
                <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
                />
                <TouchableWithoutFeedback>
                    <View style={styles.conteudo}>
                        <View style={styles.logoContainer}>
                            <Image
                                    style={styles.logo}
                                    source={require('../../assets/images/lovetwin.png')}
                                />
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder={'Insira seu e-mail'}
                                placeholderTextColor={"#ff62a5"}
                                KeyboardAvoidingView="enable"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Insira sua senha'}
                                placeholderTextColor={"#ff62a5"}
                                KeyboardAvoidingView="enable"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={Login}
                        >
                            <Text style={styles.textoBotao}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}