./dest/index.js: ./dest ./build/event-emitter.js ./build/is-mobile.js ./build/get-touch-position.js ./build/set-style.js ./build/color-picker.js ./build/dip.js ./build/canvas.js ./build/index.js
	./node_modules/.bin/browserify ./build/index.js > ./dest/index.js

./build/event-emitter.js: ./build ./event-emitter/src/event-emitter.js
	./node_modules/.bin/babel ./event-emitter/src/event-emitter.js -o ./build/event-emitter.js --module-id EventEmitter # specify the module name to EventEmitter, otherwise babel will generate the module name from file name

./build/is-mobile.js: ./build ./src/is-mobile.js
	./node_modules/.bin/babel ./src/is-mobile.js -o ./build/is-mobile.js

./build/get-touch-position.js: ./build ./src/get-touch-position.js
	./node_modules/.bin/babel ./src/get-touch-position.js -o ./build/get-touch-position.js

./build/color-picker.js: ./build ./src/color-picker.js
	./node_modules/.bin/babel ./src/color-picker.js -o ./build/color-picker.js --module-id ColorPicker

./build/set-style.js: ./build ./src/set-style.js
	./node_modules/.bin/babel ./src/set-style.js -o ./build/set-style.js

./build/dip.js: ./build ./src/dip.js
	./node_modules/.bin/babel ./src/dip.js -o ./build/dip.js --module-id Dip

./build/canvas.js: ./build ./src/canvas.js
	./node_modules/.bin/babel ./src/canvas.js -o ./build/canvas.js --module-id Canvas

./build/index.js: ./build ./src/index.js
	./node_modules/.bin/babel ./src/index.js -o ./build/index.js

./dest:
	mkdir ./dest

./build:
	mkdir ./build
