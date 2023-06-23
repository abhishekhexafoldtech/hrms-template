# hrms-template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Guidelines for developer
* All VUE file names should be in PascalCase e.g. EditProfile.vue
* js file ALWAYS start with small letter e.g. my.profile.js
* Component names ALWAYS PascalCase e.g. components/Card/DashboardCard.vue
* folder name always use '-', e.g. edit-profile
* Uri pattern will be like my-profile, dashboard
* variable should be camel case, e.g. $myProfile
* Use proper indentation for each file
* Write proper comments ALWAYS



### What's included

directories and files structure:

```
project structure
    ├── src
    │   ├── api/
    │   ├── assets/
    │   ├── components/
    │   ├── layout/
    │   ├── router/
    │   └── stores/
    │   └── utils/
    │   └── views/
    │   └── App.vue
    │   └── main.js
    │    
    ├── .env
    ├── .env.production
    ├── gitignor
    ├── package-lock.json
    ├── package.json
    ├── README.md
    |-- vite.config.js
```

