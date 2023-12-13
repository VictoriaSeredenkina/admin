import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get("https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1", {
                method: 'GET',
                headers: {
                    'X-API-KEY': '05a7e351-114e-40fe-ad95-607b678ea030',
                    'Content-Type': 'application/json',
                },
            })
            return response.data.films
        } catch (e) {
            console.log(e)
        }
    }
    static async getId(id) {
        try {
            let response = await axios.get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+id, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '05a7e351-114e-40fe-ad95-607b678ea030',
                    'Content-Type': 'application/json',
                },
            })
            return response.data
        } catch (e) {
            // console.log(e)
        }
    }
}