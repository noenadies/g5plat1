gdjs.sn1Code = {};
gdjs.sn1Code.GDCopyOfplayerObjects1= [];
gdjs.sn1Code.GDCopyOfplayerObjects2= [];
gdjs.sn1Code.GDplayerObjects1= [];
gdjs.sn1Code.GDplayerObjects2= [];
gdjs.sn1Code.GDNewObjectObjects1= [];
gdjs.sn1Code.GDNewObjectObjects2= [];
gdjs.sn1Code.GDsuelofalsoObjects1= [];
gdjs.sn1Code.GDsuelofalsoObjects2= [];
gdjs.sn1Code.GDciObjects1= [];
gdjs.sn1Code.GDciObjects2= [];
gdjs.sn1Code.GDcrObjects1= [];
gdjs.sn1Code.GDcrObjects2= [];
gdjs.sn1Code.GDcsaltoObjects1= [];
gdjs.sn1Code.GDcsaltoObjects2= [];
gdjs.sn1Code.GDtext1Objects1= [];
gdjs.sn1Code.GDtext1Objects2= [];

gdjs.sn1Code.conditionTrue_0 = {val:false};
gdjs.sn1Code.condition0IsTrue_0 = {val:false};
gdjs.sn1Code.condition1IsTrue_0 = {val:false};


gdjs.sn1Code.mapOfGDgdjs_46sn1Code_46GDciObjects1Objects = Hashtable.newFrom({"ci": gdjs.sn1Code.GDciObjects1});gdjs.sn1Code.mapOfGDgdjs_46sn1Code_46GDcsaltoObjects1Objects = Hashtable.newFrom({"csalto": gdjs.sn1Code.GDcsaltoObjects1});gdjs.sn1Code.mapOfGDgdjs_46sn1Code_46GDcrObjects1Objects = Hashtable.newFrom({"cr": gdjs.sn1Code.GDcrObjects1});gdjs.sn1Code.eventsList0xb1208 = function(runtimeScene) {

{


{
gdjs.sn1Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.sn1Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.sn1Code.GDplayerObjects1[0].getPointX(""))+180, "", 0);
}}

}


{


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.sn1Code.GDsuelofalsoObjects1.createFrom(runtimeScene.getObjects("suelofalso"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].setScale(1.15);
}
}{for(var i = 0, len = gdjs.sn1Code.GDsuelofalsoObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDsuelofalsoObjects1[i].hide();
}
}}

}


{

gdjs.sn1Code.GDciObjects1.createFrom(runtimeScene.getObjects("ci"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sn1Code.mapOfGDgdjs_46sn1Code_46GDciObjects1Objects, runtimeScene, true, false);
}if ( boolcr){//(gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.sn1Code.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.sn1Code.GDtext1Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDtext1Objects1[i].setString("izquierda");
}
}}

}


{

gdjs.sn1Code.GDcsaltoObjects1.createFrom(runtimeScene.getObjects("csalto"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sn1Code.mapOfGDgdjs_46sn1Code_46GDcsaltoObjects1Objects, runtimeScene, true, false);
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.sn1Code.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.sn1Code.GDtext1Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDtext1Objects1[i].setString("saltando");
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].setAnimation(1);
}
}}

}


{


{
}

}


{

gdjs.sn1Code.GDcrObjects1.createFrom(runtimeScene.getObjects("cr"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sn1Code.mapOfGDgdjs_46sn1Code_46GDcrObjects1Objects, runtimeScene, true, false);
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.sn1Code.GDtext1Objects1.createFrom(runtimeScene.getObjects("text1"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.sn1Code.GDtext1Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDtext1Objects1[i].setString("derecha");
}
}}

}


{

gdjs.sn1Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects1[k] = gdjs.sn1Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.sn1Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.sn1Code.GDplayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects1[k] = gdjs.sn1Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].setAnimation(2);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0xb1208


gdjs.sn1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.sn1Code.GDCopyOfplayerObjects1.length = 0;
gdjs.sn1Code.GDCopyOfplayerObjects2.length = 0;
gdjs.sn1Code.GDplayerObjects1.length = 0;
gdjs.sn1Code.GDplayerObjects2.length = 0;
gdjs.sn1Code.GDNewObjectObjects1.length = 0;
gdjs.sn1Code.GDNewObjectObjects2.length = 0;
gdjs.sn1Code.GDsuelofalsoObjects1.length = 0;
gdjs.sn1Code.GDsuelofalsoObjects2.length = 0;
gdjs.sn1Code.GDciObjects1.length = 0;
gdjs.sn1Code.GDciObjects2.length = 0;
gdjs.sn1Code.GDcrObjects1.length = 0;
gdjs.sn1Code.GDcrObjects2.length = 0;
gdjs.sn1Code.GDcsaltoObjects1.length = 0;
gdjs.sn1Code.GDcsaltoObjects2.length = 0;
gdjs.sn1Code.GDtext1Objects1.length = 0;
gdjs.sn1Code.GDtext1Objects2.length = 0;

gdjs.sn1Code.eventsList0xb1208(runtimeScene);
return;
}
gdjs['sn1Code'] = gdjs.sn1Code;
