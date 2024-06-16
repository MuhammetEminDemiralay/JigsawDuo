import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',

    },
    container: {
        width: width * 0.9,
        minHeight: height * 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: '#fff'
    },
    btn: {
        width: width * 0.20,
        height: width * 0.20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    icon: {
        position: 'absolute'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    header: {
        width: width * 0.9,
        height: 120,
        marginTop: 50,
        marginBottom: 15,
        backgroundColor: '#333533',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#fff'
    },
    categoryName: {
        width: width * 0.35,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionName: {
        width: width * 0.30,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    confirmBtn: {
        width: width * 0.25,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmIcon: {
        width: 50,
        height: 50,
        borderWidth: 1
    },
    optionText: {
        fontSize: 20,
        fontWeight: '600'
    }
})