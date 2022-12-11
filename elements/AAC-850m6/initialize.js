function(instance, context) {
	$(instance.canvas).append('<span id="qrcode" style="display:none;"></span>');
	$(instance.canvas).append(
		'<div class="dpd container-fluid justify-content-center" style="height:100vh;width: 100vw;">'+
		'<div class="row">'+
			'<!-- POPUPS -->'+
			'<div class="card popup col-3" id="popup_download" style="display:none;">'+
				'<div class="card-header">'+
					'<button class="btn-close" onclick="document.querySelector(\'#popup_download\').style.display=\'none\'"></button>'+
				'</div>'+
				'<div class="card-body d-flex justify-content-center">'+
					'<a class="btn accent text-light m-1" id="link_frente" href="#" download="frente.jpg">Frente</a>'+
					'<a class="btn accent text-light m-1" id="link_verso" href="#" download="verso.jpg">Verso</a>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-2 col-lg-3 col-md-3"><!-- SIDEBAR -->'+
				'<aside class="row aside w-100 h-100 themed shadow" style="align-content:flex-start;margin:8px -5px;">'+
					'<div class="btn-group w-100 mt-3" style="height: 5%;">'+
					  '<button tab="shape" class="btn btn-primary themed active">'+
					  	'<i class="fi fi-rr-resources"></i>'+
					  '</button>'+
					  '<button tab="image" class="btn btn-primary themed">'+
					  	'<i class="fi fi-rr-picture"></i>'+
					  '</button>'+
					'</div>'+
					'<div class="row w-100" style="padding-right: 0px;">'+
						'<div class="tab" style="display:block;" id="shape">'+
							'<hr />'+
						    '<!-- PALETA DE DRAW -->'+
							'<div class="btn-group w-100 mb-3">'+
							  '<button title="select" id="select" class="btn btn-primary themed active" onclick="select()">'+
							  	'<i class="bi bi-cursor"></i>'+
							  '</button>'+
							  '<button title="draw" id="draw" class="btn btn-primary themed" onclick="draw()">'+
							  	'<i class="bi bi-vector-pen"></i>'+
							  '</button>'+
							'</div>'+
							'<div class="col-6" id="draw_pallete">'+
								'<div class="btn-group w-100 align-items-center">'+
									'<span class="col-4" style="text-align:left;">Cor</span>'+
									'<div class="col-8">'+
										'<input type="color" class="w-100 form-control form-control-color" id="brush-picker">'+
									'</div>'+
								'</div>'+
								'<div class="m-3"></div>'+
								'<div class="btn-group w-100 align-items-center justify-content-space-arowund">'+
									'<span class="col-4">Tamanho</span>'+
									'<div class="input-group m-2 w-100">'+
									  '<button class="btn btn-outline-secondary" type="button" onclick="mudaPincel(\'-\')">-</button>'+
									  '<input type="number" id="pincel_text" class="form-control border border-secondary themed" value="10" style="appearance:textfield;" disabled />'+
									  '<button class="btn btn-outline-secondary" type="button" onclick="mudaPincel(\'+\')" >+</button>'+
									'</div>'+
								'</div>'+
							'</div>'+
							'<div style="clear:both;width:100%;"></div>'+
							'<hr />'+
							'<div id="qr_code">'+
								'<h6 class="h-6" style="margin-bottom:12px;display: inline-block;width: 100%;">Qr Code</h6>'+
								'<div class="input-group">'+
									'<div class="input-group" style="margin-bottom:12px;">'+
										'<span class="col-4">Cor</span>'+
										'<input class="form-control form-control-color" type="color" id="qr_color">'+
									'</div>'+
									'<div class="btn-group">'+
										'<input type="text" id="qr_url" class="border border-secondary" value="www.example.com" />'+
										'<button class="btn btn-outline-secondary" onclick="qrcode()"> Inserir</button>'+
									'</div>'+
								'</div>'+
							'</div>'+
							'<hr />'+
							'<div id="elements">'+
								'<div class="input-group">'+
									'<h6 class="col-4 h-6" style="display: flex;align-items: center;margin:0px;">Texto</h6>'+
									'<button class="form-control btn btn-outline-secondary" onclick="textBox()"> Inserir </button>'+
									'<hr style="width: 100%;"/>'+
								'</div>'+
								'<h6 class="h-6" style="margin-bottom:12px;display: inline-block;width: 100%;">Formas</h6>	'+
								'<div id="formas">'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><rect width="300" height="300"></rect></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M279 0l-257 0c-12,0 -21,10 -21,21l0 257c0,12 10,21 21,21l257 0c12,0 21,-10 21,-21l0 -257c0,-12 -10,-21 -21,-21z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M225 0l-150 0c-41,0 -75,34 -75,75l0 150c0,41 34,75 75,75l150 0c41,0 75,-34 75,-75l0 -150c0,-41 -34,-75 -75,-75z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M272 300l-244 0c-15,0 -28,-13 -28,-28l0 -244c0,-15 13,-28 28,-28l244 0c15,0 28,13 28,28l0 244c0,15 -13,28 -28,28zm-244 -281c-5,0 -9,4 -9,9l0 244c0,5 4,9 9,9l244 0c5,0 9,-4 9,-9l0 -244c0,-5 -4,-9 -9,-9l-244 0z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M300 150c0,83 -67,150 -150,150 -83,0 -150,-67 -150,-150 0,-83 67,-150 150,-150 83,0 150,67 150,150z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 300c-83,0 -150,-67 -150,-150 0,-83 67,-150 150,-150 83,0 150,67 150,150 0,83 -67,150 -150,150zm0 -261c-61,0 -111,50 -111,111 0,61 50,111 111,111 61,0 111,-50 111,-111 0,-61 -50,-111 -111,-111z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M44 256c59,59 154,59 212,0 59,-58 59,-154 0,-212 -59,-59 -154,-59 -212,0 -59,59 -59,154 0,212zm12 -201c52,-52 137,-52 189,0 52,52 52,137 0,189 -52,52 -137,52 -189,0 -52,-52 -52,-137 0,-189z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 0c-83,0 -150,67 -150,150 0,83 67,150 150,150 83,0 150,-67 150,-150 0,-83 -67,-150 -150,-150zm0 277c-70,0 -127,-57 -127,-127 0,-70 57,-127 127,-127 70,0 127,57 127,127 0,70 -57,127 -127,127z"></path><circle cx="150" cy="150" r="79"></circle></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,0 0,300 300,300 150,0 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 5l-145 290 290 0 -145 -290 0 0zm0 121l57 112 -112 0 55 -112z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M300 300l-300 0 150 -300 150 300zm-278 -15l256 0 -128 -256 -128 256z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,17 83,133 217,133 "></polygon><polygon points="0,277 133,277 67,161 "></polygon><polygon points="233,161 167,277 300,277 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,0 225,57 300,115 271,207 243,300 150,300 57,300 29,207 0,115 75,57 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,0 225,37 300,75 300,150 300,225 225,263 150,300 75,263 0,225 0,150 0,75 75,37 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,0 210,30 270,59 285,126 300,193 258,246 217,300 150,300 83,300 42,246 0,193 15,126 30,59 90,30 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,0 203,22 256,44 278,97 300,150 278,203 256,256 203,278 150,300 97,278 44,256 22,203 0,150 22,97 44,44 97,22 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,5 184,116 295,116 205,184 240,295 150,226 60,295 95,184 5,116 116,116 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,5 184,99 295,78 218,150 295,223 184,201 150,295 116,201 5,223 82,150 5,78 116,99 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,5 177,99 266,62 211,143 295,192 199,198 214,295 150,222 85,295 101,198 5,192 89,143 34,62 123,99 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,5 174,92 253,47 208,126 295,150 208,174 253,253 174,208 150,295 126,208 47,253 92,174 5,150 92,126 47,47 126,92 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="126,90 55,40 94,121 5,129 86,166 23,229 108,205 100,295 150,221 200,295 192,205 278,229 214,166 295,129 206,121 245,40 173,90 150,5 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="150,5 172,84 240,33 209,109 295,105 222,150 295,195 209,191 240,267 172,216 150,295 128,216 60,267 91,191 5,195 78,150 5,105 91,109 60,33 128,84 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="292,186 256,201 267,238 228,237 225,276 189,261 171,295 144,267 114,292 99,256 62,267 63,228 24,225 39,189 5,171 33,144 8,114 44,99 33,62 72,63 75,24 111,40 129,5 156,33 186,8 201,44 238,33 237,72 276,76 261,111 295,129 267,156 "></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 87c-35,0 -63,28 -63,63 0,35 28,63 63,63 35,0 63,-28 63,-63 0,-35 -28,-63 -63,-63zm0 99c-20,0 -36,-16 -36,-36 0,-20 16,-36 36,-36 20,0 36,16 36,36 0,20 -16,36 -36,36z"></path><circle cx="150" cy="150" r="21"></circle><path d="M150 46c-57,0 -104,47 -104,104 0,57 47,104 104,104 57,0 104,-47 104,-104 0,-57 -47,-104 -104,-104zm0 180c-42,0 -77,-34 -77,-77 0,-42 34,-77 77,-77 42,0 77,34 77,77 0,42 -34,77 -77,77z"></path><path d="M150 0c-83,0 -150,67 -150,150 0,83 67,150 150,150 83,0 150,-67 150,-150 0,-83 -67,-150 -150,-150zm0 273c-68,0 -123,-55 -123,-123 0,-68 55,-123 123,-123 68,0 123,55 123,123 0,68 -55,123 -123,123z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="0,150 150,0 300,150 150,300"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M300 150l-150 -150 -150 150 150 150 150 -150zm-150 -50l50 50 -50 50 -50 -50 50 -50z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M285 225l0 -150 -135 -75 -135 75 0 150 135 75 135 -75zm-212 -118l77 -43 77 43 0 86 -77 43 -77 -43 0 -86z"></path><polygon points="203,179 203,121 150,91 97,121 97,179 150,209"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 0c30,83 68,120 150,150 -83,30 -120,68 -150,150 -30,-83 -68,-120 -150,-150 83,-30 120,-68 150,-150z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="120,0 300,0 183,300 0,300"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="180,0 0,0 117,300 300,300"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="75,0 225,0 300,300 0,300"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="0,225 0,75 300,0 300,300"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M300 0l-300 0 0 300 300 0 0 -300zm-70 230l-160 0 0 -160 160 0 0 160z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M130 0c-73,10 -130,74 -130,150 0,76 56,140 130,150 6,1 10,-4 10,-9l0 -282c0,-6 -5,-10 -10,-9z"></path><path d="M170 0c-6,-1 -10,4 -10,9l0 282c0,6 5,10 10,9 73,-10 130,-74 130,-150 0,-76 -56,-140 -130,-150z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="195,150 275,230 230,275 150,195 70,275 25,230 105,150 25,70 70,25 150,105 230,25 275,70"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M136 252c-14,14 -36,14 -49,0l-77 -77c-14,-14 -14,-36 0,-49 14,-14 36,-14 49,0l46 46c3,3 9,3 12,0l124 -124c14,-14 36,-14 49,0 7,7 10,15 10,25 0,9 -4,18 -10,25l-155 155z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="0,150 150,33 150,102 300,102 300,201 150,201 150,267"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="89,56 0,150 89,244 89,183 211,183 211,244 300,150 211,56 211,117 89,117"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M262 169c0,-72 -59,-131 -131,-131 -72,0 -131,59 -131,131 0,-52 42,-94 94,-94 52,0 94,42 94,94l0 19 -37 0 75 75 75 -75 -37 0 0 -19z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M300 148l-127 -127 0 85c-96,0 -173,78 -173,173 35,-64 105,-97 173,-89l0 85 127 -127z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M0 140c0,-56 67,-101 150,-101 83,0 150,45 150,101 0,56 -67,101 -150,101 -20,0 -39,-3 -57,-8 -4,2 -22,11 -55,27l9 -48c-31,-30 -46,-54 -46,-73z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M276 216c16,-22 24,-47 24,-73 0,-74 -67,-135 -150,-135 -83,0 -150,61 -150,135 0,74 67,135 150,135 21,0 42,-4 61,-12 34,20 81,26 83,27 0,0 0,0 1,0 2,0 4,-1 4,-3 1,-2 1,-4 -1,-6 -12,-12 -19,-36 -22,-68z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M255 39c-28,-23 -66,-35 -105,-35 -40,0 -77,13 -105,35 -29,23 -45,55 -45,88 0,33 16,65 45,88 28,23 66,35 105,35 4,0 8,0 12,0l26 42c2,3 5,5 8,5 0,0 0,0 0,0 3,0 7,-2 8,-4l54 -81c27,-23 41,-53 41,-85 0,-33 -16,-65 -45,-88zm-11 159l-47 70 -21 -34c-2,-3 -5,-5 -9,-5 0,0 -1,0 -1,0 -5,1 -11,1 -17,1 -72,0 -130,-46 -130,-103 0,-57 58,-103 130,-103 72,0 130,46 130,103 0,26 -13,52 -36,71z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M257 11l-214 0c-24,0 -43,19 -43,43l0 145c0,24 19,43 43,43l17 0 0 38c0,3 2,7 5,8 1,1 3,1 4,1 2,0 4,-1 6,-2l58 -45 124 0c24,0 43,-19 43,-43l0 -145c0,-24 -19,-43 -43,-43zm24 188c0,13 -11,24 -24,24l-127 0c-2,0 -4,1 -6,2l-46 36 0 -28c0,-5 -4,-9 -9,-9l-26 0c-13,0 -24,-11 -24,-24l0 -145c0,-13 11,-24 24,-24l214 0c13,0 24,11 24,24l0 145 0 0z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 300l-46 -80 -58 0c-24,0 -43,-17 -43,-39l0 -142c0,-22 19,-39 43,-39l208 0c24,0 43,18 43,39l0 142c0,22 -19,39 -43,39l-58 0 -46 80zm-104 -278c-12,0 -21,8 -21,17l0 142c0,10 10,17 21,17l70 0 34 58 34 -58 70 0c12,0 21,-8 21,-17l0 -142c0,-10 -10,-17 -21,-17l-208 0z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M30 10l240 0c16,0 30,14 30,30l0 165c0,16 -14,30 -30,30l-143 0 -49 53c-1,1 -2,2 -4,2 -1,0 -1,0 -2,0 -2,-1 -3,-3 -3,-5l0 -50 -40 0c-16,0 -30,-14 -30,-30l0 -165c0,-16 14,-30 30,-30z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="300,9 0,9 0,223 46,223 46,291 113,223 300,223"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M0 21l105 78 0 -39 15 26 15 -65 30 78 105 -65 -75 78 45 0 -45 26 105 0 -90 26 45 13 -30 13 45 78 -90 -65 0 52 -30 -39 -60 65 15 -65 -90 39 60 -52 -45 -13 60 -13 -90 -13 75 -13 -30 -26 30 0 -75 -104zm52 39m53 19m8 -6m15 -19m23 6m68 6m15 6m-15 39m0 13m30 13m8 13m-23 19m8 13m8 45m-23 6m-45 -6m-15 6m-45 13m-23 0m-37 -13m-15 -6m8 -32m8 -13m-15 -13m-8 -13m23 -19m0 -13m-23 -52"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M215 0l-130 0c-8,0 -14,6 -14,14l0 282c0,4 5,6 8,3l66 -59c3,-3 7,-3 10,0l66 59c3,3 8,1 8,-3l0 -282c0,-8 -6,-14 -14,-14z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="0,105 150,105 300,105 255,150 300,195 0,195 45,150"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M15 95c0,0 -15,3 -15,18 0,15 0,91 0,91 0,0 2,-18 15,-18l285 0 -29 -47 29 -44 -285 0z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="42,182 42,170 42,128 0,128 30,167 0,207 71,207 71,182 52,182"></polygon><polygon points="300,128 258,128 258,170 258,182 248,182 224,182 224,207 300,207 270,167"></polygon><rect x="52" y="93" width="197" height="79"></rect></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="45,192 45,211 73,228 89,257 122,257 150,274 178,257 211,257 227,228 255,211 255,192 235,192 235,200 213,214 200,237 173,237 150,251 127,237 100,237 87,214 65,200 65,192"></polygon><polygon points="255,113 255,89 227,72 211,43 178,43 150,26 122,43 89,43 73,72 45,89 45,113 65,113 65,100 87,86 100,63 127,63 150,49 173,63 200,63 213,86 235,100 235,113"></polygon><polygon points="195,73 171,73 150,61 129,73 105,73 95,93 75,105 75,113 225,113 225,105 205,93"></polygon><polygon points="105,227 129,227 150,239 171,227 195,227 205,207 225,195 225,192 75,192 75,195 95,207"></polygon><polygon points="45,187 65,187 70,187 75,187 225,187 230,187 235,187 255,187 300,187 284,151 300,118 255,118 235,118 230,118 225,118 75,118 70,118 65,118 45,118 0,118 16,153 0,187"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M270 108c-17,-50 -65,-85 -120,-85 -56,0 -103,36 -120,85l-29 0 18 43 -18 41 29 0c17,50 65,85 120,85 56,0 103,-36 120,-85l29 0 -17 -44 18 -40 -30 0zm4 69l-15 0 -219 0 -15 0 -3 0 2 -4 9 -22 -10 -23 -2 -5 3 0 15 0 219 0 15 0 3 0 -2 4 -9 21 10 24 2 5 -3 0 0 0zm-124 -140c47,0 88,29 104,71l-209 0c17,-41 57,-71 104,-71zm0 225c-47,0 -88,-29 -104,-71l209 0c-17,41 -57,71 -104,71z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M277 255c0,0 -33,-57 -39,-67 7,-2 14,-4 17,-9 5,-9 -4,-23 -2,-32 2,-10 17,-18 17,-28 0,-9 -15,-20 -17,-30 -2,-9 7,-23 2,-32 -5,-9 -22,-8 -29,-15 -7,-7 -7,-24 -16,-28 -9,-5 -23,5 -32,2 -9,-2 -18,-16 -28,-16 -10,0 -26,16 -28,17 -10,2 -24,-7 -32,-2 -9,5 -8,21 -16,28 -7,7 -24,6 -29,15 -5,9 4,23 2,32 -2,9 -17,19 -17,29 0,10 14,18 17,27 2,9 -7,23 -2,32 3,5 9,7 15,8 1,0 2,1 1,2 -4,7 -38,66 -38,66 -3,5 -1,9 5,9l26 1c5,0 12,4 15,9l14 22c3,5 7,4 10,0 0,0 40,-68 40,-68 1,-1 2,-1 2,0 4,4 10,7 15,7 5,0 10,-3 14,-7 0,0 1,-1 2,0 0,0 40,68 40,68 3,5 7,5 10,0l14 -22c3,-5 10,-9 15,-9l26 -1c5,0 8,-4 5,-9zm-83 -61c-29,17 -64,15 -91,-2 -39,-25 -52,-77 -29,-118 24,-41 77,-56 118,-33 0,0 0,0 1,0 0,0 1,0 1,1 13,7 24,18 32,32 24,42 10,96 -32,120z"></path><path d="M187 54c0,0 0,0 0,0 -22,-13 -51,-14 -74,0 -35,21 -47,66 -27,101 6,11 15,19 25,26 1,1 2,1 3,2 35,20 81,8 101,-27 20,-35 8,-81 -27,-101z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M300 225c0,-1 -1,-3 -2,-4l-62 -62 0 -1 23 -16c2,-2 3,-5 2,-8l-11 -26 11 -26c1,-3 0,-6 -2,-8l-23 -16 -3 -28c0,-3 -3,-5 -6,-6l-28 -3 -16 -23c-2,-2 -5,-3 -8,-2l-26 11 -26 -11c-3,-1 -6,0 -8,2l-16 23 -28 3c-3,0 -5,3 -6,6l-3 28 -23 16c-2,2 -3,5 -2,8l11 26 -11 26c-1,3 0,6 2,8l23 16 0 1 -62 62c-2,2 -2,6 0,9 1,1 2,2 4,2l42 5 5 42c0,3 4,6 7,5 1,0 3,-1 4,-2l66 -66 21 -10 21 10 66 66c2,2 6,2 9,0 1,-1 2,-2 2,-4l5 -42 42 -5c3,0 6,-4 5,-7zm-237 40l-4 -34c0,-3 -3,-5 -5,-5l-34 -4 46 -46 1 11c0,3 3,5 6,6l28 3 14 19 -51 51zm89 -70c-2,-1 -4,-1 -5,0l-23 10 -15 -21c-1,-1 -3,-2 -4,-3l-26 -3 -3 -26c0,-2 -1,-3 -3,-4l-21 -15 10 -23c1,-2 1,-4 0,-5l-10 -23 21 -15c1,-1 2,-3 3,-4l3 -26 26 -3c2,0 3,-1 4,-3l15 -21 23 10c2,1 4,1 5,0l23 -10 15 21c1,1 3,2 4,3l26 3 3 26c0,2 1,3 3,4l21 15 -11 23c-1,2 -1,4 0,5l11 24 -21 15c-1,1 -2,3 -3,4l-3 26 -26 3c-2,0 -3,1 -4,3l-15 21 -23 -11zm94 30c-3,0 -5,3 -5,5l-4 34 -51 -51 14 -19 28 -3c3,0 5,-3 6,-6l1 -11 46 46 -34 4z"></path><path d="M150 50c-32,0 -59,26 -59,59 0,32 26,59 59,59 32,0 59,-26 59,-59 0,-32 -26,-59 -59,-59zm0 105c-25,0 -46,-21 -46,-46 0,-25 21,-46 46,-46 25,0 46,21 46,46 0,25 -21,46 -46,46z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M276 43c-16,-16 -37,-24 -59,-24 -22,0 -43,9 -59,24l-8 8 -8 -8c-16,-16 -37,-24 -59,-24 -22,0 -43,9 -59,24 -33,33 -33,86 0,118l117 117c2,2 4,3 7,4 1,0 2,0 3,0 3,0 7,-1 9,-4l117 -117c33,-33 33,-85 0,-118z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M278 44c-15,-17 -35,-26 -58,-26 -32,0 -51,19 -63,35 -3,4 -5,8 -7,12 -2,-4 -5,-8 -7,-12 -11,-16 -31,-35 -63,-35 -22,0 -43,9 -58,26 -14,16 -22,37 -22,60 0,25 10,48 31,73 19,22 45,45 76,71 12,10 24,20 36,31l0 0c2,1 4,2 6,2 2,0 4,-1 6,-2l0 0c13,-11 25,-21 36,-31 31,-26 58,-49 76,-71 21,-25 31,-48 31,-73 0,-23 -8,-44 -22,-60zm-97 191c-10,8 -20,17 -31,27 -11,-9 -21,-18 -31,-27 -61,-52 -101,-86 -101,-131 0,-19 6,-36 17,-49 11,-13 27,-20 44,-20 24,0 40,15 48,27 8,11 12,22 13,27 1,4 5,6 8,6 4,0 7,-2 8,-6 1,-4 6,-16 13,-27 9,-12 24,-27 48,-27 17,0 33,7 44,20 11,13 17,30 17,49 0,45 -40,79 -101,131z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M287 217c-3,-3 -7,-5 -11,-3 -11,4 -23,6 -36,6 -61,0 -110,-49 -110,-110 0,-37 18,-71 48,-91 3,-2 5,-7 4,-11 -1,-4 -4,-7 -8,-8 -5,-1 -9,-1 -14,-1 -83,0 -150,67 -150,150 0,83 67,150 150,150 53,0 100,-27 128,-71 2,-4 2,-8 -1,-12z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M268 257c-12,3 -24,5 -36,5 -132,0 -196,-165 -96,-253l9 -8 -12 3c-11,3 -23,7 -33,13 -73,39 -101,130 -62,203 26,49 77,80 133,80 24,0 49,-6 71,-18 10,-6 20,-12 29,-20l9 -8 -12 3z"></path><polygon points="176,171 203,157 230,171 225,141 247,120 217,115 203,88 189,115 159,120 181,141"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 0c-35,0 -64,30 -64,68 0,23 12,43 25,62 -14,-11 -30,-17 -46,-17 -35,0 -64,30 -64,67 0,37 29,68 64,68 29,0 52,-21 74,-38 -4,50 -12,79 -60,90l143 0c-48,-11 -56,-40 -60,-90 22,19 46,35 74,38 35,0 64,-30 64,-68 0,-37 -29,-67 -64,-67 -17,0 -32,8 -46,17 14,-19 24,-39 25,-62 0,-37 -29,-68 -64,-68z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M75 300c54,-12 60,-44 64,-102 -9,16 -26,27 -54,27 -46,0 -77,-27 -66,-84 11,-58 94,-81 131,-141 37,60 120,83 131,141 11,58 -19,84 -66,84 -28,0 -45,-11 -54,-27 4,58 10,90 64,102l-150 0 0 0z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 75c-42,0 -75,34 -75,75 0,42 34,75 75,75 42,0 75,-34 75,-75 0,-42 -34,-75 -75,-75zm0 131c-31,0 -56,-25 -56,-56 0,-31 25,-56 56,-56 31,0 56,25 56,56 0,31 -25,56 -56,56z"></path><path d="M150 243c-5,0 -10,4 -10,10l0 37c0,5 4,10 10,10 5,0 10,-4 10,-10l0 -37c0,-5 -4,-10 -10,-10z"></path><path d="M150 0c-5,0 -10,4 -10,10l0 37c0,5 4,10 10,10 5,0 10,-4 10,-10l0 -37c0,-5 -4,-10 -10,-10z"></path><path d="M290 140l-37 0c-5,0 -10,4 -10,10 0,5 4,10 10,10l37 0c5,0 10,-4 10,-10 0,-5 -4,-10 -10,-10z"></path><path d="M47 140l-37 0c-5,0 -10,4 -10,10 0,5 4,10 10,10l37 0c5,0 10,-4 10,-10 0,-5 -4,-10 -10,-10z"></path><path d="M256 242l-26 -26c-4,-4 -10,-4 -14,0 -4,4 -4,10 0,14l26 26c2,2 4,3 7,3 2,0 5,-1 7,-3 4,-4 4,-10 0,-14z"></path><path d="M83 70l-26 -26c-4,-4 -10,-4 -14,0 -4,4 -4,10 0,14l26 26c2,2 4,3 7,3 2,0 5,-1 7,-3 4,-4 4,-10 0,-14z"></path><path d="M256 44c-4,-4 -10,-4 -14,0l-26 26c-4,4 -4,10 0,14 2,2 4,3 7,3 2,0 5,-1 7,-3l26 -26c4,-4 4,-10 0,-14z"></path><path d="M83 217c-4,-4 -10,-4 -14,0l-26 26c-4,4 -4,10 0,14 2,2 4,3 7,3 2,0 5,-1 7,-3l26 -26c4,-4 4,-10 0,-14z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M56 112l7 18c0,1 1,1 2,1 1,0 1,0 2,-1l7 -18c5,-15 17,-26 31,-31l18 -7c1,0 1,-1 1,-2 0,-1 0,-1 -1,-2l-18 -7c-15,-5 -26,-17 -31,-31l-7 -18c0,-1 -1,-1 -2,-1 -1,0 -1,0 -2,1l-7 18c-5,15 -17,26 -31,31l-18 7c-1,0 -1,1 -1,2 0,1 0,1 1,2l18 7c15,5 26,17 31,31z"></path><path d="M201 188l-18 -7c-15,-5 -26,-17 -31,-31l-7 -18c0,-1 -1,-1 -2,-1 -1,0 -1,0 -2,1l-7 18c-5,15 -17,26 -31,31l-18 7c-1,0 -1,1 -1,2 0,1 0,1 1,2l18 7c15,5 26,17 31,31l7 18c0,1 1,1 2,1 1,0 1,0 2,-1l7 -18c5,-15 17,-26 31,-31l18 -7c1,0 1,-1 1,-2 0,-1 0,-1 -1,-2z"></path><path d="M294 111l-12 -4c-10,-4 -18,-11 -21,-21l-4 -12c0,0 -1,-1 -1,-1 0,0 -1,0 -1,1l-4 12c-4,10 -11,18 -21,21l-12 4c0,0 -1,1 -1,1 0,0 0,1 1,1l12 4c10,4 18,11 21,21l4 12c0,0 1,1 1,1 0,0 1,0 1,-1l4 -12c4,-10 11,-18 21,-21l12 -4c0,0 1,-1 1,-1 0,0 0,-1 -1,-1z"></path><path d="M264 271l-9 -3c-7,-3 -12,-8 -15,-15l-3 -9c0,0 0,-1 -1,-1 0,0 -1,0 -1,1l-3 9c-3,7 -8,12 -15,15l-9 3c0,0 -1,0 -1,1 0,0 0,1 1,1l9 3c7,3 12,8 15,15l3 9c0,0 0,1 1,1 0,0 1,0 1,-1l3 -9c3,-7 8,-12 15,-15l9 -3c0,0 1,0 1,-1 0,0 0,-1 -1,-1z"></path><path d="M202 27l-9 -3c-7,-3 -12,-8 -15,-15l-3 -9c0,0 0,-1 -1,-1 0,0 -1,0 -1,1l-3 9c-3,7 -8,12 -15,15l-9 3c0,0 -1,0 -1,1 0,0 0,1 1,1l9 3c7,3 12,8 15,15l3 9c0,0 0,1 1,1 0,0 1,0 1,-1l3 -9c3,-7 8,-12 15,-15l9 -3c0,0 1,0 1,-1 0,0 0,-1 -1,-1z"></path><path d="M97 254l-11 -4c-9,-3 -15,-10 -19,-19l-4 -11c0,0 -1,-1 -1,-1 0,0 -1,0 -1,1l-4 11c-3,9 -10,15 -19,19l-11 4c0,0 -1,1 -1,1 0,0 0,1 1,1l11 4c9,3 15,10 19,19l4 11c0,0 1,1 1,1 0,0 1,0 1,-1l4 -11c3,-9 10,-15 19,-19l11 -4c0,0 1,-1 1,-1 0,0 0,-1 -1,-1z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M150 292l-1 0c-1,0 -137,-26 -137,-163 0,-40 13,-79 36,-109l2 -3 3 1c13,6 26,8 39,8 20,0 39,-6 56,-17l2 -2 2 2c17,11 36,17 56,17 14,0 27,-3 39,-8l3 -1 2 3c23,30 36,69 36,109 0,131 -136,162 -137,163l-1 0 0 0z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M263 38l0 226 -4 0c-77,11 -109,37 -109,37 -32,-24 -91,-34 -108,-37l-5 0 0 -226c0,0 75,-9 113,-37 0,0 31,30 113,37z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M267 37l-116 -37c-1,0 -2,0 -3,0l-116 37c-2,1 -4,3 -4,5l0 126c0,28 18,62 41,78l77 52c1,1 2,1 3,1 1,0 2,0 3,-1l77 -52c23,-16 41,-50 41,-78l0 -126c0,-2 -2,-4 -4,-5zm-7 131c0,25 -16,56 -37,70l-74 50 -74 -50c-20,-14 -37,-45 -37,-70l0 -123 111 -35 111 35 0 122z"></path><path d="M241 61l-89 -29c-1,0 -2,0 -3,0l-89 29c-2,1 -4,3 -4,5l0 99c0,22 14,49 33,62l59 41c1,1 2,1 3,1 1,0 2,0 3,-1l59 -41c18,-12 33,-40 33,-62l0 -99c0,-2 -2,-4 -4,-5zm-7 104c0,18 -13,43 -28,53l-56 39 -56 -39c-15,-10 -28,-35 -28,-53l0 -95 84 -27 84 27 0 95z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M192 293c-10,10 -26,10 -35,0l-138 -129c-8,-7 -17,-21 -18,-31 -2,-28 -1,-83 0,-112 0,-11 9,-19 20,-20 37,-1 115,-2 123,6l152 137c10,10 1,34 -9,44l-95 105zm-121 -250c-8,-8 -22,-8 -30,0 -8,8 -8,22 0,30 8,8 22,8 30,0 8,-8 8,-22 0,-30z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M163.429,22.979c-38.417-5.322-78.723,4.213-111.044,31.017 C-1.62,98.777-15.011,182.737,32.421,238.426c38.326,44.993,109.356,55.59,155.13,13.422c35.261-32.492,43.279-91.423,6.653-127.844 c-13.086-13.029-30.534-20.63-48.664-21.379c-18.118-0.761-37.71,5.968-50.735,22.214c-8.273,10.315-12.318,23.331-11.648,36.888 c0.682,13.545,8.115,29.189,23.296,36.041c11.136,5.035,18.618,3.279,27.865-0.835c4.618-2.063,10.442-5.403,13.719-12.992 c3.29-7.589,1.352-17.179-2.498-23.061c-2.729-4.445-7.286-7.454-12.428-8.178c-5.142-0.725-10.344,0.884-14.182,4.408 c0.548-3.598,1.243-7.982,2.912-10.057c5.617-7.012,12.964-9.603,22.041-9.222c9.077,0.381,19.276,4.838,25.782,11.322 c20.92,20.814,15.803,56.781-5.824,76.699c-30.034,27.679-78.576,20.323-104.804-10.475C25.23,175.689,34.833,113.652,74.425,80.828 c48.708-40.39,122.939-27.699,161.795,21.379c25.916,32.738,34.262,77.682,22.87,118.192c-2.644,9.382,2.766,19.144,12.062,21.797 c9.309,2.665,18.983-2.775,21.627-12.145c14.414-51.268,4.24-107.509-29.108-149.641c-25.27-31.927-61.823-52.109-100.24-57.431 L163.429,22.979z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="116,0 48,174 116,174 68,300 252,126 155,126 223,0"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M240 43c0,-9 0,-15 0,-15l-90 0 0 0 0 0 0 0 0 0 -90 0c0,0 0,6 0,15l-59 0 0 10c0,2 0,55 33,84 14,12 31,18 51,18 3,0 6,0 9,0 11,16 24,26 39,32l0 43 -43 0 0 27 -14 0 0 15 75 0 1 0 75 0 0 -15 -14 0 0 -27 -43 0 0 -43c15,-5 28,-16 39,-32 3,0 6,0 9,0 20,0 37,-6 51,-18 33,-29 33,-82 33,-84l0 -10 -59 0zm-194 79c-19,-16 -24,-45 -26,-60l40 0c2,19 6,42 15,62 2,4 3,7 5,11 -14,-1 -26,-5 -35,-13zm208 0c-9,8 -21,12 -35,13 2,-3 4,-7 5,-11 9,-20 13,-43 15,-62l40 0c-2,15 -7,43 -26,60z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="2,107 133,271 74,107"></polygon><polygon points="85,107 149,281 214,107"></polygon><polygon points="163,275 298,107 226,107"></polygon><polygon points="247,19 162,19 220,91"></polygon><polygon points="210,96 150,22 90,96"></polygon><polygon points="138,19 53,19 80,91"></polygon><polygon points="44,26 0,96 70,96"></polygon><polygon points="300,96 256,26 230,96"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><path d="M286 120c-14,-11 -21,-28 -19,-46 1,-11 -3,-23 -11,-31 -8,-8 -19,-12 -31,-11 -18,2 -35,-5 -46,-19 -7,-9 -18,-14 -30,-14 -12,0 -22,5 -30,14 -11,14 -28,21 -46,19 -11,-1 -23,3 -31,11 -8,8 -12,19 -11,31 2,18 -5,35 -19,46 -9,7 -14,18 -14,30 0,12 5,22 14,30 14,11 21,28 19,46 -1,11 3,23 11,31 8,8 19,12 31,11 18,-2 35,5 46,19 7,9 18,14 30,14 12,0 22,-5 30,-14 11,-14 28,-21 46,-19 11,1 23,-3 31,-11 8,-8 12,-19 11,-31 -2,-18 5,-35 19,-46 9,-7 14,-18 14,-30 0,-12 -5,-22 -14,-30z"></path></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="151,0 122,50 178,82"></polygon><polygon points="76,19 76,77 140,77"></polygon><polygon points="21,74 49,124 105,92"></polygon><polygon points="0,149 50,178 82,122"></polygon><polygon points="19,224 77,224 77,160"></polygon><polygon points="74,279 124,251 92,195"></polygon><polygon points="149,300 178,250 122,218"></polygon><polygon points="224,281 224,223 160,223"></polygon><polygon points="279,226 251,176 195,208"></polygon><polygon points="300,151 250,122 218,178"></polygon><polygon points="281,76 223,76 223,140"></polygon><polygon points="226,21 176,49 208,105"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="0,0 300,300 0,300"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="300,300 0,0 300,0"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><rect x="140" width="20" height="47"></rect><rect x="140" y="63" width="20" height="47"></rect><rect x="140" y="126" width="20" height="47"></rect><rect x="140" y="189" width="20" height="47"></rect><rect x="140" y="252" width="20" height="47"></rect></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><rect x="146" width="8" height="300"></rect></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><polygon points="0,150 38,125 75,150 113,125 150,150 187,125 225,150 262,125 300,150 300,175 262,150 225,175 187,150 150,175 113,150 75,175 38,150 0,175"></polygon></svg>'+
									'</span>'+
									'<span class="dpd_svg_contain">'+
										'<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 300 300"><rect y="146" width="300" height="8"></rect></svg>'+
									'</span>'+
	         					'</div>						'+
							'</div>'+
						'</div>'+
						'<div class="tab" style="display:none;" id="image">'+
							'<hr />'+
							'<h5 class="h-5" style="margin-top:20px;display: inline-block;width: 100%;">Imagens</h5>'+
							'<h6 class="h-6" style="margin-top:20px;display: inline-block;width: 100%;">Local</h6>'+
							'<input type="file" name="img_input" id="img_input" accept="image/*" style="display:none;">'+
						    '<label for="img_input" class="btn btn-primary themed active" '+
						    	'style="display:flex; justify-content: space-around;width: 75%;margin: 10px auto;">'+
								'<i class="fi fi-rr-picture"></i>Adicionar'+
							'</label>'+
							'<h6 class="h-6" style="margin-top:20px;display: inline-block;width: 100%;">Pixabay</h6>'+
							'<input type="text" class="form-control border border-secondary themed" placeholder="buscar" id="buscar" />'+
							'<div id="pixabay_content">'+
							'</div>'+
						'</div>'+
						'<div class="tab" style="display:none;" id="gallery">'+
							'modelos'+
						'</div>'+
					'</div>'+
				'</aside>'+
			'</div>'+
			'<div class="col">'+
				'<!-- CONTEUDO -->'+
				'<div class="row align-items-start">'+
					'<div id="canvas_wrapper" class="col d-flex justify-content-center" style="margin:1rem; flex-flow: column; height:calc(100vh - 3rem);">'+
						'<div class="row w-100 justify-content-center" style="position: relative;">'+
''+
							'<!-- CANVAS -->'+
							'<div class="col d-flex justify-content-center">'+
								'<canvas id="c"></canvas>'+
							'</div>'+
''+
						'</div>'+
						'<!-- BOTOES DE PAGINA -->'+
						'<div class="row w-100 mb-4 mt-4 justify-content-center">'+
							'<div class="btn-group w-50">'+
								'<button name="frente" class="btn text-light accent d-rounded inactive" onclick="getFrente()">Frente</button>'+
								'<button name="verso" class="btn text-light accent d-rounded" onclick="getVerso()">Verso</button>'+
							'</div>'+
						'</div>'+
						'<div class="btn-group w-100 justify-content-center">'+
							'<button title="Salvar e ir para o carrinho" onclick="salvar(canvas)" class="btn text-light accent d-rounded" style="width: 200px;flex: 0 0 auto;">'+
								'Salvar<i class="bi bi-cart-check"></i>'+
							'</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="col-xl-2 col-lg-3 col-lg-float"><!-- PROPRIEDADES -->'+
				'<aside class="row aside w-100 h-100 themed shadow" style="align-content:flex-start;margin:8px -5px;overflow: hidden;overflow-y: auto;">'+
					'<h5 class="h-5" style="margin-top:20px;display: inline-block;width: 100%;">Propriedades</h5>'+
					'<div id="p_canvas">'+
        				'<hr style="margin:10px;">'+
        				'<div class="btn-group w-100 mb-3 align-items-center">'+
                            '<button onclick="undo()" id="undo" class="btn btn-primary themed border border-secondary">'+
                                '<i class="bi bi-arrow-counterclockwise"></i>'+
                            '</button>'+
                            '<button onclick="redo()" id="redo" class="btn btn-primary themed border border-secondary">'+
                                '<i class="bi bi-arrow-clockwise"></i>'+
                            '</button>'+
                        '</div>'+
						'<hr style="margin:10px;">'+
						'<div class="btn-group w-100 mb-3 align-items-center justify-content-space-arowund">'+
							'<span class="col-4">Página</span>'+
							'<div class="col-8">'+
								'<div class="row">'+
									'<span id="w" class="col-6">W: 8.80</span>'+
									'<span id="h" class="col-6 text-center">H: 4.80</span><br />'+
								'</div>'+
								'<div class="row">'+
									'<span id="b" class="col-6">B: 0.20</span>'+
									'<span id="t" class="col-6 text-center">T: 0.20</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="btn-group w-100 mb-3 align-items-center justify-content-space-arowund">'+
							'<div class="col-6">Background</div>'+
							'<div class="col-6">'+
								'<input type="color" class="w-100 form-control form-control-color" id="bg-picker">'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id="general" style="display:none;">'+
						'<hr>'+
						'<div class="btn-group w-100 mb-2 align-items-center justify-content-space-arowund">'+
							'<div class="col-6">Cor</div>'+
							'<div class="col-6">'+
								'<input type="color" class="w-100 form-control form-control-color" id="picker">'+
							'</div>'+
						'</div>'+
						'<div class="btn-group w-100 mb-2 align-items-center justify-content-space-arowund">'+
							'<div class="form-check form-switch">'+
							  '<input class="form-check-input" type="checkbox" id="ligar_sombra">'+
							  '<label class="form-check-label" for="ligar_sombra">Sombra</label>'+
							'</div>'+
						'</div>'+
						'<div id="shadow_content" style="display:none;">'+
							'<div class="btn-group mb-2 w-100 align-items-center justify-content-space-arowund">'+
								'<div class="col-6">Cor</div>'+
								'<div class="col-6">'+
									'<input type="color" class="w-100 form-control form-control-color" id="shadow-picker">'+
								'</div>'+
							'</div>'+
							'<div class="btn-group mb-1 w-100 align-items-center justify-content-space-arowund">'+
								'<div class="col-4">X:</div>'+
								'<div class="input-group w-100">'+
									'<button class="btn btn-outline-secondary" onclick="shadow_offset(\'x\',\'-\')">-</button>'+
									'<input type="number" id="shadow_x" class="form-control border border-secondary themed" value="0" style="appearance:textfield;" disabled />'+
									'<button class="btn btn-outline-secondary" onclick="shadow_offset(\'x\',\'+\')" >+</button>'+
								'</div>'+
							'</div>'+
							'<div class="btn-group mb-1 w-100 align-items-center justify-content-space-arowund">'+
								'<div class="col-4">Y:</div>'+
								'<div class="input-group w-100">'+
									'<button class="btn btn-outline-secondary" onclick="shadow_offset(\'y\',\'-\')">-</button>'+
									'<input type="number" id="shadow_y" class="form-control border border-secondary themed" value="0" style="appearance:textfield;" disabled />'+
									'<button class="btn btn-outline-secondary" onclick="shadow_offset(\'y\',\'+\')" >+</button>'+
								'</div>'+
							'</div>'+
							'<div class="btn-group mb-1 w-100 align-items-center justify-content-space-arowund">'+
								'<div class="col-4">Tamanho</div>'+
								'<div class="input-group w-100">'+
									'<button class="btn btn-outline-secondary" onclick="shadowSize(\'-\')">-</button>'+
									'<input type="number" id="shadow_size" class="form-control border border-secondary themed" value="10" style="appearance:textfield;" disabled />'+
									'<button class="btn btn-outline-secondary" onclick="shadowSize(\'+\')" >+</button>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<hr style="width:100%;" />'+
						'<div class="row mb-3">'+
							'<h6 class="col-12">Com a seleção</h6>'+
							'<div class="row">'+
								'<div class="col-4 d-flex align-items-center">Edição</div>'+
								'<div class="col-8">'+
									'<button title="virar horizontal" class="btn btn-primary component mr-3" onclick="flipH(canvas)">'+
										'<i class="bi bi-symmetry-vertical"></i>'+
									'</button>'+
									'<button title="para frente" class="btn btn-primary component mr-3" style="transform: rotate(180deg);" onclick="bring(canvas)">'+
										'<i class="bi bi-front"></i>'+
									'</button>'+
									'<button title="duplicar" class="btn btn-primary component mr-3" onclick="duplicate(canvas)">'+
										'<i class="bi bi-files"></i>'+
									'</button>'+
									'<button title="virar vertical" class="btn btn-primary component mr-3" onclick="flipV(canvas)">'+
										'<i class="bi bi-symmetry-horizontal"></i>'+
									'</button>'+
									'<button title="para tras" class="btn btn-primary component mr-3" onclick="send(canvas)">'+
										'<i class="bi bi-back"></i>'+
									'</button>'+
									'<button title="excluir" class="btn btn-primary component mr-3" onclick="del(canvas)">'+
										'<i class="bi bi-trash"></i>'+
									'</button>'+
								'</div>'+
							'</div>'+
							'<div class="row" style="padding: 0;margin-left: 0;">'+
								'<div class="col-4 d-flex align-items-center">Posição</div>'+
								'<div class="col-8">'+
								  '<button title="Centro Horizontal" class="btn btn-primary component mr-3" type="button" onclick="centerH(canvas)" >'+
								  	'<i class="bi bi-align-center"></i>'+
								  '</button>'+
								  '<button title="Centro Vertical" class="btn btn-primary component mr-3" type="button" onclick="centerV(canvas)" >'+
								  	'<i class="bi bi-align-middle"></i>'+
								  '</button>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
						'<hr>'+
					'<div id="p_texto" style="display:none;">'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							'<span class="col-4">Texto</span>'+
							'<div class="btn-group w-100">'+
								'<select class="form-select btn-outline-secondary" id="select_font">'+
									'<option value="sans-serif">Sans serif</option>'+
									'<option value="Montserrat">Montserrat</option>'+
									'<option value="Times New Roman">Times new</option>'+
								'</select>'+
							'</div>'+
						'</div>'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							'<span class="col-4">Posição</span>'+
							'<div class="btn-group w-100">'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="textAlign(\'left\')">'+
							  	'<i class="bi bi-text-left"></i>'+
							  '</button>'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="textAlign(\'center\')" >'+
							  	'<i class="bi bi-text-center"></i>'+
							  '</button>'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="textAlign(\'right\')" >'+
							  	'<i class="bi bi-text-right"></i>'+
							  '</button>'+
							'</div>'+
						'</div>'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							'<span class="col-3">estilo</span>'+
							'<div class="btn-group w-100">'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="toggle_bold()">'+
							  	'<i class="bi bi-type-bold"></i>'+
							  '</button>'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="toggle_italic()" >'+
							  	'<i class="bi bi-type-italic"></i>'+
							  '</button>'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="toggle_underline()" >'+
							  	'<i class="bi bi-type-underline"></i>'+
							  '</button>'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="toggle_linethrough()" >'+
							  	'<i class="bi bi-type-strikethrough"></i>'+
							  '</button>'+
							'</div>'+
						'</div>'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							'<span class="col-4">Tamanho</span>'+
							'<div class="input-group w-100">'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="mudaFontSize(\'-\')">-</button>'+
							  '<input type="number" id="text_size" class="form-control border border-secondary themed" value="18" style="appearance:textfield;" disabled />'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="mudaFontSize(\'+\')" >+</button>'+
							'</div>'+
						'</div>'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							'<span class="col-4">Linha</span>'+
							'<div class="input-group w-100">'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="mudaFontLineSize(\'-\')">-</button>'+
							  '<input type="number" id="text_line_size" class="form-control border border-secondary themed" value="18" style="appearance:textfield;" disabled />'+
							  '<button class="btn btn-outline-secondary" type="button" onclick="mudaFontLineSize(\'+\')" >+</button>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div id="p_imagem" style="display:none;">'+
						'<hr>'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							'<span class="col-4">Imagem</span>'+
						'</div>'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							'<span class="col-4">Ajustar</span>'+
							'<div class="btn-group m-2 w-100">'+
							  '<button title="Encher" class="btn btn-outline-secondary w-100" type="button" onclick="img_fill()">'+
							  	'<i class="bi bi-arrows-fullscreen"></i>'+
							  '</button>'+
							  '<button title="Largura" class="btn btn-outline-secondary w-100" type="button" onclick="img_expand()" >'+
							  	'<i class="bi bi-arrows-angle-expand"></i>'+
							  '</button>'+
							'</div>'+
						'</div>'+
						'<span class="col-4">Filtro</span>'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							  '<button title="cinza" class="btn btn-outline-secondary w-100" onclick="img_filter(\'gray\')" >'+
							  	''+
							  '</button>'+
							  '<button title="desfoque" class="btn btn-outline-secondary w-100" onclick="img_filter(\'blur\')" >'+
							  	''+
							  '</button>'+
						'</div>'+
						'<div class="btn-group w-100 mb-1 align-items-center justify-content-space-arowund">'+
							'<button title="invertido" class="btn btn-outline-secondary w-100" onclick="img_filter(\'invert\')">'+
								''+
							'</button>'+
							'<button title="pixelado" class="btn btn-outline-secondary w-100" onclick="img_filter(\'pixelate\')" >'+
								''+
							'</button>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</aside>'+
			'</div>'+
		'</div>'+
	'</div>'        
    );
    
$('.btn[tab]').click(function(){
    $('.btn[tab]').removeClass('active');

    $(this).addClass('active');
    let x = $(this).attr('tab');
    $('.tab').hide();
    $('.tab#'+x).show();
});
    
$('.dpd_svg_contain').click(function(){
    svgString = $(this)[0].children[0].outerHTML;
    fabric.loadSVGFromString(svgString, function(objects, options) {
        var obj = fabric.util.groupSVGElements(objects, options);
        obj.set({
            left: 225,
            top: 125,
            tipo:'bi bi-stars',
            nome:'SVG'
        });
        obj = applyDefaults(obj);
        obj.scaleToWidth(100);
        canvas.add(obj);
        canvas.setActiveObject(obj);

    });
    canvas.requestRenderAll();
});

window.b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
};
    
window.download = function(canvas){
        var outra = atual == "frente" ? "verso" : "frente";
        var image1, image2, front, back; 
        image1 = canvas.toDataURL({
            format: 'jpeg',
            quality: 1,
            multiplier: window.multiplier
        });

        var aux = canvas.toJSON();
        canvas.loadFromJSON(window[outra]);
        canvas.requestRenderAll();
        image2 = canvas.toDataURL({
            format: 'jpeg',
            quality: 1,
            multiplier: window.multiplier
        });

        canvas.loadFromJSON(aux);
        canvas.requestRenderAll();
        if(window.atual == 'frente'){
            front = image1;
            back = image2;
        }else{
            back = image1;
            front = image2;
        }
    	instance.publishState("saved_canvas", JSON.stringify({front:front, back:back}));
    	instance.triggerEvent('save_is_clicked');
}

//funções gerais
window.applyDefaults = function(item){
    item.set('cornerStyle', "circle");
    item.set('cornerColor', "rgb(69,69,69)");
    item.set('cornerSize', "10");
    item.set('borderColor', "rgb(69,69,69)");
    item.set('transparentCorners', false);
    return item;
}

//troca de tela pra frente
window.getFrente = function(){
    if(atual == "frente"){return;}
    verso = canvas.toJSON();
    canvas.clear();
    canvas.loadFromJSON(frente);
    canvas.requestRenderAll();
    canvas.getObjects().forEach(item => {item = applyDefaults(item);})
    canvas.requestRenderAll();
    document.querySelector('[name="verso"]').classList.remove('inactive');
    document.querySelector('[name="frente"]').classList.add('inactive');
    atual = "frente";
    window.unselect();
}

//troca de tela pra verso
window.getVerso = function(){
    if(atual == "verso"){return;}
    frente = canvas.toJSON();
    canvas.clear();
    canvas.loadFromJSON(verso);
    canvas.requestRenderAll();
    canvas.getObjects().forEach(item => {item = applyDefaults(item);})
    canvas.requestRenderAll();
    document.querySelector('[name="frente"]').classList.remove('inactive');
    document.querySelector('[name="verso"]').classList.add('inactive');
    atual = "verso";
    window.unselect();
}


//troca de modo de draw pra select
window.draw = function(){
    document.getElementById('select').classList.remove("active");
    document.getElementById('draw').classList.add("active");
    $('#elements').css({"opacity":"0.5", "pointer-events":"none"});
    $('#qr_code').css({"opacity":"0.5", "pointer-events":"none"});
    $('#draw_pallete').css({"opacity":"1", "pointer-events":"all"});
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.color = document.querySelector('#brush-picker').value;
    //canvas.freeDrawingBrush.width = document.querySelector("#tam_pincel").value;
}

window.select = function(){
    document.getElementById('draw').classList.remove("active");
    document.getElementById('select').classList.add("active");
    $('#elements').css({"opacity":"1", "pointer-events":"all"});
    $('#qr_code').css({"opacity":"1", "pointer-events":"all"});
    $('#draw_pallete').css({"opacity":"0.5", "pointer-events":"none"});
    canvas.isDrawingMode = false;
}

  /**
   * Daqui em diante os controles são para inserir / editar itens
   */

  //FUNÇÕES DE INSERSÃO
window.textBox = function(){
    var texto = "Este é um texto de exemplo, clique duas vezes para editar.";
    var width = canvas.getWidth();
    var textbox = new fabric.Textbox(texto, {
        fontFamily:"sans-serif",
        left: 50,
        top: 50,
        fill: '#333',
        width:(width/2),
        fontSize:18,
        editable:true,
        tipo:'bi bi-fonts',
        nome:'Texto'
    });
    textbox = applyDefaults(textbox);
    canvas.add(textbox).setActiveObject(textbox);
    refreshLayers();
}

    /*-----------------------*/
    /* FUNÇÕES DE EDIÇÃO */
    /*-----------------------*/

  /* CANVAS */
window.pg_invert = function(){
    var outra = atual == "frente" ? "verso" : "frente";
    var aux = canvas.toJSON();
    //troca
    canvas.clear();
    canvas.loadFromJSON(window[outra]);
    window[outra] = aux;
    //renderiza
    canvas.requestRenderAll();
    canvas.getObjects().forEach(item => {item = applyDefaults(item);})
    canvas.requestRenderAll();
}

window.bg_color = function(canvas, color){
    canvas.backgroundColor = color;
    canvas.requestRenderAll();
}

/* GERAL */
window.del = function(canvas){
    canvas.getActiveObjects().forEach((el) => {
        canvas.remove(el);
    });
    canvas.requestRenderAll();
    
}

window.bring = function(canvas){
    canvas.getActiveObject().bringForward(true).set('dirty', true);
    canvas.requestRenderAll();
    
}

window.send = function(canvas){
    canvas.getActiveObject().sendBackwards(true);
    canvas.requestRenderAll();
    
}

window.flipH = function(canvas){
    var flip = !canvas.getActiveObject().get('flipX');
    canvas.getActiveObject().set('flipX', flip);
    canvas.requestRenderAll();
}

window.flipV = function(canvas){
    var flip = !canvas.getActiveObject().get('flipY');
    canvas.getActiveObject().set('flipY', flip);
    canvas.requestRenderAll();
}

window.alignTop = function(canvas){
    var item = canvas.getActiveObject()
    var y = item.height;
    item.set('top', (y/2));
    canvas.requestRenderAll();
}

window.alignLeft = function(canvas){
    var item = canvas.getActiveObject()
    var y = item.width;
    item.set('left', (y/2));
    canvas.requestRenderAll();
}

window.alignRight = function(canvas){
    var item = canvas.getActiveObject()
    var y = item.width;
    var offset = parseFloat(canvas.getWidth());
    y = offset - (y/2);
    item.set('left', y);
    canvas.requestRenderAll();
}

window.alignBottom = function(canvas){
    var item = canvas.getActiveObject()
    var y = item.height;
    var offset = parseFloat(canvas.getHeight());
    y = offset - (y/2);
    item.set('top', y);
    canvas.requestRenderAll();
}

window.centerH = function(canvas){
    canvas.getActiveObject().centerH();
    canvas.requestRenderAll();
}

window.centerV = function(canvas){
    canvas.getActiveObject().centerV();
    canvas.requestRenderAll();
}

window.duplicate = function(canvas){
    canvas.getActiveObject().clone(function(cloned) {
      clonedObj = cloned;
  });
    canvas.discardActiveObject();
    clonedObj.set({
        left: clonedObj.left + 10,
        top: clonedObj.top + 10,
        evented: true,
    });
    if (clonedObj.type === 'activeSelection') {
        // active selection needs a reference to the canvas.
        clonedObj.canvas = canvas;
        clonedObj.forEachObject(function(obj) {
          canvas.add(obj);
      });
        // this should solve the unselectability
        clonedObj.setCoords();
    } else {
        canvas.add(clonedObj);
    }

    clonedObj = applyDefaults(clonedObj);
    canvas.setActiveObject(clonedObj);
    canvas.requestRenderAll();
    
}

/* TEXTO */

window.toggle_bold = function(){
    var atual = canvas.getActiveObject();
    atual.set('fontWeight', atual.fontWeight == "bold" ? "normal" : "bold");
    canvas.requestRenderAll();
    //atual.set('fontFamily', atual.fontFamily);
}

window.toggle_italic = function(){
    var atual = canvas.getActiveObject();
    atual.set('fontStyle', atual.fontStyle == "italic" ? "normal" : "italic");
    canvas.requestRenderAll();
}

window.toggle_underline = function(){
    var atual = canvas.getActiveObject();
    atual.set('underline', !atual.underline);
    canvas.requestRenderAll();
}

window.toggle_linethrough = function(){
    var atual = canvas.getActiveObject();
    atual.set('linethrough', !atual.linethrough);
    canvas.requestRenderAll();
}

window.textAlign = function(val){
    var atual = canvas.getActiveObject();
    atual.set('textAlign', val);
    canvas.requestRenderAll();
}

window.mudaFontSize = function(val){
    var x = parseFloat($('#text_size').val());
    if(val == "+"){
        x +=1;
    }else{
        x -=1;
    }
    canvas.getActiveObject().set('fontSize', x)
    $('#text_size').val(x);
    canvas.requestRenderAll();    
}

window.mudaFontLineSize = function(val){
    var x = parseFloat($('#text_line_size').val());
    if(val == "+"){
        x +=0.1;
    }else{
        x -=0.1;
    }
    canvas.getActiveObject().set('lineHeight', x)
    $('#text_line_size').val(x);
    canvas.requestRenderAll();    
}

/*IMAGEM*/
window.img_fill = function(){
    if(canvas.getActiveObject().type != undefined && canvas.getActiveObject().type == "image"){
        var x = canvas.getActiveObject();
        var c_width = x.width / canvas.getWidth();
        var c_height = x.height / canvas.getHeight();
        canvas.getActiveObject().scaleX = (1 / c_width);
        canvas.getActiveObject().scaleY = (1 / c_height);
        canvas.getActiveObject().centerV();
        canvas.getActiveObject().centerH();
        canvas.requestRenderAll();    
    }
}

window.img_expand = function(){
    if(canvas.getActiveObject().type == "image"){
        var x = canvas.getActiveObject();
        x.scaleToWidth(canvas.getWidth());
        canvas.getActiveObject().centerV();
        canvas.getActiveObject().centerH();
        canvas.requestRenderAll();    
    }
}

window.img_filter = function(filter_name){
    var img = canvas.getActiveObject();
    var filter = null;
    var insere = true;
    var index = 0;
    for(var i = 0; i < img.filters.length; i++){ 
        console.log(img.filters[i]);
        console.log(filter_name);
        if(img.filters[i].name == filter_name){
            insere = false;//remove
            index = i;
        }
    }

    if(insere == true){
        switch(filter_name){
            case 'gray':
                filter = new fabric.Image.filters.Grayscale();
                break;
            case 'blur':
                filter = new fabric.Image.filters.Blur({blur:0.5});
                break;
            case 'pixelate':
                filter = new fabric.Image.filters.Pixelate({ blocksize: 8 });
                break;
            case 'invert':
                filter = new fabric.Image.filters.Invert();
                break;
            default:
                img.filters = [];
                break;
        }
        filter.name = filter_name;
        img.filters.push(filter);
    }else{
        img.filters.splice(index, 1);
    }

    img.applyFilters();
    canvas.renderAll();
    canvas.requestRenderAll();    
}

window.img_clear = function(){
    if(canvas.getActiveObject().type == "image"){
        canvas.getActiveObject().filters.pop();
        canvas.getActiveObject().applyFilters();
        canvas.requestRenderAll();    
    }
}

window.clear_all = function(){
    canvas.clear();
    canvas.backgroundColor = "#fff";
}

window.remShadow = function(){
    canvas.getActiveObject().shadow = null;
    canvas.requestRenderAll();
}

window.remStroke = function(){
    canvas.getActiveObject().strokeWidth = null;
    canvas.requestRenderAll();
}

/* FUNCOES DE MODIFICAÇÃO*/

window.mudaPincel = function(val){
    var x = parseFloat($('#pincel_text').val());
    if(val == "+"){
        x +=1;
    }else{
        x -=1;
    }
    if(x <= 0){ x = 1; }
    if(x >= 30){ x = 30; }

    canvas.freeDrawingBrush.width = x;
    $('#pincel_text').val(x);    
}

//EVENTOS 
document.addEventListener('input', function(e){
    if(e.target.id=="picker"){
        var color = e.target.value;
        canvas.getActiveObjects().forEach(item => {
            item.set('fill', color);
            if (item._objects) {
              for (var i = 0; i < item._objects.length; i++) {
                item._objects[i].set({ 'fill': color });
              }
            }
        });
        canvas.requestRenderAll();
    }else if(e.target.id=="bg-picker"){
        canvas.backgroundColor = e.target.value;
        canvas.requestRenderAll();
    }else if(e.target.id=="brush-picker"){
        canvas.freeDrawingBrush.color = e.target.value;
        canvas.requestRenderAll();
    }else if(e.target.id=="shadow-picker"){
        let x = canvas.getActiveObject();
        var shadow = new fabric.Shadow({
            blur: x.shadow.blur || 10,
            offsetX: x.shadow.offsetX || 0,
            offsetY: x.shadow.offsetY || 0,
            affectStroke: true,
            color: e.target.value,
        });
        x.shadow = shadow;
        canvas.requestRenderAll();
    }else if(e.target.id=="stroke"){
        canvas.getActiveObject().stroke = e.target.value;
        canvas.getActiveObject().strokeWidth = canvas.getActiveObject().strokeWidth == null 
        ? 2 
        : canvas.getActiveObject().strokeWidth;
        canvas.requestRenderAll();
    }
});

window.shadow_offset = function(offset, val){
    var aux = parseFloat($('#shadow_'+offset).val());
    aux = val == "+" ? aux+1 : aux-1;
    $('#shadow_'+offset).val(aux);

    canvas.getActiveObjects().forEach(item => {
        if(offset == 'x'){
            item.shadow.offsetX = aux;
        }else{
            item.shadow.offsetY = aux;
        }
    });
    canvas.requestRenderAll();     
}

window.shadowSize = function(val){
    var aux = parseFloat($('#shadow_size').val());
    aux = val == "+" ? aux+1 : aux-1;
    if(aux <= 0){ aux = 1; }
    $('#shadow_size').val(aux);

    canvas.getActiveObjects().forEach(item => {
            item.shadow.blur = aux;
    });
    canvas.requestRenderAll();     
}

document.addEventListener('change', function(e){
    if(e.target.id == "img_input"){
        var reader = new FileReader();
        reader.onload = function (event){
            var imgObj = new Image();
            imgObj.src = event.target.result;
            imgObj.onload = function () {
                var image = new fabric.Image(imgObj);
                image.set({
                    angle: 0,
                    padding: 10,
                });
                image = applyDefaults(image);
                canvas.centerObject(image);
                canvas.add(image);
                
                canvas.requestRenderAll();
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }else if(e.target.id == "buscar"){
        var q = encodeURI(e.target.value);
        fetch('https://pixabay.com/api/?key=30369946-84b553996645256900afe1fb4&q=&image_type=photo&pretty=true&q='+q)
            .then(res => res.json())
            .then(res => {
                $('#pixabay_content').html('');
                for(let i = 0; i < res.hits.length; i++){
                    $('#pixabay_content').append('<img src="'+
                    res.hits[i].previewURL+
                    '" style="display:block;float:left;width:90px;height:70px;" onclick="inserir_pixabay(this)" ref="'+
                    res.hits[i].largeImageURL+'" crossorigin="anonymous" />');
                }
        });
    }else if(e.target.id == "select_font"){
        var atual = canvas.getActiveObject();
        atual.fontFamily = e.target.value;
        canvas.requestRenderAll();
    }else if(e.target.id=="stroke_size"){
        var atual = canvas.getActiveObject();
        atual.strokeWidth = e.target.value;
        canvas.requestRenderAll();
    }else if(e.target.id=="ligar_sombra"){
        if($('#shadow_content').is(':visible')){
            canvas.getActiveObjects().forEach(item => {item.shadow = undefined;});
            $('#shadow_content').toggle();
        }else{
            $('#shadow_content').toggle();
            var shadow = new fabric.Shadow({
                blur: 10,
                offsetX: 0,
                offsetY: 0,
                affectStroke: true,
                color: $('#shadow-picker').val(),
            });   
            canvas.getActiveObject().shadow = shadow; 
        }
        canvas.requestRenderAll();
    }
});

//EVENTOS DE TECLA DE ATALHO

document.addEventListener('keydown', function(e){
    if(e.code ==="Delete" && canvas.getActiveObject() != undefined){
        canvas.getActiveObjects().forEach((el) => {
            canvas.remove(el);
        });
        return;
    }
    switch(e.code){
        case "Escape":
            canvas.discardActiveObject();
            break;
        case "ArrowLeft":
           canvas.getActiveObjects().forEach((el) => {
               el.set('left', (el.left-1 <= 0) ? el.left : el.left-1);
           }); 
           break;
        case "ArrowUp":
           canvas.getActiveObjects().forEach((el) => {
               el.set('top', (el.top-1 <= 0) ? el.top : el.top-1);
           }); 
           break;
        case "ArrowRight":
           canvas.getActiveObjects().forEach((el) => {
               el.set('left', (el.left+1 >= canvas.getWidth()) ? el.left : el.left+1);
           }); 
           break;
        case "ArrowDown":
           canvas.getActiveObjects().forEach((el) => {
               el.set('top', (el.top+1 >= canvas.getHeight()) ? el.top : el.top+1);
           }); 
           break;
        default:
            return;
    }    
    canvas.requestRenderAll();
});

document.addEventListener('click', (e) => {
    if(e.target.tagName == "CANVAS" && canvas.getActiveObjects().length == 1){
        $("#p_canvas").hide();
        $("#general").show();
        //aqui vai ser checado qual é o elemento selecionado
       var x = canvas.getActiveObject();
       if(x.text != undefined){//texto
            $("#p_texto").show();
            $("#p_imagem").hide();
            $('#text_size').val(x.fontSize);
            $('#text_line_size').val(x.lineHeight);
       }else if(x.text == undefined && x._element != undefined && x._element.tagName == "IMG"){//imagem
            $("#p_texto").hide();
            $("#p_imagem").show();
       }else{
            $("#general").show();
            $("#p_imagem").hide();
            $("#p_texto").hide();
        }
        if(x.shadow != undefined){
            if($('#shadow_content').is(':hidden')){ $('#shadow_content').show(); }
            if(!$("#ligar_sombra").is(':checked')){ $("#ligar_sombra").click(); }
            $("#shadow_size").val(x.shadow.blur);
            $("#shadow_x").val(x.shadow.offsetX);
            $("#shadow_y").val(x.shadow.offsetY);
            $("#shadow-picker").val(x.shadow.color);
            if($("#ligar_sombra").prop('checked') == false ){ 
                $("#ligar_sombra").prop('checked', true); 
            }
        }else{
            if($("#ligar_sombra").is(':checked')){ $("#ligar_sombra").click(); }
            if($('#shadow_content').is(':visible')){ $('#shadow_content').hide(); }
        }
    }else if(e.target.tagName == "CANVAS" && canvas.getActiveObjects().length > 1){
        $("#p_canvas").hide();
        $("#general").show();
        $("#p_texto").hide();
        $("#p_imagem").hide();
    }else if(e.target.tagName == "CANVAS" && canvas.getActiveObjects().length == 0){
        //p_canvas tem q aparecer qndo clica em nada
        $("#p_canvas").show();
        $("#general").hide();
        $("#p_imagem").hide();
        $("#p_texto").hide();
    }else if(e.target.id=="canvas_wrapper"){
        $("#p_canvas").show();
        $("#general").hide();
        $("#p_imagem").hide();
        $("#p_texto").hide();
        window.unselect();
    }
});

window.unselect = function(){
    if (canvas){
        canvas._activeObject = null;
        canvas.requestRenderAll();
        $("#p_canvas").show();
        $("#general").hide();
        $("#p_imagem").hide();
        $("#p_texto").hide();
    }
}

window.qrcode = function(){
    let qr = $('#qr_url').val() == "" ? "https://example.com" : $('#qr_url').val();
    let qr_cor = $('#qr_color').val();
    let cod = new QRCode(document.getElementById("qrcode"), {
        width: 250,
        height: 250,
        text:qr,
        colorDark:qr_cor,
        colorLight : "#ffffff00",
        correctLevel : QRCode.CorrectLevel.H
    });
    //cod.makeCode(qr);
    var c = document.querySelector("#qrcode canvas")
    res = c.toDataURL();
    document.querySelector("#qrcode").innerHTML = "";
    var oImg = fabric.Image.fromURL(res, function(oImg){
        oImg.set('tipo','bi bi-qr-code');
        oImg.set('nome', 'Qr code');
        oImg.set('left', 125);
        oImg.set('top', 125);
        oImg.scaleToWidth(100);
        oImg = applyDefaults(oImg);
        canvas.add(oImg);
        
    });
}

fetch('https://pixabay.com/api/?key=30369946-84b553996645256900afe1fb4&q=&image_type=photo&pretty=true')
.then(res => res.json())
.then(res => {
    for(let i = 0; i < res.hits.length; i++){
        document.querySelector('#pixabay_content').innerHTML += '<img src="'+
        res.hits[i].previewURL+
        '" style="display:block;float:left;width:90px;height:70px;" onclick="inserir_pixabay(this)" ref="'+
        res.hits[i].largeImageURL+'" crossorigin="anonymous" />';
    }
});

window.inserir_pixabay = function(self){
    getURLBase64(self.getAttribute('ref')).then(res => {
        var oImg = fabric.Image.fromURL(res, function(oImg){
            oImg.set('tipo','fi fi-rr-picture');
            oImg.set('nome', 'Imagem');
            oImg.scaleToWidth(canvas.getWidth());
            oImg = applyDefaults(oImg);
            canvas.add(oImg);
            
        });
    });
    
}

window.getURLBase64 = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = () => {
      const base64data = reader.result;   
      resolve(base64data);
    }
  });
}
    
}