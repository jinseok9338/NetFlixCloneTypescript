import React from 'react';
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

interface JumbotronProps {
  children: React.ReactNode;
  direction: string;
}

interface PropTypes {
  children?: React.ReactNode;
  src?: string;
  alt?: string;
}

interface JumbotronType extends React.FC<JumbotronProps> {
  Container: React.FC<PropTypes>;
  Pane: React.FC<PropTypes>;
  SubTitle: React.FC<PropTypes>;
  Title: React.FC<PropTypes>;
  Image: React.FC<PropTypes>;
}

const Jumbotron: JumbotronType = ({
  children,
  direction = 'row',
  ...restProps
}) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
