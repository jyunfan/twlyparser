exports.testSomething = function(test){
  var fs   = require('fs');
  var exec = require('child_process').exec,
              child;

  child = exec('./node_modules/.bin/lsc parse-log.ls test/4004/*.html > test/4004.result.json',
    function (error, stdout, stderr) {
      result = fs.readFileSync('test/4004.result.json', 'utf8');
      expect = fs.readFileSync('test/4004.expect.json', 'utf8');
      test.ok(result == expect,
       "The parse result is not expected.  Check 4004.result.json and 4004.expect.json");
      test.done();
  });
};

