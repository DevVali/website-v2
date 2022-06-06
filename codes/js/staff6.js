document.getElementById("code6").value = 
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
$if[$roleExists[$findRole[$message]]==true]
$setServerVar[staffperm1;$findRole[$message]]
Successfully set the role **$roleName[$findRole[$message]]** ($findRole[$message]) as the staff permissions role.
$description[Enter the **non-hoisted staff permissions role** below. (you can use mention, ID or name)

This is the permissions role, with all permissions your server staff needs.
This role will be required to use the tt!staff command.

This second option is **optional** and it's only used when you have different staff roles, such as moderator and helper. Type skip below to skip this setting.]
$color[88888]
$footer[Or type 'cancel' to exit] $addTimestamp
$awaitFunc[staffperm2;$authorID]
$else
$setServerVar[staffchannel;$botID]
$setServerVar[staffrole1;$botID]
$setServerVar[staffrole2;$botID]
$setServerVar[staffperm1;$botID]
$setServerVar[staffperm2;$botID]
Oh no! Invalid role! Please, try again.
$endif
$else
$setServerVar[staffchannel;$botID]
$setServerVar[staffrole1;$botID]
$setServerVar[staffrole2;$botID]
$setServerVar[staffperm1;$botID]
$setServerVar[staffperm2;$botID]
The setup was canceled successfully.
$endif`