import { colors } from "./color";
import { typography } from "./typography";

const theme = {
  colors,
  size: {
    minWidth: '320px',
    maxWidth: '480px',
    appBarHeight: '60px',
    gnbHeight: '75px',
  },
  zIndex: {
    overlay: 5,
    appBar: 10,
    gnb: 10,
    fab: 10,
    dim: 20,
    actionSheet: 30,
    bottomSheet: 30,
    dialog: 40,
  },
  typo: { ...typography },
} as const;

export default theme;
