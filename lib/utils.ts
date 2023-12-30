import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { countriesCodesJson } from '@/constants/countries-with-codes';
import { indicatorsCodesJson } from '@/constants/indicators-with-codes';

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
    yearsArr.unshift(year)
    year++
  }
  return yearsArr
}
