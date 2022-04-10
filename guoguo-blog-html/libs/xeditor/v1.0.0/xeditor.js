//jQuery插件
+function($)
{
    var xEditor = function(element, option)
    {
        this.$range = null;
        this.$plugsBarButtonSelected = null;
        this.$element = element;
        this.$defaults = {
            //文件上传路径
            uploadUrl: "http://127.0.0.1:8000/api/upload",
            //编辑器插件集
            plugs: [
                {
                    index: 0, //组件编号
                    title: "字体", //组件名称
                    icon: ["ri-text", "ri-text"], //组件图标
                    command: "fontName", //组件命令
                    value: "微软雅黑", //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）
                        name: "select", //组件扩展类别名称
                        parameters: {
                            preSet: [
                                {name: "微软雅黑", value: "微软雅黑"},
                                {name: "黑体", value: "黑体"},
                                {name: "宋体", value: "宋体"},
                                {name: "Arial", value: "Arial"},
                            ], //组件扩展参数列表
                        }
                    },
                },
                {
                    index: 1, //组件编号
                    title: "字号", //组件名称
                    icon: ["ri-font-size", "ri-font-size"], //组件图标
                    command: "fontSize", //组件命令
                    value: 1, //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）
                        name: "select", //组件扩展类别名称
                        parameters: {
                            preSet: [
                                {name: 1, value: 1},
                                {name: 2, value: 2},
                                {name: 3, value: 3},
                                {name: 4, value: 4},
                                {name: 5, value: 5},
                                {name: 6, value: 6},
                                {name: 7, value: 7},
                            ], //组件扩展参数列表
                        },
                    },
                },
                {
                    index: 2, //组件编号
                    title: "字体颜色", //组件名称
                    icon: ["ri-font-color", "ri-font-color"], //组件图标
                    command: "foreColor", //组件命令
                    value: "#194d33", //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）
                        name: "color", //组件扩展类别名称
                        parameters: { //组件扩展参数列表
                            mousedown: false, //鼠标是否按下
                            color: { //颜色信息
                                h: 0,
                                s: "100%",
                                l: "50%",
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 1,
                            },
                            target: null, //控件对象
                            x:230, //色盘选点横坐标
                            y:45, //色盘选点纵坐标
                            preSet: [ //预设颜色
                                {r: 208, g: 2, b: 27, a: 1},
                                {r: 245, g: 166, b: 35, a: 1},
                                {r: 248, g: 231, b: 28, a: 1},
                                {r: 139, g: 87, b: 42, a: 1},
                                {r: 126, g: 211, b: 33, a: 1},
                                {r: 65, g: 117, b: 5, a: 1},
                                {r: 189, g: 16, b: 224, a: 1},
                                {r: 144, g: 19, b: 254, a: 1},
                                {r: 74, g: 144, b: 226, a: 1},
                                {r: 80, g: 227, b: 194, a: 1},
                                {r: 184, g: 233, b: 134, a: 1},
                                {r: 0, g: 0, b: 0, a: 1},
                                {r: 74, g: 74, b: 74, a: 1},
                                {r: 155, g: 155, b: 155, a: 1},
                                {r: 255, g: 255, b: 255, a: 1},
                                {r: 0, g: 0, b: 0, a: 0},
                            ],
                        },
                    },
                },
                {
                    index: 3, //组件编号
                    title: "背景颜色", //组件名称
                    icon: ["ri-input-method-fill", "ri-input-method-fill"], //组件图标
                    command: "hiliteColor", //组件命令
                    value: "#194d33", //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）
                        name: "color", //组件扩展类别名称
                        parameters: { //组件扩展参数列表
                            mousedown: false, //鼠标是否按下
                            color: { //颜色信息
                                h: 0,
                                s: "100%",
                                l: "50%",
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 1,
                            },
                            target: null, //控件对象
                            x:230, //色盘选点横坐标
                            y:45, //色盘选点纵坐标
                            preSet: [ //预设颜色
                                {r: 208, g: 2, b: 27, a: 1},
                                {r: 245, g: 166, b: 35, a: 1},
                                {r: 248, g: 231, b: 28, a: 1},
                                {r: 139, g: 87, b: 42, a: 1},
                                {r: 126, g: 211, b: 33, a: 1},
                                {r: 65, g: 117, b: 5, a: 1},
                                {r: 189, g: 16, b: 224, a: 1},
                                {r: 144, g: 19, b: 254, a: 1},
                                {r: 74, g: 144, b: 226, a: 1},
                                {r: 80, g: 227, b: 194, a: 1},
                                {r: 184, g: 233, b: 134, a: 1},
                                {r: 0, g: 0, b: 0, a: 1},
                                {r: 74, g: 74, b: 74, a: 1},
                                {r: 155, g: 155, b: 155, a: 1},
                                {r: 255, g: 255, b: 255, a: 1},
                                {r: 0, g: 0, b: 0, a: 0},
                            ],
                        },
                    },
                },
                {
                    index: 4, //组件编号
                    title: "粗体", //组件名称
                    icon: ["ri-bold", "ri-bold"], //组件图标
                    command: "bold", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 5, //组件编号
                    title: "斜体", //组件名称
                    icon: ["ri-italic", "ri-italic"], //组件图标
                    command: "italic", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 6, //组件编号
                    title: "下划线", //组件名称
                    icon: ["ri-underline", "ri-underline"], //组件图标
                    command: "underline", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 7, //组件编号
                    title: "上标", //组件名称
                    icon: ["ri-superscript", "ri-superscript"], //组件图标
                    command: "superscript", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 8, //组件编号
                    title: "下标", //组件名称
                    icon: ["ri-subscript", "ri-subscript"], //组件图标
                    command: "subscript", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 9, //组件编号
                    title: "标签", //组件名称
                    icon: ["ri-price-tag-3-line", "ri-price-tag-3-line"], //组件图标
                    command: "tag", //组件命令
                    value: null, //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 10, //组件编号
                    title: "引用", //组件名称
                    icon: ["ri-double-quotes-l", "ri-double-quotes-l"], //组件图标
                    command: "quote", //组件命令
                    value: null, //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 11, //组件编号
                    title: "左缩进", //组件名称
                    icon: ["ri-indent-decrease", "ri-indent-decrease"], //组件图标
                    command: "outdent", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 12, //组件编号
                    title: "右缩进", //组件名称
                    icon: ["ri-indent-increase", "ri-indent-increase"], //组件图标
                    command: "indent", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 13, //组件编号
                    title: "水平线", //组件名称
                    icon: ["ri-separator", "ri-separator"], //组件图标
                    command: "insertHorizontalRule", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 14, //组件编号
                    title: "代码段", //组件名称
                    icon: ["ri-code-view", "ri-code-view"], //组件图标
                    command: "code", //组件命令
                    value: "text/x-php", //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）
                        name: "select", //组件扩展类别名称
                        parameters: {
                            preSet: [
                                {name: "APL", value:"text/apl"},
                                {name: "PGP", value:"application/pgp"},
                                {name: "ASN.1", value:"text/x-ttcn-asn"},
                                {name: "Asterisk", value:"text/x-asterisk"},
                                {name: "Brainfuck", value:"text/x-brainfuck"},
                                {name: "C", value:"text/x-csrc"},
                                {name: "C++", value:"text/x-c++src"},
                                {name: "Cobol", value:"text/x-cobol"},
                                {name: "C#", value:"text/x-csharp"},
                                {name: "Clojure", value:"text/x-clojure"},
                                {name: "ClojureScript", value:"text/x-clojurescript"},
                                {name: "Closure Stylesheets (GSS)", value:"text/x-gss"},
                                {name: "CMake", value:"text/x-cmake"},
                                {name: "CoffeeScript", value:"text/x-coffeescript"},
                                {name: "Common Lisp", value:"text/x-common-lisp"},
                                {name: "Cypher", value:"application/x-cypher-query"},
                                {name: "Cython", value:"text/x-cython"},
                                {name: "Crystal", value:"text/x-crystal"},
                                {name: "CSS", value:"text/css"},
                                {name: "CQL", value:"text/x-cassandra"},
                                {name: "D", value:"text/x-d"},
                                {name: "Dart", value:"text/x-dart"},
                                {name: "diff", value:"text/x-diff"},
                                {name: "Django", value:"text/x-django"},
                                {name: "Dockerfile", value:"text/x-dockerfile"},
                                {name: "DTD", value:"application/xml-dtd"},
                                {name: "Dylan", value:"text/x-dylan"},
                                {name: "EBNF", value:"text/x-ebnf"},
                                {name: "ECL", value:"text/x-ecl"},
                                {name: "edn", value:"application/edn"},
                                {name: "Eiffel", value:"text/x-eiffel"},
                                {name: "Elm", value:"text/x-elm"},
                                {name: "Embedded Javascript", value:"application/x-ejs"},
                                {name: "Embedded Ruby", value:"application/x-erb"},
                                {name: "Erlang", value:"text/x-erlang"},
                                {name: "Esper", value:"text/x-esper"},
                                {name: "Factor", value:"text/x-factor"},
                                {name: "FCL", value:"text/x-fcl"},
                                {name: "Forth", value:"text/x-forth"},
                                {name: "Fortran", value:"text/x-fortran"},
                                {name: "F#", value:"text/x-fsharp"},
                                {name: "Gas", value:"text/x-gas"},
                                {name: "Gherkin", value:"text/x-feature"},
                                {name: "GitHub Flavored Markdown", value:"text/x-gfm"},
                                {name: "Go", value:"text/x-go"},
                                {name: "Groovy", value:"text/x-groovy"},
                                {name: "HAML", value:"text/x-haml"},
                                {name: "Haskell", value:"text/x-haskell"},
                                {name: "Haskell (Literate)", value:"text/x-literate-haskell"},
                                {name: "Haxe", value:"text/x-haxe"},
                                {name: "HXML", value:"text/x-hxml"},
                                {name: "ASP.NET", value:"application/x-aspx"},
                                {name: "HTML", value:"text/html"},
                                {name: "HTTP", value:"message/http"},
                                {name: "IDL", value:"text/x-idl"},
                                {name: "Pug", value:"text/x-pug"},
                                {name: "Java", value:"text/x-java"},
                                {name: "Java Server Pages", value:"application/x-jsp"},
                                {name: "JavaScript", value:"text/javascript"},
                                {name: "JSON", value:"application/x-json"},
                                {name: "JSON-LD", value:"application/ld+json"},
                                {name: "JSX", value:"text/jsx"},
                                {name: "Jinja2", value:"text/jinja2"},
                                {name: "Julia", value:"text/x-julia"},
                                {name: "Kotlin", value:"text/x-kotlin"},
                                {name: "LESS", value:"text/x-less"},
                                {name: "LiveScript", value:"text/x-livescript"},
                                {name: "Lua", value:"text/x-lua"},
                                {name: "Markdown", value:"text/x-markdown"},
                                {name: "mIRC", value:"text/mirc"},
                                {name: "MariaDB SQL", value:"text/x-mariadb"},
                                {name: "Mathematica", value:"text/x-mathematica"},
                                {name: "Modelica", value:"text/x-modelica"},
                                {name: "MUMPS", value:"text/x-mumps"},
                                {name: "MS SQL", value:"text/x-mssql"},
                                {name: "mbox", value:"application/mbox"},
                                {name: "MySQL", value:"text/x-mysql"},
                                {name: "Nginx", value:"text/x-nginx-conf"},
                                {name: "NSIS", value:"text/x-nsis"},
                                {name: "NTriples", value:"text/n-triples",},
                                {name: "Objective-C", value:"text/x-objectivec"},
                                {name: "OCaml", value:"text/x-ocaml"},
                                {name: "Octave", value:"text/x-octave"},
                                {name: "Oz", value:"text/x-oz"},
                                {name: "Pascal", value:"text/x-pascal"},
                                {name: "PEG.js", value:"null"},
                                {name: "Perl", value:"text/x-perl"},
                                {name: "PHP", value:"text/x-php"},
                                {name: "Pig", value:"text/x-pig"},
                                {name: "Plain Text", value:"text/plain"},
                                {name: "PLSQL", value:"text/x-plsql"},
                                {name: "PostgreSQL", value:"text/x-pgsql"},
                                {name: "PowerShell", value:"application/x-powershell"},
                                {name: "Properties files", value:"text/x-properties"},
                                {name: "ProtoBuf", value:"text/x-protobuf"},
                                {name: "Python", value:"text/x-python"},
                                {name: "Puppet", value:"text/x-puppet"},
                                {name: "Q", value:"text/x-q"},
                                {name: "R", value:"text/x-rsrc"},
                                {name: "reStructuredText", value:"text/x-rst"},
                                {name: "RPM Changes", value:"text/x-rpm-changes"},
                                {name: "RPM Spec", value:"text/x-rpm-spec"},
                                {name: "Ruby", value:"text/x-ruby"},
                                {name: "Rust", value:"text/x-rustsrc"},
                                {name: "SAS", value:"text/x-sas"},
                                {name: "Sass", value:"text/x-sass"},
                                {name: "Scala", value:"text/x-scala"},
                                {name: "Scheme", value:"text/x-scheme"},
                                {name: "SCSS", value:"text/x-scss"},
                                {name: "Shell", value:"text/x-sh"},
                                {name: "Sieve", value:"application/sieve"},
                                {name: "Slim", value:"text/x-slim"},
                                {name: "Smalltalk", value:"text/x-stsrc"},
                                {name: "Smarty", value:"text/x-smarty"},
                                {name: "Solr", value:"text/x-solr"},
                                {name: "SML", value:"text/x-sml"},
                                {name: "Soy", value:"text/x-soy"},
                                {name: "SPARQL", value:"application/sparql-query"},
                                {name: "Spreadsheet", value:"text/x-spreadsheet"},
                                {name: "SQL", value:"text/x-sql"},
                                {name: "SQLite", value:"text/x-sqlite"},
                                {name: "Squirrel", value:"text/x-squirrel"},
                                {name: "Stylus", value:"text/x-styl"},
                                {name: "Swift", value:"text/x-swift"},
                                {name: "sTeX", value:"text/x-stex"},
                                {name: "LaTeX", value:"text/x-latex"},
                                {name: "SystemVerilog", value:"text/x-systemverilog"},
                                {name: "Tcl", value:"text/x-tcl"},
                                {name: "Textile", value:"text/x-textile"},
                                {name: "TiddlyWiki ", value:"text/x-tiddlywiki"},
                                {name: "Tiki wiki", value:"text/tiki"},
                                {name: "TOML", value:"text/x-toml"},
                                {name: "Tornado", value:"text/x-tornado"},
                                {name: "troff", value:"text/troff"},
                                {name: "TTCN", value:"text/x-ttcn"},
                                {name: "TTCN_CFG", value:"text/x-ttcn-cfg"},
                                {name: "Turtle", value:"text/turtle"},
                                {name: "TypeScript", value:"application/typescript"},
                                {name: "TypeScript-JSX", value:"text/typescript-jsx"},
                                {name: "Twig", value:"text/x-twig"},
                                {name: "Web IDL", value:"text/x-webidl"},
                                {name: "VB.NET", value:"text/x-vb"},
                                {name: "VBScript", value:"text/vbscript"},
                                {name: "Velocity", value:"text/velocity"},
                                {name: "Verilog", value:"text/x-verilog"},
                                {name: "VHDL", value:"text/x-vhdl"},
                                {name: "Vue.js Component", value:"text/x-vue"},
                                {name: "XML", value:"text/xml"},
                                {name: "XQuery", value:"application/xquery"},
                                {name: "Yacas", value:"text/x-yacas"},
                                {name: "YAML", value:"text/x-yaml"},
                                {name: "Z80", value:"text/x-z80"},
                                {name: "mscgen", value:"text/x-mscgen"},
                                {name: "xu", value:"text/x-xu"},
                                {name: "msgenny", value:"text/x-msgenny"},
                            ], //组件扩展参数列表
                            target: {
                                xEditorCode: [],
                            }, //控件对象
                        },
                    },
                },
                {
                    index: 15, //组件编号
                    title: "图片", //组件名称
                    icon: ["ri-image-line", "ri-image-line"], //组件图标
                    command: "image", //组件命令
                    value: "", //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）
                        name: "image", //组件扩展类别名称
                        parameters: {
                            preSet: [
                                {name: 1, value: 1},
                                {name: 2, value: 2},
                                {name: 3, value: 3},
                                {name: 4, value: 4},
                                {name: 5, value: 5},
                                {name: 6, value: 6},
                                {name: 7, value: 7},
                            ], //组件扩展参数列表
                            target: null, //控件对象
                        },
                    },
                },
                {
                    index: 16, //组件编号
                    title: "有序列表", //组件名称
                    icon: ["ri-list-ordered", "ri-list-ordered"], //组件图标
                    command: "insertOrderedList", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 17, //组件编号
                    title: "无序列表", //组件名称
                    icon: ["ri-list-unordered", "ri-list-unordered"], //组件图标
                    command: "insertUnorderedList", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 18, //组件编号
                    title: "两端对齐", //组件名称
                    icon: ["ri-align-justify", "ri-align-justify"], //组件图标
                    command: "justifyFull", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 19, //组件编号
                    title: "左对齐", //组件名称
                    icon: ["ri-align-left", "ri-align-left"], //组件图标
                    command: "justifyLeft", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 20, //组件编号
                    title: "居中对齐", //组件名称
                    icon: ["ri-align-center", "ri-align-center"], //组件图标
                    command: "justifyCenter", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 21, //组件编号
                    title: "右对齐", //组件名称
                    icon: ["ri-align-right", "ri-align-right"], //组件图标
                    command: "justifyRight", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 22, //组件编号
                    title: "清除格式", //组件名称
                    icon: ["ri-format-clear", "ri-format-clear"], //组件图标
                    command: "removeFormat", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 23, //组件编号
                    title: "添加链接", //组件名称
                    icon: ["ri-link-m", "ri-link-m"], //组件图标
                    command: "createLink", //组件命令
                    value: "", //组件数值
                    extend: { //组件扩展（提供用户输入命令的窗口）
                        name: "input", //组件扩展类别名称
                        parameters: {
                            preSet: [], //组件扩展参数列表
                            target: null, //控件对象
                        },
                    },
                },
                {
                    index: 24, //组件编号
                    title: "清除链接", //组件名称
                    icon: ["ri-link-unlink-m", "ri-link-unlink-m"], //组件图标
                    command: "unlink", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 25, //组件编号
                    title: "预览", //组件名称
                    icon: ["ri-eye-line", "ri-eye-off-line"], //组件图标
                    command: "preview", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
                {
                    index: 26, //组件编号
                    title: "全屏", //组件名称
                    icon: ["ri-fullscreen-line", "ri-fullscreen-exit-line"], //组件图标
                    command: "fullScreen", //组件命令
                    value: null, //组件数值，如果null，则不需要参数
                    extend: { //组件扩展（提供用户输入命令的窗口）

                    },
                },
            ],
        };
        this.$option = $.extend(true, this.$defaults, option);
        this.$init(this);
    };
    xEditor.prototype = {
        //粘贴事件（主要处理粘贴图片）
        $xEditorContentPaste: function(_this, event)
        {
            // event.preventDefault();
            var selection = window.getSelection();
            if(this.$range = selection.getRangeAt(0))
            {
                if(event.clipboardData || event.originalEvent)
                {
                    var clipboardData = (event.clipboardData || event.originalEvent.clipboardData);
                    if(clipboardData.items)
                    {
                        var items = clipboardData.items;
                        var len = items.length;
                        var blob = null;
                        for(var i = 0; i < len; i++)
                        {
                            if(items[i].type.indexOf("image") !== -1)
                            {
                                blob = items[i].getAsFile();
                                if(blob !== null)
                                {
                                    var url = _this.$xEditorPlugUpload(_this, blob, "file");
                                    var image = new Image();
                                    image.src = url;
                                    image.onload = function()
                                    {
                                        // document.execCommand("insertHTML", false, '<img style="width: ' + (image.width / window.devicePixelRatio) + 'px; height: ' + (image.height / window.devicePixelRatio) + 'px;" src="' + url + '">');
                                        document.execCommand("insertHTML", false, '<img style="width: ' + (image.width / window.devicePixelRatio) + 'px; max-width: 100%; height: auto;" src="' + url + '">');
                                    };
                                }
                            }
                        }
                    }
                }
            }
        },
        //图片上传类
        $xEditorPlugImageInit: function(_this, extend, item)
        {
            var image = $('<div style="text-align: justify; height: 180px;"></div>');
            $(extend).children().eq(1).append(image);
            item.extend.parameters.target = {
                image: $('<div style="display: inline-block; float: left; width: 180px; height: 180px; border: 1px dashed #dcdee2; background-position: center; background-repeat: no-repeat; background-size: cover;"></div>'),
                previewButton: $('<button style="display: inline-block; float: right; width: 50px; height: 20px; background-color: #19be6b; color: #fff; font-size: 12px; line-height: 20px; border: none; cursor: pointer; outline: none;">浏览</button>'),
                file: $('<input hidden type="file">'),
            };
            $(image).append(item.extend.parameters.target.image);
            $(image).append(item.extend.parameters.target.previewButton);
            $(image).append(item.extend.parameters.target.file);
            $(item.extend.parameters.target.previewButton).click(function(event){
                $(item.extend.parameters.target.file).click();
            });
            $(item.extend.parameters.target.file).change(function(event){
                var fileReader = new FileReader();
                fileReader.readAsDataURL(this.files[0]);
                fileReader.onload = function(e)
                {
                    $(item.extend.parameters.target.image).css(
                        {
                            backgroundImage: "url(" + e.target.result + ")",
                        }
                    );
                }
            });
        },
        //单文本
        $xEditorPlugInputInit: function(_this, extend, item)
        {
            var input = $('<input style="width: 100%; height: 24px; border-radius: 2px; border: 1px solid #dcdee2; color: #2b85e4; outline: none; background-color: #fff;">');
            $(extend).children().eq(1).append(input);
            $(input).change(function(event){
                var index = $(this).closest("li").index();
                _this.$option.plugs[index]["value"] = $(this).val();
            });
        },
        //预设颜色
        $xEditorPlugColorTargetPreSetChildren: function(_this, item, event)
        {
            var color = $(event.target).css("backgroundColor").replace(")", "").split("(")[1].split(",").map(function(item){ return parseInt(item); });
            item.extend.parameters.color.r = color[0];
            item.extend.parameters.color.g = color[1];
            item.extend.parameters.color.b = color[2];
            if(color.length > 3)
            {
                item.extend.parameters.color.a = color[3];
            }
            else
            {
                item.extend.parameters.color.a = 1;
            }
            _this.$xEditorPlugColorOutput(_this, item, false);
        },
        //透明条
        $xEditorPlugColorTargetBarAreaAlpha: function(_this, item, event)
        {
            if(
                event.offsetX >= 0 &&
                event.offsetX <= $(item.extend.parameters.target.barAreaAlpha).width() + 5
            )
            {
                $(item.extend.parameters.target.barAreaAlphaDrag).css(
                    {
                        left: event.offsetX - 2,
                    }
                );
                var x = event.offsetX;
                if(x < 0)
                {
                    x = 0;
                }
                if(x > $(item.extend.parameters.target.barAreaAlpha).width())
                {
                    x = $(item.extend.parameters.target.barAreaAlpha).width();
                }
                item.extend.parameters.color.a = 1 - x / $(item.extend.parameters.target.barAreaAlpha).width();
                _this.$xEditorPlugColorOutput(_this, item, true);
            }
        },
        //颜色条
        $xEditorPlugColorTargetBarAreaColor: function(_this, item, event)
        {
            if(
                event.offsetX >= 0 &&
                event.offsetX <= $(item.extend.parameters.target.barAreaColor).width() + 4
            )
            {
                $(item.extend.parameters.target.barAreaColorDrag).css(
                    {
                        left: event.offsetX + 5,
                    }
                );
                var x = event.offsetX;
                if(x < 0)
                {
                    x = 0;
                }
                if(x > $(item.extend.parameters.target.barAreaColor).width())
                {
                    x = $(item.extend.parameters.target.barAreaColor).width();
                }
                item.extend.parameters.color.h = x * 360 / $(item.extend.parameters.target.barAreaColor).width();
                _this.$xEditorPlugColorOutput(_this, item, true);
            }
        },
        //颜色面板
        $xEditorPlugColorTargetPanel: function(_this, item, event)
        {
            if(
                event.offsetX >= 0 &&
                event.offsetX <= $(item.extend.parameters.target.panel).width() &&
                event.offsetY >= 0 &&
                event.offsetY <= $(item.extend.parameters.target.panel).height()
            )
            {
                $(item.extend.parameters.target.panelDrag).css(
                    {
                        left: event.offsetX + 3,
                        top: event.offsetY + 34,
                    }
                );
                item.extend.parameters.x = event.offsetX + 3;
                item.extend.parameters.y = event.offsetY + 34;
                _this.$xEditorPlugColorOutput(_this, item, true);
            }
        },
        //颜色输出
        $xEditorPlugColorOutput: function(_this, item, computer)
        {
            if(computer)
            {
                var rgb = tinycolor(
                    {
                        h: item.extend.parameters.color.h,
                        s: (item.extend.parameters.x - $(item.extend.parameters.target.panel).position().left) * 100 / $(item.extend.parameters.target.panel).width(),
                        v: (1 - (item.extend.parameters.y - $(item.extend.parameters.target.panel).position().top) / $(item.extend.parameters.target.panel).height()) * 100,
                    }
                ).toRgb();
                item.extend.parameters.color.r = rgb.r;
                item.extend.parameters.color.g = rgb.g;
                item.extend.parameters.color.b = rgb.b;
            }
            $(item.extend.parameters.target.panel).css(
                {
                    backgroundColor: "hsl(" + [item.extend.parameters.color.h, item.extend.parameters.color.s, item.extend.parameters.color.l].join(",") + ")",
                }
            );
            var index = $(this).closest("li").index();
            if(item.extend.parameters.color.r == 0 && item.extend.parameters.color.g == 0 && item.extend.parameters.color.b == 0 && item.extend.parameters.color.a == 0)
            {
                $(item.extend.parameters.target.barSelected).css(
                    {
                        backgroundColor:"",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC")',
                    }
                );
                item["value"] = "rgba(0,0,0,0)";
            }
            else
            {
                $(item.extend.parameters.target.barSelected).css(
                    {
                        backgroundImage: "",
                        backgroundPosition: "",
                        backgroundSize: "",
                        backgroundColor: "rgba(" + [item.extend.parameters.color.r, item.extend.parameters.color.g, item.extend.parameters.color.b, item.extend.parameters.color.a].join(",") + ")",
                    }
                );
                item["value"] = "rgba(" + [item.extend.parameters.color.r, item.extend.parameters.color.g, item.extend.parameters.color.b, item.extend.parameters.color.a].join(",") + ")";
            }
        },
        //plug:color
        $xEditorPlugColorInit: function(_this, extend, item)
        {
            var color = $('<div></div>');
            var panel = $('<div style="outline: 1px solid #dcdee2;height: 238px; width: 238px;cursor: pointer;background: linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, transparent);background-color: hsl(0, 100%, 50%);"></div>');
            var panelDrag = $('<div style="position: absolute;width: 6px;height: 6px;border: 1px solid #fff;border-radius: 100%;"></div>');
            panel.append(panelDrag);
            color.append(panel);




            var bar = $('<div style="height: 30px;padding: 20px 0px;text-align: center;"></div>');
            var barArea = $('<div style="display: inline-block;width: 180px;height: 24px;float: left;"></div>');
            var barAreaColor = $('<div style="outline: 1px solid #dcdee2;height: 8px;width: 206px;background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);"></div>');
            var barAreaColorDrag = $('<div style="cursor: ew-resize;position: absolute;margin-top: -2px;width: 4px;height: 10px;border: 1px solid #dcdee2;background-color: #fff;"></div>');

            $(barAreaColor).append(barAreaColorDrag);
            var barAreaImage = $('<div style="height: 8px;width: 206px;background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC\');margin-top: 8px;"></div>');
            var barAreaAlpha = $('<div style="outline: 1px solid #dcdee2;position: absolute;height: 8px;width: 206px;margin-top: -8px;background: linear-gradient(to right, rgb(141, 121, 49) 0%, rgba(141, 121, 49, 0) 100%);"></div>');
            var barAreaAlphaDrag = $('<div style="cursor: ew-resize;position: absolute;margin-top: -2px;width: 4px;height: 10px;border: 1px solid #dcdee2;background-color: #fff;"></div>');
            $(barAreaAlpha).append(barAreaAlphaDrag);


            $(barArea).append(barAreaColor);
            $(barArea).append(barAreaImage);
            $(barArea).append(barAreaAlpha);



            var barSelected = $('<div style="outline: 1px solid #dcdee2;display: inline-block;float: right;width: 24px;height: 24px;background-color: blue;right: 0px;"></div>');
            $(bar).append(barArea);
            $(bar).append(barSelected);
            var preSet = $('<div style="text-align: justify;width: 248px;font-size: 0px;"></div>');


            item.extend.parameters.preSet.forEach(function(option, i){
                if(++ i != item.extend.parameters.preSet.length)
                {
                    $(preSet).append('<div style="outline: 1px solid #dcdee2;margin-bottom: 10px; margin-right: 12px;display: inline-block;width: 19px;height: 20px;background-color: rgba(' + option.r + ',' + option.g + ',' + option.b + ',' + option.a + ')"></div>');
                }
                else
                {
                    $(preSet).append('<div style="outline: 1px solid #dcdee2;margin-bottom: 10px; margin-right: 12px;display: inline-block;width: 19px;height: 20px;background-color: rgba(' + option.r + ',' + option.g + ',' + option.b + ',' + option.a + ');background-position: center;background-size: cover;background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC\');"></div>');
                }
            });




            $(extend).children().eq(1).append(color);
            $(extend).children().eq(1).append(bar);
            $(extend).children().eq(1).append(preSet);
            item.extend.parameters.target = {
                panel: $(panel),
                panelDrag: $(panelDrag),
                barAreaColor: $(barAreaColor),
                barAreaColorDrag: $(barAreaColorDrag),
                barAreaAlpha: $(barAreaAlpha),
                barAreaAlphaDrag: $(barAreaAlphaDrag),
                barSelected: $(barSelected),
                preSet: $(preSet),
            };
            _this.$xEditorPlugColorOutput(_this, item, true);
            $(item.extend.parameters.target.panelDrag).css(
                {
                    left: item.extend.parameters.x + "px",
                    top: item.extend.parameters.y + "px",
                }
            );
            //颜色面板点击事件
            $(item.extend.parameters.target.panel).click(function(event){
                if(this == event.target)
                {
                    _this.$xEditorPlugColorTargetPanel(_this, item, event);
                }
            });
            //颜色条点击事件
            $(item.extend.parameters.target.barAreaColor).click(function(event){
                if(this == event.target)
                {
                    _this.$xEditorPlugColorTargetBarAreaColor(_this, item, event);
                }
            });
            //透明条点击事件
            $(item.extend.parameters.target.barAreaAlpha).click(function(event){
                if(this == event.target)
                {
                    _this.$xEditorPlugColorTargetBarAreaAlpha(_this, item, event);
                }
            });
            //预设颜色点击事件
            $(item.extend.parameters.target.preSet).children().click(function(event){
                if(this == event.target)
                {
                    _this.$xEditorPlugColorTargetPreSetChildren(_this, item, event);
                }
            });
            $(document).mousedown(function(event){
                item.extend.parameters.mousedown = true;
                $(item.extend.parameters.target.panel).mousemove(function(event){
                    if(item.extend.parameters.mousedown && this == event.target)
                    {
                        _this.$xEditorPlugColorTargetPanel(_this, item, event);
                    }
                });
                $(item.extend.parameters.target.barAreaColor).mousemove(function(event){
                    if(item.extend.parameters.mousedown && this == event.target)
                    {
                        _this.$xEditorPlugColorTargetBarAreaColor(_this, item, event);
                    }
                });
                $(item.extend.parameters.target.barAreaAlpha).mousemove(function(event){
                    if(item.extend.parameters.mousedown && this == event.target)
                    {
                        _this.$xEditorPlugColorTargetBarAreaAlpha(_this, item, event);
                    }
                });
            }).mouseup(function(event){
                item.extend.parameters.mousedown = false;
            });
        },
        $xEditorPlugUpload: function(_this, file, type)
        {
            var url;
            var formData = new FormData();
            formData.append(type, file);
            $.ajax(
                {
                    type: "POST",
                    url: _this.$option.uploadUrl,
                    data: formData,
                    processData: false,
                    contentType: false,
                    async: false,
                    success: function(e)
                    {
                        url = e;
                    },
                    error: function(e)
                    {
                        console.log(e);
                    }
                }
            );
            return url;
        },
        //组件确定按钮点击事件
        $plugsBarConfirmButtonClick: function(_this, target, index)
        {
            //如果存在选区
            if(_this.$range)
            {
                var selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(_this.$range);
                //解析命令并执行
                switch(_this.$option.plugs[index]["command"])
                {
                    //代码
                    case "code":
                        var id = (new Date()).getTime() + Math.random().toString().substring(2);
                        document.execCommand("insertHTML", false, '<div class="xEditorCode" id="' + id + '" xEditorCodeTheme="eclipse" xEditorCodeMode="' + _this.$option.plugs[index]["value"] + '"></div>');
                        CodeMirror(document.getElementById(id), {
                            mode: _this.$option.plugs[index]["value"],
                            lineNumbers: true,
                            lineWrapping: false,
                            theme: "eclipse",
                            foldGutter: true,
                            gutters: [
                                'CodeMirror-linenumbers',
                                'CodeMirror-foldgutter',
                            ],
                            selectionStart: 'number',
                            selectionEnd: 'number',
                            smartIndent: true,
                            indentWithTabs: true,
                            extraKeys: {
                                "Ctrl-Space": "autocomplete",
                            },
                            showCursorWhenSelecting: true,
                            tabSize: 4,
                            indentUnit: 4,
                        });
                        break;
                    //图片
                    case "image":
                        var url = _this.$xEditorPlugUpload(_this, _this.$option.plugs[index]["extend"]["parameters"]["target"]["file"][0].files[0], "file");
                        if(url)
                        {
                            var image = new Image();
                            image.src = url;
                            image.onload = function()
                            {
                                // document.execCommand("insertHTML", false, '<img style="width: ' + (image.width / window.devicePixelRatio) + 'px; height: ' + (image.height / window.devicePixelRatio) + 'px;" src="' + url + '">');
                                document.execCommand("insertHTML", false, '<img style="width: ' + (image.width / window.devicePixelRatio) + 'px; max-width: 100%; height: auto;" src="' + url + '">');
                            };
                        }
                        break;
                    //字体，字号，字体颜色，背景颜色，
                    default:
                        document.execCommand(_this.$option.plugs[index]["command"], false, _this.$option.plugs[index]["value"]);
                        break;
                }
            }
            $(target).parent().parent().hide();
        },
        //组件按钮点击事件
        $plugsBarUlButtonClick: function(_this, target, index)
        {
            //如果点击的按钮不需要参数
            if(_this.$option.plugs[index]["value"] == null)
            {
                //光标选取对象
                var selection = window.getSelection();
                //如果存在选区
                if(_this.$range = selection.getRangeAt(0))
                {
                    //解析命令并执行
                    switch(_this.$option.plugs[index]["command"])
                    {
                        //标签
                        case "tag":
                            if(_this.$range.toString())
                            {
                                document.execCommand("insertHTML", false, '<code style="font-family: Menlo, Monaco, Consolas, \'Courier New\', monospace; font-size: 12.6px; padding: 2px 4px; color: rgb(199, 37, 78); background-color: rgb(249, 242, 244); border-radius: 4px;">' + _this.$range + '</code>');
                            }
                            break;
                        //引用
                        case "quote":
                            document.execCommand("insertHTML", false, '<blockquote style="background: #ddd;padding: 8px 8px;margin: 0px;border-left: 3px solid #00a3cf;background: #f6f6f6;"><div><br></div></blockquote>');
                            break;
                        //预览
                        case "preview":
                            $(target).find("i").toggleClass(_this.$option.plugs[index]["icon"].join(" "));
                            if(_this.$option.plugs[index]["icon"].indexOf($(target).find("i").attr("class")))
                            {
                                _this.$content.attr("contenteditable", false);
                            }
                            else
                            {
                                _this.$content.attr("contenteditable", true);
                            }
                            break;
                        //全屏
                        case "fullScreen":
                            $(target).find("i").toggleClass(_this.$option.plugs[index]["icon"].join(" "));
                            if(_this.$option.plugs[index]["icon"].indexOf($(target).find("i").attr("class")))
                            {
                                _this.$box.css(
                                    {
                                        position: "absolute",
                                    }
                                );
                            }
                            else
                            {
                                _this.$box.css(
                                    {
                                        position: "",
                                    }
                                );
                            }
                            break;
                        //字体，大小，字体颜色，背景颜色，粗体，斜体，下划线，上标，下标，左缩进，右缩进，水平线，有序列表，无序列表，两端对齐，左对齐，中间对齐，右对齐，清除格式，清除链接
                        default:
                            document.execCommand(_this.$option.plugs[index]["command"], false, _this.$option.plugs[index]["value"]);
                            break;
                    }
                }
                return;
            }
            //如果存在历史打开的插件对象
            if(_this.$plugsBarButtonSelected)
            {
                //把历史打开的插件对象给关闭
                $(_this.$plugsBarButtonSelected).hide();
            }
            //更新当前打开的插件对象
            _this.$plugsBarButtonSelected = $(target).parent().next();
            //如果存在打开的插件对象
            if(_this.$plugsBarButtonSelected)
            {
                //处理位置
                var x = _this.$element.width() - $(target).position().left - _this.$plugsBarButtonSelected.width();
                if(x < 0)
                {
                    _this.$plugsBarButtonSelected.css(
                        {
                            left: $(target).position().left + 1 + x - _this.$element.position().left - 8 + 26, //Mac，非全屏
                        }
                    );
                }
                _this.$plugsBarButtonSelected.css(
                    {
                        top: (_this.$plugsBarUl.height() + 1 + 18) + "px", //Mac，非全屏
                    }
                );
                //光标选区
                var selection = window.getSelection();
                _this.$range = selection.getRangeAt(0);
                //打开当前插件
                _this.$plugsBarButtonSelected.show();
            }
        },
        //plug:select
        $xEditorPlugSelectInit: function(_this, extend, item)
        {
            //下拉框容器
            var select = $('<select style="appearance: none;-moz-appearance: none;-webkit-appearance: none;border-radius: 0px;-webkit-border-radius: 0px;-moz-border-radius: 0px;width: 100%;height: 24px;border: 1px solid #dcdee2;color: #2b85e4;outline: none;background-color: #fff;"></select>');
            //将下拉框容器添加到扩展面板中
            $(extend).children().eq(1).append(select);
            //遍历预设值
            item.extend.parameters.preSet.forEach(function(option){
                //组装预设值并添加到下拉框容器中
                $(select).append('<option value="' + option.value + '">' + option.name + '</option>');
            });
            //监听下拉框值的选择变化
            $(select).change(function(event){
                //获取当前插件在整个插件列表中的索引
                var index = $(this).closest("li").index();
                //根据索引，将当期选择的值保存到对应插件的value键值对中，方便后期程序执行时直接获取，或者存储历史数据等
                _this.$option.plugs[index]["value"] = $(this).val();
            });
        },
        //初始化
        $init: function(_this)
        {
            //添加编辑器框
            _this.$element.append(
                '<table border="1" style="left: 0px; top: 0px; margin: 0px; padding: 0px; width: 100%; height: 100%; border: 1px solid #dcdee2; border-collapse: collapse;">' +
                '<tr>' +
                '<td style="width: 100%; background-color: #f8f8f9; margin: 0px; padding: 0px; ">' +
                '<ul style="z-index: 1; margin: 0px; padding: 0px; list-style: none;line-height: 26px;margin: 0px;padding: 0px;user-select: none;"></ul>' +
                '</td>' +
                '</tr>' +
                '<tr style="height: 100%;">' +
                '<td style="margin: 0px;">' +
                '<div style="z-index: 0; margin: 0px; padding: 8px; width: 100%; height: 100%; outline: none; background-color: #fff; overflow-y: auto; font-size: 12px; color: #515a6e; word-break: break-word;" contenteditable="true"></div>' +
                '</td>' +
                '</tr>' +
                '</table>'
            );
            //定义一些基本对象
            //编辑器盒子
            _this.$box = _this.$element.find(" > table:first-child");
            //编辑器插件区域
            _this.$plugsBarUl = _this.$element.find(" ul:first-child");
            //编辑器内容区域
            _this.$content = _this.$element.find(" div:first-child");
            //获取焦点
            // _this.$content.focus();
            //遍历toolbars参数添加组件
            _this.$option.plugs.forEach(function(item){
                //组件外壳
                var toolbar = $(
                    '<li style="display: inline-block">' +
                        '<div style="display: inline-block">' +
                            '<div style="display: inline-block">' +
                                '<button onmouseleave="this.style.color = \'#515a6e\'; this.style.backgroundColor = \'#f8f8f9\'" onmouseenter="this.style.color = \'#19be6b\'; this.style.backgroundColor = \'#e8eaec\'" title="' + item.title + '" style="margin: 0px;padding: 0px;width: 30px;height: 30px;border-radius: 0px;border: none;outline: none;background-color: #f8f8f9;color: #515a6e;font-size: 12px;line-height: 26px;">' +
                                    '<i class="' + item.icon[0] + '" style="font-size: 14px;"></i>' +
                                '</button>' +
                            '</div>' +
                        '</div>' +
                    '</li>'
                );
                //将组件外壳添加到编辑器
                _this.$plugsBarUl.append(toolbar);
                //判断当前组件是否存在扩展属性（就是是否需要获取用户交互的参数，如果需要交互，则需要提供相关界面）

                if(Object.keys(item.extend).length)
                {
                    //交互界面外壳
                    var extend = $(
                        '<div style="z-index: 1; position: absolute;margin-left: -1px;width: 238px;height: auto;border: 1px solid #dcdee2;background-color: #f8f8f9;font-size: 12px;padding: 8px;" hidden>' +
                            '<div style="height: 20px;line-height: 20px;">' + item.title + '</div>' +
                            '<div style="padding: 8px 0px;"></div>' +
                            '<div style="text-align: left;padding-bottom: 5px;">' +
                                '<button style="width: 50px;background-color: #19be6b;color: #fff;font-size: 12px;line-height: 20px;border: none;cursor: pointer;outline: none;">确定</button>' +
                            '</div>' +
                        '</div>'
                    );
                    //将交互界面添加到组件中
                    $(toolbar).children().eq(0).append(extend);
                    //判断交互界面类型，根据不同的类型组装处理不同的交互界面
                    switch(item.extend.name)
                    {
                        //下拉框类型
                        case "select":
                            _this.$xEditorPlugSelectInit(_this, extend, item);
                            break;
                        //拾色器类型
                        case "color":
                            _this.$xEditorPlugColorInit(_this, extend, item);
                            break;
                        //传图片类型
                        case "image":
                            _this.$xEditorPlugImageInit(_this, extend, item);
                            break;
                        //单文本类型
                        case "input":
                            _this.$xEditorPlugInputInit(_this, extend, item);
                            break;
                        default:
                            break;
                    }
                }
            });
            //组件按钮
            _this.$plugsBarUlButton = _this.$element.find(" ul:first-child > li > div:first-child > div:first-child > button");
            //组件按钮点击事件
            _this.$plugsBarUlButton.click(function(){
                var index = $(this).closest("li").index();
                _this.$plugsBarUlButtonClick(_this, this, index);
            });
            //组件确定按钮
            _this.$plugsBarConfirmButton = _this.$element.find(" ul:first-child > li > div:first-child > div:nth-child(2) > div:last-child > button");
            //组件确定按钮点击事件
            _this.$plugsBarConfirmButton.click(function(){
                var index = $(this).closest("li").index();
                _this.$plugsBarConfirmButtonClick(_this, this, index);
            });
            //粘贴事件
            _this.$content.bind("paste", function(event)
            {
                _this.$xEditorContentPaste(_this, event);
            });
        },
    };
    $.fn.xEditor = function(option)
    {
        new xEditor(this, option);
    };
}(jQuery);
