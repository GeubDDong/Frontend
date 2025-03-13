import { Theme } from '@/style/Theme';
import { IconContext } from 'react-icons';
import { FaChildren, FaCircle } from 'react-icons/fa6';
import { FaWheelchair, FaBaby, FaRegClock } from 'react-icons/fa';
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
  clock: <FaRegClock />,
};

const InfoIcon = ({ iconName, active, text }: Props) => {
  return (
    <InfoIconStyle>
      <div className="circle">
        <FaCircle
          size="3rem"
          color={active ? '#205781' : '#d8dfe0'} //'#244fb1' #4F959D #205781 #80CBC4
          style={{ opacity: active ? 1 : 0.5 }}
        />
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
      <span style={{ opacity: active ? 1 : 0.5 }}>{text}</span>
    </InfoIconStyle>
  );
};

const InfoIconStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;

  span {
    font-size: ${Theme.fontSize.sm};
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
