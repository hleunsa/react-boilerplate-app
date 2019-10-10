# Udemy The Complete React Developer Course (w/ Hooks and React)


## Expensify Application



### Usual commands

- setup / installation
```
yarn install
```

- compilation and run dev-server with webpack
```
yarn dev-server
```

- babel compilation and watch only

  - with webpack
	```
	yarn build
	```

  - with babel
	```
	yarn build-babel
	```
	or
	```
	babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
	```

- launch live-server only
```
yarn serve
```
or
```
live-server public/
```

- for gitpodio(http://gitpod.io) you may/should add `npx` before the command