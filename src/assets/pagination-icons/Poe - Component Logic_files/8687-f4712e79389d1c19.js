"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8687],{99747:function(e,n,l){l.r(n);let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ChatSubscriptionPaywallContextWrapper_bot",selections:[{alias:null,args:null,kind:"ScalarField",name:"botId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"limitedAccessType",storageKey:null},{alias:null,args:null,concreteType:"MessageLimit",kind:"LinkedField",name:"messageLimit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"canSend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldShowSubscriptionRationale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dailyLimit",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"MessageLimit",kind:"LinkedField",name:"messageUsageLimit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"shouldPromptSubscription",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldShowLimitInfoBanner",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"WebSubscriptionAnnouncementModalOpener_bot"},{args:null,kind:"FragmentSpread",name:"WebSpeedUpsellModalOpener_bot"},{args:null,kind:"FragmentSpread",name:"subscriptionHelpers_useBotLogData_bot"}],type:"Bot",abstractKey:null};i.hash="bcc8730ac19995cc0e69307b9e023c3b",n.default=i},35363:function(e,n,l){l.r(n);let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ChatSubscriptionPaywallContextWrapper_usePaywallAndLog_bot",selections:[{args:null,kind:"FragmentSpread",name:"subscriptionHelpers_useBotLogData_bot"}],type:"Bot",abstractKey:null};i.hash="e86dcb63108845be4baba940f82cfaa4",n.default=i},47252:function(e,n,l){l.r(n);let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ChatSubscriptionPaywallContextWrapper_viewer",selections:[{alias:null,args:null,concreteType:"PoeUser",kind:"LinkedField",name:"poeUser",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Subscription",kind:"LinkedField",name:"subscription",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForWebSubscriptions",storageKey:null},{alias:"useNewLimitSystem",args:[{kind:"Literal",name:"gateName",value:"poe_use_new_limit_system_frontend"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_use_new_limit_system_frontend")'},{args:null,kind:"FragmentSpread",name:"WebSubscriptionAnnouncementModalOpener_viewer"},{args:null,kind:"FragmentSpread",name:"MwebAndroidSubscriptionAnnouncementModalOpener_viewer"},{args:null,kind:"FragmentSpread",name:"WebSpeedUpsellModalOpener_viewer"},{args:null,kind:"FragmentSpread",name:"WebSubscriptionSuccessMessage_useWebSubscriptionSuccessMessage_viewer"}],type:"Viewer",abstractKey:null};i.hash="44c42a437c47bea73ae3d0dc98a9d0be",n.default=i},95851:function(e,n,l){var i,a,s;l.r(n);let t={fragment:{argumentDefinitions:i=[{defaultValue:null,kind:"LocalArgument",name:"dismissibleType"}],kind:"Fragment",metadata:null,name:"MwebAndroidSubscriptionAnnouncementModalOpener_dismissDismissible_Mutation",selections:[{alias:null,args:a=[{kind:"Variable",name:"dismissibleType",variableName:"dismissibleType"}],concreteType:"DismissDismissible",kind:"LinkedField",name:"dismissDismissible",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[s={alias:null,args:null,kind:"ScalarField",name:"shouldSeeAndroidSubscriptionAnnouncement",storageKey:null}],storageKey:null}],storageKey:null}],type:"MutationRoot",abstractKey:null},kind:"Request",operation:{argumentDefinitions:i,kind:"Operation",name:"MwebAndroidSubscriptionAnnouncementModalOpener_dismissDismissible_Mutation",selections:[{alias:null,args:a,concreteType:"DismissDismissible",kind:"LinkedField",name:"dismissDismissible",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[s,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"d783c7564e85e14dac870e5ca01c325a98a237375f2e4f332f2a3b9bcf082833",metadata:{},name:"MwebAndroidSubscriptionAnnouncementModalOpener_dismissDismissible_Mutation",operationKind:"mutation",text:null}};t.hash="8a0b27f1765a46901355248281b1eedb",n.default=t},89116:function(e,n,l){l.r(n);let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"MwebAndroidSubscriptionAnnouncementModalOpener_viewer",selections:[{alias:null,args:null,kind:"ScalarField",name:"shouldSeeAndroidSubscriptionAnnouncement",storageKey:null}],type:"Viewer",abstractKey:null};i.hash="773789ae4f752092e075c3efd8b5dd4c",n.default=i},66856:function(e,n,l){l.r(n);let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"WebSpeedUpsellModalOpener_bot",selections:[{alias:null,args:null,kind:"ScalarField",name:"botId",storageKey:null}],type:"Bot",abstractKey:null};i.hash="7ade3cf445794d7a100c58c2d220fbc4",n.default=i},68222:function(e,n,l){var i,a,s;l.r(n);let t={fragment:{argumentDefinitions:i=[{defaultValue:null,kind:"LocalArgument",name:"dismissibleType"}],kind:"Fragment",metadata:null,name:"WebSpeedUpsellModalOpener_dismissDismissible_Mutation",selections:[{alias:null,args:a=[{kind:"Variable",name:"dismissibleType",variableName:"dismissibleType"}],concreteType:"DismissDismissible",kind:"LinkedField",name:"dismissDismissible",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[s={alias:null,args:null,kind:"ScalarField",name:"shouldSeeResponseSpeedUpsell",storageKey:null}],storageKey:null}],storageKey:null}],type:"MutationRoot",abstractKey:null},kind:"Request",operation:{argumentDefinitions:i,kind:"Operation",name:"WebSpeedUpsellModalOpener_dismissDismissible_Mutation",selections:[{alias:null,args:a,concreteType:"DismissDismissible",kind:"LinkedField",name:"dismissDismissible",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[s,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"97465bf0683cf08e943fd041b1d8c29bbd87090b96af6094ddeea6b0ccb20230",metadata:{},name:"WebSpeedUpsellModalOpener_dismissDismissible_Mutation",operationKind:"mutation",text:null}};t.hash="2f0221b1e1202952d33cc565324d9d37",n.default=t},22234:function(e,n,l){l.r(n);let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"WebSpeedUpsellModalOpener_viewer",selections:[{alias:null,args:null,concreteType:"Subscription",kind:"LinkedField",name:"subscription",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSeeResponseSpeedUpsell",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSeeWebSubscriptionAnnouncement",storageKey:null}],type:"Viewer",abstractKey:null};i.hash="8ff847cd3db3d848f7361368c197c090",n.default=i},60867:function(e,n,l){l.r(n);let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"WebSubscriptionAnnouncementModalOpener_bot",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isSystemBot",storageKey:null}],type:"Bot",abstractKey:null};i.hash="96e05b9ab8f921f956986a29ebe861f3",n.default=i},60943:function(e,n,l){var i,a,s;l.r(n);let t={fragment:{argumentDefinitions:i=[{defaultValue:null,kind:"LocalArgument",name:"dismissibleType"}],kind:"Fragment",metadata:null,name:"WebSubscriptionAnnouncementModalOpener_dismissDismissible_Mutation",selections:[{alias:null,args:a=[{kind:"Variable",name:"dismissibleType",variableName:"dismissibleType"}],concreteType:"DismissDismissible",kind:"LinkedField",name:"dismissDismissible",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[s={alias:null,args:null,kind:"ScalarField",name:"shouldSeeWebSubscriptionAnnouncement",storageKey:null}],storageKey:null}],storageKey:null}],type:"MutationRoot",abstractKey:null},kind:"Request",operation:{argumentDefinitions:i,kind:"Operation",name:"WebSubscriptionAnnouncementModalOpener_dismissDismissible_Mutation",selections:[{alias:null,args:a,concreteType:"DismissDismissible",kind:"LinkedField",name:"dismissDismissible",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[s,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"4a5844dcd7e79cd6b2c0bcadebbbf593e85a167b1cab854d5527e6be12c8b468",metadata:{},name:"WebSubscriptionAnnouncementModalOpener_dismissDismissible_Mutation",operationKind:"mutation",text:null}};t.hash="5ef690b09af14848d43e2c77b76aeaad",n.default=t},99343:function(e,n,l){l.r(n);let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"WebSubscriptionAnnouncementModalOpener_viewer",selections:[{alias:null,args:null,concreteType:"Subscription",kind:"LinkedField",name:"subscription",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldSeeWebSubscriptionAnnouncement",storageKey:null},{alias:null,args:null,concreteType:"PoeUser",kind:"LinkedField",name:"poeUser",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"creationTime",storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};i.hash="2f5b19f143369a7a724a2c3712f4c1b4",n.default=i},49169:function(e,n,l){l.d(n,{ZP:function(){return chat_ChatSubscriptionPaywallContextWrapper},rk:function(){return usePayWall},Sz:function(){return usePaywallAndLog}});var i=l(85893),a=l(67294),s=l(22578);l(44311);var t=l(41019),r=l(71289),o=l(28775);let importAnnouncement=()=>l.e(7130).then(l.bind(l,97130));var subscription_MwebAndroidSubscriptionAnnouncementModalOpener=e=>{let{viewer:n}=e,u=(0,s.useFragment)(l(89116),n),[d]=(0,s.useMutation)(l(95851)),m=(0,a.useContext)(r.cq),c=!m.isEmbed&&u.shouldSeeAndroidSubscriptionAnnouncement,[p,b]=(0,a.useState)(c),g=(0,a.useCallback)(()=>{b(!1),d({variables:{dismissibleType:o.Z.android_subs_announcement},onCompleted:()=>{b(!1)}})},[b,d]),y=(0,a.useMemo)(()=>({closeAnnouncement:g}),[g]);return(0,i.jsx)(t.Z,{isOpen:p,onRequestClose:g,body:importAnnouncement,bodyProps:y,modalHeight:200,useMinHeight:!0})},u=l(81534);let d=[3002,3004],WebSpeedUpsellModalOpener_importAnnouncement=()=>l.e(5953).then(l.bind(l,25953));var subscription_WebSpeedUpsellModalOpener=e=>{var n;let{bot:u,viewer:m}=e,c=(0,s.useFragment)(l(66856),u),p=(0,s.useFragment)(l(22234),m),[b]=(0,s.useMutation)(l(68222)),g=(0,a.useContext)(r.cq),y=!g.isEmbed&&d.includes(c.botId)&&p.shouldSeeResponseSpeedUpsell&&!p.shouldSeeWebSubscriptionAnnouncement&&!(null===(n=p.subscription)||void 0===n?void 0:n.isActive),[S,k]=(0,a.useState)(y),f=(0,a.useCallback)(()=>{k(!1),b({variables:{dismissibleType:o.Z.response_speed_upsell},onCompleted:()=>{k(!1)}})},[k,b]),F=(0,a.useMemo)(()=>({viewer:p,closeAnnouncement:f}),[p,f]);return(0,i.jsx)(t.Z,{isOpen:S,onRequestClose:f,body:WebSpeedUpsellModalOpener_importAnnouncement,bodyProps:F,useMinHeight:!0})},m=l(41143),c=l.n(m);let WebSubscriptionAnnouncementModalOpener_importAnnouncement=()=>l.e(2334).then(l.bind(l,92334));var subscription_WebSubscriptionAnnouncementModalOpener=e=>{var n,u;let{bot:d,viewer:m}=e,p=(0,s.useFragment)(l(60867),d),b=(0,s.useFragment)(l(99343),m),[g]=(0,s.useMutation)(l(60943)),y=null===(n=b.poeUser)||void 0===n?void 0:n.creationTime;c()(!!y,"Viewer creation time cannot be empty!");let S=y/1e3,k=Date.now()-S>=864e5,f=(0,a.useContext)(r.cq),F=!f.isEmbed&&b.shouldSeeWebSubscriptionAnnouncement&&!(null===(u=b.subscription)||void 0===u?void 0:u.isActive)&&p.isSystemBot&&k,[_,h]=(0,a.useState)(F),M=(0,a.useCallback)(()=>{h(!1),g({variables:{dismissibleType:o.Z.web_subs_announcement},onCompleted:()=>{h(!1)}})},[h,g]),w=(0,a.useMemo)(()=>({closeAnnouncement:M}),[M]);return(0,i.jsx)(t.Z,{isOpen:_,onRequestClose:M,body:WebSubscriptionAnnouncementModalOpener_importAnnouncement,bodyProps:w,modalHeight:200,useMinHeight:!0})},p=l(75408),b=l(18974),g=l(77614),y=l(96676),S=l(47128);let k={shouldPromptSubscription:!1,shouldShowRateLimitedBanner:!1,setPaywallVisible:()=>{}},usePayWall=()=>{let{shouldPromptSubscription:e,shouldShowRateLimitedBanner:n,setPaywallVisible:l}=a.useContext(f),i=(0,a.useCallback)(()=>{l(!1)},[l]),s=(0,a.useCallback)(()=>{l(!0)},[l]);return{shouldPromptSubscription:e,shouldShowRateLimitedBanner:n,openPaywall:s,closePaywall:i}},usePaywallAndLog=e=>{let{bot:n}=e,i=(0,s.useFragment)(l(35363),n),{openPaywall:t,shouldPromptSubscription:r}=usePayWall(),{logClick:o}=(0,u.B)(i),d=(0,a.useCallback)(()=>{o(g.Z.limited_access_bot),t()},[o,t]);return{shouldPromptSubscription:r,openPaywallAndLog:d}},importPaywallModal=()=>Promise.all([l.e(7846),l.e(576),l.e(4247)]).then(l.bind(l,26261)),f=a.createContext(k);var chat_ChatSubscriptionPaywallContextWrapper=e=>{var n;let{bot:t,viewer:r,children:o}=e,u=(0,s.useFragment)(l(99747),t),d=(0,s.useFragment)(l(47252),r);(0,p.fN)();let[m,c]=(0,a.useState)(!1),g=(0,a.useCallback)(()=>{c(!1)},[c]),F=null===(n=d.subscription)||void 0===n?void 0:n.isActive,_=0===u.messageLimit.dailyLimit&&u.limitedAccessType===b.Z.no_limit&&!d.isEligibleForWebSubscriptions,h=d.useNewLimitSystem?u.messageUsageLimit.shouldPromptSubscription:!F&&!u.messageLimit.canSend&&!_,M=d.useNewLimitSystem?u.messageUsageLimit.shouldShowLimitInfoBanner:u.messageLimit.shouldShowSubscriptionRationale,w=(0,a.useMemo)(()=>({shouldPromptSubscription:h,shouldShowRateLimitedBanner:M,setPaywallVisible:c}),[h,M,c]),K=!!d.poeUser;(0,S.Z)({viewer:d});let A=(0,a.useMemo)(()=>({botId:u.botId}),[u]);return(0,i.jsxs)(f.Provider,{value:K?w:k,children:[o,K&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Suspense,{fallback:null,children:!F&&m&&(0,i.jsx)(y.Z,{body:importPaywallModal,bodyProps:A,onRequestClose:g,bot:u})}),(0,i.jsx)(subscription_WebSubscriptionAnnouncementModalOpener,{bot:u,viewer:d}),(0,i.jsx)(subscription_MwebAndroidSubscriptionAnnouncementModalOpener,{viewer:d}),(0,i.jsx)(subscription_WebSpeedUpsellModalOpener,{bot:u,viewer:d})]})]})}},63236:function(e,n,l){var i=l(67294);let a=i.createContext(null);n.Z=a}}]);