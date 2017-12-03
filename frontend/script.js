$(document).ready(function () {
	reloadStocks();
});

function reloadStocks() {

	var url = "http://f1re.de/stocksy/getQuote.php";
	var apikey = "";
	var symbols = "<?php echo getConfigValue('stocksy_stocks'); ?>";
	var fields 	= "fiftyTwoWkHigh,fiftyTwoWkHighDate,fiftyTwoWkLow,fiftyTwoWkLowDate";
    var mode  	= "I";
	var jerq 	= "false";
	var queryURLQuotes = url + "?apikey=" + apikey +"&symbols=" + symbols + "&fields=" + fields + "&mode=" + mode + "&jerq=" + jerq;
	
		$.get(queryURLQuotes).done(function(data){
			$("#stocks_station_table").empty();
					var i = 0;
					var json = data.results;
						$.each(json, function() {
						if (i < 7){
							$("#stocks_station_table").append("<tr></tr>");

							var stockname = this.name;
							var stockCurrentPrice = this.lastPrice;
							var changeInPercent = this.percentChange;
							var currency = this.unitCode;

							var priceString = stockCurrentPrice;
							if (currency != null && currency == 2) {
								priceString = priceString + " $";
							}

							$("#stocks_station_table tr:last").append("<td>" + stockname + "</td>");
							$("#stocks_station_table tr:last").append("<td>" + priceString + "</td>");
							$("#stocks_station_table tr:last").append("<td>" + changeInPercent + "</td>");

						}
						i++;
					});
		});

		// reload every 10 minutes
		window.setTimeout(function() {
			reloadStocks();
		}, 6000000);
}
