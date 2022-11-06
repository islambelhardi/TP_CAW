var dir = require('node:fs/promises')
var fs = require('fs')
const path = require('path')

// 1er question
// function grep(text, files) {
//     const re = new RegExp(text);
//     var element= [];
//     for (let index = 0; index <files.length; index++) {
//         try {
//             const paragraph = fs.readFileSync(files[index]).toString();
//             if (paragraph.match(re, 'gi') == null) {
//                 console.log('None');
//             } else {
//                 // to add the files that contains text
//                  element.push(files[index]);
//             }
//         } catch (error) {
//             if (error.code === 'ENOENT') {
//                 console.log(`File not found! ${files[index]}`);
//             } else {
//                 throw error;
//             }
//         }
//     }
//     console.log(`this text found on ${element}`);
// }
// grep("hello", ['test.txt','te.txt']);

function grep(text, files) {
    const re = new RegExp(text);
    var element= [];
    filegrep(re,files,element)
}
async function check(source) {
    var folder;
    try {
        const directory = await dir.readdir(source,{ withFileTypes: true });
        folder =true;
    }catch (err) {
        folder = false;
    }
    return folder;
}
function filegrep(re,files,element=[]) {
    if (Array.isArray(files)) {
        for (let index = 0; index <files.length; index++) {
            try {
                const paragraph = fs.readFileSync(files[index]).toString();
                if (paragraph.match(re, 'gi') == null) {
                    console.log('None');
                } else {
                    // to add the files that contains text
                    element.push(files[index]);
                }
            } catch (error) {
                if (error.code === 'ENOENT') {
                    console.log(`File not found! ${files[index]}`);
                } else if(error.code === 'EISDIR'){
                   foldergrep(re,files[index])
                }
            }
        }
        if (element.length==0) {
            console.log("Didn't find this expression on listed files");
        } else {
            console.log(`this text found on ${element}`);
        }
    } else {
        console.log("enter a file to lookup for this exoression");
    }
    
}
async function foldergrep(re,source) {
    var files = [];
    // to get all folders 
    try {
        const directory = await dir.readdir(source,{ withFileTypes: true });
        for await (const dirent of directory)
        if (dirent.isDirectory()) {
            // to read subfolder
            foldergrep(re,source+'/'+dirent.name);
        }
        // type is file
        else if(dirent.isFile){
            files.push(source+'/'+dirent.name);
        }
      } catch (err) {
        // maybe its already a file
        console.error(err);
    }
    if (files.length==0) {
        console.log("didnt find any file in dir");
    } else {
        filegrep(re,files)
    }
}
grep("hello",["test.txt","test2.txt","./test"]);
