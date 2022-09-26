//Insert God Card Icons

//Insert role specific icons
$(".assassin").append("<button class=\"btn\" onClick=\"filterSelection('assassinFilter')\"><svg class='icon-assassin c'><rect><title>Assassin</title></rect></svg></button>");
$(".guardian").append("<button class=\"btn\" onClick=\"filterSelection('guardianFilter')\"><svg class='icon-guardian c'><rect><title>Guardian</title></rect></svg>");
$(".hunter").append("<button class=\"btn\" onClick=\"filterSelection('hunterFilter')\"><svg class='icon-hunter c'><rect><title>Hunter</title></rect></svg>");
$(".mage").append("<button class=\"btn\" onClick=\"filterSelection('mageFilter')\"><svg class='icon-mage c'><rect><title>Mage</title></rect></svg>");
$(".warrior").append("<button class=\"btn\" onClick=\"filterSelection('warriorFilter')\"><svg class='icon-warrior c'><rect><title>Warrior</title></rect></svg>");

//Insert pantheon specific icons
$(".arthurian").append("<button class=\"btn\" onClick=\"filterSelection('arthurianFilter')\"><svg class='icon-arthurian c'><rect><title>Arthurian</title></rect></svg>");
$(".babylonian").append("<button class=\"btn\" onClick=\"filterSelection('babylonianFilter')\"><svg class='icon-babylonian'><rect><title>Babylonian</title></rect></svg>");
$(".celtic").append("<button class=\"btn\" onClick=\"filterSelection('celticFilter')\"><svg class='icon-celtic c'><rect><title></title>Celtic</rect></svg>");
$(".chinese").append("<button class=\"btn\" onClick=\"filterSelection('chineseFilter')\"><svg class='icon-chinese c'><rect><title>Chinese</title></rect></svg>");
$(".egyptian").append("<button class=\"btn\" onClick=\"filterSelection('egyptianFilter')\"><svg class='icon-egyptian c'><rect><title>Egyptian</title></rect></svg>");
$(".great-old-ones").append("<button class=\"btn\" onClick=\"filterSelection('great-old-onesFilter')\"><svg class='icon-great-old-ones'><rect><title>Great Old Ones</title></rect></svg>");
$(".greek").append("<button class=\"btn\" onClick=\"filterSelection('greekFilter')\"><svg class='icon-greek c'><rect><title></title>Greek</rect></svg>");
$(".hindu").append("<button class=\"btn\" onClick=\"filterSelection('hinduFilter')\"><svg class='icon-hindu c'><rect><title>Hindu</title></rect></svg>");
$(".japanese").append("<button class=\"btn\" onClick=\"filterSelection('japaneseFilter')\"><svg class='icon-japanese c'><rect><title>Japanese</title></rect></svg>");
$(".maya").append("<button class=\"btn\" onClick=\"filterSelection('mayaFilter')\"><svg class='icon-maya c'><rect><title>Maya</title></rect></svg>");
$(".norse").append("<button class=\"btn\" onClick=\"filterSelection('norseFilter')\"><svg class='icon-norse c'><rect><title>Norse</title></rect></svg>");
$(".polynesian").append("<button class=\"btn\" onClick=\"filterSelection('polynesianFilter')\"><svg class='icon-polynesian c'><rect><title>Polynesian</title></rect></svg>");
$(".roman").append("<button class=\"btn\" onClick=\"filterSelection('romanFilter')\"><svg class='icon-roman c'><rect><title></title>Roman</rect></svg>");
$(".slavic").append("<button class=\"btn\" onClick=\"filterSelection('slavicFilter')\"><svg class='icon-slavic c'><rect><title>Slavic</title></rect></svg>");
$(".voodoo").append("<button class=\"btn\" onClick=\"filterSelection('voodooFilter')\"><svg class='icon-voodoo'><rect><title>Voodoo</title></rect></svg>");
$(".yoruba").append("<button class=\"btn\" onClick=\"filterSelection('yorubaFilter')\"><svg class='icon-yoruba'><rect><title>Yoruba</title></rect></svg>");

//Insert attack range specific icons
$(".melee").append("<button class=\"btn\" onClick=\"filterSelection('meleeFilter')\"><svg class='icon-melee'><rect><title>Melee</title></rect></svg>");
$(".ranged").append("<button class=\"btn\" onClick=\"filterSelection('rangedFilter')\"><svg class='icon-ranged'><rect><title>Ranged</title></rect></svg>");

//Insert attack type specific icons
$(".physical").append("<button class=\"btn\" onClick=\"filterSelection('physicalFilter')\"><svg class='icon-physical'><rect><title>Physical</title></rect></svg>");
$(".magical").append("<button class=\"btn\" onClick=\"filterSelection('magicalFilter')\"><svg class='icon-magical'><rect><title>Magical</title></rect></svg>");


//colourise clicked icons (in conjunction with css classes)
$(".btn").click(function(){
  $(".btn-group > .btn").not(this).children().removeClass("c");
  $(this).children().addClass("c");
});