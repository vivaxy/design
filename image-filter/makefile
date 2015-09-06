build-dest: ./dest/worker.js ./dest/index.js

./dest/worker.js: ./dest ./build/worker.js
	./node_modules/.bin/browserify ./build/worker.js > ./dest/worker.js

./dest/index.js: ./dest ./build/event-emitter.js ./build/set-style.js ./build/range.js ./build/image-canvas.js ./build/canvas.js ./build/index.js ./build/loading.js
	./node_modules/.bin/browserify ./build/index.js > ./dest/index.js

./build/event-emitter.js: ./build ./event-emitter/src/event-emitter.js
	./node_modules/.bin/babel ./event-emitter/src/event-emitter.js -o ./build/event-emitter.js --module-id EventEmitter # specify the module name to EventEmitter, otherwise babel will generate the module name from file name

./build/set-style.js: ./build ./src/set-style.js
	./node_modules/.bin/babel ./src/set-style.js -o ./build/set-style.js

./build/loading.js: ./build ./src/loading.js
	./node_modules/.bin/babel ./src/loading.js -o ./build/loading.js --module-id Loading

./build/range.js: ./build ./src/range.js
	./node_modules/.bin/babel ./src/range.js -o ./build/range.js --module-id Range

./build/image-canvas.js: ./build ./src/image-canvas.js
	./node_modules/.bin/babel ./src/image-canvas.js -o ./build/image-canvas.js --module-id ImageCanvas

./build/canvas.js: ./build ./src/canvas.js
	./node_modules/.bin/babel ./src/canvas.js -o ./build/canvas.js --module-id Canvas

./build/index.js: ./build ./src/index.js
	./node_modules/.bin/babel ./src/index.js -o ./build/index.js

./build/worker.js: ./build ./src/worker.js
	./node_modules/.bin/babel ./src/worker.js -o ./build/worker.js

./dest:
	mkdir ./dest

./build:
	mkdir ./build

.PHONY: build-dest
