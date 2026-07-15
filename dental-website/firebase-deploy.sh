#!/bin/bash
set -e

echo "=== Building site... ==="
npm run build

echo ""
echo "=== Deploying to Firebase... ==="
echo "First time? Run: firebase login"
echo "Then: firebase init"
echo ""

# Uncomment to deploy:
# firebase deploy --only hosting
# firebase deploy --only functions
# firebase deploy
