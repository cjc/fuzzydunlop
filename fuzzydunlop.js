!function($) {
  var font = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAAAHCAYAAABwUTSwAAACXUlEQVRoBe1Y0W7CQAxbpT3xvv//wL3vlZ3RLLmW75qWFnXASdBc4jhOWm6D6Xq9fuiapmnuaMGGmXoYjwGXOOBXbBWjOeRWX5UHub5elUf7xkwePcNUP/lG98tj7EN50Jfuqxjn7s0HOPL3MIyztnMrx3/CqO6tc/Y833NW6lc7xTlDnXvygYf5ev3UDW0lS4mMpxg4GCcfro6tYDR/ZCcuxy9hUtw1g9NxR2Jaua/2+kHdti7t9X2z5M31SEjNGQ80e57vNZn2Xhjyja6slbSO8kaxe7iSHr/3xFCDx+F/JKaVm933tl/9/Kjee+aH3s+0tC/qQn/xQCTgfX2aCfy0B+B2sLab/jRNrWnkmT7Ma/p+Y9dN4LADEQ+gSvET2eOKVXsJB17HeC3wOQa+hIN/tBKP4/fCNN7ZX/Qtel1bb580e70KBvyOq/D0dN3rpxbXcC/vkfnUvEONxecn1TrDrKAr6YDPNSecY3yWvfghByKKJZEqKsVdZAUDTsel+gmjeqr2Eo/Hwet9wee4hGmw2Vee1Be49liuJ3FWMMhTXOpL48AnDPx7LNY6cnZ76FQOalZfzx715TyO9ThqHHkvej2s8XsP1Ky9qE3u1FfCHXIgUsT7epoJXNoDQTH4LfLlFh7+9GF6uUGcpOGz3ot4IELsaG4ap+2nLf3Ko5gUV2zVrvJUcUt1l3iW4kv8Fp995bHYbZvq6Zz/cmY8IR7/M0i4pEF9SY/Gq7by0FY99FX5gEM+8pQH/sTlGOD2WKnWFl7lUXsN19a8VKPCpZjefBWjdqrZ81XzEu4XjiQIGu8OLHoAAAAASUVORK5CYII=";

  $.ender({
    appfont: function() {
      this.append("<img src='" + font + "'/>");
    }
  },true);
}(ender);
