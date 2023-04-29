import{a as t,b as ve,c as o,d as M,e as b,f as c,g as R}from"./chunk-FEDAVPE7.js";var X=ve((Ve,Z)=>{Z.exports=Serenity.Extensions});var A=class{};t(A,"GenreColumns"),A.columnsKey="MovieDB.Genre";var P=o(c(),1);var d=class{static getLookup(){return(0,P.getLookup)("MovieDB.Genre")}static getLookupAsync(){return b(this,null,function*(){return(0,P.getLookupAsync)("MovieDB.Genre")})}};t(d,"GenreRow"),d.idProperty="GenreId",d.nameProperty="Name",d.localTextPrefix="MovieDB.Genre",d.lookupKey="MovieDB.Genre",d.deletePermission="Administration:General",d.insertPermission="Administration:General",d.readPermission="Administration:General",d.updatePermission="Administration:General",d.Fields=(0,P.fieldsProxy)();var K=o(c(),1),k;(e=>(e.baseUrl="MovieDB/Genre",e.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(p,a,f){return(0,K.serviceRequest)(e.baseUrl+"/"+r,p,a,f)}})))(k||(k={}));var de=o(R(),1),ue=o(c(),1);var N=o(R(),1),C=(e=>(e[e.Male=1]="Male",e[e.Female=2]="Female",e))(C||{});N.Decorators.registerEnumType(C,"MovieTutorial.MovieDB.Gender","MovieDB.Gender");var h=o(R(),1),Y=o(c(),1);var L=class extends h.PrefixedContext{constructor(i){if(super(i),!L.init){L.init=!0;var e=h.StringEditor;(0,Y.initFormType)(L,["Name",e])}}},I=L;t(I,"GenreForm"),I.formKey="MovieDB.Genre";var O=class{};t(O,"MovieCastColumns"),O.columnsKey="MovieDB.MovieCast";var g=o(R(),1),j=o(c(),1);var E=class extends g.PrefixedContext{constructor(i){if(super(i),!E.init){E.init=!0;var e=g.LookupEditor,r=g.StringEditor;(0,j.initFormType)(E,["PersonId",e,"Character",r])}}},x=E;t(x,"MovieCastForm"),x.formKey="MovieDB.MovieCast";var z=o(c(),1);var n=class{};t(n,"MovieCastRow"),n.idProperty="MovieCastId",n.nameProperty="Character",n.localTextPrefix="MovieDB.MovieCast",n.deletePermission="Administration:General",n.insertPermission="Administration:General",n.readPermission="Administration:General",n.updatePermission="Administration:General",n.Fields=(0,z.fieldsProxy)();var W=o(c(),1),V;(e=>(e.baseUrl="MovieDB/MovieCast",e.Methods={Create:"MovieDB/MovieCast/Create",Update:"MovieDB/MovieCast/Update",Delete:"MovieDB/MovieCast/Delete",Retrieve:"MovieDB/MovieCast/Retrieve",List:"MovieDB/MovieCast/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(p,a,f){return(0,W.serviceRequest)(e.baseUrl+"/"+r,p,a,f)}})))(V||(V={}));var u=o(R(),1);var w=o(R(),1),ee=o(X(),1);var $=o(R(),1),_=o(X(),1);var D=class extends _.GridEditorDialog{constructor(){super();this.form=new x(this.idPrefix)}getFormKey(){return x.formKey}getNameProperty(){return n.nameProperty}getLocalTextPrefix(){return n.localTextPrefix}};t(D,"MovieCastEditDialog"),D=M([$.Decorators.registerClass("MovieTutorial.MovieDB.MovieCastEditDialog")],D);var S=class extends ee.GridEditorBase{getColumnsKey(){return"MovieDB.MovieCast"}getDialogType(){return D}getLocalTextPrefix(){return n.localTextPrefix}constructor(i){super(i)}getAddButtonCaption(){return"Add"}validateEntity(i,e){return super.validateEntity(i,e)?(i.PersonFullname=PersonRow.getLookup().itemById[i.PersonId].Fullname,!0):!1}};t(S,"MovieCastEditor"),S=M([w.Decorators.registerEditor("MovieTutorial.MovieDB.MovieCastEditor")],S);var te=o(R(),1),F=(r=>(r[r.Film=1]="Film",r[r.TvSeries=2]="TvSeries",r[r.MiniSeries=3]="MiniSeries",r))(F||{});te.Decorators.registerEnumType(F,"MovieTutorial.MovieDB.MovieKind","MovieDB.MovieKind");var re=o(c(),1);var T=class extends u.PrefixedContext{constructor(i){if(super(i),!T.init){T.init=!0;var e=u.StringEditor,r=u.TextAreaEditor,p=S,a=u.IntegerEditor,f=u.DateEditor,me=u.EnumEditor,le=u.LookupEditor;(0,re.initFormType)(T,["Title",e,"Description",r,"CastList",p,"Storyline",r,"Year",a,"ReleaseDate",f,"Kind",me,"Runtime",a,"GenreList",le])}}},H=T;t(H,"MovieForm"),H.formKey="MovieDB.Movie";var oe=o(c(),1);var v=class{};t(v,"MovieGenresRow"),v.idProperty="MovieGenreId",v.localTextPrefix="MovieDB.MovieGenres",v.deletePermission="Administration:General",v.insertPermission="Administration:General",v.readPermission="Administration:General",v.updatePermission="Administration:General",v.Fields=(0,oe.fieldsProxy)();var ie=o(c(),1);var l=class{};t(l,"MovieRow"),l.idProperty="MovieId",l.nameProperty="Title",l.localTextPrefix="MovieDB.Movie",l.deletePermission="Administration:General",l.insertPermission="Administration:General",l.readPermission="Administration:General",l.updatePermission="Administration:General",l.Fields=(0,ie.fieldsProxy)();var ne=o(c(),1),se;(e=>(e.baseUrl="MovieDB/Movie",e.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(p,a,f){return(0,ne.serviceRequest)(e.baseUrl+"/"+r,p,a,f)}})))(se||(se={}));var J=class{};t(J,"PersonColumns"),J.columnsKey="MovieDB.Person";var y=o(R(),1);var ae=o(c(),1);var G=class extends y.PrefixedContext{constructor(i){if(super(i),!G.init){G.init=!0;var e=y.StringEditor,r=y.DateEditor,p=y.EnumEditor,a=y.IntegerEditor;(0,ae.initFormType)(G,["FirstName",e,"Lastname",e,"BirthDate",r,"BirthPlace",e,"Gender",p,"Height",a])}}},Q=G;t(Q,"PersonForm"),Q.formKey="MovieDB.Person";var B=o(c(),1);var m=class{static getLookup(){return(0,B.getLookup)("MovieDB.Person")}static getLookupAsync(){return b(this,null,function*(){return(0,B.getLookupAsync)("MovieDB.Person")})}};t(m,"PersonRow"),m.idProperty="PersonId",m.nameProperty="Fullname",m.localTextPrefix="MovieDB.Person",m.lookupKey="MovieDB.Person",m.deletePermission="Administration:General",m.insertPermission="Administration:General",m.readPermission="Administration:General",m.updatePermission="Administration:General",m.Fields=(0,B.fieldsProxy)();var ce=o(c(),1),pe;(e=>(e.baseUrl="MovieDB/Person",e.Methods={Create:"MovieDB/Person/Create",Update:"MovieDB/Person/Update",Delete:"MovieDB/Person/Delete",Retrieve:"MovieDB/Person/Retrieve",List:"MovieDB/Person/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(p,a,f){return(0,ce.serviceRequest)(e.baseUrl+"/"+r,p,a,f)}})))(pe||(pe={}));var q=class{format(i){let e=i.value;if(!e||!e.length)return"";let r=d.getLookup().itemById;return e.map(p=>{let a=r[p];return a?(0,ue.htmlEncode)(a.Name):p.toString()}).join(", ")}};t(q,"GenreListFormatter"),q=M([de.Decorators.registerFormatter("MovieTutorial.MovieDB.GenreListFormatter")],q);var U=class{};t(U,"MovieColumns"),U.columnsKey="MovieDB.Movie";export{A as a,I as b,d as c,k as d,U as e,H as f,l as g,se as h,J as i,Q as j,m as k,pe as l};
//# sourceMappingURL=chunk-MP24BIJR.js.map
