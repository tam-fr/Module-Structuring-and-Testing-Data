// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.slice(0, filePath.lastIndexOf("/"));
const ext = filePath.slice(filePath.lastIndexOf(".") + 1);

console.log(dir);
console.log(ext);

/*
Explanation:

filePath.lastIndexOf(".") finds the position of the last dot in the path.

slice() extracts the substring starting one position after the dot (hence +1), giving just the extension without the dot.
*/

// https://www.google.com/search?q=slice+mdn
