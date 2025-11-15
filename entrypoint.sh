#!/bin/sh

# Generate config.json from environment variables
cat > /var/www/html/config.json <<EOF
{
  "oidcUrl": "${OIDC_URL}",
  "oidcClientId": "${OIDC_CLIENT_ID}"
}
EOF

# Start httpd in foreground
exec /usr/bin/run-httpd
