import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'skyblue',
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
    box: {
        width: width * 0.425, height: width * 0.425
    },
    imageBox: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    }
}) 