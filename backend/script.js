$('#stocksy__edit').click(function() {

	stocksy_stocks = $("#stocksy_stocks").val();

	$.post('setConfigValueAjax.php', {'key': 'stocksy_stocks', 'value': stocksy_stocks});
	$.post('setConfigValueAjax.php', {'key': 'stocksy_ok', 'value': true});

  $.post('setConfigValueAjax.php', {'key': 'reload', 'value': 1});

  $('#ok').show(30, function() {
    $(this).hide('slow');
  });

  $("#stocksy_ok").text("Daten erfolgreich gespeichert");
  $("#stocksy_error").text("");
});
