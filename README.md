# React 유틸 패키지
React 기반 프로젝트 수행 시 필요한 코드를 업로드합니다.  
기술과제, 영리적 프로젝트 등에서 사용해도 꽤나 괜찮은 코드 및 결과물 퀄리티가 나오더라구요.  
**본 프로젝트는 지속적으로 고도화 진행할 예정입니다.**

## Dependencies
본 패키지는 [MUI](https://mui.com/)에 의존합니다.  
그 외 디테일한 의존성은 `package.json` 파일을 참조해주세요.

## Package Manager
본 패키지는 `pnpm@8.15.6` 에서 정상 동작합니다.

## 모노레포에서 의존성 설정하는 방법
프로젝트를 개설하고 의존성을 연결해야 해당 패키지를 사용하실 수 있습니다.  
1. `apps` 폴더에 프로젝트를 생성합니다.
2. `package.json` 파일의 `dependencies` 목록을 아래와 같이 작성합니다.
```json
  "dependencies": {
    "@react-utils/utils": "workspace:*",
  },
```
3. `pnpm install` 명령어를 Root에서 입력하여 심볼릭 링크를 생성합니다.

## ESLint 설정 방법
본 프로젝트에서는 React에서 즉시 사용할 수 있는 eslint 템플릿을 지원합니다.  
1. `apps` 폴더에 프로젝트를 생성합니다.
2. `pnpm create @eslint/config@latest` 명령어로 프로젝트에 적용 될 eslint를 초기화 합니다.
3. `eslint.config.js`를 아래와 같이 설정합니다.
```js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { default as extended } from '@react-utils/eslint-react/react-esm.mjs';

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...extended,
];
```

## Lisence
본 프로젝트는 다음과 같은 목적으로 사용할 수 있어요.
- 비상업적 / 상업적 모든 용도로 사용 가능합니다.
- 본 프로젝트에서 작성 된 패키지(직접 개발하는 다른 소스코드는 제외)의 작성자는 변경하지 말아주세요.
- 본 프로젝트 그 자체를 어떠한 변형도 없이 그대로 판매 및 배포하는 행위는 안돼요.
  