.PHONY: build clean

build:
	docker build -t team-rx-builder .
	docker run --rm -v "$$(pwd)/docs:/output" team-rx-builder

clean:
	docker rmi team-rx-builder 2>/dev/null || true
