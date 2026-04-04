abstract class Server {
  abstract start(): void;
  abstract stop(): void;
}

class HTTPServer extends Server {
  start(): void {
    console.log("HTTP server started");
  }
  stop(): void {
    console.log("HTTP server stopped");
  }
}

class WebSoccetServer extends Server {
  start(): void {
    console.log("WebSoccetServer started");
  }

  stop(): void {
    console.log("WebSoccetServer stopped");
  }
}

const firstHTTPServer = new HTTPServer();

const secondHTTPServer = new HTTPServer();

function addRestart(targetClass: Server): void {
  (targetClass as any).restart = function () {
    console.log(`Restart servers restarting ${this.constructor.name}`);
    this.stop();
    this.start();
  };
}

const firstWebSoccetServer = new WebSoccetServer();

const secondWebSoccetServer = new WebSoccetServer();

function addLoginStart(targetClass: Server): void {
  const originalStart = targetClass.start.bind(targetClass);
  const originalStop = targetClass.stop.bind(targetClass);

  targetClass.start = function () {
    console.log(
      `${new Date().toLocaleString()} Starting:${this.constructor.name}`,
    );
    originalStart();
  };

  targetClass.stop = function () {
    console.log(
      `${new Date().toLocaleString()} Stopping:${this.constructor.name}`,
    );
    originalStop();
  };
}

function addCheckAccesToStop(targetClass: Server): void {
  const originalStop = targetClass.stop.bind(targetClass);

  targetClass.stop = function () {
    console.log(`Checing acces for ${this.constructor.name}`);
    originalStop();
  };
}

addRestart(firstHTTPServer);

addRestart(firstWebSoccetServer);

addLoginStart(firstHTTPServer);

addLoginStart(firstWebSoccetServer);

addCheckAccesToStop(firstHTTPServer);

addCheckAccesToStop(firstWebSoccetServer);




console.group("Decorator");

console.log(firstHTTPServer);
firstHTTPServer.start();
(firstHTTPServer as any).restart();

console.log(firstWebSoccetServer);
firstWebSoccetServer.start();
(firstWebSoccetServer as any).restart();

console.groupEnd();

console.group("WithoutDecorator");
console.log(secondHTTPServer);
console.log(firstWebSoccetServer);
secondHTTPServer.start();
secondWebSoccetServer.start();
console.groupEnd();
