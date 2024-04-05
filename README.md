If you try to serve that file using fs.readFile, you simply can’t, by default (you can change the limits). But with fs.createReadStream, 
there is no problem at all streaming 2 GB of data to the requester, and best of all, the process memory usage will roughly be the same.

<img width="1450" alt="Screenshot 2024-04-05 at 1 41 54 PM" src="https://github.com/ganeshks26/Streaming-in-Node-Js/assets/91612914/8ac48d20-7b0a-4e39-a586-70911128b489">
