#!/bin/bash

# Exit on error
set -e

# Build the project
npm run build

# Navigate to the build directory
cd build

# Initialize a new git repository
git init

# Add all files to the repository
git add .

# Commit the changes
git commit -m "Deploying to GitHub Pages"

# Push to the gh-pages branch of the repository
git push -f https://github.com/<USERNAME>/<REPOSITORY>.git master:gh-pages

# Navigate back to the root directory
cd .. 

# Clean up the build directory
rm -rf build

# Print a success message
echo "Deployment successful!"