# MySQL system variables and you
Do this...   
`mysql> SHOW VARIABLES;`  
...and you can take a look at your MySQL system variables. Let's look at this one:
## `time_zone`
##### Background
MySQL stores timestamps by converting them to UTC time and, when queried, converting them back again.
Enter `time_zone`. It's the variable that stores what time zone to convert from. It defaults as your system's time zone.
##### Why you should care
If you import a local database dump from your friend in Dubrovnik, all the timestamps will be converted incorrectly. For example, a blog post updated at Noon in Croatia will be saved as 11:00am UTC because Croatia's time zone is UTC +1. When you 
##### What you should do
Tell your friend to dump using the [`--tz-utc`](http://dev.mysql.com/doc/refman/5.1/en/mysqldump.html#option_mysqldump_tz-utc) flag. You may instead find it useful to [`SET`](http://dev.mysql.com/doc/refman/5.0/en/set-statement.html) the `time_zone` variable to something other than the system default.
##### Just for fun
See what your system's time zone is by using the command `date` (or `date +%z` for the numerical offset).

Then, if you have one, SSH into your EC2 instance and run the same command. Now you can see that the instance uses UTC time.

For more, refer to the [MySQL Docs](http://dev.mysql.com/doc/refman/4.1/en/server-system-variables.html).