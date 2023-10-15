import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";
import {tableTemplate, tableRowClass, tableTag} from "../template/template.js"

export function isiRowPoint(value){
    if (value.geometry.type === "Point") {
    let content=tableTemplate.replace("#NAME#",value.properties.Tikum).replace("#KORDINAT#",value.geometry.coordinates).replace("#TYPE#",value.geometry.type);
    // console.log(content);
    addChild("pointTable",tableTag,tableRowClass,content);
    }
}

export function isiRowPolygon(value){
    if (value.geometry.type === "Polygon") {
    let content=tableTemplate.replace("#NAME#",value.properties.Tempat).replace("#KORDINAT#",value.geometry.coordinates).replace("#TYPE#",value.geometry.type);
    // console.log(content);
    addChild("polygonTable",tableTag,tableRowClass,content);
    }
}

export function isiRowPolyline(value){
    if (value.geometry.type === "LineString") {
    let content=tableTemplate.replace("#NAME#",value.properties.Jalan).replace("#KORDINAT#",value.geometry.coordinates).replace("#TYPE#",value.geometry.type);
    // console.log(content);
    addChild("polylineTable",tableTag,tableRowClass,content);
    }
}

export function responseData(results){
    // console.log(results.features);
    results.features.forEach(isiRowPoint);
    results.features.forEach(isiRowPolygon);
    results.features.forEach(isiRowPolyline);
}