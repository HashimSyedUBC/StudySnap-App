import React, { useState } from 'react';
import styled from 'styled-components';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const TooltipContainer = styled.div`

`;

const TooltipContent = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px;
  border-radius: 4px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <TooltipContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isTooltipVisible && <TooltipContent>{content}</TooltipContent>}
    </TooltipContainer>
  );
};

export default Tooltip;
