let Enter = document.querySelector(".transi-enter");


    Enter.classList.remove("h-[100vh]");
    Enter.style.height = "0px";
    window.addEventListener( "pageshow", function ( event ) {
        var historyTraversal = event.persisted || 
                               ( typeof window.performance != "undefined" && 
                                    window.performance.navigation.type === 2 );
        if ( historyTraversal ) {
          // Handle page restore.
          window.location.reload();
        }
      });