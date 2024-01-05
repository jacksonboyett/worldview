import { Report } from '@/types/Types';

export const exampleReport: Report = {
  title: 'Report on Inflation Consumer Prices in Peru (1988-1991)',
  introduction:
    "Inflation is a critical economic indicator that reflects the percentage change in consumer prices over a specific period, providing insights into the purchasing power of a country's currency. This report analyzes the inflation consumer prices in Peru from 1988 to 1991.",
  yearHeader: 'Yearly Inflation Rates',
  years: [
    {
      year: '1988',
      indicator: 'Inflation Rate',
      value: '667%',
      context:
        "The year 1988 marked a tumultuous period in Peru's economic and political history. Political unrest, mismanagement, and a severe debt crisis plagued the country. Hyperinflation skyrocketed due to excessive government spending and a lack of effective economic policies, causing widespread economic hardship among the population.",
    },
    {
      year: '1989',
      indicator: 'Inflation Rate',
      value: '3398%',
      context:
        "In 1989, hyperinflation reached unprecedented levels, with an inflation rate of 3398%. Political instability persisted, and the economic downturn continued. External debt burdens and a lack of confidence in the government's ability to address economic issues contributed to the exacerbation of hyperinflation.",
    },
    {
      year: '1990',
      indicator: 'Inflation Rate',
      value: '7481%',
      context:
        'The year 1990 witnessed a deepening economic crisis with hyperinflation soaring to 7481%. Political changes occurred as Alberto Fujimori assumed the presidency. The new government faced the daunting task of stabilizing the economy amid political and economic turmoil, implementing initial measures to curb inflation.',
    },
    {
      year: '1991',
      indicator: 'Inflation Rate',
      value: '409%',
      context:
        'In 1991, Peru recorded a still-high inflation rate of 409%. The Fujimori government implemented drastic economic reforms, including austerity measures, currency stabilization, and market-oriented policies. These reforms were met with initial resistance but laid the foundation for economic recovery, restoring investor confidence and paving the way for future stability.',
    },
  ],
  analysis: {
    analysis_introduction:
      "The period from 1988 to 1991 marked one of the most challenging economic crises in Peru's history. Hyperinflation, political instability, and economic mismanagement created a perfect storm. The following analysis delves into the multifaceted implications of this turbulent period:",
    topics: [
      {
        topic_title: 'Economic Reforms and Stabilization:',
        topic_analysis:
          'The drastic economic reforms initiated in 1991 were a response to the severe economic challenges. These measures, including currency stabilization and market-oriented policies, aimed to curb hyperinflation and restore economic stability. While initially challenging, they laid the groundwork for future economic recovery.',
      },
      {
        topic_title: 'Impact on Population:',
        topic_analysis:
          'The hyperinflation during this period had severe consequences for the general population. Rapid increases in prices eroded the purchasing power of citizens, leading to a decline in living standards. The social and human impact of the economic crisis necessitated comprehensive measures to address the welfare of the people.',
      },
      {
        topic_title: 'Political Landscape:',
        topic_analysis:
          'The economic crisis and hyperinflation played a pivotal role in shaping the political landscape. The challenges faced by the government in addressing economic issues influenced public opinion and set the stage for significant political changes. The subsequent years saw shifts in political power and an evolving political narrative.',
      },
      {
        topic_title: 'International Support and Relations: ',
        topic_analysis:
          "The economic crisis prompted Peru to seek international support and collaboration. Engaging with international financial institutions and establishing diplomatic relations became crucial in navigating the complex economic challenges. The role of external actors in supporting Peru's recovery efforts cannot be understated.",
      },
      {
        topic_title: 'Long-Term Economic Impact: ',
        topic_analysis:
          "The economic reforms and stabilization measures implemented in 1991 had a lasting impact on Peru's economy. Over the long term, the country experienced economic recovery, attracting foreign investment, and fostering a more stable economic environment. The lessons learned from this turbulent period contributed to shaping future economic policies.",
      },
    ],
  },
  conclusion:
    "The inflation trends in Peru from 1988 to 1991 reflect a period of unprecedented economic challenges. The comprehensive analysis underscores the complex interplay of economic, political, and social factors. The subsequent reforms laid the foundation for Peru's economic recovery, highlighting the resilience and adaptability of the nation.",
};

// *****************************************************************************************************
// *****************************************************************************************************
// *****************************************************************************************************

export const user_prompt = `Write a report as a JSON object of the following data: Population of Albania from 2000-2005: 2010 at 2913021, 2011 at 2905195, 2012 at 2900401, 2013 at 2895092, 2014 at 2889104, and 2015 at 2880703. Make sure to include national and global reasons to explain the data. Use the following report as an example: ${exampleReport}`;

export const generate_report = [
  {
    name: 'generate_report',
    description:
      'Generate a report of the values World Bank indicator for a specific country and year range',
    parameters: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          description:
            'The title of the report with the World Bank indicator, country, and year range (e.g. Inflation Consumer Prices in Peru (1988-1991)',
        },
        introduction: {
          type: 'string',
          description:
            "A brief summary of the world bank indicator data in the country during the years provided (e.g. Inflation is a critical economic indicator that reflects the percentage change in consumer prices over a specific period, providing insights into the purchasing power of a country's currency. This report analyzes the inflation consumer prices in Peru from 1988 to 1991.)",
        },
        yearHeader: {
          type: 'string',
          description:
            'A title for the main body of text (e.g. Yearly Inflation Rates)',
        },
        years: {
          type: 'array',
          description: 'Each year of data explained',
          items: {
            type: 'object',
            properties: {
              year: {
                type: 'string',
                description: 'the specific year for the data (e.g. 2006)',
              },
              indicator: {
                type: 'string',
                description:
                  'the world bank indicator that is being measured (e.g. Inflation)',
              },
              value: {
                type: 'string',
                description:
                  'the value of the world bank indicator in that country for that specific year rounded to the nearest tenth decimal place with units (e.g. 6.7%)',
              },
              context: {
                type: 'string',
                description:
                  'A detailed explanation and analysis of the world bank indicator in that country for that year. (e.g. The year 2006 saw a modest inflation rate of 6.785%, suggesting a relatively stable economic environment. This moderate inflation could be indicative of controlled economic policies.',
              },
            },
          },
        },
        analysis: {
          type: 'object',
          properties: {
            analysis_introduction: {
              type: 'string',
              description:
                "An introduction for a full analysis of all of the data (e.g. The period from 1988 to 1991 marked one of the most challenging economic crises in Peru's history. Hyperinflation, political instability, and economic mismanagement created a perfect storm. The following analysis delves into the multifaceted implications of this turbulent period:",
            },
            topics: {
              type: 'array',
              description:
                'Different areas of analysis that the indicator affected',
              items: {
                type: 'object',
                properties: {
                  topic_title: {
                    type: 'string',
                    description:
                      'The title for the topic of analysis (e.g. Drought and Agricultural Productivity:) ',
                  },
                  topic_analysis: {
                    type: 'string',
                    description:
                      'The analysis of the topic and how the world bank indicator affected that specific topic in the country over the years (e.g. Afghanistan is vulnerable to environmental factors, including drought. Changes in agricultural productivity due to weather conditions can affect food prices and contribute to inflation. The reliance on agriculture as a significant sector of the economy makes Afghanistan susceptible to such variations.',
                  },
                },
              },
            },
          },
        },
        conclusion: {
          type: 'string',
          description:
            "A summary of the entire report and its relavance to the reader (e.g. The inflation trends in Peru from 1988 to 1991 reflect a period of unprecedented economic challenges. The comprehensive analysis underscores the complex interplay of economic, political, and social factors. The subsequent reforms laid the foundation for Peru's economic recovery, highlighting the resilience and adaptability of the nation",
        },
      },
      required: [
        'title',
        'introduction',
        'yearHeader',
        'years',
        'year',
        'indicator',
        'value',
        'context',
        'analysis',
        'topics',
        'topic_title',
        'topic_analysis',
        'conclusion',
      ],
    },
  },
];
