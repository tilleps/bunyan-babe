# bunyan-babe #

Author: Eugene Song <tilleps@gmail.com>


Companion to bunyan logger, bunyan-babe adds the ability to filter what is 
going to be logged with bunyan.  By default, bunyan-babe is disabled and
outputs to console.log.


## Usage ##


Log everything
```bash
BUNYAN=* node index.js
```


Log anything that starts with admin or user
```javascript
var logger = require('bunyan-babe')()({ name: "admin" });
```


```bash
BUNYAN=admin*,user* node index.js
```
