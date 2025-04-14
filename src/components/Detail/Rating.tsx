import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import ProgressBar from '../Common/ProgressBar';
import { Theme } from '@/style/Theme';

interface RatingProps {
  total: number;
  cleanliness: number;
  amenities: number;
  accessibility: number;
}

const Rating = ({
  total,
  cleanliness,
  amenities,
  accessibility,
}: RatingProps) => {
  return (
    <RatingStyles>
      <div className="total">
        <FaStar color="#FACC15" size="2rem" />
        <div className="rate">
          <span className="score">{total}</span>
          <span className="outOf">/5</span>
        </div>
      </div>
      <div className="progressBars">
        <ProgressBar
          label="청결도"
          value={(cleanliness / 5) * 100}
          score={cleanliness}
          color="#facc15"
        />
        <ProgressBar
          label="비품상태"
          value={(amenities / 5) * 100}
          score={amenities}
          color="#facc15"
        />
        <ProgressBar
          label="접근성"
          value={(accessibility / 5) * 100}
          score={accessibility}
          color="#facc15"
        />
      </div>
    </RatingStyles>
  );
};

const RatingStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .total {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .rate {
    display: flex;
    align-items: baseline;
    gap: 4px;

    .score {
      font-size: ${Theme.fontSize.lg};
      color: ${Theme.colors.mainText};
      font-weight: bold;
    }

    .outOf {
      font-size: ${Theme.fontSize.sm};
      color: ${Theme.colors.subText};
    }
  }

  .progressBars {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
  }
`;
export default Rating;
