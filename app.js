// Babel ES6
require("babel/register")({
    stage: 1,
    only: /legofy|build/
});

// Server
require("./build/server")
