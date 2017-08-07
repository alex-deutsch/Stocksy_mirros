$(document).ready(function () {
	reloadStocks();
});

function reloadStocks() {

	var url = "https://query.yahooapis.com/v1/public/yql";
	var env = "store://datatables.org/alltableswithkeys";
	var stocks = "<?php echo getConfigValue('stocksy_stocks'); ?>";
	var query = "select * from yahoo.finance.quotes where symbol='" + stocks + "'";
		url = url + "?q=" + query + "&format=json" + "&env=" + env;

		$.get(url).done(function(data){
				$("#stocks_station_table").empty();
					i = 0;

					var json = data.query.results.quote;
					if(!(json instanceof Array)){
						json = [json];
					}

						$.each(json, function() {
						if (i < 7){
							$("#stocks_station_table").append("<tr></tr>");

							var stockname = this.symbol;
							var stockCurrentPrice = this.LastTradePriceOnly;
							var changeInPercent = this.ChangeinPercent;
							var currency = this.Currency;

							var priceString = stockCurrentPrice ;
							if (currency != null) {
								priceString = priceString + " " + currency;
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
