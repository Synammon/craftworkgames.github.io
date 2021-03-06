(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{133:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tiled-logo-15cece4c4c24263ef65eb0399df18c10.png"},134:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/assets-6a3b3a06d9df585805d29f6f45628bcd.zip"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(91)),o={id:"tiled",title:"Tiled",sidebar_label:"Tiled"},c={unversionedId:"features/tiled/tiled",id:"features/tiled/tiled",isDocsHomePage:!1,title:"Tiled",description:"Tiled Logo",source:"@site/docs\\features\\tiled\\tiled.md",slug:"/features/tiled/tiled",permalink:"/docs/features/tiled/tiled",editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/tiled/tiled.md",version:"current",sidebar_label:"Tiled",sidebar:"docs",previous:{title:"Tweening",permalink:"/docs/features/tweening/tweening"},next:{title:"Screen Management",permalink:"/docs/features/screen-management/screen-management"}},l=[{value:"Installation",id:"installation",children:[{value:"Content Pipeline",id:"content-pipeline",children:[]},{value:"NuGet",id:"nuget",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Adding a Camera",id:"adding-a-camera",children:[]}]}],d={rightToc:l};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.mapeditor.org/"}),Object(i.b)("img",{alt:"Tiled Logo",src:n(133).default}))),Object(i.b)("h1",{id:"tiled"},"Tiled"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"MonoGame.Extended.Tiled")," library allows you to load and render maps files (",Object(i.b)("inlineCode",{parentName:"p"},".tmx"),") created with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.mapeditor.org/"}),"Tiled Map Editor"),"."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"content-pipeline"},"Content Pipeline"),Object(i.b)("p",null,"To load a Tiled map you first to compile it using the Content Pipeline. If you have not setup the Content Pipeline with ",Object(i.b)("inlineCode",{parentName:"p"},"MonoGame.Extended")," yet see the instructions on how to install the Content Pipeline in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/installation"}),"getting started section"),"."),Object(i.b)("h3",{id:"nuget"},"NuGet"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nuget.org/packages/MonoGame.Extended.Tiled/"}),"MonoGame.Extended.Tiled")," is distributed via a NuGet package. You can add the NuGet package to your C# project through your IDE of choice (Visual Studio, Xamarin Studio, Rider, etc) or through the Command Line Interface (CLI) using the dotnet command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"dotnet add package MonoGame.Extended.Tiled\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The assets used in this example can be downloaded ",Object(i.b)("a",{target:"_blank",href:n(134).default},"here")))),Object(i.b)("p",null,"We start by including the ",Object(i.b)("inlineCode",{parentName:"p"},"Tiled")," namespaces."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using MonoGame.Extended.Tiled;\nusing MonoGame.Extended.Tiled.Renderers;\n")),Object(i.b)("p",null,"Next, we define our ",Object(i.b)("inlineCode",{parentName:"p"},"Tiledmap")," and ",Object(i.b)("inlineCode",{parentName:"p"},"TiledMapRenderer")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"TiledMap _tiledMap;\nTiledMapRenderer _tiledMapRenderer;\n")),Object(i.b)("p",null,"Which we then initialize in the LoadContent function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'protected override void LoadContent()\n{\n    _tiledMap = Content.Load<TiledMap>("samplemap");\n    _tiledMapRenderer = new TiledMapRenderer(GraphicsDevice, _tiledMap);\n\n    _spriteBatch = new SpriteBatch(GraphicsDevice);\n}\n')),Object(i.b)("p",null,"Finally we render and update the map by calling ",Object(i.b)("inlineCode",{parentName:"p"},"mapRenderer.Update()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"mapRenderer.Draw()")," respectively."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"protected override void Update(GameTime gameTime)\n{\n    _tiledMapRenderer.Update(gameTime);\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"protected override void Draw(GameTime gameTime)\n{\n    GraphicsDevice.Clear(Color.Black);\n    \n    _tiledMapRenderer.Draw();\n}\n")),Object(i.b)("h3",{id:"adding-a-camera"},"Adding a Camera"),Object(i.b)("p",null,"The game now renders the ",Object(i.b)("inlineCode",{parentName:"p"},"TiledMap"),". The next step is to navigate through the map with a ",Object(i.b)("inlineCode",{parentName:"p"},"Camera"),"."),Object(i.b)("p",null,"We start by including the ",Object(i.b)("inlineCode",{parentName:"p"},"Camera")," namespaces."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"using MonoGame.Extended;\nusing MonoGame.Extended.ViewportAdapters;\n")),Object(i.b)("p",null,"Next, we define our Camera"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"private OrthographicCamera _camera;\n")),Object(i.b)("p",null,"Which we then initialize in the Initialize function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"protected override void Initialize()\n{\n    var viewportadapter = new BoxingViewportAdapter(Window, GraphicsDevice, 800, 600);\n    _camera = new OrthographicCamera(viewportadapter);\n}\n")),Object(i.b)("p",null,"We need to tell the Camera where to look. To do this, we declare the following field."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"private Vector2 _cameraPosition;\n")),Object(i.b)("p",null,"We update this field with the following function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"private Vector2 GetMovementDirection()\n{\n    var movementDirection = Vector2.Zero;\n    var state = Keyboard.GetState();\n    if (state.IsKeyDown(Keys.Down))\n    {\n        movementDirection -= Vector2.UnitY;\n    }\n    if (state.IsKeyDown(Keys.Up))\n    {\n        movementDirection += Vector2.UnitY;\n    }\n    if (state.IsKeyDown(Keys.Left))\n    {\n        movementDirection -= Vector2.UnitX;\n    }\n    if (state.IsKeyDown(Keys.Right))\n    {\n        movementDirection += Vector2.UnitX;\n    }\n    movementDirection.Normalize(); \n\n    return movementDirection;\n}\n\nprivate void MoveCamera(GameTime gameTime)\n{\n    var speed = 200;\n    var seconds = gameTime.GetElapsedSeconds();\n    var movementDirection = GetMovementDirection();\n    _cameraPosition += speed * movementDirection * seconds;\n}\n")),Object(i.b)("p",null,"Which we then use in the ",Object(i.b)("inlineCode",{parentName:"p"},"Update")," function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"protected override void Update(GameTime gameTime)\n{\n    _tiledMapRenderer.Update(gameTime);\n\n    MoveCamera(gameTime);\n    _camera.LookAt(_cameraPosition);\n\n    base.Update(gameTime);\n}\n")),Object(i.b)("p",null,"To render the map with our ",Object(i.b)("inlineCode",{parentName:"p"},"Camera"),", we call the Draw function with the Camera's ",Object(i.b)("inlineCode",{parentName:"p"},"ViewMatrix")," as follows."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"protected override void Draw(GameTime gameTime)\n{\n    GraphicsDevice.Clear(Color.Black);\n\n    _tiledMapRenderer.Draw(_camera.GetViewMatrix());\n}\n")))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return n?r.a.createElement(u,c(c({ref:t},d),{},{components:n})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);