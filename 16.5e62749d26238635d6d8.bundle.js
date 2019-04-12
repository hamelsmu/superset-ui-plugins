(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1045:function(module,exports,__webpack_require__){var d3=__webpack_require__(48);d3.legend=__webpack_require__(1046),module.exports=d3},1046:function(module,exports,__webpack_require__){module.exports={color:__webpack_require__(1047),size:__webpack_require__(1048),symbol:__webpack_require__(1049)}},1047:function(module,exports,__webpack_require__){var helper=__webpack_require__(758);module.exports=function(){var path,scale=d3.scale.linear(),shape="rect",shapeWidth=15,shapeHeight=15,shapeRadius=10,shapePadding=2,cells=[5],labels=[],classPrefix="",useClass=!1,title="",labelFormat=d3.format(".01f"),labelOffset=10,labelAlign="middle",labelDelimiter="to",orient="vertical",ascending=!1,legendDispatcher=d3.dispatch("cellover","cellout","cellclick");function legend(svg){var type=helper.d3_calcType(scale,ascending,cells,labels,labelFormat,labelDelimiter),legendG=svg.selectAll("g").data([scale]);legendG.enter().append("g").attr("class",classPrefix+"legendCells");var cell=legendG.selectAll("."+classPrefix+"cell").data(type.data),cellEnter=cell.enter().append("g",".cell").attr("class",classPrefix+"cell").style("opacity",1e-6),shapes=(cellEnter.append(shape).attr("class",classPrefix+"swatch"),cell.select("g."+classPrefix+"cell "+shape));helper.d3_addEvents(cellEnter,legendDispatcher),cell.exit().transition().style("opacity",0).remove(),helper.d3_drawShapes(shape,shapes,shapeHeight,shapeWidth,shapeRadius,path),helper.d3_addText(legendG,cellEnter,type.labels,classPrefix);var text=cell.select("text"),shapeSize=shapes[0].map(function(d){return d.getBBox()});useClass?shapes.attr("class",function(d){return classPrefix+"swatch "+type.feature(d)}):"line"==shape?shapes.style("stroke",type.feature):shapes.style("fill",type.feature);var cellTrans,textTrans,textAlign="start"==labelAlign?0:"middle"==labelAlign?.5:1;"vertical"===orient?(cellTrans=function(d,i){return"translate(0, "+i*(shapeSize[i].height+shapePadding)+")"},textTrans=function(d,i){return"translate("+(shapeSize[i].width+shapeSize[i].x+labelOffset)+","+(shapeSize[i].y+shapeSize[i].height/2+5)+")"}):"horizontal"===orient&&(cellTrans=function(d,i){return"translate("+i*(shapeSize[i].width+shapePadding)+",0)"},textTrans=function(d,i){return"translate("+(shapeSize[i].width*textAlign+shapeSize[i].x)+","+(shapeSize[i].height+shapeSize[i].y+labelOffset+8)+")"}),helper.d3_placement(orient,cell,cellTrans,text,textTrans,labelAlign),helper.d3_title(svg,legendG,title,classPrefix),cell.transition().style("opacity",1)}return legend.scale=function(_){return arguments.length?(scale=_,legend):scale},legend.cells=function(_){return arguments.length?((_.length>1||_>=2)&&(cells=_),legend):cells},legend.shape=function(_,d){return arguments.length?(("rect"==_||"circle"==_||"line"==_||"path"==_&&"string"==typeof d)&&(shape=_,path=d),legend):shape},legend.shapeWidth=function(_){return arguments.length?(shapeWidth=+_,legend):shapeWidth},legend.shapeHeight=function(_){return arguments.length?(shapeHeight=+_,legend):shapeHeight},legend.shapeRadius=function(_){return arguments.length?(shapeRadius=+_,legend):shapeRadius},legend.shapePadding=function(_){return arguments.length?(shapePadding=+_,legend):shapePadding},legend.labels=function(_){return arguments.length?(labels=_,legend):labels},legend.labelAlign=function(_){return arguments.length?("start"!=_&&"end"!=_&&"middle"!=_||(labelAlign=_),legend):labelAlign},legend.labelFormat=function(_){return arguments.length?(labelFormat=_,legend):labelFormat},legend.labelOffset=function(_){return arguments.length?(labelOffset=+_,legend):labelOffset},legend.labelDelimiter=function(_){return arguments.length?(labelDelimiter=_,legend):labelDelimiter},legend.useClass=function(_){return arguments.length?(!0!==_&&!1!==_||(useClass=_),legend):useClass},legend.orient=function(_){return arguments.length?("horizontal"!=(_=_.toLowerCase())&&"vertical"!=_||(orient=_),legend):orient},legend.ascending=function(_){return arguments.length?(ascending=!!_,legend):ascending},legend.classPrefix=function(_){return arguments.length?(classPrefix=_,legend):classPrefix},legend.title=function(_){return arguments.length?(title=_,legend):title},d3.rebind(legend,legendDispatcher,"on"),legend}},1048:function(module,exports,__webpack_require__){var helper=__webpack_require__(758);module.exports=function(){var path,scale=d3.scale.linear(),shape="rect",shapeWidth=15,shapePadding=2,cells=[5],labels=[],classPrefix="",title="",labelFormat=d3.format(".01f"),labelOffset=10,labelAlign="middle",labelDelimiter="to",orient="vertical",ascending=!1,legendDispatcher=d3.dispatch("cellover","cellout","cellclick");function legend(svg){var type=helper.d3_calcType(scale,ascending,cells,labels,labelFormat,labelDelimiter),legendG=svg.selectAll("g").data([scale]);legendG.enter().append("g").attr("class",classPrefix+"legendCells");var cell=legendG.selectAll("."+classPrefix+"cell").data(type.data),cellEnter=cell.enter().append("g",".cell").attr("class",classPrefix+"cell").style("opacity",1e-6),shapes=(cellEnter.append(shape).attr("class",classPrefix+"swatch"),cell.select("g."+classPrefix+"cell "+shape));helper.d3_addEvents(cellEnter,legendDispatcher),cell.exit().transition().style("opacity",0).remove(),"line"===shape?(helper.d3_drawShapes(shape,shapes,0,shapeWidth),shapes.attr("stroke-width",type.feature)):helper.d3_drawShapes(shape,shapes,type.feature,type.feature,type.feature,path),helper.d3_addText(legendG,cellEnter,type.labels,classPrefix);var cellTrans,textTrans,text=cell.select("text"),shapeSize=shapes[0].map(function(d,i){var bbox=d.getBBox(),stroke=scale(type.data[i]);return"line"===shape&&"horizontal"===orient?bbox.height=bbox.height+stroke:"line"===shape&&"vertical"===orient&&(bbox.width=bbox.width),bbox}),maxH=d3.max(shapeSize,function(d){return d.height+d.y}),maxW=d3.max(shapeSize,function(d){return d.width+d.x}),textAlign="start"==labelAlign?0:"middle"==labelAlign?.5:1;"vertical"===orient?(cellTrans=function(d,i){return"translate(0, "+(d3.sum(shapeSize.slice(0,i+1),function(d){return d.height})+i*shapePadding)+")"},textTrans=function(d,i){return"translate("+(maxW+labelOffset)+","+(shapeSize[i].y+shapeSize[i].height/2+5)+")"}):"horizontal"===orient&&(cellTrans=function(d,i){return"translate("+(d3.sum(shapeSize.slice(0,i+1),function(d){return d.width})+i*shapePadding)+",0)"},textTrans=function(d,i){return"translate("+(shapeSize[i].width*textAlign+shapeSize[i].x)+","+(maxH+labelOffset)+")"}),helper.d3_placement(orient,cell,cellTrans,text,textTrans,labelAlign),helper.d3_title(svg,legendG,title,classPrefix),cell.transition().style("opacity",1)}return legend.scale=function(_){return arguments.length?(scale=_,legend):scale},legend.cells=function(_){return arguments.length?((_.length>1||_>=2)&&(cells=_),legend):cells},legend.shape=function(_,d){return arguments.length?("rect"!=_&&"circle"!=_&&"line"!=_||(shape=_,path=d),legend):shape},legend.shapeWidth=function(_){return arguments.length?(shapeWidth=+_,legend):shapeWidth},legend.shapePadding=function(_){return arguments.length?(shapePadding=+_,legend):shapePadding},legend.labels=function(_){return arguments.length?(labels=_,legend):labels},legend.labelAlign=function(_){return arguments.length?("start"!=_&&"end"!=_&&"middle"!=_||(labelAlign=_),legend):labelAlign},legend.labelFormat=function(_){return arguments.length?(labelFormat=_,legend):labelFormat},legend.labelOffset=function(_){return arguments.length?(labelOffset=+_,legend):labelOffset},legend.labelDelimiter=function(_){return arguments.length?(labelDelimiter=_,legend):labelDelimiter},legend.orient=function(_){return arguments.length?("horizontal"!=(_=_.toLowerCase())&&"vertical"!=_||(orient=_),legend):orient},legend.ascending=function(_){return arguments.length?(ascending=!!_,legend):ascending},legend.classPrefix=function(_){return arguments.length?(classPrefix=_,legend):classPrefix},legend.title=function(_){return arguments.length?(title=_,legend):title},d3.rebind(legend,legendDispatcher,"on"),legend}},1049:function(module,exports,__webpack_require__){var helper=__webpack_require__(758);module.exports=function(){var scale=d3.scale.linear(),shape="path",shapeWidth=15,shapeHeight=15,shapeRadius=10,shapePadding=5,cells=[5],labels=[],classPrefix="",title="",labelFormat=d3.format(".01f"),labelAlign="middle",labelOffset=10,labelDelimiter="to",orient="vertical",ascending=!1,legendDispatcher=d3.dispatch("cellover","cellout","cellclick");function legend(svg){var type=helper.d3_calcType(scale,ascending,cells,labels,labelFormat,labelDelimiter),legendG=svg.selectAll("g").data([scale]);legendG.enter().append("g").attr("class",classPrefix+"legendCells");var cell=legendG.selectAll("."+classPrefix+"cell").data(type.data),cellEnter=cell.enter().append("g",".cell").attr("class",classPrefix+"cell").style("opacity",1e-6),shapes=(cellEnter.append(shape).attr("class",classPrefix+"swatch"),cell.select("g."+classPrefix+"cell "+shape));helper.d3_addEvents(cellEnter,legendDispatcher),cell.exit().transition().style("opacity",0).remove(),helper.d3_drawShapes(shape,shapes,shapeHeight,shapeWidth,shapeRadius,type.feature),helper.d3_addText(legendG,cellEnter,type.labels,classPrefix);var cellTrans,textTrans,text=cell.select("text"),shapeSize=shapes[0].map(function(d){return d.getBBox()}),maxH=d3.max(shapeSize,function(d){return d.height}),maxW=d3.max(shapeSize,function(d){return d.width}),textAlign="start"==labelAlign?0:"middle"==labelAlign?.5:1;"vertical"===orient?(cellTrans=function(d,i){return"translate(0, "+i*(maxH+shapePadding)+")"},textTrans=function(d,i){return"translate("+(maxW+labelOffset)+","+(shapeSize[i].y+shapeSize[i].height/2+5)+")"}):"horizontal"===orient&&(cellTrans=function(d,i){return"translate("+i*(maxW+shapePadding)+",0)"},textTrans=function(d,i){return"translate("+(shapeSize[i].width*textAlign+shapeSize[i].x)+","+(maxH+labelOffset)+")"}),helper.d3_placement(orient,cell,cellTrans,text,textTrans,labelAlign),helper.d3_title(svg,legendG,title,classPrefix),cell.transition().style("opacity",1)}return legend.scale=function(_){return arguments.length?(scale=_,legend):scale},legend.cells=function(_){return arguments.length?((_.length>1||_>=2)&&(cells=_),legend):cells},legend.shapePadding=function(_){return arguments.length?(shapePadding=+_,legend):shapePadding},legend.labels=function(_){return arguments.length?(labels=_,legend):labels},legend.labelAlign=function(_){return arguments.length?("start"!=_&&"end"!=_&&"middle"!=_||(labelAlign=_),legend):labelAlign},legend.labelFormat=function(_){return arguments.length?(labelFormat=_,legend):labelFormat},legend.labelOffset=function(_){return arguments.length?(labelOffset=+_,legend):labelOffset},legend.labelDelimiter=function(_){return arguments.length?(labelDelimiter=_,legend):labelDelimiter},legend.orient=function(_){return arguments.length?("horizontal"!=(_=_.toLowerCase())&&"vertical"!=_||(orient=_),legend):orient},legend.ascending=function(_){return arguments.length?(ascending=!!_,legend):ascending},legend.classPrefix=function(_){return arguments.length?(classPrefix=_,legend):classPrefix},legend.title=function(_){return arguments.length?(title=_,legend):title},d3.rebind(legend,legendDispatcher,"on"),legend}},1050:function(module,exports,__webpack_require__){var content=__webpack_require__(1051);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(137)(content,options);content.locals&&(module.exports=content.locals)},1051:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(136)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n/* from d3-tip */\n.d3-tip {\n  line-height: 1;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 2px;\n  pointer-events: none;\n  z-index: 1000;\n}\n\n/* Creates a small triangle extender for the tooltip */\n.d3-tip:after {\n  box-sizing: border-box;\n  display: inline;\n  font-size: 10px;\n  width: 100%;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  pointer-events: none;\n}\n\n/* Northward tooltips */\n.d3-tip.n:after {\n  content: "\\25BC";\n  margin: -1px 0 0 0;\n  top: 100%;\n  left: 0;\n  text-align: center;\n}\n\n/* Eastward tooltips */\n.d3-tip.e:after {\n  content: "\\25C0";\n  margin: -4px 0 0 0;\n  top: 50%;\n  left: -8px;\n}\n\n/* Southward tooltips */\n.d3-tip.s:after {\n  content: "\\25B2";\n  margin: 0 0 1px 0;\n  top: -8px;\n  left: 0;\n  text-align: center;\n}\n\n/* Westward tooltips */\n.d3-tip.w:after {\n  content: "\\25B6";\n  margin: -4px 0 0 -1px;\n  top: 50%;\n  left: 100%;\n}\n',""])},1052:function(module,exports,__webpack_require__){var content=__webpack_require__(1053);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(137)(content,options);content.locals&&(module.exports=content.locals)},1053:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(136)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-heatmap {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n\n.superset-legacy-chart-heatmap .axis text {\n  font: 12px sans-serif;\n  text-rendering: optimizeLegibility;\n  fill: #555;\n}\n\n.superset-legacy-chart-heatmap .background-rect {\n  stroke: #ddd;\n  fill-opacity: 0;\n  pointer-events: all;\n}\n\n.superset-legacy-chart-heatmap .axis path,\n.superset-legacy-chart-heatmap .axis line {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.superset-legacy-chart-heatmap canvas, .superset-legacy-chart-heatmap img {\n  image-rendering: optimizeSpeed;             /* Older versions of FF          */\n  image-rendering: -moz-crisp-edges;          /* FF 6.0+                       */ /* Safari                        */\n  image-rendering: -o-crisp-edges;            /* OS X & Windows Opera (12.02+) */\n  image-rendering: pixelated;                 /* Awesome future-browsers       */\n  -ms-interpolation-mode: nearest-neighbor;   /* IE                            */\n}\n\n.superset-legacy-chart-heatmap .legendCells text {\n  font-size: 10px;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.superset-legacy-chart-heatmap .legendCells .cell:first-child text {\n  opacity: 1;\n}\n.superset-legacy-chart-heatmap .legendCells .cell:last-child text {\n  opacity: 1;\n}\n\n.dashboard .superset-legacy-chart-heatmap .axis text {\n  font-size: 10px;\n  opacity: .75;\n}\n',""])},1580:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var reactify=__webpack_require__(693),d3=__webpack_require__(48),d3_default=__webpack_require__.n(d3),prop_types=__webpack_require__(0),prop_types_default=__webpack_require__.n(prop_types),d3_tip=(__webpack_require__(1045),__webpack_require__(182)),SequentialSchemeRegistrySingleton=__webpack_require__(175),NumberFormatterRegistrySingleton=__webpack_require__(135),NumberFormats=__webpack_require__(54),propTypes=(__webpack_require__(1050),__webpack_require__(1052),{data:prop_types_default.a.shape({records:prop_types_default.a.arrayOf(prop_types_default.a.shape({x:prop_types_default.a.string,y:prop_types_default.a.string,v:prop_types_default.a.number,perc:prop_types_default.a.number,rank:prop_types_default.a.number})),extents:prop_types_default.a.arrayOf(prop_types_default.a.number)}),width:prop_types_default.a.number,height:prop_types_default.a.number,bottomMargin:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]),colorScheme:prop_types_default.a.string,columnX:prop_types_default.a.string,columnY:prop_types_default.a.string,leftMargin:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]),metric:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.object]),normalized:prop_types_default.a.bool,numberFormat:prop_types_default.a.string,showLegend:prop_types_default.a.bool,showPercentage:prop_types_default.a.bool,showValues:prop_types_default.a.bool,sortXAxis:prop_types_default.a.string,sortYAxis:prop_types_default.a.string,xScaleInterval:prop_types_default.a.number,yScaleInterval:prop_types_default.a.number,yAxisBounds:prop_types_default.a.arrayOf(prop_types_default.a.number)});function cmp(c,a){return c>a?1:-1}function Heatmap_Heatmap(a,b){function c(a,b,c){var e={},f={};z.forEach(function(b){e[b[a]]=(e[b[a]]||0)+b.v,f[b[a]]=b[a]});var g=Object.keys(f).map(function(a){return f[a]});return"alpha_asc"===c?e=g.sort(cmp):"alpha_desc"===c?e=g.sort(cmp).reverse():"value_desc"===c?e=Object.keys(e).sort(function(c,a){return e[c]>e[a]?-1:1}):"value_asc"==c&&(e=Object.keys(e).sort(function(c,a){return e[a]>e[c]?-1:1})),"y"===a&&b&&e.reverse(),b?d3_default.a.scale.ordinal().domain(e).rangeBands(b):d3_default.a.scale.ordinal().domain(e).range(d3_default.a.range(e.length))}var d=b.data,e=b.width,f=b.height,g=b.bottomMargin,h=b.canvasImageRendering,i=b.colorScheme,j=b.columnX,k=b.columnY,l=b.leftMargin,o=b.metric,p=b.normalized,q=b.numberFormat,r=b.showLegend,s=b.showPercentage,t=b.showValues,u=b.sortXAxis,v=b.sortYAxis,w=b.xScaleInterval,x=b.yScaleInterval,y=b.yAxisBounds,z=d.records,A=d.extents,B={top:10,right:10,bottom:35,left:35},C=Object(NumberFormatterRegistrySingleton.b)(q);a.innerHTML="";var D={};!function(){for(var a,d=1,e=1,f=0;f<z.length;f++)a=z[f],d=Math.max(d,a.x.toString().length||1),e=Math.max(e,a.y.toString().length||1);B.left="auto"===l?Math.ceil(Math.max(B.left,6*e)):l,r&&(B.right+=40),B.bottom="auto"===g?Math.ceil(Math.max(B.bottom,4.5*d)):g}();var E=e-(B.left+B.right),F=f-(B.bottom+B.top),G=Object(NumberFormatterRegistrySingleton.b)(NumberFormats.a.PERCENT),m=c("x",null,u),n=c("y",null,v),H=c("x",[0,E],u),I=c("y",[F,0],v),L=[H.domain().length,I.domain().length],M=y[0]||0,N=y[1]||1,O=Object(SequentialSchemeRegistrySingleton.a)().get(i).createLinearScale([M,N]),P=[d3_default.a.scale.linear().domain([0,L[0]]).range([0,E]),d3_default.a.scale.linear().domain([0,L[1]]).range([0,F])],Q=d3_default.a.select(a);Q.classed("superset-legacy-chart-heatmap",!0);var R=Q.append("canvas").attr("width",L[0]).attr("height",L[1]).style("width",E+"px").style("height",F+"px").style("image-rendering",h).style("left",B.left+"px").style("top",B.top+"px").style("position","absolute"),S=Q.append("svg").attr("width",e).attr("height",f).style("position","relative");t&&S.selectAll("rect").data(z).enter().append("g").attr("transform","translate("+B.left+", "+B.top+")").append("text").attr("transform",function(a){return"translate("+H(a.x)+", "+I(a.y)+")"}).attr("y",I.rangeBand()/2).attr("x",H.rangeBand()/2).attr("text-anchor","middle").attr("dy",".35em").text(function(a){return C(a.v)}).attr("font-size",Math.min(I.rangeBand(),H.rangeBand())/3+"px").attr("fill",function(a){return a.v>=A[1]/2?"white":"black"});if(r){var Z=d3_default.a.legend.color().labelFormat(C).scale(O).shapePadding(0).cells(10).shapeWidth(10).shapeHeight(10).labelOffset(3);S.append("g").attr("transform","translate("+(e-40)+", "+B.top+")").call(Z)}var T=Object(d3_tip.a)().attr("class","d3-tip").offset(function(){var a=d3_default.a.mouse(this),b=a[0]-E/2;return[a[1]-20,b]}).html(function(){var a="",b=d3_default.a.mouse(this),c=Math.floor(P[0].invert(b[0])),d=Math.floor(P[1].invert(b[1])),e="object"==typeof o?o.label:o;if(c in D&&d in D[c]){var f=D[c][d];a+="<div><b>"+j+": </b>"+f.x+"<div>",a+="<div><b>"+k+": </b>"+f.y+"<div>",a+="<div><b>"+e+": </b>"+C(f.v)+"<div>",s&&(a+="<div><b>%: </b>"+G(p?f.rank:f.perc)+"<div>"),T.style("display",null)}else T.style("display","none");return a});S.append("g").attr("transform","translate("+B.left+", "+B.top+")").append("rect").classed("background-rect",!0).on("mousemove",T.show).on("mouseout",T.hide).attr("width",E).attr("height",F).call(T);var V=d3_default.a.svg.axis().scale(H).outerTickSize(0).tickValues(H.domain().filter(function(a,b){return!(b%w)})).orient("bottom"),W=d3_default.a.svg.axis().scale(I).outerTickSize(0).tickValues(I.domain().filter(function(a,b){return!(b%x)})).orient("left");S.append("g").attr("class","x axis").attr("transform","translate("+B.left+","+(B.top+F)+")").call(V).selectAll("text").attr("x",-4).attr("y",10).attr("dy","0.3em").style("text-anchor","end").attr("transform","rotate(-45)"),S.append("g").attr("class","y axis").attr("transform","translate("+B.left+","+B.top+")").call(W);var X=R.node().getContext("2d");X.imageSmoothingEnabled=!1,function(){var a=new Image,b=X.createImageData(L[0],L[1]),e={};z.forEach(function(a){var b=d3_default.a.rgb(O(p?a.rank:a.perc)),c=m(a.x),d=n(a.y);e[c+d*m.domain().length]=b,void 0===D[c]&&(D[c]={}),void 0===D[c][d]&&(D[c][d]=a)});for(var f=-1,d=0;d<L[0]*L[1];d++){var g=e[d],h=255;void 0===g&&(g=d3_default.a.rgb("#F00"),h=0),b.data[++f]=g.r,b.data[++f]=g.g,b.data[++f]=g.b,b.data[++f]=h}X.putImageData(b,0,0),a.src=R.node().toDataURL()}()}Heatmap_Heatmap.displayName="Heatmap",Heatmap_Heatmap.propTypes=propTypes;var esm_Heatmap=Heatmap_Heatmap;__webpack_exports__.default=Object(reactify.a)(esm_Heatmap)},693:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return reactify});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return(_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c])Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}).apply(this,arguments)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function reactify(a,b){var c=function(c){function d(a){var b;return _defineProperty(_assertThisInitialized(b=c.call(this,a)||this),"container",void 0),b.setContainerRef=b.setContainerRef.bind(_assertThisInitialized(b)),b}!function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}(d,c);var e=d.prototype;return e.componentDidMount=function componentDidMount(){this.execute()},e.componentDidUpdate=function componentDidUpdate(){this.execute()},e.componentWillUnmount=function componentWillUnmount(){this.container=void 0,b&&b.componentWillUnmount&&b.componentWillUnmount()},e.setContainerRef=function setContainerRef(a){this.container=a},e.execute=function execute(){this.container&&a(this.container,this.props)},e.render=function render(){var a=this.props,b=a.id,c=a.className;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:b,className:c,ref:this.setContainerRef})},d}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);_defineProperty(c,"propTypes",{id:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string});var d=c;return a.displayName&&(d.displayName=a.displayName),a.propTypes&&(d.propTypes=_extends({},d.propTypes,a.propTypes)),a.defaultProps&&(d.defaultProps=a.defaultProps),c}},758:function(module,exports){module.exports={d3_identity:function(d){return d},d3_mergeLabels:function(gen,labels){if(0===labels.length)return gen;gen=gen||[];for(var i=labels.length;i<gen.length;i++)labels.push(gen[i]);return labels},d3_linearLegend:function(scale,cells,labelFormat){var data=[];if(cells.length>1)data=cells;else for(var domain=scale.domain(),increment=(domain[domain.length-1]-domain[0])/(cells-1),i=0;i<cells;i++)data.push(domain[0]+i*increment);var labels=data.map(labelFormat);return{data:data,labels:labels,feature:function(d){return scale(d)}}},d3_quantLegend:function(scale,labelFormat,labelDelimiter){var labels=scale.range().map(function(d){var invert=scale.invertExtent(d);labelFormat(invert[0]),labelFormat(invert[1]);return labelFormat(invert[0])+" "+labelDelimiter+" "+labelFormat(invert[1])});return{data:scale.range(),labels:labels,feature:this.d3_identity}},d3_ordinalLegend:function(scale){return{data:scale.domain(),labels:scale.domain(),feature:function(d){return scale(d)}}},d3_drawShapes:function(shape,shapes,shapeHeight,shapeWidth,shapeRadius,path){"rect"===shape?shapes.attr("height",shapeHeight).attr("width",shapeWidth):"circle"===shape?shapes.attr("r",shapeRadius):"line"===shape?shapes.attr("x1",0).attr("x2",shapeWidth).attr("y1",0).attr("y2",0):"path"===shape&&shapes.attr("d",path)},d3_addText:function(svg,enter,labels,classPrefix){enter.append("text").attr("class",classPrefix+"label"),svg.selectAll("g."+classPrefix+"cell text."+classPrefix+"label").data(labels).text(this.d3_identity)},d3_calcType:function(scale,ascending,cells,labels,labelFormat,labelDelimiter){var type=scale.ticks?this.d3_linearLegend(scale,cells,labelFormat):scale.invertExtent?this.d3_quantLegend(scale,labelFormat,labelDelimiter):this.d3_ordinalLegend(scale);return type.labels=this.d3_mergeLabels(type.labels,labels),ascending&&(type.labels=this.d3_reverse(type.labels),type.data=this.d3_reverse(type.data)),type},d3_reverse:function(arr){for(var mirror=[],i=0,l=arr.length;i<l;i++)mirror[i]=arr[l-i-1];return mirror},d3_placement:function(orient,cell,cellTrans,text,textTrans,labelAlign){cell.attr("transform",cellTrans),text.attr("transform",textTrans),"horizontal"===orient&&text.style("text-anchor",labelAlign)},d3_addEvents:function(cells,dispatcher){var _=this;cells.on("mouseover.legend",function(d){_.d3_cellOver(dispatcher,d,this)}).on("mouseout.legend",function(d){_.d3_cellOut(dispatcher,d,this)}).on("click.legend",function(d){_.d3_cellClick(dispatcher,d,this)})},d3_cellOver:function(cellDispatcher,d,obj){cellDispatcher.cellover.call(obj,d)},d3_cellOut:function(cellDispatcher,d,obj){cellDispatcher.cellout.call(obj,d)},d3_cellClick:function(cellDispatcher,d,obj){cellDispatcher.cellclick.call(obj,d)},d3_title:function(svg,cellsSvg,title,classPrefix){if(""!==title){svg.selectAll("text."+classPrefix+"legendTitle").data([title]).enter().append("text").attr("class",classPrefix+"legendTitle"),svg.selectAll("text."+classPrefix+"legendTitle").text(title);var yOffset=svg.select("."+classPrefix+"legendTitle").map(function(d){return d[0].getBBox().height})[0],xOffset=-cellsSvg.map(function(d){return d[0].getBBox().x})[0];cellsSvg.attr("transform","translate("+xOffset+","+(yOffset+10)+")")}}}}}]);
//# sourceMappingURL=16.5e62749d26238635d6d8.bundle.js.map