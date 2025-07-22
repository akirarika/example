import electron from 'electron';
globalThis.electron = electron;
await import('./foo.js');