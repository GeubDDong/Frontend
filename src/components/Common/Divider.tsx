import styled from 'styled-components';
import { ReactNode } from 'react';
import { Theme } from '@/style/Theme';

interface SectionProps {
  children: ReactNode;
  noBorder?: boolean;
}

const Divider = ({ children, noBorder = false }: SectionProps) => {
  return <DividerStyle $noBorder={noBorder}>{children}</DividerStyle>;
};

export default Divider;

const DividerStyle = styled.div<{ $noBorder: boolean }>`
  padding-bottom: 20px;
  border-bottom: ${({ $noBorder }) =>
    $noBorder ? 'none' : `1px solid ${Theme.colors.divider}`};
`;
