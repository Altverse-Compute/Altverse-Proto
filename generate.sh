#!/bin/bash
set -e

rm -rf generated/*

mkdir -p generated/js
pbjs -t static-module -w es6 -o generated/js/index.js proto/*.proto
pbts -o generated/js/index.d.ts generated/js/index.js

proto-loader-gen-types --longs=String --enums=String  --oneofs --grpcLib=@grpc/grpc-js --outDir=generated/ts proto/*.proto