import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 1,
        backgroundColor: '#fdffff',
        position: 'relative'
    },
    topBox: {
        width: '100%',
        minHeight: (height * 0.17) - 60,
        maxHeight: (height * 0.17) - 60,
    },
    mainBox: {
        width: '100%',
        minHeight: (height * 0.6),
        maxHeight: (height * 0.6),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arena: {
        width: width * 0.95,
        height: width * 0.95,
        backgroundColor: 'lightgray',
        position: 'absolute',
        top: (height * 0.5) - (width * 0.475),
        left: width * 0.0275,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomBox: {
        width: '100%',
        minHeight: (height * 0.17) - 60,
        maxHeight: (height * 0.17) - 60,
    },
    topPuzzleWrapper: {
        paddingHorizontal: 5,
        height: '100%',
        justifyContent: 'center'
    },
    bottomPuzzleWrapper: {
        paddingHorizontal: 5,
        height: '100%',
        justifyContent: 'center',
    },
    banner: {
        width: '100%',
        height: 60,
    },
    pieceListContainer: {
    },
    pieceColumnWrapper: {
        paddingHorizontal: 5,
    },

    image: {
        width: ((height * 0.15) - 60),
        height: ((height * 0.15) - 60),
        resizeMode: 'contain',
    },
    topRight: {
        position: 'absolute',
        top: 0,
        right: 10
    },
    topLeft: {
        position: 'absolute',
        top: 0,
        left: 10
    },
    bottomRight: {
        position: 'absolute',
        bottom: 0,
        right: 10
    },
    bottomLeft: {
        position: 'absolute',
        bottom: 0,
        left: 10
    },
    handBox: {
        width: '100%',
        height: width * 0.06,
        justifyContent: 'center',
    },
    hand: {
        width: width * 0.06,
        height: width * 0.06,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff'
    },
    infoBox: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    toggleBox: {
        position: 'absolute',
        right: 40,
        top: 10,
    }

})