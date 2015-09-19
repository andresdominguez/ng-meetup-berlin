System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    typescript: 'lib/typescript.js'
  }
});
System.import('hello-berlin-app.ts').catch(function(err) {
  console.error('Loading failed', err);
});
