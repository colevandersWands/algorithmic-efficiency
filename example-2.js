{  console.log('--- name of challenge ---')

console.log('--- og code ---')

  // https://github.com/samanthaming/freecodecamp-my-solutions/blob/master/intermediate-algorithm/12-sum-all-odd-fibonacci-numbers.js
  function sumFibs(num) {
    let prev = 0;
    let last = 1;
    let sum = 0;

    while (last <= num) {
      if (last % 2 !== 0) {
        sum += last;
      }
      last += prev;
      prev = last - prev;
    }

    return sum;
  }

console.log('--- test cases ---');

  const test_cases = [
      {name: '3', args: [3], expected: 5},
      {name: '4', args: [4], expected: 5},
      {name: '5', args: [5], expected: 10},
      {name: '7', args: [7], expected: 10},
      {name: '8', args: [8], expected: 10},
      {name: '10', args: [10], expected: 10},
      {name: '13', args: [13], expected: 23},
      {name: '17', args: [17], expected: 23},
      {name: '21', args: [21], expected: 44},
    ];
  run_tests(sumFibs, test_cases)


console.log('--- expanded as needed ---')

  function expanded(num) {
    let prev = 0;
    let last = 1;
    let sum = 0;

    let while_cond = last <= num;
    while (while_cond) {
      let if_cond; { // = last % 2 !== 0
        const step_1 = last % 2;
        const step_2 = step_1 !== 0;
        if_cond = step_2;
      }
      if (if_cond) {
        sum += last;
      }
      last += prev;
      prev = last - prev;

      while_cond = last <= num;
    }

    return sum;
  }
  run_tests(expanded, test_cases)


console.log('--- chunked ---')

  function chunked(num) {
    let prev = 0;
    let last = 1;
    let sum = 0;

    let build_sum; {
      let while_cond = last <= num;
      while (while_cond) {

        let if_cond;
        let add_to_sum; {
           if_cond = last % 2 !== 0;
        add_to_sum = if_cond };

        if (if_cond) {
          let new_sum; {
            sum += last;
          new_sum = sum };
        }

        let fresh_utils; {
          last += prev;
          prev = last - prev;
        fresh_utils = {last, prev}}

        while_cond = last <= num;
      }
    build_sum = sum };

    return sum;
  }
  run_tests(chunked, test_cases)

console.log('--- chunk-logged ---')

  function logged(num) {                 const log = [{num}];
    let prev = 0;
    let last = 1;
    let sum = 0;                          log.push({prev, last, sum});

    let build_sum; {
      let while_cond = last <= num;       log.push({while_cond})
      while (while_cond) {

        let if_cond;
        let add_to_sum; {
           if_cond = last % 2 !== 0;
        add_to_sum = if_cond };           log.push({add_to_sum})

        if (if_cond) {
          let new_sum; {
            sum += last;
          new_sum = sum };                log.push({new_sum});
        }

        let fresh_utils; {
          last += prev;
          prev = last - prev;
        fresh_utils = {last, prev}}       log.push({fresh_utils})

        while_cond = last <= num;         log.push({while_cond})
      }
    build_sum = sum };                    log.push({sum})

    return {sum, log};
  }
  log_reports(logged, test_cases)


console.log('--- count steps ---')

  const steps_tests = [
      {name: '3', args: [3], expected: 29},
      {name: '4', args: [4], expected: 29},
      {name: '5', args: [5], expected: 36},
      {name: '7', args: [7], expected: 36},
      {name: '8', args: [8], expected: 42},
      {name: '9', args: [9], expected: 42},
      {name: '10', args: [10], expected: 42},
      {name: '13', args: [13], expected: 49},
      {name: '17', args: [17], expected: 49},
      {name: '21', args: [21], expected: 56},
    ];
  function counted(num) {                   let ops_count = 0;
    let prev = 0;
    let last = 1;
    let sum = 0;

    let build_sum; {
      let while_cond = last <= num;         ops_count+=2
      while (while_cond) {               

        let if_cond;
        let add_to_sum; {
           if_cond = last % 2 !== 0;        ops_count+=2;
        add_to_sum = if_cond };

        if (if_cond) {                    
          let new_sum; {
            sum += last;                    ops_count++;
          new_sum = sum };
        }

        let fresh_utils; {
          last += prev;                     ops_count++;
          prev = last - prev;               ops_count++;
        fresh_utils = {last, prev}} 

        while_cond = last <= num;           ops_count+=2;  
      }
    build_sum = sum };

    return ops_count;
  }
  run_tests(counted, steps_tests)
  log_reports(counted, steps_tests)


console.log('--- explanation ---')

  function explained(num) {                   let ops_count = 0;
                                              const log = [{ops: ops_count, args: {num}}];
    let prev = 0;
    let last = 1;
    let sum = 0;                              log.push({ops: ops_count, prev, last, sum});

    let build_sum; {
      let while_cond = last <= num;           ops_count+=2
      while (while_cond) {  

        let if_cond;
        let add_to_sum; {
           if_cond = last % 2 !== 0;          ops_count+=2;
        add_to_sum = if_cond };               log.push({ops: ops_count, add_to_sum});

        if (if_cond) {                        
          let new_sum; {
            sum += last;                      ops_count++;
                                              log.push({ops: ops_count, new_sum});
          new_sum = sum };                    
        }

        let fresh_utils; {
          last += prev;                       ops_count++;
          prev = last - prev;                 ops_count++;
        fresh_utils = {last, prev}};          log.push({ops: ops_count, fresh_utils});       

        while_cond = last <= num;             ops_count+=2;
                                              log.push({ops: ops_count, while_cond})
      } 
    build_sum = sum };                        log.push({ops: ops_count, build_sum});


    return {ops: ops_count, log};
  }
  log_reports(explained, steps_tests)





// testing utils
function run_tests(_target, _cases, _log) {
  for (let t_case of _cases) {
    let expected = t_case.expected;

    let actual;
    let msg;
    let log;
    if (_log) {
      log = _target(... t_case.args, true);
      actual = log.result;
    } else {
      actual = _target(... t_case.args, false);
    };

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass && _log) {
      console.log(`    ${t_case.name}: \n` + 
          "actual: ", log, "\n" +
          `expected: {${typeof expected}, ${expected}}`);
    } else if (!pass) {
      console.log(`${t_case.name}: \n` + 
          `   actual: {${typeof actual}, ${actual}} \n` +
          `   expected: {${typeof expected}, ${expected}}`);
    };
  };
};

function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
     report[t_case.name] = _target(...t_case.args) 
  }
  console.log(report)
}

}