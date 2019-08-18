new Vue({
    el: '.app',
    data: {
        goodslist: [
            {
                url:'https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp',
                title: 'max破产都要买的口红',
                describtion: '《破产姐妹》max最爱Tarte哑光口红笔',
                comment: '5959 人说好'
            },
            {
                url:'https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp',
                title: 'max破产都要买的口红',
                describtion: '《破产姐妹》max最爱Tarte哑光口红笔',
                comment: '5959 人说好'
            },
            {
                url:'https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp',
                title: 'max破产都要买的口红',
                describtion: '《破产姐妹》max最爱Tarte哑光口红笔',
                comment: '5959 人说好'
            },
            {
                url:'https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp',
                title: 'max破产都要买的口红',
                describtion: '《破产姐妹》max最爱Tarte哑光口红笔',
                comment: '5959 人说好'
            },
            {
                url:'https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp',
                title: 'max破产都要买的口红',
                describtion: '《破产姐妹》max最爱Tarte哑光口红笔',
                comment: '5959 人说好'
            },
            {
                url:'https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_360x360xzq90.jpg_.webp',
                title: 'max破产都要买的口红',
                describtion: '《破产姐妹》max最爱Tarte哑光口红笔',
                comment: '5959 人说好'
            }
        ],
        shoppinglist: [
            {
                url: 'https://img.alicdn.com/tfscom/i4/2103587316/TB2sLDGf3MPMeJjy1XcXXXpppXa_!!2103587316.jpg_360x360xzq90.jpg_.webp',
                title: '时髦精必备女神气质款毛衫套装',
                usrImg: 'https://img.alicdn.com/imgextra/i4/2103587316/O1CN01TmOWp423um7evH2sa_!!2103587316-0-beehive-scenes.jpg_30x30.jpg',
                usrName: '张***e'
            },
            {
                url: 'https://img.alicdn.com/tfscom/i4/2103587316/TB2sLDGf3MPMeJjy1XcXXXpppXa_!!2103587316.jpg_360x360xzq90.jpg_.webp',
                title: '时髦精必备女神气质款毛衫套装',
                usrImg: 'https://img.alicdn.com/imgextra/i4/2103587316/O1CN01TmOWp423um7evH2sa_!!2103587316-0-beehive-scenes.jpg_30x30.jpg',
                usrName: '张***e'
            },
            {
                url: 'https://img.alicdn.com/tfscom/i4/2103587316/TB2sLDGf3MPMeJjy1XcXXXpppXa_!!2103587316.jpg_360x360xzq90.jpg_.webp',
                title: '时髦精必备女神气质款毛衫套装',
                usrImg: 'https://img.alicdn.com/imgextra/i4/2103587316/O1CN01TmOWp423um7evH2sa_!!2103587316-0-beehive-scenes.jpg_30x30.jpg',
                usrName: '张***e'
            },
            {
                url: 'https://img.alicdn.com/tfscom/i4/2103587316/TB2sLDGf3MPMeJjy1XcXXXpppXa_!!2103587316.jpg_360x360xzq90.jpg_.webp',
                title: '时髦精必备女神气质款毛衫套装',
                usrImg: 'https://img.alicdn.com/imgextra/i4/2103587316/O1CN01TmOWp423um7evH2sa_!!2103587316-0-beehive-scenes.jpg_30x30.jpg',
                usrName: '张***e'
            },
            {
                url: 'https://img.alicdn.com/tfscom/i4/2103587316/TB2sLDGf3MPMeJjy1XcXXXpppXa_!!2103587316.jpg_360x360xzq90.jpg_.webp',
                title: '时髦精必备女神气质款毛衫套装',
                usrImg: 'https://img.alicdn.com/imgextra/i4/2103587316/O1CN01TmOWp423um7evH2sa_!!2103587316-0-beehive-scenes.jpg_30x30.jpg',
                usrName: '张***e'
            },
            {
                url: 'https://img.alicdn.com/tfscom/i4/2103587316/TB2sLDGf3MPMeJjy1XcXXXpppXa_!!2103587316.jpg_360x360xzq90.jpg_.webp',
                title: '时髦精必备女神气质款毛衫套装',
                usrImg: 'https://img.alicdn.com/imgextra/i4/2103587316/O1CN01TmOWp423um7evH2sa_!!2103587316-0-beehive-scenes.jpg_30x30.jpg',
                usrName: '张***e'
            },
        ]
    },
    methods: {
        contentChange() {
            this.goodslist = [];
            this.goodslist = [
                {
                    url:'https://img.alicdn.com/imgextra/i1/693739777/TB2TW6MtwxlpuFjy0FoXXa.lXXa_!!693739777-0-daren.jpg_360x360xzq90.jpg_.webp',
                    title: 'ZIIIRO手表',
                    describtion: '采用现代设计，让时间显示犹如日食奇观重现，引爆眼球。',
                    comment: '19520 人说好'
                },
                {
                    url:'https://img.alicdn.com/imgextra/i1/693739777/TB2TW6MtwxlpuFjy0FoXXa.lXXa_!!693739777-0-daren.jpg_360x360xzq90.jpg_.webp',
                    title: 'ZIIIRO手表',
                    describtion: '采用现代设计，让时间显示犹如日食奇观重现，引爆眼球。',
                    comment: '19520 人说好'
                },
                {
                    url:'https://img.alicdn.com/imgextra/i1/693739777/TB2TW6MtwxlpuFjy0FoXXa.lXXa_!!693739777-0-daren.jpg_360x360xzq90.jpg_.webp',
                    title: 'ZIIIRO手表',
                    describtion: '采用现代设计，让时间显示犹如日食奇观重现，引爆眼球。',
                    comment: '19520 人说好'
                },
                {
                    url:'https://img.alicdn.com/imgextra/i1/693739777/TB2TW6MtwxlpuFjy0FoXXa.lXXa_!!693739777-0-daren.jpg_360x360xzq90.jpg_.webp',
                    title: 'ZIIIRO手表',
                    describtion: '采用现代设计，让时间显示犹如日食奇观重现，引爆眼球。',
                    comment: '19520 人说好'
                },
                {
                    url:'https://img.alicdn.com/imgextra/i1/693739777/TB2TW6MtwxlpuFjy0FoXXa.lXXa_!!693739777-0-daren.jpg_360x360xzq90.jpg_.webp',
                    title: 'ZIIIRO手表',
                    describtion: '采用现代设计，让时间显示犹如日食奇观重现，引爆眼球。',
                    comment: '19520 人说好'
                },
                {
                    url:'https://img.alicdn.com/imgextra/i1/693739777/TB2TW6MtwxlpuFjy0FoXXa.lXXa_!!693739777-0-daren.jpg_360x360xzq90.jpg_.webp',
                    title: 'ZIIIRO手表',
                    describtion: '采用现代设计，让时间显示犹如日食奇观重现，引爆眼球。',
                    comment: '19520 人说好'
                },
            ]
        }
    }
})