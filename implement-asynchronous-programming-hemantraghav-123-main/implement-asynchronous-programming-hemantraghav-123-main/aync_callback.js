function login(callback) {
  setTimeout(() => {
    console.log("Hemant logged in");
    callback(null);
  }, 1000);
}

function getData(callback) {
  setTimeout(() => {
    console.log("Data retrieved");
    callback(null, "2300320130115");
  }, 1500);
}

function displayData(data, callback) {
  setTimeout(() => {
    console.log("Displaying Data:", data);
    callback(null);
  }, 800);
}

function conductTest(callback) {
  setTimeout(() => {
    console.log("Test conducted");
    callback(null);
  }, 2000);
}

function logout(callback) {
  setTimeout(() => {
    console.log("Hemant logged out");
    callback(null);
  }, 1000);
}

// main flow using callbacks (callback hell style)
function main() {
  login((err) => {
    if (err) return console.error(err);

    getData((err, data) => {
      if (err) return console.error(err);

      displayData(data, (err) => {
        if (err) return console.error(err);

        conductTest((err) => {
          if (err) return console.error(err);

          logout((err) => {
            if (err) return console.error(err);
            console.log("All tasks done!");
          });
        });
      });
    });
  });
}

main();
