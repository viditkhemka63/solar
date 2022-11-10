import { Col, Row } from 'antd';

import { Matrix } from '@/components/matrix';
import { TILES } from '@/constants';

export const SelectPanel = () => {
  return (
    <div>
      <h1>Select Pannels</h1>

      <div className="panels-contaienr">
        <Row gutter={24}>
          {TILES.map((tile: number[], index: number) => {
            return (
              <Col key={index} span={12} className="panel">
                <Matrix row={tile[0] ?? 1} col={tile[1] ?? 1} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
