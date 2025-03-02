# Project GuebDDong - Frontend
## Getting Started (시작하기)
```bash
npm install
npm run dev
```
## Technology Stack (기술 스택)
## Team Members (팀원 및 개발 파트)
## Project Structure (프로젝트 구조)
## Cooperation (협업 방식)
### Branch Strategy(브렌치 전략)
### Development Workflow (개발 워크플로우)
#### Commit(커밋)
- 커밋 메시지 통일을 위해 템플릿 적용
  ```
  ################
  # <타입> : <제목> 의 형식으로 제목을 아래 공백줄에 작성
  # 제목은 50자 이내 / 변경사항이 "무엇"인지 명확히 작성 / 끝에 마침표 금지
  # 예) feat : 로그인 기능 추가
  
  # 바로 아래 공백은 지우지 마세요 (제목과 본문의 분리를 위함)

  ################
  # 본문(구체적인 내용)을 아랫줄에 작성
  # 여러 줄의 메시지를 작성할 땐 "-"로 구분 (한 줄은 72자 이내)

  ################
  # 꼬릿말(footer)을 아랫줄에 작성 (현재 커밋과 관련된 이슈 번호 추가 등)
  # 예) Close #7

  ################
  # feat : 새로운 기능 추가
  # fix : 버그 수정
  # docs : 문서 수정
  # test : 테스트 코드 추가
  # refact : 코드 리팩토링
  # style : 코드 의미에 영향을 주지 않는 변경사항
  # chore : 빌드 부분 혹은 패키지 매니저 수정사항
  ################
  ```
- 적용 방법
    ```bash
    git config --local commit.template .gitmessage.txt
    ```
##### 적용 결과
![gitMessage](https://github.com/user-attachments/assets/63a3c3c0-025c-4249-96d2-afdcbb3d1729)

#### Issue(이슈)
- 개발, 수정 등 작업에 들어가기 전 이슈 생성
- 이슈 템플릿
  - 기능 개발 이슈 템플릿
    ```md
    ---
    name: 기능 개발
    about: 기능 개발 이슈 템플릿
    title: "[Feat]"
    labels: feature
    assignees: ''

    ---

    ## 어떤 기능인가요?

    > 추가하려는 기능에 대해 간결하게 설명해주세요

    ## 작업 상세 내용

    - [ ] TODO
    - [ ] TODO
    - [ ] TODO

    ## 참고할만한 자료(선택)

    ```
  - 오류 수정 이슈 템플릿
    ```md
    ---
    name: 오류 수정
    about: 오류 수정 이슈 템플릿
    title: "[Bug]"
    labels: bug
    assignees: ''

    ---

    ## 어떤 버그인가요?

    > 어떤 버그인지 간결하게 설명해주세요

    ## 어떤 상황에서 발생한 버그인가요?

    > (가능하면) Given-When-Then 형식으로 서술해주세요

    ## 예상 결과

    > 예상했던 정상적인 결과가 어떤 것이었는지 설명해주세요

    ## 참고할만한 자료(선택)

    ```
  - 코드 리팩토링 이슈 템플릿
    ```md
    ---
    name: 코드 리팩토링
    about: 코드 리팩토링 이슈 템플릿
    title: "[Refactor]"
    labels: 'refactor'
    assignees: ''

    ---

    ## 어떤 코드인가요?

    > 리팩토링하려는 코드와 이유에 대해 간결하게 설명해주세요

    ## 작업 상세 내용

    - [ ] TODO
    - [ ] TODO
    - [ ] TODO

    ## 참고할만한 자료(선택)

    ```
#### Pull Request(풀 리퀘스트)
##### Pull Request Template(풀 리퀘스트 템플릿)
```
```
### Coding Convention(코딩 컨벤션)
#### Naming Convention(네이밍 컨벤션)
#### Prettier
```
```
#### ESLint
```
```