$(document).ready(function () {
	reloadStocks();
});

function reloadStocks() {

	var url = "https://api.iextrading.com/1.0/stock/market/batch";
	var symbols = "<?php echo getConfigValue('stocksy_stocks'); ?>";
	var types 	= "quote,news";
	var last 	= "5";
	var queryURLQuotes = url + "?symbols=" + symbols + "&types=" + types + "&last=" + last;
	
	$.get(queryURLQuotes).done(function(data){
		$("#stocks_station_table").empty();
				var i = 0;
				for(key in data){
					if (i < 7){
						$("#stocks_station_table").append("<tr></tr>");
						var quote = data[key].quote;
						var stockname = quote.companyName;
						var changeInPercent = quote.changePercent*100 + "%";
						var realTime = quote.iexRealtimePrice;
						var priceString;
						if (realTime != null) {
							priceString = realTime;
						}
						else {
							priceString = quote.latestPrice;
						}
						priceString = priceString + " $";

						$("#stocks_station_table tr:last").append("<td>" + stockname + "</td>");
						$("#stocks_station_table tr:last").append("<td>" + priceString + "</td>");
						$("#stocks_station_table tr:last").append("<td>" + changeInPercent + "</td>");

					}
					i++;
				}
	});

		// reload every 5 minutes
		window.setTimeout(function() {
			reloadStocks();
		}, 300000);
}
