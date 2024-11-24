const mineflayer = require('mineflayer');

// Bot options
const botOptions = {
  host: 'surrendersmp20.aternos.me',  // Server IP address
  port: 45386,                         // Server port
  username: 'botok',                   // Bot's username
  version: '1.21.1'               
};

// Create the bot instance
const bot = mineflayer.createBot(botOptions);

// Bot event listeners
bot.on('spawn', () => {
  console.log(`Bot has joined the server as ${bot.username}`);
  bot.chat('Hello everyone! I am a bot.');

  setInterval(() => moveBot(), 300000);
});

// Log chat messages
bot.on('chat', (username, message) => {
  if (username === bot.username) return; // Ignore bot's own messages
  console.log(`[${username}] ${message}`);

  // Respond to a specific message
  if (message.toLowerCase() === 'hello bot') {
    bot.chat(`Hello, ${username}!`);
  }
});

// Handle disconnection and errors
bot.on('end', () => {
  console.log('Disconnected from server. Reconnecting...');
  setTimeout(() => mineflayer.createBot(botOptions), 5000);
});

bot.on('error', (err) => console.error('Error:', err));
bot.on('kicked', (reason) => console.error('Kicked from server:', reason));
const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Bot is running');
});


// Start the web server on a specific port

app.listen(3000,()=>{
  console.log("http://localhost:3000")
})
