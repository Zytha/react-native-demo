import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Linking } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Hello World</Text>
            <Button title="Homepage" color="#242424" onPress={ () => Linking.openURL('https://www.zytha.ml')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000',
    }
});
