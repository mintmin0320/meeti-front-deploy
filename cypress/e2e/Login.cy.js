beforeEach(() => {
  cy.visit("/auth/sign-in");
});

it("회원가입을 클릭하면 회원가입(기업/개인) 페이지로 이동하기", () => {
  cy.findByLabelText("회원가입").click();

  cy.assertUrl('/auth');
});

it('로그인에 성공하면 일정관리 페이지(메인)로 이동하고 "일정"이라는 페이지명이 노출된다.', () => {
  cy.signin();
});