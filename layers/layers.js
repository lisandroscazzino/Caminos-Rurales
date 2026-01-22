ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:22185").setExtent([5216589.340390, 6185301.489831, 5324073.548640, 6247630.208337]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_interveciones_caminos_1 = new ol.format.GeoJSON();
var features_interveciones_caminos_1 = format_interveciones_caminos_1.readFeatures(json_interveciones_caminos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22185'});
var jsonSource_interveciones_caminos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_interveciones_caminos_1.addFeatures(features_interveciones_caminos_1);
var lyr_interveciones_caminos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_interveciones_caminos_1, 
                style: style_interveciones_caminos_1,
                popuplayertitle: 'interveciones_caminos',
                interactive: true,
    title: 'interveciones_caminos<br />\
    <img src="styles/legend/interveciones_caminos_1_0.png" /> ARREGLO/REPASO<br />' });
var format_CAMINOSRURALESRUFINO_2 = new ol.format.GeoJSON();
var features_CAMINOSRURALESRUFINO_2 = format_CAMINOSRURALESRUFINO_2.readFeatures(json_CAMINOSRURALESRUFINO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22185'});
var jsonSource_CAMINOSRURALESRUFINO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAMINOSRURALESRUFINO_2.addFeatures(features_CAMINOSRURALESRUFINO_2);
var lyr_CAMINOSRURALESRUFINO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAMINOSRURALESRUFINO_2, 
                style: style_CAMINOSRURALESRUFINO_2,
                popuplayertitle: 'CAMINOS RURALES RUFINO',
                interactive: true,
    title: 'CAMINOS RURALES RUFINO<br />\
    <img src="styles/legend/CAMINOSRURALESRUFINO_2_0.png" /> TIERRA<br />\
    <img src="styles/legend/CAMINOSRURALESRUFINO_2_1.png" /> EMPEDRADO<br />\
    <img src="styles/legend/CAMINOSRURALESRUFINO_2_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_interveciones_caminos_1.setVisible(true);lyr_CAMINOSRURALESRUFINO_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_interveciones_caminos_1,lyr_CAMINOSRURALESRUFINO_2];
lyr_interveciones_caminos_1.set('fieldAliases', {'fid': 'fid', 'tipo_trabajo': 'tipo_trabajo', 'fecha': 'fecha', 'descripcion': 'descripcion', });
lyr_CAMINOSRURALESRUFINO_2.set('fieldAliases', {'fid': 'fid', 'nombre_camino': 'nombre_camino', 'tipo_superficie': 'tipo_superficie', 'estado_general': 'estado_general', 'observaciones': 'observaciones', });
lyr_interveciones_caminos_1.set('fieldImages', {'fid': 'TextEdit', 'tipo_trabajo': 'TextEdit', 'fecha': 'DateTime', 'descripcion': 'TextEdit', });
lyr_CAMINOSRURALESRUFINO_2.set('fieldImages', {'fid': 'TextEdit', 'nombre_camino': 'TextEdit', 'tipo_superficie': 'TextEdit', 'estado_general': 'TextEdit', 'observaciones': 'TextEdit', });
lyr_interveciones_caminos_1.set('fieldLabels', {'fid': 'hidden field', 'tipo_trabajo': 'inline label - always visible', 'fecha': 'inline label - always visible', 'descripcion': 'inline label - always visible', });
lyr_CAMINOSRURALESRUFINO_2.set('fieldLabels', {'fid': 'hidden field', 'nombre_camino': 'inline label - always visible', 'tipo_superficie': 'inline label - always visible', 'estado_general': 'inline label - always visible', 'observaciones': 'inline label - always visible', });
lyr_CAMINOSRURALESRUFINO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});