const path = require('path');
module.exports = {
    title: 'PaaS Help Documents',
    description: '提供PaaS平台功能文档',
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
        displayAllHeaders: 'auto',
        sidebarDepth: 0,
        sidebar: [
            ['/guide/', '介绍'],

            {
                title: '弹性计算',
                collapsable: true,
                children: [
                    '/elastic_computing/container_services',
                    '/elastic_computing/image',
                ]
            },
            {
                title: '数据库',
                collapsable: true,
                children: [
                    '/databases/mysql',
                ]
            },
            {
                title: '缓存',
                collapsable: true,
                children: [
                    '/caches/redis.md',

                ]
            },
            {
                title: '消息队列',
                collapsable: true,
                children: [
                    '/message_queue/rocketMQ.md',
                ]
            },

            ['/storage/', '对象存储'],
            ['/monitor/', '监控'],
            ['/log/', '日志'],
        ]
    },
};