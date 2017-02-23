# LearnerOnline

Dashboard and Admin portal for Learner Management & Online Learning application

Developed by Lilupa Karu

`LearnerOnline` provides the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Ahead-of-Time compilation support.
- Sample unit tests with Jasmine and Karma including code coverage via istanbul.
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the best practices for your application’s structure.
- Manager of your type definitions using @types.
- Has autoprefixer and css-lint support.

## How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

In order to start the seed use:

```bash
git clone https://github.com/karu-lk/LearnerOnline.git

# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
# npm run build.docs

# dev build
npm run build.dev
# prod build
npm run build.prod
# prod build with AoT compilation
npm run build.prod.exp

# dev build of multiple applications (by default the value of --app is "app")
npm start -- --app baz
npm start -- --app foo
npm start -- --app bar
```


### Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
npm start -- --config-env ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.
