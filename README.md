# 커뮤니티 어플리케이션 만들기

## 📌 팀원

- [김민지](https://github.com/enddl3224)
- [오지호](https://github.com/jeehooh)
- [이해연](https://github.com/haeyeonleeee)

<br/>

## 📌 서비스 개요

커뮤니티 어플리케이션 앱

<br/>

## 📌 제작 기간

2022.10.12 ~ 2022.10.14

<br/>

## 📌 적용 기술

- 사용언어 : Typescript
- 런타임 환경 : Node.js
- 프레임워크 : nest.js
- 데이터베이스 : MySQL

- DB선택 이유 : 

<br/>

## 📌 요구사항 분석 및 구현

### 유저

**1. 회원가입**

- 회원은 중복된 email로 가입할 수 없습니다.

**2. 로그인**

- DB에 저장된 password와 클라이언트가 입력한 password를 비교 후 일치하면 토큰을 발급해줍니다.

**3. 팔로우**

- email로 친구를 필로우 할 수 있고, 언팔로우도 가능합니다.

---

### 포스트

**1. 포스트 작성**

- 로그인 한 회원은 포스트를 작성할 수 있습니다.

**2. 포스트 조회**

- 전체 포스트 조회, 포스트별 조회, 사용자별 포스트 조회할 수 있습니다

**2. 포스트 수정, 삭제**

- 사용자가 작성한 포스트만 수정하고 삭제할 수 있습니다.

<br/>

## 📌 DB Modeling

**[🔗 dbdiagram](https://dbdiagram.io/d/63452bedf0018a1c5fd9aa2e)**

<br>

## 📌 API DOCS

**[🔗 API DOCS]()**


<br/>

## 📌 Commit Convention

- Init : 프로젝트 초기 세팅
- Add : 새로운 기능 추가
- Update : 원래도 정상적으로 동작하고 있었지만 수정, 추가, 보완 했을 때
- Fix : 올바르지 않은 동작을 고친 경우 (버그 수정)
- Chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
- Docs : 문서 작성, 수정
- Refactor : 코드 리팩토링
- Test : 테스트 코드 추가
- Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
