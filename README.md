# Vue 3 Boilerplate

This is a stater template for Vue 3 + Vite + Typescript.

### Tech Stack

...Updating

#### Version

- NodeJS (`v18.12.1`) (mine)
- VueJS (`v3.2.45`)

## Folder Structure

```js
├── ...
├── src
│   ├── assets       # Contain things like (image, icon, logo, .stc)
│   ├── components   # Contain reusable UI components like (Header, Footer, Modal, Button, .etc)
│   ├── composables  # Contain functions that leverages Vue's Composition API to encapsulate and reuse stateful logic
│   ├── libs         # Contain third-party libraries
│   ├── router       # Contain routes which enable the navigation among views of various components in application
│   ├── service      # Contain API services
│   ├── styles       # As global styles
│   ├── types        # (only Typescript) Manages types and interfaces
│   ├── utils        # Contain constants (static data) and utility functions (pure function)
│   └── views        # Contain components which are associated with main pages
└── ...
```

## Getting Started

**1. Clone the repository and install dependencies**

```bash
$ git clone https://github.com/doduy291/vue3-boilerplate.git <YOUR_FOLDER_NAME>
$ cd <YOUR_FOLDER_NAME>
$ npm install
```

**2. Enable husky** (Optional)

```bash
$ npm run prepare
```

> ⚠️ Ensure that you have got a Git repository, otherwise run this command: `git init`.
> You can pass over this command if you installed packages before.

**3. Development**

```bash
$ npm run dev
```
