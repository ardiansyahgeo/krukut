var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google  hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CITRAGOOGLE_1 = new ol.layer.Tile({
            'title': 'CITRA GOOGLE',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_13_DAS_DKI_2 = new ol.format.GeoJSON();
var features_13_DAS_DKI_2 = format_13_DAS_DKI_2.readFeatures(json_13_DAS_DKI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_13_DAS_DKI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_13_DAS_DKI_2.addFeatures(features_13_DAS_DKI_2);
var lyr_13_DAS_DKI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_13_DAS_DKI_2, 
                style: style_13_DAS_DKI_2,
                popuplayertitle: "13_DAS_DKI",
                interactive: true,
                title: '<img src="styles/legend/13_DAS_DKI_2.png" /> 13_DAS_DKI'
            });
var format_DASKRUKUT_3 = new ol.format.GeoJSON();
var features_DASKRUKUT_3 = format_DASKRUKUT_3.readFeatures(json_DASKRUKUT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DASKRUKUT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DASKRUKUT_3.addFeatures(features_DASKRUKUT_3);
var lyr_DASKRUKUT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DASKRUKUT_3, 
                style: style_DASKRUKUT_3,
                popuplayertitle: "DAS KRUKUT",
                interactive: true,
                title: '<img src="styles/legend/DASKRUKUT_3.png" /> DAS KRUKUT'
            });
var format_waduk_taman_ria_senayan_4 = new ol.format.GeoJSON();
var features_waduk_taman_ria_senayan_4 = format_waduk_taman_ria_senayan_4.readFeatures(json_waduk_taman_ria_senayan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_taman_ria_senayan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_taman_ria_senayan_4.addFeatures(features_waduk_taman_ria_senayan_4);
var lyr_waduk_taman_ria_senayan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduk_taman_ria_senayan_4, 
                style: style_waduk_taman_ria_senayan_4,
                popuplayertitle: "waduk_taman_ria_senayan",
                interactive: true,
                title: '<img src="styles/legend/waduk_taman_ria_senayan_4.png" /> waduk_taman_ria_senayan'
            });
var format_waduk_puri_oasis_5 = new ol.format.GeoJSON();
var features_waduk_puri_oasis_5 = format_waduk_puri_oasis_5.readFeatures(json_waduk_puri_oasis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_puri_oasis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_puri_oasis_5.addFeatures(features_waduk_puri_oasis_5);
var lyr_waduk_puri_oasis_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduk_puri_oasis_5, 
                style: style_waduk_puri_oasis_5,
                popuplayertitle: "waduk_puri_oasis",
                interactive: true,
                title: '<img src="styles/legend/waduk_puri_oasis_5.png" /> waduk_puri_oasis'
            });
var format_waduk_prapanca_6 = new ol.format.GeoJSON();
var features_waduk_prapanca_6 = format_waduk_prapanca_6.readFeatures(json_waduk_prapanca_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_prapanca_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_prapanca_6.addFeatures(features_waduk_prapanca_6);
var lyr_waduk_prapanca_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduk_prapanca_6, 
                style: style_waduk_prapanca_6,
                popuplayertitle: "waduk_prapanca",
                interactive: true,
                title: '<img src="styles/legend/waduk_prapanca_6.png" /> waduk_prapanca'
            });
var format_waduk_nila_taman_margasatwa_7 = new ol.format.GeoJSON();
var features_waduk_nila_taman_margasatwa_7 = format_waduk_nila_taman_margasatwa_7.readFeatures(json_waduk_nila_taman_margasatwa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_nila_taman_margasatwa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_nila_taman_margasatwa_7.addFeatures(features_waduk_nila_taman_margasatwa_7);
var lyr_waduk_nila_taman_margasatwa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduk_nila_taman_margasatwa_7, 
                style: style_waduk_nila_taman_margasatwa_7,
                popuplayertitle: "waduk_nila_taman_margasatwa",
                interactive: true,
                title: '<img src="styles/legend/waduk_nila_taman_margasatwa_7.png" /> waduk_nila_taman_margasatwa'
            });
var format_waduk_dadap__merah_8 = new ol.format.GeoJSON();
var features_waduk_dadap__merah_8 = format_waduk_dadap__merah_8.readFeatures(json_waduk_dadap__merah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_dadap__merah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_dadap__merah_8.addFeatures(features_waduk_dadap__merah_8);
var lyr_waduk_dadap__merah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduk_dadap__merah_8, 
                style: style_waduk_dadap__merah_8,
                popuplayertitle: "waduk_dadap__merah",
                interactive: true,
                title: '<img src="styles/legend/waduk_dadap__merah_8.png" /> waduk_dadap__merah'
            });
var format_waduk_cilandak_marinir_9 = new ol.format.GeoJSON();
var features_waduk_cilandak_marinir_9 = format_waduk_cilandak_marinir_9.readFeatures(json_waduk_cilandak_marinir_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_cilandak_marinir_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_cilandak_marinir_9.addFeatures(features_waduk_cilandak_marinir_9);
var lyr_waduk_cilandak_marinir_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduk_cilandak_marinir_9, 
                style: style_waduk_cilandak_marinir_9,
                popuplayertitle: "waduk_cilandak_marinir",
                interactive: true,
                title: '<img src="styles/legend/waduk_cilandak_marinir_9.png" /> waduk_cilandak_marinir'
            });
var format_waduk_cilandak_kel_pondok_labu_10 = new ol.format.GeoJSON();
var features_waduk_cilandak_kel_pondok_labu_10 = format_waduk_cilandak_kel_pondok_labu_10.readFeatures(json_waduk_cilandak_kel_pondok_labu_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_cilandak_kel_pondok_labu_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_cilandak_kel_pondok_labu_10.addFeatures(features_waduk_cilandak_kel_pondok_labu_10);
var lyr_waduk_cilandak_kel_pondok_labu_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduk_cilandak_kel_pondok_labu_10, 
                style: style_waduk_cilandak_kel_pondok_labu_10,
                popuplayertitle: "waduk_cilandak_kel_pondok_labu",
                interactive: true,
                title: '<img src="styles/legend/waduk_cilandak_kel_pondok_labu_10.png" /> waduk_cilandak_kel_pondok_labu'
            });
var format_Waduk_Brigif_11 = new ol.format.GeoJSON();
var features_Waduk_Brigif_11 = format_Waduk_Brigif_11.readFeatures(json_Waduk_Brigif_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waduk_Brigif_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waduk_Brigif_11.addFeatures(features_Waduk_Brigif_11);
var lyr_Waduk_Brigif_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waduk_Brigif_11, 
                style: style_Waduk_Brigif_11,
                popuplayertitle: "Waduk_Brigif",
                interactive: true,
                title: '<img src="styles/legend/Waduk_Brigif_11.png" /> Waduk_Brigif'
            });
var format_waduk_badan_penyuluhan_pertanian_poncol_12 = new ol.format.GeoJSON();
var features_waduk_badan_penyuluhan_pertanian_poncol_12 = format_waduk_badan_penyuluhan_pertanian_poncol_12.readFeatures(json_waduk_badan_penyuluhan_pertanian_poncol_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_badan_penyuluhan_pertanian_poncol_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_badan_penyuluhan_pertanian_poncol_12.addFeatures(features_waduk_badan_penyuluhan_pertanian_poncol_12);
var lyr_waduk_badan_penyuluhan_pertanian_poncol_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduk_badan_penyuluhan_pertanian_poncol_12, 
                style: style_waduk_badan_penyuluhan_pertanian_poncol_12,
                popuplayertitle: "waduk_badan_penyuluhan_pertanian_poncol",
                interactive: true,
                title: '<img src="styles/legend/waduk_badan_penyuluhan_pertanian_poncol_12.png" /> waduk_badan_penyuluhan_pertanian_poncol'
            });
var format_waduh_taman_margasatwa_ragunan_13 = new ol.format.GeoJSON();
var features_waduh_taman_margasatwa_ragunan_13 = format_waduh_taman_margasatwa_ragunan_13.readFeatures(json_waduh_taman_margasatwa_ragunan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduh_taman_margasatwa_ragunan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduh_taman_margasatwa_ragunan_13.addFeatures(features_waduh_taman_margasatwa_ragunan_13);
var lyr_waduh_taman_margasatwa_ragunan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waduh_taman_margasatwa_ragunan_13, 
                style: style_waduh_taman_margasatwa_ragunan_13,
                popuplayertitle: "waduh_taman_margasatwa_ragunan",
                interactive: true,
                title: '<img src="styles/legend/waduh_taman_margasatwa_ragunan_13.png" /> waduh_taman_margasatwa_ragunan'
            });
var format_Situ_Mangga_Bolong_14 = new ol.format.GeoJSON();
var features_Situ_Mangga_Bolong_14 = format_Situ_Mangga_Bolong_14.readFeatures(json_Situ_Mangga_Bolong_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Situ_Mangga_Bolong_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Situ_Mangga_Bolong_14.addFeatures(features_Situ_Mangga_Bolong_14);
var lyr_Situ_Mangga_Bolong_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Situ_Mangga_Bolong_14, 
                style: style_Situ_Mangga_Bolong_14,
                popuplayertitle: "Situ_Mangga_Bolong",
                interactive: true,
                title: '<img src="styles/legend/Situ_Mangga_Bolong_14.png" /> Situ_Mangga_Bolong'
            });
var format_Situ_Babakan_15 = new ol.format.GeoJSON();
var features_Situ_Babakan_15 = format_Situ_Babakan_15.readFeatures(json_Situ_Babakan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Situ_Babakan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Situ_Babakan_15.addFeatures(features_Situ_Babakan_15);
var lyr_Situ_Babakan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Situ_Babakan_15, 
                style: style_Situ_Babakan_15,
                popuplayertitle: "Situ_Babakan",
                interactive: true,
                title: '<img src="styles/legend/Situ_Babakan_15.png" /> Situ_Babakan'
            });
var format_Embung_Kebagusan_16 = new ol.format.GeoJSON();
var features_Embung_Kebagusan_16 = format_Embung_Kebagusan_16.readFeatures(json_Embung_Kebagusan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embung_Kebagusan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embung_Kebagusan_16.addFeatures(features_Embung_Kebagusan_16);
var lyr_Embung_Kebagusan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embung_Kebagusan_16, 
                style: style_Embung_Kebagusan_16,
                popuplayertitle: "Embung_Kebagusan",
                interactive: true,
                title: '<img src="styles/legend/Embung_Kebagusan_16.png" /> Embung_Kebagusan'
            });
var format_Embung_jl_lapangan_merah_17 = new ol.format.GeoJSON();
var features_Embung_jl_lapangan_merah_17 = format_Embung_jl_lapangan_merah_17.readFeatures(json_Embung_jl_lapangan_merah_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embung_jl_lapangan_merah_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embung_jl_lapangan_merah_17.addFeatures(features_Embung_jl_lapangan_merah_17);
var lyr_Embung_jl_lapangan_merah_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embung_jl_lapangan_merah_17, 
                style: style_Embung_jl_lapangan_merah_17,
                popuplayertitle: "Embung_jl_lapangan_merah",
                interactive: true,
                title: '<img src="styles/legend/Embung_jl_lapangan_merah_17.png" /> Embung_jl_lapangan_merah'
            });
var format_Embung_jl_Aselih_18 = new ol.format.GeoJSON();
var features_Embung_jl_Aselih_18 = format_Embung_jl_Aselih_18.readFeatures(json_Embung_jl_Aselih_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embung_jl_Aselih_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embung_jl_Aselih_18.addFeatures(features_Embung_jl_Aselih_18);
var lyr_Embung_jl_Aselih_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embung_jl_Aselih_18, 
                style: style_Embung_jl_Aselih_18,
                popuplayertitle: "Embung_jl_Aselih",
                interactive: true,
                title: '<img src="styles/legend/Embung_jl_Aselih_18.png" /> Embung_jl_Aselih'
            });
var format_Embung_Jagakarsa_19 = new ol.format.GeoJSON();
var features_Embung_Jagakarsa_19 = format_Embung_Jagakarsa_19.readFeatures(json_Embung_Jagakarsa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Embung_Jagakarsa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Embung_Jagakarsa_19.addFeatures(features_Embung_Jagakarsa_19);
var lyr_Embung_Jagakarsa_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Embung_Jagakarsa_19, 
                style: style_Embung_Jagakarsa_19,
                popuplayertitle: "Embung_Jagakarsa",
                interactive: true,
                title: '<img src="styles/legend/Embung_Jagakarsa_19.png" /> Embung_Jagakarsa'
            });
var format_streammodelhidrologiLidarDemnas_20 = new ol.format.GeoJSON();
var features_streammodelhidrologiLidarDemnas_20 = format_streammodelhidrologiLidarDemnas_20.readFeatures(json_streammodelhidrologiLidarDemnas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streammodelhidrologiLidarDemnas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streammodelhidrologiLidarDemnas_20.addFeatures(features_streammodelhidrologiLidarDemnas_20);
var lyr_streammodelhidrologiLidarDemnas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streammodelhidrologiLidarDemnas_20, 
                style: style_streammodelhidrologiLidarDemnas_20,
                popuplayertitle: "stream model hidrologi Lidar Demnas",
                interactive: true,
                title: '<img src="styles/legend/streammodelhidrologiLidarDemnas_20.png" /> stream model hidrologi Lidar Demnas'
            });
var format_rencana_drainase_RDTR_21 = new ol.format.GeoJSON();
var features_rencana_drainase_RDTR_21 = format_rencana_drainase_RDTR_21.readFeatures(json_rencana_drainase_RDTR_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rencana_drainase_RDTR_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rencana_drainase_RDTR_21.addFeatures(features_rencana_drainase_RDTR_21);
var lyr_rencana_drainase_RDTR_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rencana_drainase_RDTR_21, 
                style: style_rencana_drainase_RDTR_21,
                popuplayertitle: "rencana_drainase_RDTR",
                interactive: true,
    title: 'rencana_drainase_RDTR<br />\
    <img src="styles/legend/rencana_drainase_RDTR_21_0.png" /> Jaringan Drainase Primer<br />\
    <img src="styles/legend/rencana_drainase_RDTR_21_1.png" /> Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/rencana_drainase_RDTR_21_2.png" /> Jaringan Drainase Tersier<br />'
        });
var format_RencanaPolderRDTR_22 = new ol.format.GeoJSON();
var features_RencanaPolderRDTR_22 = format_RencanaPolderRDTR_22.readFeatures(json_RencanaPolderRDTR_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RencanaPolderRDTR_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RencanaPolderRDTR_22.addFeatures(features_RencanaPolderRDTR_22);
var lyr_RencanaPolderRDTR_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RencanaPolderRDTR_22, 
                style: style_RencanaPolderRDTR_22,
                popuplayertitle: "Rencana Polder RDTR",
                interactive: true,
                title: '<img src="styles/legend/RencanaPolderRDTR_22.png" /> Rencana Polder RDTR'
            });
var format_EmbungWadukDalamDasKrukut_23 = new ol.format.GeoJSON();
var features_EmbungWadukDalamDasKrukut_23 = format_EmbungWadukDalamDasKrukut_23.readFeatures(json_EmbungWadukDalamDasKrukut_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmbungWadukDalamDasKrukut_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmbungWadukDalamDasKrukut_23.addFeatures(features_EmbungWadukDalamDasKrukut_23);
var lyr_EmbungWadukDalamDasKrukut_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmbungWadukDalamDasKrukut_23, 
                style: style_EmbungWadukDalamDasKrukut_23,
                popuplayertitle: "Embung Waduk Dalam Das Krukut",
                interactive: true,
    title: 'Embung Waduk Dalam Das Krukut<br />\
    <img src="styles/legend/EmbungWadukDalamDasKrukut_23_0.png" /> Belum terbangun-Tidak terakomodir di RDTR<br />\
    <img src="styles/legend/EmbungWadukDalamDasKrukut_23_1.png" /> Sudah terbangun<br />'
        });
var group_DTA = new ol.layer.Group({
                                layers: [lyr_waduk_taman_ria_senayan_4,lyr_waduk_puri_oasis_5,lyr_waduk_prapanca_6,lyr_waduk_nila_taman_margasatwa_7,lyr_waduk_dadap__merah_8,lyr_waduk_cilandak_marinir_9,lyr_waduk_cilandak_kel_pondok_labu_10,lyr_Waduk_Brigif_11,lyr_waduk_badan_penyuluhan_pertanian_poncol_12,lyr_waduh_taman_margasatwa_ragunan_13,lyr_Situ_Mangga_Bolong_14,lyr_Situ_Babakan_15,lyr_Embung_Kebagusan_16,lyr_Embung_jl_lapangan_merah_17,lyr_Embung_jl_Aselih_18,lyr_Embung_Jagakarsa_19,],
                                fold: "open",
                                title: "DTA"});

lyr_googlehybrid_0.setVisible(true);lyr_CITRAGOOGLE_1.setVisible(true);lyr_13_DAS_DKI_2.setVisible(true);lyr_DASKRUKUT_3.setVisible(true);lyr_waduk_taman_ria_senayan_4.setVisible(true);lyr_waduk_puri_oasis_5.setVisible(true);lyr_waduk_prapanca_6.setVisible(true);lyr_waduk_nila_taman_margasatwa_7.setVisible(true);lyr_waduk_dadap__merah_8.setVisible(true);lyr_waduk_cilandak_marinir_9.setVisible(true);lyr_waduk_cilandak_kel_pondok_labu_10.setVisible(true);lyr_Waduk_Brigif_11.setVisible(true);lyr_waduk_badan_penyuluhan_pertanian_poncol_12.setVisible(true);lyr_waduh_taman_margasatwa_ragunan_13.setVisible(true);lyr_Situ_Mangga_Bolong_14.setVisible(true);lyr_Situ_Babakan_15.setVisible(true);lyr_Embung_Kebagusan_16.setVisible(true);lyr_Embung_jl_lapangan_merah_17.setVisible(true);lyr_Embung_jl_Aselih_18.setVisible(true);lyr_Embung_Jagakarsa_19.setVisible(true);lyr_streammodelhidrologiLidarDemnas_20.setVisible(true);lyr_rencana_drainase_RDTR_21.setVisible(false);lyr_RencanaPolderRDTR_22.setVisible(false);lyr_EmbungWadukDalamDasKrukut_23.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_CITRAGOOGLE_1,lyr_13_DAS_DKI_2,lyr_DASKRUKUT_3,group_DTA,lyr_streammodelhidrologiLidarDemnas_20,lyr_rencana_drainase_RDTR_21,lyr_RencanaPolderRDTR_22,lyr_EmbungWadukDalamDasKrukut_23];
lyr_13_DAS_DKI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'grid_code': 'grid_code', 'Keterangan': 'Keterangan', 'Keterang_1': 'Keterang_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas': 'Luas', });
lyr_DASKRUKUT_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'grid_code': 'grid_code', 'Keterangan': 'Keterangan', 'Keterang_1': 'Keterang_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas': 'Luas', });
lyr_waduk_taman_ria_senayan_4.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_waduk_puri_oasis_5.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_waduk_prapanca_6.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_waduk_nila_taman_margasatwa_7.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_waduk_dadap__merah_8.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_waduk_cilandak_marinir_9.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_waduk_cilandak_kel_pondok_labu_10.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_Waduk_Brigif_11.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_waduk_badan_penyuluhan_pertanian_poncol_12.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_waduh_taman_margasatwa_ragunan_13.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_Situ_Mangga_Bolong_14.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_Situ_Babakan_15.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_Embung_Kebagusan_16.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_Embung_jl_lapangan_merah_17.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_Embung_jl_Aselih_18.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_Embung_Jagakarsa_19.set('fieldAliases', {'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', });
lyr_streammodelhidrologiLidarDemnas_20.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', });
lyr_rencana_drainase_RDTR_21.set('fieldAliases', {'objectid': 'objectid', 'namobj': 'namobj', 'orde01': 'orde01', 'orde02': 'orde02', 'jnsrsr': 'jnsrsr', 'stsjrn': 'stsjrn', 'wadmpr': 'wadmpr', 'wadmkk': 'wadmkk', 'remark': 'remark', 'sbdata': 'sbdata', 'SHAPE__Len': 'SHAPE__Len', });
lyr_RencanaPolderRDTR_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', });
lyr_EmbungWadukDalamDasKrukut_23.set('fieldAliases', {'fid_': 'fid_', 'no_': 'no_', 'nama_waduk': 'nama_waduk', 'wilayah': 'wilayah', 'luas_renca': 'luas_renca', 'luas_sudah': 'luas_sudah', 'luas_belum': 'luas_belum', 'luas_kerin': 'luas_kerin', 'luas_basah': 'luas_basah', 'luas_total': 'luas_total', 'inlet': 'inlet', 'outlet': 'outlet', 'sistem_das': 'sistem_das', 'jenis': 'jenis', 'fungsional': 'fungsional', 'kewenangan': 'kewenangan', 'status_kep': 'status_kep', 'status_pem': 'status_pem', 'status_p_1': 'status_p_1', 'pompa': 'pompa', 'kecamatan': 'kecamatan', 'kelurahan': 'kelurahan', 'alamat': 'alamat', 'latitude': 'latitude', 'longitude': 'longitude', 'status_k_1': 'status_k_1', 'RDTR': 'RDTR', 'label': 'label', });
lyr_13_DAS_DKI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'grid_code': 'TextEdit', 'Keterangan': 'TextEdit', 'Keterang_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas': 'TextEdit', });
lyr_DASKRUKUT_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'grid_code': 'TextEdit', 'Keterangan': 'TextEdit', 'Keterang_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas': 'TextEdit', });
lyr_waduk_taman_ria_senayan_4.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_waduk_puri_oasis_5.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_waduk_prapanca_6.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_waduk_nila_taman_margasatwa_7.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_waduk_dadap__merah_8.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_waduk_cilandak_marinir_9.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_waduk_cilandak_kel_pondok_labu_10.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_Waduk_Brigif_11.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_waduk_badan_penyuluhan_pertanian_poncol_12.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_waduh_taman_margasatwa_ragunan_13.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_Situ_Mangga_Bolong_14.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_Situ_Babakan_15.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_Embung_Kebagusan_16.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_Embung_jl_lapangan_merah_17.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_Embung_jl_Aselih_18.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_Embung_Jagakarsa_19.set('fieldImages', {'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', });
lyr_streammodelhidrologiLidarDemnas_20.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'IN_FLOW': 'Range', 'OUT_FLOW': 'Range', 'DRAIN_AREA': 'TextEdit', });
lyr_rencana_drainase_RDTR_21.set('fieldImages', {'objectid': 'TextEdit', 'namobj': 'TextEdit', 'orde01': 'TextEdit', 'orde02': 'TextEdit', 'jnsrsr': 'TextEdit', 'stsjrn': 'TextEdit', 'wadmpr': 'TextEdit', 'wadmkk': 'TextEdit', 'remark': 'TextEdit', 'sbdata': 'TextEdit', 'SHAPE__Len': 'TextEdit', });
lyr_RencanaPolderRDTR_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_EmbungWadukDalamDasKrukut_23.set('fieldImages', {'fid_': 'TextEdit', 'no_': 'TextEdit', 'nama_waduk': 'TextEdit', 'wilayah': 'TextEdit', 'luas_renca': 'TextEdit', 'luas_sudah': 'TextEdit', 'luas_belum': 'TextEdit', 'luas_kerin': 'TextEdit', 'luas_basah': 'TextEdit', 'luas_total': 'TextEdit', 'inlet': 'TextEdit', 'outlet': 'TextEdit', 'sistem_das': 'TextEdit', 'jenis': 'TextEdit', 'fungsional': 'TextEdit', 'kewenangan': 'TextEdit', 'status_kep': 'TextEdit', 'status_pem': 'TextEdit', 'status_p_1': 'TextEdit', 'pompa': 'TextEdit', 'kecamatan': 'TextEdit', 'kelurahan': 'TextEdit', 'alamat': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'status_k_1': 'TextEdit', 'RDTR': 'TextEdit', 'label': 'TextEdit', });
lyr_13_DAS_DKI_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'grid_code': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Keterang_1': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_DASKRUKUT_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'grid_code': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Keterang_1': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_waduk_taman_ria_senayan_4.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_waduk_puri_oasis_5.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_waduk_prapanca_6.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_waduk_nila_taman_margasatwa_7.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_waduk_dadap__merah_8.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_waduk_cilandak_marinir_9.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_waduk_cilandak_kel_pondok_labu_10.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_Waduk_Brigif_11.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_waduk_badan_penyuluhan_pertanian_poncol_12.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_waduh_taman_margasatwa_ragunan_13.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'no label', 'NEXT_STREA': 'no label', });
lyr_Situ_Mangga_Bolong_14.set('fieldLabels', {'LAYER': 'no label', 'STREAM_ID': 'inline label - always visible', 'NEXT_STREA': 'inline label - always visible', });
lyr_Situ_Babakan_15.set('fieldLabels', {'LAYER': 'inline label - always visible', 'STREAM_ID': 'inline label - always visible', 'NEXT_STREA': 'inline label - always visible', });
lyr_Embung_Kebagusan_16.set('fieldLabels', {'LAYER': 'inline label - always visible', 'STREAM_ID': 'inline label - visible with data', 'NEXT_STREA': 'inline label - always visible', });
lyr_Embung_jl_lapangan_merah_17.set('fieldLabels', {'LAYER': 'inline label - always visible', 'STREAM_ID': 'inline label - always visible', 'NEXT_STREA': 'inline label - always visible', });
lyr_Embung_jl_Aselih_18.set('fieldLabels', {'LAYER': 'inline label - always visible', 'STREAM_ID': 'inline label - always visible', 'NEXT_STREA': 'inline label - always visible', });
lyr_Embung_Jagakarsa_19.set('fieldLabels', {'LAYER': 'inline label - always visible', 'STREAM_ID': 'inline label - always visible', 'NEXT_STREA': 'inline label - always visible', });
lyr_streammodelhidrologiLidarDemnas_20.set('fieldLabels', {'LAYER': 'no label', 'ELEVATION': 'no label', 'STREAM_ID': 'no label', 'IN_FLOW': 'no label', 'OUT_FLOW': 'no label', 'DRAIN_AREA': 'no label', });
lyr_rencana_drainase_RDTR_21.set('fieldLabels', {'objectid': 'inline label - always visible', 'namobj': 'inline label - always visible', 'orde01': 'inline label - always visible', 'orde02': 'inline label - always visible', 'jnsrsr': 'inline label - always visible', 'stsjrn': 'inline label - always visible', 'wadmpr': 'inline label - always visible', 'wadmkk': 'inline label - always visible', 'remark': 'inline label - always visible', 'sbdata': 'inline label - always visible', 'SHAPE__Len': 'inline label - always visible', });
lyr_RencanaPolderRDTR_22.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_EmbungWadukDalamDasKrukut_23.set('fieldLabels', {'fid_': 'inline label - always visible', 'no_': 'inline label - always visible', 'nama_waduk': 'inline label - always visible', 'wilayah': 'inline label - always visible', 'luas_renca': 'inline label - always visible', 'luas_sudah': 'inline label - always visible', 'luas_belum': 'inline label - always visible', 'luas_kerin': 'inline label - always visible', 'luas_basah': 'inline label - always visible', 'luas_total': 'inline label - always visible', 'inlet': 'inline label - always visible', 'outlet': 'inline label - always visible', 'sistem_das': 'inline label - always visible', 'jenis': 'inline label - always visible', 'fungsional': 'inline label - always visible', 'kewenangan': 'inline label - always visible', 'status_kep': 'inline label - always visible', 'status_pem': 'inline label - always visible', 'status_p_1': 'inline label - always visible', 'pompa': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'kelurahan': 'inline label - always visible', 'alamat': 'inline label - visible with data', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'status_k_1': 'inline label - always visible', 'RDTR': 'inline label - always visible', 'label': 'inline label - always visible', });
lyr_EmbungWadukDalamDasKrukut_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});