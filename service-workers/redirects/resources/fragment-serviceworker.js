onfetch = e => {
  if(e.request.url.endsWith("resources/test")) {
    e.respondWith(new Promise(async resolve => {
      resolve(await fetch("test.txt#success"));
    }));
  }
}
