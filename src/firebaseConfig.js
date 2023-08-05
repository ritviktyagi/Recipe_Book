import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCadJyq7RKaJZeZ1etU6V3S1L7ywlHm5UE",
    authDomain: "recipe-book-df70d.firebaseapp.com",
    projectId: "recipe-book-df70d",
    storageBucket: "recipe-book-df70d.appspot.com",
    messagingSenderId: "579247169978",
    appId: "1:579247169978:web:755f08f949b6c424ebfd83",
  };

  const app = initializeApp(firebaseConfig);
  const database = getAuth(app);
  export { database, app };