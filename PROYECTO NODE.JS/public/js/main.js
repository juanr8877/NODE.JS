let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

//--========================================================== -->
//--Scrip para pasar entre modales login y logout-->
//--========================================================== -->

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('link-to-register').addEventListener('click', function(event) {
        event.preventDefault();
        var loginModal = bootstrap.Modal.getInstance(document.getElementById('login'));
        loginModal.hide();
        var registerModal = new bootstrap.Modal(document.getElementById('logout'));
        registerModal.show();
    });

    document.getElementById('link-to-login').addEventListener('click', function(event) {
        event.preventDefault();
        var registerModal = bootstrap.Modal.getInstance(document.getElementById('logout'));
        registerModal.hide();
        var loginModal = new bootstrap.Modal(document.getElementById('login'));
        loginModal.show();
    });
});
