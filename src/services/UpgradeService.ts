import VersionCheck from 'react-native-version-check';

class UpgradeService {
  async checkForUpdate() {
    try {
      const updateNeeded = await VersionCheck.needUpdate();
      if (updateNeeded.isNeeded) {
        return {
          currentVersion: updateNeeded.currentVersion,
          latestVersion: updateNeeded.latestVersion,
          storeUrl: updateNeeded.storeUrl,
        };
      }
      return null;
    } catch (error) {
      console.error('Error checking for updates:', error);
      return null;
    }
  }
}

export const upgradeService = new UpgradeService();