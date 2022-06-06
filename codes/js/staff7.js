document.getElementById("code7").value = 
`$botListHide
$nomention
$reply
$allowUserMentions[]
$varExistError[staffchannel;Make sure to make a new variable with name "staffchannel" and value "$botID"]
$varExistError[staffrole1;Make sure to make a new variable with name "staffrole1" and value "$botID"]
$varExistError[staffrole2;Make sure to make a new variable with name "staffrole2" and value "$botID"]
$varExistError[staffperm1;Make sure to make a new variable with name "staffperm1" and value "$botID"]
$varExistError[staffperm2;Make sure to make a new variable with name "staffperm2" and value "$botID"]

$if[$checkContains[$message[1];cancel]==false]
$if[$checkContains[$message[1];skip]==false]
$if[$roleExists[$findRole[$message]]==true]
$setServerVar[staffperm2;$findRole[$message]]
Successfully set the role **$roleName[$findRole[$message]]** ($findRole[$message]) as the staff permissions role Nº2.
$description[You're almost done! To finish the setup, enter finish below]
$color[88888]
$footer[Or type 'cancel' to exit] $addTimestamp
$awaitFunc[staffconfirm;$authorID]
$else
$setServerVar[staffchannel;$botID]
$setServerVar[staffrole1;$botID]
$setServerVar[staffrole2;$botID]
$setServerVar[staffperm1;$botID]
$setServerVar[staffperm2;$botID]
Oh no! Invalid role! Please, try again.
$endif
$else
Successfully skipped to the next option.
$description[You're almost done! To finish the setup, enter finish below]
$color[88888]
$footer[Or type 'cancel' to exit] $addTimestamp
$awaitFunc[staffconfirm;$authorID]
$endif
$else
$setServerVar[staffchannel;$botID]
$setServerVar[staffrole1;$botID]
$setServerVar[staffrole2;$botID]
$setServerVar[staffperm1;$botID]
$setServerVar[staffperm2;$botID]
The setup was canceled successfully.
$endif`