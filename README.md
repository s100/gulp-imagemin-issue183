# gulp-imagemin-issue183

Minimal demonstration of `gulp-imagemin` [issue #183](https://github.com/sindresorhus/gulp-imagemin/issues/183#issuecomment-233634243), which affected v3.0.1 of that module.

See how the `input` directory contains 13 SVG files, the 7th of which is deliberately malformed. When we run the minimal Gulp task,

```
$ npm start

[17:14:19] Using gulpfile ~\git\gulp-imagemin-issue183\gulpfile.js
[17:14:19] Starting 'clean'...
[17:14:19] Finished 'clean' after 6.42 ms
[17:14:19] Starting 'default'...

$ echo $?
0

$ ls output
button1.svg  button2.svg  button3.svg  button4.svg  button5.svg  button6.svg
```

An error occurred while processing `button7_broken.svg`, and the 8th through 13th images were not processed.
However, the error which occurred was apparently swallowed, and the task has seemingly completed successfully and returned `0`.

## Afterword

This issue was fixed with [PR #199](https://github.com/sindresorhus/gulp-imagemin/pull/199) and is resolved in `gulp-imagemin` v3.0.2.
