import 'jest-preset-angular';

const mock = () => {
  let storage: {[key: string]: any} = {};
  return {
    getItem: (key: string) => key in storage ? storage[key] : null,
    setItem: (key: string, value: any) => storage[key] = value || '',
    removeItem: (key: string) => delete storage[key],
    clear: () => storage = {},
  };
};

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance'],
});
