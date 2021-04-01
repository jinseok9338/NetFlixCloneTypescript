import React from 'react';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './styles/footer';

interface FooterProps {
  children: React.ReactNode;
}

interface PropTypes {
  children: React.ReactNode;
}

interface FooterType extends React.FC<FooterProps> {
  Row: React.FC<PropTypes>;
  Column: React.FC<PropTypes>;
  Link: React.FC<PropTypes>;
  Title: React.FC<PropTypes>;
  Text: React.FC<PropTypes>;
  Break: React.FC<PropTypes>;
}

const Footer: FooterType = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
export default Footer;

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
