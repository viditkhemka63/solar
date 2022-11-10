import { Spin } from 'antd';
import { useState } from 'react';

import { DimenssionForm } from '@/components/sidebar/input';
import { SelectPanel } from '@/components/sidebar/panels';
import { Solve } from '@/components/solve';

const Index = () => {
  // const [area, setArea] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (values: any) => {
    // setArea(values);
    console.log(values);

    const { width, height } = values;

    setIsLoading(true);

    const res: any = Solve(height, width);
    setResult(res);

    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="sidebar">
          <DimenssionForm
            onSubmit={(values: any) => {
              onSubmit(values);
            }}
          />

          <SelectPanel />
        </div>
        <div className="result">
          {isLoading ? (
            <Spin size="large" />
          ) : (
            <div className="value">{result}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
