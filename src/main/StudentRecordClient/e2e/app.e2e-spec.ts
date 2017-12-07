import { StudentRecordClientPage } from './app.po';

describe('student-record-client App', function() {
  let page: StudentRecordClientPage;

  beforeEach(() => {
    page = new StudentRecordClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
