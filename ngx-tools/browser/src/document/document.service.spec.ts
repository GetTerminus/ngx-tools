import { TsDocumentService } from './document.service';


describe(`TsDocumentService`, function() {

  test(`should return the window object`, () => {
    const service = new TsDocumentService();

    expect(service.document).toBeTruthy();
  });

});
