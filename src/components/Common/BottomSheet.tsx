import { useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import useBottomSheet from '@/hooks/useBottomSheet';
import { Theme } from '@/style/Theme';

interface BottomSheetProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const BottomSheet = ({ isOpen, children }: BottomSheetProps) => {
  const { isExpanded, setIsExpanded } = useBottomSheet();
  const MIN_HEIGHT = 135;
  const MAX_HEIGHT = window.innerHeight;
  const [height, setHeight] = useState<number>(
    isExpanded ? MAX_HEIGHT : MIN_HEIGHT,
  );
  const startY = useRef(0);

  const deltaY = useRef(0);
  const sheet = useRef<HTMLDivElement>(null);
  const startHeight = useRef(height);
  const isDragging = useRef(false);

  const shouldPreventDragDown = () => {
    if (!sheet.current) return false;
    return sheet.current.scrollTop! > 0 && deltaY.current < 0;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = false;

    startY.current = e.touches[0].clientY;
    startHeight.current = height;
    deltaY.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    isDragging.current = true;

    deltaY.current = startY.current - e.touches[0].clientY;

    if (shouldPreventDragDown()) return;

    const newHeight = Math.max(
      MIN_HEIGHT,
      Math.min(MAX_HEIGHT, startHeight.current + deltaY.current),
    );
    setHeight(newHeight);
  };

  const handleTouchEnd = () => {
    if (shouldPreventDragDown()) return;

    if (deltaY.current < 0) {
      setHeight(MIN_HEIGHT); // 축소
      setIsExpanded(false);
    } else if (deltaY.current > 0) {
      setHeight(MAX_HEIGHT); // 확장
      setIsExpanded(true);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = false;

    deltaY.current = 0;
    startY.current = e.clientY;
    startHeight.current = height;

    document.body.style.userSelect = 'none';

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    isDragging.current = true;

    deltaY.current = startY.current - e.clientY;

    const newHeight = Math.max(
      MIN_HEIGHT,
      Math.min(MAX_HEIGHT, startHeight.current + deltaY.current),
    );

    setHeight(newHeight);
  };

  const handleMouseUp = () => {
    document.body.style.userSelect = 'auto';

    if (isDragging.current) {
      if (deltaY.current < 0) {
        setHeight(MIN_HEIGHT);
        setIsExpanded(false);
      } else if (deltaY.current > 0) {
        setHeight(MAX_HEIGHT);
        setIsExpanded(true);
      }
    }

    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleClick = () => {
    if (isDragging.current) return;
    if (isExpanded) return;

    setIsExpanded(true);
    setHeight(MAX_HEIGHT);
  };

  return (
    <BottomSheetStyle
      ref={sheet}
      $isOpen={isOpen}
      $isExpanded={isExpanded}
      $height={height}
      $isDragging={isDragging.current}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div className="header">
        <div className="down">
          <IoIosArrowDown
            size={'1.5rem'}
            onClick={() => {
              setIsExpanded(false);
              setHeight(MIN_HEIGHT);
            }}
          />
        </div>
        <div
          className="handleBar"
          onClick={() => {
            setIsExpanded(false);
            setHeight(MIN_HEIGHT);
          }}
        />
      </div>
      {children}
    </BottomSheetStyle>
  );
};

export default BottomSheet;

const BottomSheetStyle = styled.div.attrs<{
  $isOpen: boolean;
  $isExpanded: boolean;
  $height: number;
  $isDragging: boolean;
}>((props) => ({
  style: {
    height: `${props.$height}px`,
  },
}))`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  z-index: ${Theme.zIndex.sheet};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0%' : '100%')});
  transition: ${({ $isDragging }) =>
    $isDragging
      ? 'transform 0.3s ease-in-out'
      : 'transform 0.3s ease-in-out, height 0.3s ease-in'};
  width: 100%;
  max-height: 100%;
  background-color: white;
  border-radius: ${({ $isExpanded }) =>
    $isExpanded ? 'none' : '16px 16px 0 0'};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow-y: ${({ $isExpanded }) => ($isExpanded ? 'auto' : 'hidden')};
  scrollbar-gutter: stable;

  .header {
    display: flex;
    flex-direction: row;
    margin: 10px 8px;
  }

  .down svg {
    cursor: pointer;
    display: ${({ $isExpanded }) => ($isExpanded ? 'auto' : 'none')};
  }

  .handleBar {
    position: absolute;
    width: 40px;
    height: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #e5e7eb;
    border-radius: 30px;
    cursor: pointer;
  }
`;
