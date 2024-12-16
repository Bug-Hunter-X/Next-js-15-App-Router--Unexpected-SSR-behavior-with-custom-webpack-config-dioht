# Next.js 15 App Router: Unexpected SSR behavior with custom webpack config

This repository demonstrates a bug in Next.js 15's App Router where unexpected behavior occurs during server-side rendering (SSR) when using a custom `next.config.js` file to modify the webpack configuration.  The issue is specifically related to the interaction between the new App Router and webpack configuration changes affecting how modules are processed. The bug manifests itself as an unexpected error during build or runtime, often related to module resolution or import statements.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev` (or `npm run build` for production).

## Expected Behavior

The application should build and run correctly, rendering the 'Hello' message without errors.

## Actual Behavior

The application either fails to build or throws an error during SSR due to issues with module resolution or unexpected webpack behavior as a result of modifying the webpack configuration.

## Solution

The solution requires careful review and adjustment of the webpack configuration within `next.config.js`. This might involve using webpack loaders correctly, ensuring proper module resolution settings, or adjusting other relevant configuration based on the specific error encountered. The solution provided attempts to address common causes.  Always check the specific error messages for guidance.