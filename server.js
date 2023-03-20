const express = require('express');
const path = require('path');
const app = express();

// Serve static assets
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route for client-side routing
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5173;
app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`);
});
