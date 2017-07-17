import { NetCoreAngularCliTemplatePage } from './app.po';

describe('net-core-angular-cli-template App', () => {
  let page: NetCoreAngularCliTemplatePage;

  beforeEach(() => {
    page = new NetCoreAngularCliTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
