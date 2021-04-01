import React, {
  useState,
  useContext,
  createContext,
  SetStateAction,
} from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';

interface CardProps {
  children?: React.ReactNode | Element[];
  category?: string;
  item?: {
    children: Element[] | React.ReactNode;
    genre: string;
    slug: string;
    maturity: number;
    description: string;
    title: string;
  };
  key?: string;
}

interface ChildrenProp {
  children?: React.ReactNode;
  item?: SetStateAction<FeatureContextProps>;
  category?: string;
  key?: string;
  src?: string;
}

interface CardType extends React.FC<CardProps> {
  Group: React.FC<ChildrenProp>;
  Title: React.FC<ChildrenProp>;
  SubTitle: React.FC<ChildrenProp>;
  Text: React.FC<ChildrenProp>;
  Entities: React.FC<ChildrenProp>;
  Meta: React.FC<ChildrenProp>;
  Item: React.FC<ChildrenProp>;
  Feature: React.FC<ChildrenProp>;
  Image: React.FC<ChildrenProp>;
}

export interface itemFeatureProps {
  genre?: string;
  slug?: string;
  maturity?: number;
  description?: string;
  title?: string;
  docId?: string;
}

export interface FeatureContextProps {
  showFeature: boolean;
  setShowFeature: React.Dispatch<SetStateAction<boolean>>;
  itemFeature: itemFeatureProps;
  setItemFeature: React.Dispatch<SetStateAction<FeatureContextProps>>;
}

const FeatureContext = createContext({} as FeatureContextProps);

const Card: CardType = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

export default Card;

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  console.log(item);
  console.log('This is item');
  return (
    <Item
      onClick={() => {
        setItemFeature(item!);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { itemFeature, setShowFeature, showFeature } = useContext(
    FeatureContext
  );

  return (
    <>
      {showFeature ? (
        <Feature
          {...restProps}
          src={
            process.env.PUBLIC_URL +
            `/images/${category}/${itemFeature?.genre}/${itemFeature?.slug}/large.jpg`
          }
        >
          <Content>
            <FeatureTitle>{itemFeature?.title}</FeatureTitle>
            <FeatureText>{itemFeature?.description}</FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
              <img src="/images/icons/close.png" alt="Close" />
            </FeatureClose>

            <Group margin="30px 0" flexDirection="row" alignItems="center">
              <Maturity rating={itemFeature?.maturity!}>
                {itemFeature?.maturity! < 12 ? 'PG' : itemFeature?.maturity}
              </Maturity>
              <FeatureText fontWeight="bold">
                {itemFeature?.genre!?.charAt(0).toUpperCase() +
                  itemFeature?.genre!?.slice(1)}
              </FeatureText>
            </Group>

            {children}
          </Content>
        </Feature>
      ) : null}
    </>
  );
};
