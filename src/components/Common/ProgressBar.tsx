import { Theme } from '@/style/Theme';
import styled from 'styled-components';

interface ProgressBarProps {
  label?: string;
  value: number;
  score?: string;
  color: string;
}

const ProgressBar = ({ label, value, score, color }: ProgressBarProps) => {
  return (
    <ProgressBarStyle>
      <div className="label"> {label}</div>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
      <span className="score">{score}</span>
    </ProgressBarStyle>
  );
};

const ProgressBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  .label {
    font-size: ${Theme.fontSize.xs};
    color: ${Theme.colors.mainText};
    width: 60px;
  }

  .bar {
    width: 100%;
    height: 10px;
    background-color: #ebebeb;
  }

  .fill {
    height: 100%;
  }

  .score {
    font-size: ${Theme.fontSize.xs};
    color: ${Theme.colors.mainText};
    width: 20px;
  }
`;
export default ProgressBar;
