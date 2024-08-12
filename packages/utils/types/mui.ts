import { Interpolation } from "@mui/material";

export type MuiDefaultVariant<P> = {
  props: P;
  style: Interpolation<P>; 
}
