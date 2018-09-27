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

    static getAllGames() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $.get(game.games)
                .then(resolve)
                .catch(reject)
            }, delay)
        })
    }

}

export default GameApi
