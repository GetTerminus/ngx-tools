#!/bin/bash

#
# Run Unit Tests
#
# Run all unit tests
# Upload coverage to CodeCov
#

. ~/.bashrc

# Run tests
yarn run test:lib:ci || {
    echo 'yarn run test:lib:ci failed!';
    exit 1;
}

# Upload coverage report
bash <(curl -s https://codecov.io/bash)
