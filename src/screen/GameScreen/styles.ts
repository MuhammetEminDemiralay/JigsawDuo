import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height * 1,
        backgroundColor: 'lime'
    },
    topBox: {
        width: '100%',
        height: (height * 0.175) - 60
    },
    mainBox: {
        width: '100%',
        height: (height * 0.65),
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arena: {
        width: width * 0.95,
        height: width * 0.95,
        borderWidth: 1
    },
    bottomBox: {
        width: '100%',
        height: (height * 0.175) - 60,
        padding : 5

    },
    banner: {
        width: '100%',
        height: 60,
        borderWidth: .5
    },

    pieceListContainer: {
        alignItems: 'center',
    },
    pieceColumnWrapper : {
        paddingHorizontal : 5
    },
    image: {
        width: ((height * 0.15) - 60) / 1,
        height: ((height * 0.15) - 60) / 1
    }

})