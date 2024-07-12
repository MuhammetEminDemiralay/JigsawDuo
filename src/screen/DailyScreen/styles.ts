import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")


export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#00a6fb',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: width * 0.9, minHeight: height * 0.925
    },
    columnWrapper: {
        justifyContent: 'space-between', marginVertical: width * 0.025
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
    box: {
        borderRadius: 10,
        backgroundColor: '#212529',
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        width: width * 0.425,
        height: width * 0.425
    },
    imageBox: {
        width: '97%',
        height: '97%',
        borderWidth: 3,
        borderColor: '#fff',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },
    // dayBox: {
    //     position: 'absolute',
    //     right: 12,
    //     top: 8,
    //     width: (width * 0.425) / 5.5,
    //     height: (width * 0.425) / 5.5,
    //     backgroundColor: '#ef233c',
    //     zIndex: 2,
    //     borderRadius : 50,
    //     elevation : 2,
    //     alignItems : 'center',
    //     justifyContent : 'center',
    //     borderWidth : 1,
    //     borderColor : '#fff'
    // },
    // dayText : {
    //     fontWeight : '500',
    //     fontSize : 16,
    //     color : '#fff'
    // }
})