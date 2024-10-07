import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ReportingScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Reporting">,
};

export function ReportingScreen({ navigation }: ReportingScreenProps) {
    // Mock data for demonstration
    const completedTasks = 15;
    const totalTasks = 20;
    const totalTimeSpent = 450; // in minutes
    const totalSuppliesCost = 75.50;

    return (
        <scrollView style={styles.container}>
            <label className="text-2xl font-bold mb-4">Cleaning Report</label>
            
            <label className="text-lg font-semibold mt-4">Task Completion</label>
            <progressBar value={completedTasks} maxValue={totalTasks} className="mb-2" />
            <label>{completedTasks} out of {totalTasks} tasks completed</label>
            
            <label className="text-lg font-semibold mt-4">Time Spent</label>
            <label>{Math.floor(totalTimeSpent / 60)} hours {totalTimeSpent % 60} minutes</label>
            
            <label className="text-lg font-semibold mt-4">Supplies Cost</label>
            <label>${totalSuppliesCost.toFixed(2)}</label>
            
            <button
                className="bg-purple-500 text-white p-2 rounded-lg mt-4"
                onTap={() => console.log("Generate detailed report")}
            >
                Generate Detailed Report
            </button>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
    },
});