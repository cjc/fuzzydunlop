fuzzydunlop is an ender library wrapping notification type tasks - WebKit desktop notifications, dynamic favicon updating and audio alerts.

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

##Audio Alarms

Easily trigger and stop audio alarms based on sounds referenced in your page's &lt;head&gt;

```
<head>
  <link rel="alarm" type="audio/mpeg" href="short.mp3" title="short" />
  <link mrel="alarm" type="audio/mpeg" href="mid.mp3" title="mid" />
</head>
<body>
<script>
  $.alarm("mid"); // Play first audio resource titled 'mid'
  $.alarm("short"); // Play first audio resource titled 'short'
  $.alarm(); // Play first found audio resource
  $.alarm.stop(); // Stop all audio alarms
</script>

```


##Credits
6x7 characters from SWFIT_v02 by http://www.orgdot.com/aliasfonts/

Audio alarms in examples/ are samples from The Sun Is Down, [CC-BY-NA Yoko Ono Plastic Ono Band](http://imaginepeace.com/archives/8310)
