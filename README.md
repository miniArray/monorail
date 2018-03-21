<div align="center">
  <img src="./assets/logo.png" />
  <h3>Metro UI compent library for <a href="https://vuejs.org">Vue.js</a></h3>

<br>
<img src="https://img.shields.io/npm/v/@miniarray/monorail.svg" alt="npm" />
<img src="https://img.shields.io/circleci/project/github/miniArray/monorail.svg" alt="CircleCI" />
<img src="https://img.shields.io/github/license/miniArray/monorail.svg" alt="license" />
<img src="https://img.shields.io/github/issues-raw/miniArray/monorail.svg" alt="GitHub issues" />
<a href="https://app.fossa.io/projects/git%2Bgithub.com%2FminiArray%2Fmonorail?ref=badge_shield"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2FminiArray%2Fmonorail.svg?type=shield" alt="FOSSA Status" /></a>
<br>
<img src="https://img.shields.io/github/commit-activity/y/miniArray/monorail.svg" alt="GitHub commit activity the past week, 4 weeks, year" />
<img src="https://img.shields.io/github/last-commit/miniArray/monorail.svg" alt="GitHub last commit" />
<a href="https://www.npmjs.com/package/@miniarray/monorail"><img src="https://img.shields.io/npm/dm/@miniarray/monorail.svg" alt="npm" /></a>
<br>
<a href="https://david-dm.org/miniArray/monorail?type=dev"><img src="https://david-dm.org/miniArray/monorail/dev-status.svg" alt="devDependenciesStatus" /></a>
<a href="https://david-dm.org/miniArray/monorail?type=peer"><img src="https://david-dm.org/miniArray/monorail/peer-status.svg" alt="peerDependenciesStatus" /></a>
<a href="https://nodesecurity.io/orgs/miniarray/projects/12ea7e2d-3c86-4196-b4ad-bb8abc355d19"><img src="https://nodesecurity.io/orgs/miniarray/projects/12ea7e2d-3c86-4196-b4ad-bb8abc355d19/badge" alt="NSP Status" /></a>
<br>
<a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/miniArray/monorail.svg" alt="Greenkeeper badge" /></a>
<a href="https://github.com/miniArray/monorail/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="contributions welcome" /></a>
<a href="https://www.codetriage.com/miniarray/monorail"><img src="https://www.codetriage.com/miniarray/monorail/badges/users.svg" alt="Open Source Helpers" /></a>
<br>
<!-- <img src="https://img.shields.io/codecov/c/github/miniArray/monorail.svg" alt="Codecov" /> -->
<a href="https://codebeat.co/projects/github-com-miniarray-monorail-master"><img src="https://codebeat.co/badges/83a1a3eb-c751-4782-b994-e2a16428a1b1" alt="codebeat badge" /></a>
<a href="http://chat.monorail.rocks">
  <img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat">
</a>
<a href="./docs/donate.md">
  <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat" alt="Chat">
</a>
<a href="https://github.com/nhnent">
  <img src="https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-miniArray-ff1414.svg" alt="code with hearth by miniArray">
</a>
<br>
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
<a href="https://unpkg.com/@miniarray/monorail/dist/components/monorail.js"><img src="http://img.badgesize.io/https://unpkg.com/@miniarray/monorail/dist/components/monorail.js?compression=gzip"></a>
<img src="http://npm.packagequality.com/badge/@miniarray/monorail.png"/>
<a href="https://codeclimate.com/github/miniArray/monorail/maintainability"><img src="https://api.codeclimate.com/v1/badges/91b2544d689f9c3cfbcb/maintainability" /></a>
</div>


# Introduction

monorail is a metro UI component framework for [Vue.js](https://vuejs.com). It aims to provide clean, semantic and reusable components that make building your web based windows application a breeze.

## Browser Support

monorail supports **[evergreen browsers](https://www.techopedia.com/definition/31094/evergreen-browser)**, mobile, laptop & desktop.

# Documentation

You can find the monorail documentation [on the website](http://monorail.rocks).

## One minute Quick-start

[Codepen link](http://starter.monorail.rocks)
```html
<!DOCTYPE html>
<html>
  <head>
    <link href="https://unpkg.com/metro4@4/build/css/metro-all.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  </head>
  <body>
    <div id="app">
      <m-switch :checked="true" />
    </div>

    <script src="https://unpkg.com/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/@miniarray/monorail/dist/components/monorail.js"></script>
    <script>
      new Vue({
        el: '#app'
      })
    </script>
  </body>
</html>
```
# Installation

## Modern

```bash
$ npm install @miniarray/monorail
$ npm install vue metro4 # dependencies
```

```js
import Vue from 'vue'
import Monorail from '@miniarray/monorail'
import 'metro4/build/css/metro-all.css' // Required for CSS styles

Vue.use(Monorail)
```

## CDN

```html
<link href="https://unpkg.com/metro4@4/build/css/metro-all.css" rel="stylesheet" />
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/@miniarray/monorail/dist/components/monorail.js"></script>
```

# Running The Test Suite

**Console:**

Installed the dependencies, via:

    npm install

then you can run the tests (and get detailed output) by running:

    npm test

# Community Support

Ask your support questions on the [monorail Discord Community](http://chat.monorail.rocks).

## Contributing

Developers interested in contributing should read the [Code of Conduct](./docs/code_of_conduct.md).

> Please do **not** ask general questions in an issue. Issues are only to report bugs, request
  enhancements, or request new features. For general questions and discussions, ask on the [monorail Discord Community](http://chat.monorail.rocks).

It is important to note that for each release, the detailed changes are documented in the [release notes](http://releases.monorail.rocks).

### Contributing Guide

You can report issues by following the [Issue Template](http://issues.monorail.rocks) and you can create a minimal reproduction with a [CodePen template](http://template.monorail.rocks) or a full project at [CodeSandbox](https://codesandbox.io/s/vue).

We also have a list of [help wanted](http://help.monorail.rocks) issues that you might want to check.

# License

monorail is [MIT licensed](./LICENSE).