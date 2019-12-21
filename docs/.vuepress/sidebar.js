const sidebarCn = [
    {
      title: '组件',
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
          ['/Components/introduction', '组件'],
          ['/Components/UI/button', '按钮'],
          ['/Components/UI/loading', '加载框'],
          ['/Components/UI/dialog', '对话框'],
          ['/Components/UI/pagination', '分页'],
          ['/Components/UI/pop', '提示气泡'],
          ['/Components/UI/progress', '进度条'],
          ['/Components/UI/radio', '单选框'],
      ]
    },
    {
        title: '英语',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
            ['/English/introduction', '英语说明'],
            ['/English/2019/2019-November/The Paradox of Our Time', 'The Paradox of Our Time'],
            ['/English/2019/2019-November/The Story of LIfe', 'The Story of LIfe'],
            ['/English/2019/2019-November/The Time Bank', 'The Time Bank'],
            ['/English/2019/2019-November/What Will Matter', 'What Will Matter'],
        ]
    }
];
const sidebarEn = [
    {
        title: '组件',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
            ['/En/Components/introduction', '组件'],
            ['/En/Components/UI/button', '按钮'],
            ['/En/Components/UI/loading', '加载框'],
            ['/En/Components/UI/dialog', '对话框'],
            ['/En/Components/UI/pagination', '分页'],
            ['/En/Components/UI/pop', '提示气泡'],
            ['/En/Components/UI/progress', '进度条'],
            ['/En/Components/UI/radio', '单选框'],
        ]
      }
];

module.exports = {sidebarCn, sidebarEn};
