import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { unemploymentData, ageGroups, genderGroups, years } from './UnemploymentRate_age';
import { useTranslation } from 'react-i18next';
import './i18n';
import i18n from 'i18next'; 

const AGE_KEYS = ['15_and_over', '15_to_24', '25_to_54', '55_and_over', 'all_ages'];
const GENDER_KEYS = ['Total_gender', 'men', 'women'];

const AGE_LABELS = {
  "15_and_over": "15 years and over",
  "15_to_24": "15 to 24 years",
  "25_to_54": "25 to 54 years",
  "55_and_over": "55 years and over",
  "all_ages": "All year groups"
};

const GENDER_LABELS = {
  "Total_gender": "Total gender",
  "men": "Men",
  "women": "Women"
};

export default function DataFecher() {
  const { t } = useTranslation();
  const [ageKey, setAgeKey] = useState('15_and_over');
  const [genderKey, setGenderKey] = useState('Total_gender');

  const ageLabel = AGE_LABELS[ageKey];
  const genderLabel = GENDER_LABELS[genderKey];
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

  const formatPercent = (value) => {
    return new Intl.NumberFormat(i18n.language, {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value / 100);
  };

  const singleData = useMemo(() => {
    const row = unemploymentData.find(d => d.gender === genderLabel && d.age === ageLabel);
    if (!row) return [];
    return years.map(year => ({ year, rate: row[year] }));
  }, [genderLabel, ageLabel]);

  const multiData = useMemo(() => {
    if (ageKey !== 'all_ages') return [];
    return years.map(year => {
      const point = { year };
      AGE_KEYS.filter(k => k !== 'all_ages').forEach(k => {
        const row = unemploymentData.find(d => d.gender === genderLabel && d.age === AGE_LABELS[k]);
        point[AGE_LABELS[k]] = row ? row[year] : null;
      });
      return point;
    });
  }, [genderLabel, ageKey]);

  const chartData = ageKey === 'all_ages' ? multiData : singleData;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-lg font-semibold mb-4 text-center">{t('lineChartTitle')}</h1>
      <div className="mb-4 text-center" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <label htmlFor="genderSelect">{t('genderSelect')}:</label>
        <select id="genderSelect" value={genderKey} onChange={e => setGenderKey(e.target.value)}>
          {GENDER_KEYS.map(k => (
            <option key={k} value={k}>{t(k)}</option>
          ))}
        </select>
        <label htmlFor="ageSelect">{t('ageSelect')}:</label>
        <select id="ageSelect" value={ageKey} onChange={e => setAgeKey(e.target.value)}>
          {AGE_KEYS.map(k => (
            <option key={k} value={k}>{t(k)}</option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 25]} label={{ value: t('unemployment_rate'), angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => formatPercent(value)} />
          <Legend />
          {ageKey === 'all_ages' ? (
            AGE_KEYS.filter(k => k !== 'all_ages').map((k, i) => (
              <Line
                key={k}
                type="monotone"
                dataKey={AGE_LABELS[k]}
                name={t(k)}
                stroke={colors[i % colors.length]}
                dot={false}
              />
            ))
          ) : (
            <Line
              type="monotone"
              dataKey="rate"
              name={t(ageKey)}
              stroke={'#000000'}
              dot={{ r: 4 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
