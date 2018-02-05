const globals = {
  'tslib': 'tslib',

  '@angular/animations': 'ng.animations',
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/http': 'ng.http',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations'
};

export function jestConfig(config): void {
  if (!config.moduleNameMapper) {
    config.moduleNameMapper = {};
  }

  config.moduleNameMapper['(.*)'] = '<rootDir>/src/$1';
}

export function tsconfig(config) {
  config.angularCompilerOptions.strictMetadataEmit = false;
}

export function rollupFESM(config) {
  if (config.external) {
    config.external = config.external.concat(Object.keys(globals));
  } else {
    config.external = Object.keys(globals);
  }

  config.globals = Object.assign(config.globals || {}, globals);
}

export const rollupUMD = rollupFESM;
