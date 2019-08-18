new Vue({
    el: '.app',
    data: {
        num: 1,
        functions: [
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            },
            {
            icons: 'iconfont icon-chonghuafei',
            text: '充话费'
            }
        ],
        logos: [
                
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
            {
                name: 'iconfont icon-taobao'
            },
        ]
        
    },
    methods: {
        tabChange(e) {
            this.num = e.target.dataset.id;
        }
    }
})