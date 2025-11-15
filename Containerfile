FROM registry.redhat.io/ubi10/httpd-24:10.0
COPY --chown=1001:0 dist/ossrep-admin-web/browser /var/www/html/

COPY --chown=1001:0 httpd.conf /etc/httpd/conf.d/httpd.conf
COPY --chown=1001:0 entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

USER 1001
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
