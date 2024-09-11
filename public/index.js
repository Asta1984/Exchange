function fetchStockData() {
    var tickerSymbol = document.getElementById("tickerInput").value;
    var startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    var endDate = new Date();

    // Call your backend API instead of directly calling Polygon API
    var url = `/api/stock-data?ticker=${tickerSymbol}&start=${startDate.toISOString().slice(0, 10)}&end=${endDate.toISOString().slice(0, 10)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          var stockData = data.results;
          var stockDataHtml = "<h2>Stock Data for " + tickerSymbol + ":</h2><table><tr><th>Date</th><th>Open</th><th>High</th><th>Low</th><th>Close</th><th>Volume</th></tr>";
          
          stockData.forEach(function(day) {
            stockDataHtml += "<tr><td>" + new Date(day.t).toLocaleDateString() + "</td><td>" + day.o + "</td><td>" + day.h + "</td><td>" + day.l + "</td><td>" + day.c + "</td><td>" + day.v + "</td></tr>";
          });
          
          stockDataHtml += "</table>";
          document.getElementById("stockData").innerHTML = stockDataHtml;
        } else {
          document.getElementById("stockData").innerHTML = "<h2>No data found for " + tickerSymbol + ".</h2>";
        }
      })
      .catch(error => console.error(error));
}