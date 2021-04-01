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
  children?: React.ReactNode;
  to?: string;
  placeholder?: string;
  onSubmit?: (event: {
    preventDefault: () => void;
  }) => Promise<void> | undefined;
  value?: string;
  method?: 'POST' | 'GET';
  type?: 'submit';
  disabled?: boolean;
}

interface InputProps {
  onChange?: (event: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  type?: 'password';
  placeholder?: string;
  value?: string;
  autoComplete?: 'off';
}

interface FormType extends React.FC<FormProps> {
  Error: React.FC<PropTypes>;
  Base: React.FC<PropTypes>;
  TextSmall: React.FC<PropTypes>;
  Title: React.FC<PropTypes>;
  Text: React.FC<PropTypes>;
  Link: React.FC<PropTypes>;
  Input: React.FC<InputProps>;
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
    <Link to={to!} {...restProps}>
      {children}
    </Link>
  );
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, onSubmit, type, ...restProps }) {
  return (
    <Submit onSubmit={onSubmit} type={'submit'} {...restProps}>
      {children}
    </Submit>
  );
};
