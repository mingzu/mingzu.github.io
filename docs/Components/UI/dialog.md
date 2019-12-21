# 对话框 dialog
弹出对话框，内容属性可自由定制

## 示例
<example-dialog></example-dialog>

## 使用方法
``` html
<template>
  <div>
    <div style="margin-bottom:20px">
      <rty-button @click="firstDialog = true" :text="'点击打开Dialog'"></rty-button>
      <rty-dialog :visible.sync="firstDialog" :header="'标题'">
        <div>dialog内容</div>
        <div slot="footer">
          <rty-button :text="'取消'" @click="firstDialog = false"></rty-button>
          <rty-button :text="'确定'" @click="firstDialog = false" :type="'primary'"></rty-button>
        </div>
      </rty-dialog>
    </div>
    <div>
      <rty-button @click="secondDialog = true" :text="'点击打开自定义Dialog'"></rty-button>
      <rty-dialog :visible.sync="secondDialog">
        <div>
          <rty-progress :percent='55' :innerColor="'#d4333c'"></rty-progress>
        </div>
      </rty-dialog>
    </div>
  </div>
</template>
```
``` js
<script>
export default {
  data() {
    return {
      firstDialog: false,
      secondDialog: false
    };
  }
};
</script>
```

## 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| visible | 是否显示dialog | Boolean | - | false |
| header | dialog传入的标题，也可通过slot传入 | String | - | - |
| width | dialog宽度，百分比/px | String | - | 30% |
| clickEmpty | 是否可通过点击空白处关闭dialog | Boolean | - | true |

#### Slot
| name | 说明 |
|-|-|
| title | dialog标题内容，如不传不显示标题内容，标题显示header属性内容 |
| footer | dialog底部footer内容，如不传则不显示footer内容 |