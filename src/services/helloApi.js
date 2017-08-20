import request from 'superagent';

// http://qiita.com/salesone/items/356572e689b9c2099c5c
export function helloApi(id) {
    console.log("helloApi(" + id + ")");
    return new Promise(
        (resolve, reject) => {
            request
                .get("./hello_{0}.json?dt=".replace("{0}", id) + Math.random().toString().replace(".", ""))
                .end(function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ payload: res.body });
                    }
                });
        }
    );
}
