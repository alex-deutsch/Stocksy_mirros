$(document).ready(function () {
	reloadStocks();
});

function reloadStocks() {

	var url = "https://query.yahooapis.com/v1/public/yql";
	var env = "store://datatables.org/alltableswithkeys";
	var stocks = "<?php echo getConfigValue('stocksy_stocks'); ?>";
	var query = "select * from yahoo.finance.quotes where symbol='" + stocks + "'";
	// var name_mode = "<?php echo getConfigValue('tanken_name_mode'); ?>";
		url = url + "?q=" + query + "&format=json" + "&env=" + env;

		$.get(url).done(function(data){
				$("#stocks_station_table").empty();

				// if (data.status == "ok"){
					i = 0;
					$.each(data.query.results.quote, function() {
						if (i < 7){
							$("#stocks_station_table").append("<tr></tr>");

							var stockname = this.symbol;
							var stockCurrentPrice = this.LastTradePriceOnly;
							var changeInPercent = this.ChangeinPercent;

							$("#stocks_station_table tr:last").append("<td>" + stockname + "</td>");
							$("#stocks_station_table tr:last").append("<td>" + stockCurrentPrice + " € </td>");
							$("#stocks_station_table tr:last").append("<td>" + changeInPercent + " % </td>");

						}
						i++;
					});
				// }
		});

		// alle 30 Minuten aktualiseren
		window.setTimeout(function() {
			reloadStocks();
		}, 1800000);
}
