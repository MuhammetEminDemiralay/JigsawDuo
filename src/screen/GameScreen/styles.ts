import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 1,
        backgroundColor: 'white',
        position: 'relative'
    },
    topBox: {
        width: '100%',
        minHeight: (height * 0.2) - 60,
        maxHeight: (height * 0.2) - 60,
    },
    mainBox: {
        width: '100%',
        minHeight: (height * 0.6),
        maxHeight: (height * 0.6),
        backgroundColor: '#2a9d8f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arena: {
        width: width * 0.95,
        height: width * 0.95,
        backgroundColor: 'lightgray',
        position: 'absolute',
        top: (height * 0.5) - (width * 0.475),
        left: width * 0.0275
    },
    bottomBox: {
        width: '100%',
        minHeight: (height * 0.2) - 60,
        maxHeight: (height * 0.2) - 60,
    },
    topPuzzleWrapper: {
        borderTopWidth: 25,
        borderColor: '#e9c46a',
        paddingTop: 5,
        paddingHorizontal: 5,
        height: '100%',
        justifyContent: 'center'
    },
    bottomPuzzleWrapper: {
        borderBottomWidth: 25,
        borderBottomColor: '#e9c46a',
        paddingBottom: 5,
        paddingHorizontal: 5,
        height: '100%',
        justifyContent: 'center'
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
        width: ((height * 0.15) - 60) / 1,
        height: ((height * 0.15) - 60) / 1,
        resizeMode: 'contain'
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
    }
})