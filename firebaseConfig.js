import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC25WIn_ANi9_y40IjSsushCvEEZYTtfpQ",
  authDomain: "jigsawduo-cc021.firebaseapp.com",
  projectId: "jigsawduo-cc021",
  storageBucket: "jigsawduo-cc021.appspot.com",
  messagingSenderId: "747666038957",
  appId: "1:747666038957:web:678d05360dbabd23d46624"
};



const app = initializeApp(firebaseConfig); 


const auth = initializeAuth(app, {   // Firebase e bağlanan app uygulamamızı authentication için kullandık ve yapılandırma ayarlarını yaptık.
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);  // app imizi firestore için kullandık
export const storage = getStorage(app);
export const realdb = getDatabase(app)
export default app