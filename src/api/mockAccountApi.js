import { account } from './apiUrl'
import $ from 'jquery'
import delay from './delay'
// It uses setTimeout to simulate the delay of an AJAX call.

// All calls return promises.
/**
 * Account Class for handling account APIs
 * @class AccountApi
 */
class AccountApi {
    static login(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $.post(account.login, user)
                    .then((response) => {
                        if (response.status === "fail") {
                            reject(response.error)
                        } else {
                            delete response.player.password
                            response.player.username = user.username
                            resolve(response)
                        }
                    }).catch(reject)
            }, delay)
        })
    }

    static logout(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $.post(account.logout, user)
                    .then((response) => {
                        if (response.status === "fail") {
                            reject(response.error)
                        } else {
                            resolve(response)
                        }
                    }).catch(reject)
            }, delay)
        })
    }
}

export default AccountApi
