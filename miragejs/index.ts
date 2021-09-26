import {createServer, Server} from 'miragejs'
import {v4 as uuid} from 'uuid'

export function makeServer(){
    let server = createServer({
        routes(){
            this.namespace = "api",
            
            
            this.get('/news-header',  () => ({
                news : [
                    {
                        id: uuid(),
                        image: '/movies/walking-dead.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Última Hora'
                    },
                    {
                        id: uuid(),
                        image: '/movies/aot.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Última Hora'
                    },
                    {
                        id: uuid(),
                        image: '/movies/lol.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Última Hora'
                    }]
                }))

                this.get('/news-day', () => [
                    {
                        id: uuid(),
                        image: '/movies/pain.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias do Dia'
                    },
                    {
                        id: uuid(),
                        image: '/movies/deadpool.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias do Dia'
                    },
                    {
                        id: uuid(),
                        image: '/movies/minecraft.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias do Dia'
                    },
                    {
                        id: uuid(),
                        image: '/movies/harry-potter.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias do Dia'
                    },
                    {
                        id: uuid(),
                        image: '/movies/supernatural.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias do Dia'
                    },
                    {
                        id: uuid(),
                        image: '/movies/pain.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias do Dia'
                    },
                    {
                        id: uuid(),
                        image: '/movies/deadpool.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias do Dia'
                    },
                    {
                        id: uuid(),
                        image: '/movies/minecraft.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias do Dia'
                    }
                ])

                this.get('/news-recent', () => [
                    {
                        id: uuid(),
                        image: ['/movies/naoko.svg', '/movies/naoko2.svg'],
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias Recentes'
                    },
                    {
                        id: uuid(),
                        image: '/movies/gta5.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias Recentes'
                    },
                    {
                        id: uuid(),
                        image: '/movies/vikings.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias Recentes'
                    },
                    {
                        id: uuid(),
                        image: '/movies/soul.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias Recentes'
                    },
                    {
                        id: uuid(),
                        image: '/movies/your-name.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias Recentes'
                    },
                    {
                        id: uuid(),
                        image: '/movies/lol2.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias Recentes'
                    }
                ])


                this.get('news-week', () => [
                    {
                        id: uuid(),
                        image: '/movies/chihiro.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias da Semana'
                    },
                    {
                        id: uuid(),
                        image: '/movies/rede-social.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias da Semana'
                    },
                    {
                        id: uuid(),
                        image: '/movies/god-of-war.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                        tag: 'Notícias da Semana'
                    }
                ])

                this.get('/news-animes', () => [
                    {
                        id: uuid(),
                        image: ['/movies/naoko.svg', '/movies/naoko2.svg'],
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: '/movies/goku.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: '/movies/demon-slayer.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: ['/movies/naoko.svg', '/movies/naoko2.svg'],
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: '/movies/goku.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: '/movies/demon-slayer.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: ['/movies/naoko.svg', '/movies/naoko2.svg'],
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: '/movies/goku.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: '/movies/demon-slayer.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: ['/movies/naoko.svg', '/movies/naoko2.svg'],
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: '/movies/goku.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    {
                        id: uuid(),
                        image: '/movies/demon-slayer.svg',
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.',
                        miniDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros. Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie. Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus. Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.',
                        date: '11/11/2021',
                    },
                    
                ])
            
                this.namespace = ""
                this.passthrough()
            }

        })

    return server 
}
