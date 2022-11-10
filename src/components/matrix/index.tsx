import { Col, Row } from 'antd';
import type { FC } from 'react';

import { Box } from './box';

type MatrixProps = {
  row: number;
  col: number;
};

export const Matrix: FC<MatrixProps> = ({ row, col }: MatrixProps) => {
  const colCount = Math.floor(24 / col);
  // const rowArr: any = new Array(row).fill(null);
  const colArr: any[] = new Array(col * row).fill(null);
  return (
    <div>
      <Row gutter={16}>
        {colArr.map((_, idx: number) => {
          return (
            <Col key={idx} span={colCount}>
              <Box />
            </Col>
          );
        })}
      </Row>
      {/* {rowArr.map((_, i: number) => {
        return (
         
        );
      })} */}
    </div>
  );
};
