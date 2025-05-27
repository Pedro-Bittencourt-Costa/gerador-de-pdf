import React, { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { toPng } from 'html-to-image';

type Props = {
  onExported: (dataUrl: string) => void;
};

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 60 },
];

const ChartComponent: React.FC<Props> = ({ onExported }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  const timeout = setTimeout(() => {
    if (chartRef.current) {
      toPng(chartRef.current)
        .then((dataUrl) => {
          onExported(dataUrl);
        })
        .catch((err) => console.error('Erro ao gerar imagem do gráfico', err));
    }
  }, 500); // Espera 500ms para garantir que tudo foi renderizado

  return () => clearTimeout(timeout);
}, []);

  return (
    <div ref={chartRef} style={{ width: 400, height: 300, backgroundColor: 'white', padding: 10 }}>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#3b82f6" />
      </BarChart>
    </div>
  );
};

export default ChartComponent;
