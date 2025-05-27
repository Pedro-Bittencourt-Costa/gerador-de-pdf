import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

type ReportPDFProps = {
  chartImage: string;
};

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
  chart: { width: '100%', height: 300, marginBottom: 20 },
    table: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'column', 
  },
  tableRow: { flexDirection: 'row' },
  tableColHeader: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#eee',
    padding: 5,
  },
  tableCol: { width: '50%', borderStyle: 'solid', borderWidth: 1, padding: 5 },
});

const ReportPDF: React.FC<ReportPDFProps> = ({ chartImage }) => {
  const tableData = [
    { month: 'Janeiro', value: 30 },
    { month: 'Fevereiro', value: 50 },
    { month: 'Março', value: 45 },
    { month: 'Abril', value: 60 },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Relatório Mensal</Text>

        <Image src={chartImage} style={styles.chart} />

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Mês</Text>
            <Text style={styles.tableColHeader}>Valor</Text>
          </View>
          {tableData.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{item.month}</Text>
              <Text style={styles.tableCol}>{item.value}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ReportPDF;
