#!/usr/bin/env bash

#
# Inject the new package version number anywhere it is needed
#

PLACEHOLDER='0.0.0-PLACEHOLDER'
NEW_VERSION=$1

echo "Updating version to: " $NEW_VERSION

# Note: We cannot update the version in package.json or the release will fail as the release tool will see the new version as a duplicate
grep -rl $PLACEHOLDER --exclude='package.json' 'dist/ngx-tools' | xargs sed -i'' -e 's|'$PLACEHOLDER'|'$NEW_VERSION'|g'
