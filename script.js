// link op home page tap to play
$('#BgLink, #logoHome, .tapToPlay').click(function () {
  window.location.href = 'monster-select.html';
});

// homepage popup
$('.scaleBrowser').click(function () {
   $(this).hide();
});

// link om naar home te gaan als je battle hebt verloren
$('#a1381dd0-3944-4f6a-b43e-5f0a6b63d7ca').click(function () {
  window.location.href = 'index.html';
});

// link om naar home te gaan als je battle hebt gewonnen
$('#4789921c-89f7-4d1b-943a-1231cf3e92bb').click(function () {
  window.location.href = 'index.html';
});


$(function () {
  $("#infoKnop").click(function () {
    $("#spelregels, #BgSpelregels").removeClass("DisplaySpelregels");
  });

  $("#d574f292-71b5-4b92-bc49-1325e4b30fed").click(function () {
    $("#spelregels, #BgSpelregels").addClass("DisplaySpelregels");
  });
});


//$('#vuurFilter').click(function () {
//     $('#luchtCard, #waterCard, #steenCard').addClass('filterDisplayNone');
//     $('#vuurCard').removeClass('filterDisplayNone');
//});

// vuur
$.fn.toggleClickVuur = function (funcArray) {
  return this.click(function () {
    var elem = $(this);
    var index = elem.data('index') || 0;
    console.log(index);
    funcArray[index]();
    elem.data('index', (index + 1) % funcArray.length);
  });
};


$('#vuurFilter').toggleClickVuur([
  function () {
    $('#luchtCard, #waterCard, #steenCard').addClass("filterDisplayNone");
    $('#vuurCard').removeClass('filterDisplayNone');
  },
  function () {
    $('#luchtCard, #waterCard, #steenCard').removeClass("filterDisplayNone");
    $('#vuurCard').removeClass('filterDisplayNone');
  }
]);


// water
$.fn.toggleClickWater = function (funcArray) {
  return this.click(function () {
    var elem = $(this);
    var index = elem.data('index') || 0;

    funcArray[index]();
    elem.data('index', (index + 1) % funcArray.length);
  });
};


$('#waterFilter').toggleClickWater([
  function () {
    $('#luchtCard, #vuurCard, #steenCard').addClass("filterDisplayNone");
    $('#waterCard').removeClass('filterDisplayNone');
  },
  function () {
    $('#luchtCard, #vuurCard, #steenCard').removeClass("filterDisplayNone");
    $('#waterCard').removeClass('filterDisplayNone');
  }
]);


// steen
$.fn.toggleClickSteen = function (funcArray) {
  return this.click(function () {
    var elem = $(this);
    var index = elem.data('index') || 0;

    funcArray[index]();
    elem.data('index', (index + 1) % funcArray.length);
  });
};


$('#steenFilter').toggleClickSteen([
  function () {
    $('#luchtCard, #waterCard, #vuurCard').addClass("filterDisplayNone");
    $('#steenCard').removeClass('filterDisplayNone');
  },
  function () {
    $('#luchtCard, #waterCard, #vuurCard').removeClass("filterDisplayNone");
    $('#steenCard').removeClass('filterDisplayNone');
  }
]);



// lucht  
$.fn.toggleClickLucht = function (funcArray) {
  return this.click(function () {
    var elem = $(this);
    var index = elem.data('index') || 0;

    funcArray[index]();
    elem.data('index', (index + 1) % funcArray.length);
  });
};


$('#luchtFilter').toggleClickLucht([
  function () {
    $('#steenCard, #waterCard, #vuurCard').addClass("filterDisplayNone");
    $('#luchtCard').removeClass('filterDisplayNone');
  },
  function () {
    $('#steenCard, #waterCard, #vuurCard').removeClass("filterDisplayNone");
    $('#luchtCard').removeClass('filterDisplayNone');

    //    if (('#steenCard, #vuurCard, #waterCard').hasClass("filterDisplayNone")){
    //        
    //      $('#luchtCard, #steenCard, #waterCard, #vuurCard').removeClass("filterDisplayNone");
    //    } else {
    //        
    //    }
  }

]);

// 5e2fe851-64be-465d-9c76-9a78991bc1e9 = lucht e9c2b083-bf27-48d6-af8f-23eba77642f4 = water 9a4f8639-08ef-4c83-adff-b0ecf67461ac = steen 041c07ce-fb8b-4809-bf7d-270d1106eaf1 = vuur

// vuur
$('#041c07ce-fb8b-4809-bf7d-270d1106eaf1').click(function () {
  $('#steenMonsterSelectBG, #waterMonsterSelectBG, #luchtMonsterSelectBG, .MonsterSpecsSteen, .MonsterSpecsWater, .MonsterSpecsLucht').addClass("MonsterSelectDisplayNone");

  $('#vuurMonsterSelectBG, .MonsterSpecsVuur').removeClass("MonsterSelectDisplayNone");

  $('.vuurMonsterSelect').addClass("activeMonsterIconen");
  $('.waterMonsterSelect, .luchtMonsterSelect, .steenMonsterSelect').removeClass("activeMonsterIconen");

  //    var _href = $("a#selectMonsterKnopLink").attr("href");
  //    $("a#selectMonsterKnopLink").attr("href", _href + 'monster-specs-water.html');

  $("a#monsterInfoKnopLink").attr('href', 'monster-info-vuur.html');

  $("a#selectMonsterKnopLink").attr('href', 'battle-vuur.html');
  //    var _href = $("a#infoMonstersLink").attr("href");
  //    $("a#infoMonstersLink").attr("href", _href + '#nwkel');
});

// aarde
$('#9a4f8639-08ef-4c83-adff-b0ecf67461ac').click(function () {
  $('#vuurMonsterSelectBG, #waterMonsterSelectBG, #luchtMonsterSelectBG, .MonsterSpecsVuur, .MonsterSpecsWater, .MonsterSpecsLucht').addClass("MonsterSelectDisplayNone");

  $('#steenMonsterSelectBG, .MonsterSpecsSteen').removeClass("MonsterSelectDisplayNone");

  $('.steenMonsterSelect').addClass("activeMonsterIconen");
  $('.waterMonsterSelect, .luchtMonsterSelect, .vuurMonsterSelect').removeClass("activeMonsterIconen");

  $("a#monsterInfoKnopLink").attr('href', 'monster-info-steen.html');

  $("a#selectMonsterKnopLink").attr('href', 'battle-steen.html');
});



// water
$('#e9c2b083-bf27-48d6-af8f-23eba77642f4').click(function () {
  $('#vuurMonsterSelectBG, #steenMonsterSelectBG, #luchtMonsterSelectBG, .MonsterSpecsVuur, .MonsterSpecsSteen, .MonsterSpecsLucht').addClass("MonsterSelectDisplayNone");

  $('#waterMonsterSelectBG, .MonsterSpecsWater').removeClass("MonsterSelectDisplayNone");

  $('.waterMonsterSelect').addClass("activeMonsterIconen");

  $('.luchtMonsterSelect, .steenMonsterSelect, .vuurMonsterSelect').removeClass("activeMonsterIconen");

  $("a#monsterInfoKnopLink").attr('href', 'monster-info-water.html');

  $("a#selectMonsterKnopLink").attr('href', 'battle-water.html');
});




// lucht
$('#5e2fe851-64be-465d-9c76-9a78991bc1e9').click(function () {
  $('#vuurMonsterSelectBG, #steenMonsterSelectBG, #waterMonsterSelectBG, .MonsterSpecsVuur, .MonsterSpecsSteen, .MonsterSpecsWater').addClass("MonsterSelectDisplayNone");

  $('#luchtMonsterSelectBG, .MonsterSpecsLucht').removeClass("MonsterSelectDisplayNone");

  $('.luchtMonsterSelect').addClass("activeMonsterIconen");
  $('.waterMonsterSelect, .steenMonsterSelect, .vuurMonsterSelect').removeClass("activeMonsterIconen");

  $("#monsterInfoKnopLink").attr('href', 'monster-info-lucht.html');

  $("a#selectMonsterKnopLink").attr('href', 'battle-lucht.html');

});


//$(".952c8e0d-87f4-41a9-aa2a-3857044b8bfb").click(function () {
//  $('.tegenstanderHpBarScaling').addClass("scale");
//});


 
// adding a class and overwrite it after 2s
//$('.element1').click(function() {
//		// add class foo 
//		$('body').addClass('foo1');
//    
//    // overwrite class foo1 with foo2 after 2s
//    $('body').delay(2000).queue(function(){
//        $('body').addClass('foo2').clearQueue();
//        $('body').removeClass('foo1').clearQueue();
//    });
//});



// Code voor vraag 1. Onderdelen: Antwoorden aanklikken, Zien 
// welke antwoorden GOED of FOUT zijn doormiddel van een timer,
// Pop up laten verschijnen en verdwijnen van vraagKader 
//waar de vraag en drie antwoorden staan.

// vraag 1 antwoorden variabelen
var vraagBoven1 = $('#a59b749d-8c40-4771-95fb-a1c70a4c5aea');
var vraagMiddel1 = $('#4bb3b8dd-c2d8-423e-8073-7393b1604de7');
var vraagOnder1 = $('#2b4f9d3f-6364-4d5f-9080-819f78643b79');

// #32d722c0-eda5-4c3c-98ef-54bc8f20978e text = de tijd die moet aflopen in de html
var timer = $('#32d722c0-eda5-4c3c-98ef-54bc8f20978e text');

// click function en if statement om er voor te zorgen 
// dat je NIET twee antwoorden kan kiezen

// vraag 1 Boven
$(vraagBoven1).click(function() {
  $(this).addClass('vraagClicked vraagClickedScale');
    // eerste twee vragen kunnen niet worden aangeklikt door class "noClick"
    $(vraagMiddel1).addClass("noClick");
    $(vraagOnder1).addClass("noClick");
    // vraagBoven1 is FOUT. "vraagIsFout" = styling als het antwoord fout is
    $(vraagBoven1).addClass("vraagIsFout");
});

// vraag 1 Middel
$(vraagMiddel1).click(function() {
  $(this).addClass('vraagClicked vraagClickedScale');
    // eerste twee vragen kunnen niet worden aangeklikt door class "noClick"
    $(vraagOnder1).addClass("noClick");
    $(vraagBoven1).addClass("noClick");
    // vraagMiddel1 is GOED. "vraagIsGoed" = styling als het antwoord goed is
    $(vraagMiddel1).addClass("vraagIsGoed");
});

// vraag 1 Onder
$(vraagOnder1).click(function() {
  $(this).addClass('vraagClicked vraagClickedScale');
    // eerste twee vragen kunnen niet worden aangeklikt door class "noClick"
    $(vraagBoven1).addClass("noClick");
    $(vraagMiddel1).addClass("noClick");
    // vraagOnder1 is FOUT. "vraagIsFout" = styling als het antwoord fout is
    $(vraagOnder1).addClass("vraagIsFout");
});

// na 2 sec laat het kader met de vraag en antwoorden te voorschijn komen
// door de class "gone" weg te halen ("gone" heeft een "display none" in de css)
$("#vraagEnAntwoordenKader").delay(2000).queue(function () {
  $("#vraagEnAntwoordenKader").removeClass("gone").clearQueue();
  $("#blackOverlayBattle").removeClass("gone").clearQueue();
});

// Laat juist en fout antwoord zien bij vraag 1
var secForShowAnwser = 6
var timerVraag1 = setInterval(function() { 
   $(timer).text(secForShowAnwser--);
   if (secForShowAnwser == -1) {
     
      // remove active state, zodat de vragen weer gestyled kunnen 
      // worden en mogelijke verwarring in de css te vermijden
      $(vraagBoven1, vraagMiddel1, vraagOnder1).removeClass("vraagClicked");
     
      // geef de styling voor foute antwoorden
      $(".lightBgBovenste, .lightBgOnderste").addClass("vraagFoutBg");
      $(".borderBottomBovenste, .borderBottomOnderste").addClass("vraagFoutBorder");
     
      // geef de styling voor het goede antwoord
      $(".lightBgMiddelste").addClass("vraagGoedBg");
      $(".borderBottomMiddelste").addClass("vraagGoedBorder");
     
      // geef de class noClick op alle antwoorden, zodat het 
      //niet opnieuw geklikt kan woorden
      $(vraagBoven1, vraagMiddel1, vraagOnder1).addClass("noClick");
     
      clearInterval(timerVraag1);
   } 
}, 1000);

// code voor vraag 1, EINDE.

//$(vraagBoven1, vraagMiddel1, vraagOnder1).click(function() {
//  $(this).addClass('vraagClicked vraagClickedScale');
//  
//  // bovenste vraag
//  // bovenste vraag is FOUT
//  if ($(vraagBoven1).is('.vraagClickedScale, .noClick, .vraagFoutBg')){
//    // eerste twee vragen kunnen niet worden aangeklikt door class "noClick"
//    $(vraagMiddel1).addClass("noClick");
//    $(vraagOnder1).addClass("noClick");
//    // styling als het antwoord fout is
//    $(vraagBoven1).addClass("vraagIsFout");
//    
//  // midelste vraag
//  // midelste vraag is GOED
//  } else if ($(vraagMiddel1).is('.vraagClickedScale, .noClick, .vraagFoutBg')){
//    // eerste twee vragen kunnen niet worden aangeklikt door class "noClick"
//    $(vraagBoven1).addClass("noClick");
//    $(vraagOnder1).addClass("noClick");
//    // styling als het antwoord goed is
//    $(vraagMiddel1).addClass("vraagIsGoed");
//  } 
//  
//  // onderste vraag
//  // onderste vraag is FOUT
//  else if ($(vraagOnder1).is('.vraagClickedScale, .noClick, .vraagFoutBg')){
//    // eerste twee vragen kunnen niet worden aangeklikt door class "noClick"
//    $(vraagBoven1).addClass("noClick");
//    $(vraagMiddel1).addClass("noClick");
//    // styling als het antwoord fout is
//    $(vraagOnder1).addClass("vraagIsFout");
//  } 
//});

// vraag 2 anrwoord opties
// bfb157c6-017b-4e70-9e03-1a4e12123621 = vraag bovenste group
// 54181c4c-35d1-491b-82d9-acde23c8051c = vraag mindelste group
// 22ec6e1e-f842-454f-bfac-19cf3f73f0bf = vraag onderste group

//Vraag 2
//$('#bfb157c6-017b-4e70-9e03-1a4e12123621, #54181c4c-35d1-491b-82d9-acde23c8051c, #22ec6e1e-f842-454f-bfac-19cf3f73f0bf').click(function() {
//  $(this).addClass('vraagClicked vraagClickedScale');
//  
//  // bovenste vraag
//  if ($("#bfb157c6-017b-4e70-9e03-1a4e12123621").is('.vraagClickedScale, .noClick')){
//    // vraag 1
//    $("#54181c4c-35d1-491b-82d9-acde23c8051c").addClass("noClick");
//    $("#22ec6e1e-f842-454f-bfac-19cf3f73f0bf").addClass("noClick");
//    $("#bfb157c6-017b-4e70-9e03-1a4e12123621").addClass("vraagIsGoed");
//    // midelste vraag
//  } else if ($("#54181c4c-35d1-491b-82d9-acde23c8051c").is('.vraagClickedScale, .noClick')){
//    $("#bfb157c6-017b-4e70-9e03-1a4e12123621").addClass("noClick");
//    $("#22ec6e1e-f842-454f-bfac-19cf3f73f0bf").addClass("noClick");
//    $(this).addClass("vraagIsFout");
//  } 
//    // onderste vraag
//  else {
//
//  }
//});





// NOTE: tijd blijft doorlopen zelfs als de svg ontzichtbaar is
// vraag 1
var secToHide = 8
var timer2 = setInterval(function () {
  (secToHide--);
  if (secToHide == -1) {
    $('#vraagEnAntwoordenKader, #blackOverlayBattle').addClass('gone');
    clearInterval(timer2);
    if ($('#4bb3b8dd-c2d8-423e-8073-7393b1604de7').is('.vraagIsGoed')) {
      $('#tegenstanderMonster').delay(1000).queue(function () {
        // addclass levensErafVraag1
        console.log('het werkt if');
        $('#ba0ff256-cb44-4853-9fc3-e15da4c9d531').addClass("eigen-monster-animatie");
        $('#d7dd1930-b52f-49cb-930e-fe422db525fa').addClass("eigen-monster-animatie");
        $('#8a56031a-7e0f-4f78-9160-5927256de7b7').addClass("eigen-monster-animatie");
        $('#d9fb007e-57dd-4bbc-8ac4-68c111cf5c1d').addClass("eigen-monster-animatie");
        $('.tegenstanderHpBarScaling').addClass("levensErafVraag1");

        // check of .tegenstanderHpBarScaling, levensErafVraag1 heeft als die het heeft laat tegenstander monster verdwijnen
        if ($(".tegenstanderHpBarScaling").is(".levensErafVraag1")) {
          // delay on animatie
          $("#d1be1ff5-eebc-4501-a9a2-4b2cab7835f2").delay(3700).queue(function () {
            // add class gone
            $("#d1be1ff5-eebc-4501-a9a2-4b2cab7835f2").addClass("goneAnimation").clearQueue();
          });
          $("#gewonnenKader").delay(5000).queue(function () {
            $("#gewonnenKader").removeClass("gone").clearQueue();
            $("#blackOverlayBattle").removeClass("gone").clearQueue();
          });
        }
      });
    } else if ($("#a59b749d-8c40-4771-95fb-a1c70a4c5aea").is(".vraagIsFout") || $("#2b4f9d3f-6364-4d5f-9080-819f78643b79").is(".vraagIsFout")) {
      // top (wrong anwser)
      $('#monsterSteenBattle').delay(1000).queue(function () {
        // addclass levensErafVraag1
        console.log('het werkt else if');
        $('#f39ad5bb-6f9a-475f-b6b0-eadf84335751').addClass("tegenstander-monster-animatie");
        $('.steenHpBarScaling').addClass("levensErafVraag1");

        // check of .tegenstanderHpBarScaling, levensErafVraag1 heeft als die het heeft laat jouw monster verdwijnen
        if ($(".steenHpBarScaling").is(".levensErafVraag1")) {
          // delay on animatie
          $("#0d0f2613-ff78-4d2f-80cf-aa0a942112a2, #3db5824f-8af4-4423-8289-34690e44f45c, #8a56031a-7e0f-4f78-9160-5927256de7b7, d9fb007e-57dd-4bbc-8ac4-68c111cf5c1d").delay(3700).queue(function () {
            // add class gone
            $("#0d0f2613-ff78-4d2f-80cf-aa0a942112a2").addClass("goneAnimation").clearQueue();
            $("#3db5824f-8af4-4423-8289-34690e44f45c").addClass("goneAnimation").clearQueue();
            $("#8a56031a-7e0f-4f78-9160-5927256de7b7").addClass("goneAnimation").clearQueue();
            $("#d9fb007e-57dd-4bbc-8ac4-68c111cf5c1d").addClass("goneAnimation").clearQueue();
          });
          
          $("#verlorenKader").delay(5000).queue(function () {
            $("#verlorenKader").removeClass("gone").clearQueue();
            $("#blackOverlayBattle").removeClass("gone").clearQueue();
          });
        }
      });
    } else {
      $('#monsterSteenBattle').delay(1000).queue(function () {
        // addclass levensErafVraag1
        console.log('het werkt else');
        $('#f39ad5bb-6f9a-475f-b6b0-eadf84335751').addClass("tegenstander-monster-animatie");
        $('.steenHpBarScaling').addClass("levensErafVraag1");

        // check of .tegenstanderHpBarScaling, levensErafVraag1 heeft
        if ($(".steenHpBarScaling").is(".levensErafVraag1")) {
          // delay on animatie
          $("#0d0f2613-ff78-4d2f-80cf-aa0a942112a2, #3db5824f-8af4-4423-8289-34690e44f45c, #8a56031a-7e0f-4f78-9160-5927256de7b7, d9fb007e-57dd-4bbc-8ac4-68c111cf5c1d").delay(3700).queue(function () {
            // add class gone
            $("#0d0f2613-ff78-4d2f-80cf-aa0a942112a2").addClass("goneAnimation").clearQueue();
            $("#3db5824f-8af4-4423-8289-34690e44f45c").addClass("goneAnimation").clearQueue();
            $("#8a56031a-7e0f-4f78-9160-5927256de7b7").addClass("goneAnimation").clearQueue();
            $("#d9fb007e-57dd-4bbc-8ac4-68c111cf5c1d").addClass("goneAnimation").clearQueue();
          });
          $("#verlorenKader").delay(5000).queue(function () {
            $("#verlorenKader").removeClass("gone").clearQueue();
            $("#blackOverlayBattle").removeClass("gone").clearQueue();
          });
        }
      });
    }
  }
  
}, 1000);







//  // zorgt ervoor dat de volgende vraag zichtbaar is als de eerste weg is
//  if ($("#vraagEnAntwoordenKader").is(".gone")){
//    $('#vraagEnAntwoordenKaderVraag2').delay(3000).queue(function () {
//      $("#vraagEnAntwoordenKaderVraag2").removeClass("gone");
//      $("#blackOverlayBattle").removeClass("gone");
//      console.log('doe het');
//    });
//  }
// function to trigger animation, this works because i have prevented clicking on multiple svg's anwser so only 1 plays
// middle (right anwser)
//$('#4bb3b8dd-c2d8-423e-8073-7393b1604de7').click(function() {
//  $('#tegenstanderMonster').delay(13000).queue(function () {
//    
//  });
//});
//
//if ($('#vraagEnAntwoordenKader').hasClass('itsgone')){
//  $('#monsterSteenBattle').addClass("gone");
//}



//if ($("#battleBg").is(".vraagIsGoed")) {
//
//    // Then add class close to trigger div
//    $("#battleBg").addClass("itsgone");
//}



//  $('#tegenstanderMonster').click(function () {
//    // delay on everything
//    $('#tegenstanderMonster').delay(2000).queue(function () {
//      // addclass levensErafVraag1
//      $('.tegenstanderHpBarScaling').addClass("levensErafVraag1");
//      
//      // check of .tegenstanderHpBarScaling, levensErafVraag1 heeft
//      if ($(".tegenstanderHpBarScaling").is(".levensErafVraag1")) {
//        // delay on animatie
//        $("#d1be1ff5-eebc-4501-a9a2-4b2cab7835f2").delay(3000).queue(function () {
//          // add class foo
//          $("#d1be1ff5-eebc-4501-a9a2-4b2cab7835f2").addClass("foo").clearQueue();
//        });
//      }
//    });
//  });


//  function randomlinks(){
//  
//    var myrandom=Math.round(Math.random())
//    var links=new Array()
//    links[0]="index.html"
//    links[1]="monster-info-steen.html"
//
// 
//    window.location=links[myrandom]
//  
//  };

// code om naar steen pagina te lijden

//if ($('.waterMonsterSelect').hasClass('activeMonsterIconen')){
//  
//} else {
//  
//}

//var links = new Array()
//    links[0]="index.html";
//    links[1]="monster-info-steen.html";
//
//// math random
//function randomlinks() {
//  // Chooses a random link:
//  var i = Math.floor(Math.random() * links.length);
//  // Directs the browser to the chosen target:
//  parent.location = links[i];
//  return false;
//}
// 



//  $("a#selectMonsterKnopLink").attr('href', 'monster-specs-lucht.html');




//steenMonsterSelectBG
//vuurMonsterSelectBG
//waterMonsterSelectBG
//luchtMonsterSelectBG
//MonsterSpecsSteen
//MonsterSpecsVuur
//MonsterSpecsWater
//MonsterSpecsLucht

//        if ( (!$('#luchtCard').hasClass("filterDisplayNone")) && (!$('#waterCard').hasClass("filterDisplayNone")) && (!$('#steenCard').hasClass("filterDisplayNone")) ) {
//            $('#vuurFilter').click(function () {
//                $('#luchtCard, #waterCard, #steenCard').removeClass("filterDisplayNone");
//            });
//        } else {
//           $('#vuurFilter').click(function () {
//                $('#luchtCard, #waterCard, #steenCard').addClass("filterDisplayNone");
//            }); 
//        }


//    $('#steenFilter').click(function () {
//        $('#luchtCard, #waterCard, #vuurCard').addClass('filterDisplayNone');
//        $('#steenCard').removeClass('filterDisplayNone');
//      
//    });
//        
//    $('#waterFilter').click(function () {
//        $('#luchtCard, #vuurCard, #steenCard').addClass('filterDisplayNone');
//        $('#waterCard').removeClass('filterDisplayNone');
//    });
//    
//    $('#luchtFilter').click(function () {
//        $('#steenCard, #waterCard, #vuurCard').addClass('filterDisplayNone');
//        $('#luchtCard').removeClass('filterDisplayNone');
//    });






//$(document).ready(function () {
//    $('.leftbutton').click(function () {
//        $('#right').hide();
//        $('#left').toggle();
//    });
//});
//$(document).ready(function () {
//    $('.rightbutton').click(function () {
//        $('#left').hide();
//        $('#right').toggle();
//    });
//});



// allen op steen water en lucht
//$('#vuurFilter').click( function() {
//    $("#steenCard, #luchtCard, #waterCard").toggleClass("filterDisplayNone");
//} );


//    $('#steenFilter').click(function() {  
//        $('#steenCard').not('#luchtCard, #waterCard, #vuurCard').removeClass('filterDisplayNone');
//        $('#luchtCard, #waterCard, #vuurCard').toggleClass('filterDisplayNone');
//    });
//
//    $('#vuurFilter').click(function() {  
//        $('#vuurCard').not('#steenCard, #luchtCard, #waterCard').removeClass('filterDisplayNone');
//        $('#luchtCard, #waterCard, #steenCard').toggleClass('filterDisplayNone');
//    });

//$('#steenFilter').click( function() {
//    $("#vuurCard, #luchtCard, #waterCard").toggleClass("filterDisplayNone");
//    if (('#steenCard, #luchtCard, #waterCard').hasclass("filterDisplayNone")){
//        $('#steenCard').addClass("filterDisplayNone");
//    } else {
//        
//    }
//} );


//var selectBg = [ {
//    achtergrond: "url('links/monsterSpecs/steenBG.svg')"
//  
//}, {
//    achtergrond: "url('links/monsterSpecs/vuurBG.svg')"
//}, {
//  
//    achtergrond: "url('links/monsterSpecs/luchtBG.svg')"
//}, {
//  
//    achtergrond: "url('links/monsterSpecs/waterBG.svg')"
//}
//];
//
////document.body.style.backgroundImage = "url('links/monsterSpecs/steenBG.svg')";
//
//BgSelectAanpassen = function(nummer) {
//  document.getElementById("MonsterSelectBg").style.backgroundImage = selectBg[nummer].achtergrond;
//  
//  
//}
//
//BgSelectAanpassen(0);




//$("a#selectMonsterKnopLink").attr("href", function(i, href) {
//  return href + 'index.html';
//});