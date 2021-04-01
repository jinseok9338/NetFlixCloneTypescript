import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

interface LoadingProps {
  src: string;
}

interface LoadingType extends React.FC<LoadingProps> {
  ReleaseBody: React.FC;
}

const Loading: LoadingType = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
