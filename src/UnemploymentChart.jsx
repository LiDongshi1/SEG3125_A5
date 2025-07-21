import React, { useState } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { unemploymentData, years } from './UnemploymentData';
import { useTranslation } from 'react-i18next';
import './i18n';

export default function UnemploymentChart() {
  const [selectedYear, setSelectedYear] = useState('2020');
  const { t, i18n } = useTranslation();
  const formatPercent = (value) => {
    return new Intl.NumberFormat(i18n.language, {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value / 100);
  };
  const chartData = unemploymentData.map(row => ({
    province: row.province,
    rate: row[selectedYear]
  }));

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-lg font-semibold mb-4 text-center">
        {t('barChartTitle')}
      </h1>

      <div className="mb-4 text-center">
        <label htmlFor="selectedYear" className="mr-2" style={{ marginRight: '0.5rem' }}>
          {t('yearSelect')}
        </label>
        <select
          id="selectedYear"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="province" />
          <YAxis unit="%" label={{ value: t('unemployment_rate'), angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={formatPercent} />
          <Legend />
          <Bar dataKey="rate" name={t('unemployment_rate')} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
