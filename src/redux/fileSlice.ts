import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storage } from "../../firebaseConfig";
import { getDownloadURL, getMetadata, list, listAll, ref, uploadBytesResumable } from "firebase/storage";
import uuid from 'react-native-uuid'


export const addFile = createAsyncThunk("add/file", async (puzzleType: string, { getState }) => {
  try {

    const state: any = getState()

    const main = state.file.main;
    const one = state.file.one;
    const two = state.file.two;
    const three = state.file.three;
    const four = state.file.four;
    const five = state.file.five;
    const six = state.file.six;
    const category = state.file.category;



    const datas = [{ "main": main }, { "36": one }, { "64": two }, { "100": three }, { "144": four }, { "225": five }, { "400": six }]

    const id = uuid.v4();

    for (let data of datas) {
      let key = Object.keys(data)[0]
      let values = (data as { [key: string]: any })[key];

      for (let data of values) {

        let docRef = ref(storage, `${puzzleType}/${category}/${id}/${key}/${data.fileName}`)
        const response = await fetch(`${data.uri}`)
        const blob = await response.blob()
        await uploadBytesResumable(docRef, blob)
      }
    }

  } catch (error) {
    throw error
  }
});


export const getPuzzlesByCategory = createAsyncThunk('get/puzzlesByCategory', async (params: any, { getState, dispatch }) => {
  try {

    let puzzleType: any[];

    if (params.puzzleType != null) {
      puzzleType = [params.puzzleType]
    } else {
      puzzleType = ['file', 'genel', 'özel', 'günlük']
    }

    let datas: any[] = []
    for (let type of puzzleType) {
      const categoryRef = ref(storage, `${type}/${params.category}`)
      const puzzle = await list(categoryRef)
      for (let data of puzzle.prefixes) {
        const puzzleRef = ref(storage, `${data.fullPath}/main`)
        const puzzleData = await list(puzzleRef)

        let puzzleId = data.name;
        let fullPath = data.fullPath;

        for (let data of puzzleData.items) {
          const downloadRef = ref(storage, `${data.fullPath}`)
          const metaData = await getMetadata(downloadRef);
          const docCreatedTime = metaData.timeCreated;
          const downloadData = await getDownloadURL(downloadRef)
          datas.push({ id: puzzleId, downloadData: downloadData, time: docCreatedTime, fullPath: fullPath })
        }
      }
    }

    const sortedData = datas.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

    sortedData.reverse()

    const state: any = getState();

    const isCategory = state.file.cacheDownloadData.find((item: any) => Object.keys(item) == params.category)

    if (isCategory == undefined) {
      dispatch(setDownloadData({ [params.category]: sortedData }))
    }

    return sortedData

  } catch (error) {
    throw error
  }
})


export const getPuzzlesBySpecial = createAsyncThunk('get/puzzlesSpeacial', async (data: null, { dispatch }) => {
  try {

    const categoryRef = ref(storage, `özel`)
    const puzzle = await list(categoryRef)

    for (let data of puzzle.prefixes) {
      const categoryRef = ref(storage, `${data.fullPath}`)
      const puzzles = await list(categoryRef)
      for (let puzzle of puzzles.prefixes) {
        const puzzleRef = ref(storage, `${puzzle.fullPath}/main`)
        const puzzleData = await list(puzzleRef)

        let puzzleId = data.name;
        let fullPath = data.fullPath;

        for (let data of puzzleData.items) {
          const downloadRef = ref(storage, `${data.fullPath}`)
          const metaData = await getMetadata(downloadRef);
          const docCreatedTime = metaData.timeCreated;
          const downloadData = await getDownloadURL(downloadRef)
          dispatch(getPuzzlesBySpecialImage({ id: puzzleId, downloadData: downloadData, time: docCreatedTime, fullPath: fullPath }))
        }
      }
    }

    return null

  } catch (error) {
    throw error
  }
})

export const getPuzzlesByDaily = createAsyncThunk('get/puzzlesDaily', async (data: null, { dispatch }) => {
  try {

    const categoryRef = ref(storage, `günlük`)
    const puzzle = await list(categoryRef)

    for (let data of puzzle.prefixes) {
      const categoryRef = ref(storage, `${data.fullPath}`)
      const puzzles = await list(categoryRef)
      for (let puzzle of puzzles.prefixes) {
        const puzzleRef = ref(storage, `${puzzle.fullPath}/main`)
        const puzzleData = await list(puzzleRef)

        let puzzleId = data.name;
        let fullPath = data.fullPath;

        for (let data of puzzleData.items) {
          const downloadRef = ref(storage, `${data.fullPath}`)
          const metaData = await getMetadata(downloadRef);
          const docCreatedTime = metaData.timeCreated;
          const downloadData = await getDownloadURL(downloadRef)

          dispatch(getPuzzlesByDailyImage({ id: puzzleId, downloadData: downloadData, time: docCreatedTime, fullPath: fullPath }))
        }
      }
    }

    return null

  } catch (error) {
    throw error
  }
})



export const getPuzzleByPuzzleId = createAsyncThunk('get/puzzleByPuzzleId', async (info: any) => {
  try {

    const category = info.detailInfo.category
    const pieceId = info.detailInfo.puzzle.id
    const pieceCount = info.item;

    const docRef = ref(storage, `file/${category}/${pieceId}/${pieceCount}`)
    const datas = await list(docRef)

    let finalyData: any[] = [];
    for (let data of datas.items) {
      const docRef = ref(storage, `${data.fullPath}`)

      const downloadUri = await getDownloadURL(docRef)
      finalyData.push({ uri: downloadUri, puzzlePath: docRef.fullPath })
    }

    return finalyData
  } catch (error) {
    throw error
  }
})


export const getAllPuzzles = createAsyncThunk('getAll/puzzles', async (data: null, { dispatch }) => {
  try {


    const docRef = ref(storage, `genel`);
    const datas = await list(docRef);

    for (let data of datas.prefixes) {
      const docRef = ref(storage, `${data.fullPath}`)
      const datas = await list(docRef);

      for (let data of datas.prefixes) {
        const puzzleRef = ref(storage, `${data.fullPath}/main`)
        const puzzleData = await list(puzzleRef)

        let puzzleId = data.name;
        let fullPath = data.fullPath



        for (let data of puzzleData.items) {
          const downloadRef = ref(storage, `${data.fullPath}`)
          const metaData = await getMetadata(downloadRef);
          const docCreatedTime = metaData.timeCreated;
          const downloadData = await getDownloadURL(downloadRef)

          dispatch(getAllPuzzlesImage({ id: puzzleId, downloadData: downloadData, time: docCreatedTime, fullPath: fullPath }))
        }
      }
    }

    // const sortedData = finalyData.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());

    return null

  } catch (error) {

  }
})


export const getGamePuzzlePieces = createAsyncThunk('get/gamePuzzlePieces', async (data: null, { getState, dispatch }) => {
  try {

    const state: any = getState()
    const puzzlePath = state.file.gameOption;
    const gamePerson = state.file.gamePerson;

    const puzzleRef = ref(storage, `${puzzlePath}`)
    const puzzlePiece = await list(puzzleRef)

    const halfPieces = (puzzlePiece.items.length / 2)

    let onePersonPieces: any[] = [];
    let twoPersonPieces: any[] = [];


    dispatch(setTotalPieces(puzzlePiece.items.length))

    for (let piece of puzzlePiece.items) {

      const name = piece.name.split(".")
      const downloadRef = ref(storage, piece.fullPath)
      const uri = await getDownloadURL(downloadRef)

      if (gamePerson == '1') {
        onePersonPieces.push({ uri: uri, name: name[0], whichPerson: 'one' })
      }
      else if (gamePerson == '2' && onePersonPieces.length < halfPieces) {
        onePersonPieces.push({ uri: uri, name: name[0], whichPerson: 'one' })
      } else if (gamePerson == '2' && onePersonPieces.length >= halfPieces) {
        twoPersonPieces.push({ uri: uri, name: name[0], whichPerson: 'two' })
      }
    }

    const puzzlePieces = {
      onePersonPuzzlePieces: onePersonPieces,
      twoPersonPuzzlePieces: twoPersonPieces
    }

    console.log("Puzzle parçaları", puzzlePieces);

    return puzzlePieces

  } catch (error) {

  }
})




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
  category: string,

  downloadData?: any[],
  puzzlePiece?: any[],
  allPuzzlesImage: any[],
  cacheDownloadData: any[],
  speacialPuzzle: any[],
  dailyPuzzle: any[],

  gameMode: boolean,
  gameOption: any,
  gamePerson: string,
  gamePuzzlePieces?: any,
  alonePiece: any[],
  length: number,
  startPosition: any,
  loadingGame: boolean,
  completedDatas: any[],
  totalPuzzleSize: any,
  puzzleİsComplete: boolean
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
  sixSize: 0,
  category: '',
  downloadData: [],
  puzzlePiece: [],
  allPuzzlesImage: [],
  cacheDownloadData: [],
  speacialPuzzle: [],
  dailyPuzzle: [],

  gameMode: false,
  gameOption: {},
  gamePerson: "",
  gamePuzzlePieces: {},
  alonePiece: [],
  length: 0,
  startPosition: {},
  loadingGame: true,
  completedDatas: [],
  totalPuzzleSize: 0,
  puzzleİsComplete: false
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
    },
    puzzleCategory: (state, action) => {
      state.category = action.payload;
    },

    setDownloadData: (state, action) => {
      state.cacheDownloadData = [...state.cacheDownloadData, action.payload]
    },

    setGameMode: (state, action) => {
      state.gameMode = action.payload;
    },

    setGameOption: (state, action) => {
      state.gameOption = action.payload;
    },
    setGamePerson: (state, action) => {
      state.gamePerson = action.payload;
    },
    //  iKİ KİŞİLİK DURUM KONTROLÜ
    removePuzzlePiece: (state, action) => {
      const onePersonPuzzlePieces = state.gamePuzzlePieces?.onePersonPuzzlePieces?.filter((piece: any) => piece.uri != action.payload.uri)
      const twoPersonPuzzlePieces = state.gamePuzzlePieces?.twoPersonPuzzlePieces?.filter((piece: any) => piece.uri != action.payload.uri)
      state.gamePuzzlePieces = { onePersonPuzzlePieces: onePersonPuzzlePieces, twoPersonPuzzlePieces: twoPersonPuzzlePieces }
    },
    setLength: (state, action) => {
      state.length = action.payload
    },
    setArenaStartPosition: (state, action) => {
      state.startPosition = action.payload;
    },

    getAllPuzzlesImage: (state, action) => {
      state.allPuzzlesImage = [...state.allPuzzlesImage, action.payload]
    },
    getPuzzlesByDailyImage: (state, action) => {
      state.dailyPuzzle = [...state.dailyPuzzle, action.payload]
    },
    getPuzzlesBySpecialImage: (state, action) => {
      state.speacialPuzzle = [...state.speacialPuzzle, action.payload]
    },
    nullGamePuzzlePieces: (state, action) => {
      state.gamePuzzlePieces = [];
    },
    setCompletedDatas: (state, action) => {
      state.completedDatas = [...state.completedDatas, action.payload]
      if (state.totalPuzzleSize && state.totalPuzzleSize == state.completedDatas.length) {
        state.puzzleİsComplete = true;
      }
    },
    setTotalPieces: (state, action) => {
      state.totalPuzzleSize = action.payload
    },
    setPuzzleComplete: (state, action) => {
      state.puzzleİsComplete = false;
    }
  },
  extraReducers: (builder) => {

    builder.
      addCase(getPuzzlesByCategory.pending, (state, action) => {

      }).
      addCase(getPuzzlesByCategory.fulfilled, (state, action) => {
        state.downloadData = action.payload
      }).
      addCase(getPuzzlesByCategory.rejected, (state, action) => {

      }).

      addCase(getPuzzleByPuzzleId.pending, (state, action) => {

      }).
      addCase(getPuzzleByPuzzleId.fulfilled, (state, action) => {
        state.puzzlePiece = action.payload;
      }).
      addCase(getPuzzleByPuzzleId.rejected, (state, action) => {

      }).

      addCase(getAllPuzzles.pending, (state, action) => {

      }).
      addCase(getAllPuzzles.fulfilled, (state, action) => {
        // state.allPuzzlesImage = action.payload;
      }).
      addCase(getAllPuzzles.rejected, (state, action) => {

      }).

      addCase(getPuzzlesBySpecial.pending, (state, action) => {

      }).
      addCase(getPuzzlesBySpecial.fulfilled, (state, action) => {
        // state.speacialPuzzle = action.payload;
      }).
      addCase(getPuzzlesBySpecial.rejected, (state, action) => {

      }).

      addCase(getPuzzlesByDaily.pending, (state, action) => {

      }).
      addCase(getPuzzlesByDaily.fulfilled, (state, action) => {
        // state.dailyPuzzle = action.payload;
      }).
      addCase(getPuzzlesByDaily.rejected, (state, action) => {

      }).


      addCase(getGamePuzzlePieces.pending, (state, action) => {
        state.loadingGame = true;
      }).
      addCase(getGamePuzzlePieces.fulfilled, (state, action) => {
        state.gamePuzzlePieces = action.payload;
        state.loadingGame = false;
      }).
      addCase(getGamePuzzlePieces.rejected, (state, action) => {
        state.loadingGame = true;
      })

  }

})


export default fileSlice.reducer
export const { setPuzzleComplete, setTotalPieces, setCompletedDatas, nullGamePuzzlePieces, getAllPuzzlesImage, getPuzzlesByDailyImage, getPuzzlesBySpecialImage, setArenaStartPosition, setLength, removePuzzlePiece, setGameMode, setGameOption, setGamePerson, main0, one36, two64, three100, four144, five225, six400, puzzleCategory, setDownloadData } = fileSlice.actions