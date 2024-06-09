import React from 'react'
import { Dimensions, SafeAreaView, Text, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import AntDesign from '@expo/vector-icons/AntDesign';

const { width, height } = Dimensions.get("window")

const Modal = ({ isVisible }: any) => {
    return (



        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <ReactNativeModal
                isVisible={isVisible}
                coverScreen={true}
                hasBackdrop={false}
                style={{ flex: 1, alignItems : 'center', justifyContent : 'center' }}

            >
                <View style={{ minWidth: width * 1, minHeight: height * 1, backgroundColor: 'orange' }}>
                </View>
            </ReactNativeModal>
        </View>
    )
}

export default Modal
