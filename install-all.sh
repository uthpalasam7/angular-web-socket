#!/bin/bash

echo "Installing root dependencies..."
npm install

echo "Installing client dependencies..."
cd client
npm install
cd ..

echo "Installing server dependencies..."
cd server
npm install
cd ..

echo "All dependencies installed successfully!"
