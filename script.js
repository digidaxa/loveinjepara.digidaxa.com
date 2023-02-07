(function(){
    var script = {
 "start": "this.playAudioList([this.audio_EC6C0879_C293_9251_419B_006FFBFC54BF]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_DDA9D90F_C272_F3B1_41E4_D076910C04D8], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_DDAE290F_C272_F3B1_41CD_A2DEA5D8D953].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_E2E90D17_C271_73D2_41E5_850BC4E2FF83",
  "this.Container_DDA9890F_C272_F3B1_4194_49BE822D82AE",
  "this.Container_E133BBAF_C276_96F2_41D4_119658FA6019",
  "this.Container_E07F092E_C3BF_93F3_41E0_BE24258BC1EA",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "class": "Player",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_DDA9C90F_C272_F3B1_41E3_5B9E1898C2B3",
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "hfov": 80,
  "yaw": -17.39,
  "pitch": 2.76,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -5.86,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7FB5007_C2AF_71B2_41B0_53D8A557E09D",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "class": "SlideOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 141.23,
  "pitch": 10.5,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C824324A_C271_B1B2_41E0_30A5018FA488_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -10.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F06F3F79_C2AF_8E5E_41E0_B5D1610087AD",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_camera"
  },
  {
   "media": "this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_camera"
  },
  {
   "media": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_camera"
  },
  {
   "media": "this.panorama_C819C9B3_C273_92D2_41D5_39B951499B11",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C819C9B3_C273_92D2_41D5_39B951499B11_camera"
  },
  {
   "media": "this.panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_camera"
  },
  {
   "media": "this.panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_camera"
  },
  {
   "media": "this.panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_camera"
  },
  {
   "media": "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_camera"
  },
  {
   "media": "this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_camera"
  },
  {
   "media": "this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_camera"
  },
  {
   "media": "this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_camera"
  },
  {
   "media": "this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_camera"
  },
  {
   "media": "this.panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_camera"
  },
  {
   "media": "this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488_camera"
  },
  {
   "media": "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_camera"
  },
  {
   "media": "this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C_camera"
  },
  {
   "media": "this.panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_camera"
  },
  {
   "media": "this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_camera"
  }
 ],
 "id": "ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/zoomImage_E914D393_C292_96D2_41E3_6B7AD92000B9_0_0.jpg",
   "width": 5184,
   "height": 3456,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E914D393_C292_96D2_41E3_6B7AD92000B9_0_1.jpg",
   "width": 4096,
   "height": 2730,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E914D393_C292_96D2_41E3_6B7AD92000B9_0_2.jpg",
   "width": 2048,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E914D393_C292_96D2_41E3_6B7AD92000B9_0_3.jpg",
   "width": 1024,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E914D393_C292_96D2_41E3_6B7AD92000B9_0_4.jpg",
   "width": 512,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E958E543_C291_B3B0_41C4_9081823CA5CE",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -133.37,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7C89FDA_C2AF_8E52_41BF_ED10D541EF80",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2",
 "id": "panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867",
 "overlays": [
  "this.overlay_CD26720C_C291_91B6_41C6_D194B8C724F0",
  "this.overlay_D2DFFF37_C293_8FD2_4194_26860405DFF9",
  "this.overlay_D9D709AC_C2AE_B2F7_41C2_5982C57904B0",
  "this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -103.39,
   "distance": 1,
   "backwardYaw": -0.03,
   "panorama": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 37.87,
   "distance": 1,
   "backwardYaw": 4.28,
   "panorama": "this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_t.jpg",
 "hfovMax": 80
},
{
 "levels": [
  {
   "url": "media/zoomImage_ED91474F_C29F_7FB2_41E5_03F715C1215C_0_0.jpg",
   "width": 5184,
   "height": 3456,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_ED91474F_C29F_7FB2_41E5_03F715C1215C_0_1.jpg",
   "width": 4096,
   "height": 2730,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_ED91474F_C29F_7FB2_41E5_03F715C1215C_0_2.jpg",
   "width": 2048,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_ED91474F_C29F_7FB2_41E5_03F715C1215C_0_3.jpg",
   "width": 1024,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_ED91474F_C29F_7FB2_41E5_03F715C1215C_0_4.jpg",
   "width": 512,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E947A53F_C291_B3D1_41E7_985D28C3812B",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -1.89,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7839FA2_C2AF_8EF2_41B3_493377DC3175",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_camera",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/zoomImage_E9EE286C_C292_B276_41AB_3DE2B28A6845_0_0.jpg",
   "width": 5184,
   "height": 3456,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9EE286C_C292_B276_41AB_3DE2B28A6845_0_1.jpg",
   "width": 4096,
   "height": 2730,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9EE286C_C292_B276_41AB_3DE2B28A6845_0_2.jpg",
   "width": 2048,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9EE286C_C292_B276_41AB_3DE2B28A6845_0_3.jpg",
   "width": 1024,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9EE286C_C292_B276_41AB_3DE2B28A6845_0_4.jpg",
   "width": 512,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E95F1546_C291_B3B3_41D0_EF52C53F4C3B",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -140.93,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6CAB0CE_C2AF_72B2_4177_06C91CD1063C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 135.56,
  "pitch": -4.86,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C819C9B3_C273_92D2_41D5_39B951499B11_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E95F6547_C291_B3B1_41D3_5375C732481D",
 "class": "FadeInEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -1.89,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F004EF10_C2AF_8FAE_41C4_E1EB6C373500",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_out",
 "duration": 200,
 "id": "effect_5B21667B_4F08_3100_41C7_3B45A9C1819F",
 "class": "FadeOutEffect"
},
{
 "easing": "quad_out",
 "duration": 200,
 "id": "effect_406C8EDB_5426_70A1_41AB_C419AD03A638",
 "class": "FadeOutEffect"
},
{
 "easing": "quad_in",
 "duration": 400,
 "from": "left",
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "class": "SlideInEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0.75,
  "pitch": 0.1,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_camera",
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_EC6C0879_C293_9251_419B_006FFBFC54BF.ogg",
  "mp3Url": "media/audio_EC6C0879_C293_9251_419B_006FFBFC54BF.mp3",
  "class": "AudioResource"
 },
 "id": "audio_EC6C0879_C293_9251_419B_006FFBFC54BF",
 "data": {
  "label": "Ice & Fire - King Canyon"
 },
 "class": "MediaAudio"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "9",
 "id": "panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C",
 "overlays": [
  "this.overlay_D1165C57_C292_9252_41E3_C124CBC2CD5E",
  "this.overlay_D660A7DF_C291_FE51_41DA_BEE8FA640985",
  "this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 178.11,
   "distance": 1,
   "backwardYaw": 3.82,
   "panorama": "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 5.65,
   "distance": 1,
   "backwardYaw": 10.5,
   "panorama": "this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_t.jpg",
 "hfovMax": 80
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E958F544_C291_B3B7_41D8_1D6C079EE4E4",
 "class": "FadeInEffect"
},
{
 "levels": [
  {
   "url": "media/zoomImage_E90A40CF_C293_92B1_41BF_4717D8D6DF82_0_0.jpg",
   "width": 5184,
   "height": 3456,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E90A40CF_C293_92B1_41BF_4717D8D6DF82_0_1.jpg",
   "width": 4096,
   "height": 2730,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E90A40CF_C293_92B1_41BF_4717D8D6DF82_0_2.jpg",
   "width": 2048,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E90A40CF_C293_92B1_41BF_4717D8D6DF82_0_3.jpg",
   "width": 1024,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E90A40CF_C293_92B1_41BF_4717D8D6DF82_0_4.jpg",
   "width": 512,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E95F9548_C291_B3BF_41E5_701A9934BAD7",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/zoomImage_E9FF410B_C293_73B2_41DF_EFB384071EA6_0_0.jpg",
   "width": 4090,
   "height": 2727,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9FF410B_C293_73B2_41DF_EFB384071EA6_0_1.jpg",
   "width": 2047,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9FF410B_C293_73B2_41DF_EFB384071EA6_0_2.jpg",
   "width": 1023,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9FF410B_C293_73B2_41DF_EFB384071EA6_0_3.jpg",
   "width": 511,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E95EE545_C291_B3B1_41CE_C6E1BE196BE3",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "14",
 "id": "panorama_C824324A_C271_B1B2_41E0_30A5018FA488",
 "overlays": [
  "this.overlay_D4391C24_C2B2_91F6_41DA_C3FECBA7B170",
  "this.overlay_D58E0079_C2B1_F25E_41E6_015263744A14",
  "this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -56.89,
   "distance": 1,
   "backwardYaw": -8.35,
   "panorama": "this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 132.36,
   "distance": 1,
   "backwardYaw": -59.78,
   "panorama": "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_t.jpg",
 "hfovMax": 80
},
{
 "levels": [
  {
   "url": "media/zoomImage_E9FAA385_C292_96B1_41A7_5E09ACA217D0_0_0.jpg",
   "width": 5184,
   "height": 3456,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9FAA385_C292_96B1_41A7_5E09ACA217D0_0_1.jpg",
   "width": 4096,
   "height": 2730,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9FAA385_C292_96B1_41A7_5E09ACA217D0_0_2.jpg",
   "width": 2048,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9FAA385_C292_96B1_41A7_5E09ACA217D0_0_3.jpg",
   "width": 1024,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9FAA385_C292_96B1_41A7_5E09ACA217D0_0_4.jpg",
   "width": 512,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E95E9547_C291_B3B1_41AC_BF29AD787675",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 109.95,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6864093_C2AF_72D2_41E1_41183D6661C8",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "class": "SlideOutEffect"
},
{
 "levels": [
  {
   "url": "media/zoomImage_E9F53B6C_C293_9676_417F_160E6348FD6E_0_0.jpg",
   "width": 5184,
   "height": 3456,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9F53B6C_C293_9676_417F_160E6348FD6E_0_1.jpg",
   "width": 4096,
   "height": 2730,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9F53B6C_C293_9676_417F_160E6348FD6E_0_2.jpg",
   "width": 2048,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9F53B6C_C293_9676_417F_160E6348FD6E_0_3.jpg",
   "width": 1024,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E9F53B6C_C293_9676_417F_160E6348FD6E_0_4.jpg",
   "width": 512,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E95C9549_C291_B3B1_41D8_23678B8EF6EC",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -47.64,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7B68FCC_C2AF_8EB6_41E3_B660F3F30BE0",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "11",
 "id": "panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A",
 "overlays": [
  "this.overlay_D4C0CBA5_C296_96F6_41D2_85B3A1D71DF0",
  "this.overlay_D77DE04B_C291_91B1_41DE_3E5E8DF6AD6B",
  "this.overlay_D573554F_C2B3_73B2_41E6_3112DCC0012C",
  "this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -8.35,
   "distance": 1,
   "backwardYaw": -56.89,
   "panorama": "this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 176.98,
   "distance": 1,
   "backwardYaw": 174.14,
   "panorama": "this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 76.83,
   "distance": 1,
   "backwardYaw": -165.44,
   "panorama": "this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 46.79,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7D82FEA_C2AF_8E72_41E5_DF72AEBF3783",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_25FE7E90_3014_D1B3_41A1_6EBC34409425",
 "class": "SlideOutEffect"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E95D7549_C291_B3B1_41E4_EDA4686C6353",
 "class": "FadeInEffect"
},
{
 "easing": "quad_out",
 "duration": 200,
 "id": "effect_4016129C_5467_90A7_41B5_2C5E462A0C83",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -174.35,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F72E4030_C2AF_71EE_41DD_020F92658C3E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -142.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6A830AF_C2AF_72F2_41E7_7CE1D00FD764",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E95FE546_C291_B3B3_41E7_723D3BB90F79",
 "class": "FadeInEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -176.18,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F720003E_C2AF_71D2_41DD_22AC448AE64E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -169.5,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F731604C_C2AF_71B6_41DB_F9B95627F97A",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "from": "left",
 "id": "effect_404559BF_570B_6D3E_41C6_9F4FDDDF0AEB",
 "class": "SlideInEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 163.62,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F0F85EF3_C2AF_8E52_41DC_9225744090A7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -175.72,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F753B069_C2AF_727E_41DC_127D654BBE33",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "7",
 "id": "panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4",
 "overlays": [
  "this.overlay_D153DC60_C29E_926E_41A5_60C9A45BF11C",
  "this.panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -91.89,
   "distance": 1,
   "backwardYaw": 108.2,
   "panorama": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_t.jpg",
 "hfovMax": 80
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "4",
 "id": "panorama_C819C9B3_C273_92D2_41D5_39B951499B11",
 "overlays": [
  "this.overlay_D1D9D446_C292_F1B2_41BA_AB672A0458BF",
  "this.panorama_C819C9B3_C273_92D2_41D5_39B951499B11_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 178.11,
   "distance": 1,
   "backwardYaw": -41.21,
   "panorama": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -6.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6FD2104_C2AF_73B6_41E5_9F5ED686B435",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_63D28B7F_74A9_8DD6_41B5_F6FE5B397F60",
 "class": "SlideOutEffect"
},
{
 "levels": [
  {
   "url": "media/zoomImage_EF9AD375_C291_9656_41E3_87AA112E658F_0_0.jpg",
   "width": 5184,
   "height": 3456,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_EF9AD375_C291_9656_41E3_87AA112E658F_0_1.jpg",
   "width": 4096,
   "height": 2730,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_EF9AD375_C291_9656_41E3_87AA112E658F_0_2.jpg",
   "width": 2048,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_EF9AD375_C291_9656_41E3_87AA112E658F_0_3.jpg",
   "width": 1024,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_EF9AD375_C291_9656_41E3_87AA112E658F_0_4.jpg",
   "width": 512,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E95B1542_C291_B3B3_41E5_4BDF6B57AB24",
 "class": "ImageResource"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E95EF545_C291_B3B1_41C7_51C5245E0E4A",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E95F7547_C291_B3B1_41C8_E30C00B1BE05",
 "class": "FadeOutEffect"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_6205C3BB_74A8_BD5E_41C6_D218243EC462",
 "class": "SlideOutEffect"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E947B53F_C291_B3D1_41C8_55B5724F7246",
 "class": "FadeInEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 138.79,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F0E12EE4_C2AF_8E76_41E3_F75E3239A92B",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E95BE542_C291_B3B3_41C9_800C0DCCEFC9",
 "class": "FadeInEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 1.86,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F00EEF02_C2AF_8FB2_41DA_87EA4117BD77",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 14.56,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F70C7015_C2AF_71D6_41C6_44FF549C9A9A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 53.08,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F018FF1F_C2AF_8FD2_41C9_56DA0A6DC472",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "12",
 "id": "panorama_C8249868_C272_F27E_41BD_7E4B371EFE77",
 "overlays": [
  "this.overlay_D474A53D_C291_73D6_41DF_A59DAD1B29DC",
  "this.overlay_DAFB304E_C292_B1B3_41CD_6D3CC55DC973",
  "this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -70.05,
   "distance": 1,
   "backwardYaw": -91.04,
   "panorama": "this.panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -165.44,
   "distance": 1,
   "backwardYaw": 76.83,
   "panorama": "this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_t.jpg",
 "hfovMax": 80
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E959D544_C291_B3B0_41E6_95137265085C",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -3.02,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F71DC023_C2AF_71F2_4189_F8EF50E2BA54",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E95BF542_C291_B3B3_41E0_02DB81B44043",
 "class": "FadeOutEffect"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "8",
 "id": "panorama_C8285E54_C271_8E56_41D0_37D30B3DE177",
 "overlays": [
  "this.overlay_D14E260E_C29F_91B2_41E7_BAB9A1E10576",
  "this.overlay_D1E7AE8C_C29E_8EB6_41D8_24A3B0BC07E6",
  "this.overlay_D6137512_C293_B3D2_41E5_3A9E8991398C",
  "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -172.59,
   "distance": 1,
   "backwardYaw": -16.38,
   "panorama": "this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 101.09,
   "distance": 1,
   "backwardYaw": -178.14,
   "panorama": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 3.82,
   "distance": 1,
   "backwardYaw": 178.11,
   "panorama": "this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_t.jpg",
 "hfovMax": 80
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E959C544_C291_B3B7_41E0_7FCDD5CB17E8",
 "class": "FadeInEffect"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E947853F_C291_B3D1_41E6_89262FF55700",
 "class": "FadeOutEffect"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "17",
 "id": "panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0",
 "overlays": [
  "this.overlay_D8FC43F7_C2B2_B652_41E0_456AECC34088",
  "this.overlay_D9391E9D_C2B1_8ED6_41D0_3DACAD097796",
  "this.panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -126.92,
   "distance": 1,
   "backwardYaw": 173.2,
   "panorama": "this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 171.65,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7932FB0_C2AF_8EEE_41D2_6367C60291D8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 120.22,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7A51FBD_C2AF_8ED6_41B7_3E886203177E",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
 "class": "SlideOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 70.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F0347F4E_C2AF_8FB2_41E4_49083D9055E6",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 200,
 "id": "effect_5B21267B_4F08_3100_41A1_F6699BEFB8F1",
 "class": "FadeInEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -36.33,
  "pitch": -5.26,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_in",
 "duration": 500,
 "id": "FadeInEffect_E95C6548_C291_B3BF_41CB_7CC103463C25",
 "class": "FadeInEffect"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_62403587_74A8_8536_41A9_F91B11C85EEF",
 "class": "SlideOutEffect"
},
{
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_DDA9D90F_C272_F3B1_41E4_D076910C04D8",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_DDAE190F_C272_F3B1_41E1_0FD900872496",
 "mouseControlMode": "drag_acceleration"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 7.41,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F69870A1_C2AF_72EE_41D0_8F6D5F42B8C0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "from": "left",
 "id": "effect_4F69C86C_5705_6B41_41BC_5E5273634FBF",
 "class": "SlideInEffect"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "10",
 "id": "panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED",
 "overlays": [
  "this.overlay_D74AE063_C296_B272_41C4_CE06F32152D4",
  "this.overlay_D7CAF0ED_C297_9271_41DB_08418275583B",
  "this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 174.14,
   "distance": 1,
   "backwardYaw": 176.98,
   "panorama": "this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 10.5,
   "distance": 1,
   "backwardYaw": 5.65,
   "panorama": "this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_t.jpg",
 "hfovMax": 80
},
{
 "levels": [
  {
   "url": "media/zoomImage_E8826846_C293_71B3_41C0_4A07EBCA5AFF_0_0.jpg",
   "width": 5184,
   "height": 3456,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E8826846_C293_71B3_41C0_4A07EBCA5AFF_0_1.jpg",
   "width": 4096,
   "height": 2730,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E8826846_C293_71B3_41C0_4A07EBCA5AFF_0_2.jpg",
   "width": 2048,
   "height": 1365,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E8826846_C293_71B3_41C0_4A07EBCA5AFF_0_3.jpg",
   "width": 1024,
   "height": 682,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/zoomImage_E8826846_C293_71B3_41C0_4A07EBCA5AFF_0_4.jpg",
   "width": 512,
   "height": 341,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_E9590544_C291_B3B7_41C8_9A183B6DCBB5",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -78.91,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F0497F5D_C2AF_8E56_41D9_520380EF159E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "13",
 "id": "panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0",
 "overlays": [
  "this.overlay_D5AD75A2_C2B1_B2F3_41DD_6388C440B199",
  "this.panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -91.04,
   "distance": 1,
   "backwardYaw": -70.05,
   "panorama": "this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 142.89,
  "pitch": 0.63,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C824D8E5_C271_7271_41C6_0238E542B87C_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_6C1D2456_74A9_9BD6_41D3_904906A56499",
 "class": "SlideOutEffect"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E95ED545_C291_B3B1_41D4_B88605478A6C",
 "class": "FadeOutEffect"
},
{
 "easing": "quad_in",
 "duration": 400,
 "from": "left",
 "id": "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
 "class": "SlideInEffect"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_630AD54F_74A9_8536_41C9_9DBB0B292ECF",
 "class": "SlideOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 88.11,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F060CF87_C2AF_8EB2_41A3_FBD16B2CB113",
 "class": "PanoramaCamera"
},
{
 "easing": "quad_out",
 "duration": 200,
 "id": "effect_5F42ACC8_4F18_5100_41D2_9FAF67DDCB7B",
 "class": "FadeOutEffect"
},
{
 "easing": "quad_in",
 "duration": 400,
 "to": "left",
 "id": "effect_635BED7E_74A9_85D6_41C3_9C2D4331642B",
 "class": "SlideOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -113.61,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F0212F3E_C2AF_8FD2_41BD_68CF89C33E8C",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_camera"
  },
  {
   "media": "this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_camera"
  },
  {
   "media": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_camera"
  },
  {
   "media": "this.panorama_C819C9B3_C273_92D2_41D5_39B951499B11",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C819C9B3_C273_92D2_41D5_39B951499B11_camera"
  },
  {
   "media": "this.panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_camera"
  },
  {
   "media": "this.panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_camera"
  },
  {
   "media": "this.panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_camera"
  },
  {
   "media": "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_camera"
  },
  {
   "media": "this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_camera"
  },
  {
   "media": "this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_camera"
  },
  {
   "media": "this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_camera"
  },
  {
   "media": "this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_camera"
  },
  {
   "media": "this.panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_camera"
  },
  {
   "media": "this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488_camera"
  },
  {
   "media": "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_camera"
  },
  {
   "media": "this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C_camera"
  },
  {
   "media": "this.panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_camera"
  },
  {
   "media": "this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 178.37,
  "pitch": 0.97,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E95D5549_C291_B3B1_41E0_D1E8EEF514DB",
 "class": "FadeOutEffect"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E958C544_C291_B3B7_41D2_D980AE027514",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 155.43,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F02D6F2F_C2AF_8FF2_41DC_DA6D58FAF07D",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E95C7548_C291_B3BF_41C1_10E2B72F5782",
 "class": "FadeOutEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 76.61,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F05D0F6B_C2AF_8E72_41D5_639ED899754C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 135.76,
  "pitch": 8.81,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 88.96,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6DB40DF_C2AF_7252_41E4_C0BC316E2D16",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 123.11,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7E9BFF9_C2AF_8E5E_41E1_90B5B06E5137",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -159.51,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F775A085_C2AF_72B6_41E2_C021406D9083",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 39.31,
  "pitch": -11.85,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_camera",
 "class": "PanoramaCamera"
},
{
 "easing": "cubic_out",
 "duration": 500,
 "id": "FadeOutEffect_E95FF546_C291_B3B3_41D6_2A47B671C767",
 "class": "FadeOutEffect"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "3",
 "id": "panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
 "overlays": [
  "this.overlay_D2DF96CB_C297_9EB2_41E0_6F7EAC61EDB4",
  "this.overlay_D0DC95CE_C291_B2B2_41DF_2ADEE2C50048",
  "this.overlay_D1CE5E44_C291_71B6_41D1_C60135A3DA1F",
  "this.overlay_D3412CF4_C292_B256_41E1_06F5C575F657",
  "this.overlay_D1CE993D_C291_B3D1_41D3_64D9030AA78C",
  "this.overlay_D6F29672_C292_FE53_41D1_B5698BF5881E",
  "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -178.14,
   "distance": 1,
   "backwardYaw": 101.09,
   "panorama": "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -0.03,
   "distance": 1,
   "backwardYaw": -103.39,
   "panorama": "this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -109.58,
   "distance": 1,
   "backwardYaw": 169.23,
   "panorama": "this.panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 108.2,
   "distance": 1,
   "backwardYaw": -91.89,
   "panorama": "this.panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 39.07,
   "distance": 1,
   "backwardYaw": -94.4,
   "panorama": "this.panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -41.21,
   "distance": 1,
   "backwardYaw": 178.11,
   "panorama": "this.panorama_C819C9B3_C273_92D2_41D5_39B951499B11",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_t.jpg",
 "hfovMax": 80
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "18",
 "id": "panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3",
 "overlays": [
  "this.overlay_D8688B5A_C2AE_9652_41E0_17BB5209902F",
  "this.overlay_D9259B95_C2AF_F6D6_41E7_618AAA4CE487",
  "this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -24.57,
   "distance": 1,
   "backwardYaw": -58.8,
   "panorama": "this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 46.63,
   "distance": 1,
   "backwardYaw": 20.49,
   "panorama": "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -103.17,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6EC80F0_C2AF_726E_41E7_EAA6F48F9EC1",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -160.54,
  "pitch": -9.37,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "15",
 "id": "panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150",
 "overlays": [
  "this.overlay_DA77A463_C2B6_9272_41E3_587E7BA5AB99",
  "this.overlay_D8B198ED_C2B6_9276_41AB_4BF60A30537B",
  "this.overlay_D8A8EADA_C2B6_9652_41E0_78323F5103A3",
  "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -59.78,
   "distance": 1,
   "backwardYaw": 132.36,
   "panorama": "this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 20.49,
   "distance": 1,
   "backwardYaw": 46.63,
   "panorama": "this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 66.39,
   "distance": 1,
   "backwardYaw": -133.21,
   "panorama": "this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_t.jpg",
 "hfovMax": 80
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "6",
 "id": "panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA",
 "overlays": [
  "this.overlay_D1AEB35B_C29E_B651_41E6_2079B057F602",
  "this.panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -94.4,
   "distance": 1,
   "backwardYaw": 39.07,
   "panorama": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_t.jpg",
 "hfovMax": 80
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 80,
   "duration": 3000,
   "targetPitch": 0
  }
 ],
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "16",
 "id": "panorama_C824D8E5_C271_7271_41C6_0238E542B87C",
 "overlays": [
  "this.overlay_DBABB211_C2B2_B1AE_41E6_202F10637CF4",
  "this.overlay_D82D5FC1_C2B3_8EAE_41E3_C1009739A7E3",
  "this.overlay_D9E93CC3_C2B3_B2B1_41E7_1E432D6331BE",
  "this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 173.2,
   "distance": 1,
   "backwardYaw": -126.92,
   "panorama": "this.panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -58.8,
   "distance": 1,
   "backwardYaw": -24.57,
   "panorama": "this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -133.21,
   "distance": 1,
   "backwardYaw": 66.39,
   "panorama": "this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_t.jpg",
 "hfovMax": 80
},
{
 "easing": "quad_in",
 "duration": 200,
 "id": "effect_5F42DCC8_4F18_5100_41CB_F5BBF9EF1A1D",
 "class": "FadeInEffect"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 121.2,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F7646077_C2AF_7252_41E3_89005B5505AD",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "5",
 "id": "panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E",
 "overlays": [
  "this.overlay_D0E2FC8D_C291_92B6_41E8_58A06D965A81",
  "this.panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 169.23,
   "distance": 1,
   "backwardYaw": -109.58,
   "panorama": "this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 85.6,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F072CF94_C2AF_8ED6_41E6_A358C8674E78",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1",
 "id": "panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38",
 "overlays": [
  "this.overlay_CCB40512_C2F1_73D2_41C9_2F7CCCFBB08A",
  "this.overlay_D29D416D_C2EE_B276_41E7_B0C65D3C9157",
  "this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -16.38,
   "distance": 1,
   "backwardYaw": -172.59,
   "panorama": "this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 4.28,
   "distance": 1,
   "backwardYaw": 37.87,
   "panorama": "this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 179.97,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F741E05B_C2AF_7252_41E7_0DCFAFBDEFF8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -71.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_F6B8A0BC_C2AF_72D6_41C7_5DBEB33001A5",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#0066FF",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E2E90D17_C271_73D2_41E5_850BC4E2FF83",
 "backgroundOpacity": 0,
 "children": [
  "this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416",
  "this.IconButton_E2FEAFE5_C271_8E71_41B1_8F3D182489F7"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "class": "Container",
 "width": "18.421%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "panorama"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDA9890F_C272_F3B1_4194_49BE822D82AE",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "class": "Container",
 "children": [
  "this.Container_DDAF890E_C272_F3B3_41E6_D9FBFECA08F3",
  "this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E133BBAF_C276_96F2_41D4_119658FA6019",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "class": "Container",
 "children": [
  "this.Container_E1391BAC_C276_96F6_41E7_D21DA401745F",
  "this.Container_E1394BAC_C276_96F6_41E0_CB9FE017CB80"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 6"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E07F092E_C3BF_93F3_41E0_BE24258BC1EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_EA5DD6F3_C3EF_BE52_41E1_7771F493CE6E",
  "this.Image_E6F82D1F_C3F1_B3D2_41DF_E3804E3A0EB0",
  "this.Image_EBEAF690_C3F2_BEAE_41D6_141565BD95E0",
  "this.Image_E68FCDD7_C3F6_B251_41E3_950A94851F48",
  "this.Image_E669B27B_C3F7_B652_41A8_9FEF380BD8CC",
  "this.Image_E5D190A9_C3F1_92FE_41B0_434442CB1AF9",
  "this.Image_E53CC3C2_C3F3_B6B3_41C8_A64C3B09050F",
  "this.Image_E66A4BDB_C3F2_9652_41D0_55643BEC3D62",
  "this.Image_E6468FBA_C3F1_8ED2_41DD_C53CF37843D3",
  "this.IconButton_E6CC13D9_C3FE_B65E_41DF_1CC0EFD11386"
 ],
 "scrollBarVisible": "rollOver",
 "right": "2.56%",
 "class": "Container",
 "width": "67.831%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "bottom": "3.87%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "91.299%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Photos"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "class": "UIComponent",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "data": {
  "name": "UIComponent82989"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "class": "ZoomImage",
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage82990"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "class": "CloseButton",
 "iconHeight": 20,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "paddingLeft": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton82991"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_DDA9C90F_C272_F3B1_41E3_5B9E1898C2B3",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "width": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_DDA9C90F_C272_F3B1_41E3_5B9E1898C2B3_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_DDA9C90F_C272_F3B1_41E3_5B9E1898C2B3.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Sound"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_DDAE290F_C272_F3B1_41CD_A2DEA5D8D953",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "width": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_DDAE290F_C272_F3B1_41CD_A2DEA5D8D953_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_DDAE290F_C272_F3B1_41CD_A2DEA5D8D953.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 37.87,
   "hfov": 22.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 37.87,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_1_HS_0_0.png",
      "width": 816,
      "height": 913,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.01,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.99
  }
 ],
 "id": "overlay_CD26720C_C291_91B6_41C6_D194B8C724F0",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38, this.camera_F753B069_C2AF_727E_41DC_127D654BBE33); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -103.39,
   "hfov": 42.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -103.39,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_1_HS_1_0.png",
      "width": 1497,
      "height": 1497,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 42.16
  }
 ],
 "id": "overlay_D2DFFF37_C293_8FD2_4194_26860405DFF9",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C, this.camera_F741E05B_C2AF_7252_41E7_0DCFAFBDEFF8); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 132.33,
   "hfov": 30.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 132.33,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_1_HS_2_0.png",
      "width": 1095,
      "height": 1095,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.83
  }
 ],
 "id": "overlay_D9D709AC_C2AE_B2F7_41C2_5982C57904B0",
 "data": {
  "label": "3"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 178.11,
   "hfov": 21.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 178.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_1_HS_0_0.png",
      "width": 775,
      "height": 788,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.79
  }
 ],
 "id": "overlay_D1165C57_C292_9252_41E3_C124CBC2CD5E",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177, this.camera_F720003E_C2AF_71D2_41DD_22AC448AE64E); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 5.65,
   "hfov": 13.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 5.65,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_1_HS_1_0.png",
      "width": 493,
      "height": 439,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.95
  }
 ],
 "id": "overlay_D660A7DF_C291_FE51_41DA_BEE8FA640985",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED, this.camera_F731604C_C2AF_71B6_41DB_F9B95627F97A); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -56.89,
   "hfov": 17.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -56.89,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_1_HS_0_0.png",
      "width": 613,
      "height": 626,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.3
  }
 ],
 "id": "overlay_D4391C24_C2B2_91F6_41DA_C3FECBA7B170",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A, this.camera_F7932FB0_C2AF_8EEE_41D2_6367C60291D8); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 132.36,
   "hfov": 18.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 132.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824324A_C271_B1B2_41E0_30A5018FA488_1_HS_1_0.png",
      "width": 666,
      "height": 853,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.78
  }
 ],
 "id": "overlay_D58E0079_C2B1_F25E_41E6_015263744A14",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150, this.camera_F7A51FBD_C2AF_8ED6_41B7_3E886203177E); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C824324A_C271_B1B2_41E0_30A5018FA488_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 176.98,
   "hfov": 27.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 176.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_1_HS_0_0.png",
      "width": 963,
      "height": 923,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 27.17
  }
 ],
 "id": "overlay_D4C0CBA5_C296_96F6_41D2_85B3A1D71DF0",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED, this.camera_F7FB5007_C2AF_71B2_41B0_53D8A557E09D); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 76.83,
   "hfov": 30.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 76.83,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_1_HS_1_0.png",
      "width": 1095,
      "height": 1094,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.89
  }
 ],
 "id": "overlay_D77DE04B_C291_91B1_41DE_3E5E8DF6AD6B",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77, this.camera_F70C7015_C2AF_71D6_41C6_44FF549C9A9A); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -8.35,
   "hfov": 19.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -8.35,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_1_HS_2_0.png",
      "width": 706,
      "height": 773,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.93
  }
 ],
 "id": "overlay_D573554F_C2B3_73B2_41E6_3112DCC0012C",
 "data": {
  "label": "3"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488, this.camera_F7E9BFF9_C2AF_8E5E_41E1_90B5B06E5137); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -91.89,
   "hfov": 43.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -91.89,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_1_HS_0_0.png",
      "width": 1557,
      "height": 1462,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.25
  }
 ],
 "id": "overlay_D153DC60_C29E_926E_41A5_60C9A45BF11C",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C, this.camera_F6B8A0BC_C2AF_72D6_41C7_5DBEB33001A5); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 178.11,
   "hfov": 32.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 178.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C819C9B3_C273_92D2_41D5_39B951499B11_1_HS_0_0.png",
      "width": 1167,
      "height": 1153,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.21
  }
 ],
 "id": "overlay_D1D9D446_C292_F1B2_41BA_AB672A0458BF",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C, this.camera_F0E12EE4_C2AF_8E76_41E3_F75E3239A92B); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C819C9B3_C273_92D2_41D5_39B951499B11_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -70.05,
   "hfov": 30.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 34.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -70.05,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_1_HS_0_0.png",
      "width": 1324,
      "height": 1243,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 34.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.7
  }
 ],
 "id": "overlay_D474A53D_C291_73D6_41DF_A59DAD1B29DC",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0, this.camera_F6DB40DF_C2AF_7252_41E4_C0BC316E2D16); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -165.44,
   "hfov": 30.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -165.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_1_HS_1_0.png",
      "width": 1095,
      "height": 1094,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.59
  }
 ],
 "id": "overlay_DAFB304E_C292_B1B3_41CD_6D3CC55DC973",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A, this.camera_F6EC80F0_C2AF_726E_41E7_EAA6F48F9EC1); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8249868_C272_F27E_41BD_7E4B371EFE77_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -172.59,
   "hfov": 19.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -172.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_1_HS_0_0.png",
      "width": 682,
      "height": 695,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.35
  }
 ],
 "id": "overlay_D14E260E_C29F_91B2_41E7_BAB9A1E10576",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38, this.camera_F0F85EF3_C2AF_8E52_41DC_9225744090A7); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 3.82,
   "hfov": 18.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_1_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 3.82,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_1_HS_1_0.png",
      "width": 655,
      "height": 602,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.56
  }
 ],
 "id": "overlay_D1E7AE8C_C29E_8EB6_41D8_24A3B0BC07E6",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C, this.camera_F004EF10_C2AF_8FAE_41C4_E1EB6C373500); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 101.09,
   "hfov": 14.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 32.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 101.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_1_HS_2_0.png",
      "width": 588,
      "height": 722,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 32.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.03
  }
 ],
 "id": "overlay_D6137512_C293_B3D2_41E5_3A9E8991398C",
 "data": {
  "label": "3"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C, this.camera_F00EEF02_C2AF_8FB2_41DA_87EA4117BD77); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8285E54_C271_8E56_41D0_37D30B3DE177_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -126.92,
   "hfov": 26.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -126.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_1_HS_0_0.png",
      "width": 921,
      "height": 1001,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.06
  }
 ],
 "id": "overlay_D8FC43F7_C2B2_B652_41E0_456AECC34088",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C, this.camera_F6FD2104_C2AF_73B6_41E5_9F5ED686B435); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 131.27,
   "hfov": 22.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 131.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_1_HS_1_0.png",
      "width": 801,
      "height": 854,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.67
  }
 ],
 "id": "overlay_D9391E9D_C2B1_8ED6_41D0_3DACAD097796",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0_tcap0",
 "distance": 50
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_DDA9D90F_C272_F3B1_41E4_D076910C04D8",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "width": 34,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 34,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_DDA9D90F_C272_F3B1_41E4_D076910C04D8_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_DDA9D90F_C272_F3B1_41E4_D076910C04D8.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_DDAE190F_C272_F3B1_41E1_0FD900872496",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "width": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 30,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_DDAE190F_C272_F3B1_41E1_0FD900872496.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 10.5,
   "hfov": 19.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 10.5,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_1_HS_0_0.png",
      "width": 678,
      "height": 665,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.1
  }
 ],
 "id": "overlay_D74AE063_C296_B272_41C4_CE06F32152D4",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8241322_C271_B7F2_41A8_F65E6DFD174C, this.camera_F72E4030_C2AF_71EE_41DD_020F92658C3E); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 174.14,
   "hfov": 26.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 174.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_1_HS_1_0.png",
      "width": 953,
      "height": 1100,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.79
  }
 ],
 "id": "overlay_D7CAF0ED_C297_9271_41DB_08418275583B",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8247C95_C271_F2D6_41E5_DCB8A708CF6A, this.camera_F71DC023_C2AF_71F2_4189_F8EF50E2BA54); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8247794_C271_9ED6_41D0_FD8E1311B1ED_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -91.04,
   "hfov": 35.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_1_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -91.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_1_HS_0_0.png",
      "width": 1382,
      "height": 1300,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35.73
  }
 ],
 "id": "overlay_D5AD75A2_C2B1_B2F3_41DD_6388C440B199",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8249868_C272_F27E_41BD_7E4B371EFE77, this.camera_F6864093_C2AF_72D2_41E1_41183D6661C8); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C805EC13_C272_91D1_41DC_3D3AF8DA5FF0_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -109.58,
   "hfov": 36.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -109.58,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_0_0.png",
      "width": 1400,
      "height": 1469,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 18.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 36.1
  }
 ],
 "id": "overlay_D2DF96CB_C297_9EB2_41E0_6F7EAC61EDB4",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E, this.camera_F06F3F79_C2AF_8E5E_41E0_B5D1610087AD); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -41.21,
   "hfov": 33.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -41.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_1_0.png",
      "width": 1317,
      "height": 1414,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 33.63
  }
 ],
 "id": "overlay_D0DC95CE_C291_B2B2_41DF_2ADEE2C50048",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C819C9B3_C273_92D2_41D5_39B951499B11, this.camera_F7839FA2_C2AF_8EF2_41B3_493377DC3175); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 39.07,
   "hfov": 34.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 39.07,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_2_0.png",
      "width": 1358,
      "height": 1372,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 34.03
  }
 ],
 "id": "overlay_D1CE5E44_C291_71B6_41D1_C60135A3DA1F",
 "data": {
  "label": "3"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA, this.camera_F072CF94_C2AF_8ED6_41E6_A358C8674E78); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 108.2,
   "hfov": 41.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_3_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 108.2,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_3_0.png",
      "width": 1664,
      "height": 1553,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 41.96
  }
 ],
 "id": "overlay_D3412CF4_C292_B256_41E1_06F5C575F657",
 "data": {
  "label": "4"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C82D3237_C273_F1D1_41C0_C139896C6FC4, this.camera_F060CF87_C2AF_8EB2_41A3_FBD16B2CB113); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -178.14,
   "hfov": 18.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -178.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_4_0.png",
      "width": 692,
      "height": 706,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.82
  }
 ],
 "id": "overlay_D1CE993D_C291_B3D1_41D3_64D9030AA78C",
 "data": {
  "label": "5"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177, this.camera_F0497F5D_C2AF_8E56_41D9_520380EF159E); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -0.03,
   "hfov": 14.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -0.03,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_1_HS_5_0.png",
      "width": 539,
      "height": 636,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.57
  }
 ],
 "id": "overlay_D6F29672_C292_FE53_41D1_B5698BF5881E",
 "data": {
  "label": "6"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867, this.camera_F05D0F6B_C2AF_8E72_41D5_639ED899754C); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 46.63,
   "hfov": 20.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 46.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_1_HS_0_0.png",
      "width": 711,
      "height": 791,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.33
  }
 ],
 "id": "overlay_D8688B5A_C2AE_9652_41E0_17BB5209902F",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150, this.camera_F775A085_C2AF_72B6_41E2_C021406D9083); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -24.57,
   "hfov": 18.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -24.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_1_HS_1_0.png",
      "width": 645,
      "height": 751,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.47
  }
 ],
 "id": "overlay_D9259B95_C2AF_F6D6_41E7_618AAA4CE487",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C, this.camera_F7646077_C2AF_7252_41E3_89005B5505AD); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -59.78,
   "hfov": 16.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -59.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_1_HS_0_0.png",
      "width": 597,
      "height": 665,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.81
  }
 ],
 "id": "overlay_DA77A463_C2B6_9272_41E3_587E7BA5AB99",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C824324A_C271_B1B2_41E0_30A5018FA488, this.camera_F7B68FCC_C2AF_8EB6_41E3_B660F3F30BE0); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 66.39,
   "hfov": 15.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 66.39,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_1_HS_1_0.png",
      "width": 544,
      "height": 638,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.27
  }
 ],
 "id": "overlay_D8B198ED_C2B6_9276_41AB_4BF60A30537B",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C824D8E5_C271_7271_41C6_0238E542B87C, this.camera_F7D82FEA_C2AF_8E72_41E5_DF72AEBF3783); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 20.49,
   "hfov": 20.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 20.49,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_1_HS_2_0.png",
      "width": 718,
      "height": 651,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.16
  }
 ],
 "id": "overlay_D8A8EADA_C2B6_9652_41E0_78323F5103A3",
 "data": {
  "label": "3"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3, this.camera_F7C89FDA_C2AF_8E52_41BF_ED10D541EF80); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -94.4,
   "hfov": 47.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -94.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_1_HS_0_0.png",
      "width": 1688,
      "height": 1823,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 47.2
  }
 ],
 "id": "overlay_D1AEB35B_C29E_B651_41E6_2079B057F602",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C, this.camera_F6CAB0CE_C2AF_72B2_4177_06C91CD1063C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C8111F2F_C273_8FF1_41A4_2462972B34BA_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 173.2,
   "hfov": 24.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 173.2,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_1_HS_0_0.png",
      "width": 884,
      "height": 897,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.91
  }
 ],
 "id": "overlay_DBABB211_C2B2_B1AE_41E6_202F10637CF4",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C82421DB_C272_9252_41CA_D7F0D80DCDC0, this.camera_F018FF1F_C2AF_8FD2_41C9_56DA0A6DC472); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -133.21,
   "hfov": 18.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -133.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_1_HS_1_0.png",
      "width": 666,
      "height": 746,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.65
  }
 ],
 "id": "overlay_D82D5FC1_C2B3_8EAE_41E3_C1009739A7E3",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8F5A5E9_C271_927E_4180_AE42DF35B150, this.camera_F0212F3E_C2AF_8FD2_41BD_68CF89C33E8C); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -58.8,
   "hfov": 18.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -58.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C824D8E5_C271_7271_41C6_0238E542B87C_1_HS_2_0.png",
      "width": 666,
      "height": 853,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.75
  }
 ],
 "id": "overlay_D9E93CC3_C2B3_B2B1_41E7_1E432D6331BE",
 "data": {
  "label": "3"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8F4AC20_C272_91EF_41E8_4CC13742DCF3, this.camera_F02D6F2F_C2AF_8FF2_41DC_DA6D58FAF07D); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C824D8E5_C271_7271_41C6_0238E542B87C_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 169.23,
   "hfov": 29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 169.23,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_1_HS_0_0.png",
      "width": 1051,
      "height": 1105,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 29
  }
 ],
 "id": "overlay_D0E2FC8D_C291_92B6_41E8_58A06D965A81",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8246F71_C272_8E6E_41A1_F85AA78C503C, this.camera_F0347F4E_C2AF_8FB2_41E4_49083D9055E6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C81582BA_C273_76D3_41D4_BCD1B09BB17E_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 4.28,
   "hfov": 14.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 4.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_1_HS_0_0.png",
      "width": 500,
      "height": 500,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.09
  }
 ],
 "id": "overlay_CCB40512_C2F1_73D2_41C9_2F7CCCFBB08A",
 "data": {
  "label": "1"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C82C75B5_C273_92D6_41C9_CE78C41C5867, this.camera_F6A830AF_C2AF_72F2_41E7_7CE1D00FD764); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -16.38,
   "hfov": 14.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -16.38,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_1_HS_1_0.png",
      "width": 500,
      "height": 500,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.09
  }
 ],
 "id": "overlay_D29D416D_C2EE_B276_41E7_B0C65D3C9157",
 "data": {
  "label": "2"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C8285E54_C271_8E56_41D0_37D30B3DE177, this.camera_F69870A1_C2AF_72EE_41D0_8F6D5F42B8C0); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0.png",
    "width": 3536,
    "height": 3536,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_C9FA4444_C26E_91B7_419A_96ADA67B4D38_tcap0",
 "distance": 50
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416",
 "backgroundOpacity": 0.34,
 "width": 159,
 "itemBorderRadius": 0,
 "right": "-2.3%",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemThumbnailShadowVerticalLength": 3,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 20,
 "itemOpacity": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "playList": "this.ThumbnailList_DDD6282E_C272_91F3_41E5_DCE96DB0D416_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 20,
 "height": "94.966%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowOpacity": 0.27,
 "rollOverItemLabelFontWeight": "bold",
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "class": "ThumbnailList",
 "itemThumbnailShadowBlurRadius": 8,
 "borderRadius": 5,
 "itemLabelGap": 8,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "bottom": "0%",
 "itemThumbnailWidth": 100,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 13,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 20,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "center",
 "maxWidth": 512,
 "id": "IconButton_E2FEAFE5_C271_8E71_41B1_8F3D182489F7",
 "left": "14.75%",
 "maxHeight": 512,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "width": 62,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.14%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 73,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_E2E90D17_C271_73D2_41E5_850BC4E2FF83, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_E2FEAFE5_C271_8E71_41B1_8F3D182489F7.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton57094"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAF890E_C272_F3B3_41E6_D9FBFECA08F3",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "class": "Container",
 "children": [
  "this.Container_DDAF990E_C272_F3B3_41C1_D7706EF3FF16",
  "this.IconButton_DDAFA90E_C272_F3B3_41E6_023ADBC9A89E"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F",
 "left": "0%",
 "children": [
  "this.Container_DDAF490E_C272_F3B3_41E7_AFD018BC9B59",
  "this.IconButton_DDA9F90F_C272_F3B1_41D2_18D19E401566"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "class": "Container",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "paddingRight": 0,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E1391BAC_C276_96F6_41E7_D21DA401745F",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "class": "Container",
 "children": [
  "this.Container_E1393BAC_C276_96F6_41DA_AB19333EF71B",
  "this.IconButton_E1395BAC_C276_96F6_41E2_34D4EE92D75B"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E1394BAC_C276_96F6_41E0_CB9FE017CB80",
 "left": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "class": "Container",
 "children": [
  "this.Container_E1396BAC_C276_96F6_41CA_0645B10599ED",
  "this.IconButton_E1338BAF_C276_96F2_41E6_BCDDAFB798C1"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_EA5DD6F3_C3EF_BE52_41E1_7771F493CE6E",
 "left": "2%",
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30.038%",
 "borderRadius": 0,
 "url": "skin/Image_EA5DD6F3_C3EF_BE52_41E1_7771F493CE6E.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "4%",
 "paddingRight": 0,
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E947A53F_C291_B3D1_41E7_985D28C3812B, null, '90%', '90%', this.FadeInEffect_E947B53F_C291_B3D1_41C8_55B5724F7246, this.FadeOutEffect_E947853F_C291_B3D1_41E6_89262FF55700, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73231"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_E6F82D1F_C3F1_B3D2_41DF_E3804E3A0EB0",
 "left": "35%",
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30%",
 "borderRadius": 0,
 "url": "skin/Image_E6F82D1F_C3F1_B3D2_41DF_E3804E3A0EB0.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "4%",
 "paddingRight": 0,
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E95B1542_C291_B3B3_41E5_4BDF6B57AB24, null, '90%', '90%', this.FadeInEffect_E95BE542_C291_B3B3_41C9_800C0DCCEFC9, this.FadeOutEffect_E95BF542_C291_B3B3_41E0_02DB81B44043, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73289"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_EBEAF690_C3F2_BEAE_41D6_141565BD95E0",
 "left": "68%",
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30%",
 "borderRadius": 0,
 "url": "skin/Image_EBEAF690_C3F2_BEAE_41D6_141565BD95E0.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "4%",
 "paddingRight": 0,
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E958E543_C291_B3B0_41C4_9081823CA5CE, null, '90%', '90%', this.FadeInEffect_E958F544_C291_B3B7_41D8_1D6C079EE4E4, this.FadeOutEffect_E958C544_C291_B3B7_41D2_D980AE027514, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73385"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_E68FCDD7_C3F6_B251_41E3_950A94851F48",
 "left": "2%",
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30%",
 "borderRadius": 0,
 "url": "skin/Image_E68FCDD7_C3F6_B251_41E3_950A94851F48.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "38%",
 "paddingRight": 0,
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E9590544_C291_B3B7_41C8_9A183B6DCBB5, null, '90%', '90%', this.FadeInEffect_E959C544_C291_B3B7_41E0_7FCDD5CB17E8, this.FadeOutEffect_E959D544_C291_B3B0_41E6_95137265085C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73443"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 1341,
 "id": "Image_E669B27B_C3F7_B652_41A8_9FEF380BD8CC",
 "left": "2%",
 "maxHeight": 894,
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30%",
 "borderRadius": 0,
 "url": "skin/Image_E669B27B_C3F7_B652_41A8_9FEF380BD8CC.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "4%",
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E95EE545_C291_B3B1_41CE_C6E1BE196BE3, null, '90%', '90%', this.FadeInEffect_E95EF545_C291_B3B1_41C7_51C5245E0E4A, this.FadeOutEffect_E95ED545_C291_B3B1_41D4_B88605478A6C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73498"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 1341,
 "id": "Image_E5D190A9_C3F1_92FE_41B0_434442CB1AF9",
 "left": "34%",
 "maxHeight": 894,
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30%",
 "borderRadius": 0,
 "url": "skin/Image_E5D190A9_C3F1_92FE_41B0_434442CB1AF9.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "4%",
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E95F1546_C291_B3B3_41D0_EF52C53F4C3B, null, '90%', '90%', this.FadeInEffect_E95FE546_C291_B3B3_41E7_723D3BB90F79, this.FadeOutEffect_E95FF546_C291_B3B3_41D6_2A47B671C767, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73571"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 1341,
 "id": "Image_E53CC3C2_C3F3_B6B3_41C8_A64C3B09050F",
 "left": "68%",
 "maxHeight": 894,
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30%",
 "borderRadius": 0,
 "url": "skin/Image_E53CC3C2_C3F3_B6B3_41C8_A64C3B09050F.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "4%",
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E95E9547_C291_B3B1_41AC_BF29AD787675, null, '90%', '90%', this.FadeInEffect_E95F6547_C291_B3B1_41D3_5375C732481D, this.FadeOutEffect_E95F7547_C291_B3B1_41C8_E30C00B1BE05, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73640"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_E66A4BDB_C3F2_9652_41D0_55643BEC3D62",
 "left": "35%",
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30%",
 "borderRadius": 0,
 "url": "skin/Image_E66A4BDB_C3F2_9652_41D0_55643BEC3D62.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "38%",
 "paddingRight": 0,
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E95F9548_C291_B3BF_41E5_701A9934BAD7, null, '90%', '90%', this.FadeInEffect_E95C6548_C291_B3BF_41CB_7CC103463C25, this.FadeOutEffect_E95C7548_C291_B3BF_41C1_10E2B72F5782, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73696"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_E6468FBA_C3F1_8ED2_41DD_C53CF37843D3",
 "left": "68%",
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "30%",
 "borderRadius": 0,
 "url": "skin/Image_E6468FBA_C3F1_8ED2_41DD_C53CF37843D3.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "top": "38%",
 "paddingRight": 0,
 "height": "24%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.showPopupImage(this.ImageResource_E95C9549_C291_B3B1_41D8_23678B8EF6EC, null, '90%', '90%', this.FadeInEffect_E95D7549_C291_B3B1_41E4_EDA4686C6353, this.FadeOutEffect_E95D5549_C291_B3B1_41E0_D1E8EEF514DB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image73753"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 512,
 "id": "IconButton_E6CC13D9_C3FE_B65E_41DF_1CC0EFD11386",
 "backgroundOpacity": 0,
 "maxHeight": 512,
 "right": "0%",
 "class": "IconButton",
 "width": 69,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 72,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_E07F092E_C3BF_93F3_41E0_BE24258BC1EA, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_E6CC13D9_C3FE_B65E_41DF_1CC0EFD11386.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton74306"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAF990E_C272_F3B3_41C1_D7706EF3FF16",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_DDAFA90E_C272_F3B3_41E6_023ADBC9A89E",
 "left": 10,
 "width": 44,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_DDAFA90E_C272_F3B3_41E6_023ADBC9A89E_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_DDAF890E_C272_F3B3_41E6_D9FBFECA08F3, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
 "iconURL": "skin/IconButton_DDAFA90E_C272_F3B3_41E6_023ADBC9A89E.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAF490E_C272_F3B3_41E7_AFD018BC9B59",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "class": "Container",
 "children": [
  "this.Image_DDAF690E_C272_F3B3_41CA_21E234D805F1",
  "this.Container_DDAF790E_C272_F3B3_41BB_49653A5804C3"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 20,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 10,
 "paddingLeft": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_DDA9F90F_C272_F3B1_41D2_18D19E401566",
 "backgroundOpacity": 0,
 "width": 44,
 "right": 9,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_DDA9F90F_C272_F3B1_41D2_18D19E401566_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_DDAF890E_C272_F3B3_41E6_D9FBFECA08F3, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
 "iconURL": "skin/IconButton_DDA9F90F_C272_F3B1_41D2_18D19E401566.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E1393BAC_C276_96F6_41DA_AB19333EF71B",
 "left": "0%",
 "width": 30,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#0089C8"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container blue"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_E1395BAC_C276_96F6_41E2_34D4EE92D75B",
 "left": 4,
 "width": 50,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_E1395BAC_C276_96F6_41E2_34D4EE92D75B_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_E1394BAC_C276_96F6_41E0_CB9FE017CB80, true, 0, this.effect_4F69C86C_5705_6B41_41BC_5E5273634FBF, 'showEffect', false); this.setComponentVisibility(this.Container_E1391BAC_C276_96F6_41E7_D21DA401745F, false, 0, this.effect_25FE7E90_3014_D1B3_41A1_6EBC34409425, 'hideEffect', false)",
 "iconURL": "skin/IconButton_E1395BAC_C276_96F6_41E2_34D4EE92D75B.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E1396BAC_C276_96F6_41CA_0645B10599ED",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "class": "Container",
 "children": [
  "this.Image_E13E8BAC_C276_96F6_41D5_02C8616EC761",
  "this.Container_E13EDBAC_C276_96F6_41E3_B80A5A250613",
  "this.Container_DDAE690E_C272_F3B3_41C2_FE5F388936B5",
  "this.Container_E6F20ADE_C3B3_7652_41C4_1AF1E8AB5109"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 30,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 10,
 "paddingLeft": 30,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Buttons set"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_E1338BAF_C276_96F2_41E6_BCDDAFB798C1",
 "left": 280,
 "width": 50,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_E1338BAF_C276_96F2_41E6_BCDDAFB798C1_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_E1394BAC_C276_96F6_41E0_CB9FE017CB80, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_E1391BAC_C276_96F6_41E7_D21DA401745F, true, 0, this.effect_404559BF_570B_6D3E_41C6_9F4FDDDF0AEB, 'showEffect', false)",
 "iconURL": "skin/IconButton_E1338BAF_C276_96F2_41E6_BCDDAFB798C1.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_DDAF690E_C272_F3B3_41CA_21E234D805F1",
 "left": "0%",
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_DDAF690E_C272_F3B3_41CA_21E234D805F1.png",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "paddingRight": 0,
 "height": "30.504%",
 "verticalAlign": "top",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_to_height",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAF790E_C272_F3B3_41BB_49653A5804C3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_DDAF090E_C272_F3B3_41D1_47139B0A18DB",
  "this.Button_DDAF190E_C272_F3B3_41DE_F0EAB2D30AC9",
  "this.Container_DDAF290E_C272_F3B3_41D5_019357DE0B2A",
  "this.Button_DDAF390E_C272_F3B3_41CD_6B46E25F97B1",
  "this.Container_DDAEC90E_C272_F3B3_41E8_1C2C91B66710",
  "this.Button_DDAED90E_C272_F3B3_41C0_B2229DD511D5",
  "this.Container_DDAEE90E_C272_F3B3_41B4_1983D497681E",
  "this.Button_DDAE890E_C272_F3B3_41D3_CD6B75F8A8B3",
  "this.Container_DDAE990E_C272_F3B3_41C9_748359C4DC7E",
  "this.Button_DDAEA90E_C272_F3B3_41DA_8A545FDCF305",
  "this.Container_DDAEB90E_C272_F3B3_4183_A7DCBB19D82A",
  "this.Button_DDAE490E_C272_F3B3_41BC_6A5F70D8ED89",
  "this.Container_DDAE590E_C272_F3B3_41E2_B396329D8EAE"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "class": "Container",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "top": "25%",
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "25%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "verticalAlign": "middle",
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_E13E8BAC_C276_96F6_41D5_02C8616EC761",
 "left": "0%",
 "backgroundOpacity": 0,
 "class": "Image",
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_E13E8BAC_C276_96F6_41D5_02C8616EC761.png",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0.03%",
 "paddingRight": 0,
 "height": "32.086%",
 "verticalAlign": "top",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.15,
 "id": "Container_E13EDBAC_C276_96F6_41E3_B80A5A250613",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_E13ECBAC_C276_96F6_41E5_7428ADDB84B3",
  "this.Button_E13EEBAC_C276_96F6_41D2_B710A823144D",
  "this.Container_E13E0BAC_C276_96F6_41E3_7E33531834DB",
  "this.Container_E13F0BAC_C276_96F6_41DF_22722171F95C",
  "this.Button_E13F2BAC_C276_96F6_41D4_333CF713BFEB",
  "this.Container_E13E8BAD_C276_96F6_41C4_45F0A9BB7BDB",
  "this.Container_E13FBBAD_C276_96F6_41E3_7C2D292890E3",
  "this.Button_E13FDBAD_C276_96F6_41D1_ED62F73753DD",
  "this.Container_E13C1BAD_C276_96F6_41D8_AE30336053C0",
  "this.Button_E13C0BAD_C276_96F6_41D2_B53E805D3B38",
  "this.Container_E13C5BAD_C276_96F6_41E6_0B7EB1E6E28F",
  "this.Button_E13C1BAE_C276_96F2_41BB_5BCB0F3191ED",
  "this.Container_E13D4BAE_C276_96F2_41C8_8D2B612B8C55",
  "this.Button_E0534263_C391_B672_41CC_8D6C10A365D4"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "class": "Container",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "top": "26%",
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "26%",
 "scrollBarWidth": 6,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1"
 },
 "verticalAlign": "middle",
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAE690E_C272_F3B3_41C2_FE5F388936B5",
 "left": "0%",
 "children": [
  "this.Container_DDAE790E_C272_F3B3_41D0_B1E7925505CF",
  "this.IconButton_E0A5280E_C3B1_71B2_41E2_CB52E78E1A22",
  "this.Container_DDAE090F_C272_F3B1_41DE_F96DF6A25A11",
  "this.HTMLText_DDA9E90F_C272_F3B1_41DC_17777EEFA9D6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "class": "Container",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "13.24%",
 "scrollBarWidth": 10,
 "height": 105.5,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E6F20ADE_C3B3_7652_41C4_1AF1E8AB5109",
 "left": "0%",
 "children": [
  "this.IconButton_E7786AC8_C3B3_96BE_41CE_1E28E7DF9F09"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "class": "Container",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "12.23%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container71303"
 },
 "shadow": false,
 "click": "this.openLink('https://virtualreality.digidaxa.com/', '_blank')"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAF090E_C272_F3B3_41D1_47139B0A18DB",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_DDAF190E_C272_F3B3_41DE_F0EAB2D30AC9",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F, false, 0, this.effect_630AD54F_74A9_8536_41C9_9DBB0B292ECF, 'hideEffect', false)",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Tour Information",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAF290E_C272_F3B3_41D5_019357DE0B2A",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_DDAF390E_C272_F3B3_41CD_6B46E25F97B1",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F, false, 0, this.effect_63D28B7F_74A9_8DD6_41B5_F6FE5B397F60, 'hideEffect', false)",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Panorama List",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAEC90E_C272_F3B3_41E8_1C2C91B66710",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "pressedLabel": "Location",
 "id": "Button_DDAED90E_C272_F3B3_41C0_B2229DD511D5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F, false, 0, this.effect_6C1D2456_74A9_9BD6_41D3_904906A56499, 'hideEffect', false)",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Location",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAEE90E_C272_F3B3_41B4_1983D497681E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_DDAE890E_C272_F3B3_41D3_CD6B75F8A8B3",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F, false, 0, this.effect_635BED7E_74A9_85D6_41C3_9C2D4331642B, 'hideEffect', false)",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Floorplan",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAE990E_C272_F3B3_41C9_748359C4DC7E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_DDAEA90E_C272_F3B3_41DA_8A545FDCF305",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F, false, 0, this.effect_62403587_74A8_8536_41A9_F91B11C85EEF, 'hideEffect', false)",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Photoalbum",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAEB90E_C272_F3B3_4183_A7DCBB19D82A",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_DDAE490E_C272_F3B3_41BC_6A5F70D8ED89",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_DDAFB90E_C272_F3B3_41E4_230E5CA76A1F, false, 0, this.effect_6205C3BB_74A8_BD5E_41C6_D218243EC462, 'hideEffect', false)",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Contact Information",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAE590E_C272_F3B3_41E2_B396329D8EAE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13ECBAC_C276_96F6_41E5_7428ADDB84B3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "left",
 "data": {
  "name": "Button 1 - Reception"
 },
 "id": "Button_E13EEBAC_C276_96F6_41D2_B710A823144D",
 "backgroundOpacity": 0,
 "pressedFontColor": "#0193DD",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "click": "this.setComponentVisibility(this.Container_E13E8BAD_C276_96F6_41C4_45F0A9BB7BDB, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); if(!this.Container_E13E0BAC_C276_96F6_41E3_7E33531834DB.get('visible')){ this.setComponentVisibility(this.Container_E13E0BAC_C276_96F6_41E3_7E33531834DB, true, 0, this.effect_5F42DCC8_4F18_5100_41CB_F5BBF9EF1A1D, 'showEffect', false) } else { this.setComponentVisibility(this.Container_E13E0BAC_C276_96F6_41E3_7E33531834DB, false, 0, this.effect_5F42ACC8_4F18_5100_41D2_9FAF67DDCB7B, 'hideEffect', false) }",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Contact",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0,
  1
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_E13E0BAC_C276_96F6_41E3_7E33531834DB",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_E13E3BAC_C276_96F6_41AB_1FA971E6D1BE",
  "this.Container_E13E5BAC_C276_96F6_41C6_6AD6DEDB6BE0",
  "this.Button_E13E4BAC_C276_96F6_41E5_9ECE5066095F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 49,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13F0BAC_C276_96F6_41DF_22722171F95C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "left",
 "data": {
  "name": "Button 2 - Rooms"
 },
 "id": "Button_E13F2BAC_C276_96F6_41D4_333CF713BFEB",
 "backgroundOpacity": 0,
 "pressedFontColor": "#0193DD",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "click": "if(!this.Container_E13E8BAD_C276_96F6_41C4_45F0A9BB7BDB.get('visible')){ this.setComponentVisibility(this.Container_E13E8BAD_C276_96F6_41C4_45F0A9BB7BDB, true, 0, this.effect_5B21267B_4F08_3100_41A1_F6699BEFB8F1, 'showEffect', false) } else { this.setComponentVisibility(this.Container_E13E8BAD_C276_96F6_41C4_45F0A9BB7BDB, false, 0, this.effect_5B21667B_4F08_3100_41C7_3B45A9C1819F, 'hideEffect', false) }; this.setComponentVisibility(this.Container_E13E0BAC_C276_96F6_41E3_7E33531834DB, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false)",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Rooms",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0,
  1
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_E13E8BAD_C276_96F6_41C4_45F0A9BB7BDB",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_E13EABAD_C276_96F6_41C7_6F778C19CF31",
  "this.Container_E13EDBAD_C276_96F6_41D5_916DF8598E94",
  "this.Button_E13EFBAD_C276_96F6_41E0_1E288074B4C9",
  "this.Button_E13E0BAD_C276_96F6_41D5_0262CCFC7CDE",
  "this.Button_E13E3BAD_C276_96F6_41DD_3F0D4308F564",
  "this.Button_E13E5BAD_C276_96F6_41E7_66A32207D30F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "scrollBarWidth": 7,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 159,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13FBBAD_C276_96F6_41E3_7C2D292890E3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "left",
 "data": {
  "name": "Button 3 - Amenities"
 },
 "id": "Button_E13FDBAD_C276_96F6_41D1_ED62F73753DD",
 "backgroundOpacity": 0,
 "pressedFontColor": "#0193DD",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "click": "if(!this.Container_E07F092E_C3BF_93F3_41E0_BE24258BC1EA.get('visible')){ this.setComponentVisibility(this.Container_E07F092E_C3BF_93F3_41E0_BE24258BC1EA, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_E07F092E_C3BF_93F3_41E0_BE24258BC1EA, false, 0, null, null, false) }",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Photos",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0,
  1
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13C1BAD_C276_96F6_41D8_AE30336053C0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "left",
 "data": {
  "name": "Button 4 - Sports area"
 },
 "pressedLabel": "Google Maps",
 "id": "Button_E13C0BAD_C276_96F6_41D2_B53E805D3B38",
 "backgroundOpacity": 0,
 "pressedFontColor": "#0193DD",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "click": "this.openLink('https://g.page/lovein_hotelresortjepara?share', '_blank')",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Google Maps",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0,
  1
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13C5BAD_C276_96F6_41E6_0B7EB1E6E28F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "left",
 "data": {
  "name": "Button 5 - Swimming"
 },
 "id": "Button_E13C1BAE_C276_96F2_41BB_5BCB0F3191ED",
 "backgroundOpacity": 0,
 "pressedFontColor": "#0193DD",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "click": "this.openLink('https://instagram.com/lovein.hotelresortjepara?igshid=YmMyMTA2M2Y=', '_blank')",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Instagram",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0,
  1
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13D4BAE_C276_96F2_41C8_8D2B612B8C55",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "left",
 "data": {
  "name": "Button 5 - Swimming"
 },
 "id": "Button_E0534263_C391_B672_41CC_8D6C10A365D4",
 "backgroundOpacity": 0,
 "pressedFontColor": "#0193DD",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "click": "this.openLink('https://linktr.ee/loveinhoteljpr', '_blank')",
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Linktree",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "fontStyle": "italic",
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0,
  1
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAE790E_C272_F3B3_41D0_B1E7925505CF",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "height": 2,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 1095,
 "id": "IconButton_E0A5280E_C3B1_71B2_41E2_CB52E78E1A22",
 "backgroundOpacity": 0,
 "maxHeight": 1095,
 "class": "IconButton",
 "width": 37,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "if(!this.Container_E2E90D17_C271_73D2_41E5_850BC4E2FF83.get('visible')){ this.setComponentVisibility(this.Container_E2E90D17_C271_73D2_41E5_850BC4E2FF83, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_E2E90D17_C271_73D2_41E5_850BC4E2FF83, false, 0, null, null, false) }",
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_E0A5280E_C3B1_71B2_41E2_CB52E78E1A22.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton70464"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_DDAE090F_C272_F3B1_41DE_F96DF6A25A11",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_DDAE190F_C272_F3B1_41E1_0FD900872496",
  "this.IconButton_DDAE290F_C272_F3B1_41CD_A2DEA5D8D953",
  "this.IconButton_DDA9C90F_C272_F3B1_41E3_5B9E1898C2B3",
  "this.IconButton_DDA9D90F_C272_F3B1_41E4_D076910C04D8"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 0,
 "height": 40,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 16,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container settings"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_DDA9E90F_C272_F3B1_41DC_17777EEFA9D6",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 78,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 358,
 "maxWidth": 2676,
 "id": "IconButton_E7786AC8_C3B3_96BE_41CE_1E28E7DF9F09",
 "backgroundOpacity": 0,
 "width": 220.1,
 "right": "3.02%",
 "class": "IconButton",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "14.12%",
 "height": 57,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "click": "this.openLink('https://virtualreality.digidaxa.com', '_blank')",
 "iconURL": "skin/IconButton_E7786AC8_C3B3_96BE_41CE_1E28E7DF9F09.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton71856"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13E3BAC_C276_96F6_41AB_1FA971E6D1BE",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13E5BAC_C276_96F6_41C6_6AD6DEDB6BE0",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_E13E4BAC_C276_96F6_41E5_9ECE5066095F",
 "backgroundOpacity": 1,
 "pressedFontColor": "#0193DD",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "gap": 5,
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "click": "this.openLink('https://wasap.at/Y5UE9q', '_blank')",
 "pressedBackgroundColorRatios": [
  0,
  1
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingRight": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "rollOverFontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 20,
 "label": "+62 8132 8030 399",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#0193DD",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13EABAD_C276_96F6_41C7_6F778C19CF31",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_E13EDBAD_C276_96F6_41D5_916DF8598E94",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "class": "Container",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_E13EFBAD_C276_96F6_41E0_1E288074B4C9",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "gap": 5,
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingRight": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "rollOverFontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 20,
 "label": "Standard Double",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#0193DD",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_E13E0BAD_C276_96F6_41D5_0262CCFC7CDE",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "gap": 23,
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "rollOverFontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 20,
 "label": "Standard Twin",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#0193DD",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Deluxe Double",
 "id": "Button_E13E3BAD_C276_96F6_41DD_3F0D4308F564",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "gap": 5,
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "rollOverFontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 20,
 "label": "Deluxe Double",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#0193DD",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_E13E5BAD_C276_96F6_41E7_66A32207D30F",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#0193DD"
 ],
 "gap": 5,
 "class": "Button",
 "iconHeight": 32,
 "borderRadius": 0,
 "click": "this.mainPlayList.set('selectedIndex', 12)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "rollOverFontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 20,
 "label": "Resort",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#0193DD",
 "fontWeight": "normal"
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); }
 },
 "buttonToggleFullscreen": "this.IconButton_DDAE290F_C272_F3B1_41CD_A2DEA5D8D953",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player475"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
