import { Skeleton } from '@/components';
import { theme } from '@/styles';

import * as S from './page.css';

const Home = () => {
  return (
    <div className={S.container}>
      <Skeleton width="100px" height="100px" radius={theme.radius['300']} />
      <Skeleton width="100px" height="100px" radius={theme.radius['400']} />
      <Skeleton width="100px" height="100px" radius={theme.radius['500']} />
      <Skeleton width="100px" height="100px" radius={theme.radius['600']} />
      <Skeleton width="100px" height="100px" radius={theme.radius['900']} />
    </div>
  );
};

export default Home;
