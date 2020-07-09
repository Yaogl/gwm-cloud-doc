const path = require('path');
module.exports = {
    title: 'PaaS Help Center',
    description: 'PaaS平台帮助中心',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@vuepress': path.join(__dirname, './public'),
            }
        }
    },

    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,

        nav: [
            {text: 'Home', link: '/'},
            {text: '指南', link: '/guide/'},
        ],
        displayAllHeaders: false,
        sidebarDepth: 1,
        sidebar: [
            ['/guide/', '介绍'],

            {
                title: '弹性计算',
                collapsable: false,
                children: [
                    '/elastic_computing/container_services',
                    '/elastic_computing/image',
                ]
            },
            {
                title: '数据库',
                collapsable: false,
                children: [
                    '/databases/mysql',
                ]
            },
            {
                title: '缓存',
                collapsable: false,
                children: [
                    '/caches/redis.md',

                ]
            },
            {
                title: '消息队列',
                collapsable: false,
                children: [
                    '/message_queue/rocketMQ.md',
                ]
            },
            {
                title: '存储',
                collapsable: false,
                children: [
                    '/storage/oss_operation',
                    '/storage/',
                ]
            },
           {
                title: 秘钥对',
                collapsable: false,
                children: [
                    '/sshkey/sshkey.md',
                    '/sshkey/',
                ]
            },
          {
                title: 容灾组',
                collapsable: false,
                children: [
                    '/servergroup/servergroup.md',
                    '/servergroup/',
                ]
            },
            ['/monitor/', '监控'],
            ['/log/', '日志'],
            ['/user/', "用户管理"],
        ]
    },
};