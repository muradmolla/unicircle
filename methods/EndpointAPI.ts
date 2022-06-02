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
                    {uri: 'https://lh3.googleusercontent.com/fife/AAWUweWKFKD200EvSwfUuFG7KcXzImki8wyYMD2NuA5IfAgwLdjm9phhShk5eFtJ6xFTqGJ58aJNmSlB74edW5OIsUbDSssN29RpuPcrXeSJ3Izs_iWrDeOT7eDJQCH-h4G9jPeXF60eoosBYEtH5pO8zg24EKWHrudzHzGs_K9giIXMDaLpLETbKli6Wuv6Kq3UhIzYJRikBDzOLUj0msmUHRA8IsqcDay-yR7gbPFpguOIkkwzkCAfqU7s3lAmRYAPqKcCzY-P8Icg1LVxmKDrWit9dWo6av7TvVWLJI_0D1Ywaq_08Ap24kxWnhPlt8to9vukaXjTqRedcIbEqgB9W1dx_hMqyArkB6TSk2g0F2yjO5jc0Eo1F77JfSiw9WMZk-QF_kzaRqWReDZTWddmH9HWGD7TcAL9lt-6uqwQijHP6SDD-srq1GRvShc1EyCWp2o1RX6fwZUcXKIl5ferQuHqmnf24dEyjkVA6Gfi2OWxG6JyEDTxOCtV9LFYxOH-YeW21xBW08MJuid8MNakPdoBVn2CfiKKE3abJILKMavLYxTuhItvKMEsM2vRhjfhQstjCVrfxvDojUohjyerKgQm5vxr954he9kabtSnKNSQZgx4U4vFvFR2S7lgM-lJDyr_doSiF7xA5571Evm-CdTFM0bPPeoraah2TFiO7GvyVWgTL1LZxmbqZFpDUY22hOZX0b34djL7xxmN52uxvVb9tBlaafU1yb1JWRFQf_CpnFeUxn8fVaPOhS614lSwmU-8sOeSpz5g-7C3u60veyVqur32VJ3m9LHDZT78c0LV9O6u0lKVh8x4aYazByN387xAGUFPIr8S8VL5xV4GfSjL6he_f2-HkvA9JTTkkEGEzfvNUlk-oJ-ZGaHBqo1ZJ_yGvZAlp_cbuiHAO9m8igEEe6C1nBsrn9Z_rgv4ZVr8wFXGl2_N_OEFsHpvcKrXt6cvledVOXNaJcVRbDHhcGPWAWTD04BIwCHg2jz55-52jdQHgYqm0DLmXqPbSCoqPTd97A97q-cr4s5T5PN18vhvUe_kIuasdTNRmqlm546Elxzf4HX7Tv1gykNW-kzVv9LyyJo6VkT4Ur0qK9EJ0RmvXZhdUxJQk0t5lgORTgQOW6S1Guz604WQFuY0zORuqc05AXLy7PqN08fJ6NJVbY8A1PEjmh67-skuQgrYT1eK-g9tlnPwYrsf3hG0xKaYQdZtflQjxGnuxfTC38B17sH9SELel-NLsSRR8R74wJpRi7rP6gqD6XUbnGAB518bm3Tw7FTS9mW7j-7I7QOnNg7gTGnXlJY5El36GgrE09TlEgA=w1680-h874', key: 0},
                    {uri: 'https://i.postimg.cc/W4YKNF8K/212658975-187435943339118-5695072243577673779-n.jpg', key: 1},
                ],
                about: 'I am a student.',
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