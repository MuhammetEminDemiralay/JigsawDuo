import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        marginTop: 50
    },
    btn: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: '#2ec4b6',
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 22,
        fontWeight: '500',
        color: '#fff'
    }
})