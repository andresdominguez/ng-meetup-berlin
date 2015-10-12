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
