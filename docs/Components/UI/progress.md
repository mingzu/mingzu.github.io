# 进度条 progress
用于展示操作进度，告知用户当前状态和预期

## 示例
<example-progress></example-progress>

## 使用方法
``` html
<template>
  <div>
    <rty-progress></rty-progress>
    <rty-progress :percent='percent[0]'></rty-progress>
    <rty-progress :percent='percent[1]' :innerColor="innerColor"></rty-progress>
    <rty-progress :percent='percent[2]' :showText="showText"></rty-progress>
    <rty-progress :percent='percent[3]' :innerColor="innerColor" :barWidth="barWidth"></rty-progress>
  </div>
</template>
```
``` js
<script>
export default {
  data() {
    return {
      percent: [34, 68, 46, 55],
      innerColor: "#F56C6C",
      showText: false,
      barWidth: 500
    };
  }
};
</script>
```

## 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| barWidth | 进度条整体宽度 | Number | - | 330 |
| innerColor | 进度条颜色 | String | - | #409eff |
| percent | 百分比 | Number | 0-100 | 0 |
| showText | 是否显示进度条文字 | Boolean | - | true |