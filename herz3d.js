HERZ3D=(function(){
  var
    _gl,
    _clear_col=[.0,.0,.0,1.0],
    _camera;

  var init=function init(canvas,done,error){
    _gl=canvas.getContext("webgl");
    if(_gl){
      _gl.clearColor(_clear_col[0],_clear_col[1],_clear_col[2],_clear_col[3]);
      done();
    } else {
      error("WebGl not supported.");
    }
  };

  var cls=function cls(col){
    _gl.clear(_gl.COLOR_BUFFER_BIT);
  };

  var spr=function(){

  };

  return {
    init: init,
    spr: spr,
    cls: cls
  };
})();