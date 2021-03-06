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
                    '/storage/volume',
                    '/storage/snapshot',
                    '/storage/',
                ]
            },
           {
                title: '云主机服务',
                collapsable: false,
                children: [
                    '/ecs/instance',
                    '/ecs/sshkey',
                    '/ecs/servergroup',
                ]
            },
           {
                title: '网络服务',
                collapsable: false,
                children: [
                    '/network/vpc',
                    '/network/seg',
                ]
            },
           {
                title: '大数据服务',
                collapsable: false,
                children: [
                    '/bigdata/streamsets',
                ]
            },
            {
                 title: '系统管理',
                 collapsable: false,
                 children: [
                   '/system/approval',
                   '/system/alarm',
                   '/system/message_group',
                   '/system/price_model',
                   '/system/statistics'
                 ]
            },
            ['/monitor/', '监控'],
            ['/log/', '日志'],
            ['/user/', "用户管理"],
        ]
    },
};
