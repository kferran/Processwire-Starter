if [ -e /var/www/etc/backup/db.sql ]
  then
    sudo mysql -p'root' lindquist  < /var/www/etc/backup/db.sql
    echo "imported db..."
fi
