import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { backupService } from "../services/BackupService";
import { reportService } from "../services/ReportService";
import { upgradeService } from "../services/UpgradeService";

type SettingsScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Settings">,
};

export function SettingsScreen({ navigation }: SettingsScreenProps) {
    const [backupPath, setBackupPath] = React.useState<string | null>(null);

    const handleBackup = async () => {
        try {
            const path = await backupService.backupData();
            setBackupPath(path);
            alert(`Backup created at: ${path}`);
        } catch (error) {
            alert('Error creating backup');
        }
    };

    const handleRestore = async () => {
        if (backupPath) {
            try {
                await backupService.restoreData(backupPath);
                alert('Data restored successfully');
            } catch (error) {
                alert('Error restoring data');
            }
        } else {
            alert('No backup available');
        }
    };

    const handleExportReport = async () => {
        try {
            const path = await reportService.exportReport();
            alert(`Report exported to: ${path}`);
        } catch (error) {
            alert('Error exporting report');
        }
    };

    const handleEmailReport = async () => {
        try {
            await reportService.emailReport('user@example.com'); // Replace with user's email
        } catch (error) {
            alert('Error sending email report');
        }
    };

    const handleCheckForUpdates = async () => {
        const updateInfo = await upgradeService.checkForUpdate();
        if (updateInfo) {
            alert(`New version available: ${updateInfo.latestVersion}\nCurrent version: ${updateInfo.currentVersion}\nPlease update from the app store.`);
        } else {
            alert('Your app is up to date');
        }
    };

    return (
        <scrollView style={styles.container}>
            <button className="bg-blue-500 text-white p-2 rounded-lg mb-2" onTap={handleBackup}>
                Backup Data
            </button>
            <button className="bg-green-500 text-white p-2 rounded-lg mb-2" onTap={handleRestore}>
                Restore Data
            </button>
            <button className="bg-purple-500 text-white p-2 rounded-lg mb-2" onTap={handleExportReport}>
                Export Report
            </button>
            <button className="bg-indigo-500 text-white p-2 rounded-lg mb-2" onTap={handleEmailReport}>
                Email Report
            </button>
            <button className="bg-yellow-500 text-white p-2 rounded-lg mb-2" onTap={handleCheckForUpdates}>
                Check for Updates
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