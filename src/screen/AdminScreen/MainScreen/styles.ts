import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: height * 1,
        backgroundColor: 'red',
        alignItems: 'center',
    },
    header: {
        width: width * 0.9,
        height: 100,
        borderWidth: 1,
        marginTop: 50,
        marginBottom: 25
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
    btn: {
        width: width * 0.9,
        height: 50,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    }
})