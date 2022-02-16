document.getElementById("code1").value = 
            
`$c[VARIABLES NEEDED:
-------------------------------
isPaused
value=false
volume
value=100
-------------------------------
]

$embedSuppressErrors[Error;;#1ED761;;;]
$varExistError[isPaused;Make sure to make a new variable with name "isPaused" and value "false" ]
$varExistError[volume;Make sure to make a new variable with name "isPaused" and value "100"]

$c[ Credits of the code go to Berk#3506 and vidk#2010]
$c[ API by Almighty Neko#0121 ]

$nomention
$ephemeral

$var[host;https://bdfd-music.YOUR-REPLIT-USERNAME.repl.co] $c[<=== REPLACE THE HOST WITH YOUR OWN URL] 
$c[P.S. this is a url you entered in the uptimerobot.com dashboard, such as https://bdfd-music.your-replit-username.repl.co]

$httpGet[$var[host]/voice_channel_id/$guildID/$authorID]
$var[authorvc;$httpResult[voice_id]]

$onlyIf[$guildID!=;This command only works on servers.]
$onlyBotPerms[connect;I need the CONNECT permissions to work correctly!]
$onlyIf[$var[authorvc]!=;Make sure to join a voice channel as first.]
$onlyIf[$message!=;Make sure to provide valid track name]

$httpPost[$var[host]/join_voice_channel;{"id":"$var[authorvc]"}]
$httpPost[$var[host]/search_and_play/$guildID?q=$replaceText[$message; ;+;-1];{}]

$color[#1ED761]
$author[Playing!]
$authorIcon[https://cdn.discordapp.com/attachments/889423777123938315/942487760797839370/2213-tune.png]
$description[Successfully added the requested song at <#$var[authorvc]>! (<@$authorID>)]
$if[$getServerVar[isPaused]==false]
$addButton[no;skip;Skip;primary;no;⏭;]
$addButton[no;pause;Pause;primary;no;⏸;]
$addButton[no;resume;Resume;primary;yes;▶;]
$addButton[yes;turnup;Turn Up;primary;no;🔊;]
$addButton[no;turndown;Turn Down;primary;no;🔉;]
$addButton[yes;songinfo;Song Info;success;no;🎶;]
$addButton[no;endmusic;End Interaction;secondary;no;;]
$else
$addButton[no;skip;Skip;primary;yes;⏭;]
$addButton[no;pause;Pause;primary;yes;⏸;]
$addButton[no;resume;Resume;primary;no;▶;]
$addButton[yes;turnup;Turn Up;primary;no;🔊;]
$addButton[no;turndown;Turn Down;primary;no;🔉;]
$addButton[yes;songinfo;Song Info;success;no;🎶;]
$addButton[no;endmusic;End Interaction;secondary;no;;]
$endif`
;
