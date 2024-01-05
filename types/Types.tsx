export interface ChartInputs {
  labels: Array<string>;
  label: string;
  data: Array<number | null>;
  country: string,
  indicator: string
}

export interface Inputs {
  country: string;
  indicator: string;
  fromYear: number;
  toYear: number;
}

type PageData = {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string;
  lastupdated: string;
};

export type IndicatorRecord = {
  indicator: {
    id: string;
    value: string;
  };
  country: {
    id: string;
    value: string;
  };
  countryiso3code: string;
  date: string;
  value: number;
  unit: string;
  obs_status: string;
  decimal: number;
};

export type WorldBankApiResponse = [PageData, IndicatorRecord[]];

export type Report = {
  title: string;
  introduction: string;
  yearHeader: string;
  years: {
    year: string;
    indicator: string;
    value: string;
    context: string;
  }[];

  analysis: {
    analysis_introduction: string;
    topics: {
      topic_title: string;
      topic_analysis: string;
    }[];
  };
  conclusion: string;
};
