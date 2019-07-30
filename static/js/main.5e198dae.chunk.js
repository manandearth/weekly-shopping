(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,n){e.exports=n(43)},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),l=n.n(r),s=(n(32),n(21)),c=n.n(s),o=(n(33),n(3)),u=n(1),d=n(4),p=n(5),h=n(7),b=n(6),g=n(8),m=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"new-recipe"},i.a.createElement("form",null,i.a.createElement("h2",{className:"top-bar"},this.props.topBar),this.props.editableTitle?i.a.createElement("input",{className:"rename-list",onChange:function(t){return e.props.onUpdateTitle(t.target.value)},onKeyDown:this.props.onTitleEnterKey,onBlur:this.props.onTitleBlur,value:this.props.title,onFocus:function(e){return e.target.select()},autoFocus:!0,required:!0}):i.a.createElement("div",null,i.a.createElement("h2",null,i.a.createElement("span",{onClick:this.props.onTitleClick,className:"recipe-title"},""===this.props.title?"<Recipe-Name>":this.props.title))),i.a.createElement("div",{className:"servings"},this.props.editableServings?i.a.createElement("input",{onChange:function(t){return e.props.onUpdateServings(t.target.value)},onKeyDown:this.props.onServingsEnterKey,onBlur:this.props.onServingsBlur,value:this.props.servings,type:"number",min:"1",step:"1",onFocus:function(e){return e.target.select()},autoFocus:!0}):i.a.createElement("h2",{className:"servings",onClick:this.props.onServingsClick}," Serves: .... ",this.props.servings))))}}]),t}(i.a.Component),v=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(e){var t=this,n=this.props.ingredients,a=["kg","gr","ml","litre","tsp","tbsp","cup","lbs","oz","units"];return i.a.createElement("div",null,i.a.createElement("div",null," ",i.a.createElement("input",{className:"button",type:"submit",value:"Add ingredient",onClick:this.props.onAddIngredient})),i.a.createElement("table",{className:"new-ingredients-table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ingredient"),i.a.createElement("th",null,"Qty."),i.a.createElement("th",null,"Unit")),Object.keys(n).map(function(e){return i.a.createElement("tr",{key:"ingredient-row-"+e},"name"===n[e].editable?i.a.createElement("td",null,i.a.createElement("input",{className:"name",id:e,value:n[e].name,onChange:function(e){return t.props.onTableChange(e)},onKeyDown:t.props.onTableEnterKey,onBlur:t.props.onTableBlur,onFocus:function(e){return e.target.select()},autoFocus:!0})):i.a.createElement("td",{id:e,className:"name",onClick:t.props.onTableClick},n[e].name),i.a.createElement("td",null,"qty"===n[e].editable?i.a.createElement("input",{className:"qty",id:e,type:"number",min:"0",value:n[e].qty,onChange:function(e){return t.props.onTableChange(e)},onKeyDown:t.props.onTableEnterKey,onBlur:t.props.onTableBlur,onFocus:function(e){return e.target.select()},autoFocus:!0,required:!0}):i.a.createElement("span",{id:e,className:"qty",onClick:t.props.onTableClick},n[e].qty)),i.a.createElement("td",null,"unit"===n[e].editable?i.a.createElement("select",{type:"list",name:"unit",className:"unit",id:e,onChange:t.props.onTableChange,onBlur:t.props.onTableBlur},a.map(function(e){return i.a.createElement("option",{key:"unit-list-item-"+e},e)})):i.a.createElement("span",{id:e,className:"unit",onClick:t.props.onTableClick},n[e].unit)))}))))}}]),t}(i.a.Component),E=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",null,i.a.createElement(v,{onAddIngredient:this.props.onAddIngredient,ingredients:this.props.ingredients,onTableChange:this.props.onTableChange,onTableClick:this.props.onTableClick,onTableEnterKey:this.props.onTableEnterKey,onTableBlur:this.props.onTableBlur}))}}]),t}(i.a.Component),y=n(9),f=n(2),T=n.n(f),O=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).handleSubmit=function(e){var t=n.props.title,a=n.props.servings,i=n.props.ingredients,r=T.a.entries(i),l=T.a.values(i);""===t?alert("Please supply a recipe name"):l.filter(function(e){return"new ingredient"===e.name}).length>0?alert("Please supply an ingredient name"):0===r.length&&i.constructor===Object?alert("Please supply ingredients"):(n.props.addRecipe(t,{title:t,editableTitle:!1,servings:a,editableServings:!1,ingredients:i}),n.props.onSubmitReset())},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{className:"button",onClick:this.handleSubmit},"submit"))}}]),t}(i.a.Component),j=Object(y.b)(null,{addRecipe:function(e,t){return{type:"ADD_RECIPE",payload:{recipe:e,content:t}}}})(O),k=n(26),C={date:function(e){var t=e.split("/"),n=Object(k.a)(t,3),a=n[0],i=n[1],r=n[2];return"".concat(r,"-").concat(a,"-").concat(i)},uppercase:function(e){return e.toUpperCase()},integer:function(e){return parseInt(e)},float:function(e){return parseFloat(e)}},S=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).handleTitleClick=function(){return n.setState({editableTitle:!n.state.editableTitle})},n.handleTitleEnterKey=function(e){13===(e.keyCode||e.which)&&n.setState({editableTitle:!n.state.editableTitle})},n.handleTitleBlur=function(){return n.state.editableTitle?n.setState({editableTitle:!n.state.editableTitle}):null},n.updateTitle=function(e){n.setState({title:e})},n.handleServingsClick=function(){n.setState({editableServings:!n.state.editableServings})},n.handleServingsEnterKey=function(e){13===(e.keyCode||e.which)&&n.setState({editableServings:!n.state.editableServings})},n.handleServingsBlur=function(){return n.state.editableServings?n.setState({editableServings:!n.state.editableServings}):null},n.updateServings=function(e){n.setState({servings:C.integer(e)})},n.handleAddIngredient=function(){var e=++n.nextid;n.setState({ingredients:Object(u.a)({},n.state.ingredients,Object(o.a)({},e,{name:"new ingredient",qty:1,unit:"kg",editable:null}))})},n.handleTableClick=function(e){var t=n.state.ingredients,a=e.target,i=a.className,r=parseInt(a.id);n.setState({ingredients:Object(u.a)({},t,Object(o.a)({},r,Object(u.a)({},t[r],{editable:i})))})},n.handleTableEnterKey=function(e){var t=n.state.ingredients,a=e.target,i=parseInt(a.id);13===(e.keyCode||e.which)&&n.setState({ingredients:Object(u.a)({},t,Object(o.a)({},i,Object(u.a)({},t[i],{editable:null})))})},n.handleTableBlur=function(e){var t=n.state.ingredients,a=e.target,i=parseInt(a.id);n.setState({ingredients:Object(u.a)({},t,Object(o.a)({},i,Object(u.a)({},t[i],{editable:null})))})},n.handleTableChange=function(e){var t=e.target,a=t.value,i=parseInt(t.id),r=n.state.ingredients,l=t.className;switch(l){case"qty":n.setState({ingredients:Object(u.a)({},r,Object(o.a)({},i,Object(u.a)({},r[i],Object(o.a)({},l,C.float(a)))))});break;default:n.setState({ingredients:Object(u.a)({},r,Object(o.a)({},i,Object(u.a)({},r[i],Object(o.a)({},l,a))))})}},n.handleSubmitReset=function(){return n.setState(Object(u.a)({},n.defaultState))},n.nextid=0,n.defaultState={editableTitle:!1,title:"",editableServings:!1,servings:1,ingredients:{},list:[]},n.state=n.defaultState,n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"new-recipe"},i.a.createElement(m,{topBar:"Add new recipe",editableTitle:this.state.editableTitle,editableServings:this.state.editableServings,title:this.state.title,onTitleClick:this.handleTitleClick,onTitleEnterKey:this.handleTitleEnterKey,onTitleBlur:this.handleTitleBlur,onUpdateTitle:this.updateTitle,servings:this.state.servings,onServingsClick:this.handleServingsClick,onServingsEnterKey:this.handleServingsEnterKey,onServingsBlur:this.handleServingsBlur,onUpdateServings:this.updateServings}),i.a.createElement(E,{onAddIngredient:this.handleAddIngredient,ingredients:this.state.ingredients,onTableChange:this.handleTableChange,onTableClick:this.handleTableClick,onTableEnterKey:this.handleTableEnterKey,onTableBlur:this.handleTableBlur}),i.a.createElement("div",null,i.a.createElement(j,{title:this.state.title,servings:this.state.servings,ingredients:this.state.ingredients,onSubmitReset:this.handleSubmitReset})))}}]),t}(i.a.Component),I=(n(39),"pick a recipe to edit"),w=function(e){return e.recipes},D=function(e){var t=w(e),n=function(e){return e.selections.selectedRecipe.recipe?e.selections.selectedRecipe.recipe:I}(e);return T.a.values(t).filter(function(e){return e.title===n})},N=function(e){return e.selections.selectedRecipe.recipe&&e.recipes?T.a.values(D(e))[0]:{}},B=function(e){return e.week},R=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(e){setTimeout(function(){n.props.selectRecipe(e),n.props.editRecipe(n.props.selected)},100)},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.recipes;return i.a.createElement("div",{className:"recipe-list"},i.a.createElement("h2",{className:"title"},"The recipes"),i.a.createElement("div",{className:"recipe-list-block"},T.a.keys(t).map(function(t){return i.a.createElement("button",{className:"recipe-list-item",key:"recipe-"+t,onClick:function(){return e.handleClick(t)}},t)})))}}]),t}(i.a.Component);var _=Object(y.b)(function(e){return{recipes:e.recipes,selected:N(e)}},{editRecipe:function(e){return{type:"EDIT_RECIPE",payload:{recipe:e}}},selectRecipe:function(e){return{type:"SELECT_RECIPE",payload:{recipe:e}}}})(R),A=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).handleGetIngredients=function(e){return e||{}},n.handleGetServings=function(e){return e||0},n.handleGetTitle=function(e){return e||""===e?e:I},n.handleTitleClick=function(e){return e.target.innerHTML!==I?n.props.toggleTitle(e.target.innerHTML):null},n.handleUpdateTitle=function(e){n.props.updateTitle(e)},n.handleTitleEnterKey=function(e){13===(e.keyCode||e.which)&&n.props.toggleTitle()},n.handleTitleBlur=function(){return n.props.edited.editableTitle?n.props.toggleTitle():null},n.handleServingsEnterKey=function(e){13===(e.keyCode||e.which)&&n.props.toggleServings()},n.handleServingsClick=function(e){return 0!==e?n.props.toggleServings():null},n.handleUpdateServings=function(e){return n.props.updateServings(C.integer(e))},n.handleServingsBlur=function(){return n.props.edited.editableServings?n.props.toggleServings():null},n.handleTableClick=function(e){n.props.edited.ingredients;var t=e.target,a=t.className,i=parseInt(t.id);n.props.toggleTable(i,a)},n.handleTableEnterKey=function(e){n.props.edited.ingredients;var t=e.target,a=parseInt(t.id);13===(e.keyCode||e.which)&&n.props.toggleTable(a,null)},n.handleTableBlur=function(e){n.props.edited.ingredients;var t=e.target,a=parseInt(t.id);n.props.toggleTable(a,null)},n.handleTableChange=function(e){var t=e.target,a=t.value,i=parseInt(t.id),r=(n.props.edited.ingredients,t.className);switch(r){case"qty":n.props.updateTable(i,r,C.float(a));break;default:n.props.updateTable(i,r,a)}},n.handleAddIngredient=function(){return n.props.addIngredient()},n.handleResetEdit=function(){return n.props.resetEdit()},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(e){var t=this;return i.a.createElement("div",{className:"edit-recipe"},i.a.createElement(m,{topBar:"Edit recipe",title:this.handleGetTitle(this.props.edited.title),editableTitle:this.props.edited.editableTitle,editableServings:this.props.edited.editableServings,servings:this.handleGetServings(this.props.edited.servings),onTitleClick:this.handleTitleClick,onTitleEnterKey:this.handleTitleEnterKey,onTitleBlur:this.handleTitleBlur,onUpdateTitle:this.handleUpdateTitle,onServingsClick:function(){return t.handleServingsClick(t.props.edited.servings)},onUpdateServings:this.handleUpdateServings,onServingsEnterKey:this.handleServingsEnterKey,onServingsBlur:this.handleServingsBlur}),i.a.createElement(L,{key:"ingredients-"+this.props.edited.title,ingredients:this.handleGetIngredients(this.props.edited.ingredients),onTableClick:this.handleTableClick,onTableEnterKey:this.handleTableEnterKey,onTableBlur:this.handleTableBlur,onTableChange:this.handleTableChange,onAddIngredient:this.handleAddIngredient}),i.a.createElement(j,{title:this.props.edited.title,servings:this.props.edited.servings,ingredients:this.props.edited.ingredients,onSubmitReset:this.handleResetEdit}),i.a.createElement("button",{className:"button",onClick:this.handleResetEdit},"Cancel"))}}]),t}(i.a.Component),L=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",null,i.a.createElement(v,{onAddIngredient:this.props.onAddIngredient,ingredients:this.props.ingredients,onTableChange:this.props.onTableChange,onTableClick:this.props.onTableClick,onTableEnterKey:this.props.onTableEnterKey,onTableBlur:this.props.onTableBlur}))}}]),t}(i.a.Component),K=Object(y.b)(function(e){var t;return{edited:(t=e).editedRecipe.recipe?t.editedRecipe.recipe:{}}},{toggleTitle:function(e){return{type:"TOGGLE_TITLE",payload:{title:e}}},toggleServings:function(e,t){return{type:"TOGGLE_SERVINGS",payload:{title:e,servings:t}}},updateTitle:function(e){return{type:"UPDATE_TITLE",payload:{title:e}}},updateServings:function(e){return{type:"UPDATE_SERVINGS",payload:{servings:e}}},toggleTable:function(e,t){return{type:"TOGGLE_TABLE",payload:{id:e,className:t}}},updateTable:function(e,t,n){return{type:"UPDATE_TABLE",payload:{id:e,className:t,value:n}}},resetEdit:function(){return{type:"RESET_EDIT"}},addIngredient:function(){return{type:"ADD_INGREDIENT"}}})(A),q=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.products;return i.a.createElement("div",null,i.a.createElement("h2",null,"Stored Ingredients:"),i.a.createElement("li",null,T.a.keys(e).map(function(t){return i.a.createElement("p",null,t+", available formats: "+e[t].map(function(e){return e.qty+" "+e.unit+". "})," ")})))}}]),t}(i.a.Component),G=Object(y.b)(function(e){return{products:e.pantry.pantry}})(q),U=(n(40),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).handleRemoveMeal=function(e){n.props.removeCell(e)},n.handleToggleEdit=function(e,t){return n.props.toggleField(e,t)},n.handleUpdateInput=function(e,t){var a=e.target.value,i=e.target.name;n.props.updateCell(t,i,a)},n.handleEnterKey=function(e,t){var a=e.keyCode||e.which,i="editable"+n.titleCase(e.target.name);13===a&&n.props.toggleField(t,i)},n.handleBlur=function(e,t){var a="editable"+n.titleCase(e.target.name);n.props.toggleField(t,a)},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"titleCase",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this,t=this.props.cellID;return i.a.createElement("div",{className:"cell"},this.props.week[t]&&!0===this.props.week[t].editable?i.a.createElement("div",null,i.a.createElement("span",{className:"cross",onClick:function(){return e.handleRemoveMeal(t)}},"x"),!1===this.props.week[t].editableDish?i.a.createElement("h2",{onClick:function(){return e.handleToggleEdit(t,"editableDish")}},"Dish: "+this.props.week[t].dish):i.a.createElement("div",null,i.a.createElement("input",{type:"text",name:"dish",onKeyDown:function(n){return e.handleEnterKey(n,t)},onChange:function(n){return e.handleUpdateInput(n,t)},onBlur:function(n){return e.handleBlur(n,t)},list:"dishes",value:this.props.week.dish,autoFocus:!0}),i.a.createElement("datalist",{id:"dishes"},T.a.keys(this.props.recipes).map(function(e){return i.a.createElement("option",{value:e})}))),!1===this.props.week[t].editableServings?i.a.createElement("h2",{onClick:function(){return e.handleToggleEdit(t,"editableServings")}},"Servings:"+this.props.week[t].servings):i.a.createElement("input",{name:"servings",type:"number",value:this.props.week[t].servings,min:"1",step:"1",onKeyDown:function(n){return e.handleEnterKey(n,t)},onChange:function(n){return e.handleUpdateInput(n,t)},onFocus:function(e){return e.target.select()},onBlur:function(n){return e.handleBlur(n,t)},autoFocus:!0})):i.a.createElement("p",{className:"plus",onClick:function(){return e.props.addCell(t)}},"+"))}}]),t}(i.a.Component)),F=Object(y.b)(function(e){return{recipes:w(e),week:B(e)}},{addCell:function(e){return{type:"ADD_CELL",payload:{cellID:e}}},removeCell:function(e){return{type:"REMOVE_CELL",payload:{cellID:e}}},toggleField:function(e,t){return{type:"TOGGLE_FIELD",payload:{cellID:e,field:t}}},updateCell:function(e,t,n){return{type:"UPDATE_CELL",payload:{cellID:e,field:t,value:n}}}})(U),P=function(){return i.a.createElement("div",null)},x=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).mealsByDay=function(e){return T.a.keys(n.props.week).filter(function(t){return t.startsWith(e)})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],n=T.a.max(t.map(function(t){return e.mealsByDay(t).length}));return i.a.createElement("div",null,i.a.createElement("h1",null,t.map(function(t){return e.mealsByDay(t)})),i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",{className:"top-bar"},t.map(function(e){return i.a.createElement("td",{className:"weekly-view-header"},i.a.createElement("h2",null,e))}))),i.a.createElement("tbody",null,i.a.createElement("tr",{className:"weekly-view-cell"},t.map(function(e){return i.a.createElement("td",null,i.a.createElement(F,{cellID:e+"-1",key:e+"-1"}))})),T.a.range(2,T.a.max([2,n+2])+1).map(function(n){return i.a.createElement("tr",{className:"weekly-view-cell"},t.map(function(t){return e.mealsByDay(t)&&e.mealsByDay(t).length+1>=n?i.a.createElement("td",null,i.a.createElement(F,{cellID:t+"-"+n,key:t+"-"+n})):i.a.createElement("td",null,i.a.createElement(P,null))}))}))))}}]),t}(i.a.Component),V=Object(y.b)(function(e){return{week:B(e)}})(x);function M(){return i.a.createElement("button",null,"cook")}var X=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),i.a.createElement(M,null),i.a.createElement("h2",{className:"App-title"},"Weekly shopping")),i.a.createElement("div",{className:"recipes-panel"},i.a.createElement(S,null),i.a.createElement(_,null),i.a.createElement(K,null)),i.a.createElement("div",{className:"ingredientsDB"},i.a.createElement(V,null),i.a.createElement(G,null)))},W=n(23),H=n(10),J=n(19),z=n(24),Q=n.n(z),Y=n(25),Z=n.n(Y),$={"rice pudding":{title:"rice pudding",servings:2,editableTitle:!1,editableServings:!1,ingredients:{1:{name:"rice",qty:50,unit:"gr",editable:null},2:{name:"unsalted butter",qty:25,unit:"gr",editable:null},3:{name:"whole milk",qty:500,unit:"ml",editable:null},4:{name:"caster sugar",qty:25,unit:"gr",editable:null}}},"mash potatoes":{title:"mash potatoes",editableTitle:!1,editableServings:!1,servings:5,ingredients:{1:{name:"potatoes",qty:1,unit:"kg",editable:null},2:{name:"whole milk",qty:250,unit:"ml",editable:null},3:{name:"butter",qty:50,unit:"gr",editable:null},4:{name:"salt",qty:2,unit:"gr",editable:null}}}},ee={selectedRecipe:{}},te=n(18),ne={recipe:{}},ae={pantry:{salt:[{qty:1,unit:"kg"},{qty:500,unit:"gr"}],rice:[{qty:1,unit:"kg"}],"unsalted butter":[{qty:250,unit:"gr"}],"salted butter":[{qty:250,unit:"gr"}],"whole milk":[{qty:1,unit:"litre"}],"semiskimmed milk":[{qty:1,unit:"litre"}],"caster sugar":[{qty:1,unit:"kg"}],potatoes:[{qty:2,unit:"kg"},{qty:3,unit:"kg"},{qty:5,unit:"kg"}]}},ie={};var re=Object(H.b)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RECIPE":var n=t.payload,a=n.recipe,i=n.content;return Object(u.a)({},e,e.recipes,Object(o.a)({},a,i));default:return e}},selections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_RECIPE":var n=t.payload.recipe;return Object(u.a)({},e,{selectedRecipe:{recipe:n}});default:return e}},editedRecipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_RECIPE":return{recipe:t.payload.recipe};case"TOGGLE_TITLE":return Object(te.a)(t.payload),Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{editableTitle:!e.recipe.editableTitle})});case"TOGGLE_SERVINGS":return Object(te.a)(t.payload),Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{editableServings:!e.recipe.editableServings})});case"UPDATE_TITLE":var n=t.payload.title;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{title:n})});case"UPDATE_SERVINGS":var a=t.payload.servings;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{servings:a})});case"TOGGLE_TABLE":var i=t.payload,r=i.id,l=i.className;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{ingredients:Object(u.a)({},e.recipe.ingredients,Object(o.a)({},r,Object(u.a)({},e.recipe.ingredients[r],{editable:l})))})});case"UPDATE_TABLE":var s=t.payload,c=s.id,d=s.className,p=s.value;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{ingredients:Object(u.a)({},e.recipe.ingredients,Object(o.a)({},c,Object(u.a)({},e.recipe.ingredients[c],Object(o.a)({},d,p))))})});case"RESET_EDIT":return Object(u.a)({},e,{recipe:{}});case"ADD_INGREDIENT":var h=T.a.keys(e.recipe.ingredients).length;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{ingredients:Object(u.a)({},e.recipe.ingredients,Object(o.a)({},h+1,{name:"new ingredient",qty:1,unit:"kg"}))})});default:return e}},pantry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":var n=t.payload;return{product:n.product,formats:n.formats};default:return e}},week:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CELL":var n=t.payload.cellID;return Object(u.a)({},e,Object(o.a)({},n,{editable:!0,editableDish:!1,dish:"",editableServings:!1,servings:1}));case"REMOVE_CELL":var a=t.payload.cellID,i=a.split("-")[0],r=T.a.keys(e).filter(function(e){return e.split("-")[0]===i}).filter(function(e){return parseInt(e.split("-")[1])>parseInt(a.split("-")[1])}),l=Object.assign({},e);return delete l[a],T.a.keys(l).map(function(e){r.includes(e)&&(l[function(e){var t=e.split("-");return t[0]+"-"+(t[1]-1)}(e)]=l[e],delete l[e])}),Object(u.a)({},l);case"TOGGLE_FIELD":var s=t.payload,c=s.cellID,d=s.field;return Object(u.a)({},e,Object(o.a)({},c,Object(u.a)({},e[c],Object(o.a)({},d,!e[c][d]))));case"UPDATE_CELL":var p=t.payload,h=p.cellID,b=p.field,g=p.value;return Object(u.a)({},e,Object(o.a)({},h,Object(u.a)({},e[h],Object(o.a)({},b,g))));default:return e}}}),le={key:"root",storage:Q.a,stateReconciler:Z.a,blacklist:["week"]},se=Object(J.a)(le,re),ce=Object(H.c)(se,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),oe=Object(J.b)(ce);l.a.render(i.a.createElement(y.a,{store:ce},i.a.createElement(W.a,{loading:null,persistor:oe},i.a.createElement(X,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5e198dae.chunk.js.map