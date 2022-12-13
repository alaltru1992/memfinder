const fs = require('fs');
const path = require('path');

const text = process.env["TEST_TEXT"] || 'none';

const writePromise = async (pathName, fileName, data) =>{
    return new Promise((resolve, reject) =>{
        fs.writeFile(path.resolve(pathName, fileName), data, (err) =>{
            if(err){
                reject(err.message);
                console.log(err.message);
            }
            else{
                console.log(`${fileName} file is written`)
                resolve()
            }
        })
    })
}

const readPromise = async (pathName, fileName) =>{
    return new Promise((resolve, reject) =>{
        fs.readFile(path.resolve(pathName, fileName),{encoding: "utf-8"}, (err, data) =>{
            if(err){
                reject(err.message);
                console.log(err.message);
            }
            else{
                console.log(`${fileName} file is read`)
                resolve(data)
            }
        })
    })
}
const removePromise = async (pathName, fileName) =>{
    return new Promise((resolve, reject) =>{
        fs.rm(path.resolve(pathName, fileName), (err) =>{
            if(err){
                reject(err.message);
                console.log(err.message);
            }
            else{
                console.log(`${fileName} file is removed`)
                resolve()
            }
        })
    })
}

writePromise(path.resolve(path.join(__dirname, 'dir')), 'index.js', text)
    .then( () => readPromise(path.resolve(path.join(__dirname, 'dir')), 'index.js'))
    .then( data => writePromise(path.resolve(path.join(__dirname, 'dir')), 'index2.js', data.split().length+'') )
    .then( () => removePromise(path.resolve(path.join(__dirname, 'dir')), 'index.js'))


