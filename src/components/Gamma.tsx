import React, { useEffect, useState } from 'react';
import { WineData } from '../utils/interfaces';
import CommonTable from './CommonTable';
import { TableType } from '../utils/emums';
import { calculateMean, calculateMedian, calculateMode } from '../Constant/ConstantFunction';

const GammaTable = (props: any) => {
  const { wineData } = props as { wineData: WineData[] }
  const [gammaStats, setGammaStats] = useState({});

  useEffect(() => {
    const calculateGamma = () => {
      const updatedData = wineData.map((entry: any) => {
        const gamma = (entry.Ash * entry.Hue) / entry.Magnesium;
        return { ...entry, Gamma: gamma };
      });

      const classes: any = {};

      updatedData.forEach((entry: any) => {
        const alcoholClass = `Class ${entry.Alcohol}`;
        if (!classes[alcoholClass]) {
          classes[alcoholClass] = [];
        }
        classes[alcoholClass].push(entry.Gamma);
      });

      const statsByClass: any = {};

      for (const [alcoholClass, gammaArray] of Object.entries(classes)) {
        const mean = calculateMean(gammaArray);
        const median = calculateMedian(gammaArray);
        const mode = calculateMode(gammaArray);

        statsByClass[alcoholClass] = { mean, median, mode };
      }

      return statsByClass;
    };

    

    const gammaStats = calculateGamma();
    setGammaStats(gammaStats);
  }, [wineData]);

  return (
    <CommonTable data={gammaStats} type={TableType.GAMMA} />
  );
};

export default GammaTable;
