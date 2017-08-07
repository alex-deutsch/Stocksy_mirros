<!-- <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq4vAa92p2X9LmLlU3Z4vvjioVNf21frs&signed_in=true&libraries=places&callback=initAutocomplete" async defer></script> -->

<?php
  $stocksy_stocks = getConfigValue('stocksy_stocks');
?>

<h6><?php echo _('stocksy_stocks_config_header'); ?></h6>
<div><?php echo _('stocksy_stocks_config_help_description'); ?></div>
<input type="text" id="stocksy_stocks" placeholder="<?php echo _('stocksy_stocks'); ?>" value="<?php echo $stocksy_stocks; ?>"/>

<div id="stocksy_error" style="color:red"></div>
<div id="stocksy_ok" style="color:green"></div><br />

<a href="/modules/stocksy/assets/reset.php"><?php echo _("stocksy_reset_config"); ?></a><br /><br />

<div class="block__add" id="stocksy__edit">
	<button class="stocksy__edit--button" href="#">
		<span><?php echo _("stocksy_save"); ?></span>
	</button>
</div>
