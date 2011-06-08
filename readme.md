fuzzydunlop is an ender library wrapping notification type tasks - WebKit desktop notifications, dynamic favicon updating and audio alerts.

Currently only webkit notifications are functional

##WebKit Notifications

Triggered by $.notify(options), handles the checking and requesting of permission. By default notifications use the page's favicon as the image, and will click to dismiss.

```
$.notify({subject:'Important Stuff',text:'Some otjher stuff',timeout:5});
```

will cause a notification (after asking permission if required) which disappears after 5 seconds.

##Credits
6x7 characters from SWFIT_v02 by http://www.orgdot.com/aliasfonts/
