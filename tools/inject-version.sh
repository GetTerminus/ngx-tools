#!/usr/bin/env bash

#
# Inject the new package version number anywhere it is needed
#

PLACEHOLDER='0.0.0-PLACEHOLDER'
NEW_VERSION=$1

echo $NEW_VERSION

grep -rl $PLACEHOLDER 'dist/ngx-tools' | xargs sed -i'' -e 's|'$PLACEHOLDER'|'$NEW_VERSION'|g'
