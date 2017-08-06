<?php

	include('../../../config/glancrConfig.php');

	setConfigValue("stocksy_ok", "false");
	setConfigValue("stocksy_stocks", "");

	header("location: /config/");

?>
