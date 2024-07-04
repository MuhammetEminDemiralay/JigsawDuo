import React, { useState } from 'react'
import { Dimensions, FlatList, Image, ImageStyle, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { setGameMode, setGameOption, setGamePerson } from '../../redux/fileSlice';
import { LinearGradient } from 'expo-linear-gradient';

const Modal = ({ isVisible, setVisible, item }: any) => {

    const difficultData = ['36', '64', '100', '144', '225', '400']

    const [personOption, setPersonOption] = useState<string>('1');
    const [difficultOption, setDifficultOption] = useState('36')
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
            <LinearGradient style={styles.modalBox}
                colors={["#96ffc5", "#0086ff", "#00fff3"]}
            >
                <View style={styles.topBox}>
                    <AntDesign
                        style={styles.closeBtn}
                        name="closecircle"
                        size={30}
                        color="#000814"
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
                                style={[{
                                    backgroundColor: personOption == '1' ? '#ef233c' : '#fff',
                                    transform: personOption == '1' ?
                                        [{ scale: 1.25 }]
                                        : [{ scaleX: 1 }]
                                },
                                styles.personBtn
                                ]}
                                name="user" size={30}
                                color={personOption == '1' ? '#fff' : '#000814'}
                                onPress={() => setPersonOption('1')}
                            />
                            <Entypo
                                style={[{
                                    backgroundColor: personOption == '2' ? '#ef233c' : '#fff',
                                    transform: personOption == '2' ?
                                        [{ scale: 1.25 }]
                                        : [{ scaleX: 1 }]
                                },
                                styles.personBtn]}
                                name="users" size={30}
                                color={personOption == '2' ? '#fff' : '#000814'}
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

                    <View style={styles.startBox}>
                        <Pressable onPress={() => startGame()} style={styles.startBtnBox}>
                            <Text style={styles.startBtnText}>Start</Text>
                        </Pressable>
                    </View>
                </View>

            </LinearGradient>
        </ReactNativeModal>
    )
}

export default Modal


