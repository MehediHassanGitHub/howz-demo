import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Task } from "../models/Task";

type TaskDetailsScreenProps = {
    route: { params: { taskId: number } },
    navigation: FrameNavigationProp<MainStackParamList, "TaskDetails">,
};

export function TaskDetailsScreen({ route, navigation }: TaskDetailsScreenProps) {
    const { taskId } = route.params;
    
    // Mock task data (replace with actual data fetching logic)
    const [task, setTask] = React.useState<Task>({
        id: taskId,
        name: "Vacuum living room",
        frequency: "Weekly",
        area: "House",
        dueDate: new Date(),
        timeSpent: 30,
        progress: 50
    });

    const updateProgress = (newProgress: number) => {
        setTask(prevTask => ({ ...prevTask, progress: newProgress }));
    };

    const updateTimeSpent = (additionalTime: number) => {
        setTask(prevTask => ({ ...prevTask, timeSpent: prevTask.timeSpent + additionalTime }));
    };

    return (
        <scrollView style={styles.container}>
            <label className="text-2xl font-bold mb-4">{task.name}</label>
            
            <label className="text-lg font-semibold mt-4">Progress</label>
            <progressBar value={task.progress} maxValue={100} className="mb-2" />
            <label>{task.progress}% complete</label>
            
            <label className="text-lg font-semibold mt-4">Time Spent</label>
            <label>{task.timeSpent} minutes</label>
            
            <label className="text-lg font-semibold mt-4">Due Date</label>
            <label>{task.dueDate.toLocaleDateString()}</label>
            
            <label className="text-lg font-semibold mt-4">Frequency</label>
            <label>{task.frequency}</label>
            
            <label className="text-lg font-semibold mt-4">Area</label>
            <label>{task.area}</label>
            
            <button
                className="bg-blue-500 text-white p-2 rounded-lg mt-4"
                onTap={() => updateProgress(Math.min(task.progress + 10, 100))}
            >
                Update Progress (+10%)
            </button>
            
            <button
                className="bg-green-500 text-white p-2 rounded-lg mt-2"
                onTap={() => updateTimeSpent(5)}
            >
                Add Time Spent (+5 min)
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