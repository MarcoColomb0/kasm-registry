(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return a(5790)}])},5790:function(e,l,a){"use strict";a.r(l),a.d(l,{__N_SSG:function(){return p},default:function(){return m}});var t=a(5893),r=a(9008),s=a.n(r),i=a(7294),n=a(3162),o=a(8813),c=a(3157),u=a(1163),d=JSON.parse('{"wZ":[{"friendly_name":"Brave VPN","image_src":"icon.png","description":"Modified Kasm Brave image based on Ubuntu Focal VPN features","name":"ghcr.io/marcocolomb0/kasm-brave-vpn:latest","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://ghcr.io","categories":["Desktop","Productivity","Development"],"require_gpu":false,"enabled":true,"image_type":"Container","run_config":{"environment":{"TAILSCALE_KEY":"","SHOW_VPN_STATUS":"1","SHOW_IP_STATUS":"1"},"sysctls":{"net.ipv4.conf.all.src_valid_mark":1},"dns":["9.9.9.9","1.1.1.1"]},"exec_config":{"first_launch":{"user":"root","privileged":true,"cmd":"bash -c \'/usr/bin/desktop_ready && /dockerstartup/start_vpn.sh\'"}},"architecture":["amd64","arm64"],"compatibility":["1.15.x"],"uncompressed_size_mb":3960,"launch_config":{"file_mapping":{"destination":"/dockerstartup/launch_selections.json"},"launch_form":[{"key":"vpn_service","label":"VPN Service","value":null,"allow_saving":true,"required":true,"placeholder":null,"help":"Select the desired VPN service to use","input_type":"select","options":[{"value":"openvpn","label":"OpenVPN"},{"value":"tailscale","label":"TailScale"},{"value":"wireguard","label":"WireGuard"}],"validator_regex":null,"validator_regex_description":null,"display_if":null},{"key":"tailscale_key","label":"Tailscale Auth Key","value":null,"allow_saving":true,"placeholder":"tskey-xxx","required":true,"help":"The Auth key for tailscale","input_type":"password","options":[],"validator_regex":"^tskey-[\\\\w\\\\-]{0,100}","validator_regex_description":"Alphanumeric, including underscores and hyphens, Max 100 characters. Must start with tskey-","display_if":[{"key":"vpn_service","value_regex":"tailscale"}]},{"key":"openvpn_config","label":"OpenVPN Conf","value":null,"allow_saving":true,"placeholder":"OpenVPN configuration details","required":true,"help":"The OpenVPN Connection Configuration","input_type":"passwordtextarea","options":[],"validator_regex":null,"validator_regex_description":null,"display_if":[{"key":"vpn_service","value_regex":"openvpn"}]},{"key":"openvpn_username","label":"OpenVPN Username","value":null,"allow_saving":true,"placeholder":"username","required":true,"help":"The OpenVPN Service Username","input_type":"text","options":[],"validator_regex":null,"validator_regex_description":null,"display_if":[{"key":"vpn_service","value_regex":"openvpn"}]},{"key":"openvpn_password","label":"OpenVPN Password","value":null,"allow_saving":true,"placeholder":"password","required":true,"help":"The OpenVPN Service Password","input_type":"password","options":[],"validator_regex":null,"validator_regex_description":null,"display_if":[[{"key":"vpn_service","value_regex":"openvpn"}]]},{"key":"wireguard_config","label":"WireGuard Conf","value":null,"allow_saving":true,"placeholder":null,"required":true,"help":"The WireGuard Connection Configuration","input_type":"passwordtextarea","options":[],"validator_regex":null,"validator_regex_description":null,"display_if":[{"key":"vpn_service","value_regex":"wireguard"}]},{"key":"tailscale_exitnode","label":"Tailscale Exit Node","value":null,"allow_saving":true,"placeholder":"Device Name or IP address","required":true,"help":"The Tailscale\'s exit node","input_type":"text","options":[],"validator_regex":null,"validator_regex_description":null,"display_if":[{"key":"vpn_service","value_regex":"tailscale"}]}]},"sha":"6ef5e2b0359324e3f7660da6b947ec434a4f2796"}]}'),p=!0;function m(e){let{workspace:l}=e,r=(0,i.useRef)(null),p=(0,i.useRef)(null),m=(0,i.useRef)(null),[f,v]=(0,i.useState)(null),[x,g]=(0,i.useState)(null),[b,_]=(0,i.useState)(null),[y,w]=(0,i.useState)("png"),[N,j]=(0,i.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[C,S]=(0,i.useState)(k);(0,u.useRouter)(),(0,i.useEffect)(()=>{if(null===l)m.current.value="",r.current.value="",p.current.value="",v(null),g(null),_(null),S(k);else if(l&&l[0]){let e=d.wZ.find(e=>e.name===atob(l[0]));if(delete e.sha,m.current.value=e.description,r.current.value=e.name,p.current.value=e.friendly_name,e.categories){let a=[];e.categories.map(e=>a.push({label:e,value:e})),v(a)}if(e.architecture){let t=[];e.architecture.map(e=>t.push({label:e,value:e})),g(t)}j("../../icons/"+e.image_src),S({...C,...e})}},[l]);let P={control:(e,l)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,l){let{data:a}=l;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(C&&C.friendly_name){let e={...C};e.image_src=A(e.friendly_name)+"."+y,S(e)}},[y]);let O=e=>{let l={...C};l.categories=e.map(e=>e.value),S(l);let a=[];l.categories.map(e=>a.push({label:e,value:e})),v(a)},T=e=>{let l={...C};l.architecture=e.map(e=>e.value),S(l);let a=[];l.architecture.map(e=>a.push({label:e,value:e})),g(a)};function A(e){var l=e.toString().toLowerCase();return(l=(l=(l=l.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let V=()=>{var e=a(5733);let l=new e,t=l.folder(C.friendly_name);if(t.file("workspace.json",JSON.stringify(C,null,2)),b)t.file(C.image_src,b.file);else if(N){let r=fetch(N).then(e=>e.blob());t.file(C.image_src,r)}l.generateAsync({type:"blob"}).then(function(e){(0,n.saveAs)(e,A(C.friendly_name)+".zip")})},I=e=>{let l={...C};l[e.target.name]=e.target.value,"icon"===e.target.name&&(delete l.icon,_({value:e.target.value,file:e.target.files[0]}),w(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),j(null)),l.friendly_name&&(l.image_src=A(l.friendly_name)+"."+y),S(l)};return(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:"Kasm Workspaces"}),(0,t.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,t.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,t.jsx)("input",{type:"file",name:"icon",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,t.jsx)("input",{ref:p,name:"friendly_name",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,t.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:O,styles:P,value:f}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,t.jsx)("input",{ref:m,name:"description",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,t.jsx)("input",{ref:r,name:"name",onChange:I,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,t.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,t.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:T,styles:P,value:x}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,t.jsx)(h,{workspace:C,icon:b,inlineImage:N}),(0,t.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...C},null,2)}),(0,t.jsx)("button",{onClick:V,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:l,icon:a,inlineImage:r}=e,[s,n]=(0,i.useState)(!1),o=null;if(a){let c=new Blob([a.file]);o=URL.createObjectURL(c),l.image_src=o}return(0,t.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,t.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(s?" -translate-y-1/2":""),children:[(0,t.jsxs)("div",{onClick:()=>n(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,t.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:l.image_src,onError(e){null!==r&&(e.target.src=r)},alt:l.friendly_name}),(0,t.jsxs)("div",{className:"flex-col pl-28",children:[(0,t.jsx)("div",{className:"font-bold",children:l.friendly_name||"Friendly Name"}),(0,t.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["MarcoColomb0"," ",(0,t.jsx)("span",{children:void 0})]}),(0,t.jsx)("div",{className:" h-8"})]}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[l.architecture&&l.architecture.map((e,l)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+l)),l.categories.map((e,l)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+l))]}),!1]}),(0,t.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,t.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,t.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,t.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,t.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,t.jsx)("div",{className:"font-bold",children:l.friendly_name})," ",l.description]}),(0,t.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,t.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,t.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);