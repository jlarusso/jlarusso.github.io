require 'rubygems'
require 'optparse'
require 'yaml'

desc "Create a new post"
task :np do
  OptionParser.new.parse!
  ARGV.shift

  arg = ARGV.join(' ')
  title = arg.empty? ? 'untitled' : arg
  parsed_title = title.downcase.gsub(/[^[:alnum:]]+/, '-')
  path = "_posts/#{Date.today}-#{parsed_title}.markdown"

  if File.exist?(path)
    puts "\e[33m-> Post exists, skipping...\e[0m"
  else
    File.open(path, "w") do |file|
      fmatter = {'title' => title.split(' ').map(&:capitalize).join(' '),
                 'tagline' => nil,
                 'layout' => 'post',
                 'categories' => nil
      }

      file.puts YAML.dump(fmatter)
      file.puts "---"
    end
    puts "\e[32m-> Post created:\e[0m"
    puts path
  end

  exit 1
end
