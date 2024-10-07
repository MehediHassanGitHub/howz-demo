import Mailer from 'react-native-mail';
import RNFS from 'react-native-fs';
import { databaseService } from './DatabaseService';

class ReportService {
  async generateReport() {
    const tasks = await databaseService.getTasks();
    const supplies = await databaseService.getSupplies();

    let report = 'House Cleaning App Report\n\n';
    report += 'Tasks:\n';
    tasks.forEach(task => {
      report += `${task.name} - Due: ${task.dueDate.toLocaleDateString()} - Progress: ${task.progress}%\n`;
    });

    report += '\nSupplies:\n';
    supplies.forEach(supply => {
      report += `${supply.name} - Quantity: ${supply.quantity} - Cost: $${supply.cost.toFixed(2)}\n`;
    });

    return report;
  }

  async exportReport() {
    const report = await this.generateReport();
    const reportPath = `${RNFS.DocumentDirectoryPath}/cleaning_report.txt`;
    await RNFS.writeFile(reportPath, report, 'utf8');
    return reportPath;
  }

  async emailReport(to: string) {
    const report = await this.generateReport();
    
    Mailer.mail({
      subject: 'House Cleaning App Report',
      body: report,
      isHTML: false,
      recipients: [to]
    }, (error) => {
      if (error) {
        console.error('Error sending email:', error);
      }
    });
  }
}

export const reportService = new ReportService();