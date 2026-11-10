const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "DevCorner",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false, 
    },
  });

  // Setting the live application URL to load in the Electron window
  mainWindow.loadURL('https://devcorner.onrender.com/');

  // Optional: Handle external links (like target="_blank") inside the same app window
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    mainWindow.loadURL(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => (mainWindow = null));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
