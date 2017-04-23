var bunyan = require('bunyan');


function bunyanProxy() {
  return {
    trace: console.trace,
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  }
}


function nullProxy() {
  return {
    trace: function () {},
    debug: function () {},
    info: function () {},
    warn: function () {},
    error: function () {}
  }
}


var pattern = process.env.BUNYAN;

module.exports = function () {
  return function (options) {
  
    //
    //  Return passthrough logger
    //
    if (!pattern) {
      return bunyanProxy();
    }

    if (options.name) {
    
      var regex = pattern.replace(/\*/g, '.*').replace(/,/g, '|');
      regex = '^' + regex + '$';
    
      var matches = options.name.match(regex);
    
      //
      //  Return passthrough logger
      //  
      if (!matches) {
        return nullProxy();
      }
    
    }
    
    
    if (arguments.length == 2 && typeof arguments[0] === 'string' && typeof arguments[1] === 'object') {
      return bunyan.createLogger.call(null, arguments[1], arguments[0]);
    }
    
    return bunyan.createLogger.apply(null, arguments);
  }
}


