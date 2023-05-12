import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import fonts from "./fonts";
import colors from "./colors";

const overrides = {
  styles,
  fonts,
  colors,
};

const theme = extendTheme(overrides);

export default theme;
