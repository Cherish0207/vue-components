[Vue组件间通信方式](http://www.zhufengpeixun.cn/train/vue-info/component.html#%E4%B8%80-props%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE) 学习笔记
## v-model
v-model ==> value + input

对于原生标签,`v-model`并不等于`input + value`. 
`v-model`内部会对输入法做处理,而且不同的标签解析出的结果不一样 `type checkbox= checked + change`
对于组件上使用，`v-model`就等同于`input + value`语法糖
## provide inject
希望数据被儿子公用不希望传递来传递去 (react context Provider consumer)
注入数据可以随便写可以把父组件直接注入进去
## ref
可以用到dom元素上获取的是dom节点
放到组件上获取的就是当前的组件-