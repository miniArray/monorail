# vue-monorail

![npm](https://img.shields.io/npm/v/@miniarray/vue-monorail.svg)
![CircleCI](https://img.shields.io/circleci/project/github/miniArray/vue-monorail.svg)

[![codebeat badge](https://codebeat.co/badges/83a1a3eb-c751-4782-b994-e2a16428a1b1)](https://codebeat.co/projects/github-com-miniarray-vue-monorail-master)
![license](https://img.shields.io/github/license/miniArray/vue-monorail.svg)
![Codecov](https://img.shields.io/codecov/c/github/miniArray/vue-monorail.svg)

![GitHub issues](https://img.shields.io/github/issues-raw/miniArray/vue-monorail.svg)
![GitHub commit activity the past week, 4 weeks, year](https://img.shields.io/github/commit-activity/y/miniArray/vue-monorail.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/miniArray/vue-monorail.svg)

# Installation

## Modern

```bash
$ npm install @miniarray/vue-monorail
$ npm install vue metro4 # dependencies
```

```js
import Vue from 'vue'
import Monorail from '@miniarray/vue-monorail'
import 'metro4/build/css/metro-all.css' // Required for CSS styles

Vue.use(Monorail)
```

## CDN

```html
<link href="https://unpkg.com/metro4@4/build/css/metro-all.css" rel="stylesheet" />
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/@miniarray/vue-monorail/dist/components/monorail.js"></script>
```