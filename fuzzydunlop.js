!function($) {
  var font = new Image();
  font.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAHCAYAAACIuForAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAi0lEQVRIx+1VQQ7AIAiDxf9/uTstcUYEuqkXORmohQhFBSC1qerbISIA1MK0MYujxUYxvdwMz25MYS4+8UhiiyfTIM96XFlMtJ7R0I0wlxxbYmUWsTfB0en1cACUVUtECYzqepgy65H/kOoXObc+ttHZ1WHVfFbHztXhdbuOP+fsJ8FOFPuBrspnxW/2o48jmcP7zAAAAABJRU5ErkJggg==";
  var notes = window.webkitNotifications;
  var authedNotify = function(options) {
    if (!options.icon){
      var icons = $("link[rel*='icon']");
      if (icons.length) {
        options.icon = icons.first().attr("href");
      } 
    }
    var notification = notes.createNotification(options.icon,options.subject?options.subject:"",options.text?options.text:"");
    if (options.timeout) {
      notification.ondisplay = function(e) {setTimeout(function(){e.currentTarget.cancel()},options.timeout*1000)};
    }
    notification.onclick = options.onclick ? options.onclick : function(e) {e.currentTarget.cancel();$.alarm.stop();};
    notification.show();
  }

  $.ender({
    font: font,
    notify: function(options) {
      if (notes) {
        if (notes.checkPermission() == 0) {
          authedNotify(options);
        } else {
          notes.requestPermission(function(e){
            authedNotify(options);
          });
        }
      }
    }
  });
  $.ender({
    favicon: {
      set: function(number) {
        var c = $.create("<canvas width=16 height=16>")[0];
        context = c.getContext("2d");
        var fav = new Image();
        fav.src = document.getElementById("favicon").href;
        fav.onload = function() {
          context.drawImage(fav, 0, 0);
          if (typeof number !== 'undefined') {
            var num = new Number(number);
            if (num > 99) num = 99;
            context.fillStyle = 'rgba(255,255,255,0.8)';
            context.fillRect(0,8,16,8);
            if (num > 9) {
              var digit = Math.floor(num / 10);
              context.drawImage(font,digit * 9 + 3,0,6,7,2,9,6,7);
            }
            var digit = num % 10;
            context.drawImage(font,digit * 9 + 3,0,6,7,9,9,6,7);
          }
          $("#faviconDynamic").remove();
          var newfavicon = $.create("<link id='faviconDynamic' type='image/png' rel='shortcut icon'/>")[0];
          newfavicon.setAttribute("href",c.toDataURL());
          $("head").append(newfavicon);
        }
      },
      reset: function(number) {
        this.set();
      }
    }
  });
  var audio = {};
  var alarm = function(name) {
    name = name || "";
    if (audio[name]) {
      audio[name].play();
    } else {
      var sources = (name == "") ?$("link[rel=alarm]") : $("link[rel=alarm][title="+name+"]");
      if (sources.length > 0) {
        var a = new Audio();
        a.src = sources.attr("href");
        audio[name] = a;
        audio[name].play();
      }
    }
  };
  alarm.stop = function() {
    for(var k in audio) {
        if (audio.hasOwnProperty(k)) {
          if (!audio[k].paused) {
            audio[k].pause();
            audio[k].currentTime = 0;
          }
        }
    }
  };
  $.ender({
    alarm: alarm,
    audio: audio
  });
}(ender);
