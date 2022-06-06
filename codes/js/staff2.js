document.getElementById("code2").value = 
`$embedSuppressErrors[Error;;88888;;;]
$varExistError[staffchannel;Make sure to make a new variable with name "staffchannel" and value "$botID"]
$varExistError[staffrole1;Make sure to make a new variable with name "staffrole1" and value "$botID"]
$varExistError[staffrole2;Make sure to make a new variable with name "staffrole2" and value "$botID"]
$varExistError[staffperm1;Make sure to make a new variable with name "staffperm1" and value "$botID"]
$varExistError[staffperm2;Make sure to make a new variable with name "staffperm2" and value "$botID"]

$nomention
$onlyIf[$guildID!=;This command only works on servers.]
$onlyAdmin[]
Successfully started the staff mode setup.
$color[88888] $description[Enter the **staff statuses** channel below.

The bot will log staff statuses into that channel.]
$footer[Or type 'cancel' to exit] $addTimestamp
$awaitFunc[staffchannel;$authorID]`