#!/bin/bash

echo "Installing root dependencies..."
npm install

echo "Installing client dependencies..."
npm install --prefix client

echo "Installing server dependencies..."
npm install --prefix server

echo "All dependencies installed successfully!"
