System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'typescript': 'lib/typescript.js',
    'services/*': 'services/*.ts',
    'components/*': 'components/*.ts'
  }
});
System.import('hello-berlin-app.ts').catch(function(err) {
  console.error('Error loading app', err);
});
