import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        padding: 0,
        width: width * 1,
    },
    modalBox: {
        width: width * 1,
        height: height * 1,
        alignItems: 'center',
        backgroundColor: '#00a6fb',
    },
    topBox: {
        width: width * 1,
        height: height * 0.075,
        flexDirection: 'row',
        alignItems: 'center'
    },
    closeBtn: {
        position: 'absolute',
        right: 15,
    },
    box: {
        width: width * 0.90,
        height: width * 0.90,
        marginVertical: width * 0.025,
        elevation: 10,
        backgroundColor: '#ef233c',
        borderRadius: 20
    },
    imageBox: {
        width: '98%',
        height: '98%',
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 10,
        borderBottomRightRadius: 15
    },
    image: {
        width: '98%',
        height: '98%',
        resizeMode: 'contain',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    optionBox: {
        width: width * 0.95,
        height: (height * 1) - ((width * 0.95) + (width * 0.05) + (height * 0.075)),
    },
    personBox: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 20,
    },
    personBtn: {
        width: 55,
        height: 55,
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    difficultBox: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    difficultList: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    difficultWrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    difficultIcon: {

    },
    difficultText: {
        position: 'absolute',
        fontWeight: '600'
    },
    startBox: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startBtnBox: {
        width: '90%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ef233c',
        borderWidth: 2,
        borderColor: '#fff'
    },
    startBtnText: {
        fontSize: 22,
        fontWeight: '500',
        color: '#fff'
    }
})