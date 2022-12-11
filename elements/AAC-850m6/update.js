function(instance, properties, context) {

        (function(){
        'use strict';
        console.info('Configurando canvas...');
        //pegando parametros da url
        let params = new URLSearchParams(window.location.search);
        let width, height, sangria, texto;
        if(params.get('w') == null){
            $('#w').text("W: "+properties.width);
            $('#h').text("H: "+properties.height);
            $('#b').text("B: "+properties.bleed);
            $('#t').text("T: "+properties.text_line);

            sangria = properties.bleed * 37.8;
            texto = (properties.text_line + properties.bleed) * -37.8;
            width = properties.width * 37.8;
            height = properties.height * 37.8;  
        }else{
            $('#w').text("W: "+params.get('w'));
            $('#h').text("H: "+params.get('h'));
            $('#b').text("B: "+params.get('b'));
            $('#t').text("T: "+params.get('t'));

            sangria = parseFloat(params.get('b')) * 37.8;
            texto = (parseFloat(params.get('t')) + parseFloat(params.get('b'))) * -37.8;
            width = parseFloat(params.get('w')) * 37.8;
            height = parseFloat(params.get('h')) * 37.8;    
        }
        
        height += (sangria * 2);
        width += (sangria * 2);
            
        // fator de escala se baseia na largura ser sempre 15cm
		let lado = width > height ? width : height;
        let fator_escala = 6 * 100 / lado; 
            
        width *= fator_escala;
        height *= fator_escala;
        sangria *= fator_escala;
        texto *= fator_escala;

        $('#c').attr('width',width);
        $('#c').attr('height',height);
        var string_texto = texto != 0 ? texto + "px" : "none";
        $('#c').css('outline-offset', string_texto);
            
        $('#c').css('-webkit-box-shadow',"inset 0px 0px 0px "+sangria+"px #aaa5,0px 2px 12px -7px #3337");
        $('#c').css('-moz-box-shadow',"inset 0px 0px 0px "+sangria+"px #aaa5,0px 2px 12px -7px #3337");
        $('#c').css('border', "1px solid #d9d9d9");

        //iniciando canvas
        window.canvas = new fabric.Canvas('c', {backgroundColor:"#ffffff"});
        window.atual = 'frente';
        window.frente = null;
        window.verso = window.canvas.toJSON();
        window.objCanvas = {};    
        //CRIANDO UNDO E REDO
        window._config = {
            canvasState             : [],
            currentStateIndex       : -1,
            undoStatus              : false,
            redoStatus              : false,
            undoFinishedStatus      : 1,
            redoFinishedStatus      : 1
        };
        canvas.on('object:modified', function(){
          updateCanvasState();
        });

        canvas.on('object:added', function(){
          updateCanvasState();
        });
            
        var c_width_plus_bleed = ((properties.bleed * 2) + properties.width) * 10;
		window.multiplier = (c_width_plus_bleed  / canvas.getWidth()) * (properties.dpi/25.4);

        window.updateCanvasState = function() {
            if((_config.undoStatus == false && _config.redoStatus == false)){
                var jsonData        = canvas.toJSON();
                var canvasAsJson        = JSON.stringify(jsonData);
                if(_config.currentStateIndex < _config.canvasState.length-1){
                    var indexToBeInserted                  = _config.currentStateIndex+1;
                    _config.canvasState[indexToBeInserted] = canvasAsJson;
                    var numberOfElementsToRetain           = indexToBeInserted+1;
                    _config.canvasState                    = _config.canvasState.splice(0,numberOfElementsToRetain);
                }else{
                _config.canvasState.push(canvasAsJson);
                }
            _config.currentStateIndex = _config.canvasState.length-1;
            if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
              document.getElementById('redo').disabled= "disabled";
            }
            }
        }

        window.undo = function() {
            if(_config.undoFinishedStatus){
                if(_config.currentStateIndex == -1){
                _config.undoStatus = false;
                }
                else{
                if (_config.canvasState.length >= 1) {
                _config.undoFinishedStatus = 0;
                  if(_config.currentStateIndex != 0){
                        _config.undoStatus = true;
                      canvas.loadFromJSON(_config.canvasState[_config.currentStateIndex-1],function(){
                                    var jsonData = JSON.parse(_config.canvasState[_config.currentStateIndex-1]);
                                canvas.renderAll();
                            _config.undoStatus = false;
                            _config.currentStateIndex -= 1;
                                    document.getElementById('undo').removeAttribute("disabled");
                                    if(_config.currentStateIndex !== _config.canvasState.length-1){
                                        document.getElementById('redo').removeAttribute('disabled');
                                    }
                                _config.undoFinishedStatus = 1;
                    });
                  }
                  else if(_config.currentStateIndex == 0){
                        canvas.clear();
                            _config.undoFinishedStatus = 1;
                            document.getElementById('undo').disabled= "disabled";
                            document.getElementById('redo').removeAttribute('disabled');
                    _config.currentStateIndex -= 1;
                  }
                }
                }
            }
            canvas.getActiveObjects().forEach((obj) => {
               obj = applyDefaults(obj);
            });
            canvas.requestRenderAll();
        }

        window.redo = function() {
            if(_config.redoFinishedStatus){
                if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
                    document.getElementById('redo').disabled= "disabled";
                }else{
                if (_config.canvasState.length > _config.currentStateIndex && _config.canvasState.length != 0){
                        _config.redoFinishedStatus = 0;
                    _config.redoStatus = true;
                  canvas.loadFromJSON(_config.canvasState[_config.currentStateIndex+1],function(){
                                var jsonData = JSON.parse(_config.canvasState[_config.currentStateIndex+1]);
                            canvas.renderAll();
                            _config.redoStatus = false;
                        _config.currentStateIndex += 1;
                                if(_config.currentStateIndex != -1){
                                    document.getElementById('undo').removeAttribute('disabled');
                                }
                            _config.redoFinishedStatus = 1;
                  if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
                    document.getElementById('redo').disabled= "disabled";
                  }
                  });
                }
                }
            }
            canvas.getActiveObjects().forEach((obj) => {
               obj = applyDefaults(obj);
            });
            canvas.requestRenderAll();
        }
        
        //window.dpd_theme = properties.theme;
        document.documentElement.style.setProperty('--primary-color', properties.accent);
    })();
 
    //------------------------------------------------------------------------------------------

    window.salvar = async function(canvas){
        window.download(canvas);
    };
    
    if(context == undefined){ $(instance.canvas).css('border', "2px dashed #777"); }
    $(instance.canvas).css('overflow-y', "auto");
	$(instance.canvas).css("scrollbar-width", "none");
}