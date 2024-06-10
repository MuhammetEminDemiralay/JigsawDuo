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
        backgroundColor: 'red',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center'
    },
    closeBtn: {
        position: 'absolute',
        right: 20,
    },

    imageBox: {
        width: width * 0.95,
        height: width * 0.95,
        marginVertical: width * 0.025,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
    },

    optionBox: {
        width: width * 0.95,
        height: (height * 1) - ((width * 0.95) + (width * 0.05) + (height * 0.075)),
    },

    personBox: {
        width: '100%',
        height: '20%',
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10
    },
    personBtn: {
        width: 50,
        height: 50,
        textAlign: 'center',
        verticalAlign: 'middle',
        borderRadius: 50,
        elevation: 5
    },
    difficultBox: {
        width: '100%',
        height: '20%',
        borderWidth: 0.5,
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


    pieceBox: {
        width: '100%',
        height: '20%',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pieceWrapper: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width : 75
    },
    pieceList: {

    },
    pieceText: {

    },


    turnPieceBox: {
        width: '100%',
        height: '20%',
        borderWidth: 0.5
    },
    startBox: {
        width: '100%',
        height: '20%',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startBtnBox: {
        width: width * 0.7,
        height: '60%',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        elevation: 2
    },
    startBtnText: {
        fontSize: 20,
        fontWeight: '500',
    }


    // kutu : {
    //     width : (width * 0.95)/15,
    //     height : (width * 0.95)/15,
    //     borderWidth : 0.2 
    // },
    // text : {
    //     fontSize : 8
    // }
})