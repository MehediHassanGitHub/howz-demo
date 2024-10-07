import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Task } from "../models/Task";

type CleaningScheduleScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "CleaningSchedule">,
};

export function CleaningScheduleScreen({ navigation }: CleaningScheduleScreenProps) {
    const [tasks, setTasks] = React.useState<Task[]>([
        { id: 1, name: "Vacuum living room", frequency: "Weekly", area: "House", dueDate: new Date(), timeSpent: 30, progress: 0 },
        { id: 2, name: "Clean bathroom", frequency: "Weekly", area: "House", dueDate: new Date(), timeSpent: 45, progress: 0 },
        { id: 3, name: "Wash car", frequency: "Monthly", area: "Car", dueDate: new Date(), timeSpent: 60, progress: 0 },
    ]);

    return (
        <flexboxLayout style={styles.container}>
            <listView
                items={tasks}
                cellFactory={(task) => {
                    return (
                        <gridLayout columns="*, auto" className="p-2 border-b border-gray-200" onTap={() => navigation.navigate("TaskDetails", { taskId: task.id })}>
                            <label col="0" className="font-bold">{task.name}</label>
                            <label col="1" className="text-sm text-gray-500">{task.frequency} - {task.area}</label>
                        </gridLayout>
                    );
                }}
            />
            <button
                className="bg-blue-500 text-white p-2 rounded-lg mt-4"
                onTap={() => navigation.navigate("AddTask")}
            >
                Add New Task
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        padding: 20,
    },
});