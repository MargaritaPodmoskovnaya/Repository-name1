var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_highway_1 = new ol.format.GeoJSON();
var features_highway_1 = format_highway_1.readFeatures(json_highway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_1.addFeatures(features_highway_1);
var lyr_highway_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_1, 
                style: style_highway_1,
                interactive: true,
                title: '<img src="styles/legend/highway_1.png" /> highway'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                interactive: true,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_lab1_3 = new ol.format.GeoJSON();
var features_lab1_3 = format_lab1_3.readFeatures(json_lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_3.addFeatures(features_lab1_3);
var lyr_lab1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lab1_3, 
                style: style_lab1_3,
                interactive: true,
                title: '<img src="styles/legend/lab1_3.png" /> lab1'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_4, 
                style: style_building_4,
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_highway_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_lab1_3.setVisible(true);lyr_building_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_highway_1,lyr_highway_2,lyr_lab1_3,lyr_building_4,lyr_highway_5,lyr_highway_6];
lyr_highway_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'railway': 'railway', 'tactile_paving': 'tactile_paving', 'crossing:markings': 'crossing:markings', 'crossing:island': 'crossing:island', 'crossing': 'crossing', });
lyr_highway_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'int_ref': 'int_ref', 'ref': 'ref', });
lyr_lab1_3.set('fieldAliases', {'name': 'name', });
lyr_building_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'address': 'address', });
lyr_highway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'railway': 'railway', 'public_transport': 'public_transport', 'name': 'name', 'bus': 'bus', 'tactile_paving': 'tactile_paving', 'crossing:markings': 'crossing:markings', 'crossing:island': 'crossing:island', 'crossing': 'crossing', });
lyr_highway_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'int_ref': 'int_ref', 'ref': 'ref', });
lyr_highway_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'railway': '', 'tactile_paving': '', 'crossing:markings': '', 'crossing:island': '', 'crossing': '', });
lyr_highway_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'name:ru': '', 'name:en': '', 'name': '', 'maxspeed': '', 'lanes': '', 'int_ref': '', 'ref': '', });
lyr_lab1_3.set('fieldImages', {'name': 'TextEdit', });
lyr_building_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'address': '', });
lyr_highway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'railway': '', 'public_transport': '', 'name': '', 'bus': '', 'tactile_paving': '', 'crossing:markings': '', 'crossing:island': '', 'crossing': '', });
lyr_highway_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'layer': '', 'bridge': '', 'surface': '', 'name:ru': '', 'name:en': '', 'name': '', 'maxspeed': '', 'lanes': '', 'int_ref': '', 'ref': '', });
lyr_highway_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'railway': 'no label', 'tactile_paving': 'no label', 'crossing:markings': 'no label', 'crossing:island': 'no label', 'crossing': 'no label', });
lyr_highway_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'int_ref': 'no label', 'ref': 'no label', });
lyr_lab1_3.set('fieldLabels', {'name': 'no label', });
lyr_building_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'address': 'no label', });
lyr_highway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'railway': 'no label', 'public_transport': 'no label', 'name': 'no label', 'bus': 'no label', 'tactile_paving': 'no label', 'crossing:markings': 'no label', 'crossing:island': 'no label', 'crossing': 'no label', });
lyr_highway_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'int_ref': 'no label', 'ref': 'no label', });
lyr_highway_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});