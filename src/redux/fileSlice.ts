import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storage } from "../../firebaseConfig";
import { list, ref, uploadBytesResumable } from "firebase/storage";
import RNFS from 'react-native-fs';
import { PERMISSIONS, check, request, } from "react-native-permissions";
import { PermissionsAndroid } from "react-native";



export const addFile = createAsyncThunk("add/file", async (dosya: any) => {

  console.log(dosya.uri);
  

});




export const fileSlice = createSlice({
  name: 'file',
  initialState: null,
  reducers: {

  },
  extraReducers: (builder) => {

  }

})


export default fileSlice.reducer