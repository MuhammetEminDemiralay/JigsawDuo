import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        alignItems : 'center',
        backgroundColor: 'skyblue',

    },
    container: {
        width: width * 0.9,
        minHeight: height * 1,
    },
    header: {
        width: width * 0.9,
        height: 100,
        borderWidth: 1,
        marginTop: 50,
        marginBottom: 25
    },
    text: {
        fontSize: 22,
        fontWeight: '500',
    },
    btn: {
        width: width * 0.25,
        height: width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        flexDirection : 'row'
    },
    icon : {
        position : 'absolute'
    }
})