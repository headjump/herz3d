GAME=(function(){
  var _now;

  var _gameLoop = function _gameLoop(){
    var
      prev=_now,
      dt;

    _now = new Date().getTime();
    dt = _now - prev;
    if(dt > 500){ dt=500;} // 0.5 sec max
    while(dt >= 16.667){
      update();
      dt-=16.667;
    }
    if(dt > 0) _now -= dt; // what's left carries over to next frame
    draw();
    window.requestAnimationFrame(_gameLoop);
  };

  var update = function(){
  };

  var draw = function draw(){
    HERZ3D.cls();
  };

  var start=function start(){
    console.log("start game");

    _now=new Date().getTime();
    window.requestAnimationFrame(_gameLoop);
  };

  return {
    start:start
  };
})();