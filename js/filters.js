$(document).ready(function() {
    //Get fileters elements
    /*
    url="php/get_theme.php";
    $.getJSON(url, function(result) {
        $.each(result, function(i, field) {
          var theme=field.themee;
          var options= '<option value= "hanaa"> Hanaa </option>';
          $('#select_themes').append($('<option>', { 
            value: theme,
            text : theme 
          }));
          //$('#select_themes').html(options);
          //document.getElementById("select_themes").innerHTML=theme;
        }); 
    }); 
    */
    //Filter
    //1. Get the selected id
    /*
    var a = [
        {"TEST1":45,"TEST2":23,"TEST3":"DATA1"},
        {"TEST1":46,"TEST2":24,"TEST3":"DATA2"},
        {"TEST1":47,"TEST2":25,"TEST3":"DATA3"}
       ];
       
       $.each (a, function (bb) {
           console.log (bb);
           console.log (a[bb]);
           console.log (a[bb].TEST1);
       });
       */
      /*
    $("#select_themes").change(function() {
        var id = $(this).children(":selected").attr("id");
        //alert(id);
        //2. Applying filters
        $.ajax({
            type: 'POST',
            url: 'php/articles_by_theme.php',
            data: { 'id_theme': id},
            dataType:'json',
            beforeSend: function() {
                //$("#go_button").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; Applying...');
                //alert('selected id');
            },
            success: function(result) {
                // Articles by selected theme
                //alert(result);
                //JSON.parse(result);
                //alert(typeof result);
                var vectorSource_theme = new ol.source.Vector();
                $.each(result, function(i, field) {
                    //alert("hanaa");
                    //alert(field.x);
                    
                    
                    var x=field.x;
                    var y=field.y;
                    var point = new ol.geom.Point([x, y]);
                    var feature = new ol.Feature({
                        name: "Feature",
                        geometry: point
                    });
                    vectorSource_theme.addFeature(feature);
                    
                });
                
                var articles_theme= new ol.layer.Vector({
                    title: 'Articles',
                    timeInfo: null,
                    isSelectable: true,
                    source: vectorSource_theme
                });
                //alert("Hanaaaa");
                map.addLayer(articles_theme);
                var extent = articles_theme.getSource().getExtent();
                map.getView().fit(extent, map.getSize());  
                
            }

        });
    });*/
});