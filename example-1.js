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

    while (b < c) { 
      a--;
      b += a;
    }
        
    let condition; { // = (a + 1) > 0
      const step_1 = a + 1;
      const step_2 = step_1 > 0;
      condition = step_2;
    }
    if (condition) {
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
      while (b < c) { 
        a--;
        b += a;
      }
    new_a_and_b = {a, b} };   
       
    let toggle_result; { 
      const condition = (a + 1) > 0;
      if (condition) {
        result = !result
      }
    toggle_result = condition}

                              
    return result;
  } 
  run_tests(chunked, test_cases)

console.log('--- chunk-logged ---')

  function logged(a, b) {                  const log = [{a, b}];
    const c = a + b;                        
    const d = [];
    let result = false;                     log.push({c, d, result})

    let new_a_and_b; {
      while (b < c) { 
        a--;
        b += a;
      }
    new_a_and_b = {a, b} };                 log.push({new_a_and_b});
       
    let toggle_result; { 
      const condition = (a + 1) > 0;
      if (condition) {
        result = !result
      }
    toggle_result = condition}              log.push({toggle_result})

                                            log.push({result})
    return {result, log};
  } 
  log_reports(logged, test_cases)



console.log('--- count steps ---')

  const steps_tests = [
      {name: '4, 5', args: [4, 5], expected: 11},
      {name: '4, 10', args: [4, 10], expected: 11},
      {name: '6, 2', args: [6, 2], expected: 11},
      {name: '-3, -2', args: [-3, -2], expected: 3},
      {name: '48, 50', args: [48, 50], expected: 11},
      {name: '20, 50', args: [20, 50], expected: 11},
      {name: '-2, 15', args: [-2, 15], expected: 3},
    ];
  function counted(a, b) {                let ops_count = 0;
    const c = a + b;                      ops_count++;
    const d = [];
    let result = false;

    let new_a_and_b; {
      while (b < c) {                     ops_count++;
        a--;                              ops_count++;
        b += a;                           ops_count++;
      }
    new_a_and_b = {a, b} }
       
    let toggle_result; { 
      const condition = (a + 1) > 0;      ops_count+=2;
      if (condition) {                    ops_count++;
        result = !result;                 ops_count++;
      }
    toggle_result = condition}

    return ops_count;
  } 
  run_tests(counted, steps_tests)
  log_reports(counted, steps_tests)


console.log('--- explanation ---')

  function explained(a, b) {                let ops_count = 0;  
                                            const log = [{ops: ops_count, a, b}];
    const c = a + b;                        ops_count++;
    const d = [];
    let result = false;                     log.push({ops: ops_count, c, d, result})

    let new_a_and_b; {
      while (b < c) {                       ops_count++;
        a--;                                ops_count++;    
        b += a;                             ops_count++;
      }
    new_a_and_b = {a, b} };                 log.push({ops: ops_count, new_a_and_b});
       
    let toggle_result; { 
      const condition = (a + 1) > 0;        ops_count+=2;
      if (condition) {                      ops_count++;
        result = !result;                   ops_count++;
      }
    toggle_result = condition}              log.push({ops: ops_count, toggle_result})

                                            log.push({ ops:ops_count, result})
    return {ops: ops_count, log};
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