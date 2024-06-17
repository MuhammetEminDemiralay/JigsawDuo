import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        minHeight: '100%',
        backgroundColor: '#d3d3d3',
        alignItems: 'center'
    },
    container: {
        width: width * 0.9,
        minHeight: height * 1,
    },
    header: {
        width: width * 0.9,
        height: 120,
        marginTop: 50,
        marginBottom: 15,
        backgroundColor: '#333533',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: '#fff'
    },
    puzzleBox: {
        width: width * 0.2,
        height: width * 0.2,
        marginTop: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})