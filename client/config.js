System.config({
  "paths": {
    "*": "*.js",
    "gulpjspm/*": "lib/*.js",
    "github:*": "https://github.jspm.io/*.js"
  },
  "transpiler": "6to5"
});

System.config({
  "map": {
    "css": "github:systemjs/plugin-css@0.1.0",
    "image": "github:systemjs/plugin-image@0.1.0",
    "jquery": "github:components/jquery@2.1.3"
  }
});

