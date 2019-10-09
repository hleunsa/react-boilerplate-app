# Udemy The Complete React Developer Course (w/ Hooks and React)


## Indecision App



### Usual commands

- setup / installation
```
yarn install
```


- babel compilation and watch

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

- launch live-server
```
yarn serve
```
or
```
live-server public/
```

- for gitpodio(http://gitpod.io) you may/should add `npx` before the command