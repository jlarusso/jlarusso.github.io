# rails custom logging

```ruby
# config/initializers/logger.rb
GatewayLog = Logger.new(Rails.root.join('log', 'gateway.log'))
```

```ruby
GatewayLog.info("Making request to gateway: #{url}")
```

`log/gateway.log`
gets created if it doesnt exist.  appends to existing, which makes is helpful when managing instances

`tail -f log/gateway.log`
streaming log