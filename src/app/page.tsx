import { Typography } from '@/components';
import { theme } from '@/styles';

import * as S from './page.css';

export default function Home() {
  return (
    <div className={S.container}>
      <Typography variant="display1">안녕하세요</Typography>
      <Typography variant="display2">안녕하세요</Typography>
      <Typography variant="heading1">안녕하세요</Typography>
      <Typography variant="heading2">안녕하세요</Typography>
      <Typography variant="heading3">안녕하세요</Typography>
      <Typography variant="body1">안녕하세요</Typography>
      <Typography variant="body2">안녕하세요</Typography>
      <Typography variant="caption">안녕하세요</Typography>
      <Typography variant="overline">안녕하세요</Typography>
      <Typography variant="display1" weight="bold">
        안녕하세요
      </Typography>
      <Typography variant="display2" weight="bold">
        안녕하세요
      </Typography>
      <Typography variant="heading1" weight="bold">
        안녕하세요
      </Typography>
      <Typography variant="heading2" weight="bold">
        안녕하세요
      </Typography>
      <Typography variant="heading3" weight="bold">
        안녕하세요
      </Typography>
      <Typography variant="body1" weight="bold">
        안녕하세요
      </Typography>
      <Typography variant="body2" weight="bold">
        안녕하세요
      </Typography>
      <Typography variant="caption" weight="bold">
        안녕하세요
      </Typography>
      <Typography variant="overline" weight="bold">
        안녕하세요
      </Typography>
      <Typography color={theme.colors.primary[100]}>안녕하세요</Typography>
      <Typography color={theme.colors.primary[200]}>안녕하세요</Typography>
      <Typography color={theme.colors.primary[300]}>안녕하세요</Typography>
      <Typography color={theme.colors.primary[400]}>안녕하세요</Typography>
      <Typography color={theme.colors.primary[500]}>안녕하세요</Typography>
      <Typography color={theme.colors.primary[600]}>안녕하세요</Typography>
      <Typography color={theme.colors.primary[700]}>안녕하세요</Typography>
      <Typography color={theme.colors.primary[800]}>안녕하세요</Typography>
      <Typography color={theme.colors.primary[900]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[100]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[200]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[300]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[400]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[500]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[600]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[700]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[800]}>안녕하세요</Typography>
      <Typography color={theme.colors.grey[900]}>안녕하세요</Typography>
    </div>
  );
}
