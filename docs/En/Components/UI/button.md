# 按钮 button
按钮组件

## 示例
<example-button></example-button>

## 使用方法
``` html
<template>
  <div>
    <rty-button></rty-button>
    <rty-button :text="primary" :type="primary"></rty-button>
    <rty-button :text="success" :type="success"></rty-button>
    <rty-button :text="warning" :type="warning"></rty-button>
    <rty-button :text="danger" :type="danger"></rty-button>
    <rty-button :text="medium.text" :type="primary" :size="medium.size"></rty-button>
    <rty-button :text="small.text" :type="success" :size="small.size"></rty-button>
    <rty-button :text="mini.text" :type="warning" :size="mini.size"></rty-button>
  </div>
</template>
```
``` js
<script>
export default {
  data() {
    return {
      primary: "primary",
      success: "success",
      warning: "warning",
      danger: "danger",
      medium: {
        size: "medium",
        text: "中等按钮"
      },
      small: {
        size: "small",
        text: "小型按钮"
      },
      mini: {
        size: "mini",
        text: "迷你按钮"
      }
    };
  }
};
</script>
```

## 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| text | 按钮文字 | String | default / primary / success / warning / danger | default |
| type | 按钮类型 | String | default / primary / success / warning / danger | default |
| size | 按钮尺寸 | String | default / medium / small / mini | default |