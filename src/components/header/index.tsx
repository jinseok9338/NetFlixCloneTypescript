import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from './styles/header';

interface HeaderProps {
  children: React.ReactNode;
  bg: boolean;
  src: string;
  dontShowOnSmallViewPort: boolean;
}

interface PropTypes {
  children: React.ReactNode;
  to?: string;
  searchTerm?: string;
  setSearchTerm?: (search: string) => void;
  src?: string;
  active?: boolean;
}

interface HeaderType extends React.FC<HeaderProps> {
  Frame: React.FC<PropTypes>;
  Group: React.FC<PropTypes>;
  Logo: React.FC<PropTypes>;
  Search: React.FC<PropTypes>;
  Profile: React.FC<PropTypes>;
  Text: React.FC<PropTypes>;
  ButtonLink: React.FC<PropTypes>;
  Feature: React.FC<PropTypes>;
  Picture: React.FC<PropTypes>;
  Dropdown: React.FC<PropTypes>;
  TextLink: React.FC<PropTypes>;
  PlayButton: React.FC<PropTypes>;
  FeatureCallOut: React.FC<PropTypes>;
}

const Header: HeaderType = ({
  bg = true,
  children,
  src,
  dontShowOnSmallViewPort,
  ...restProps
}) => {
  return (
    <>
      bg ? (
      <Background
        src={src}
        dontShowOnSmallViewPort={dontShowOnSmallViewPort}
        data-testid="header-bg"
        {...restProps}
      >
        {children}
      </Background>
      ) : ( children )
    </>
  );
};

export default Header;

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to!}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm!(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, active, ...restProps }) {
  return (
    <Link active={active!} {...restProps}>
      {children}
    </Link>
  );
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, to, ...restProps }) {
  return (
    <ButtonLink to={to!} {...restProps}>
      {children}
    </ButtonLink>
  );
};
