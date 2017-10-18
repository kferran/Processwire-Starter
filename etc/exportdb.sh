sudo mkdir -p /etc/backup
echo "Backing up db..."
sudo mysqldump --add-drop-database -u root -p'root' lindquist > /var/www/etc/backup/db.sql
echo "DB backup done."
