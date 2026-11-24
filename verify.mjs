import { spawnSync } from 'child_process';
import { readFileSync } from 'fs';

const run1 = spawnSync('npx', ['tsx', 'main.ts'], { encoding: 'utf8' });
const run2 = spawnSync('npx', ['tsx', 'main.ts'], { encoding: 'utf8' });

const output1 = run1.stdout.trim();
const output2 = run2.stdout.trim();

const file1 = readFileSync('/output/entry.txt', 'utf8').trim();
const file2 = readFileSync('/output/entry.txt', 'utf8').trim();

console.log('Run 1 stdout:', output1);
console.log('Run 2 stdout:', output2);
console.log('File 1:', file1);
console.log('File 2:', file2);

const stdoutMatch = output1 === output2;
const fileMatch = file1 === file2;
const contentMatch = output1 === file1 && output2 === file2;

console.log('stdout identical:', stdoutMatch);
console.log('file identical:', fileMatch);
console.log('stdout === file:', contentMatch);

if (stdoutMatch && fileMatch && contentMatch) {
  console.log('VERIFICATION PASSED: All outputs are byte-identical');
  process.exit(0);
} else {
  console.error('VERIFICATION FAILED: Outputs differ');
  process.exit(1);
}