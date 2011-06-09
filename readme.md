fuzzydunlop is an ender library wrapping notification type tasks - WebKit desktop notifications, dynamic favicon updating and audio alerts.

Currently only webkit notifications and dynamic favicon updating are functional

##WebKit Notifications

Triggered by $.notify(options), handles the checking and requesting of permission. By default notifications use the page's favicon as the image, and will click to dismiss.

```
$.notify({subject:'Important Stuff',text:'Some otjher stuff',timeout:5});
```

will cause a notification (after asking permission if required) which disappears after 5 seconds.

##Dynamic Favicon

To add a numeric overlay to the current page's favicon (0-99 only), use the $.favicon.set(number) function.

```
$.favicon.set(4);
$.favicon.set(67);
$.favicon.set(12345);
$.favicon.reset();
```

##Credits
6x7 characters from SWFIT_v02 by http://www.orgdot.com/aliasfonts/
