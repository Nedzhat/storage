import { extendTheme } from "@chakra-ui/react";
import "@fontsource/quicksand";

const theme = extendTheme({
  colors: {
    main: "#323b4b",
    second: "#bfbfbf",
  },
});

// Global style overrides
import styles from "./styles";

// Foundational style overrides
// import borders from "./foundations/borders";

// Component style overrides
// import Button from "./components/button";

const overrides = {
  styles,
  //   borders,
  // Other foundational style overrides go here
  //   components: {
  //     Button,
  //     // Other components go here
  //   },
};

export default extendTheme(overrides);
