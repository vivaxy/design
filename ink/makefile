./dest/index.js: ./dest ./src build-js ./build/event-emitter.js
	./node_modules/.bin/browserify ./build/index.js > ./dest/index.js

./build/event-emitter.js: ./build ./event-emitter/src/event-emitter.js
	./node_modules/.bin/babel ./event-emitter/src/event-emitter.js -o ./build/event-emitter.js

build-js: ./src ./build
	./node_modules/.bin/babel ./src -d ./build

./dest:
	mkdir ./dest

./build:
	mkdir ./build
	
.PHONY: build-js