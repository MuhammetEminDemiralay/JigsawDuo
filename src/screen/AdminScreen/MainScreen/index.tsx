import React, { useState } from 'react'
import { Button, FlatList, Image, Platform, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import DocumentPicker from 'react-native-document-picker'
import RNFS from 'react-native-fs';
import { useDispatch } from 'react-redux';
import { storage } from '../../../../firebaseConfig';
import { ref, uploadString, getBlob, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { addFile } from '../../../redux/fileSlice';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {


  const [files, setFiles] = useState<any>('');
  const dispatch: any = useDispatch();





  const data = ['Hayvan', 'Bitki', 'Eşya', 'Nesne', 'Kuş', 'Böcek']
  const navigation: any = useNavigation();

  return (
    <FlatList
      data={data}

      ListHeaderComponent={() => (
        <View>

        </View>
      )}
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => navigation.navigate('option', item)} style={styles.btn} key={index}>
          <Text style={styles.text}>{item}</Text>
        </Pressable>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default MainScreen
