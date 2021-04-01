import React from 'react';
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/form';

interface FormProps {
  children: React.ReactNode;
}

interface PropTypes {
  children: React.ReactNode;
}

interface LinkPorps {
  children: React.ReactNode;
  to: string;
}

interface FormType extends React.FC<FormProps> {
  Error: React.FC<PropTypes>;
  Base: React.FC<PropTypes>;
  TextSmall: React.FC<PropTypes>;
  Title: React.FC<PropTypes>;
  Text: React.FC<PropTypes>;
  Link: React.FC<LinkPorps>;
  Input: React.FC<PropTypes>;
  Submit: React.FC<PropTypes>;
}

const Form: FormType = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Form;

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, to, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
