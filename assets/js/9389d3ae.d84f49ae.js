"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:8},l="Migrating from v3.2 to v4",s={unversionedId:"v4-migration",id:"v4-migration",title:"Migrating from v3.2 to v4",description:"alwaysPauseOnInterruption has been moved to AndroidOptions",source:"@site/docs/v4-migration.md",sourceDirName:".",slug:"/v4-migration",permalink:"/docs/next/v4-migration",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/v4-migration.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"app",previous:{title:"Migrating from v3.1.0 to v3.2.0",permalink:"/docs/next/v3.1.0-migration"},next:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"}},d={},c=[{value:"<code>alwaysPauseOnInterruption</code> has been moved to <code>AndroidOptions</code>",id:"alwayspauseoninterruption-has-been-moved-to-androidoptions",level:3},{value:"<code>usePlaybackState</code> initially returns <code>undefined</code>",id:"useplaybackstate-initially-returns-undefined",level:3},{value:"<code>getTrack</code> return type",id:"gettrack-return-type",level:3},{value:"Player <code>State</code> Updates",id:"player-state-updates",level:3},{value:"General Deprecations",id:"general-deprecations",level:3},{value:"Typescript Deep Imports",id:"typescript-deep-imports",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-from-v32-to-v4"},"Migrating from v3.2 to v4"),(0,i.kt)("h3",{id:"alwayspauseoninterruption-has-been-moved-to-androidoptions"},(0,i.kt)("inlineCode",{parentName:"h3"},"alwaysPauseOnInterruption")," has been moved to ",(0,i.kt)("a",{parentName:"h3",href:"/docs/next/api/objects/android-options"},(0,i.kt)("inlineCode",{parentName:"a"},"AndroidOptions"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"await TrackPlayer.updateOptions({\n+      android: {\n+        alwaysPauseOnInterruption: true,\n+      },\n-      alwaysPauseOnInterruption: true,\n}\n")),(0,i.kt)("h3",{id:"useplaybackstate-initially-returns-undefined"},(0,i.kt)("inlineCode",{parentName:"h3"},"usePlaybackState")," initially returns ",(0,i.kt)("inlineCode",{parentName:"h3"},"undefined")),(0,i.kt)("p",null,"Have the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/hooks##useplaybackstate"},(0,i.kt)("inlineCode",{parentName:"a"},"usePlaybackState()"))," hook will\nreturn ",(0,i.kt)("inlineCode",{parentName:"p"},"{ state: undefined}")," initially before it has finished retrieving the\ncurrent state. Before it was incorrectly returning\n",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.None"))," which means no track is loaded."),(0,i.kt)("h3",{id:"gettrack-return-type"},(0,i.kt)("inlineCode",{parentName:"h3"},"getTrack")," return type"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/functions/queue#gettrack"},(0,i.kt)("inlineCode",{parentName:"a"},"getTrack()"))," now returns  ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\ninstead of ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("h3",{id:"player-state-updates"},"Player ",(0,i.kt)("inlineCode",{parentName:"h3"},"State")," Updates"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Error"))," - Emitted when an error state is encountered."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Ended"))," - State indicates playback stopped due to the end of the queue being reached."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Loading"))," - State indicating the initial loading phase of a track."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Buffering"))," - Now emitted no matter whether playback is paused or not."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/constants/state"},(0,i.kt)("inlineCode",{parentName:"a"},"State.Connecting"))," -  Deprecated. Please use ",(0,i.kt)("inlineCode",{parentName:"li"},"State.Loading")," instead.")),(0,i.kt)("h3",{id:"general-deprecations"},"General Deprecations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getState()")," - Please use the ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," property returned by ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/functions/player#getplaybackstate"},(0,i.kt)("inlineCode",{parentName:"a"},"getPlaybackState()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getDuration()")," -  Please use the ",(0,i.kt)("inlineCode",{parentName:"li"},"duration")," property returned by ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/functions/player#getprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"getProgress()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getPosition()")," -  Please use the ",(0,i.kt)("inlineCode",{parentName:"li"},"position")," property returned by ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/functions/player#getprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"getProgress()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"getBufferedPosition()")," -  Please use the ",(0,i.kt)("inlineCode",{parentName:"li"},"buffered")," property returned by ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/functions/player#getprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"getProgress()")),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Event.PlaybackTrackChanged")," - Please use ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/events#playbackactivetrackchanged"},(0,i.kt)("inlineCode",{parentName:"a"},"Event.PlaybackActiveTrackChanged")),".")),(0,i.kt)("h3",{id:"typescript-deep-imports"},"Typescript Deep Imports"),(0,i.kt)("p",null,"If you were using deep imports from RNTP, the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," has been completely\nreorganized, and so you may need to adjust your imports accordingly. If you've\nbeen importing everything directly (ex. ",(0,i.kt)("inlineCode",{parentName:"p"},"import ... from 'react-native-track-player';"),")\nthen you don't need to do anything."))}m.isMDXComponent=!0}}]);