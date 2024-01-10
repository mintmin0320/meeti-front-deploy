describe("회원가입을 클릭하면 회원가입(기업/개인) 페이지로 이동하기", () => {
  beforeEach(() => {
    cy.visit("/auth");
  });

  it("개인 회원가입 페이지로 이동", () => {
    cy.findByText("개인용").click();
  
    cy.assertUrl('/auth/personal');
  });

  it("기업 회원가입 페이지로 이동", () => {
    cy.findByText("기업용").click();
  
    cy.assertUrl('/auth/corp');
  });
});

it('로그인에 성공하면 일정관리 페이지(메인)로 이동하고 "일정"이라는 페이지명이 노출된다.', () => {
  cy.visit("/auth/sign-in");
  
  cy.signin();
});

it('로그아웃에 성공하면 로그인 페이지로 이동된다.', () => {
  cy.visit("/auth/sign-in");

  cy.signin();

  cy.signout();
});

describe('로그인/비로그인 상태에서 권한 별로 페이지 리다이렉트가 진행된다.', () => {
  beforeEach(() => {
    cy.visit("/auth/sign-in");
  });

  it('비로그인 상태로 메인 페이지에 접근하면, 로그인 페이지로 리다이렉트 된다.', () => {
    cy.visit('/');
  
    cy.assertUrl('/auth/sign-in');
  });

  it('로그인 상태로 로그인 페이지에 접근하면, 메인 페이지로 리다이렉트 된다.', () => {
    cy.signin();
    
    cy.visit('/auth/sign-in');
  
    cy.assertUrl('/');
  });
});