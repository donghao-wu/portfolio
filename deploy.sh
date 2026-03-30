#!/bin/bash
# Usage: ./deploy.sh user@your-server-ip
# Requires: scp, ssh access to server
#
# Server-side setup (run once before first deploy):
#   ssh user@server-ip
#   sudo mkdir -p /var/www/portfolio/dist
#   sudo chown -R $USER:$USER /var/www/portfolio
#   sudo cp nginx.conf /etc/nginx/sites-available/portfolio
#   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
#   sudo nginx -t && sudo systemctl reload nginx

set -e

SERVER=$1
if [ -z "$SERVER" ]; then
  echo "Usage: ./deploy.sh user@server-ip"
  exit 1
fi

echo "→ Building..."
npm run build

echo "→ Uploading dist/ to $SERVER:/var/www/portfolio/"
scp -r dist/ "$SERVER:/var/www/portfolio/"

echo "✓ Deploy complete. Visit your domain to verify."
