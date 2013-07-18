set :whenever_command, "bundle exec whenever"
require "bundler/capistrano"


load "config/recipes/base"
load "config/recipes/nginx"
load "config/recipes/unicorn"
load "config/recipes/postgresql"
load "config/recipes/nodejs"
#load "config/recipes/rbenv"
load "config/recipes/check"

server "198.211.99.163", :web, :app, :db, primary: true

set :user, "deployer"
set :application, "rzaartz"
set :deploy_to, "/home/#{user}/apps/#{application}"
set :deploy_via, :remote_cache
set :use_sudo, false

set :scm, "git"
set :repository, "ssh://sls@slsapp.com:1234/rzaartz/rzaartz.git"
set :branch, "master"

default_run_options[:pty] = true
ssh_options[:forward_agent] = true

after "deploy", "deploy:cleanup" # keep only the last 5 releases

after "deploy:update_code" do
  run "ln -nfs #{shared_path}/ckeditor_assets #{release_path}/public/ckeditor_assets"
end
