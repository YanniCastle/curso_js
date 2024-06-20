//console.log("Hola, JavaScript");
//var myString = "Esta es una cadena de texto";
//console.log(myString);

//book:El gran libro de HTML5 CSS3 y Javascript, page:91

  /*function mostraralerta(){
    alert('hizo clic!');
    }
    function hacerclic(){
    document.getElementsByTagName('p')[0].onclick=mostraralerta;
    }
    window.onload=hacerclic;
    */
    
      /*function hacerclic(){
        var lista=document.querySelectorAll(“#principal p”);
        lista[0].onclick=mostraralerta;
        }
        function mostraralerta(){
        alert('hizo clic!');
        }
        window.onload=hacerclic;
        */

          /*function hacerclic(){
            var lista=document.getElementById('principal').
            querySelectorAll('p');
            lista[0].onclick=mostraralerta;
            }
            function mostraralerta(){
            alert('hizo clic!');
            }
            window.onload=hacerclic;
            */

            function mostraralerta(){
                alert('hizo clic!');
                }
                function hacerclic(){
                var elemento=document.getElementsByTagName('p')[0];
                elemento.addEventListener('click', mostraralerta, false);
                }
                window.addEventListener('load', hacerclic, false);

function mostraralerta2(){
                alert('hizo clic clic!');
                }
                function hacerclicclic(){
                var elemento=document.getElementsByTagName('p')[0];
                elemento.addEventListener('click click', mostraralerta2, false);
                }
                window.addEventListener('load', hacerclicclic, false);