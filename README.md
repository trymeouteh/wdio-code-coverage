# Setup

```
git clone https://github.com/trymeouteh/wdio-code-coverage
cd ./wdio-code-coverage
npm i
npm run test
```

# Terminal Output

```
$npm run test

> test
> wdio run ./wdio.conf.js


Execution of 2 workers started at 2026-01-09T21:47:03.640Z

[0-0] RUNNING in firefox - file:///tests/my-test.js
[1-0] RUNNING in chromium - file:///tests/my-test.js
[0-0]  Error:  Test failed due to following error(s):
  - my-test.js: can't access property "skip", origFn is undefined: addMochaCommands/<@http://localhost:42067/node_modules/@wdio/utils/build/index.js?v=debd9bab:1341:9
addMochaCommands@http://localhost:42067/node_modules/@wdio/utils/build/index.js?v=debd9bab:1340:18
wrapGlobalTestMethod@http://localhost:42067/node_modules/@wdio/utils/build/index.js?v=debd9bab:1337:19
setupEnv/<@http://localhost:42067/node_modules/@wdio/mocha-framework/build/common.js?v=debd9bab:97:25
setupEnv@http://localhost:42067/node_modules/@wdio/mocha-framework/build/common.js?v=debd9bab:95:20
run@http://localhost:42067/@wdio/browser-runner/setup:167:13
@http://localhost:42067/@wdio/browser-runner/setup:314:18


[1-0]  Error:  Test failed due to following error(s):
  - my-test.js: Cannot read properties of undefined (reading 'skip'): TypeError: Cannot read properties of undefined (reading 'skip')
    at http://localhost:42879/node_modules/@wdio/utils/build/index.js?v=debd9bab:1341:22
    at Array.forEach (<anonymous>)
    at addMochaCommands (http://localhost:42879/node_modules/@wdio/utils/build/index.js?v=debd9bab:1340:18)
    at wrapGlobalTestMethod (http://localhost:42879/node_modules/@wdio/utils/build/index.js?v=debd9bab:1337:3)
    at http://localhost:42879/node_modules/@wdio/mocha-framework/build/common.js?v=debd9bab:97:5
    at Array.forEach (<anonymous>)
    at setupEnv (http://localhost:42879/node_modules/@wdio/mocha-framework/build/common.js?v=debd9bab:95:20)
    at MochaFramework.run (http://localhost:42879/@wdio/browser-runner/setup:167:5)
    at http://localhost:42879/@wdio/browser-runner/setup:314:18

[0-0] FAILED in firefox - file:///tests/my-test.js
[1-0] FAILED in chromium - file:///tests/my-test.js

Spec Files:	 0 passed, 2 failed, 2 total (100% completed) in 00:00:12  

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------

```
