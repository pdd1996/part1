# React 简介
#### create-react-app

```javascript
npx create-react-app part1
cd part1

npm run start

// localhost:3000
```



#### index.js联系着index.html和App.js，将App.js内容渲染到id为root的div中

```html
// index.html
// 位于public文件夹中
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
</html>
```

```react
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```react
// App_Back.js
function App() {

  return (
    <div className="App">
      <h1>Greeting</h1>
    </div>
  );
}

export default App;
```



### react组件

组件 - 当使用react时，所有需要渲染的内容

```react
const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

// 修改APP组件，增加计算
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
```

#### 视角

1. 直观角度 - 内容div和p
2. 技术角度 - JavaScript函数，并将这个函数分配给常量App



#### JSX

组件编写的代码块，类似html

本质jsx - 处理一种写JavaScript的方式，react组件返回的jsx被编译成JavaScript



**注意**

1. JSX是"XML-like"语言，这意味着每个标签都需要被**关闭**

2. React组件名称必须**大写**

```react
// babel进行编译
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}
```



#### Props

组件传值

```react
// App_Back.js
import Hello from "./Hello";

function App() {
  const name = "ls"
  const age = 18
  return (
    <div className="App">
      <h1>Greeting</h1>
      <Hello name="zs" age={14 + 3} />
      <Hello name={name} age={age}/>
    </div>
  );
}

export default App;
// 组件App发送的props是变量的值、表达式的计算结果和一个常规字符串
```

```react
// Hello.js
const Hello = (props) => {
	return (
		<div>
			<h1>Hello {props.name}, your age {props.age} </h1>
		</div>
	)
}

export default Hello;
```



# JavaScript

#### 变量

1. const 
2. let

#### 数组

const 数组为什么可以变化？

尽管它被定义为*const*。因为数组是一个对象，这个变量总是指向同一个对象

函数式编程特点 - **不可逆**

在React代码中，最好使用*concat*方法，该方法不会将项目添加到数组中，而是创建一个新的数组，其中同时包含旧数组和新项目的内容。

1. concat
2. map
3. ...

#### 对象

```javascript
const object = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  age: 35,
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
// 对象的属性 整数、字符串、数组、对象
```

```javascript
// 访问对象
console.log(object.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed
```

```javascript
// 增加属性
object1.address = 'Helsinki'
object1['secret number'] = 12341
```

#### 方法

1. 函数申明式
2. 函数表达式

3. 箭头函数

