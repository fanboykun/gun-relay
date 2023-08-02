import relay from "@gun-vue/relay";
relay.init({
    host: "localhost", // A host name used by the server to publish it's state to the graph. Set your peer URL without a protocol, like  'relay.some-site.com'
    port: 8000, // Gun server port. You may use a more standard 8080.
    store: true, // Put true if you want to have Gun store data on disk.
    path: "public", // A public directory to expose your app with the build in express server. Insert a path like '../app/dist'
  });