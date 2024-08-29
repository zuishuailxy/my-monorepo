const fs = require("fs").promises;
const { cwd } = require("process");

async function readFile(filepath) {
    try {
        const data = await fs.readFile(filepath, "utf8");
        console.log(data.toString());
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

async function openFile() {
    try {
        const csvHeaders = "name,quantity,price";
        await fs.writeFile("groceries.csv", csvHeaders);
    } catch (error) {
        console.error(
            `Got an error trying to write to a file: ${error.message}`
        );
    }
}

async function addGroceryItem(name, quantity, price) {
    try {
        const csvLine = `\n${name},${quantity},${price}`;
        await fs.writeFile("groceries.csv", csvLine, { flag: "a" });
    } catch (error) {
        console.error(
            `Got an error trying to write to a file: ${error.message}`
        );
    }
}

async function deleteFile(filePath) {
    try {
        await fs.unlink(filePath);
        console.log(`Deleted ${filePath}`);
    } catch (error) {
        console.error(
            `Got an error trying to delete the file: ${error.message}`
        );
    }
}
async function moveFile(oldPath, newPath) {
    try {
        await fs.rename(oldPath, newPath);
        console.log(`Moved ${oldPath} to ${newPath}`);
    } catch (error) {
        console.error(`Got an error trying to move the file: ${error.message}`);
    }
}

readFile("./hello.txt");

(async function () {
    await openFile();
    await addGroceryItem("eggs", 12, 1.5);
    await addGroceryItem("nutella", 1, 4);
})();
// deleteFile("./groceries.csv");
moveFile("./groceries.csv", "./test.csv");
console.log(`Current directory: ${cwd()}`);
