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
        backgroundColor: '#fff'
    },
    topBox: {
        width: width * 1,
        height: height * 0.075,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center'
    },
    closeBtn: {
        position: 'absolute',
        right: 15,
    },
    box: {

    },
    imageBox: {
        width: width * 0.95,
        height: width * 0.95,
        marginVertical: width * 0.025,
        backgroundColor: '#212529',
        borderRadius: 15
    },
    image: {
        width: '97%',
        height: '97%',
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    optionBox: {
        width: width * 0.95,
        height: (height * 1) - ((width * 0.95) + (width * 0.05) + (height * 0.075)),
    },
    personBox: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 20
    },
    personBtn: {
        width: 55,
        height: 55,
        textAlign: 'center',
        verticalAlign: 'middle',
        borderRadius: 10,
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
        justifyContent: 'center'
    },
    difficultWrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    difficultIcon: {

    },
    difficultText: {
        position: 'absolute',
        fontSize: 12
    },
    startBox: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startBtnBox: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
    },
    startBtnText: {
        fontSize: 20,
        fontWeight: '500',
    }
})