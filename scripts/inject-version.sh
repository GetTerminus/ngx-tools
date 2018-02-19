#!/usr/bin/env bash

#
# Inject the new package version number anywhere it is needed
#

PLACEHOLDER='0.0.0-PLACEHOLDER'
NEW_VERSION=$1

grep -rl $PLACEHOLDER 'src/@terminus/ngx-tools' | xargs sed -i'' -e 's|'$PLACEHOLDER'|'$NEW_VERSION'|g'
