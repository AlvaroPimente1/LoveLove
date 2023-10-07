import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles";
import getUserID from "../../services/firebase/userID";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { FirebaseSetup } from '../../services/firebase/firebase';
import * as Clipboard from 'expo-clipboard';

export default function Profile(){
    const db = getFirestore(FirebaseSetup);
    const [usuario, setUsuario] = useState(null);
    
    // Suponhamos que você já tenha o userId da forma que desejar.
    const userId = getUserID();  
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRef = doc(db, "usuarios", userId);  // Ajuste de acordo com a estrutura do seu banco de dados.
                const userSnap = await getDoc(userRef);
                
                if (userSnap.exists()) {
                    setUsuario(userSnap.data());
                } else {
                    console.log("No user found");
                }
            } catch (error) {
                console.error("Error fetching user", error);
            }
        };
        
        fetchData();
    }, [db]); 

    const copyToClipboard = () => {
        Clipboard.setString(userId);
        Alert.alert('ID copiada para área de transferência')
    };

    return(
        <SafeAreaView style={styles.conteiner}>
            <View style={styles.imagemConteiner}>
                <Image style={styles.image} source={require('../../assets/images/lovetwin.png')} />
            </View>
            <View style={styles.botaoFoto}>
                <TouchableOpacity>
                    <Image style={styles.logoCamera} source={require('../../assets/images/camera.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.logoCamera} source={require('../../assets/images/removeImagem.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.usuarioConteiner}>
                {usuario && <Text style={styles.texto}>Nome: {usuario.nome}</Text>}
                {usuario && <Text style={styles.texto}>E-mail: {usuario.email}</Text>}
                {usuario && <Text style={styles.texto}>Seu ID: {userId}</Text>}
            </View>
            <TouchableOpacity onPress={copyToClipboard}>
                <Text style={styles.buttonText}>Copiar ID</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}