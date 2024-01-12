import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ProgressSegment {
  percent: number;
  color: string;
  circumference: number;
}
interface ProgressCircleProps {
  size: number;
  strokeWidth: number;
  progressData: ProgressSegment[];
  children: React.ReactNode;
}

const Container = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const Circle = styled.circle<{ strokeWidth: number; color: string }>`
  fill: none;
  stroke-width: ${(props) => props.strokeWidth};
  stroke: ${(props) => props.color};
  transition: stroke-dashoffset 0.3s ease;
  cursor: pointer;
  position: relative;
`;

const ForeignObject = styled.foreignObject<{ x: number; y: number }>`
  position: absolute;
  x: ${(props) => props.x};
  y: ${(props) => props.y};
`;

const CenterContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  size, strokeWidth, progressData, children,
}) => {

  const [offsets, setOffsets] = useState<number[]>([]);
  const [endpointCoordinates, setEndpointCoordinates] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const newOffsets = progressData.map((segment: any) => 
       (100 - segment.percent) * segment.circumference / 100
    );
    setOffsets(newOffsets);

    // Calculate endpoint coordinates for each color segment
    const newEndpointCoordinates = progressData.map((segment) => {
      const angle = (segment.percent / 100) * 360;
      const x = size / 2 + Math.cos((angle - 90) * (Math.PI / 180)) * (size - strokeWidth) / 2;
      const y = size / 2 + Math.sin((angle - 90) * (Math.PI / 180)) * (size - strokeWidth) / 2;
      return { x, y };
    });
    setEndpointCoordinates(newEndpointCoordinates);
  }, [progressData, size, strokeWidth]);
  return (
    <Container size={size}>
      <svg width={size} height={size}>
        {progressData.map((segment, index) => {
          const circleX = size / 2;
          const circleY = size / 2;

          return (
            <g key={index}>
              <Circle
                cx={circleX}
                cy={circleY}
                r={(size - strokeWidth) / 2}
                strokeWidth={strokeWidth}
                color={segment.color}
                strokeDasharray={segment.circumference}
                strokeDashoffset={offsets[index]}
              />
            </g>
          );
        })}
      </svg>

      <CenterContent>{children}</CenterContent>
    </Container>
  );
};

export default ProgressCircle;
