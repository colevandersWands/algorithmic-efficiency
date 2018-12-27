{  console.log('--- name of challenge ---')

console.log('--- og code ---')

  function code(a, b) {
    const c = a + b;
    const d = [];
    let result = false;

    while (b < c) { 
      a--;
      b += a;
    }

    if ((a + 1) > 0) {
      result = !result
    }

    return result
  }

console.log('--- test cases ---');

  const test_cases = [
      // {name: '2, 5', args: [2, 5], expected: 'infinite loop error'},
      {name: '4, 5', args: [4, 5], expected: true},
      {name: '4, 10', args: [4, 10], expected: true},
      {name: '6, 2', args: [6, 2], expected: true},
      {name: '-3, -2', args: [-3, -2], expected: false},
      {name: '48, 50', args: [48, 50], expected: true},
      // {name: '1, 50', args: [1, 50], expected: 'infinite loop error'},
      {name: '20, 50', args: [20, 50], expected: true},
      {name: '-2, 15', args: [-2, 15], expected: false},
    ];
  run_tests(code, test_cases)


console.log('--- expand as needed ---')

  function expanded(a, b) {
    const c = a + b;
    const d = [];
    let result = false;

    let while_cond = b < c;
    while (while_cond) { 
      a--;
      b += a;
      while_cond = b < c;
    }
        
    let if_cond; { // = (a + 1) > 0
      const step_1 = a + 1;
      const step_2 = step_1 > 0;
      if_cond = step_2;
    }
    if (if_cond) {
      result = !result
    } 

    
    return result;
  } 
  run_tests(expanded, test_cases)


console.log('--- chunked ---')

  function chunked(a, b) {    
    const c = a + b;                        
    const d = [];
    let result = false;       

    let new_a_and_b; {
      let while_cond = b < c;
      while (while_cond) { 
        a--;
        b += a;
        while_cond = b < c;
      }
    new_a_and_b = {a, b} };   
       
    let toggle_result; { 
      const if_cond = (a + 1) > 0;
      if (if_cond) {
        result = !result
      }
    toggle_result =if_cond}

                              
    return result;
  } 
  run_tests(chunked, test_cases)

console.log('--- chunk-logged ---')

  function logged(a, b) {                  const log = [{a, b}];
    const c = a + b;                        
    const d = [];
    let result = false;                     log.push({c, d, result})

    let new_a_and_b; {
      let while_cond = b < c;
      while (while_cond) { 
        a--;
        b += a;
        while_cond = b < c;
      }
    new_a_and_b = {a, b} };                 log.push({new_a_and_b});
       
    let toggle_result; { 
      const if_cond = (a + 1) > 0;
      if (if_cond) {
        result = !result
      }
    toggle_result = if_cond}              log.push({toggle_result})

                                            log.push({result})
    return {result, log};
  } 
  log_reports(logged, test_cases)



console.log('--- count steps ---')

  const steps_tests = [
      {name: '4, 5', args: [4, 5], expected: 14},
      {name: '4, 10', args: [4, 10], expected: 14},
      {name: '6, 2', args: [6, 2], expected: 14},
      {name: '-3, -2', args: [-3, -2], expected: 5},
      {name: '48, 50', args: [48, 50], expected: 14},
      {name: '20, 50', args: [20, 50], expected: 14},
      {name: '-2, 15', args: [-2, 15], expected: 5},
    ];
  function counted(a, b) {                let ops = 0;
    const c = a + b;                      ops++;
    const d = [];
    let result = false;

    let new_a_and_b; {
      let while_cond = b < c;             ops+=2;
      while (while_cond) { 
        a--;                              ops++;
        b += a;                           ops++;
        while_cond = b < c;               ops+=2;
      }
    new_a_and_b = {a, b} }
       
    let toggle_result; { 
      const if_cond = (a + 1) > 0;        ops+=2;
      if (if_cond) {     
        result = !toggle_result;          ops++;
      }
    toggle_result = if_cond}

    return ops;
  } 
  run_tests(counted, steps_tests)


console.log('--- explanation ---')

  function explained(a, b) {              let ops = 0;  
                                          const log = [{ops, a, b}]
    const c = a + b;                      ops++;
    const d = [];
    let result = false;                   log.push({ops, c, d, result})

    let new_a_and_b; {
      let while_cond = b < c;             ops+=2;
      while (while_cond) { 
        a--;                              ops++;
        b += a;                           ops++;
        while_cond = b < c;               ops+=2;
      }
    new_a_and_b = {a, b} }                log.push({ops, new_a_and_b});
       
    let toggle_result; { 
      const if_cond = (a + 1) > 0;        ops+=2;
      if (if_cond) {     
        result = !toggle_result;          ops++;
      }
    toggle_result = if_cond}            log.push({ops, toggle_result})

    return {ops, log};
  } 
  log_reports(explained, test_cases)




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