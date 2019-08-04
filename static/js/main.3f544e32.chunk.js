(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,n){e.exports=n(47)},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),l=n.n(r),s=(n(33),n(21)),c=n.n(s),o=(n(34),n(2)),u=n(1),d=n(3),p=n(4),h=n(6),b=n(5),m=n(7),g=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"new-recipe"},i.a.createElement("form",null,i.a.createElement("h2",{className:"top-bar"},this.props.topBar),this.props.editableTitle?i.a.createElement("input",{className:"rename-list",onChange:function(t){return e.props.onUpdateTitle(t.target.value)},onKeyDown:this.props.onTitleEnterKey,onBlur:this.props.onTitleBlur,value:this.props.title,onFocus:function(e){return e.target.select()},autoFocus:!0,required:!0}):i.a.createElement("div",null,i.a.createElement("h2",null,i.a.createElement("span",{onClick:this.props.onTitleClick,className:"recipe-title"},""===this.props.title?"<Recipe-Name>":this.props.title))),i.a.createElement("div",{className:"servings"},this.props.editableServings?i.a.createElement("input",{onChange:function(t){return e.props.onUpdateServings(t.target.value)},onKeyDown:this.props.onServingsEnterKey,onBlur:this.props.onServingsBlur,value:this.props.servings,type:"number",min:"1",step:"1",onFocus:function(e){return e.target.select()},autoFocus:!0}):i.a.createElement("h2",{className:"servings",onClick:this.props.onServingsClick}," Serves: .... ",this.props.servings))))}}]),t}(i.a.Component),f=["kg","gr","ml","litre","tsp","tbsp","cup","lbs","oz","units"],v=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(e){var t=this,n=this.props.ingredients;return i.a.createElement("div",null,i.a.createElement("div",null," ",i.a.createElement("input",{className:"button",type:"submit",value:"Add ingredient",onClick:this.props.onAddIngredient})),i.a.createElement("table",{className:"new-ingredients-table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ingredient"),i.a.createElement("th",null,"Qty."),i.a.createElement("th",null,"Unit")),Object.keys(n).map(function(e){return i.a.createElement("tr",{key:"ingredient-row-"+e},"name"===n[e].editable?i.a.createElement("td",null,i.a.createElement("input",{className:"name",id:e,value:n[e].name,onChange:function(e){return t.props.onTableChange(e)},onKeyDown:t.props.onTableEnterKey,onBlur:t.props.onTableBlur,onFocus:function(e){return e.target.select()},autoFocus:!0})):i.a.createElement("td",{id:e,className:"name",onClick:t.props.onTableClick},n[e].name),i.a.createElement("td",null,"qty"===n[e].editable?i.a.createElement("input",{className:"qty",id:e,type:"number",min:"0",value:n[e].qty,onChange:function(e){return t.props.onTableChange(e)},onKeyDown:t.props.onTableEnterKey,onBlur:t.props.onTableBlur,onFocus:function(e){return e.target.select()},autoFocus:!0,required:!0}):i.a.createElement("span",{id:e,className:"qty",onClick:t.props.onTableClick},n[e].qty)),i.a.createElement("td",null,"unit"===n[e].editable?i.a.createElement("select",{type:"list",name:"unit",className:"unit",id:e,onChange:t.props.onTableChange,onBlur:t.props.onTableBlur},f.map(function(e){return i.a.createElement("option",{key:"unit-list-item-"+e},e)})):i.a.createElement("span",{id:e,className:"unit",onClick:t.props.onTableClick},n[e].unit)))}))))}}]),t}(i.a.Component),E=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",null,i.a.createElement(v,{onAddIngredient:this.props.onAddIngredient,ingredients:this.props.ingredients,onTableChange:this.props.onTableChange,onTableClick:this.props.onTableClick,onTableEnterKey:this.props.onTableEnterKey,onTableBlur:this.props.onTableBlur}))}}]),t}(i.a.Component),y=n(9),T=n(8),O=n.n(T),j=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).handleSubmit=function(e){var t=n.props.title,a=n.props.servings,i=n.props.ingredients,r=O.a.entries(i),l=O.a.values(i);""===t?alert("Please supply a recipe name"):l.filter(function(e){return"new ingredient"===e.name}).length>0?alert("Please supply an ingredient name"):0===r.length&&i.constructor===Object?alert("Please supply ingredients"):(n.props.addRecipe(t,{title:t,editableTitle:!1,servings:a,editableServings:!1,ingredients:i}),n.props.onSubmitReset())},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{className:"button",onClick:this.handleSubmit},"submit"))}}]),t}(i.a.Component),k=Object(y.b)(null,{addRecipe:function(e,t){return{type:"ADD_RECIPE",payload:{recipe:e,content:t}}}})(j),C=n(26),S={date:function(e){var t=e.split("/"),n=Object(C.a)(t,3),a=n[0],i=n[1],r=n[2];return"".concat(r,"-").concat(a,"-").concat(i)},uppercase:function(e){return e.toUpperCase()},integer:function(e){return parseInt(e)},float:function(e){return parseFloat(e)}},w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).handleTitleClick=function(){return n.setState({editableTitle:!n.state.editableTitle})},n.handleTitleEnterKey=function(e){13===(e.keyCode||e.which)&&n.setState({editableTitle:!n.state.editableTitle})},n.handleTitleBlur=function(){return n.state.editableTitle?n.setState({editableTitle:!n.state.editableTitle}):null},n.updateTitle=function(e){n.setState({title:e})},n.handleServingsClick=function(){n.setState({editableServings:!n.state.editableServings})},n.handleServingsEnterKey=function(e){13===(e.keyCode||e.which)&&n.setState({editableServings:!n.state.editableServings})},n.handleServingsBlur=function(){return n.state.editableServings?n.setState({editableServings:!n.state.editableServings}):null},n.updateServings=function(e){n.setState({servings:S.integer(e)})},n.handleAddIngredient=function(){var e=++n.nextid;n.setState({ingredients:Object(u.a)({},n.state.ingredients,Object(o.a)({},e,{name:"new ingredient",qty:1,unit:"kg",editable:null}))})},n.handleTableClick=function(e){var t=n.state.ingredients,a=e.target,i=a.className,r=parseInt(a.id);n.setState({ingredients:Object(u.a)({},t,Object(o.a)({},r,Object(u.a)({},t[r],{editable:i})))})},n.handleTableEnterKey=function(e){var t=n.state.ingredients,a=e.target,i=parseInt(a.id);13===(e.keyCode||e.which)&&n.setState({ingredients:Object(u.a)({},t,Object(o.a)({},i,Object(u.a)({},t[i],{editable:null})))})},n.handleTableBlur=function(e){var t=n.state.ingredients,a=e.target,i=parseInt(a.id);n.setState({ingredients:Object(u.a)({},t,Object(o.a)({},i,Object(u.a)({},t[i],{editable:null})))})},n.handleTableChange=function(e){var t=e.target,a=t.value,i=parseInt(t.id),r=n.state.ingredients,l=t.className;switch(l){case"qty":n.setState({ingredients:Object(u.a)({},r,Object(o.a)({},i,Object(u.a)({},r[i],Object(o.a)({},l,S.float(a)))))});break;default:n.setState({ingredients:Object(u.a)({},r,Object(o.a)({},i,Object(u.a)({},r[i],Object(o.a)({},l,a))))})}},n.handleSubmitReset=function(){return n.setState(Object(u.a)({},n.defaultState))},n.nextid=0,n.defaultState={editableTitle:!1,title:"",editableServings:!1,servings:1,ingredients:{},list:[]},n.state=n.defaultState,n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"new-recipe"},i.a.createElement(g,{topBar:"Add new recipe",editableTitle:this.state.editableTitle,editableServings:this.state.editableServings,title:this.state.title,onTitleClick:this.handleTitleClick,onTitleEnterKey:this.handleTitleEnterKey,onTitleBlur:this.handleTitleBlur,onUpdateTitle:this.updateTitle,servings:this.state.servings,onServingsClick:this.handleServingsClick,onServingsEnterKey:this.handleServingsEnterKey,onServingsBlur:this.handleServingsBlur,onUpdateServings:this.updateServings}),i.a.createElement(E,{onAddIngredient:this.handleAddIngredient,ingredients:this.state.ingredients,onTableChange:this.handleTableChange,onTableClick:this.handleTableClick,onTableEnterKey:this.handleTableEnterKey,onTableBlur:this.handleTableBlur}),i.a.createElement("div",null,i.a.createElement(k,{title:this.state.title,servings:this.state.servings,ingredients:this.state.ingredients,onSubmitReset:this.handleSubmitReset})))}}]),t}(i.a.Component),D=(n(40),"pick a recipe to edit"),I=function(e){return e.recipes},N=function(e){var t=I(e),n=function(e){return e.selections.selectedRecipe.recipe?e.selections.selectedRecipe.recipe:D}(e);return O.a.values(t).filter(function(e){return e.title===n})},R=function(e){return e.selections.selectedRecipe.recipe&&e.recipes?O.a.values(N(e))[0]:{}},A=function(e){return e.pantry},_=function(e){return e.week},B=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(e){setTimeout(function(){n.props.selectRecipe(e),n.props.editRecipe(n.props.selected)},100)},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.recipes;return i.a.createElement("div",{className:"recipe-list"},i.a.createElement("h2",{className:"title"},"The recipes"),i.a.createElement("div",{className:"recipe-list-block"},O.a.keys(t).map(function(t){return i.a.createElement("button",{className:"recipe-list-item",key:"recipe-"+t,onClick:function(){return e.handleClick(t)}},t)})))}}]),t}(i.a.Component);var L=Object(y.b)(function(e){return{recipes:e.recipes,selected:R(e)}},{editRecipe:function(e){return{type:"EDIT_RECIPE",payload:{recipe:e}}},selectRecipe:function(e){return{type:"SELECT_RECIPE",payload:{recipe:e}}}})(B),q=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).handleGetIngredients=function(e){return e||{}},n.handleGetServings=function(e){return e||0},n.handleGetTitle=function(e){return e||""===e?e:D},n.handleTitleClick=function(e){return e.target.innerHTML!==D?n.props.toggleTitle(e.target.innerHTML):null},n.handleUpdateTitle=function(e){n.props.updateTitle(e)},n.handleTitleEnterKey=function(e){13===(e.keyCode||e.which)&&n.props.toggleTitle()},n.handleTitleBlur=function(){return n.props.edited.editableTitle?n.props.toggleTitle():null},n.handleServingsEnterKey=function(e){13===(e.keyCode||e.which)&&n.props.toggleServings()},n.handleServingsClick=function(e){return 0!==e?n.props.toggleServings():null},n.handleUpdateServings=function(e){return n.props.updateServings(S.integer(e))},n.handleServingsBlur=function(){return n.props.edited.editableServings?n.props.toggleServings():null},n.handleTableClick=function(e){n.props.edited.ingredients;var t=e.target,a=t.className,i=parseInt(t.id);n.props.toggleTable(i,a)},n.handleTableEnterKey=function(e){n.props.edited.ingredients;var t=e.target,a=parseInt(t.id);13===(e.keyCode||e.which)&&n.props.toggleTable(a,null)},n.handleTableBlur=function(e){n.props.edited.ingredients;var t=e.target,a=parseInt(t.id);n.props.toggleTable(a,null)},n.handleTableChange=function(e){var t=e.target,a=t.value,i=parseInt(t.id),r=(n.props.edited.ingredients,t.className);switch(r){case"qty":n.props.updateTable(i,r,S.float(a));break;default:n.props.updateTable(i,r,a)}},n.handleAddIngredient=function(){return n.props.addIngredient()},n.handleResetEdit=function(){return n.props.resetEdit()},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(e){var t=this;return i.a.createElement("div",{className:"edit-recipe"},i.a.createElement(g,{topBar:"Edit recipe",title:this.handleGetTitle(this.props.edited.title),editableTitle:this.props.edited.editableTitle,editableServings:this.props.edited.editableServings,servings:this.handleGetServings(this.props.edited.servings),onTitleClick:this.handleTitleClick,onTitleEnterKey:this.handleTitleEnterKey,onTitleBlur:this.handleTitleBlur,onUpdateTitle:this.handleUpdateTitle,onServingsClick:function(){return t.handleServingsClick(t.props.edited.servings)},onUpdateServings:this.handleUpdateServings,onServingsEnterKey:this.handleServingsEnterKey,onServingsBlur:this.handleServingsBlur}),i.a.createElement(U,{key:"ingredients-"+this.props.edited.title,ingredients:this.handleGetIngredients(this.props.edited.ingredients),onTableClick:this.handleTableClick,onTableEnterKey:this.handleTableEnterKey,onTableBlur:this.handleTableBlur,onTableChange:this.handleTableChange,onAddIngredient:this.handleAddIngredient}),i.a.createElement(k,{title:this.props.edited.title,servings:this.props.edited.servings,ingredients:this.props.edited.ingredients,onSubmitReset:this.handleResetEdit}),i.a.createElement("button",{className:"button",onClick:this.handleResetEdit},"Cancel"))}}]),t}(i.a.Component),U=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(e){return i.a.createElement("div",null,i.a.createElement(v,{onAddIngredient:this.props.onAddIngredient,ingredients:this.props.ingredients,onTableChange:this.props.onTableChange,onTableClick:this.props.onTableClick,onTableEnterKey:this.props.onTableEnterKey,onTableBlur:this.props.onTableBlur}))}}]),t}(i.a.Component),K=Object(y.b)(function(e){var t;return{edited:(t=e).editedRecipe.recipe?t.editedRecipe.recipe:{}}},{toggleTitle:function(e){return{type:"TOGGLE_TITLE",payload:{title:e}}},toggleServings:function(e,t){return{type:"TOGGLE_SERVINGS",payload:{title:e,servings:t}}},updateTitle:function(e){return{type:"UPDATE_TITLE",payload:{title:e}}},updateServings:function(e){return{type:"UPDATE_SERVINGS",payload:{servings:e}}},toggleTable:function(e,t){return{type:"TOGGLE_TABLE",payload:{id:e,className:t}}},updateTable:function(e,t,n){return{type:"UPDATE_TABLE",payload:{id:e,className:t,value:n}}},resetEdit:function(){return{type:"RESET_EDIT"}},addIngredient:function(){return{type:"ADD_INGREDIENT"}}})(q),P=(i.a.Component,function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(b.a)(t).call(this))).selectedElement=i.a.createRef(),e}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.open;return i.a.cloneElement(t,{ref:this.selectedElement,onClick:n})}}]),t}(i.a.Component));P.displayName="Select";var G=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).styles={wrapper:{position:"relative",display:"inline-block",zIndex:"98",color:"#555",cursor:"help"},tooltip:{position:"absolute",zIndex:"99",minWidth:"200px",maxWidth:"420px",background:"#000",bottom:"100%",left:"50%",marginBottom:"10px",padding:"5px",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)",OTransform:"translateX(-50%)",transform:"translateX(-50%)"},content:{background:"#000",color:"#fff",display:"inline",fontSize:".8em",padding:".3em 1em"},arrow:{position:"absolute",width:"0",height:"0",bottom:"-5px",left:"50%",marginLeft:"-5px",borderLeft:"solid transparent 5px",borderRight:"solid transparent 5px",borderTop:"solid #000 5px"},gap:{position:"absolute",width:"100%",height:"20px",bottom:"-20px"}},n.mergeStyles=function(e){Object.keys(n.styles).forEach(function(t){Object.assign(n.styles[t],e[t])})},n.show=function(){return n.setVisibility(!0)},n.hide=function(){return n.setVisibility(!1)},n.setVisibility=function(e){n.setState(Object.assign({},n.state,{visible:e}))},n.handleTouch=function(){n.show(),n.assignOutsideTouchHandler()},n.assignOutsideTouchHandler=function(){document.addEventListener("touchstart",function e(t){for(var a=t.target,i=l.a.findDOMNode(n.refs.instance);a.parentNode;){if(a===i)return;a=a.parentNode}a===document&&(n.hide(),document.removeEventListener("touchstart",e))})},n.state={visible:!1},e.styles&&n.mergeStyles(e.styles),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=this.state,n=this.styles,a=this.show,r=this.hide,l=this.handleTouch;return i.a.createElement("div",{onMouseEnter:a,onMouseLeave:r,onTouchStart:l,ref:"wrapper",style:n.wrapper},e.children,t.visible&&i.a.createElement("div",{ref:"tooltip",style:n.tooltip},i.a.createElement("div",{ref:"content",style:n.content},e.content),i.a.createElement("div",{ref:"arrow",style:n.arrow}),i.a.createElement("div",{ref:"gap",style:n.gap})))}}]),t}(i.a.Component),x=(n(41),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).handleToggleEdit=function(e){n.setState(Object(o.a)({},e,!n.state.editable))},n.handleUpdateInput=function(e,t){var a=t.target.value;n.setState(Object(o.a)({},e,a))},n.handleOnEnter=function(e){var t=n.props.product;13===(e.keyCode||e.which)&&(t!==n.state.productTitle&&n.props.updateProductTitle(t,n.state.productTitle),n.setState({editableProductTitle:!n.state.editableProductTitle}))},n.handleSubmit=function(){var e=n.props.product,t=n.state.qty,a=n.state.unit;n.props.addFormat(e,t,a),n.setState({editable:!n.state.editable})},n.handleRemoveProduct=function(){return window.confirm("this will remove the product from the inventory. go a head?")?n.props.removeProduct(n.props.product):null},n.defaultState={productTitle:n.props.product,qty:0,unit:"kg",editable:!1,editableProductTitle:!1},n.state=n.defaultState,n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.product,n=this.props.fmts;return i.a.createElement("div",null,i.a.createElement("p",{className:"remove-button",onClick:this.handleRemoveProduct},"X"),this.state.editableProductTitle?i.a.createElement("input",{value:this.state.productTitle,onChange:function(t){return e.handleUpdateInput("productTitle",t)},onKeyDown:function(t){return e.handleOnEnter(t)},autoFocus:!0}):i.a.createElement("h2",{onClick:function(){return e.handleToggleEdit("editableProductTitle")}},t),i.a.createElement("p",null,"Available formats:"),n.map(function(e){return i.a.createElement("div",{className:"format-div"},i.a.createElement("li",null,e.qty+" "+e.unit),i.a.createElement("p",null,"x"))}),this.state.editable?i.a.createElement("div",null,i.a.createElement("input",{type:"number",min:1,className:"qty",value:this.state.qty,onChange:function(t){return e.handleUpdateInput("qty",t)}}),i.a.createElement("select",{value:this.state.unit,onChange:function(t){return e.handleUpdateInput("unit",t)}},f.map(function(e){return i.a.createElement("option",{key:"unit-list-item-"+e},e)})),i.a.createElement("button",{className:"button",onClick:this.handleSubmit},"submit")):i.a.createElement("h3",{onClick:function(){return e.handleToggleEdit("editable")}},"Add Format"))}}]),t}(i.a.Component)),F=Object(y.b)(function(e){return{products:A(e)}},{addFormat:function(e,t,n){return{type:"ADD_FORMAT",payload:{product:e,qty:t,unit:n}}},removeProduct:function(e){return{type:"REMOVE_PRODUCT",payload:{product:e}}},updateProductTitle:function(e,t){return{type:"UPDATE_PRODUCT_TITLE",payload:{product:e,newTitle:t}}}})(x),M=(n(42),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).handleEdit=function(){n.setState({editable:!n.state.editable})},n.handleUpdate=function(e,t){var a=t.target.value;n.setState(Object(o.a)({},e,a))},n.handleToggle=function(){n.setState({editableTitle:!n.editableTitle})},n.handleTitleEnterKey=function(e){13===(e.keyCode||e.which)&&n.setState({editableTitle:!n.state.editableTitle})},n.handleSubmit=function(){n.props.addProduct(n.state.title,[{qty:n.state.qty,unit:n.state.unit}]),n.setState(n.defaultState)},n.defaultState={editable:!1,editableTitle:!0,title:"",qty:0,unit:"kg"},n.state=n.defaultState,n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.state.editable?i.a.createElement("div",{className:"add-product-box"},i.a.createElement("h2",null,"adding a product"),this.state.editableTitle?i.a.createElement("div",null,i.a.createElement("label",null,"product name"),i.a.createElement("input",{value:this.state.title,onChange:function(t){return e.handleUpdate("title",t)},onKeyDown:function(t){return e.handleTitleEnterKey(t)}})):i.a.createElement("div",null,i.a.createElement("h2",{onClick:this.handleToggle},this.state.title)),i.a.createElement("div",null,i.a.createElement("label",null,"format:"),i.a.createElement("input",{type:"number",min:0,onChange:function(t){return e.handleUpdate("qty",t)}}),i.a.createElement("select",{onChange:function(t){return e.handleUpdate("unit",t)}},f.map(function(e){return i.a.createElement("option",null,e)}))),i.a.createElement("button",{className:"button",onClick:this.handleSubmit},"Submit")):i.a.createElement("h2",{onClick:this.handleEdit},"add a product"))}}]),t}(i.a.Component)),V=Object(y.b)(null,{addProduct:function(e,t){return{type:"ADD_PRODUCT",payload:{product:e,formats:t}}}})(M),X=(n(43),function(e){function t(e){var n;Object(d.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).handleHover=function(e){n.setState(Object(o.a)({},e,!n.state[e]))};var a=O.a.keys(n.props.products);return n.initialState=O.a.zipObject(a,a.map(function(e){return!1})),n.state=n.initialState,n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.products,t={wrapper:{flexAlign:"row",display:"inline-block",cursor:"pointer"},content:{backgroundColor:"white",color:"#000",fontSize:"1.2rem",lineHeight:"150%"},tooltip:{backgroundColor:"white",borderRadius:"10px",bottom:"40%",left:"100%",opacity:"0.7"},arrow:{borderLeft:"solid white 5px"}};return i.a.createElement("div",{className:"ingredients-head"},i.a.createElement("h2",{className:"ingredients-list-title"},"Stored Ingredients:"),i.a.createElement(V,null),O.a.keys(e).map(function(n){return i.a.createElement(G,{content:i.a.createElement("div",null,i.a.createElement(F,{product:n,fmts:e[n]})),styles:t},"  ",i.a.createElement("p",{className:"product",id:n},n))}))}}]),t}(i.a.Component)),z=Object(y.b)(function(e){return{products:A(e)}})(X),H=(n(44),function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).handleRemoveMeal=function(e){n.props.removeCell(e)},n.handleToggleEdit=function(e,t){return n.props.toggleField(e,t)},n.handleUpdateInput=function(e,t){var a=e.target.value,i=e.target.name;n.props.updateCell(t,i,a)},n.handleEnterKey=function(e,t){var a=e.keyCode||e.which,i="editable"+n.titleCase(e.target.name);13===a&&n.props.toggleField(t,i)},n.handleBlur=function(e,t){var a="editable"+n.titleCase(e.target.name);n.props.toggleField(t,a)},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"titleCase",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this,t=this.props.cellID;return i.a.createElement("div",{className:"cell"},this.props.week[t]&&!0===this.props.week[t].editable?i.a.createElement("div",null,i.a.createElement("span",{className:"cross",onClick:function(){return e.handleRemoveMeal(t)}},"x"),!1===this.props.week[t].editableDish?i.a.createElement("h2",{onClick:function(){return e.handleToggleEdit(t,"editableDish")}},"Dish: "+this.props.week[t].dish):i.a.createElement("div",null,i.a.createElement("input",{type:"text",name:"dish",onKeyDown:function(n){return e.handleEnterKey(n,t)},onChange:function(n){return e.handleUpdateInput(n,t)},onBlur:function(n){return e.handleBlur(n,t)},list:"dishes",value:this.props.week.dish,autoFocus:!0}),i.a.createElement("datalist",{id:"dishes"},O.a.keys(this.props.recipes).map(function(e){return i.a.createElement("option",{value:e})}))),!1===this.props.week[t].editableServings?i.a.createElement("h2",{onClick:function(){return e.handleToggleEdit(t,"editableServings")}},"Servings:"+this.props.week[t].servings):i.a.createElement("input",{name:"servings",type:"number",value:this.props.week[t].servings,min:"1",step:"1",onKeyDown:function(n){return e.handleEnterKey(n,t)},onChange:function(n){return e.handleUpdateInput(n,t)},onFocus:function(e){return e.target.select()},onBlur:function(n){return e.handleBlur(n,t)},autoFocus:!0})):i.a.createElement("p",{className:"plus",onClick:function(){return e.props.addCell(t)}},"+"))}}]),t}(i.a.Component)),W=Object(y.b)(function(e){return{recipes:I(e),week:_(e)}},{addCell:function(e){return{type:"ADD_CELL",payload:{cellID:e}}},removeCell:function(e){return{type:"REMOVE_CELL",payload:{cellID:e}}},toggleField:function(e,t){return{type:"TOGGLE_FIELD",payload:{cellID:e,field:t}}},updateCell:function(e,t,n){return{type:"UPDATE_CELL",payload:{cellID:e,field:t,value:n}}}})(H),J=function(){return i.a.createElement("div",null)},Q=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).mealsByDay=function(e){return O.a.keys(n.props.week).filter(function(t){return t.startsWith(e)})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],n=O.a.max(t.map(function(t){return e.mealsByDay(t).length}));return i.a.createElement("div",null,i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",{className:"top-bar"},t.map(function(e){return i.a.createElement("td",{className:"weekly-view-header"},i.a.createElement("h2",null,e))}))),i.a.createElement("tbody",null,i.a.createElement("tr",{className:"weekly-view-cell"},t.map(function(e){return i.a.createElement("td",null,i.a.createElement(W,{cellID:e+"-1",key:e+"-1"}))})),O.a.range(2,O.a.max([2,n+2])+1).map(function(n){return i.a.createElement("tr",{className:"weekly-view-cell"},t.map(function(t){return e.mealsByDay(t)&&e.mealsByDay(t).length+1>=n?i.a.createElement("td",null,i.a.createElement(W,{cellID:t+"-"+n,key:t+"-"+n})):i.a.createElement("td",null,i.a.createElement(J,null))}))}))))}}]),t}(i.a.Component),Y=Object(y.b)(function(e){return{week:_(e)}})(Q);function Z(){return i.a.createElement("button",null,"cook")}var $=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),i.a.createElement(Z,null),i.a.createElement("h2",{className:"App-title"},"Weekly shopping")),i.a.createElement("div",{className:"controls"},i.a.createElement("div",null,i.a.createElement("div",{className:"recipes-panel"},i.a.createElement(w,null),i.a.createElement(L,null),i.a.createElement(K,null)),i.a.createElement("div",{className:"ingredientsDB"},i.a.createElement(Y,null))),i.a.createElement(z,null)))},ee=n(23),te=n(10),ne=n(19),ae=n(24),ie=n.n(ae),re=n(25),le=n.n(re),se={"rice pudding":{title:"rice pudding",servings:2,editableTitle:!1,editableServings:!1,ingredients:{1:{name:"rice",qty:50,unit:"gr",editable:null},2:{name:"unsalted butter",qty:25,unit:"gr",editable:null},3:{name:"whole milk",qty:500,unit:"ml",editable:null},4:{name:"caster sugar",qty:25,unit:"gr",editable:null}}},"mash potatoes":{title:"mash potatoes",editableTitle:!1,editableServings:!1,servings:5,ingredients:{1:{name:"potatoes",qty:1,unit:"kg",editable:null},2:{name:"whole milk",qty:250,unit:"ml",editable:null},3:{name:"butter",qty:50,unit:"gr",editable:null},4:{name:"salt",qty:2,unit:"gr",editable:null}}}},ce={selectedRecipe:{}},oe=n(18),ue={recipe:{}},de=n(27),pe={salt:[{qty:1,unit:"kg"},{qty:500,unit:"gr"}],rice:[{qty:1,unit:"kg"}],"unsalted butter":[{qty:250,unit:"gr"}],"salted butter":[{qty:250,unit:"gr"}],"whole milk":[{qty:1,unit:"litre"}],"semiskimmed milk":[{qty:1,unit:"litre"}],"caster sugar":[{qty:1,unit:"kg"}],potatoes:[{qty:2,unit:"kg"},{qty:3,unit:"kg"},{qty:5,unit:"kg"}]},he={};var be=Object(te.b)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RECIPE":var n=t.payload,a=n.recipe,i=n.content;return Object(u.a)({},e,e.recipes,Object(o.a)({},a,i));default:return e}},selections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_RECIPE":var n=t.payload.recipe;return Object(u.a)({},e,{selectedRecipe:{recipe:n}});default:return e}},editedRecipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_RECIPE":return{recipe:t.payload.recipe};case"TOGGLE_TITLE":return Object(oe.a)(t.payload),Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{editableTitle:!e.recipe.editableTitle})});case"TOGGLE_SERVINGS":return Object(oe.a)(t.payload),Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{editableServings:!e.recipe.editableServings})});case"UPDATE_TITLE":var n=t.payload.title;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{title:n})});case"UPDATE_SERVINGS":var a=t.payload.servings;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{servings:a})});case"TOGGLE_TABLE":var i=t.payload,r=i.id,l=i.className;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{ingredients:Object(u.a)({},e.recipe.ingredients,Object(o.a)({},r,Object(u.a)({},e.recipe.ingredients[r],{editable:l})))})});case"UPDATE_TABLE":var s=t.payload,c=s.id,d=s.className,p=s.value;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{ingredients:Object(u.a)({},e.recipe.ingredients,Object(o.a)({},c,Object(u.a)({},e.recipe.ingredients[c],Object(o.a)({},d,p))))})});case"RESET_EDIT":return Object(u.a)({},e,{recipe:{}});case"ADD_INGREDIENT":var h=O.a.keys(e.recipe.ingredients).length;return Object(u.a)({},e,{recipe:Object(u.a)({},e.recipe,{ingredients:Object(u.a)({},e.recipe.ingredients,Object(o.a)({},h+1,{name:"new ingredient",qty:1,unit:"kg"}))})});default:return e}},pantry:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":var n=t.payload,a=n.product,i=n.formats;return Object(u.a)({},e,Object(o.a)({},a,i));case"REMOVE_PRODUCT":var r=t.payload.product,l=Object.assign({},e);return delete l[r],l;case"UPDATE_PRODUCT_TITLE":var s=t.payload,c=s.product;return e[s.newTitle]=e[c],delete e[c],Object(u.a)({},e);case"ADD_FORMAT":var d=t.payload,p=d.product,h=d.qty,b=d.unit;return Object(u.a)({},e,Object(o.a)({},p,[].concat(Object(de.a)(e[p]),[{qty:h,unit:b}])));case"REMOVE_FORMAT":var m=t.playload,g=m.product,f=m.id,v=Object.assign({},e);return delete v[g][f],Object(u.a)({},v);default:return e}},week:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CELL":var n=t.payload.cellID;return Object(u.a)({},e,Object(o.a)({},n,{editable:!0,editableDish:!1,dish:"",editableServings:!1,servings:1}));case"REMOVE_CELL":var a=t.payload.cellID,i=a.split("-")[0],r=O.a.keys(e).filter(function(e){return e.split("-")[0]===i}).filter(function(e){return parseInt(e.split("-")[1])>parseInt(a.split("-")[1])}),l=Object.assign({},e);return delete l[a],O.a.keys(l).map(function(e){r.includes(e)&&(l[function(e){var t=e.split("-");return t[0]+"-"+(t[1]-1)}(e)]=l[e],delete l[e])}),Object(u.a)({},l);case"TOGGLE_FIELD":var s=t.payload,c=s.cellID,d=s.field;return Object(u.a)({},e,Object(o.a)({},c,Object(u.a)({},e[c],Object(o.a)({},d,!e[c][d]))));case"UPDATE_CELL":var p=t.payload,h=p.cellID,b=p.field,m=p.value;return Object(u.a)({},e,Object(o.a)({},h,Object(u.a)({},e[h],Object(o.a)({},b,m))));default:return e}}}),me={key:"root",storage:ie.a,stateReconciler:le.a,blacklist:["week","pantry"]},ge=Object(ne.a)(me,be),fe=Object(te.c)(ge,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ve=Object(ne.b)(fe);l.a.render(i.a.createElement(y.a,{store:fe},i.a.createElement(ee.a,{loading:null,persistor:ve},i.a.createElement($,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3f544e32.chunk.js.map