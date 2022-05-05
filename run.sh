#!/bin/bash
# check if all dependencies are installed for server
# if not, install them
if [ ! -f "./server/node_modules/package.json" ]; then
  echo "Installing express..."
  cd server
  npm install
fi
# check if all dependencies are installed for client
# if not, install them
if [ ! -f "./client/node_modules/package.json" ]; then
  echo "Installing vue..."
  cd ../client
  npm install
fi
# start server
# run the expressjs node server
cd ../server
node app.js &

# start client
# run the vuejs app client
cd ../client
npm run serve
# end of file
