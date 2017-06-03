import { IndisktNgcliPage } from './app.po';

describe('indiskt-ngcli App', () => {
  let page: IndisktNgcliPage;

  beforeEach(() => {
    page = new IndisktNgcliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
