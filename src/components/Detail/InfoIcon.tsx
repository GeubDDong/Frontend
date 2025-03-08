import { Theme } from '@/style/Theme';
import { IconContext } from 'react-icons';
import { FaChildren, FaCircle } from 'react-icons/fa6';
import { FaWheelchair, FaBaby } from 'react-icons/fa';
import { IoIosWoman, IoIosMan } from 'react-icons/io';
import { LuBellRing, LuCctv } from 'react-icons/lu';
import { styled } from 'styled-components';

interface Props {
  iconName: string;
  active: boolean;
  text: string;
}

const ICONS: Record<string, JSX.Element> = {
  children: <FaChildren />,
  woman: <IoIosWoman />,
  man: <IoIosMan />,
  baby: <FaBaby />,
  wheelchair: <FaWheelchair />,
  cctv: <LuCctv />,
  bell: <LuBellRing />,
};

const InfoIcon = ({ iconName, active, text }: Props) => {
  return (
    <InfoIconStyle>
      <div className="circle">
        <IconContext.Provider
          value={{
            size: '3rem',
            color: active ? `${Theme.colors.primary}` : '#d8dfe0',
          }}
        >
          <FaCircle />
        </IconContext.Provider>
        <div className="info">
          <IconContext.Provider
            value={{
              size: '2rem',
              color: 'white',
            }}
          >
            {ICONS[iconName]}
          </IconContext.Provider>
        </div>
      </div>
      <span>{text}</span>
    </InfoIconStyle>
  );
};

const InfoIconStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;

  span {
    font-size: ${Theme.fontSize.md};
    color: ${Theme.colors.mainText};
    text-align: center;
  }
  .circle {
    position: relative;
  }

  .info {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
`;

export default InfoIcon;
