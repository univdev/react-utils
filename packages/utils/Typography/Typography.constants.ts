import { TypographyProps } from "@mui/material";
import { CSSProperties } from "react";

export const defaultTypographyProps: Partial<TypographyProps> = {
  fontFamily: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(', '),
  variantMapping: {
    "Body/1_Medium_16px": 'p',
    "Body/1_Regular_16px": 'p',
    "Body/2_Medium_14px": 'p',
    "Body/2_Regular_14px": 'p',
    "Body/3_Medium_13px": 'p',
    "Body/3_Regular_13px": 'p',
    "Caption/1_Medium_12px": 'span',
    "Caption/1_Regular_12px": 'span',
    "Display/1_Bold_30px": 'h1',
    "Display/2_Bold_26px": 'h2',
    "Heading/1_Bold_24px": 'h3',
    "Heading/1_Medium_24px": 'h3',
    "Heading/1_SemiBold_24px": 'h3',
    "Heading/2_Bold_22px": 'h4',
    "Heading/2_Medium_22px": 'h4',
    "Heading/2_SemiBold_22px": 'h4',
    "Heading/3_Bold_20px": 'h5',
    "Heading/3_Medium_20px": 'h5',
    "Heading/3_SemiBold_20px": 'h5',
    "Heading/4_Bold_18px": 'h6',
    "Heading/4_Medium_18px": 'h6',
    "Heading/4_SemiBold_18px": 'h6',
    "Title/1_Medium_16px": 'p',
    "Title/1_SemiBold_16px": 'p',
    "Title/2_Medium_15px": 'p',
    "Title/2_SemiBold_15px": 'p',
    "Title/3_Medium_14px": 'p',
    "Title/3_SemiBold_14px": 'p',
  },
};

export const TypographyDisplay1Bold30px: CSSProperties = {
  fontSize: 30,
  fontWeight: 700,
  lineHeight: '40px',
};

export const TypographyDisplay2Bold26px: CSSProperties = {
  fontSize: 26,
  fontWeight: 700,
  lineHeight: '36px',
};

export const TypographyHeading1Bold24px: CSSProperties = {
  fontSize: 24,
  fontWeight: 700,
  lineHeight: '34px',
};

export const TypographyHeading1SemiBold24px: CSSProperties = {
  fontSize: 24,
  fontWeight: 600,
  lineHeight: '34px',
};

export const TypographyHeading1Medium24px: CSSProperties = {
  fontSize: 24,
  fontWeight: 500,
  lineHeight: '34px',
};

export const TypographyHeading2Bold24px: CSSProperties = {
  fontSize: 24,
  fontWeight: 600,
  lineHeight: '34px',
};

export const TypographyHeading2Medium22px: CSSProperties = {
  fontSize: 22,
  fontWeight: 500,
  lineHeight: '34px',
};

export const TypographyHeading2SemiBold22px: CSSProperties = {
  fontSize: 22,
  fontWeight: 600,
  lineHeight: '34px',
};

export const TypographyHeading2Bold22px: CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  lineHeight: '31px',
};

export const TypographyHeading3Bold20px: CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  lineHeight: '28px',
};

export const TypographyHeading3SemiBold20px: CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  lineHeight: '28px',
};

export const TypographyHeading3Medium20px: CSSProperties = {
  fontSize: 20,
  fontWeight: 500,
  lineHeight: '28px',
};

export const TypographyHeading4Bold18px: CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  lineHeight: '26px',
};

export const TypographyHeading4SemiBold18px: CSSProperties = {
  fontSize: 18,
  fontWeight: 600,
  lineHeight: '26px',
};

export const TypographyHeading4Medium18px: CSSProperties = {
  fontSize: 18,
  fontWeight: 500,
  lineHeight: '26px',
};

export const TypographyTitle1SemiBold16px: CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '24px',
};

export const TypographyTitle1Medium16px: CSSProperties = {
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '24px',
};

export const TypographyTitle2SemiBold15px: CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  lineHeight: '24px',
};

export const TypographyTitle2Medium15px: CSSProperties = {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '24px',
};

export const TypographyTitle3SemiBold14px: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '24px',
};

export const TypographyTitle3Medium14px: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '24px',
};

export const TypographyBody1Medium16px: CSSProperties = {
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '26px',
};

export const TypographyBody1Regular16px: CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '26px',
};

export const TypographyBody2Medium16px: CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '22px',
};

export const TypographyBody2Regular16px: CSSProperties = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '22px',
};

export const TypographyBody3Medium16px: CSSProperties = {
  fontSize: 13,
  fontWeight: 500,
  lineHeight: '21px',
};

export const TypographyBody3Regular16px: CSSProperties = {
  fontSize: 13,
  fontWeight: 400,
  lineHeight: '21px',
};

export const TypographyCaption1Medium12px: CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  lineHeight: '18px',
};

export const TypographyCaption1Regular12px: CSSProperties = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '18px',
};

export const defaultTypographyOptions = {
  fontFamily: defaultTypographyProps.fontFamily as string,
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  body1: undefined,
  body2: undefined,
  button: undefined,
  caption: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
  overline: undefined,
  'Display/1_Bold_30px': TypographyDisplay1Bold30px,
  'Display/2_Bold_26px': TypographyDisplay2Bold26px,

  'Heading/1_Bold_24px': TypographyHeading1Bold24px,
  'Heading/1_SemiBold_24px': TypographyHeading1SemiBold24px,
  'Heading/1_Medium_24px': TypographyHeading1Medium24px,
  'Heading/2_Bold_22px': TypographyHeading2Bold24px,
  'Heading/2_SemiBold_22px': TypographyHeading2SemiBold22px,
  'Heading/2_Medium_22px': TypographyHeading2Medium22px,
  'Heading/3_Bold_20px': TypographyHeading3Bold20px,
  'Heading/3_SemiBold_20px': TypographyHeading3SemiBold20px,
  'Heading/3_Medium_20px': TypographyHeading3Medium20px,
  'Heading/4_Bold_18px': TypographyHeading4Bold18px,
  'Heading/4_SemiBold_18px': TypographyHeading4SemiBold18px,
  'Heading/4_Medium_18px': TypographyHeading4Medium18px,
  
  'Title/1_SemiBold_16px': TypographyTitle1SemiBold16px,
  'Title/1_Medium_16px': TypographyTitle1Medium16px,
  'Title/2_SemiBold_15px': TypographyTitle2SemiBold15px,
  'Title/2_Medium_15px': TypographyTitle2Medium15px,
  'Title/3_SemiBold_14px': TypographyTitle3SemiBold14px,
  'Title/3_Medium_14px': TypographyTitle3Medium14px,

  'Body/1_Medium_16px': TypographyBody1Medium16px,
  'Body/1_Regular_16px': TypographyBody1Regular16px,
  'Body/2_Medium_14px': TypographyBody2Medium16px,
  'Body/2_Regular_14px': TypographyBody2Regular16px,
  'Body/3_Medium_13px': TypographyBody3Medium16px,
  'Body/3_Regular_13px': TypographyBody3Regular16px,

  'Caption/1_Medium_12px': TypographyCaption1Medium12px,
  'Caption/1_Regular_12px': TypographyCaption1Regular12px,
};
