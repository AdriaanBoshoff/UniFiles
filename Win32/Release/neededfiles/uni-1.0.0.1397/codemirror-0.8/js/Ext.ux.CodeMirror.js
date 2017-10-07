//Ext.namespace('Ext.ux.form');

Ext.define('Ext.ux.form.CodeMirror', {
  	extend: 'Ext.form.field.TextArea',
  	xtype: 'ux-codemirror',
    language: 'txt',
    codeMirrorPath: null, // should be path to code mirror on your server!
    initCallBackFn: null,
    resizeCallBackFn: null,
    
		destroy: function() {
      var me = this;
      this.initialized = false;
      if (me.codeEditor) delete me.codeEditor;
      me.callParent(arguments);
		},
		
		show: function() {
      this.callParent(arguments);
      var c = this.codeEditor;
      if (c && c.options && c.options.div) {
   			c.options.div.style.visibility = "";
			}
		},

		hide: function() {
      this.callParent(arguments);
      var c = this.codeEditor;
      if (c && c.options && c.options.div) {
   			c.options.div.style.visibility = "hidden";
			}
		},
    
    initComponent: function() {
        if (this.codeMirrorPath === null) {
            throw 'Ext.ux.form.CodeMirror: codeMirrorPath required';
        }
        this.initialized = false;
	      this.callParent(arguments);
        this.addEvents('initialize');
        this.on({
        		move : function(ta, x, y) {
        			var el=document.getElementById("CodeMirror-wrapping-"+this.id);
        			if (el) {
        				if (x!=undefined)	el.style.left=x+"px";
    						if (y!=undefined)	el.style.top=y+"px"; 
							}
        		},
        		
            resize: function(ta, width, height) {
                if (this.resizeCallBackFn)
                    this.resizeCallBackFn(this);
                else {
			        			var el=document.getElementById("CodeMirror-wrapping-"+this.id);
			        			if (el) {
			        				if (width!=undefined)	{
												var ewidth=width;
		                    var lineNumbersEl = document.getElementById("CodeMirror-line-numbers-"+this.id);
		                    if (lineNumbersEl) {
		                    	var w=lineNumbersEl.style.width;
		                    	if (typeof(w) == 'string') w=w.replace("px", "");
		                    	//ewidth=ewidth-w;
		                    }
												el.style.width=ewidth+"px";
	                    }
	                    
			    						if (height!=undefined) el.style.height=height+"px"; 
										}
                }
            },
            
            afterrender: function() {
                var parser, stylesheet;
                switch (this.language.toLowerCase()) {
                    case 'json':
                        parser = ['tokenizejson.js', 'parsejson.js'];
                        stylesheet = this.codeMirrorPath+'/css/jsoncolors.css';
                        break;
                    case 'css':
                        parser = 'parsecss.js';
                        stylesheet = this.codeMirrorPath+'/css/csscolors.css';
                        break;
                    case 'js':
                        parser = ['tokenizejavascript.js', 'parsejavascript.js'];
                        stylesheet = this.codeMirrorPath+'/css/jscolors.css';
                        break;
                    case 'php':
                        parser = [
                        "parsexml.js",
                        "parsecss.js",
                        "tokenizejavascript.js",
                        "parsejavascript.js",
                        "../contrib/php/js/tokenizephp.js",
                        "../contrib/php/js/parsephp.js",
                        "../contrib/php/js/parsephphtmlmixed.js"
                        ];
                        stylesheet = [
                        this.codeMirrorPath+'/css/xmlcolors.css',
                        this.codeMirrorPath+'/css/jscolors.css',
                        this.codeMirrorPath+'/css/csscolors.css',
                        this.codeMirrorPath+'/contrib/php/css/phpcolors.css'
                        ];
                        break;
                    case 'sql':
                        parser = '../contrib/sql/js/parsesql.js';
                        stylesheet = this.codeMirrorPath+'/contrib/sql/css/sqlcolors.css';
                    		break;
                    case 'htm':
                    case 'html':
                        parser = [
                        "parsexml.js",
                        "parsecss.js",
                        "tokenizejavascript.js",
                        "parsejavascript.js",
                    		"parsehtmlmixed.js"
												];
                        stylesheet = [
                        this.codeMirrorPath+'/css/xmlcolors.css',
                        this.codeMirrorPath+'/css/jscolors.css',
                        this.codeMirrorPath+'/css/csscolors.css',
                        this.codeMirrorPath+'/contrib/php/css/phpcolors.css'
                        ];
												break;                    		
                    case 'xml':
                        parser = 'parsexml.js';
                        stylesheet = this.codeMirrorPath+'/css/xmlcolors.css';
                        break;
                    case 'python':
                        parser = ["../contrib/python/js/parsepython.js"];
                        stylesheet = this.codeMirrorPath+'/contrib/python/css/pythoncolors.css';
                    		break;
                    case 'pas':
                        parser = ["../contrib/pascal/js/tokenizepascal.js", "../contrib/pascal/js/parsepascal.js"];
                        stylesheet = this.codeMirrorPath+'/contrib/pascal/css/pascalcolors.css';
                        break;
                    case 'cs':
                        parser = ["../contrib/csharp/js/tokenizecsharp.js", "../contrib/csharp/js/parsecsharp.js"];
                        stylesheet = this.codeMirrorPath+'/contrib/csharp/css/csharpcolors.css';
                        break;
                    default:
                        parser = 'parsedummy.js';
                        stylesheet = '';
                        break;

                }
                var me = this;
                Ext.defer(function() {
                		if (!me.codeEditor)
	                    me.codeEditor = new CodeMirror.fromTextArea(me.id, {
	                    		id: me.id,
	                    		x: me.x,
	                    		y: me.y,
	                    		width: me.width,
	                    		gwidth: 40,
	                        parserfile: parser,
	                        stylesheet: stylesheet,
	                        path: me.codeMirrorPath+'/js/',
	                        textWrapping: false,
	                        readOnly: me.readOnly,
	                        autoMatchParens: true,
	                        lineNumbers: true,
	                        //continuousScanning: true,
	                        passDelay: 100,
	                        hidden: me.hidden,
	                        passTime: 50,
	                        lineNumberDelay: 1000,
	                        lineNumberTime: 50,
	                        iframeClass: 'codemirror-iframe-'+me.id,
	                        content: me.value,
	                        parserConfig: {
	                            json: true
	                        },
	                        lang: me.language.toLowerCase(),
	                        initCallback: function() {
	                            me.initialized = true;
	                            me.fireEvent('initialize', true);
	                            me.initOriginalValue();
	
	                            if (me.initCallBackFn != null)
	                                me.initCallBackFn(me);
	                        }
	                    });
                }, 100);
            }
        });
    },
    
    getValue: function() {
    		var res = this.value;
	      if (this.initialized) {
           res = this.codeEditor.getCode();
        };
				return res; 
    },
    
    isDirty: function() {
    	return !(this.originalValue === this.getValue()); 
		},
		
		initOriginalValue: function() {
      if (this.initialized) {
				this.originalValue = this.getValue(); 
      };
		},
    
    setValue: function(v) {
        this.value = v;
        if (this.initialized) {
          this.codeEditor.setCode(v);
        };
				this.originalValue = this.getValue(); 
//     		this.callParent(arguments);
    },
   
    validate: function() {
        this.getValue();
	      this.callParent(arguments);
    }
});
