import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';

interface AccordionProps {
  children: React.ReactNode;
}

interface PropTypes {
  children: React.ReactNode;
}

interface FeatureType extends React.FC<AccordionProps> {
  Title: React.FC<PropTypes>;
  SubTitle: React.FC<PropTypes>;
}

const Feature: FeatureType = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Feature;

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
