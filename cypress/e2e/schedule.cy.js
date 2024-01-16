describe("일정 관리(등록/삭제)", () => {
  beforeEach(() => {
    cy.signin();
  });

  it("일정 등록에 성공하면 일정 조회 페이지(/ 경로)로 이동", () => {
    cy.findByTestId("add-schedule-button").click();

    const title = '홍대에서 친구 만나기';
    const place = '홍대';
    const startTime = '12:20';
    const endTime = '19:20';

    cy.findByText("29").click();
    cy.findByText("30").click();

    cy.findByTestId('title-input').type(title);
    cy.findByTestId('place-input').type(place);
    cy.findByTestId("start-time-input").invoke('val', startTime).trigger('change', {force: true});
    cy.findByTestId('end-time-input').invoke('val', endTime).trigger('change', {force: true});
    
    cy.findByText('일정 추가').click();

    cy.assertUrl('/');
  });
});
