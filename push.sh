#!/bin/sh
# DEVELOPMENT SERVER
  rsync -avz --exclude-from 'exclude-list.txt' ~/Code/PROJECT/public/site/assets/files/ USERNAME@IP_ADDRESS:/var/www/html/public/site/assets/files/


# PRODUCTION SERVER
#rsync -avz --exclude-from 'exclude-list.txt' ~/Code/PROJECT/public/site/templates/ USERNAME@IP_ADDRESS:/var/www/html/site/templates/
