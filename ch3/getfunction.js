import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";

export let URLGeoJson = "https://asia-southeast2-modular-bucksaw-401904.cloudfunctions.net/function-1";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td>#KORDINAT#</td>
<td>#TYPE#</td>
`

export function responseData(results){
    console.log(results);
    results.forEach(isiRow);
}

export function isiRow(value) {
    let content = tableTemplate
        .replace("#NAME#", value.properties.name)
        .replace("#KORDINAT#", JSON.stringify(value.geometry.coordinates))
        .replace("#TYPE#", value.geometry.type);
    console.log(content);
    addChild("lokasi", tableTag, tableRowClass, content);
}
