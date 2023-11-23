import  { useEffect, useState } from 'react';
import { WineData } from '../utils/interfaces';
import './Table.css'
import CommonTable from './CommonTable';
import { TableType } from '../utils/emums';
import { calculateMean, calculateMedian, calculateMode } from '../Constant/ConstantFunction';
const WineStatistics = (props:any) => {
  const {wineData} = props as {wineData:WineData[]}
  const [flavanoidsStats, setFlavanoidsStats] = useState({});

  useEffect(() => {
    const calculateFlavanoidsStatsByClass = () => {
      const classes:any = {};

      wineData.forEach((entry:WineData) => {
        const alcoholClass = `Class ${entry.Alcohol}`;
        if (!classes[alcoholClass]) {
          classes[alcoholClass] = [];
        }
        classes[alcoholClass].push(entry.Flavanoids);
      });

      const statsByClass :any= {};

      for (const [alcoholClass, flavanoidsArray] of Object.entries(classes)) {
        const mean = calculateMean(flavanoidsArray);
        const median = calculateMedian(flavanoidsArray);
        const mode = calculateMode(flavanoidsArray);

        statsByClass[alcoholClass] = { mean, median, mode };
      }

      return statsByClass;
    };

    const stats = calculateFlavanoidsStatsByClass();
    setFlavanoidsStats(stats);
  }, [wineData]);

  return (
    <CommonTable data={flavanoidsStats} type={TableType.FLAVANIDS}/>
  );
};

export default WineStatistics;
