import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { CleaningScheduleScreen } from "./CleaningScheduleScreen";
import { CleaningSuppliesScreen } from "./CleaningSuppliesScreen";
import { AddTaskScreen } from "./AddTaskScreen";
import { AddSupplyScreen } from "./AddSupplyScreen";
import { ReportingScreen } from "./ReportingScreen";
import { TaskDetailsScreen } from "./TaskDetailsScreen";
import { SettingsScreen } from "./SettingsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Home" }}
            />
            <StackNavigator.Screen
                name="CleaningSchedule"
                component={CleaningScheduleScreen}
                options={{ title: "Cleaning Schedule" }}
            />
            <StackNavigator.Screen
                name="CleaningSupplies"
                component={CleaningSuppliesScreen}
                options={{ title: "Cleaning Supplies" }}
            />
            <StackNavigator.Screen
                name="AddTask"
                component={AddTaskScreen}
                options={{ title: "Add Task" }}
            />
            <StackNavigator.Screen
                name="AddSupply"
                component={AddSupplyScreen}
                options={{ title: "Add Supply" }}
            />
            <StackNavigator.Screen
                name="Reporting"
                component={ReportingScreen}
                options={{ title: "Reports" }}
            />
            <StackNavigator.Screen
                name="TaskDetails"
                component={TaskDetailsScreen}
                options={{ title: "Task Details" }}
            />
            <StackNavigator.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ title: "Settings" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);