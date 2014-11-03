A web developer's primer on date and time

preface with something about from perspective of ruby/rails whatever

#concepts:
timestamp vs datetime

gregorian + other calendars (julian) and who adopted.
skipping a few days, etc.

In the era after the change, dates were written with O.S. (Old Style) or N.S. (New Style) following the day so people examining records could understand whether they were looking at a Julian date or a Gregorian date. While George Washington was born on February 11, 1731 (O.S.), his birthday became February 22, 1732 (N.S.) under the Gregorian calendar. The change in the year of his birth was due to the change of when the change of the new year was acknowledged. Recall that prior to the Gregorian calendar, March 25 was the new year but once the new calendar was implemented, it became January 1. Therefore, since Washington was born between January 1 and March 25, the year of his birth became one year later upon the switch to the Gregorian calendar.

gmt vs utc

time zones

http://en.wikipedia.org/wiki/Marine_chronometer were used by british railway companies to keep track of 4 min per degree of longitude time difference

how usa has several time zones and china has one


*much like how time standards were implemented 100 different ways by 100 different countries...*
*internet standards are no different/exception*

ref: http://blog.dygraphs.com/2012/03/javascript-and-dates-what-mess.html
ref: http://dygraphs.com/date-formats.html
problem with ie parsing explicit time zones in utc

# iso
http://en.wikipedia.org/wiki/ISO_8601
2014-07-13T18:02:49+00:00
2014-07-13T18:02:49Z
(z is utc time or 00:00)

Z represents UTC time
you might hear it refered to as Zulu time.  Zulu is the NATO Phonetic Alphabet term for Z (using a whole word makes it easier to understand when said over a bad radio signal)

# w3 time standards
reference http://www.w3.org/TR/NOTE-datetime
`1994-11-05T08:15:30-05:00` corresponds to November 5, 1994, 8:15:30 am, US Eastern Standard Time.

#ietf
http://tools.ietf.org/html/rfc2822#page-14  
http://www.ietf.org/rfc/rfc3339.txt  
`1996-12-19T16:39:57-08:00` This represents 39 minutes and 57 seconds after the 16th hour of December 19th, 1996 with an offset of -08:00 from UTC (Pacific Standard Time).
YYYY-MM-DDTHH:mm:ss.sssZ

#js
http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
YYYY-MM-DDTHH:mm:ss.sssZ
`var d1 = new Date('1994-11-05T08:15:30-05:00');  // Sat Nov 05 1994 08:15:30 GMT-0500 (EST)`
`var d2 = new Date('1994-11-05T08:15:30.60-05:00');  // Sat Nov 05 1994 08:15:30 GMT-0500 (EST)`
`one == two  // false`

internet explorer caveat
`2011-10-10T14:48:00+0200` ie8: NaN ie11: 'invalid' trying to specify time zone `2011-10-10T14:48:00` ie8: NaN ie11: 'Mon Oct 10 2011 14:48:00 GMT -0400' assumes current time zone `2011-10-10T14:48:00Z` ie8: NaN ie11: 'Mon Oct 10 2011 14:48:00 GMT -0400' not utc

# how ruby handles time
http://www.ruby-doc.org/core-2.1.2/Time.html
> In IRB  
> \> `Time.parse('1994-11-05T08:15:30-05:00')`  
> \> `1994-11-05 08:15:30 -0500`



difference between different date/time formats

http://stackoverflow.com/questions/3928275/in-ruby-on-rails-whats-the-difference-between-datetime-timestamp-time-and-da

explain common db interpretations




# how mysql handles time

http://dev.mysql.com/doc/refman/5.0/en/datetime.html

mysql converts to utc and then back again. as long as your server time remains constant, the timestamps should remain accurate. if you are, for example, importing a database with timestamps to a server in a differnt time zone, be aware of this. 

check out http://dev.mysql.com/doc/refman/5.0/en/time-zone-support.html to learn how to set your mysql server's time zone to something different than your system's time zone.

can also manipulate datetime during query http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html