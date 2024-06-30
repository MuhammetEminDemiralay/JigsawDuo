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
        height: (height * 0.2) - 60
    },
    mainBox: {
        width: '100%',
        minHeight: (height * 0.6),
        backgroundColor: 'purple',
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
        height: (height * 0.2) - 60,
    },

    puzzleWrapper: {
        borderBottomWidth: 25,
        borderBottomColor: 'gray',
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

    right: {
        position: 'absolute',
        bottom: 0,
        right: 10
    },
    left: {
        position: 'absolute',
        bottom: 0,
        left: 10
    }
})