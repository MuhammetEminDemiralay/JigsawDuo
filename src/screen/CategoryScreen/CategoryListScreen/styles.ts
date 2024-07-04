import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ef233c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        paddingVertical: 25
    },
    titleTopBox: {
        maxWidth: width * 0.95,
        height: (width * 0.425) * 2 / 3,
        marginTop: height * 0.05,
        marginBottom: height * 0.025,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
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
        fontWeight: '500',
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
    }
})