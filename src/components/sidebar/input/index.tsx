// import
import { Button, Form, InputNumber } from 'antd';
import type { FC } from 'react';
import React from 'react';

// type LayoutType = Parameters<typeof Form>[0]['layout'];

type DimenssionFormProps = {
  onSubmit: (val: any) => void;
};

export const DimenssionForm: FC<DimenssionFormProps> = ({
  onSubmit,
}: DimenssionFormProps) => {
  // const [form] = Form.useForm();
  // const [value, setValue] = useState();

  // const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  // const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
  //   setFormLayout(layout);
  // };

  const onFinish = (values: any) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // const formItemLayout =
  //   formLayout === 'horizontal'
  //     ? {
  //         labelCol: { span: 4 },
  //         wrapperCol: { span: 14 },
  //       }
  //     : null;

  // const buttonItemLayout =
  //   formLayout === 'horizontal'
  //     ? {
  //         wrapperCol: { span: 14, offset: 4 },
  //       }
  //     : null;

  return (
    <div className="input-form">
      <h1>Dimensions of Roof</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="width"
          rules={[{ required: true, message: 'Please input width!' }]}
        >
          <InputNumber style={{ width: '100%' }} size="large" />
        </Form.Item>

        <Form.Item
          name="height"
          rules={[{ required: true, message: 'Please input height!' }]}
        >
          <InputNumber style={{ width: '100%' }} size="large" />
        </Form.Item>

        <Form.Item
          style={{ width: '100%' }}
          // wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
            Generate
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
