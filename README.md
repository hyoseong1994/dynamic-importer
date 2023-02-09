# dynamic import

> create react app 을 통해서 만든 react app에서 components을 좀 더 효율적이게 import/export를 하고 싶어서 만들었습니다.

# 프로젝트 실행 방법

## 실행 환경

- nodejs: 18.7.0
- npm: 8.15.0
- 웹 브라우저: chrome 109.0.5414.119

## 설치

- yarn 설치

```sh
npm install -g yarn@1.22.19
```

- 패키지 설치

```sh
yarn install
```

## 실행

`yarn start`실행 후, 웹 브라우저에서 localhost:3000로 실행 결과물을 확인

```sh
yarn start
```

## 프로젝트 구조

- component : 반복되는 요소 분리하여 구성

```bash
├── public
├── src
│   ├── components
├── App.tsx
├── index.tsx
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```
