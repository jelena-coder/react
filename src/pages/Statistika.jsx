import React from 'react';
import StatistikaItem from '../components/StatistikaItem';

export default function Statistika({ pokusaji }) {
  const ukupanUlog = pokusaji.reduce((ukupno, element) => {
    return ukupno + element.ulog;
  }, 0)
  const ukupanDobitak = pokusaji.reduce((ukupno, element) => {
    return ukupno + element.dobitak;
  }, 0);
  const ukupnoCrna = pokusaji.reduce((ukupno, element) => {
    return ukupno + (element.boja === 'black' ? 1 : 0);
  }, 0);
  const ukupnoPlava = pokusaji.reduce((ukupno, element) => {
    return ukupno + (element.boja === 'blue' ? 1 : 0);
  }, 0);
  const parsed = pokusaji.reduce((ukupno, element) => {
    ukupno[element.broj] = (ukupno[element.broj] || 0) + 1;
    return ukupno;
  }, {})
  const sorted = Object.keys(parsed).sort((a, b) => { return parsed[a] - parsed[b] })
  return (
    <div className='container mt-2'>
      <StatistikaItem naziv='Ukupan broj igranja' vrednost={pokusaji.length} />
      <StatistikaItem naziv='Ukupno crna' vrednost={ukupnoCrna} />
      <StatistikaItem naziv='Ukupno plava' vrednost={ukupnoPlava} />
      <StatistikaItem naziv='Ukupan ulog' vrednost={ukupanUlog} />
      <StatistikaItem naziv='Ukupan dobitak' vrednost={ukupanDobitak} />
      <StatistikaItem naziv='Najcesci broj' vrednost={sorted[sorted.length - 1]} />
     
    </div>
  );
}
