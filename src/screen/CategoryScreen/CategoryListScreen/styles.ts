import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00a6fb',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        marginBottom: 100
    },
    titleTopBox: {
        maxWidth: width * 0.95,
        height: (width * 0.425) * 2 / 3,
        marginTop: height * 0.05,
        marginBottom: height * 0.025,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 15,
        backgroundColor: '#fff',
        elevation: 10
    },
    titleBottomBox: {
        width: '98%',
        height: '94%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: '#212529',
    },
    titleText: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
        letterSpacing: 1
    },
    btn: {
        width: width * 0.9,
        height: height * 0.15,
        backgroundColor: '#000814',
        marginTop: 20,
        borderRadius: 10,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    image: {
        width: '97%',
        height: '92%',
        borderWidth: 3,
        borderColor: '#fff',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5
    },
    leftChain: {
        position: 'absolute',
        left: '20%',
        bottom: -20,
        transform: [
            { rotate: '45deg' }
        ]
    },
    rightChain: {
        position: 'absolute',
        right: '20%',
        bottom: -20,
        transform: [
            { rotate: '45deg' }
        ]
    },
    btnBox: {
        minWidth: '80%',
        height: 45,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        marginVertical : 30
    },
    btnText: {
        fontSize: 20,
        fontWeight: '500',
    },
    logoutText: {
        fontSize: 25,
        fontWeight: '700',
        color: '#000814',
        marginBottom: 20,
        letterSpacing: 2
    }
})