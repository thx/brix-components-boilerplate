# Hello

示例组件。

```
// 示例代码
<div bx-name="hello"></div>
```

## 配置

配置信息从 `data-*` 中读取，在组件中通过 `this.options` 访问。

配置项 | 类型    | 默认值  | 说明
:----- | :------ | :------ | :----------
foo    | string  | `'foo'` | 格式示例。
bar    | string  | `'bar'` | 格式示例。

## 方法

### .foo( [ foo ] )

* .foo()
* .foo( foo )

示例方法。

```js
var Loader = require('brix/loader')
var instances = Loader.query('hello')
var value = instances[0].foo()
console.log(value)
value = Math.random()
instances[0].foo(value)
```

## 事件

事件类型          | 说明
:---------------- | :----------
change.hello | 当示例组件变化时被触发。事件监听函数接受 2 个参数：`event`、`extra`。参数 `event` 是一个 [jQuery 事件对象]；参数 `extra` 是变化的值。

[jQuery 事件对象]: http://api.jquery.com/category/events/event-object/

```js
var Loader = require('brix/loader')
var instances = Loader.query('hello')
instances.on('change.hello', function(event, extra) {
    console.log(event.type, event.namespace, extra)
})
// =>
//  change hello extra
```

## 示例

<a href="./examples.html" target="_blank">examples.html</a>
