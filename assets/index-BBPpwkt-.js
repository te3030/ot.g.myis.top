import{r as u,j as i,B as h}from"./index-BTPtrLe0.js";import{T as g}from"./ToolContent-B-nid3mx.js";import{T}from"./ToolTextInput-Bc_nsI5n.js";import{T as v}from"./ToolTextResult-Cu8SJZrg.js";import{C as x}from"./CheckboxWithDesc-D-q11iyA.js";import{T as c}from"./TextFieldWithDesc-SVR9_NqK.js";import"./TextField-Bdda93Fb.js";import"./ContentPaste-_e5GDi0_.js";import"./InputFooter-DagiH6yw.js";import"./ResultFooter-CPoF3FjD.js";import"./FormControlLabel-C7-H30AT.js";import"./Checkbox-DnCXDX7B.js";import"./SwitchBase-Dz9OH6mQ.js";const y=(l,s)=>{const a=l.split(`
`).map(e=>e.trim());let o=`<?xml version="1.0" encoding="UTF-8" ?>
<root>
`,m=[];const r=a.filter(e=>e&&!e.startsWith(s.comment)&&(!s.skipEmptyLines||e.trim()!==""));return r.length===0?`<?xml version="1.0" encoding="UTF-8" ?>
<root></root>`:(s.useHeaders&&(m=d(r[0],s),r.shift()),r.forEach((e,n)=>{const t=d(e,s);o+=`  <row id="${n}">
`,m.forEach((p,f)=>{o+=`    <${p}>${t[f]||""}</${p}>
`}),o+=`  </row>
`}),o+="</root>",o)},d=(l,s)=>{const a=[];let o="",m=!1;for(let r=0;r<l.length;r++){const e=l[r];e===s.quote?m=!m:e===s.delimiter&&!m?(a.push(o.trim()),o=""):o+=e}return a.push(o.trim()),a},C={delimiter:",",quote:'"',comment:"#",useHeaders:!0,skipEmptyLines:!0},j=[{title:"Basic CSV to XML",description:"Convert a simple CSV file into an XML format.",sampleText:`name,age,city
John,30,New York
Alice,25,London`,sampleResult:`<root>
  <row>
    <name>John</name>
    <age>30</age>
    <city>New York</city>
  </row>
  <row>
    <name>Alice</name>
    <age>25</age>
    <city>London</city>
  </row>
</root>`,sampleOptions:{...C,useHeaders:!0}}];function B({title:l}){const[s,a]=u.useState(""),[o,m]=u.useState(""),r=(e,n)=>{if(n)try{const t=y(n,e);m(t)}catch(t){m(`Error: ${t instanceof Error?t.message:"Invalid CSV format"}`)}};return i.jsx(g,{title:l,input:s,setInput:a,initialValues:C,compute:r,exampleCards:j,inputComponent:i.jsx(T,{title:"Input CSV",value:s,onChange:a}),resultComponent:i.jsx(v,{title:"Output XML",value:o,extension:"xml"}),getGroups:({values:e,updateField:n})=>[{title:"Input CSV Format",component:i.jsxs(h,{children:[i.jsx(c,{description:"Column Separator",value:e.delimiter,onOwnChange:t=>n("delimiter",t)}),i.jsx(c,{description:"Field Quote",onOwnChange:t=>n("quote",t),value:e.quote}),i.jsx(c,{description:"Comment Symbol",value:e.comment,onOwnChange:t=>n("comment",t)})]})},{title:"Conversion Options",component:i.jsxs(h,{children:[i.jsx(x,{checked:e.useHeaders,onChange:t=>n("useHeaders",t),title:"Use Headers",description:"First row is treated as column headers"}),i.jsx(x,{checked:e.skipEmptyLines,onChange:t=>n("skipEmptyLines",t),title:"Skip Empty Lines",description:"Don't process empty lines in the CSV"})]})}]})}export{B as default};
