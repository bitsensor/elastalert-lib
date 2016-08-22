# Contributing
We love it when you want to contribute to this project. Here are some guidelines to get you started.

## Setting Up Your Environment
Clone the repo.
```
git clone https://git.bitsensor.io/common/elastalert-lib.git
cd elastalert-lib
```

Install the node version specified in `.node-version`. We highly recommend using tools like [nvm](https://github.com/creationix/nvm) to do
this. 
```
nvm install "$(cat .node-version)"
```

Install the dependencies.
```
npm install
```

## Code Style
We use a tool called EditorConfig to help your IDE use our code style. You can get it [here](http://editorconfig.org/#download).
The rules we use are set in the .editorconfig file.

## Testing
To make sure no changes accidentally break other elements we run unit tests at our build server. It is also possible to run these test on
your local machine.

```
npm run build && npm test
```

The current build status:

|Branch|Status|
|------|------|
|master|[![build status](https://git.bitsensor.io/common/elastalert-lib/badges/master/build.svg)](https://git.bitsensor.io/common/elastalert-lib/commits/master)|
|develop|[![build status](https://git.bitsensor.io/common/elastalert-lib/badges/develop/build.svg)](https://git.bitsensor.io/common/elastalert-lib/commits/develop)|


## Pull Requests
We use a branching model similar to [git-flow](http://nvie.com/posts/a-successful-git-branching-model/). Please branch off from `develop`
and submit your pull request against `develop`.
