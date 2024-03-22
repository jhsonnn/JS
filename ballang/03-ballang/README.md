This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Next (App router)

## 핵심

1. app 아래의 디렉터리 경로가 그대로 url 이 된다.
2. app 디렉터리는 root('/') url 이다.
3. 디렉터리 안에 있는 `page.tsx` 파일이 페이지가 된다.
4. 디렉터리 안에 있는 `layout.tsx` 파일이 해당 경로의 페이지와 하위 경로에 있는 페이지들의 레이아웃이 된다.
5. 동적라우팅(Dynamic Routing)은 디렉터리의 이름을 대괄호로 묶어서 생성하면 된다.
   /products/[productId]/page.ts
   =>/products/:productId

## SSR

- Next에서는 모든 컴포넌트가 "기본적으로" 서버사이드렌더링 된다.

## 레이아웃

디렉터리 안에 있는 `layout.tsx` 파일이 해당 경로의 페이지와 하위 경로에 있는 페이지들의 레이아웃이 된다.

## 경로에 포함되지 않는 디렉터리들

=>app 디렉터리 안에 해당함(라우팅 시스템 내에서만 해당)
방법

1. 디렉터리 이름을 소괄호('()')로 감싼다.

- 경로에는 포함되지 않지만 라우팅 시스템(App Router)의 컨벤션들이 작동함(라우팅 시스템에는 포함됨)
- 즉, App Router 라우팅 시스템이 제공하는 컨벤션들을 쓸 수 있음.

2. 디렉터리 이름의 첫 글자를 언더스코어로 시작한다.

- 경로에도 포함되지 않고, 라우팅 시스템 자체에서 배제됨.
- 즉, App Router 라우팅 시스템이 제공하는 컨벤션들이 무효임.

디렉터리 경로 => next에서는 url로 바뀜 (app=> /, ()안은 무시)
app/(root)/my -> /my
app/(root)/products -> /products
app/(root)/products/[productId] -> /products/:productId

## CSR

서버사이드에서 그려서 보내줄 수 없는 경우들

1. 이벤트를 핸들링하는 코드가 있는 컴포넌트
2. React의 hook을 사용하는 코드가 있는 컴포넌트

이런 컴포넌트를 그냥 사용하려고 하면 에러가 나요.
Next는 기본적으로 모든 컴포넌트를 서버 사이드에서 그리려고 하기 때문에.

그런 컴포넌트들을 클라이언트 사이드에서 그리라고 알려주려면
"해당 파일의 최상단에" `'use client'`라고 작성해야함.

# React Query

Server State Management Library
<-> Client State Management Library

State Management 상태 관리
-> Global State Management 전역 상태 관리 라이브러리들이 만들어졌죠

Redux -> 리액트, 즉 클라이언트 사이드에서의 이런저런 상태 관리에는 최적화 -> 서버로부터 받아오는 데이터들을 클라이언트에서 계속해서 동기화하고, 관리하는 것에는 충분히 편리하지 않았던 것
