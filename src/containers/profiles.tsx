import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

interface SelectProfileContainerProps {
  user: firebase.User;
  setProfile: ({
    displayName,
    photoURL,
  }: {
    displayName: string;
    photoURL: string;
  }) => void;
}

export function SelectProfileContainer({
  user,
  setProfile,
}: SelectProfileContainerProps) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName as string,
                photoURL: user.photoURL as string,
              })
            }
            data-testid="user-profile"
          >
            <Profiles.Picture src={user.photoURL!} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
