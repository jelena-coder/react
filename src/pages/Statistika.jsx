import React from 'react';
import StatistikaItem from '../components/StatistikaItem';

export default function Statistika({ pokusaji }) {
  const ukupanUlog = pokusaji.reduce((acc, element) => {
    return acc + element.ulog;
  }, 0)
  const ukupanDobitak = pokusaji.reduce((acc, element) => {
    return acc + element.dobitak;
  }, 0);
  const ukupnoCrna = pokusaji.reduce((acc, element) => {
    return acc + (element.boja === 'black' ? 1 : 0);
  }, 0);
  const ukupnoPlava = pokusaji.reduce((acc, element) => {
    return acc + (element.boja === 'blue' ? 1 : 0);
  }, 0);
  const parsed = pokusaji.reduce((acc, element) => {
    acc[element.broj] = (acc[element.broj] || 0) + 1;
    return acc;
  }, {})
  const sorted = Object.keys(parsed).sort((a, b) => { return parsed[a] - parsed[b] })
  return (
    <div className='container mt-2'>
      <StatistikaItem naziv='Ukupan broj igara' vrednost={pokusaji.length} />
      <StatistikaItem naziv='Ukupno crna' vrednost={ukupnoCrna} />
      <StatistikaItem naziv='Ukupno plava' vrednost={ukupnoPlava} />
      <StatistikaItem naziv='Ukupan ulog' vrednost={ukupanUlog} />
      <StatistikaItem naziv='Ukupan dobitak' vrednost={ukupanDobitak} />
      <StatistikaItem naziv='Najcesci broj' vrednost={sorted[sorted.length - 1]} />
     
    </div>
  );
}
