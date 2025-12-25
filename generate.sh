#!/bin/bash
set -e

rm -rf generated/*

mkdir -p generated/js
pbjs -t static-module -w es6 -o generated/js/index.js proto/game.proto
pbts -o generated/js/index.d.ts generated/js/index.js

pbjs -t static-module -w es6 -o generated/js/rpc.js proto/rpc.proto
pbts -o generated/js/rpc.d.ts generated/js/rpc.js