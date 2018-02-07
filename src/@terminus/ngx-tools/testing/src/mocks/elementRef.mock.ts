
export class ElementRefMock implements ElementRef {
  nativeElement = {
    innerText: 'foo',
    style: {},
  };
}
