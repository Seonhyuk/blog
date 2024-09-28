import { Icon, Tag, Typography } from '@/components';

import * as S from './page.css';

const Home = () => {
  return (
    <div className={S.container}>
      <Tag>
        <Typography>안녕</Typography>
      </Tag>

      <Icon icon="Menu" />
    </div>
  );
};

export default Home;
