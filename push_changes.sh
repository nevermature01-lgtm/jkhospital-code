#!/bin/bash

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
  git init
  echo "Initialized empty Git repository."
fi

# Add remote origin if it doesn't exist, otherwise update it
if ! git remote | grep -q 'origin'; then
  git remote add origin https://github.com/nevermature01-lgtm/JK_hospital.git
  echo "Added remote origin."
else
  git remote set-url origin https://github.com/nevermature01-lgtm/JK_hospital.git
  echo "Updated remote origin URL."
fi

# Add all changes
git add .

# Commit changes
git commit -m "Update JK Hospital codebase"

# Ensure we are on the main branch
git branch -M main

# Push to origin
echo "Pushing changes to GitHub..."
git push -u origin main
