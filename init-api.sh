#!/usr/bin/env bash

cat << EOF >./build/api.js
window._BASE_URL = '$REACT_APP_BASE_URL';
window._CLIENT_BASE_URL = '$REACT_APP_CLIENT_BASE_URL';
EOF
