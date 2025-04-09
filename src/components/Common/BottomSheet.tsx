import { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
}

const BottomSheet = ({ isOpen, children }: Props) => {
  const sheetRef = useRef<HTMLDivElement | null>(null);

  return (
    <BottomSheetStyle ref={sheetRef} $isOpen={isOpen}>
      <div className="handleBar" />
      {children}
    </BottomSheetStyle>
  );
};

export default BottomSheet;

const BottomSheetStyle = styled.div<{
  $isOpen: boolean;
}>`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0%' : '100%')});
  transition: transform 0.3s ease-in-out;
  width: 100%;
  min-height: 150px;
  background-color: white;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  cursor: pointer;

  .handleBar {
    width: 40px;
    height: 5px;
    background-color: #e5e7eb;
    border-radius: 30px;
    margin: 8px auto;
  }
`;
