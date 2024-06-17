import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor : '#d3d3d3'
    },
    container: {
        width: width * 0.9,
        minHeight: height * 1,
    },
    imageBox: {
        width: width * 0.9,
        height: width * 0.9,
        marginVertical: 20
    },
    image: {
        width: '100%',
        height: '100%',
    },
    folderBtn: {
        width: width * 0.25,
        height: width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    icon: {
        position: 'absolute',
    },
    text: {
        fontSize: 22,
        fontWeight: '500',
        color: '#fff',
    },
})