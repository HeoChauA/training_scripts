# scripts
This is a training to standard tools to initialize projects environments, dependencies, configurations. You will create your own (minimal) LAMP stack using Vagrant and Ansible. Then get Drupal 8 running using Composer.

Goal for all FFW VN developers is to understand and follow a consistent method to setup project environments using: 
* Vagrant 
* Ansible
* Composer

When creating projects lead engineers will document all necessary dependencies, configurations, source and share as GIT repo with the team. Every project team member will clone the repo and develop in the same environment context to reduce risk of inconsistency and save time with tooling etc. 

### Prerequisites, Installations
* VirtualBox: https://www.virtualbox.org/wiki/Downloads
* Vagrant: https://www.vagrantup.com/downloads.html
* Ansible: $ sudo apt-get install ansible

### Start launching a LAMP stack
Clone this repository to your computer. 

#### Vagrant
Move into repo folder and run

`$ vagrant up`

`$ vagrant ssh`

#### Playbook
  ```
  tasks:
    - name: install apache
      apt: name=apache2 state=present
  ```
#### Composer
  ```
  {
    "name": "root/vagrant",
    "require": {
        "twig/twig": "^1.24"
    }
  }
  ```
