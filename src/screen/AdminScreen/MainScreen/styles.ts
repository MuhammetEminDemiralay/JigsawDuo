import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: height * 1,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
    },
    header: {
        width: width * 0.9,
        backgroundColor: '#333533',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: '#fff'
    },
    btn: {
        width: width * 0.9,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10
    },
    selectBox: {
        width: width * 0.45,
        height: '100%',
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 15
    },
    puzzleType: {
        width: width * 0.9,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#fff',
    },
    puzzleTypeBtn: {
        width: width * 0.3,
        height: '100%',
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBox: {
        minWidth: '80%',
        marginTop : 20,
        height: 45,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    btnText: {
        fontSize: 20,
        fontWeight: '500',
    },
    logoutText: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 20,
        letterSpacing: 2
    }
})