import { getAuth } from "firebase/auth";
import { FirebaseSetup } from "./firebase";

export default function getUserID(){
    const auth = getAuth(FirebaseSetup);
    if (auth.currentUser) {
        return auth.currentUser.uid;
    } else {
        return null;
    }
}
