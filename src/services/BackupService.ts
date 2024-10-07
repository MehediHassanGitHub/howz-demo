import RNFS from 'react-native-fs';
import { databaseService } from './DatabaseService';

class BackupService {
  async backupData() {
    try {
      const tasks = await databaseService.getTasks();
      const supplies = await databaseService.getSupplies();
      const backupData = JSON.stringify({ tasks, supplies });
      
      const backupPath = `${RNFS.DocumentDirectoryPath}/backup.json`;
      await RNFS.writeFile(backupPath, backupData, 'utf8');
      
      return backupPath;
    } catch (error) {
      console.error('Error creating backup:', error);
      throw error;
    }
  }

  async restoreData(backupPath: string) {
    try {
      const backupData = await RNFS.readFile(backupPath, 'utf8');
      const { tasks, supplies } = JSON.parse(backupData);

      // Clear existing data and restore from backup
      // (You'll need to implement clearAllData method in DatabaseService)
      await databaseService.clearAllData();

      for (const task of tasks) {
        await databaseService.addTask(task);
      }

      for (const supply of supplies) {
        await databaseService.addSupply(supply);
      }
    } catch (error) {
      console.error('Error restoring backup:', error);
      throw error;
    }
  }
}

export const backupService = new BackupService();