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
// App.js
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
// App.js
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

# 组件状态

#### 组件内部事件和解构

```react
const Hello = (props) => {
	const { name, age } = props;
	const year = new Date().getFullYear();

	const bornYear = () => year - age;

	return (
		<div>
			<p>
				Hello {name}, you are {age} years old
			</p>
			<p>you born in {bornYear()}</p>
		</div>
	)
}

export default Hello;
```

```react
// 进一步结构 将props的内容解构到形参上
const Hello = ({name, age}) => {
	const year = new Date().getFullYear();

	const bornYear = () => year - age;

	return (
		<div>
			<p>
				Hello {name}, you are {age} years old
			</p>
			<p>you born in {bornYear()}</p>
		</div>
	)
}

export default Hello;
```

#### 重复渲染组件

```javascript
// 不推荐
setInterval(() => {
  refresh()
  counter += 1
}, 1000)
```

```react
// useState对组件进行改进
// counter变量被分配了state的初始值，即0。变量setCounter被分配给一个函数，该函数将被用来修改状态。
import {useState} from "react";

const App = () => {
  const [ count, setCount ] = useState(0);

  setTimeout(
    () => setCount(count + 1), 1000
  )

  return (
    <div>
      <h1>Greetings</h1>
     <div>{ count }</div>
    </div>
  )
}

export default App;
```

#### React事件

```react
// 第一种
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}

// 第二种
const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => console.log('clicked')}>
        plus
      </button>
    </div>
  )
}
```

#### 状态提升 - 重点

*通常，几个组件需要反映相同的变化数据。我们建议将共享状态提升到它们最接近的共同祖先。*

```react
// 所有处理counter的，都要使用setCounter函数来处理
// App.js
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

// Display.js
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

// Button.js
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
```

#### 使用对象

```react
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
```

```react
// 改进
import {useState} from "react";

function App() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      {clicks.right}
      <button onClick={handleRightClick}>right</button>
    </div>
  )
}

export default App;
```

#### 对象传播

现在*left*属性的新值与前一个状态的*left + 1*的值相同，而*right*属性的值与前一个状态的*right*的值相同。

我们可以通过使用[对象传播](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)来更整齐地定义新的状态对象。

```react
import {useState} from "react";

function App() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      {clicks.right}
      <button onClick={handleRightClick}>right</button>
    </div>
  )
}

export default App;
```

*在React中是禁止直接改变状态的*，因为[它可能导致意想不到的副作用](https://stackoverflow.com/a/66799937/10012446)。改变状态必须始终通过将状态设置为一个新的对象来完成。如果前一个状态对象的属性没有改变，它们需要简单地复制，这可以通过将这些属性复制到一个新的对象中，并将其设置为新的状态来完成
