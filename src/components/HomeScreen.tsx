import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <button
                className="bg-blue-500 text-white p-2 rounded-lg mb-2"
                onTap={() => navigation.navigate("CleaningSchedule")}
            >
                Cleaning Schedule
            </button>
            <button
                className="bg-green-500 text-white p-2 rounded-lg mb-2"
                onTap={() => navigation.navigate("CleaningSupplies")}
            >
                Cleaning Supplies
            </button>
            <button
                className="bg-purple-500 text-white p-2 rounded-lg mb-2"
                onTap={() => navigation.navigate("Reporting")}
            >
                Reports
            </button>
            <button
                className="bg-yellow-500 text-white p-2 rounded-lg"
                onTap={() => navigation.navigate("Settings")}
            >
                Settings
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