###Aula 8 - Node.js e Javascript avançado

**Resumo dos assuntos da aula**

- Intodução a Node.js - Arquitetura e funcionamento
- NPM - gerenciador de pacotes Node.js
- Socket.io - Biblioteca que implementa o websocket
- GULP - Gerenciador de Tarefas para o Workflow
- Arquitetura de Diretorios para projetos de front end
- Arquitetura de código padrão para Javascript Modularizado
- Função Imediata
- Closure
- eval e new Function
- Dom Content Loaded


**Links e Dicas**

- [Plunker](http://plnkr.co/) - Editor de código online
- [Node.js](https://nodejs.org/) - Site oficial do Node.js
- [Socket.io](http://socket.io/) - Biblioteca que implementa o websocket
- [Gulp](http://gulpjs.com/) - Biblioteca que implementa o websocket

**Código Criado em Sala**


```javascript

;(function(window, document){
  'use strict';  
  
  var App = (function(){
    
    var _public = {};
    var _private = {};
    
    
    _public.init = function(){
        
    };
    
    return _public;

  })();
  window.App = App;
  App.init();

})(window, document);

document.addEventListener('DOMContentLoaded', function() {
  
});

```


