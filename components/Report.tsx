import { Report } from '@/types/Types';
import { Globe } from 'lucide-react';

interface ReportProps {
  report: Report;
}

function Report({ report }: ReportProps) {
  return (
    <div>
      <div>
        <h1>
          <b className="text-lg">{report.title}</b>
          <p>-</p>
        </h1>
        <p>{report.introduction}</p>
        <p>-</p>
        <h2>
          <u>{report.yearHeader}</u>
        </h2>
        {report.years.map((year) => (
          <>
            <h3>
              <b>{year.year}: </b>
              {year.indicator}: {year.value}
            </h3>
            <p>- {year.context}</p>
          </>
        ))}
        <p>-</p>
        <h2>
          <u>Analysis and Implications</u>
        </h2>
        <p>{report.analysis.analysis_introduction}</p>
        {report.analysis.topics.map((topic, index) => (
          <p key={topic.topic_title}>
            <b>
              {index + 1}. {topic.topic_title}
            </b>{' '}
            {topic.topic_analysis}
          </p>
        ))}

        <h2>
          <b>Conclusion:</b> {report.conclusion}
        </h2>
      </div>
    </div>
  );
}

export default Report;
