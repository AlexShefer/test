#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

cd client npm run lint && npm run format 