import{d as u,f as s,g as i,h as n}from"../../../_chunks/chunk-OUFU5YMX.js";import{a as r,b as m,c as o,e as g,f as p}from"../../../_chunks/chunk-K3EI6ARL.js";var d=m(g(),1);var l=m(p(),1);var c=m(p(),1);var e=class extends c.EntityDialog{constructor(){super(...arguments);this.form=new s(this.idPrefix)}getFormKey(){return s.formKey}getRowDefinition(){return i}getService(){return n.baseUrl}};r(e,"MovieDialog"),e=o([c.Decorators.registerClass("MovieTutorial.MovieDB.MovieDialog")],e);var t=class extends l.EntityGrid{getColumnsKey(){return u.columnsKey}getDialogType(){return e}getRowDefinition(){return i}getService(){return n.baseUrl}constructor(a){super(a)}getQuickSearchFields(){return[{name:"",title:"all"},{name:"Description",title:"description"},{name:"Storyline",title:"storyline"},{name:"Year",title:"year"}]}};r(t,"MovieGrid"),t=o([l.Decorators.registerClass("MovieTutorial.MovieDB.MovieGrid")],t);function v(){(0,d.initFullHeightGridPage)(new t($("#GridDiv")).element)}r(v,"pageInit");export{v as default};
//# sourceMappingURL=MoviePage.js.map
