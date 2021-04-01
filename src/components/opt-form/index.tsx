import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/opt-form';

interface OptFormProps {
  children: React.ReactNode;
}

interface Proptypes {
  children?: React.ReactNode;
  placeholder?: string;
}
interface OptFormType extends React.FC<OptFormProps> {
  Input: React.FC<Proptypes>;
  Button: React.FC<Proptypes>;
  Text: React.FC<Proptypes>;
  Break: React.FC<Proptypes>;
}

const OptForm: OptFormType = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default OptForm;

OptForm.Input = function OptFormInput({ placeholder, ...restProps }) {
  return <Input placeholder={placeholder} {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
