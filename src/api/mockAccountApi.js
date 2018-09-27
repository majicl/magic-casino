import { account } from './apiUrl';
import $ from 'jquery';
import delay from './delay';
// It uses setTimeout to simulate the delay of an AJAX call.

// All calls return promises.
class AccountApi {
    static login(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $.post(account.login, user)
                .then(resolve)
                .catch(reject);
            }, delay);
        });
    }

    static logout() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                $.get(account.logout)
                .then(resolve)
                .catch(reject);
            }, delay);
        });
    }
}

export default AccountApi;
