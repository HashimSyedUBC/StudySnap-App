import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import Checkbox from '../Checkbox';
import { useState } from 'react';

interface TableProps {
  columns: string[];
  data: Record<string, any>[];
  headerChecked: boolean
  handleHeaderChecked: (value: boolean) => void
  handleRowChecked: (sender: string) => void
}

const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${colors.defaultBlack};
  ${fonts.H200}
`;

const TableHeader = styled.th`
  background-color: ${colors.mainColor};
  border: 1px solid ${colors.defaultBlack};
  text-align: left;
  padding: 16px;
`;

const TableCell = styled.td`
  border: 1px solid ${colors.defaultBlack};
  text-align: left;
  padding: 16px;
`;

const TableComponent: React.FC<TableProps> = ({ columns, data, headerChecked, handleHeaderChecked, handleRowChecked }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
           <TableHeader>
           <Checkbox checked={headerChecked} onChange={() => handleHeaderChecked(!headerChecked)} />
           </TableHeader>
          {columns.map((column, index) => (
            <TableHeader key={index}>{column}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => {
         return (
          <tr key={rowIndex}>
            <TableCell>
                <Checkbox checked={row?.Checked} onChange={() => handleRowChecked(row.Id)} />
            </TableCell>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>
                {row[column]}
              </TableCell>
            ))}
          </tr>
        )})}
      </tbody>
    </TableWrapper>
  );
};

export default TableComponent;