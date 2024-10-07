import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type AddTaskScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "AddTask">,
};

export function AddTaskScreen({ navigation }: AddTaskScreenProps) {
    const [taskName, setTaskName] = React.useState("");
    const [frequency, setFrequency] = React.useState("");
    const [area, setArea] = React.useState("");
    const [dueDate, setDueDate] = React.useState(new Date());

    const handleAddTask = () => {
        // Here you would typically add the task to your data store
        console.log("Adding task:", { taskName, frequency, area, dueDate });
        navigation.goBack();
    };

    return (
        <flexboxLayout style={styles.container}>
            <textField
                hint="Task Name"
                text={taskName}
                onTextChange={(args) => setTaskName(args.value)}
                className="p-2 border rounded-lg mb-2"
            />
            <textField
                hint="Frequency (e.g., Daily, Weekly)"
                text={frequency}
                onTextChange={(args) => setFrequency(args.value)}
                className="p-2 border rounded-lg mb-2"
            />
            <textField
                hint="Area (e.g., House, Car, Office)"
                text={area}
                onTextChange={(args) => setArea(args.value)}
                className="p-2 border rounded-lg mb-2"
            />
            <datePicker
                date={dueDate}
                onDateChange={(args) => setDueDate(args.value)}
                className="mb-2"
            />
            <button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onTap={handleAddTask}
            >
                Add Task
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