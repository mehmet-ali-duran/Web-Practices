// // ? Promise

// let check = true;

// const promise1 = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("İşlem başarılı");
//     } else {
//         reject("İşleme akamete uğradı");
//     }
// });

// console.log(promise1);

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            });
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    });
}

readStudents("students.json")
    .then((data) => console.log(data))
    .catch(() => console.log("Hata oldu abe"));
