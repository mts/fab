<p align="center">
  <img width="500px" height="250px" src=".docs/image/logo.jpg">
</p>

<h1 align="center">Find Animal Breed</h1>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/fab-client">
    <img alt="" src="https://img.shields.io/npm/v/fab-client.svg">
  </a>

  <a aria-label="travis build" href="https://travis-ci.org/mts/fab">
    <img alt="" src="https://img.shields.io/travis/mts/fab.svg?logo=travis">
  </a>

  <a href="https://codecov.io/gh/mts/fab">
    <img src="https://codecov.io/gh/mts/fab/branch/master/graph/badge.svg" />
  </a>

  <a aria-label="downloads" href="http://npm-stat.com/charts.html?package=fab-client&from=2018-10-13">
    <img alt="" src="https://img.shields.io/npm/dm/fab-client.svg">
  </a>

  <a aria-label="last commit" href="https://github.com/mts/fab/commits/master">
    <img alt="" src="https://img.shields.io/github/last-commit/mts/fab.svg">
  </a>

  <a aria-label="contributors graph" href="https://github.com/mts/fab/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/mts/fab.svg">
  </a>

  <a aria-label="license" href="https://github.com/mts/fab/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mts/fab.svg" alt="">
  </a>
</p>

<h2 style="color: #006400;">🗿 Introduction</h2>

<blockquote style="margin: 0; padding: 0 24px; color: olive; font-weight: 600; font-size:1em">🐝 Sharing is caring. Following is a collection of concepts which any maintainer needs to master in order to gracefully maintain this project and scale its implementation along with its unit and integration tests.</blockquote>

<h2 style="color: #006400;">🗿 Concepts</h2>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 JavaScript Runtime</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Node.js</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Node</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong><a style="color: #006400;" href="https://github.com/nodejs/node">node</a> repository on GitHub</li>
              <li><strong>Information: </strong>Node is required to bootstrap the project. Linting, formatting, testing and building scripts run all on Node.</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Version Control</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Git (self)</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 Git</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://git-scm.com/">Git</a> distributed version control system</li>
              <li><a style="color: #006400;" href="https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud">Git Commands</a> documentation by Atlassian</li>
              <li><strong>Information: </strong>Project source code is maintained in a Git repository. Using Git commands through the command prompt or a Git Client is essential.</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Git Hooks</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 Using Git Hooks</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong><a style="color: #006400;" href="https://github.com/typicode/husky">husky</a> repository on GitHub</li>
              <li><strong>Setup file(s): </strong><a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.huskyrc">.huskyrc</a></li>
              <li><strong>Script(s) in project's package.json: </strong>n/a</li>
              <li><strong>Information: </strong>Husky utilizes Git hooks such as pre-commit and pre-push</li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Running linters and testers against staged git files</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong><a style="color: #006400;" href="https://github.com/okonet/lint-staged">lint-staged</a> repository on GitHub</li>
              <li><strong>Setup file(s): </strong><a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.lintstagedrc">.lintstagedrc</a></li>
              <li><strong>Script(s) in project's package.json: </strong>n/a</li>
              <li><strong>Information: </strong>lint-staged runs linters and testers against staged git files. Using lint-staged combined with husky and thus targeting pre-commit and pre-push Git hooks prevents source code not conforming to linting rules and formatting style being committed or pushed to the Git repository's origin</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Git Client</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Git Kraken</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://www.gitkraken.com/">Website</a></li>
              <li><strong>Information: </strong>The coolest, the finest and the best Git client in the world 👌 Over 1.5 Million GitKraken Users❗</li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Sourcetree</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://www.sourcetreeapp.com/">Website</a></li>
              <li><strong>Information: </strong>Sourcetree simplifies how you interact with your Git repositories so you can focus on coding. Visualize and manage your repositories through Sourcetree's simple Git GUI.</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Bootstrap</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Install</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>rm -rf node_modules package-lock.json && npm install</kbd><br>
        in the following directories to remove existing node_modules directories, package-lock.json files<br>
        and install all dependencies from scratch:<br>
        <ul>
          <li><kbd>1. repository root</kbd></li>
          <li><kbd>2. packages/client</kbd></li>
        </ul>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Bootstrap</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>npm run bootstrap</kbd> in repository root
        to run linting, formatting, testing and building sequentially
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Start</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>npm run start-storybook</kbd> in 1st terminal in repository root to start up Storybook UI Component Explorer<br>
        Navigate in browser to <kbd>http://localhost:3003/</kbd><br>
        Run <kbd>npm t</kbd> in 2nd terminal in repository root to let Jest run all test suites and check out code coverage report<br>
        Run <kbd>npm run test -- --watch --onlyChanged --verbose</kbd> in 2nd terminal in repository root to let Jest watch changed tests<br>
        Run <kbd>npm start</kbd> in 3rd terminal in packages/client to start up webpack-dev-server<br>
        Navigate in browser to <kbd>http://localhost:8080/</kbd><br>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Dynamic Code Splitting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <ul>
          <li>Babel enables parsing dynamic imports through <a style="color: #006400;" href="https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import">@babel/plugin-syntax-dynamic-import</a> since <a style="color: #006400;" href="https://babeljs.io/blog/2019/07/03/7.5.0">v7.5.0</a></li>
          <li>Webpack recommends this <a style="color: #006400;" href="https://webpack.js.org/guides/code-splitting/#dynamic-imports">technique</a> instead of the legacy webpack-specific approach through optimization.splitChunks configuration option.
          </li>
        </ul>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Code Style</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Code Linting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 JavaScript</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong>
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/eslint/eslint">eslint</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/SublimeLinter/SublimeLinter-eslint">SublimeLinter-eslint</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/microsoft/vscode-eslint">vscode-eslint</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="http://plugins.jetbrains.com/plugin/7494-eslint">eslint plugin</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.eslintrc">.eslintrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.eslintignore">.eslintignore</a>
              </li>
              <li><strong>JavaScript Style Guide(s):</strong>
                <a style="color: #006400;" href="https://github.com/airbnb/javascript">AirBnb JavaScript Style Guide</a>,
                <a style="color: #006400;" href="https://github.com/airbnb/javascript/tree/master/react">Airbnb React/JSX Style Guide</a>
              </li>
              <li><strong>Script(s) in project's package.json:</strong>
                <ul>
                  <li>"lint:format": "npm-run-all lint format"</li>
                  <li>"lint": "npm-run-all lint:js:jsx lint:scss"</li>
                  <li>"lint:js:jsx": "eslint --ext .js --ext .jsx packages/**/src --fix"</li>
                </ul>
              </li>
              <li><strong>Information: </strong>Linting scripts meant for JavaScript files recursively go through all js, jsx files under the src directory checking if the source code conforms to ESLint linting rules, applying auto fixes if possible and outputs all other violations through the console.</li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Sass</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong>
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/stylelint/stylelint">stylelint</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/SublimeLinter/SublimeLinter-stylelint">SublimeLinter-stylelint</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/shinnn/vscode-stylelint">vscode-stylelint</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://www.jetbrains.com/help/idea/using-stylelint-code-quality-tool.html">activate stylelint</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.stylelintrc">.stylelintrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.stylelintignore">.stylelintignore</a>
              </li>
              <li><strong>CSS Style Guide(s):</strong>
                <a style="color: #006400;" href="https://github.com/airbnb/css">Airbnb CSS / Sass Styleguide</a>
              </li>
              <li><strong>Script(s) in project's package.json:</strong>
                  <ul>
                    <li>"lint:format": "npm-run-all lint format"</li>
                    <li>"lint": "npm-run-all lint:js:jsx lint:scss"</li>
                    <li>"lint:scss": "stylelint \"packages/**/src/**/*.{css,scss}\" --syntax=scss --fix"</li>
                  </ul>
              </li>
              <li><strong>Information: </strong>Linting scripts meant for Sass files recursively go through all scss files under the src directory checking if the source code conforms to Stylelint linting rules, applying auto fixes if possible and outputs all other violations through the console.</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Code Formatting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 HTML, JavaScript and Sass</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong>
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/prettier/prettier">prettier</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/jonlabelle/SublimeJsPrettier">SublimeJsPrettier</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/prettier/prettier-vscode">prettier-vscode</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://plugins.jetbrains.com/plugin/10456-prettier">prettier plugin</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.prettierrc">.prettierrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.prettierignore">.prettierignore</a>
              </li>
              <li><strong>Script(s) in project's package.json:</strong>
                <ul>
                  <li>"format": "npm-run-all format:js:jsx format:scss"</li>
                  <li>"format:js:jsx": "prettier --write \"packages/**/src/**/*.{js,jsx}\""</li>
                  <li>"format:scss": "prettier --write \"packages/**/src/**/*.{css,scss}\""</li>
                </ul>
              </li>
              <li><strong>Information: </strong>Code formatting scripts meant for JavaScript and Sass files recursively go through all js, jsx and scss files under the src directory enforcing a consistent style by parsing code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">File Formatting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 EditorConfig</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s):</strong>
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig">editorconfig</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-sublime">editorconfig-sublime</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-vscode">editorconfig-vscode</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-jetbrains">editorconfig-jetbrains</a> for Webstorm and IntelliJ</li>
                </ul>
              </li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.editorconfig">.editorconfig</a>
              </li>
              <li><strong>Script(s) in project's package.json: </strong>n/a</li>
              <li><strong>Information: </strong>File formatting configuration helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Compiling</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Transpiling</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Babel</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong><a style="color: #006400;" href="https://github.com/babel/babel">babel</a> repository on GitHub</li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/babel.config.js">babel.config.js</a> for <a href="https://jestjs.io/docs/en/getting-started#using-babel">Jest</a>,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/packages/client/webpack.common.js">webpack.common.js</a> for regular build,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.storybook/.babelrc">.babelrc</a> for storybook build
              </li>
              <li><strong>Script(s) in project's package.json:</strong>
                <ul>
                  <li>"build": "lerna run build --stream"</li>
                  <li>"build-storybook": "NODE_ENV=develop build-storybook -c .storybook -o .storybook-static",</li>
                </ul>
              </li>
              <li><strong>Information: </strong>JavaScript code which eventually goes into the bundle needs to be compiled from ES6 to Vanilla JavaScript to be compiled and executed by a browser</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Bundling</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Webpack</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong><a style="color: #006400;" href="https://github.com/webpack/webpack">webpack</a> repository on GitHub</li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/packages/client/webpack.settings.js">webpack.settings.js</a>,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/packages/client/webpack.common.js">webpack.common.js</a> shared by regular development and production builds,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/packages/client/webpack.dev.js">webpack.dev.js</a> for regular development build,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/packages/client/webpack.prod.js">webpack.prod.js</a> for regular production build,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.storybook/webpack.config.js">webpack.config.js</a> for storybook build
              </li>
              <li><strong>Script(s) in project's package.json:</strong>
                <ul>
                  <li>"build": "webpack --config ./webpack/webpack-build.babel.js --mode=production"</li>
                  <li>"build-storybook": "NODE_ENV=develop build-storybook -c .storybook -o .storybook-static"</li>
                </ul>
              </li>
              <li><strong>Information: </strong>JavaScript and Sass code along with static assets need to be loaded into or next to javascript and css bundles in a bundle output directory by a variety of loaders such as babel-loader, style-loader, css-loader, sass-loader, postcss-loader, file-loader and url-loader to be requested by a browser. Following loaders target specific file types during the bundling process
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Cross Browser Compatibility</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">ECMAScript Features</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 ES6 / ES2015</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>
                <strong>From var to const/let: </strong>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a> and 
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">let</a><br>
                const > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓<br>
                let > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer 🌦<br>
                Transpiled ✓, Safe to use ✅
              </li>
              <li>
                <strong>From objects to Maps: </strong>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.prototype.map()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓<br>
                Polyfilled if not native ✓ Safe to use ✅
              </li>
              <li>
                <strong>New Array methods: </strong>
                <ul>
                  <li>From 
                    <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexof">Array.prototype.indexOf()</a> to 
                    <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex">Array.prototype.findIndex()</a><br>
                    indexOf > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓<br>
                    findIndex > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                    Polyfilled if not native ✓, Safe to use ✅
                  </li>
                  <li>
                    From 
                      <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">Array.prototype.slice()</a> to 
                      <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">Array.from() or the spread operator</a><br>
                      Array.prototype.slice() > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓<br>
                      Array.from() > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                      Polyfilled if not native ✓, Safe to use ✅
                  </li>
                  <li>From 
                    <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array.apply()</a> to 
                    <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill">Array.prototype.fill()</a><br>
                    Array.apply() > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓<br>
                    Array.prototype.fill() > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                    Polyfilled if not native ✓, Safe to use ✅
                  </li>
                </ul>
              </li>
              <li>
                <strong>From CommonJS modules to ES6 modules: </strong>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">JavaScript modules</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                Transpiled ✓, Safe to use ✅
              </li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 ES7 / ES2016</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">Array.prototype.includes()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation">Exponentiation operator (**)</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                Transpiled ✓, Safe to use ✅
              </li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 ES8 / ES2017</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">Async functions</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                Transpiled ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">Object.entries()</a> and 
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values">Object.values()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
              <li>
                New string methods:
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart">String.prototype.padStart()</a> and 
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd">String.prototype.padEnd()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors">Object.getOwnPropertyDescriptors()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas">Trailing commas in function parameter lists and calls</a><br>
                Trailing commas > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓<br>
                Trailing commas in functions > Chrome ✓, Firefox ✓, Safari ╳, Edge ╳, Internet Explorer ╳<br>
                Trailing commas in object literals > Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ✓<br>
                Transpiled ✓, Safe to use ✅
              </li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 ES9 / ES2018</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread syntax</a> and 
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Rest_syntax_parameters">Rest syntax (parameters)</a><br>
                Spread in array literals > Chrome ✓, Firefox ✓, Safari ✓, Edge ╳, Internet Explorer ╳<br>
                Spread in function calls > Chrome ✓, Firefox ✓, Safari ✓, Edge ╳, Internet Explorer ╳<br>
                Spread in destructuring > Chrome ✓, Firefox ✓, Safari ✓, Edge ╳, Internet Explorer ╳<br>
                Spread in object literalsExperimental > Chrome ✓, Firefox ✓, Safari ✓, Edge ╳, Internet Explorer ╳<br>
                Transpiled ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally">Promise.prototype.finally()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ✓, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 ES10 / ES2019</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat">Array.prototype.flat()</a> and 
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap">Array.prototype.flatMap()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ╳, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries">Object.fromEntries()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ╳, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart">String.prototype.trimStart()</a> and 
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd">String.prototype.trimEnd()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ?, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">Optional catch binding</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ╳, Internet Explorer ╳<br>
                Transpiled ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">Array.prototype.sort()</a><br>
                Chrome ✓, Firefox ✓, Safari ✓, Edge ╳, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
              <li>
                <a style="color: #006400;" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/toString">Function.prototype.toString() revision</a><br>
                Chrome ╳, Firefox ✓, Safari ╳, Edge ╳, Internet Explorer ╳<br>
                Polyfilled if not native ✓, Safe to use ✅
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Application Architecture</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">State Container</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Redux</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s):</strong>
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/reduxjs/redux">redux</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/reduxjs/react-redux">react-redux</a> repository on GitHub</li>
                </ul>
              </li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/packages/client/src/store/client.js">client.js</a> for regular store,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/packages/library/src/store/mock.js">mock.js</a> for mock store
              </li>
              <li><strong>Script(s) in project's package.json: </strong>n/a</li>
              <li><strong>Information:</strong>
                <details>
                  <summary style="color: #006400;">Flux</summary>
                  <blockquote style="margin: 0; padding: 0 24px">
                    This project implements <a href="https://facebook.github.io/flux/">Flux </a>based application architecture through Redux state container and React integration for Redux. <br>
                    Components initiate changes by dispatching actions or thunks<br>
                    <img width="400px" height="250px" src=".docs/image/flux-component.png"> <br>
                    Dispatcher processes dispatched actions and thunks and reducer releases new state<br>
                    <img width="400px" height="250px" src=".docs/image/flux-flow.png"> <br>
                  </blockquote>
                </details>
                <details>
                  <summary style="color: #006400;">Store</summary>
                  <blockquote style="margin: 0; padding: 0 24px">
                    <ul>
                      <li><strong>State container implementation: </strong>Each application in this project has a Redux store which implements the following:
                        <ul>
                          <li><strong><em>Actions</em></strong> to dispatch when mutating existing state in a syncronous flow. Redux dispatcher passes a dispached action onto the reducer as second argument alongsde current state.</li>
                          <li><strong><em>Thunks</em></strong> to dispatch when mutating existing state in an asyncronous flow through redux-thunk middleware. Redux dispatcher directly calls a thunk.</li>
                          <li><strong><em>Reducer</em></strong> which takes existing state and an action as arguments and returns a new state. Immutability is achieved by spreading existing state to the level of mutation in the nested data structure</li>
                          <li><strong><em>State</em></strong>
                            <ul>
                              <li><strong><em>Default state</em></strong> to be used by the actual application store which consists of the following three partitions:
                                <ul>
                                  <li>context partition reflects user's signed in and authorization response states</li>
                                  <li>api partition reflects all from API endpoints' response states</li>
                                  <li>ui partition reflects all atomic design patterns' states</li>
                                </ul>
                              </li>
                              <li><strong><em>Mock state</em></strong>  to be used by a mock store when rendering snapshots and stories <br>
                                  Mock state consists of exactly the same context, api and ui partitions populated by static data.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong><em>AppStore class</em></strong> is meant to serve as application's state container and extends a base store called <strong><em>Store</em></strong> which sets
                        <ul> 
                          <li>the default application state in <strong>setAppDefaultState()</strong></li>
                          <li>application state container in <strong>setAppStore()</strong></li>
                          <li>populates application state in <strong>setAppCompleteState()</strong></li>
                          <li>sets hot module reloading in <strong>setHotModuleReloading()</strong> when Webpack HotModuleReplacementPlugin interface is exposed under the module.hot property.</li>
                        </ul>
                      </li>
                        <li>
                          <strong><em>Store class</em></strong> sets redux-thunk as thunk middleware for redux in <strong>setMiddlewares()</strong> and composes enhancers in <strong>setEnhancer()</strong> when initialized.
                        </li>
                    </ul>
                  </blockquote>
                </details>
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Component Driven Development</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Methodology</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Atomic Design</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#atoms">Atoms: </a></em></strong>Each Atom renders an atomic piece of UI</li>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#molecules">Molecules: </a></em></strong>Each molecule renders a composition of atoms</li>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#organisms">Organism: </a></em></strong>Each application of this project implements an organism called Landing which renders a composition of molecules</li>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#templates">Templates: </a></em></strong>Templates consist mostly of groups of organisms stitched together to form pages</li>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#pages">Pages: </a></em></strong>Pages are specific instances of templates</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Rendering</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 React</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong><em>Component Flavors: </em></strong>
                <ul>
                  <li>Preferred choice of React component is <a style="color: #006400;" href="https://reactjs.org/docs/hooks-state.html#hooks-and-function-components">function component with hooks </a></li>
                </ul>
              </li>
              <li><strong><em>Component Partitions: </em></strong>Each component implements the following partitions.
                <ul>
                  <li><strong><em>index.js: </em></strong>All named exports</li>
                  <li><strong><em>.jsx: </em></strong>Main UI implementation</li>
                  <li><strong><em>.part.jsx: </em></strong>Specific JSX parts implementation if any</li>
                  <li><strong><em>.scss: </em></strong>Sass styling implementation if applicable</li>
                  <li><strong><em>.part.scss: </em></strong>Sass styling parts implementation if any</li>
                  <li><strong><em>.prop.js: </em></strong>Default props and prop types</li>
                  <li>
                  <ul>__tests__/
                    <li><strong><em>.int.render.js: </em></strong>Exposes various flavors of the component to snapshots and stories for integration testing purposes</li>
                    <li><strong><em>.int.test.js: </em></strong>Implements Jest snapshots for flavors of the component exposed by .int.render.js</li>
                    <li><strong><em>.int.story.js: </em></strong>Implements Storybook stories for flavors of the component exposed by .int.render.js</li>
                  </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Scaling Tests</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Testing Strategy</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <ul>
          <li><strong>Information: </strong>Testing strategy consists of<br>
            <ul>
              <li>
                <strong>Unit testing </strong>covering regular logic by implementing <a style="color: #006400;" href="https://jestjs.io/">Jest unit tests</a>
              </li>
              <li>
                <strong>Integration testing </strong>covering UI logic, look and feel and responsiveness by implementing<br>
                <a style="color: #006400;" href="https://jestjs.io/">Jest Snapshots</a> and
                <a style="color: #006400;" href="https://github.com/storybookjs/storybook">Storybook stories</a>
              </li>
            </ul>
          </li>
          <li><img width="500px" height="250px" src=".docs/image/testing-strategy.jpg"></li>
        </ul>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Code Coverage Report</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <ul>
          <li><strong>Information: </strong>Code coverage thresholds are setup in
            <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/jest.config.js">jest.config.js</a><br>
          </li>
          <li><img width="650px" height="800px" src=".docs/image/code-coverage-report.jpg"></li>
        </ul>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Scaling Unit Tests</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Unit tests run by Jest</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s): </strong><a style="color: #006400;" href="https://github.com/facebook/jest">jest</a> repository on GitHub</li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/jest.config.js">jest.config.js</a>,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/jest.setup.js">jest.setup.js</a>
              </li>
              <li><strong>Script(s) in project's package.json:</strong>
                <ul>
                  <li>"test": "jest -u --no-cache --silent --runInBand --coverage"</li>
                  <li>"test:coverage": "jest --coverage --silent"</li>
                </ul>
              </li>
              <li><strong>Information:</strong>
                <ul>
                  <li>Check out <a style="color: #006400;" href="https://jestjs.io/">Jest </a> documentation by Facebook</li>
                  <li>Each JavaScript file whose implementation is subject to unit testing must have a .test.js file in the __tests__ directory at the same level with the targeted implementation</li>
                  <li>Test blocks must be implemented conforming to the Arrange, Act, Assert pattern</li>
                  <li>Using Jest API
                    <ul>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/tutorial-async#async-await">async/await</a> Test blocks covering asyncronous functions must be implemented conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              test('must ...', async () => {
                                ...
                                await expect(someFunction).someExpectMethod()
                              })
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/api#describename-fn">describe()</a> must be used to group related tests conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              describe('file name of module under test', () => {
                                beforeEach(() => {
                                  jest.resetModules()
                                  ...
                                })
                                afterEach(() => {
                                  jest.clearAllMocks()
                                  ...
                                }
                                describe('name of function as the unit under test', () => {
                                  test('must do something', () => {
                                  })
                                  test('must do something else', () => {
                                  })
                                })
                              })
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options">jest.mock()</a> must be used to mock dependency modules</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              jest.mock('some dependency module name or relative path with module name', () => ({
                                someExposedFunction: () => ({}),
                                someOtherExposedFunction: jest.fn(),
                              }))
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://nodejs.org/api/modules.html#modules_require_id">require()</a> must be used to access a mocked dependency module</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              const someModuleMockObject = require('some-module')
                              const someOtherModuleMockObject = require('../../../relative-path-to/some-module')
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname">jest.spyOn()</a> must be used to mock functions exposed by mocked dependency modules conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject')
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn">jest.mockImplementation()</a> must be used to mock the implementations of mocked functions exposed by mocked dependency modules conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockImplementation(jest.fn())
                              jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockImplementation(jest.fn() => { replace with desired implementation})
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/mock-function-api#mockfnmockreturnvaluevalue">jest.mockReturnValue()</a> must be used to mock return values of mocked functions exposed by mocked dependency modules conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockReturnValue(someValue)
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/expect">expect()</a> must be used to assert expected values against received values using any of the expect <a style="color: #006400;" href="https://jestjs.io/docs/en/expect">methods conforming to the following pattern</a></summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              expect(someMockFunction).toHaveBeenCalled()
                              expect(someMockFunction).not.toHaveBeenCalled()
                              ...
                              expect(someMockFunction).toHaveBeenCalledTimes(someNumber)
                              expect(someMockFunction).not.toHaveBeenCalled()
                              ...
                              expect(someMockFunction).toHaveBeenCalledWith({ someObjectProperty: 'some-value', someOtherObjectProperty; expect.any(Boolean)})
                              ...
                              expect(someObject).toMatchObject(someOtherObject)
                              expect(someObject).not.toMatchObject(someOtherObject)
                              ...
                              expect(someObject).toBe(someOtherObject)
                              expect(someObject).not.toBe(someOtherObject)
                              ...
                              expect(someValue).toEqual(someOtherValue)
                              expect(someValue).not.toEqual(someOtherValue)
                              ...
                              expect(someObject).toBeUndefined()
                              expect(someObject).not.toBeUndefined()
                              ...
                              expect(somevAlue).toBeTruthy()
                              expect(somevAlue).toBeFalsy()
                            </code>
                          </blockquote>
                        </details>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Scaling Integration Tests</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Snapshots run by Jest</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s):</strong>
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/facebook/jest">jest</a> repository on GitHub</li>
                </ul>
              </li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/jest.config.js">jest.config.js</a>,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/jest.setup.js">jest.setup.js</a>
              </li>
              <li><strong>Script(s) in project's package.json:</strong>
                <ul>
                  <li>"test": "jest -u --no-cache --silent --runInBand --coverage"</li>
                  <li>"test:coverage": "jest --coverage --silent"</li>
                </ul>
              </li>
              <li><strong>Information:</strong>
                <ul>
                  <li>Check out <a style="color: #006400;" href="https://jestjs.io/">Jest </a> documentation by Facebook</li>
                  <li>Each UI component whose jsx render implementation is subject to integration testing <br>
                      must have a .int.test.js file with snapshots of various flavors of the component in the __tests__ directory at the same level with the targeted implementation</li>
                  <li>Using Jest API
                    <ul>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest">Snapshot Testing with Jest</a> Snapshots must be implemented conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                            describe('<SomeComponent />', () => {
                              describe('Snaphot', () => {
                                test('must match composition', () => {
                                  expect(global.renderToJSON(<SomeComponent />)).toMatchSnapshot()
                                })
                              })
                            })
                            </code>
                          </blockquote>
                        </details>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Stories run by Storybook</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong>Package(s):</strong>
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/storybookjs/storybook">storybook</a> repository on GitHub</li>
                </ul>
              </li>
              <li><strong>Setup file(s):</strong>
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.storybook/addons.js">addons.js</a>,
                <a style="color: #006400;" href="https://github.com/mts/fab/blob/master/.storybook/config.js">config.js</a> for storybook
              </li>
              <li><strong>Script(s) in project's package.json:</strong>
                <ul>
                  <li>"start-storybook": "NODE_ENV=develop start-storybook -p 3003 -c .storybook"</li>
                </ul>
              </li>
              <li><strong>Information:</strong>
                <ul>
                  <li>Check out <a style="color: #006400;" href="https://storybook.js.org/docs/basics/introduction/">Storybook </a> documentation by Storybook.js</li>
                  <li>Each UI component whose jsx render implementation is subject to integration testing <br>
                      must have a .int.story.js file with stories of various flavors of the component in the __tests__ directory at the same level with the targeted<br>implementation</li>
                  <li>Using Storybook API
                    <ul>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://storybook.js.org/docs/basics/writing-stories/#docs-content">Writing Stories with Storybook</a> Stories must be implemented conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>storiesOf('SomeApplication/SomeAtomicDesignPattern/SomeComponent', module).add(someRenderInfo.text, () => someRender, someRenderInfo.parameters)</code>
                          </blockquote>
                        </details>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Using mock store with mock state</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong><em>Mock store</em></strong> is acquired in <a href="https://github.com/mts/fab/blob/master/packages/library/src/store/mock.js">mock.js</a> and uses redux-mock-store</li>
              <li><strong><em>Mock state</em></strong> is acquired in <a href="https://github.com/mts/fab/blob/master/packages/library/src/state/mock.js">mock.js</a></li>
              <li>
                <strong><em>Immutability</em></strong> of mock state across integration tests is achieved using deepCloneObject() <br>
                Changes specific to a test scenario can be applied to the immutable mock state clone. <br>
                Then adjusted mock state clone is passed on to the mock store and mock store is provided to any UI components involved in the test using react-redux provider
              </li>
              <li><strong><em>React Redux Provider</em></strong> is used to provide the mock store with a mock state to any UI component. <br>
                It accepts any store object in the store prop and provides the store to UI components rendered as its children.
              </li>
            </ul>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 CI / CD</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Continuous integration service</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Travis CI</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Check out <a style="color: #006400;" href="https://docs.travis-ci.com/"> documentation</a> by Travis CI</li>
              <li>Check out <a style="color: #006400;" href="https://travis-ci.org/mts/fab">builds</a> at Travis CI</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Branching Model</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Git Flow</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Check out <a style="color: #006400;" href="https://blog.axosoft.com/gitflow/">Gitflow </a> documentation by Axasoft</li>
              <li>Check out <a style="color: #006400;" href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">Gitflow </a> documentation by Atlassian</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<h2 style="color: #006400;">🗿 Applications</h2>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 🐝 ReactJS, ReduxJS Client</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <ul>
      <li><strong>Running </strong>locally at <a style="color: #006400;" href="http://localhost:8080/">http://localhost:8080/</a></li>
      <li><strong>Deployed </strong>to Github Pages and running at <a style="color: #006400;" href="https://mts.github.io/fab">https://mts.github.io/fab</a></li>
      <li><strong>Github Pages Cache Repair:</strong>
        <ul>
          <li><strong>Remove cache: </strong><kbd>rm -rf node_modules/gh-pages/.cache</kbd></li>
          <li><strong>Change </strong><kbd>https://github.com/mts/fab.git</kbd> to <kbd>git@github.com:mts/fab.git</kbd> in <kbd>.git/config</kbd></li>
        </ul>
      </li>
    </ul>
  </blockquote>
</details>
