import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 6
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 20,
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 5,
    },
    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 10,
    },
    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },
    heroDescription:{
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },
    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    action:{
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});