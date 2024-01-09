import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { countriesCodesJson } from '@/constants/countries-with-codes';
import { indicatorsCodesJson } from '@/constants/indicators-with-codes';
import {
  WorldBankApiResponse,
  IndicatorRecord,
  ChartInputs,
} from '@/types/Types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function returnCountryNamesArr(countriesCodesJson: {
  [key: string]: string;
}) {
  let codesArr = Object.keys(countriesCodesJson);
  let countryNamesArr = codesArr.map((code) => countriesCodesJson[code]);
  countryNamesArr.sort((a, b) => a.localeCompare(b));
  return countryNamesArr;
}

export function returnIndicatorNamesArr(indicatorsCodesJson: {
  [key: string]: string;
}) {
  let indicatorsNamesArr = Object.keys(indicatorsCodesJson);
  indicatorsNamesArr.sort((a, b) => a.localeCompare(b));
  return indicatorsNamesArr;
}

export function returnYearsArr() {
  let maxYear = 2023;
  let startYear = 1950;
  let numberofYears = maxYear - startYear;
  let year = 1950;
  let yearsArr: number[] = [];
  for (let i = 0; i < numberofYears; i++) {
    yearsArr.unshift(year);
    year++;
  }
  return yearsArr;
}

export function getCountryCodeByName(countryName: string): string {
  let countryCode = '';
  if (
    typeof Object.keys(countriesCodesJson).find(
      (key) => countriesCodesJson[key] === countryName
    ) != undefined
  ) {
    countryCode = Object.keys(countriesCodesJson).find(
      (key) => countriesCodesJson[key] === countryName
    )!;
  }
  return countryCode;
}

export function getIndicatorCodeByName(indicatorName: string): string {
  const indicatorCode = indicatorsCodesJson[indicatorName];
  return indicatorCode;
}

export function makeXLabelsArr(dataArr: IndicatorRecord[]) {
  let xLabelsArr = [];
  for (let i = 0; i < dataArr.length; i++) {
    xLabelsArr.push(dataArr[i].date);
  }
  xLabelsArr = xLabelsArr.reverse();
  return xLabelsArr;
}

export function makeDataValuesArray(dataArr: IndicatorRecord[]) {
  let valuesArr = dataArr.map((yearObj: IndicatorRecord) => {
    return yearObj.value;
  });
  return valuesArr.reverse();
}

export function formatData(responseData: WorldBankApiResponse) {
  let dataArr = responseData[1];
  let labels = makeXLabelsArr(dataArr);
  let data = makeDataValuesArray(dataArr);
  let indicator = dataArr[0].indicator.value;
  let country = dataArr[0].country.value;
  let label = `${indicator}, ${country}`;
  let filteredLabels: string[] = [];
  const filteredData = data.filter((n, index) => {
    if (n) filteredLabels.push(labels[index])
    return n})
  return {
    labels: filteredLabels,
    label: label,
    data: filteredData,
    country: country,
    indicator: indicator,
  };
}

// export function promptDataFormatter(data: ChartInputs) {
//   const country = data.country;
//   const indicator = data.indicator;
//   const dateRange = `${data.labels[0]} - ${
//     data.labels[data.labels.length - 1]
//   }`;
//   const labelValuesArr = data.data.map((value, index) => (
//     ` ${data.labels[index]}: ${value}`
//   ))
//   let keyWord ='null';
//   let filteredArr = labelValuesArr.filter(function (str) {
//     return str.indexOf(keyWord) === -1
//   })
//   let promptData = {
//     country,
//     indicator,
//     dateRange,
//     labelValuesArr
//   }
//   return promptData
// }

export function promptDataFormatter(data: ChartInputs) {
  const country = data.country;
  const indicator = data.indicator;
  const dateRange = `${data.labels[0]} - ${
    data.labels[data.labels.length - 1]
  }`;
  const labelValuesArr = data.data.map((value, index) => (
    ` ${data.labels[index]}: ${value}`
  ))
  let keyWord ='null';
  let filteredArr = labelValuesArr.filter(function (str) {
    return str.indexOf(keyWord) === -1
  })
  console.log(filteredArr)
  let promptData = {
    country,
    indicator,
    dateRange,
    filteredArr
  }
  return promptData
}
