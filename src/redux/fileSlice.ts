import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytesResumable } from "firebase/storage";



export const addFile = createAsyncThunk("add/file", async (assets: any) => {
  try {

    for (let asset of assets) {
      let docRef = ref(storage, `file/${asset.fileName}`)
      const response = await fetch(`${asset.uri}`)
      const blob = await response.blob()
      await uploadBytesResumable(docRef, blob)
    }

  } catch (error) {
    throw error
  }

});

type Model = {
  main: any;
  mainSize: number;
  one: any[];
  oneSize: number;
  two: any[];
  twoSize: number;
  three: any[];
  threeSize: number;
  four: any[];
  fourSize: number;
  five: any[];
  fiveSize: number;
  six: any[];
  sixSize: number;
}

const initialState: Model = {
  main: '',
  mainSize: 0,
  one: [],
  oneSize: 0,
  two: [],
  twoSize: 0,
  three: [],
  threeSize: 0,
  four: [],
  fourSize: 0,
  five: [],
  fiveSize: 0,
  six: [],
  sixSize: 0
}

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    main0: (state, action) => {
      state.main = action.payload;
      state.mainSize = action.payload.length;
    },
    one36: (state, action) => {
      state.one = action.payload;
      state.oneSize = action.payload.length;

    },
    two64: (state, action) => {
      state.two = action.payload;
      state.twoSize = action.payload.length;

    },
    three100: (state, action) => {
      state.three = action.payload;
      state.threeSize = action.payload.length;

    },
    four144: (state, action) => {
      state.four = action.payload;
      state.fourSize = action.payload.length;

    },
    five225: (state, action) => {
      state.five = action.payload;
      state.fiveSize = action.payload.length;
    },
    six400: (state, action) => {
      state.six = action.payload;
      state.sixSize = action.payload.length;
    }
  },
  extraReducers: (builder) => {

  }

})


export default fileSlice.reducer
export const { main0, one36, two64, three100, four144, five225, six400 } = fileSlice.actions