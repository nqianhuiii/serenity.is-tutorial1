import{a as t,b as n,c as L,d as P,e as u,f as x}from"./chunk-K3EI6ARL.js";var D=class{};t(D,"GenreColumns"),D.columnsKey="MovieDB.Genre";var l=n(u(),1);var r=class{static getLookup(){return(0,l.getLookup)("MovieDB.Genre")}static getLookupAsync(){return P(this,null,function*(){return(0,l.getLookupAsync)("MovieDB.Genre")})}};t(r,"GenreRow"),r.idProperty="GenreId",r.nameProperty="Name",r.localTextPrefix="MovieDB.Genre",r.lookupKey="MovieDB.Genre",r.deletePermission="Administration:General",r.insertPermission="Administration:General",r.readPermission="Administration:General",r.updatePermission="Administration:General",r.Fields=(0,l.fieldsProxy)();var G=n(u(),1),S;(i=>(i.baseUrl="MovieDB/Genre",i.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(e=>{i[e]=function(d,m,R){return(0,G.serviceRequest)(i.baseUrl+"/"+e,d,m,R)}})))(S||(S={}));var q=class{};t(q,"MovieColumns"),q.columnsKey="MovieDB.Movie";var g=n(x(),1);var M=n(x(),1),T=n(u(),1);var y=class extends M.PrefixedContext{constructor(c){if(super(c),!y.init){y.init=!0;var i=M.StringEditor;(0,T.initFormType)(y,["Name",i])}}},p=y;t(p,"GenreForm"),p.formKey="MovieDB.Genre";var o=n(x(),1);var A=n(x(),1),E=(e=>(e[e.Film=1]="Film",e[e.TvSeries=2]="TvSeries",e[e.MiniSeries=3]="MiniSeries",e))(E||{});A.Decorators.registerEnumType(E,"MovieTutorial.MovieDB.MovieKind","MovieDB.MovieKind");var b=n(u(),1);var f=class extends o.PrefixedContext{constructor(c){if(super(c),!f.init){f.init=!0;var i=o.StringEditor,e=o.TextAreaEditor,d=o.IntegerEditor,m=o.DateEditor,R=o.LookupEditor,I=o.EnumEditor;(0,b.initFormType)(f,["Title",i,"Description",e,"Storyline",e,"Year",d,"ReleaseDate",m,"Runtime",d,"GenreId",R,"Kind",I])}}},B=f;t(B,"MovieForm"),B.formKey="MovieDB.Movie";var O=n(u(),1);var s=class{};t(s,"MovieRow"),s.idProperty="MovieId",s.nameProperty="Title",s.localTextPrefix="MovieDB.Movie",s.deletePermission="Administration:General",s.insertPermission="Administration:General",s.readPermission="Administration:General",s.updatePermission="Administration:General",s.Fields=(0,O.fieldsProxy)();var H=n(u(),1),U;(i=>(i.baseUrl="MovieDB/Movie",i.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(e=>{i[e]=function(d,m,R){return(0,H.serviceRequest)(i.baseUrl+"/"+e,d,m,R)}})))(U||(U={}));var v=class extends g.EntityDialog{constructor(){super(...arguments);this.form=new p(this.idPrefix)}getFormKey(){return p.formKey}getRowDefinition(){return r}getService(){return S.baseUrl}};t(v,"GenreDialog"),v=L([g.Decorators.registerClass("MovieTutorial.MovieDB.GenreDialog")],v);export{D as a,r as b,S as c,q as d,v as e,B as f,s as g,U as h};
//# sourceMappingURL=chunk-OUFU5YMX.js.map