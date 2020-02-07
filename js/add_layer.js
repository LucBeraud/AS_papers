//alert("Script loaded");
$(document).ready(function() {
  // Popup overlay with popupClass=anim
  var popup = new ol.Overlay.Popup({
    popupClass: "default anim", //"tooltips", "warning" "black" "default", "tips", "shadow",
    closeBox: true,
    onclose: function() { console.log("You close the box"); },
    autoPan: true,
    autoPanAnimation: { duration: 100 }
  }); 
  //Basemaps
  var groupBaseMaps=new ol.layer.Group({
    'title': 'Basemaps',
    layers: [
      new ol.layer.Tile({
        title: "World Imagery (ESRI)",
        type: 'base',
        source: new ol.source.XYZ({ 
          url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' 
        })
      }),
      new ol.layer.Tile({
        title: 'Open Streets Map',
        type: 'base',
        source: new ol.source.OSM()
      })
    ],
    overlays: [popup]
  });
  //map
  var map = new ol.Map({
    target: 'map',
    layers: [groupBaseMaps],
    view: new ol.View({
      center: ol.proj.fromLonLat([1.7191, 46.7111]),
      zoom: 4
    }),
    controls: ol.control.defaults({
      attribution: false,
      zoom: false
    })
  });
  // Layer switcher (Plugin Opacity-LayerSwitcher)
  var layerSwitcher = new ol.control.LayerSwitcher({
    enableOpacitySliders: true
  });
  map.addControl(layerSwitcher);
  // Scale line 
  var scaleLineControl = new ol.control.ScaleLine();
  scaleLineControl.setUnits('metric');
  map.addControl(scaleLineControl);
  // Zoom Slider 
  zoomslider = new ol.control.ZoomSlider();
  map.addControl(zoomslider);
  // Getting layer from Postgresql as GeoJSON
  var vectorSource = new ol.source.Vector();
  var url = "php/get_layer.php";
  $.getJSON(url, function(result) {
    $.each(result, function(i, field) {
      var x=field.x
      var y=field.y
      var point = new ol.geom.Point([x, y]);
      var feature = new ol.Feature({
        name: "Feature",
        geometry: point
      });
      vectorSource.addFeature(feature);
    });
    var articles_layer= new ol.layer.Vector({
      title: 'Articles',
      timeInfo: null,
      isSelectable: true,
      source: vectorSource
    });
    map.addLayer(articles_layer);
    var extent = articles_layer.getSource().getExtent();
    map.getView().fit(extent, map.getSize());  
  }); 
});
