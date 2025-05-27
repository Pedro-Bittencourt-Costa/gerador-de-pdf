import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ChartComponent from './components/ChartComponent';
import ReportPDF from './components/ReportPDF';

const App: React.FC = () => {
  const [chartImage, setChartImage] = useState<string | null>(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Gerador de Relatório PDF</h1>

      <ChartComponent onExported={setChartImage} />

      {chartImage && (
        <div style={{ marginTop: 20 }}>
          <PDFDownloadLink
            document={<ReportPDF chartImage={chartImage} />}
            fileName="relatorio.pdf"
          >
            {({ loading }) => (loading ? 'Gerando PDF...' : 'Baixar PDF')}
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default App;
