const sidebarCn = [
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
        title: '英语',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
            ['/En/English/introduction', '英语说明'],
            ['/En/English/2019/2019-November/The Paradox of Our Time', 'The Paradox of Our Time'],
            ['/En/English/2019/2019-November/The Story of LIfe', 'The Story of LIfe'],
            ['/En/English/2019/2019-November/The Time Bank', 'The Time Bank'],
            ['/En/English/2019/2019-November/What Will Matter', 'What Will Matter'],
        ]
    }
];

module.exports = {sidebarCn, sidebarEn};
