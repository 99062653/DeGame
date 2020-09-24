function startgame(){
    var tas = [
        "de sok",
        "minecraft emerald",
        "diamant",
        "je oma's haar ring"
    ]
    var randomItem = tas[Math.floor(Math.random()* 4)]
    var namen = [
        "ridder",
        "boer",
        "huurling"];
    var randomNaam = namen[Math.floor(Math.random()* 3)];  

    var emoties = [
        "lacht",
        "grinnikt",
        "zucht"];
    var randomEmotie = emoties[Math.floor(Math.random()* 3)];

alert("Je loopt het kasteel van ravenheart in. Opzoek naar rijkdom en macht!");
    var vraag1 = prompt("Waar ga je naar toe? Links, of Rechts.");
        if(vraag1 == "rechts"){
            alert("Je loopt langs de markt en de begraafplaats.");
            }else("Je loopt rechtdoor naar de stallen.");
        if(vraag1 == "links"){
            alert("Je loopt lang de ridderzaal en de brouwerij.");
                            }

        alert("Terwijl je loopt naar het huis van de kasteel, word je onderschept door een " + randomNaam + ".");
var vraag2 = prompt("Hij zegt. HEY! wat doe jij hier!");
            alert("Jij zegt: " + vraag2 + "." + " de " + randomNaam + " " + randomEmotie + " " + "en zegt: Jij komt hier niet vandaan ofwel?");
var vraag3 = prompt("Kom je hier vandaan? "+ "vraagt de " + randomNaam + " opnieuw." );
        if(vraag3 == "ja"){
            alert("De " + randomNaam + " " + randomEmotie + " opnieuw, en vraagt zich af waarom hij je hier nog nooit hebt gezien?");
            var vraag4 = prompt("De " + randomNaam + " zegt: kom op! vertel me!");
                                alert("Jij zegt: " + vraag4 + ". de " + randomNaam + " zegt: oh ja! dat begrijp ik");
                                alert("Je loopt verder naar het huis van het kasteel..");
                                alert("Hier ben je dan. HET HUIS van het kasteel, je kijkt door de ramen en ziet schilderijen die je nog nooit heb mogen zien.");
                                alert("Je ziet de eigenaar van dit kasteel zitten in het huis. Je tikt op het raam, Hij kijkt op en " + randomEmotie);
                                var vraag5 = prompt("De eigenaar loopt naar buiten, hij vraagt: Ja? waar kan ik je mee helpen?");
                                alert("Jij zegt: " + vraag5 + ". De eigenaar " + randomEmotie);
                                var eigenaar = Math.floor(Math.random()*2);
                                if(eigenaar > 15){
                                    alert("De eigenaar zegt: Dus jij wilt mijn kasteel hebbem? Hè dat klinkt best. jij mag mijn kasteel hebben, houdoe!");
                                }else{
                                    alert("De eigenaar zegt: Dus jij wilt mijn kasteel hebben? Nou dat dacht ik niet maat. Of als je wilt ruilen voor iets....");
                                    alert("Je kijkt in je rugzak en vindt " + randomItem + " je kijkt ernaar en denkt na");
                                        var vraag6 = prompt("De man kijkt naar de " + randomItem + " en zegt: nouuuuuu! voor dat wil ik best mijn kasteel ruilen! ruil je de " + randomItem + "?");
                                        if(vraag6 == "ja"){
                                            alert("De eigenaar zegt toppie! Hier heb je de sleutels en houdoe!");
                                        }else{
                                            alert("De eigenaar zegt: Jammer voor jou dan maat!");
                                        var vraag7 = prompt("Ga je de eigenaar shanken?");
                                            if(vraag7 == "ja"){
                                            var gevecht = (Math.random());
                                            if(gevecht > 0.5){
                                                alert("Je steekt de man lek. Je steelt zijn sleutels! HET KASTEEL IS VAN JOU!");
                                            }else{
                                                alert("De man ziet je mes en pakt hem af. Hij gooit je in de kerkers");
                                                alert("Je sterft in de kerkers");
                                            }
                                            

                                                }else{
                                                    alert("Je denkt na over een ander manier om het huis te krijgen...");
                                                    var vraag8 = prompt("Je kijkt naar het huis en ziet dat het raam open staat, en der naast een trap. Klim je naar boven?");
                                                    if(vraag8 =="ja"){
                                                        var klimmen = Math.floor(Math.random()*2);
                                                        if(klimmen > 10){
                                                            alert("Je klimt succesvol naar boven en je bevindt je nu in een slaapkamer.");
                                                            var vraag9 = prompt("Je opent een kastje waar allemaal goud in zit. Neem je het mee?");
                                                                if(vraag9 == "ja"){
                                                                    alert("Je propt al het goudwaar in je rugzak. MAAR! je hoort iemand de trap op komen!");
                                                                    var verstoppen = prompt("Waar verstop je je? (kast of bed)");
                                                                    alert("Je verstopt je in " + verstoppen);
                                                                    alert("Je hoort: GODVERDOMME AL ME GOUD! WAAR BEN JE DIEF!");
                                                                    if(verstoppen == "kast"){
                                                                        alert("De man loop richting jou en opent de kast! Hij zegt: MIJN GOUD DIEF!");
                                                                        alert("Hij slaat je knock out. En je gaat dood");
                                                                    }else{
                                                                        alert("De man loopt richting de kast. YES! hij heeft je niet gevonden!");
                                                                        alert("Je klimt gauw uit het raam en rent naar de markt! je verkoopt al je spullen en rent uit het kasteel JE BENT RIJK");
                                                                    }
                                                                }else{
                                                                    alert("Je houdt je gierigheid in en neemt geen goudwaar mee. MAAR! DE DEUR GAAT OPEN! EEN MAN ROEPT: HEY GODVERDOMME WAT DOE JE HIER!?!.");
                                                                    alert("Je draait je om en je herkent de man! het is de eigenaar van het huis! Hij zegt: KOM HIER JIJ LUL!");
                                                                var vraag10 = prompt("Ga je hem shanken?");
                                                                    if(vraag10 == "ja"){
                                                                        var gevecht2 = (Math.random());
                                                                        if(gevecht2 > 0.5){
                                                                            alert("Je steekt hem lek! Hij valt op de grond. Het huis is van jou!");
                                                                        var lijk = prompt("Waar dump je het lijk?");
                                                                                alert("Je dumpt het lijk in " + lijk);
                                                                        }
                                                                    }
                                                                }
                                                        }else{
                                                            alert("Terwijl je naar boven klimt, plaats je je voet verkeerd en val je naar onder. je breekt je nek en gaat dood.");
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                
                            
                    
                                    }else{
                                        alert("Nee dat dacht ik al zegt de " + randomNaam + " hij " + randomEmotie + " en pakt je bij de arm.");
                                        alert("De " + randomNaam + " trekt je mee naar wat lijkt de kerkers. Je denkt: ahhhhhh fuck.");
                                        var result = Math.floor(Math.random()*2);
                                        if(result > 10){
                                            alert("De eigenaar van het kasteel brengt je een bezoekje. Hij zegt: POEEEEE MAAAAT DEZE KNAAP IS LELIJK!");
                                        }else{
                                            alert("De eigenaar van het kasteel brengt je een bezoekje. Hij zegt: nouja, deze wil ik niet hier houden. Gooi hem uit mijn kasteel");
                                            alert("Je wordt het kasteel uitgesmeten. Terug de wildernis in");
                                            }       
                    
                                        }                               

                    }