function(instance, properties) {

	$(instance.canvas).append(
        "<center style=\"height:800px\">"+
            "<div style=\"border: 1px solid #d3d3d3;margin:auto;width:500px;height:300px;display:flex;justify-content:center;align-items:center\">"+
                  "<h3 style=\"text-align:center;font-family:sans-serif;color:#aaaaaa;\">Canvas container space</h3>"+
            "</div>"+
        "</center>"
    );
    $(instance.canvas).css({'display': 'flex', 'flex-flow':'row wrap', 'align-items':'center','justify-content':'center'});

}