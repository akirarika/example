
console.log('QAQ', typeof globalThis.electron);
console.log('QAQ', (electron.app.getAppPath()));
console.log('QAQ', (electron.app.getPath("userData")));
console.log('QAQ', (electron.app.getPath("downloads")));
console.log('QAQ', (electron.app.getPath("temp")));

// const createWindow = () => {
//     // Create the browser window.
//     const mainWindow = new BrowserWindow({
//         width: 800,
//         height: 600,
//     });

//     // and load the index.html of the app.
//     mainWindow.loadURL('https://www.baidu.com');

//     // Open the DevTools.
//     mainWindow.webContents.openDevTools();
// };

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// electron.app.whenReady().then(() => {
//     createWindow();

//     // On OS X it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     electron.app.on('activate', () => {
//         if (BrowserWindow.getAllWindows().length === 0) {
//             createWindow();
//         }
//     });
// });