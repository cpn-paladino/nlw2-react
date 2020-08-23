import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#8257E5',        
        padding: 40,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color:'#FFF',
        fontSize: 24,
        lineHeight: 32,
        marginVertical: 40
    },
    
    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
        fontWeight: 'bold'
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button:{
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    
    buttonPrimary:{
        backgroundColor: '#9871f5'
    },

    buttonSecondary:{
        backgroundColor: '#04d361'
    },

    buttonText:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
    },

    totalConnections:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    }
});

export default styles;