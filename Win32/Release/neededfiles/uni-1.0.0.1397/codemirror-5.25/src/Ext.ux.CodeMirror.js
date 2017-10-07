var uniFilesAdded = ""; //list of files already added
 
function checkLoadedFile(filename){
	if (uniFilesAdded.indexOf("["+filename+"]") == -1) {
		uniFilesAdded += "["+filename+"]";
		return false;
	}
	return true;
};

Ext.define('Ext.ux.form.CodeMirrorEx', {
  	extend: 'Ext.form.field.TextArea',
  	xtype: 'ux-codemirrorex',
    language: 'txt',
    codeMirrorPath: null, // should be path to code mirror on your server!
    codeEditor: null,
    CodeMirror: null,
		elRendered: false,
    synMode: '',
		theme: 'default',

    destroy: function() {
      var me = this;

    	me.initialized = false;
      if (me.codeEditor && me.codeEditor.clear) {
          me.codeEditor.clear();
      }
      me.codeEditor = null;
      me.callParent(arguments);
    },
/*    
    loadScript: function(modeName) {
			Ext.Loader.loadScriptFile(
					this.codeMirrorPath + '/mode/' + modeName + '/'+ modeName +'.js',
					function() {},	
					function() {_log('loadScript error: ' + modeName)},	
					this,	true
			);
		},
*/		
    loadScript: function(modeName) {
    	var me = this;
			require([
			  "codemirror", "codemirror/mode/" + modeName + "/" + modeName
			], 
			function(CodeMirror) {
				me.CodeMirror = CodeMirror;
				me.createCodeMirror(me.CodeMirror);
			})
    },

    loadCSS: function(CSSFileName) {
			var fileref = document.createElement("link");
	        fileref.setAttribute("rel", "stylesheet");
	        fileref.setAttribute("type", "text/css");
	        fileref.setAttribute("href", CSSFileName);
	
	    if (typeof fileref != "undefined")
      	document.getElementsByTagName("head")[0].appendChild(fileref);
    },
		
		createCodeMirror: function(CodeMirror) {
      var me = this;
      
			if (!me.elRendered) return;
      if (me.codeEditor) return;
      
	    var codeEditor = new CodeMirror.fromTextArea(me.inputEl.dom, {
	    		id: me.id + '_codemirror' ,
	    		width: me.width,
	        value: (me.value || ''),
	        readOnly: !!me.readOnly,
	        lineNumbers: true,
	        tabSize: 4,
	        mode: me.synMode,
					theme: me.theme,
	        indentUnit: 4
	    });
      codeEditor.setSize(me.width, me.height);

      me.initialized = true;
      me.codeEditor = (codeEditor || null);
		},
		
		configMode: function() {
      switch (this.language.toLowerCase()) {
      	case 'pas':
				case 'pascal':
					this.theme = 'borland';
					if (!checkLoadedFile(this.theme)) {
						this.loadCSS(this.codeMirrorPath + '/theme/borland.css');
					};
					this.synMode = 'text/x-pascal';
					this.loadScript('objectpascal'); 
					break;

				case 'ansipascal':
					this.synMode = 'text/x-pascal';
					this.loadScript('pascal'); 
					break;
					
				case 'js':
					this.synMode = 'text/javascript';
					this.loadScript('javascript');
					break;

				case 'java':
					this.synMode = 'text/javascript';
					this.loadScript('javascript');
					break;
					
				case 'python':
					this.synMode = 'text/x-python';
					this.loadScript('python');
					break

				case 'vb':
					this.synMode = 'text/x-vb';
					this.loadScript('vb');
					break;
					
				case 'cs':
					this.synMode = 'text/x-csharp';
					this.loadScript('clike');
					break

				case 'xml':
					this.synMode = 'text/xml';
					this.loadScript('xml');
					break;

				case 'perl':
					this.synMode = 'text/x-perl';
					this.loadScript('perl');
					break;

				case 'ruby':
					this.synMode = 'text/x-ruby';
					this.loadScript('ruby');
					break;

				case 'css':
					this.synMode = 'text/css';
					this.loadScript('css');
					break;
					
				case 'sql':
					this.synMode = 'text/x-sql';
					this.loadScript('sql'); 
					break;

				case 'php':
					this.synMode = 'application/x-httpd-php';
					this.loadScript('php'); 
					break;

				case 'html':
					this.synMode = 'text/html';
					this.loadScript('htmlmixed'); 
					break;

				case 'txt':
        default:
					this.synMode = 'text/x-textile';
					this.loadScript('textile'); 
					break;

      };
		},		

    initComponent: function() {
      this.initialized = false;
			if (this.codeMirrorPath === null) {
      	throw 'Ext.ux.form.CodeMirror: codeMirrorPath required';
      }

			require.config({
			  packages: [{
			    name: "codemirror",
			    location: this.codeMirrorPath, 
			    main: "lib/codemirror"
			  }]
			});        
     
      this.callParent(arguments);
			this.configMode(this.language);
			
      this.on({
        resize: function(ta, width, height) {
        	if (this.codeEditor) {
        		this.codeEditor.setSize(width, height);
					}
        },
        
      	boxready: function() {
		      var me = this;
					me.elRendered = true;
					if (me.CodeMirror) {
						me.createCodeMirror(me.CodeMirror);
					}
	    	}
			})
		},

    getValue: function() {
      if (this.initialized) {
         return this.codeEditor.getValue();
      };
			return this.value; 
    },

    setValue: function(v) {
			this.value = v;
			if (this.initialized) {
				this.codeEditor.setValue(v);
			};
			this.callParent(arguments);
    },

    validate: function() {
        this.getValue();
	      this.callParent(arguments);
    },
    
    isDirty: function() {
    	return !(this.originalValue === this.getValue()); 
		},
		
    setReadOnly: function(readOnly) {
        var me = this;

        readOnly = !!readOnly;
        me[readOnly ? 'addCls' : 'removeCls'](me.readOnlyCls);
        me.readOnly = readOnly;
        if (me.codeEditor) {
            me.codeEditor.setReadOnly(readOnly);
        }
        me.fireEvent('writeablechange', me, readOnly);
    }
});
