import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, GoogleAuthProvider, signInWithCredential, signOut } from "firebase/auth";
import app from "../../firebaseConfig";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";


GoogleSignin.configure({
    webClientId: '747666038957-2173us1qq3ung4r0a9a5q7uadmiduuol.apps.googleusercontent.com',
    forceCodeForRefreshToken: true,
});


export const googleSignin = createAsyncThunk("user/googleSignin", async () => {

    const auth = getAuth(app);

    try {
        const currentUser = GoogleSignin.getCurrentUser();
        if (currentUser != null) {
            try {
                await GoogleSignin.signOut();
            } catch (error) {
                console.error(error);
            }
        }
        await GoogleSignin.hasPlayServices();
        const { idToken } = await GoogleSignin.signIn();

        const googleCredentials = GoogleAuthProvider.credential(idToken)           // Bizim eklediklerimiz //idToken sayesinde id ile giriş yap sağlıyıruz

        const data = await signInWithCredential(auth, googleCredentials);

        await AsyncStorage.setItem("_uid", data.user.uid);
        if (googleCredentials.idToken) {
            await AsyncStorage.setItem("_userToken", googleCredentials.idToken);
            console.log("Test", await AsyncStorage.getItem("_uid"));

            const data = {
                uid: await AsyncStorage.getItem("_uid"),
                result: true
            }

            return data;
        } else {
            const data = {
                uid: null,
            }
            return data;
        }

    } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("user cancelled the login flow");

        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("operation (e.g. sign in) is in progress already");
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("play services not available or outdated");
        } else {
            console.log("some other error happened");
        }
    }
})


export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
    try {
        const token = await AsyncStorage.getItem("_userToken");
        const uid = await AsyncStorage.getItem("_uid");
        if (token) {
            const data = {
                uid: uid,
                token: token
            }

            return data;
        } else {
            throw new Error("user not found");
        }
    } catch (error) {
        throw error;
    }
})


export const logout = createAsyncThunk("user/logout", async () => {
    try {
        const auth = getAuth(app);
        await signOut(auth);
        await AsyncStorage.removeItem("_userToken");
        await AsyncStorage.removeItem("_uid")
        return null;
    } catch (error) {
        throw error;
    }
})



export type User = {
    isLoading: boolean,
    isAuth?: boolean,
    token: string | null,
    error?: string,
    uid?: string | null
}

const initialState: User = {
    isLoading: false,
    isAuth: false,
    token: "",
    uid: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(googleSignin.pending, (state) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(googleSignin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.uid = action.payload?.uid;
            })
            .addCase(googleSignin.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.code
            })
            .addCase(autoLogin.pending, (state) => {
                state.isAuth = false;
            })
            .addCase(autoLogin.fulfilled, (state, action) => {
                state.isAuth = true;
                state.token = action.payload.token;
                state.uid = action.payload.uid
            })
            .addCase(autoLogin.rejected, (state, action) => {
                state.isAuth = false;
                state.token = "";
                state.error = action.error.code;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAuth = false;
                state.token = null;
                state.uid = null;
            })
            .addCase(logout.rejected, (state: any = initialState, action) => {
                state.error = action.error.code;
            })
    }
})


export default authSlice.reducer
