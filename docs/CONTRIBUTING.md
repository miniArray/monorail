# Contributing

## Clone

```bash
git clone https://github.com/miniArray/monorail.git
```

## Setup

```bash
cd monorail
npm install
```

## Develop

```bash
npm run serve
```

Go to http://localhost:6060 to view the current state of the styleguide.

### Create a new component

```bash
npm run component:create <name>
```

Your component will be available in `src/component/<name>`

## Comitting

We're using [commitizen](https://github.com/commitizen/cz-cli) to increase the quality of commit messages and to generate meaningful changelogs

`npm run commit` - Starts the commitizen prompt (assumes you have at least 1 staged file)

`npm run commit:all` - Stages all files, then starts the commitizen prompt

> You can still make a commit with `git commit` but you will still need to follow the [convention](https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md)
