---
title: Strange Ruby Writers
tagline: 
layout: post
categories: ruby
---

Typically when you call a ruby method, the last thing gets returned unless you return explicitly.

A strange exception is a writer method as shown below. Pop it into irb and give it a try!

```ruby
class Person
  def name
    @name
  end

  # Always returns assigned value
  def name=(str)
    @name = str
    "won't return"
  end
end

p = Person.new
p.name = 'jesse' #=> 'jesse'
```
