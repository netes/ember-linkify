import Ember from 'ember';

function urlRegex () {
  return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
}

// Shortens the URL and adds three dots to the end
function shortenUrl ( url , length ) {

  if( !Ember.isBlank( url ) && url.length > length) {
      url = url.substr( 0 , length ) + "...";
  }

  return url;
}

export { urlRegex, shortenUrl };
