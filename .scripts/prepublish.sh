#!/bin/bash

# IMPORTANT
# ---------
# This is an auto generated file with React CDK.
# Do not modify this file.
# Use `.scripts/user/prepublish.sh instead`.

echo "=> Transpiling 'src' into ES5 ..."
echo ""
rm -rf ./dist
./node_modules/webpack/bin/webpack.js --config webpack.config.js
echo ""
echo "=> Transpiling completed."

. .scripts/user/prepublish.sh
