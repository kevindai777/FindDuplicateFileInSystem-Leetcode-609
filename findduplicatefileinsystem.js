//Objective is, given a set of directories, to find any duplicate files in the system

let paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]


//O(n) solution that uses a hashmap to keep track of duplicate content

let map = {}
    
for (let text of paths) {
    let files = text.split(' ')
    
    //Start after the 'root' directory (i = 1)
    for (let i = 1; i < files.length; i++) {
        let index = files[i].indexOf('(')
        let content = files[i].slice(index + 1, files[i].length - 1)
        
        if (!map[content]) {
            map[content] = []
        }
        
        //The last substring represents the '(number).txt' part of the string
        map[content].push(files[0] + '/' + files[i].substring(0, index))
    }
}

//Return any content that appears more than once
return Object.values(map).filter(duplicate => duplicate.length > 1)