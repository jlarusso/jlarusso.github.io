---
title: Ruby Lambdas Simply Explained
tagline:
layout: post
categories: ruby
---

Let's take an array of names.

```ruby
names = ['jan', 'sam', 'sara', 'joe']
```


You may be familiar with this way of printing out each name:

```ruby
names.each do |name|
  puts name
end
```

This is what prints out

```ruby
jan
sam
sara
joe
```

What you are doing is passing a piece of code to the each method that tells it what to do when iterating over the array. In this case we want to print out each name.

A good way to start learning about lambdas is to think of them as a piece of code just like the one we passed to the each loop. You might find it useful to save that piece of code and re-use it in different places in order to keep your code DRY. This is the syntax for saving the code that prints out each item in the array.

```ruby
output_name = lambda { |name| puts name }
```

Now we can use that in the each method as a kind of argument. Remember, you need to put the ampersand before the variable name so that ruby knows you're passing a lambda

```ruby
names.each &output_name
```

This is what prints out

```ruby
jan
sam
sara
joe
```

When will I use this? Say you have a few lists of words:

```ruby
word_list_1 = ['red', 'house', 'happy']
word_list_2 = ['newspapers', 'science', 'maple', 'ton', 'alphabet']
```

... and you want to be able to sort them in different ways.

Sometimes you want to sort them alphabetically by the last letter of the word.

Sometimes you want to sort them by how many letters make up each word.

It may be useful to create lambdas that represent different sorting strategies:

```ruby
by_last_letter = lambda { |a, b| a.reverse <=> b.reverse }
by_length = lambda { |a, b| a.length <=> b.length }
```

You have created a really simple interface to sort any word list using a variety of different sorting strategies!

```ruby
word_list_1.sort &by_last_letter
# => ['red', 'house', 'happy']
```

```ruby
word_list_2.sort &by_length
# => ['ton', 'maple', 'science', 'alphabet', 'newspapers']
```
