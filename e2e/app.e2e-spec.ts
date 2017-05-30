import { PrimeNgDemoComponentsPage } from './app.po';

describe('prime-ng-demo-components App', () => {
  let page: PrimeNgDemoComponentsPage;

  beforeEach(() => {
    page = new PrimeNgDemoComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
