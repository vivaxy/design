./index.js: ./tween/src/tween.js ./tween/event-emitter/src/event-emitter.js ./src/index.js
	./node_modules/.bin/browserify ./src/index.js -t babelify --outfile ./index.js

./tween/src/tween.js:
	git submodule update --init --recursive

./tween/event-emitter/src/event-emitter.js:
	git submodule update --init --recursive
