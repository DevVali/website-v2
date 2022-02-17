document.getElementById("code2").value = 
            
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

$httpGet[$var[host]/track_info/$guildID]
$if[$httpResult[title]!=]

$color[#1ED761]
$author[Playing!]
$authorIcon[https://cdn.discordapp.com/attachments/889423777123938315/942487760797839370/2213-tune.png]
$description[
$httpResult[title]
]
$if[$getServerVar[isPaused]==false]
$addButton[no;skip;Skip;primary;no;⏭;]
$addButton[no;pause;Pause;primary;no;⏸;]
$addButton[no;resume;Resume;primary;yes;▶;]
$addButton[yes;turnup;Turn Up;primary;no;🔊;]
$addButton[no;turndown;Turn Down;primary;no;🔉;]
$addButton[yes;songinfo;Song Info;success;yes;🎶;]
$addButton[no;endmusic;End Interaction;secondary;no;;]
$else
$addButton[no;skip;Skip;primary;yes;⏭;]
$addButton[no;pause;Pause;primary;yes;⏸;]
$addButton[no;resume;Resume;primary;no;▶;]
$addButton[yes;turnup;Turn Up;primary;no;🔊;]
$addButton[no;turndown;Turn Down;primary;no;🔉;]
$addButton[yes;songinfo;Song Info;success;yes;🎶;]
$addButton[no;endmusic;End Interaction;secondary;no;;]
$endif
$else

$color[#1ED761]
$title[Error]
$description[I'm not playing anything rn.]
$endif`
;
