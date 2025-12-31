#!/bin/bash
set -e

rm -rf generated/*

mkdir -p generated/js
pbjs -t static-module -w es6 -o generated/js/index.js proto/game.proto
pbts -o generated/js/index.d.ts generated/js/index.js\

# from https://github.com/badsyntax/grpc-js-typescript/blob/master/examples/ts-protoc-gen/compile-proto.sh

mkdir -p ./generated/ts
OUT_DIR="./generated/ts"
TS_OUT_DIR="./generated/ts"
IN_DIR="./proto"
PROTOC="grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

$PROTOC \
    -I="./" \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
    --plugin=protoc-gen-grpc=$PROTOC_GEN_GRPC_PATH \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc_out=grpc_js:$OUT_DIR \
    --ts_out=service=grpc-node,mode=grpc-js:$TS_OUT_DIR \
    $IN_DIR/*.proto