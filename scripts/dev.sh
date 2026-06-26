#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
NODE_BIN="$ROOT/.tools/node/bin"

if [[ -x "$NODE_BIN/node" ]]; then
  export PATH="$NODE_BIN:$PATH"
else
  echo "Portable Node not found at $NODE_BIN" >&2
  echo "Install Node from https://nodejs.org or ask the project maintainer to set up .tools/node." >&2
  exit 1
fi

cd "$ROOT"
npm install
exec npm run dev
