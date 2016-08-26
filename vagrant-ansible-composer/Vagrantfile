VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network :private_network, ip: "192.168.33.128"

  config.vm.provider :virtualbox do |v|
	  v.name = "mybox"
	  v.memory = 256
	  v.cpus = 2
	end

  config.vm.provision :ansible do |ansible|
    ansible.playbook = "playbook.yml"
  end
end