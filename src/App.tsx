import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ChartComponent from './components/ChartComponent';
import ReportPDF from './components/ReportPDF';

const App: React.FC = () => {
  const [chartImage, setChartImage] = useState<string | null>(null);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Gerador de Relatório PDF</h1>

        <ChartComponent onExported={setChartImage} />

        {chartImage && (
          <div style={styles.pdfButtonWrapper}>
            <PDFDownloadLink
              document={<ReportPDF chartImage={chartImage} />}
              fileName="relatorio.pdf"
              style={styles.pdfButton}
            >
              {({ loading }) => (loading ? 'Gerando PDF...' : '📄 Baixar PDF')}
            </PDFDownloadLink>
          </div>
        )}
      </div>
    </div>

  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f7fa',
    fontFamily: 'Arial, sans-serif',
    padding: 20,
  },
  content: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    maxWidth: 600,
    width: '100%',
  },
  title: {
    marginBottom: 40,
    fontSize: '28px',
    color: '#333',
  },
  pdfButtonWrapper: {
    marginTop: 30,
  },
  pdfButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    fontSize: '14px',
    display: 'inline-block',
  },
};


export default App;
