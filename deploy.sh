#!/bin/bash

# This script helps deploy the portfolio to Vercel

echo "Building for production..."
npm run build

echo "Prepare for deployment..."
# Uncomment the next line if you have Vercel CLI installed
# vercel

echo "Your site is ready for deployment to Vercel!"
echo "Option 1: Use Vercel CLI with 'vercel' command"
echo "Option 2: Push to GitHub and connect to Vercel for automatic deployments"
echo "See README.md for detailed deployment instructions"