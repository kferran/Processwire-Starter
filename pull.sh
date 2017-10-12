#!/bin/sh
# DEVELOPMENT SERVER
rsync -avzP root@IP_ADDRESS:/var/www/html/site/assets/files/ ~/Code/PROJECT/public/site/assets/files/

# PRODUCTION SERVER
# rsync -avzP root@IP_ADDRESS:/var/www/html/site/assets/files/ ~/Code/PROJECT/public/site/assets/files/
