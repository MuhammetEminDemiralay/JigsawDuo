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
        flexDirection: 'row',
        columnGap: 15
    },
    titleText: {
        fontSize: 25,
        fontWeight: '700',
        color: '#fff',
        letterSpacing: 1,
        marginHorizontal: 5
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
    star: {
        position: 'absolute',
    },
    star1: {
        left: 30
    },
    star2: {
        left: 60
    },
    star3: {
        left: 100
    },
    star4: {
        right: 30
    },
    star5: {
        right: 60
    },
    star6: {
        right: 100
    }
})