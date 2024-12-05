import { css } from "styled-components";

export const typography = {
  title100: css`
    font-weight: 600;
    font-size: 24px;
  `,
  title200: css`
    font-weight: 500;
    font-size: 24px;
  `,
  title300: css`
    font-weight: 500;
    font-size: 20px;
  `,
  subtitle100: css`
    font-weight: 500;
    font-size: 20px;
  `,
  subtitle200: css`
    font-weight: 600;
    font-size: 16px;
  `,
  subtitle300: css`
    font-weight: 600;
    font-size: 14px;
  `,
  subtitle400: css`
    font-weight: 400;
    font-size: 16px;
  `,
  body100: css`
    font-weight: 500;
    font-size: 14px;
  `,
  body200: css`
    font-weight: 600;
    font-size: 12px;
  `,
  body300: css`
    font-weight: 500;
    font-size: 12px;
  `,
  body400: css`
    font-weight: 400;
    font-size: 12px;
  `,
  body500: css`
    font-weight: 600;
    font-size: 10px;
  `,
  body600: css`
    font-weight: 400;
    font-size: 10px;
  `,
  body700: css`
    font-weight: 400;
    font-size: 11px;
  `,
} as const;
