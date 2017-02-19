import { SingSnapPage } from './app.po';

describe('sing-snap App', () => {
  let page: SingSnapPage;

  beforeEach(() => {
    page = new SingSnapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
