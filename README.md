# Project GeubDDong - Frontend
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
### Setting (협업 환경 설정)
#### Commit(커밋)
- 커밋 메시지 통일을 위해 템플릿 적용
  ```bash
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
- 적용 결과
![gitMessage](https://github.com/user-attachments/assets/88ab46c7-f463-4a1d-a6da-45d16d515b54)

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
- 적용 결과
![issue](https://github.com/user-attachments/assets/a18f3060-24c6-4c89-95bd-913947c4e89d)
#### Pull Request(풀 리퀘스트)
- Pull Request 형식 통일을 위해 템플릿 적용
  ```md
  ## #️⃣연관된 이슈

  > ex) #이슈번호, #이슈번호

  ## 📝작업 내용

  > 이번 PR에서 작업한 내용을 간략히 설명해주세요(이미지 첨부 가능)

  ### 스크린샷 (선택)

  ## 💬리뷰 요구사항(선택)

  > 리뷰어가 특별히 봐주었으면 하는 부분이 있다면 작성해주세요
  >
  > ex) 메서드 XXX의 이름을 더 잘 짓고 싶은데 혹시 좋은 명칭이 있을까요?
  ```
- 적용 결과
![pr](https://github.com/user-attachments/assets/93e0f182-bc97-4ec6-bd80-e385d4398f5b)
#### Husky(허스키)
- 코드 커밋 전 코드 품질에 이상이 없는지 확인하기 위해 허스키 적용
- 커밋 단계에서 lint 검사 수행
  - 커밋 전 husky pre-commit 훅 실행
    ```bash
    # .husky/pre-commit
    npx lint-staged
    ```
  - lint-staged 실행(스테이징된 파일만 eslint, prettier 검사 진행)
    ```json
    // package.json
    "lint-staged": {
      "*.{ts,tsx}": [
        "eslint --fix",
        "prettier --write"
      ]
    }
    ```
#### 기타 설정 사항
- 브렌치 ruleset 적용
  - git flow 방식의 협업에서 실수를 방지하기 위하여 main, develop 브렌치에 push 비활성화
  - Pull Request 시 다른 한 명의 팀원의 approve가 있어야 merge 가능
### Coding Convention(코딩 컨벤션)
#### Naming Convention(네이밍 컨벤션)
#### Prettier
- 코드 스타일 통일을 위해 코드 포멧터인 Prettier를 적용
  ```json
  {
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "bracketSpacing": true,
    "trailingComma": "all",
    "arrowParens": "always"
  }
  ```
#### ESLint
- 코드 품질을 위해 ESLint 적용
- (2025.02 기준) Airbnb 규칙을 적용하려 했으나 eslint-config-airbnb의 의존성 모듈 간 버전 충돌 이슈에 의해 프로젝트 생성 시 함께 만들어지는 기본 설정만을 적용
## CI/CD
### Github Action
- 코드 변경사항의 통합, 빌드, 테스트등에 대한 자동화를 위하여 Github Action 적용
  - 적용 시점 : main, develop 브렌치에 pr을 할 때
  - 적용 사항 : 린트 검사, 빌드 검사, 테스트 검사
  ```yml
  name: CI

  on:
    pull_request:
      branches:
        - main
        - develop

  jobs:
    lint:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: '22'

        - name: Install dependencies
          run: npm install

        - name: Run linter
          run: npm run lint
    build:
      runs-on: ubuntu-latest
      needs: lint
      steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: '22'

        - name: Install dependencies
          run: npm install

        - name: Build project
          run: npm run build

    test:
      runs-on: ubuntu-latest
      needs: build
      steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: '22'

        - name: Install dependencies
          run: npm install

        - name: Run tests
          run: npm test

  ```