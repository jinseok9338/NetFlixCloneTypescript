import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

interface ProfilesProps {
  children: React.ReactNode;
}

interface Proptypes {
  children?: React.ReactNode;
  src?: string;
  onClick?: () => void;
}
interface ProfilesType extends React.FC<ProfilesProps> {
  Title: React.FC<Proptypes>;
  List: React.FC<Proptypes>;
  User: React.FC<Proptypes>;
  Picture: React.FC<Proptypes>;
  Name: React.FC<Proptypes>;
}

const Profiles: ProfilesType = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
export default Profiles;

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
