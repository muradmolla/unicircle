import Endpoints from '../constants/Endpoints';
import {Swipee} from '../types'

const EndpointAPI = {
    swiper: {
        next: async function(): Promise<Swipee | null> {
            try {
                const response = await fetch(Endpoints.swipee.next)
                const json = await response.json();
                console.log(json);
                return json;
            } catch(error) {
                console.log(error);
                return null;
            }
            return {
                id: 0,
                name: 'Kerim',
                age: 23,
                images: [
                    {uri: 'https://i.ibb.co/KzxMNLH/212658975-187435943339118-5695072243577673779-n.jpg', key: 1},
                    {uri: 'https://i.ibb.co/4WjMG59/196003154-856736181906060-6420268993758200799-n.jpg', key: 0},
                    {uri: 'https://i.ibb.co/vkHLRHG/211461405-506432903793353-5666450343766570459-n.jpg', key: 2},
                ],
                userId: 0,
                about: 'I am gay.',
                interests: [{name: 'skateboard', id: 0},{name: 'snowboard', id: 1}],
                university: 'Kadir Has University'
            }
        },
        swipe: async function(id: number, accepted: boolean) {
            try {
                const response = await fetch(Endpoints.swipee.swipe, {
                    method: 'POST',
                    body: JSON.stringify({
                        id: id,
                        accepted: accepted,
                    })
                })
                const json = await response.json();
                return json;
            } catch(error) {
                console.log(error);
                return null;
            }
        }
    }
}

export default EndpointAPI;