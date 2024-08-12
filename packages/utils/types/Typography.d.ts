/* eslint-disable @typescript-eslint/no-empty-object-type */
import { CSSProperties } from "react";

interface CustomTypographyVariants {
  "Display/1_Bold_30px": CSSProperties;
  "Display/2_Bold_26px": CSSProperties;

  "Heading/1_Bold_24px": CSSProperties;
  "Heading/1_SemiBold_24px": CSSProperties;
  "Heading/1_Medium_24px": CSSProperties;
  "Heading/2_Bold_22px": CSSProperties;
  "Heading/2_SemiBold_22px": CSSProperties;
  "Heading/2_Medium_22px": CSSProperties;
  "Heading/3_Bold_20px": CSSProperties;
  "Heading/3_SemiBold_20px": CSSProperties;
  "Heading/3_Medium_20px": CSSProperties;
  "Heading/4_Bold_18px": CSSProperties;
  "Heading/4_SemiBold_18px": CSSProperties;
  "Heading/4_Medium_18px": CSSProperties;
  
  "Title/1_SemiBold_16px": CSSProperties;
  "Title/1_Medium_16px": CSSProperties;
  "Title/2_SemiBold_15px": CSSProperties;
  "Title/2_Medium_15px": CSSProperties;
  "Title/3_SemiBold_14px": CSSProperties;
  "Title/3_Medium_14px": CSSProperties;

  "Body/1_Medium_16px": CSSProperties;
  "Body/1_Regular_16px": CSSProperties;
  "Body/2_Medium_14px": CSSProperties;
  "Body/2_Regular_14px": CSSProperties;
  "Body/3_Medium_13px": CSSProperties;
  "Body/3_Regular_13px": CSSProperties;

  "Caption/1_Medium_12px": CSSProperties;
  "Caption/1_Regular_12px": CSSProperties;
}

declare module '@mui/material/styles' {
  interface TypographyVariants extends CustomTypographyVariants {}

  interface TypographyVariantsOptions extends CustomTypographyVariants {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'h1': false;
    'h2': false;
    'h3': false;
    'h4': false;
    'h5': false;
    'h6': false;
    'body1': false;
    'body2': false;
    'caption': false;
    'button': false;
    'overline': false;
    'subtitle1': false;
    'subtitle2': false;

    "Display/1_Bold_30px": true;
    "Display/2_Bold_26px": true;

    "Heading/1_Bold_24px": true;
    "Heading/1_SemiBold_24px": true;
    "Heading/1_Medium_24px": true;
    "Heading/2_Bold_22px": true;
    "Heading/2_SemiBold_22px": true;
    "Heading/2_Medium_22px": true;
    "Heading/3_Bold_20px": true;
    "Heading/3_SemiBold_20px": true;
    "Heading/3_Medium_20px": true;
    "Heading/4_Bold_18px": true;
    "Heading/4_SemiBold_18px": true;
    "Heading/4_Medium_18px": true;
    
    "Title/1_SemiBold_16px": true;
    "Title/1_Medium_16px": true;
    "Title/2_SemiBold_15px": true;
    "Title/2_Medium_15px": true;
    "Title/3_SemiBold_14px": true;
    "Title/3_Medium_14px": true;

    "Body/1_Medium_16px": true;
    "Body/1_Regular_16px": true;
    "Body/2_Medium_14px": true;
    "Body/2_Regular_14px": true;
    "Body/3_Medium_13px": true;
    "Body/3_Regular_13px": true;

    "Caption/1_Medium_12px": true;
    "Caption/1_Regular_12px": true;
  }
}