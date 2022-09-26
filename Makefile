archive:
	yarn build && ./bin/archive.js
upload: archive
	./bin/upload.js
