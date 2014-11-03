require 'json'
require 'open-uri'

source 'https://rubygems.org'

gem 'rake'
gem 'jekyll'
gem 'pry'

versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem 'github-pages', versions['github-pages']
gem 'github-linguist'

ruby "2.1.2"
