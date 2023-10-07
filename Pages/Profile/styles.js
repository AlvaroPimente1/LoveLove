import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffede6',
        justifyContent: 'flex-start'
    },

    texto: {
        fontSize: 18,
        marginBottom: 15,
        color: '#F5F5F5',
        fontWeight: 'bold',
    },

    usuarioConteiner: {
        paddingHorizontal: 8,
        backgroundColor: '#ff7e93',
        paddingVertical: 8,
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoFoto: {
        flexDirection: 'row',
        backgroundColor: '#1a8fff',
        paddingHorizontal: 15,
        paddingVertical: 2,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10
    },

    logoCamera: {
        width: 35,
        height: 35,
        marginHorizontal: 4
    },

    imagem: {
        width: 200,
        height: 200
    },

    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#ff7e93"
    },
    
    imagemConteiner: {
        paddingVertical: 20,
        backgroundColor: "#1a8fff",
        paddingHorizontal: 100,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomWidth: 1,
        borderColor: '#ff7e93'
    }, 
})

export default styles;