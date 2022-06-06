document.getElementById("code8").value =
`$botListHide
$nomention
$reply
$allowUserMentions[]
$varExistError[staffchannel;Make sure to make a new variable with name "staffchannel" and value "$botID"]
$varExistError[staffrole1;Make sure to make a new variable with name "staffrole1" and value "$botID"]
$varExistError[staffrole2;Make sure to make a new variable with name "staffrole2" and value "$botID"]
$varExistError[staffperm1;Make sure to make a new variable with name "staffperm1" and value "$botID"]
$varExistError[staffperm2;Make sure to make a new variable with name "staffperm2" and value "$botID"]

$if[$checkContains[$message[1];finish]==true]
Successfully!
$description[You just successfully finished the staff statuses setup! 

Short summary of how it works:
Now, when the staff use tt!staff command, it will log into the <#$getServerVar[staffchannel]> channel.
The role <@&$getServerVar[staffrole1]> will be taken from the staff's profile.
The staff will require the <@&$getServerVar[staffperm1]> role. (as the staff permissions role)]
$color[88888] $addTimestamp
$else
Unsuccessfully! You must try the setup again.
$endif`