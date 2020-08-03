import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ProField from '@ant-design/pro-field';
import { Form } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import { ProFormItemProps } from '../../interface';
import { createField } from '../../BaseForm';

/**
 * 文本选择组件
 * @param
 */
const ProFormTextArea: React.ForwardRefRenderFunction<any, ProFormItemProps & TextAreaProps> = (
  { value, fieldProps, ...restProps },
  ref,
) => {
  return (
    <Form.Item {...restProps}>
      <ProField
        text={value as string}
        ref={ref}
        mode="edit"
        valueType="textarea"
        formItemProps={fieldProps}
      />
    </Form.Item>
  );
};

export default createField<ProFormItemProps & TextAreaProps>(React.forwardRef(ProFormTextArea));