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

## Reproduce the issue

1. Go to the correct localhost port in your browser
2. Open the browser console
3. Clear the console for clarity
4. Click on the "Submit" button of the form in the browser
5. Notice the number of entries in the Console went from 0 (because you cleared it) to 6

If I downgrade the react-hook-form version from 7.51.1 to 7.51.0, then you will only see 2 entries in the Console. This means there is some kind of regression. I spent quite a bit digging but I'm not sure what's causing it yet. I noticed the release notes of 7.51.1 mentioned validatingFields. That seems to be related.

I commented out some other components that I was testing with, but they don't seem to be affected (there seems to be no difference between the old and newer versions of react-hook-form, with relation to rerenders).

Also, if you fill in the complete form correctly, and then submit, you will see 4 entries **before** the `onSubmit` `console.log(data)` call, and 4 entries **after** it, whereas with 7.51.0 you'll **only** see the `onSubmit` `console.log(data)`, and then 4 entries **after** it.

If you want to downgrade, obviously don't forget to run `pnpm i` (or whatever package manager you use) again.
