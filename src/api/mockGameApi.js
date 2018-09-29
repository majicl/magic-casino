import { game } from './apiUrl'
import $ from 'jquery'
import delay from './delay'
// It uses setTimeout to simulate the delay of an AJAX call.

// All calls return promises.
class GameApi {
    static getAllGameCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $.get(game.categories)
                    .then(resolve)
                    .catch(reject)
            }, delay)
        })
    }

    static getAllGames(keyword) {
        keyword = keyword && keyword.toLowerCase()
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $.get(game.games)
                    .then(games => {
                        if (!keyword) {
                            return games;
                        } else {
                            return games.filter(game => {
                                return game.name.toLowerCase().includes(keyword) 
                               // || game.description.toLowerCase().includes(keyword)
                            })
                        }
                    }).then(resolve)
                    .catch(reject)
            }, delay)
        })
    }

}

export default GameApi
