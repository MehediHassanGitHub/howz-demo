import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

type LoginScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
    React.useEffect(() => {
        GoogleSignin.configure({
            webClientId: 'YOUR_WEB_CLIENT_ID', // Get this from Google Cloud Console
        });
    }, []);

    const onGoogleButtonPress = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            navigation.navigate("Home");
        } catch (error) {
            console.error(error);
        }
    };

    const onFacebookButtonPress = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
                throw 'Something went wrong obtaining access token';
            }
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            await auth().signInWithCredential(facebookCredential);
            navigation.navigate("Home");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                House Cleaning App
            </label>
            <button
                className="bg-red-500 text-white p-2 rounded-lg mb-2"
                onTap={onGoogleButtonPress}
            >
                Sign in with Google
            </button>
            <button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onTap={onFacebookButtonPress}
            >
                Sign in with Facebook
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});