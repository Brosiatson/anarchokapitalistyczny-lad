<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="Tu wpisz opis zawartości strony">
	<title>Dane</title>
	<link rel="stylesheet" href="style33.css">
</head>
<body>




<p>Odczytane pola:</p>

<table>

	<tr>
	
		<td>Imie:</td>
		
		<td>
<?php
	echo "$_POST[imie]";
?>
		</td>
		
	</tr>
	
	<tr>
	
		<td>Nazwisko:</td>
		
		<td>
<?php
	echo "$_POST[nazwisko]";
?>
		</td>
		
	</tr>
	
	<tr>
	
		<td>Wiek:</td>
		
		<td>
<?php
	echo "$_POST[wiek]";
?>
		</td>
		
	</tr>
			
</table>

<br><br><br>
<p>Ankieta:</p>

<?php
	echo "</br>Imie: ".$_POST['imie'];
	if (isset($_POST['chx1'])) echo "</br>Wybór: ".$_POST['chx1'];
	if (isset($_POST['chx2'])) echo "</br>Wybór: ".$_POST['chx2'];
	if (isset($_POST['chx3'])) echo "</br>Wybór: ".$_POST['chx3'];
	
	if (isset($_POST['r1'])) echo "</br>Odpowiedź: ".$_POST['r1'];
	if (isset($_POST['r2'])) echo "</br>Odpowiedź: ".$_POST['r2'];
	if (isset($_POST['r3'])) echo "</br>Odpowiedź: ".$_POST['r3'];
?>
	

</body>
</html>