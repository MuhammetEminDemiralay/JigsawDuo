import React, { useState } from 'react'
import { Dimensions, FlatList, Image, ImageStyle, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { setGameMode, setGameOption, setGamePerson } from '../../redux/fileSlice';

const Modal = ({ isVisible, setVisible, item }: any) => {

    const difficultData = ['36', '64', '100', '144', '225', '400']
    const pieceData = ['classic', 'square', 'stick']

    const [personOption, setPersonOption] = useState('1');
    const [difficultOption, setDifficultOption] = useState('36')
    const [piece, setPiece] = useState('classic')
    const dispatch: any = useDispatch();


    const startGame = () => {
        const path = `${item.fullPath}/${difficultOption}`
        dispatch(setGamePerson(personOption))
        dispatch(setGameOption(path))
        dispatch(setGameMode(true))
    }



    return (
        <ReactNativeModal
            isVisible={isVisible}
            coverScreen={true}
            hasBackdrop={false}
            style={styles.modalContainer}
            animationIn={'jello'}
        >
            {/* Üst kısım */}
            <View style={styles.modalBox}>
                <View style={styles.topBox}>
                    <AntDesign
                        style={styles.closeBtn}
                        name="closecircle"
                        size={30}
                        color="#fff"
                        onPress={() => {
                            setVisible(false);
                        }}
                    />
                </View>

                {/* Resim */}
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={{ uri: item.downloadData }} />
                </View>

                {/* Seçenekler */}
                <View style={styles.optionBox}>

                    {/* Tek-İki kişilik */}
                    <View style={styles.personBox}>
                        <Entypo
                            style={[{ backgroundColor: personOption == '1' ? 'orange' : '#fff' }, styles.personBtn]}
                            name="user" size={24} color="black"
                            onPress={() => setPersonOption('1')}
                        />
                        <Entypo
                            style={[{ backgroundColor: personOption == '2' ? 'orange' : '#fff' }, styles.personBtn]}
                            name="users" size={24} color="black"
                            onPress={() => setPersonOption("2")}
                        />
                    </View>

                    {/* Zorluk seviyesi */}
                    <View style={styles.difficultBox}>
                        <FlatList
                            data={difficultData}
                            renderItem={({ item, index }) => (
                                <View style={styles.difficultWrapper}>
                                    <Ionicons
                                        style={styles.difficultIcon}
                                        name="extension-puzzle"
                                        size={50}
                                        color={difficultOption == item ? 'lime' : 'black'}
                                        onPress={() => setDifficultOption(item)}
                                    />
                                    <Text style={[{ color: difficultOption == item ? 'black' : '#fff' }, styles.difficultText]}>{item}</Text>
                                </View>
                            )}
                            horizontal
                            contentContainerStyle={styles.difficultList}
                        />
                    </View>

                    <View style={styles.pieceBox}>
                        <FlatList
                            data={pieceData}
                            renderItem={({ item, index }) => (
                                <Pressable
                                    style={[{ backgroundColor: piece == item ? 'red' : 'skyblue' }, styles.pieceWrapper]}
                                    onPress={() => setPiece(item)}
                                    key={index}
                                >
                                    <Text>{item}</Text>
                                    {
                                        item == 'classic' &&
                                        <MaterialCommunityIcons
                                            name="puzzle-outline" size={28} color="black"
                                        />
                                    }
                                    {
                                        item == 'square' &&
                                        <FontAwesome6
                                            name="square" size={24} color="black"

                                        />
                                    }
                                    {
                                        item == 'stick' &&
                                        <AntDesign
                                            name="minus" size={24} color="black"
                                        />
                                    }
                                </Pressable>
                            )}
                            horizontal
                            contentContainerStyle={styles.pieceList}
                        />
                    </View>

                    <View style={styles.startBox}>
                        <Pressable onPress={() => startGame()} style={styles.startBtnBox}>
                            <Text style={styles.startBtnText}>Start</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </ReactNativeModal>
    )
}

export default Modal


