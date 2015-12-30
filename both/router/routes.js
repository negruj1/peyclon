Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  onAfterAction: function(){
        //var one = IRLibLoader.load('assets/js/jquery.smooth-scroll.min.js');assets/js/jquery.flexslider-min.js


        if(IRLibLoader.load('assets/js/jquery.flexslider-min.js').ready()){
          if(IRLibLoader.load('assets/js/jquery.fitvids.js').ready()){
          	if(IRLibLoader.load('assets/js/jquery.smooth-scroll.min.js').ready()){
             if(IRLibLoader.load('assets/js/jquery.backstretch.min.js').ready()){
              //if(IRLibLoader.load('assets/js/bootstrap.min.js').ready()){
                if(IRLibLoader.load('http://maps.google.com/maps/api/js?sensor=true').ready()){
                  if(IRLibLoader.load('assets/js/gmaps.js').ready()){
                    if(IRLibLoader.load('assets/js/script.js').ready()){
                      menu(); backstretch(); slider(); contentslider(); map(); panels(); blogposts();
                      //this.next();		
                    } 
                  }
                }
              //}
            }
          }
        }
      }
    }
  });

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
