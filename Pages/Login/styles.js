import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffede6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },

    texto: {
            color: '#fff',
    },

    conteudo: {
        paddingVertical: 150,
    },

    logoContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },

    input: {
        borderWidth: 2,
        borderColor: '#1a8fff',
        paddingHorizontal: 12,
        paddingVertical: 10,
        color: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        width: 200,
        color: '#ff7e93'
    },

    botao: {
        backgroundColor: '#1a8fff',
        paddingVertical: 10,
        borderRadius: 20,
        
    },

    textoBotao: {
        color: '#ff7e93',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    textoMenor: {
        fontSize: 9,
        color: '#D8BFD8',
        alignSelf: 'center',
        marginTop: 10
    }
})

export default styles;