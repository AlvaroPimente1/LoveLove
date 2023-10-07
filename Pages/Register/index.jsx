import React, { useState } from 'react';
import { StatusBar, TextInput, View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './styles';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { FirebaseSetup } from '../../services/firebase/firebase';
import getUserID from '../../services/firebase/userID';

export default function Register({ navigation }) {
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [error, setError] = useState('');

    const db = getFirestore(FirebaseSetup)

    async function handleSignUp(){
        try {
            const auth = getAuth(FirebaseSetup);
            await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "usuarios", getUserID()), {
                nome: nome,
                email: email,
            });
            Alert.alert('Concluído', 'Usuário criado com sucesso!')
            navigation.navigate('Login');
            setEmail('');
            setPassword('');
        } catch (e) {
            setError(e.message);
        }finally{
            await setDoc(doc(db, "usuarios", getUserID()), {
                nome: nome,
                email: email,
            });
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
                                placeholder={'Insira seu nome'}
                                placeholderTextColor={"#ff62a5"}
                                value={nome}
                                onChangeText={setNome}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Insira seu e-mail'}
                                placeholderTextColor={"#ff62a5"}
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={'Crie uma senha'}
                                placeholderTextColor={"#ff62a5"}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                            {error ? 
                            <View style={{ backgroundColor: '#ff0000', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 20 }}>
                                <Text style={{color: '#fff'}}>{error}</Text> 
                            </View>
                            
                            : null}
                        </View>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={handleSignUp}
                        >
                            <Text style={styles.textoBotao}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.textoMenor}>Já tem conta? Faça Login</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
