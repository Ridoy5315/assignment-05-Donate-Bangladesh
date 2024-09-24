function currentTime() {
     var now = new Date();
     now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
     const realTime = now.toString();

     return realTime;
     
}
