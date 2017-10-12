# Processwire Starter
Simple starting point to manage the frontend of a Processwire CMS site.
## Configuration
### Build Process
This starter uses of the Blendid package from Vigetlabs (https://github.com/vigetlabs/blendid) for a gulp/webpack build setup.
1. config/path-config.json - manages all paths for the build process
2. config/task-config.js - allows for customizing the different gulp tasks that Blendid provides. I have a task to help with managing template files and moving them for the Processwire workflow that I like.


### Vagrant
This started uses Scotchbox PRO. Make sure to update the hostname property in the Vagrantfile to a dev url while working locally. The public directory is where the Processwire install should live.


