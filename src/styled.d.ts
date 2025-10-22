import "styled-components";


import { type ThemeType } from "./styles/theme.style";


declare module "styled-components" {
 
  export interface DefaultTheme extends ThemeType {}
}
