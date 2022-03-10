import e from"styled-components";import{getStyles as t,setHeight as m}from"../../../helpers/theme/index.js";var s={Primary:e.button`
  ${({theme:e})=>t(e.button.primary)}
  ${({theme:e,size:t="medium"})=>m({theme:e,size:t})}
`,Secondary:e.button`
  ${({theme:e})=>t(e.button.secondary)}
  ${({theme:e,size:t="medium"})=>m({theme:e,size:t})}
`};export{s as default};
