build-dest: ./dest/worker.js ./dest/index.js

./dest/worker.js: ./dest ./build/worker.js
	./node_modules/.bin/browserify ./build/worker.js > ./dest/worker.js

./dest/index.js: ./dest ./src build-js ./build/event-emitter.js
	./node_modules/.bin/browserify ./build/index.js > ./dest/index.js

./build/event-emitter.js: ./build ./event-emitter/src/event-emitter.js
	./node_modules/.bin/babel ./event-emitter/src/event-emitter.js -o ./build/event-emitter.js

build-js: ./build ./src
	./node_modules/.bin/babel ./src -d ./build

./build/worker.js: ./build ./src/worker.js
	./node_modules/.bin/babel ./src/worker.js -o ./build/worker.js

./dest:
	mkdir ./dest

./build:
	mkdir ./build

.PHONY: build-dest build-js