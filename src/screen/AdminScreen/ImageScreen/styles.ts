import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#ef233c',

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
        height: '100%'
    },
    header: {
        width: width * 0.9,
        height: 100,
        marginTop: 50,
        marginBottom: 15,
        backgroundColor: '#000814',
        borderRadius: 10,
        flexDirection: 'row'
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
    confirmBox: {
        width: width * 0.25,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmBtn: {
        width: width * 0.15,
        height: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    confirmIcon: {
        width: 50,
        height: 50,
        borderWidth: 1
    },
    optionText: {
        fontSize: 20,
        fontWeight: '600'
    },
    selectDoc: {
        width: width * 0.9,
        height: 75,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#000814'
    }
})