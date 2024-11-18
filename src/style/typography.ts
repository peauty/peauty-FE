import { css } from 'styled-components';

export const typography = {
  title1: css`
    font-weight: 600;
    font-size: 24px;
  `,
  title2: css`
    font-weight: 600;
    font-size: 20px;
  `,
  subtitle1: css`
    font-weight: 600;
    font-size: 16px;
  `,
  subtitle2: css`
    font-weight: 600;
    font-size: 14px;
  `,
  subtitle3: css`
    font-weight: 500;
    font-size: 16px;
  `,
  body1: css`
    font-weight: 600;
    font-size: 12px;
  `,
  body2: css`
    font-weight: 500;
    font-size: 12px;
  `,
  body3: css`
    font-weight: 500;
    font-size: 10px;
  `,
  body4: css`
    font-weight: 400;
    font-size: 14px;
  `,
  body5: css`
    font-weight: 400;
    font-size: 12px;
  `,
  body6: css`
    font-weight: 400;
    font-size: 10px;
  `,
} as const;
