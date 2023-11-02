(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2846],{23196:function(e,_,t){"use strict";t.r(_);let o={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"WebSubscriptionSuccessMessage_useWebSubscriptionSuccessMessage_viewer",selections:[{alias:null,args:null,concreteType:"Subscription",kind:"LinkedField",name:"subscription",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isActive",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"expiresTime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"willCancelAtPeriodEnd",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"purchaseRevocationReason",storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};o.hash="4beab1045f7d12cc42b85e5c3dae772d",_.default=o},77358:function(e,_,t){"use strict";t.d(_,{O:function(){return o}}),t(85893),t(22120);let o={year:"numeric",month:"short",day:"numeric"}},47128:function(e,_,t){"use strict";t.d(_,{Z:function(){return WebSubscriptionSuccessMessage}});var o,r=t(85893),a=t(41664),s=t.n(a),n=t(11163),i=t(67294),l=t(22120),c=t(22578);t(44311);var m=t(46857),Z=t(55625),p=t(90912),d=t.n(p);(o||(o={})).multiple_free_trials="multiple_free_trials";var u=o,b=t(77358),f=t(2197),WebSubscriptionSuccessMessage=e=>{let{viewer:_}=e,{t:o}=(0,l.$G)(),a=(0,c.useFragment)(t(23196),_),p=(0,f.ZP)(),h=(0,n.useRouter)();(0,i.useEffect)(()=>{var e;if(null===(e=h.query)||void 0===e?void 0:e.subscribed){let e=a.subscription;if(null==e?void 0:e.isActive){(0,m.hP)("sng_subscribe");let{expiresTime:_,willCancelAtPeriodEnd:t}=e,a=_?t?o("Your plan expires on {{val, datetime}}",{val:new Date(_/1e3),formatParams:{val:b.O}}):o("Your plan automatically renews on {{val, datetime}}",{val:new Date(_/1e3),formatParams:{val:b.O}}):null,s=(0,r.jsxs)(r.Fragment,{children:[o("Successfully subscribed to Poe.")," ",_&&(0,r.jsx)(r.Fragment,{children:a})]});p({content:s,type:f.pC.success}),(0,Z.CS)(h,"subscribed")}else if((null==e?void 0:e.purchaseRevocationReason)==u.multiple_free_trials){let e=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("div",{className:d().ToastTitle,children:o("Your subscription payment method failed.")}),(0,r.jsx)("div",{className:d().ToastText,children:(0,r.jsxs)(l.cC,{i18nKey:"freeTrialRevokedError",shouldUnescape:!0,children:["Your payment method has already been used to access a subscription free trial. You can resubscribe at any time by going to"," ",(0,r.jsx)(s(),{href:(0,Z.qm)("/settings"),target:"_blank",className:d().ToastLink,children:"poe.com/settings"}),"."]})})]})});p({content:e,type:f.pC.error,duration:15e3}),(0,Z.CS)(h,"subscribed")}}},[])}},39885:function(e,_,t){"use strict";t.d(_,{E:function(){return valueOfActionType}});var o=t(6488);let r=new Map([[o.Z.user_message_create,1],[o.Z.bot_message_create,2],[o.Z.clear_chat_context,3],[o.Z.stale_chat_message_break,4],[o.Z.bot_message_cancel,5],[o.Z.start_new_chat,6],[o.Z.open_old_chat,7],[o.Z.delete_chat,8],[o.Z.update_chat_title,9],[o.Z.upvote,10],[o.Z.downvote,20],[o.Z.downvote_inaccurate,21],[o.Z.downvote_unhelpful,22],[o.Z.downvote_offensive,23],[o.Z.downvote_other,29],[o.Z.delete_message,30],[o.Z.share_message,31],[o.Z.copy_message,32],[o.Z.copy_code,33],[o.Z.switch_bot,34],[o.Z.continue_chat_from_external_share,35],[o.Z.continue_chat_from_post,36],[o.Z.start_voice_record,40],[o.Z.finish_voice_record,41],[o.Z.cancel_voice_record,42],[o.Z.send_voice_record_directly,43],[o.Z.use_voice_record,44],[o.Z.attach_file_in_chat_input,50],[o.Z.see_all_chat_history_button_click,60],[o.Z.clear_chat_history_page_filter,61],[o.Z.add_new_chat_button_click,62],[o.Z.new_chat_open,63],[o.Z.share_button_click,70],[o.Z.save_image,80],[o.Z.copy_image,81],[o.Z.copy_image_link,82],[o.Z.open_image_in_new_tab,83],[o.Z.delete_all_messages,99],[o.Z.signup,100],[o.Z.login,101],[o.Z.logout,102],[o.Z.mark_account_for_deletion,103],[o.Z.email_unsubscribe,104],[o.Z.logout_purge,105],[o.Z.login_failure,106],[o.Z.add_confirmed_email,110],[o.Z.remove_email,111],[o.Z.set_primary_email,112],[o.Z.add_primary_phone_number,113],[o.Z.update_primary_phone_number,114],[o.Z.signup_email_verify,115],[o.Z.signup_phone_number_verify,116],[o.Z.set_handle,117],[o.Z.set_bio,118],[o.Z.set_profile_photo,119],[o.Z.set_name,120],[o.Z.multiplayer_nux_completed,121],[o.Z.remove_phone_number,122],[o.Z.rating_pre_prompt_seen,123],[o.Z.rating_pre_prompt_dismissed,124],[o.Z.rating_pre_prompt_accepted,125],[o.Z.take_screenshot,126],[o.Z.create_invite,200],[o.Z.redeem_invite,201],[o.Z.post_create,300],[o.Z.post_delete,301],[o.Z.user_follow,302],[o.Z.user_unfollow,303],[o.Z.add_post_to_exploration_stream,400],[o.Z.remove_post_from_exploration_stream,401],[o.Z.add_post_to_top_content_stream,402],[o.Z.remove_post_from_top_content_stream,403],[o.Z.add_post_to_exploration_stream_hk,404],[o.Z.remove_post_from_exploration_stream_hk,405],[o.Z.add_post_to_top_content_stream_hk,406],[o.Z.remove_post_from_top_content_stream_hk,407],[o.Z.add_post_to_exploration_stream_tw,408],[o.Z.remove_post_from_exploration_stream_tw,409],[o.Z.add_post_to_top_content_stream_tw,410],[o.Z.remove_post_from_top_content_stream_tw,411],[o.Z.add_post_to_exploration_stream_cn,412],[o.Z.remove_post_from_exploration_stream_cn,413],[o.Z.add_post_to_top_content_stream_cn,414],[o.Z.remove_post_from_top_content_stream_cn,415],[o.Z.add_post_to_exploration_stream_ar,416],[o.Z.remove_post_from_exploration_stream_ar,417],[o.Z.add_post_to_top_content_stream_ar,418],[o.Z.remove_post_from_top_content_stream_ar,419],[o.Z.add_post_to_bot_stream,420],[o.Z.remove_post_from_bot_stream,421],[o.Z.add_bot_to_exploration_stream,422],[o.Z.remove_bot_from_exploration_stream,423],[o.Z.ban_user,450],[o.Z.unban_user,451],[o.Z.bot_follow,500],[o.Z.bot_unfollow,501],[o.Z.bot_create,502],[o.Z.bot_delete,503],[o.Z.bot_edit,504],[o.Z.bot_share,505],[o.Z.bot_remove_from_sidebar,506],[o.Z.bot_undo_remove_from_sidebar,507],[o.Z.set_default_bot,508],[o.Z.edit_theme_preference,600],[o.Z.edit_language_preference,601],[o.Z.revshare_enroll,700],[o.Z.revshare_disable,701]]);function valueOfActionType(e){return r.get(o.Z[e])}o.Z.user_message_create,o.Z.bot_message_create,o.Z.clear_chat_context,o.Z.stale_chat_message_break,o.Z.bot_message_cancel,o.Z.start_new_chat,o.Z.open_old_chat,o.Z.delete_chat,o.Z.update_chat_title,o.Z.upvote,o.Z.downvote,o.Z.downvote_inaccurate,o.Z.downvote_unhelpful,o.Z.downvote_offensive,o.Z.downvote_other,o.Z.delete_message,o.Z.share_message,o.Z.copy_message,o.Z.copy_code,o.Z.switch_bot,o.Z.continue_chat_from_external_share,o.Z.continue_chat_from_post,o.Z.start_voice_record,o.Z.finish_voice_record,o.Z.cancel_voice_record,o.Z.send_voice_record_directly,o.Z.use_voice_record,o.Z.attach_file_in_chat_input,o.Z.see_all_chat_history_button_click,o.Z.clear_chat_history_page_filter,o.Z.add_new_chat_button_click,o.Z.new_chat_open,o.Z.share_button_click,o.Z.save_image,o.Z.copy_image,o.Z.copy_image_link,o.Z.open_image_in_new_tab,o.Z.delete_all_messages,o.Z.signup,o.Z.login,o.Z.logout,o.Z.mark_account_for_deletion,o.Z.email_unsubscribe,o.Z.logout_purge,o.Z.login_failure,o.Z.add_confirmed_email,o.Z.remove_email,o.Z.set_primary_email,o.Z.add_primary_phone_number,o.Z.update_primary_phone_number,o.Z.signup_email_verify,o.Z.signup_phone_number_verify,o.Z.set_handle,o.Z.set_bio,o.Z.set_profile_photo,o.Z.set_name,o.Z.multiplayer_nux_completed,o.Z.remove_phone_number,o.Z.rating_pre_prompt_seen,o.Z.rating_pre_prompt_dismissed,o.Z.rating_pre_prompt_accepted,o.Z.take_screenshot,o.Z.create_invite,o.Z.redeem_invite,o.Z.post_create,o.Z.post_delete,o.Z.user_follow,o.Z.user_unfollow,o.Z.add_post_to_exploration_stream,o.Z.remove_post_from_exploration_stream,o.Z.add_post_to_top_content_stream,o.Z.remove_post_from_top_content_stream,o.Z.add_post_to_exploration_stream_hk,o.Z.remove_post_from_exploration_stream_hk,o.Z.add_post_to_top_content_stream_hk,o.Z.remove_post_from_top_content_stream_hk,o.Z.add_post_to_exploration_stream_tw,o.Z.remove_post_from_exploration_stream_tw,o.Z.add_post_to_top_content_stream_tw,o.Z.remove_post_from_top_content_stream_tw,o.Z.add_post_to_exploration_stream_cn,o.Z.remove_post_from_exploration_stream_cn,o.Z.add_post_to_top_content_stream_cn,o.Z.remove_post_from_top_content_stream_cn,o.Z.add_post_to_exploration_stream_ar,o.Z.remove_post_from_exploration_stream_ar,o.Z.add_post_to_top_content_stream_ar,o.Z.remove_post_from_top_content_stream_ar,o.Z.add_post_to_bot_stream,o.Z.remove_post_from_bot_stream,o.Z.add_bot_to_exploration_stream,o.Z.remove_bot_from_exploration_stream,o.Z.ban_user,o.Z.unban_user,o.Z.bot_follow,o.Z.bot_unfollow,o.Z.bot_create,o.Z.bot_delete,o.Z.bot_edit,o.Z.bot_share,o.Z.bot_remove_from_sidebar,o.Z.bot_undo_remove_from_sidebar,o.Z.set_default_bot,o.Z.edit_theme_preference,o.Z.edit_language_preference,o.Z.revshare_enroll,o.Z.revshare_disable},90912:function(e){e.exports={ToastLink:"WebSubscriptionSuccessMessage_ToastLink__eq_NR",ToastTitle:"WebSubscriptionSuccessMessage_ToastTitle__srxYc",ToastText:"WebSubscriptionSuccessMessage_ToastText__08fMf"}}}]);