$(function(){

      // tabs

      var tabLinks = document.querySelectorAll(".tablinks");
      var tabContent = document.querySelectorAll(".tabcontent");


      tabLinks.forEach(function(el) {
         el.addEventListener("click", openTabs);
      });


      function openTabs(el) {
         var btnTarget = el.currentTarget;
         var country = btnTarget.dataset.country;

         tabContent.forEach(function(el) {
            el.classList.remove("active");
         });

         tabLinks.forEach(function(el) {
            el.classList.remove("active");
         });

         document.querySelector("#" + country).classList.add("active");
         
         btnTarget.classList.add("active");
}


   //background-effect
      var html = '';
      for (var i = 1; i <= 50; i ++) {
          html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
      }
        
      document.querySelector('.shape').innerHTML += html;
      
      var $allShapes = $("[class*='shape-container--']");
      // $('.button').click(function (event) {
      //     $allShapes.toggleClass("stop-shape");
      //     var $this = $(this);
      //     $this.toggleClass('.button');
      //     if($this.hasClass('.button')){
      //         $this.text('Unfreeze shapes');         
      //     } else {
      //         $this.text('Freeze shapes');
      //     }
      //     event.preventDefault();
      // });
      

});