const globals = {
  tslib: 'tslib',

  '@angular/animations': 'ng.animations',
  '@angular/common': 'ng.common',
  '@angular/core': 'ng.core',
  '@angular/core/testing': 'ng.core.testing',
  '@angular/forms': 'ng.forms',
  '@angular/http': 'ng.http',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',

  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/Scheduler': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/Subscriber': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/interfaces': 'Rx',

  'rxjs/observable/combineLatest': 'Rx.Observable',
  'rxjs/observable/ErrorObservable': 'Rx.Observable',
  'rxjs/observable/defer': 'Rx.Observable',
  'rxjs/observable/empty': 'Rx.Observable',
  'rxjs/observable/forkJoin': 'Rx.Observable',
  'rxjs/observable/fromEvent': 'Rx.Observable',
  'rxjs/observable/fromEventPattern': 'Rx.Observable',
  'rxjs/observable/merge': 'Rx.Observable',
  'rxjs/observable/of': 'Rx.Observable',
  'rxjs/observable/range': 'Rx.Observable',
  'rxjs/observable/_throw': 'Rx.Observable',
  'rxjs/observable/timer': 'Rx.Observable',

  'rxjs/operators/auditTime': 'Rx.operators',
  'rxjs/operators/catchError': 'Rx.operators',
  'rxjs/operators/combineLatest': 'Rx.operators',
  'rxjs/operators/debounceTime': 'Rx.operators',
  'rxjs/operators/delay': 'Rx.operators',
  'rxjs/operators/filter': 'Rx.operators',
  'rxjs/operators/finalize': 'Rx.operators',
  'rxjs/operators/first': 'Rx.operators',
  'rxjs/operators/map': 'Rx.operators',
  'rxjs/operators/mergeMap': 'Rx.operators',
  'rxjs/operators/retryWhen': 'Rx.operators',
  'rxjs/operators/share': 'Rx.operators',
  'rxjs/operators/startWith': 'Rx.operators',
  'rxjs/operators/switchMap': 'Rx.operators',
  'rxjs/operators/take': 'Rx.operators',
  'rxjs/operators/takeUntil': 'Rx.operators',
  'rxjs/operators/tap': 'Rx.operators',
  'rxjs/operators/zip': 'Rx.operators',
};

export function jestConfig(config: any): void {
  if (!config.moduleNameMapper) {
    config.moduleNameMapper = {};
  }

  config.moduleNameMapper['(.*)'] = '<rootDir>/src/$1';
}

export function tsconfig(config: any) {
  config.angularCompilerOptions.strictMetadataEmit = false;
}

export function rollupFESM(config: any) {
  if (config.external) {
    config.external = config.external.concat(Object.keys(globals));
  } else {
    config.external = Object.keys(globals);
  }

  config.globals = Object.assign(config.globals || {}, globals);
}

export const rollupUMD = rollupFESM;
