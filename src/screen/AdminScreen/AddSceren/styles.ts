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
    header: {
        width: width * 0.9,
        height: 120,
        marginTop: 50,
        marginBottom: 15,
        backgroundColor: '#333533',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: '500',
        color: '#fff',
    },
    folderBtn: {
        width: width * 0.25,
        height: width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
    },
    confirmBtn: {
        width: width * 0.9,
        height: height * 0.08,
        borderWidth: 2,
        borderColor : '#fff',
        marginTop: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})