# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

    config.vm.box = "scotch/box-pro"
    config.vm.hostname = ""
    config.vm.network "forwarded_port", guest: 80, host: 8080
    config.vm.network "private_network", ip: "192.168.33.10"
    #config.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]

    # Optional NFS. Make sure to remove other synced_folder line too
    config.vm.synced_folder ".", "/var/www", :nfs => { :mount_options => ["dmode=777","fmode=666"] }

 #    config.trigger.before :halt do
 #        info "Dumping the database before shutting down..."
 #        run_remote  "bash /var/www/etc/database/exportdb.sh"
 #    end

	# config.trigger.after :up do
 #        info "Restoring database..."
 #        run_remote  "bash /var/www/etc/database/importdb.sh"
 #    end
end