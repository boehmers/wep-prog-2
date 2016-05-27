<?php
	return readfile($_GET["filename"]) or die ("CANT READ FILE");
?>