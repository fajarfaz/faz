var Kf=Object.defineProperty;var Rc=Object.getOwnPropertySymbols;var Gf=Object.prototype.hasOwnProperty,zf=Object.prototype.propertyIsEnumerable;var Oc=(n,e,t)=>e in n?Kf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pc=(n,e)=>{for(var t in e||(e={}))Gf.call(e,t)&&Oc(n,t,e[t]);if(Rc)for(var t of Rc(e))zf.call(e,t)&&Oc(n,t,e[t]);return n};import{u as Hf,x as Wf,o as x,c as k,g as Qf,y as Yf,w as Xf,p as Jf,b as Zf,F as ur,z as hr,a as R,t as mn}from"./vendor.fe4fcf02.js";import{b as Bo,d as qo,e as $o,f as jo,h as Gn,_ as Ko,c as Go,a as zo,i as ep,j as tp,g as Ho}from"./firebase.66a1418e.js";import{_ as np}from"./index.88009d4e.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},sp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,l=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(t[h],t[l],t[d],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const l=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||l==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),l!==64){const m=u<<6&192|l;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Wo=function(n){const e=fh(n);return rp.encodeByteArray(e,!0)},Lc=function(n){return Wo(n).replace(/\./g,"")};function Dr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ip(t)||(n[t]=Dr(n[t],e[t]));return n}function ip(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Lc(JSON.stringify(t)),Lc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ap(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function cp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function up(){return typeof self=="object"&&self.self===self}function hp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dp(){return qt().indexOf("Electron/")>=0}function fp(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pp(){return qt().indexOf("MSAppHost/")>=0}function gp(){return!cp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gh(){return typeof indexedDB=="object"}function mp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="FirebaseError";class zn extends Error{constructor(e,t,s){super(t);this.code=e,this.customData=s,this.name=yp,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new zn(r,a,s)}}function wp(n,e){return n.replace(vp,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const vp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function uo(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Uc(i)&&Uc(o)){if(!uo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Uc(n){return n!==null&&typeof n=="object"}function _p(n,e){const t=new bp(n,e);return t.subscribe.bind(t)}class bp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ip(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=$i),r.error===void 0&&(r.error=$i),r.complete===void 0&&(r.complete=$i);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ip(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $i(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n){return n&&n._delegate?n._delegate:n}class at{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new op;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sp(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ep(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ep(n){return n===Rt?void 0:n}function Sp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=[];var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const mh={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},kp=P.INFO,Cp={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Ap=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Cp[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yo{constructor(e){this.name=e,this._logLevel=kp,this._logHandler=Ap,this._userLogHandler=null,Qo.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}function Dp(n){Qo.forEach(e=>{e.setLogLevel(n)})}function Np(n,e){for(const t of Qo){let s=null;e&&e.level&&(s=mh[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(r,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(s!=null?s:r.logLevel)&&n({level:P[i].toLowerCase(),message:a,args:o,type:r.name})}}}function Rp(n){return Array.prototype.slice.call(n)}function yh(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function Xo(n,e,t){var s,r=new Promise(function(i,o){s=n[e].apply(n,t),yh(s).then(i,o)});return r.request=s,r}function Op(n,e,t){var s=Xo(n,e,t);return s.then(function(r){if(!!r)return new vs(r,s.request)})}function Hn(n,e,t){t.forEach(function(s){Object.defineProperty(n.prototype,s,{get:function(){return this[e][s]},set:function(r){this[e][s]=r}})})}function Jo(n,e,t,s){s.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return Xo(this[e],r,arguments)})})}function ti(n,e,t,s){s.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function wh(n,e,t,s){s.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return Op(this[e],r,arguments)})})}function sn(n){this._index=n}Hn(sn,"_index",["name","keyPath","multiEntry","unique"]);Jo(sn,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);wh(sn,"_index",IDBIndex,["openCursor","openKeyCursor"]);function vs(n,e){this._cursor=n,this._request=e}Hn(vs,"_cursor",["direction","key","primaryKey","value"]);Jo(vs,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(vs.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),yh(e._request).then(function(s){if(!!s)return new vs(s,e._request)})})})});function tt(n){this._store=n}tt.prototype.createIndex=function(){return new sn(this._store.createIndex.apply(this._store,arguments))};tt.prototype.index=function(){return new sn(this._store.index.apply(this._store,arguments))};Hn(tt,"_store",["name","keyPath","indexNames","autoIncrement"]);Jo(tt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);wh(tt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);ti(tt,"_store",IDBObjectStore,["deleteIndex"]);function Bs(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}Bs.prototype.objectStore=function(){return new tt(this._tx.objectStore.apply(this._tx,arguments))};Hn(Bs,"_tx",["objectStoreNames","mode"]);ti(Bs,"_tx",IDBTransaction,["abort"]);function ni(n,e,t){this._db=n,this.oldVersion=e,this.transaction=new Bs(t)}ni.prototype.createObjectStore=function(){return new tt(this._db.createObjectStore.apply(this._db,arguments))};Hn(ni,"_db",["name","version","objectStoreNames"]);ti(ni,"_db",IDBDatabase,["deleteObjectStore","close"]);function si(n){this._db=n}si.prototype.transaction=function(){return new Bs(this._db.transaction.apply(this._db,arguments))};Hn(si,"_db",["name","version","objectStoreNames"]);ti(si,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(n){[tt,sn].forEach(function(e){n in e.prototype&&(e.prototype[n.replace("open","iterate")]=function(){var t=Rp(arguments),s=t[t.length-1],r=this._store||this._index,i=r[n].apply(r,t.slice(0,-1));i.onsuccess=function(){s(i.result)}})})});[sn,tt].forEach(function(n){n.prototype.getAll||(n.prototype.getAll=function(e,t){var s=this,r=[];return new Promise(function(i){s.iterateCursor(e,function(o){if(!o){i(r);return}if(r.push(o.value),t!==void 0&&r.length==t){i(r);return}o.continue()})})})});function Pp(n,e,t){var s=Xo(indexedDB,"open",[n,e]),r=s.request;return r&&(r.onupgradeneeded=function(i){t&&t(new ni(r.result,i.oldVersion,r.transaction))}),s.then(function(i){return new si(i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Mp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ho="@firebase/app",Fc="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Yo("@firebase/app"),Up="@firebase/app-compat",Fp="@firebase/analytics-compat",Vp="@firebase/analytics",Bp="@firebase/app-check-compat",qp="@firebase/app-check",$p="@firebase/auth",jp="@firebase/auth-compat",Kp="@firebase/database",Gp="@firebase/database-compat",zp="@firebase/functions",Hp="@firebase/functions-compat",Wp="@firebase/installations",Qp="@firebase/installations-compat",Yp="@firebase/messaging",Xp="@firebase/messaging-compat",Jp="@firebase/performance",Zp="@firebase/performance-compat",eg="@firebase/remote-config",tg="@firebase/remote-config-compat",ng="@firebase/storage",sg="@firebase/storage-compat",rg="@firebase/firestore",ig="@firebase/firestore-compat",og="firebase",ag="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="[DEFAULT]",cg={[ho]:"fire-core",[Up]:"fire-core-compat",[Vp]:"fire-analytics",[Fp]:"fire-analytics-compat",[qp]:"fire-app-check",[Bp]:"fire-app-check-compat",[$p]:"fire-auth",[jp]:"fire-auth-compat",[Kp]:"fire-rtdb",[Gp]:"fire-rtdb-compat",[zp]:"fire-fn",[Hp]:"fire-fn-compat",[Wp]:"fire-iid",[Qp]:"fire-iid-compat",[Yp]:"fire-fcm",[Xp]:"fire-fcm-compat",[Jp]:"fire-perf",[Zp]:"fire-perf-compat",[eg]:"fire-rc",[tg]:"fire-rc-compat",[ng]:"fire-gcs",[sg]:"fire-gcs-compat",[rg]:"fire-fst",[ig]:"fire-fst-compat","fire-js":"fire-js",[og]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Map,_s=new Map;function Nr(n,e){try{n.container.addComponent(e)}catch(t){Zo.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vh(n,e){n.container.addOrOverwriteComponent(e)}function jt(n){const e=n.name;if(_s.has(e))return Zo.debug(`There were multiple attempts to register component ${e}.`),!1;_s.set(e,n);for(const t of It.values())Nr(t,n);return!0}function _h(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ug(n,e,t=$t){_h(n,e).clearInstance(t)}function hg(){_s.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ct=new ei("app","Firebase",lg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=ag;function bh(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:$t,automaticDataCollectionEnabled:!1},e),s=t.name;if(typeof s!="string"||!s)throw ct.create("bad-app-name",{appName:String(s)});const r=It.get(s);if(r){if(uo(n,r.options)&&uo(t,r.config))return r;throw ct.create("duplicate-app",{appName:s})}const i=new xp(s);for(const a of _s.values())i.addComponent(a);const o=new dg(n,t,i);return It.set(s,o),o}function fg(n=$t){const e=It.get(n);if(!e)throw ct.create("no-app",{appName:n});return e}function pg(){return Array.from(It.values())}async function Ih(n){const e=n.name;It.has(e)&&(It.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ye(n,e,t){var s;let r=(s=cg[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zo.warn(a.join(" "));return}jt(new at(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function Th(n,e){if(n!==null&&typeof n!="function")throw ct.create("invalid-log-argument");Np(n,e)}function Eh(n){Dp(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="firebase-heartbeat-database",mg=1,Kt="firebase-heartbeat-store";let ji=null;function ea(){return ji||(ji=Pp(gg,mg,n=>{switch(n.oldVersion){case 0:n.createObjectStore(Kt)}}).catch(n=>{throw ct.create("storage-open",{originalErrorMessage:n.message})})),ji}async function yg(n){try{return(await ea()).transaction(Kt).objectStore(Kt).get(ta(n))}catch(e){throw ct.create("storage-get",{originalErrorMessage:e.message})}}async function Ki(n,e){try{const s=(await ea()).transaction(Kt,"readwrite");return await s.objectStore(Kt).put(e,ta(n)),s.complete}catch(t){throw ct.create("storage-set",{originalErrorMessage:t.message})}}async function wg(n){try{const t=(await ea()).transaction(Kt,"readwrite");return await t.objectStore(Kt).delete(ta(n)),t.complete}catch(e){throw ct.create("storage-delete",{originalErrorMessage:e.message})}}function ta(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=1024,_g=30*24*60*60*1e3;class bg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Eg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ig();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(r=>r.date===s))return this._heartbeatsCache.push({date:s,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=_g}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:t}=Tg(this._heartbeatsCache),s=Wo(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),s}}function Ig(){return new Date().toISOString().substring(0,10)}function Tg(n,e=vg){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.userAgent===r.userAgent);if(i){if(i.dates.push(r.date),Vc(t)>e){i.dates.pop();break}}else if(t.push({userAgent:r.userAgent,dates:[r.date]}),Vc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Eg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gh()?mp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yg(this.app);return(t==null?void 0:t.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Ki(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ki(this.app,{heartbeats:[...s,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ki(this.app,{heartbeats:s.filter(r=>!e.includes(r))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return wg(this.app)}}function Vc(n){return Wo(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n){jt(new at("platform-logger",e=>new Lp(e),"PRIVATE")),jt(new at("heartbeat",e=>new bg(e),"PRIVATE")),Ye(ho,Fc,n),Ye(ho,Fc,"esm2017"),Ye("fire-js","")}Sg("");var xg=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:ri,_DEFAULT_ENTRY_NAME:$t,_addComponent:Nr,_addOrOverwriteComponent:vh,_apps:It,_clearComponents:hg,_components:_s,_getProvider:_h,_registerComponent:jt,_removeServiceInstance:ug,deleteApp:Ih,getApp:fg,getApps:pg,initializeApp:bh,onLog:Th,registerVersion:Ye,setLogLevel:Eh,FirebaseError:zn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this._delegate=e,this.firebase=t,Nr(e,new at("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ih(this._delegate)))}_getService(e,t=$t){var s;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((s=r.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=$t){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Nr(this._delegate,e)}_addOrOverwriteComponent(e){vh(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Bc=new ei("app-compat","Firebase",Cg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){const e={},t={__esModule:!0,initializeApp:i,app:r,registerVersion:Ye,setLogLevel:Eh,onLog:Th,apps:null,SDK_VERSION:ri,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:xg}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(u){delete e[u]}function r(u){if(u=u||$t,!Mc(e,u))throw Bc.create("no-app",{appName:u});return e[u]}r.App=n;function i(u,h={}){const l=bh(u,h);if(Mc(e,l.name))return e[l.name];const d=new n(l,t);return e[l.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const h=u.name,l=h.replace("-compat","");if(jt(u)&&u.type==="PUBLIC"){const d=(g=r())=>{if(typeof g[l]!="function")throw Bc.create("invalid-app-argument",{appName:h});return g[l]()};u.serviceProps!==void 0&&Dr(d,u.serviceProps),t[l]=d,n.prototype[l]=function(...g){return this._getService.bind(this,h).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?t[l]:null}function c(u,h){return h==="serverAuth"?null:h}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){const n=Ag(kg);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Sh,extendNamespace:e,createSubscribe:_p,ErrorFactory:ei,deepExtend:Dr});function e(t){Dr(n,t)}return n}const Dg=Sh();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Yo("@firebase/app-compat"),Ng="@firebase/app-compat",Rg="0.1.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n){Ye(Ng,Rg,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(up()&&self.firebase!==void 0){qc.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&qc.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ii=Dg;Og();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="firebasestorage.googleapis.com",kh="storageBucket",Pg=2*60*1e3,Lg=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends zn{constructor(e,t){super(Gi(e),`Firebase Storage: ${t} (${Gi(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Y.prototype)}_codeEquals(e){return Gi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Gi(n){return"storage/"+n}function na(){const n="An unknown error occurred, please check the error payload for server response.";return new Y("unknown",n)}function Mg(n){return new Y("object-not-found","Object '"+n+"' does not exist.")}function Ug(n){return new Y("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fg(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Y("unauthenticated",n)}function Vg(){return new Y("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Bg(n){return new Y("unauthorized","User does not have permission to access '"+n+"'.")}function qg(){return new Y("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ch(){return new Y("canceled","User canceled the upload/download.")}function $g(n){return new Y("invalid-url","Invalid URL '"+n+"'.")}function jg(n){return new Y("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function Kg(){return new Y("no-default-bucket","No default bucket found. Did you set the '"+kh+"' property when initializing the app?")}function Ah(){return new Y("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Gg(){return new Y("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function zg(){return new Y("no-download-url","The given file does not have any download URLs.")}function Sn(n){return new Y("invalid-argument",n)}function Dh(){return new Y("app-deleted","The Firebase app was deleted.")}function Nh(n){return new Y("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ds(n,e){return new Y("invalid-format","String does not match format '"+n+"': "+e)}function os(n){throw new Y("internal-error","Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=be.makeFromUrl(e,t)}catch{return new be(e,"")}if(s.path==="")return s;throw jg(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const h="v[A-Za-z0-9_]+",l=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${l}/${h}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},b=t===xh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",M=new RegExp(`^https?://${b}/${r}/${E}`,"i"),z=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<z.length;j++){const nt=z[j],pt=nt.regex.exec(e);if(pt){const gn=pt[nt.indices.bucket];let is=pt[nt.indices.path];is||(is=""),s=new be(gn,is),nt.postModify(s);break}}if(s==null)throw $g(e);return s}}class Hg{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(n,e,t){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...E){u||(u=!0,e.apply(null,E))}function l(E){r=setTimeout(()=>{r=null,n(g,c())},E)}function d(){i&&clearTimeout(i)}function g(E,...M){if(u){d();return}if(E){d(),h.call(null,E,...M);return}if(c()||o){d(),h.call(null,E,...M);return}s<64&&(s*=2);let z;a===1?(a=2,z=0):z=(s+Math.random())*1e3,l(z)}let m=!1;function b(E){m||(m=!0,d(),!u&&(r!==null?(E||(a=2),clearTimeout(r),l(0)):E||(a=1)))}return l(0),i=setTimeout(()=>{o=!0,b(!0)},t),b}function Qg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n){return n!==void 0}function Xg(n){return typeof n=="function"}function Jg(n){return typeof n=="object"&&!Array.isArray(n)}function oi(n){return typeof n=="string"||n instanceof String}function $c(n){return sa()&&n instanceof Blob}function sa(){return typeof Blob!="undefined"}function lo(n,e,t,s){if(s<e)throw Sn(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Sn(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Rh(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Vt||(Vt={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,s,r,i,o,a,c,u,h,l){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new lr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Vt.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const h=i.getErrorCode()===Vt.ABORT;s(!1,new lr(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new lr(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Yg(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=na();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Dh():Ch();o(c)}else{const c=qg();o(c)}};this.canceled_?t(!1,new lr(!1,null,!0)):this.backoffId_=Wg(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return t||r||i}}class lr{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function em(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function tm(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function nm(n,e){e&&(n["X-Firebase-GMPID"]=e)}function sm(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function rm(n,e,t,s,r,i){const o=Rh(n.urlParams),a=n.url+o,c=Object.assign({},n.headers);return nm(c,e),em(c,t),tm(c,i),sm(c,s),new Zg(a,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function om(...n){const e=im();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(sa())return new Blob(n);throw new Y("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function am(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n){return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zi{constructor(e,t){this.data=e,this.contentType=t||null}}function Oh(n,e){switch(n){case Ve.RAW:return new zi(Ph(e));case Ve.BASE64:case Ve.BASE64URL:return new zi(Lh(n,e));case Ve.DATA_URL:return new zi(hm(e),lm(e))}throw na()}function Ph(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=n.charCodeAt(++t);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function um(n){let e;try{e=decodeURIComponent(n)}catch{throw ds(Ve.DATA_URL,"Malformed data URL.")}return Ph(e)}function Lh(n,e){switch(n){case Ve.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw ds(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Ve.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw ds(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=cm(e)}catch{throw ds(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class Mh{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ds(Ve.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=dm(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function hm(n){const e=new Mh(n);return e.base64?Lh(Ve.BASE64,e.rest):um(e.rest)}function lm(n){return new Mh(n).contentType}function dm(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){let s=0,r="";$c(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if($c(this.data_)){const s=this.data_,r=am(s,e,t);return r===null?null:new st(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new st(s,!0)}}static getBlob(...e){if(sa()){const t=e.map(s=>s instanceof st?s.data_:s);return new st(om.apply(null,t))}else{const t=e.map(o=>oi(o)?Oh(Ve.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new st(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){let e;try{e=JSON.parse(n)}catch{return null}return Jg(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function pm(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Uh(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n,e){return e}class Ee{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||gm}}let dr=null;function mm(n){return!oi(n)||n.length<2?n:Uh(n)}function ai(){if(dr)return dr;const n=[];n.push(new Ee("bucket")),n.push(new Ee("generation")),n.push(new Ee("metageneration")),n.push(new Ee("name","fullPath",!0));function e(i,o){return mm(o)}const t=new Ee("name");t.xform=e,n.push(t);function s(i,o){return o!==void 0?Number(o):o}const r=new Ee("size");return r.xform=s,n.push(r),n.push(new Ee("timeCreated")),n.push(new Ee("updated")),n.push(new Ee("md5Hash",null,!0)),n.push(new Ee("cacheControl",null,!0)),n.push(new Ee("contentDisposition",null,!0)),n.push(new Ee("contentEncoding",null,!0)),n.push(new Ee("contentLanguage",null,!0)),n.push(new Ee("contentType",null,!0)),n.push(new Ee("metadata","customMetadata",!0)),dr=n,dr}function ym(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new be(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function wm(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const o=t[i];s[o.local]=o.xform(s,e[o.server])}return ym(s,n),s}function Fh(n,e,t){const s=ra(e);return s===null?null:wm(n,s,t)}function vm(n,e,t,s){const r=ra(e);if(r===null||!oi(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=n.bucket,l=n.fullPath,d="/b/"+o(h)+"/o/"+o(l),g=Ct(d,t,s),m=Rh({alt:"media",token:u});return g+m})[0]}function ia(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="prefixes",Kc="items";function _m(n,e,t){const s={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[jc])for(const r of t[jc]){const i=r.replace(/\/$/,""),o=n._makeStorageReference(new be(e,i));s.prefixes.push(o)}if(t[Kc])for(const r of t[Kc]){const i=n._makeStorageReference(new be(e,r.name));s.items.push(i)}return s}function bm(n,e,t){const s=ra(t);return s===null?null:_m(n,e,s)}class lt{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){if(!n)throw na()}function ci(n,e){function t(s,r){const i=Fh(n,r,e);return Xe(i!==null),i}return t}function Im(n,e){function t(s,r){const i=bm(n,e,r);return Xe(i!==null),i}return t}function Tm(n,e){function t(s,r){const i=Fh(n,r,e);return Xe(i!==null),vm(i,r,n.host,n._protocol)}return t}function Wn(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=Vg():r=Fg():t.getStatus()===402?r=Ug(n.bucket):t.getStatus()===403?r=Bg(n.path):r=s,r.serverResponse=s.serverResponse,r}return e}function ui(n){const e=Wn(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Mg(n.path)),i.serverResponse=r.serverResponse,i}return t}function Vh(n,e,t){const s=e.fullServerUrl(),r=Ct(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new lt(r,i,ci(n,t),o);return a.errorHandler=ui(e),a}function Em(n,e,t,s,r){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",t&&t.length>0&&(i.delimiter=t),s&&(i.pageToken=s),r&&(i.maxResults=r);const o=e.bucketOnlyServerUrl(),a=Ct(o,n.host,n._protocol),c="GET",u=n.maxOperationRetryTime,h=new lt(a,c,Im(n,e.bucket),u);return h.urlParams=i,h.errorHandler=Wn(e),h}function Sm(n,e,t){const s=e.fullServerUrl(),r=Ct(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new lt(r,i,Tm(n,t),o);return a.errorHandler=ui(e),a}function xm(n,e,t,s){const r=e.fullServerUrl(),i=Ct(r,n.host,n._protocol),o="PATCH",a=ia(t,s),c={"Content-Type":"application/json; charset=utf-8"},u=n.maxOperationRetryTime,h=new lt(i,o,ci(n,s),u);return h.headers=c,h.body=a,h.errorHandler=ui(e),h}function km(n,e){const t=e.fullServerUrl(),s=Ct(t,n.host,n._protocol),r="DELETE",i=n.maxOperationRetryTime;function o(c,u){}const a=new lt(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=ui(e),a}function Cm(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Bh(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=Cm(null,e)),s}function Am(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let z="";for(let j=0;j<2;j++)z=z+Math.random().toString().slice(2);return z}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Bh(e,s,r),h=ia(u,t),l="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",g=st.getBlob(l,s,d);if(g===null)throw Ah();const m={name:u.fullPath},b=Ct(i,n.host,n._protocol),E="POST",M=n.maxUploadRetryTime,G=new lt(b,E,ci(n,t),M);return G.urlParams=m,G.headers=o,G.body=g.uploadData(),G.errorHandler=Wn(e),G}class Rr{constructor(e,t,s,r){this.current=e,this.total=t,this.finalized=!!s,this.metadata=r||null}}function oa(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Xe(!1)}return Xe(!!t&&(e||["active"]).indexOf(t)!==-1),t}function Dm(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),o=Bh(e,s,r),a={name:o.fullPath},c=Ct(i,n.host,n._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},l=ia(o,t),d=n.maxUploadRetryTime;function g(b){oa(b);let E;try{E=b.getResponseHeader("X-Goog-Upload-URL")}catch{Xe(!1)}return Xe(oi(E)),E}const m=new lt(c,u,g,d);return m.urlParams=a,m.headers=h,m.body=l,m.errorHandler=Wn(e),m}function Nm(n,e,t,s){const r={"X-Goog-Upload-Command":"query"};function i(u){const h=oa(u,["active","final"]);let l=null;try{l=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Xe(!1)}l||Xe(!1);const d=Number(l);return Xe(!isNaN(d)),new Rr(d,s.size(),h==="final")}const o="POST",a=n.maxUploadRetryTime,c=new lt(t,o,i,a);return c.headers=r,c.errorHandler=Wn(e),c}const Gc=256*1024;function Rm(n,e,t,s,r,i,o,a){const c=new Rr(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw Gg();const u=c.total-c.current;let h=u;r>0&&(h=Math.min(h,r));const l=c.current,d=l+h,m={"X-Goog-Upload-Command":h===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},b=s.slice(l,d);if(b===null)throw Ah();function E(j,nt){const pt=oa(j,["active","final"]),gn=c.current+h,is=s.size();let qi;return pt==="final"?qi=ci(e,i)(j,nt):qi=null,new Rr(gn,is,pt==="final",qi)}const M="POST",G=e.maxUploadRetryTime,z=new lt(t,M,E,G);return z.headers=m,z.body=b.uploadData(),z.progressCallback=a||null,z.errorHandler=Wn(n),z}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om={STATE_CHANGED:"state_changed"},xe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Hi(n){switch(n){case"running":case"pausing":case"canceling":return xe.RUNNING;case"paused":return xe.PAUSED;case"success":return xe.SUCCESS;case"canceled":return xe.CANCELED;case"error":return xe.ERROR;default:return xe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t,s){if(Xg(e)||t!=null||s!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=s!=null?s:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Lm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r){if(this.sent_)throw os("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw os("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw os("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw os("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw os("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Mm extends Lm{initXhr(){this.xhr_.responseType="text"}}function He(){return new Mm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=ai(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=r,this._transition("error"))},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=Dm(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,He,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const r=Nm(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,He,t,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Gc*this._chunkMultiplier,t=new Rr(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Rm(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,He,r,i);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Gc*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=Vh(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,He,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=Am(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,He,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ch(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Hi(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,r){const i=new Pm(t||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Hi(this._state)){case xe.SUCCESS:yn(this._resolve.bind(null,this.snapshot))();break;case xe.CANCELED:case xe.ERROR:const t=this._reject;yn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Hi(this._state)){case xe.RUNNING:case xe.PAUSED:e.next&&yn(e.next.bind(e,this.snapshot))();break;case xe.SUCCESS:e.complete&&yn(e.complete.bind(e))();break;case xe.CANCELED:case xe.ERROR:e.error&&yn(e.error.bind(e,this._error))();break;default:e.error&&yn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this._service=e,t instanceof be?this._location=t:this._location=be.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Gt(e,t)}get root(){const e=new be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Uh(this._location.path)}get storage(){return this._service}get parent(){const e=fm(this._location.path);if(e===null)return null;const t=new be(this._location.bucket,e);return new Gt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Nh(e)}}function Um(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new qh(n,new st(e),t)}function Fm(n){const e={prefixes:[],items:[]};return $h(n,e).then(()=>e)}async function $h(n,e,t){const r=await jh(n,{pageToken:t});e.prefixes.push(...r.prefixes),e.items.push(...r.items),r.nextPageToken!=null&&await $h(n,e,r.nextPageToken)}function jh(n,e){e!=null&&typeof e.maxResults=="number"&&lo("options.maxResults",1,1e3,e.maxResults);const t=e||{},s=Em(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(s,He)}function Vm(n){n._throwIfRoot("getMetadata");const e=Vh(n.storage,n._location,ai());return n.storage.makeRequestWithTokens(e,He)}function Bm(n,e){n._throwIfRoot("updateMetadata");const t=xm(n.storage,n._location,e,ai());return n.storage.makeRequestWithTokens(t,He)}function qm(n){n._throwIfRoot("getDownloadURL");const e=Sm(n.storage,n._location,ai());return n.storage.makeRequestWithTokens(e,He).then(t=>{if(t===null)throw zg();return t})}function $m(n){n._throwIfRoot("deleteObject");const e=km(n.storage,n._location);return n.storage.makeRequestWithTokens(e,He)}function Kh(n,e){const t=pm(n._location.path,e),s=new be(n._location.bucket,t);return new Gt(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){return/^[A-Za-z]+:\/\//.test(n)}function Km(n,e){return new Gt(n,e)}function Gh(n,e){if(n instanceof aa){const t=n;if(t._bucket==null)throw Kg();const s=new Gt(t,t._bucket);return e!=null?Gh(s,e):s}else return e!==void 0?Kh(n,e):n}function Gm(n,e){if(e&&jm(e)){if(n instanceof aa)return Km(n,e);throw Sn("To use ref(service, url), the first argument must be a Storage instance.")}else return Gh(n,e)}function zc(n,e){const t=e==null?void 0:e[kh];return t==null?null:be.makeFromBucketSpec(t,n)}function zm(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:ph(r,n.app.options.projectId))}class aa{constructor(e,t,s,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=xh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Pg,this._maxUploadRetryTime=Lg,this._requests=new Set,r!=null?this._bucket=be.makeFromBucketSpec(r,this._host):this._bucket=zc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=be.makeFromBucketSpec(this._url,e):this._bucket=zc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gt(this,e)}_makeRequest(e,t,s,r){if(this._deleted)return new Hg(Dh());{const i=rm(e,this._appId,s,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const Hc="@firebase/storage",Wc="0.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="storage";function Wm(n,e,t){return n=F(n),Um(n,e,t)}function Qm(n){return n=F(n),Vm(n)}function Ym(n,e){return n=F(n),Bm(n,e)}function Xm(n,e){return n=F(n),jh(n,e)}function Jm(n){return n=F(n),Fm(n)}function Zm(n){return n=F(n),qm(n)}function ey(n){return n=F(n),$m(n)}function Qc(n,e){return n=F(n),Gm(n,e)}function ty(n,e){return Kh(n,e)}function ny(n,e,t,s={}){zm(n,e,t,s)}function sy(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new aa(t,s,r,e,ri)}function ry(){jt(new at(Hm,sy,"PUBLIC").setMultipleInstances(!0)),Ye(Hc,Wc,""),Ye(Hc,Wc,"esm2017")}ry();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t,s){this._delegate=e,this.task=t,this.ref=s}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new fr(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(s=>{if(e)return e(new fr(s,this,this._ref))},t)}on(e,t,s,r){let i;return t&&(typeof t=="function"?i=o=>t(new fr(o,this,this._ref)):i={next:t.next?o=>t.next(new fr(o,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,s||void 0,r||void 0)}}class Xc{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new it(e,this._service))}get items(){return this._delegate.items.map(e=>new it(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=ty(this._delegate,e);return new it(t,this.storage)}get root(){return new it(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new it(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Yc(Wm(this._delegate,e,t),this)}putString(e,t=Ve.RAW,s){this._throwIfRoot("putString");const r=Oh(t,e),i=Object.assign({},s);return i.contentType==null&&r.contentType!=null&&(i.contentType=r.contentType),new Yc(new qh(this._delegate,new st(r.data,!0),i),this)}listAll(){return Jm(this._delegate).then(e=>new Xc(e,this.storage))}list(e){return Xm(this._delegate,e||void 0).then(t=>new Xc(t,this.storage))}getMetadata(){return Qm(this._delegate)}updateMetadata(e){return Ym(this._delegate,e)}getDownloadURL(){return Zm(this._delegate)}delete(){return this._throwIfRoot("delete"),ey(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw Nh(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Jc(e))throw Sn("ref() expected a child path but got a URL, use refFromURL instead.");return new it(Qc(this._delegate,e),this)}refFromURL(e){if(!Jc(e))throw Sn("refFromURL() expected a full URL but got a child path, use ref() instead.");try{be.makeFromUrl(e,this._delegate.host)}catch{throw Sn("refFromUrl() expected a valid full URL but got an invalid one.")}return new it(Qc(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,s={}){ny(this._delegate,e,t,s)}}function Jc(n){return/^[A-Za-z]+:\/\//.test(n)}const iy="@firebase/storage-compat",oy="0.1.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="storage-compat";function cy(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),s=n.getProvider("storage").getImmediate({identifier:e});return new zh(t,s)}function uy(n){const e={TaskState:xe,TaskEvent:Om,StringFormat:Ve,Storage:zh,Reference:it};n.INTERNAL.registerComponent(new at(ay,cy,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(iy,oy)}uy(ii);var hy="firebase",ly="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii.registerVersion(hy,ly,"app-compat");var dy=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},I,ca=ca||{},A=dy||self;function Or(){}function fo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function qs(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function fy(n){return Object.prototype.hasOwnProperty.call(n,Wi)&&n[Wi]||(n[Wi]=++py)}var Wi="closure_uid_"+(1e9*Math.random()>>>0),py=0;function gy(n,e,t){return n.call.apply(n.bind,arguments)}function my(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function me(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?me=gy:me=my,me.apply(null,arguments)}function pr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function we(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function At(){this.s=this.s,this.o=this.o}var yy=0,wy={};At.prototype.s=!1;At.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),yy!=0)){var n=fy(this);delete wy[n]}};At.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hh=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Wh=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const s=n.length,r=typeof n=="string"?n.split(""):n;for(let i=0;i<s;i++)i in r&&e.call(t,r[i],i,n)};function vy(n){e:{var e=hw;const t=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<t;r++)if(r in s&&e.call(void 0,s[r],r,n)){e=r;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Zc(n){return Array.prototype.concat.apply([],arguments)}function ua(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Pr(n){return/^[\s\xa0]*$/.test(n)}var eu=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Ce(n,e){return n.indexOf(e)!=-1}function Qi(n,e){return n<e?-1:n>e?1:0}var Ae;e:{var tu=A.navigator;if(tu){var nu=tu.userAgent;if(nu){Ae=nu;break e}}Ae=""}function ha(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Qh(n){const e={};for(const t in n)e[t]=n[t];return e}var su="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yh(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<su.length;i++)t=su[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function la(n){return la[" "](n),n}la[" "]=Or;function _y(n){var e=Ty;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var by=Ce(Ae,"Opera"),An=Ce(Ae,"Trident")||Ce(Ae,"MSIE"),Xh=Ce(Ae,"Edge"),po=Xh||An,Jh=Ce(Ae,"Gecko")&&!(Ce(Ae.toLowerCase(),"webkit")&&!Ce(Ae,"Edge"))&&!(Ce(Ae,"Trident")||Ce(Ae,"MSIE"))&&!Ce(Ae,"Edge"),Iy=Ce(Ae.toLowerCase(),"webkit")&&!Ce(Ae,"Edge");function Zh(){var n=A.document;return n?n.documentMode:void 0}var Lr;e:{var Yi="",Xi=function(){var n=Ae;if(Jh)return/rv:([^\);]+)(\)|;)/.exec(n);if(Xh)return/Edge\/([\d\.]+)/.exec(n);if(An)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Iy)return/WebKit\/(\S+)/.exec(n);if(by)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Xi&&(Yi=Xi?Xi[1]:""),An){var Ji=Zh();if(Ji!=null&&Ji>parseFloat(Yi)){Lr=String(Ji);break e}}Lr=Yi}var Ty={};function Ey(){return _y(function(){let n=0;const e=eu(String(Lr)).split("."),t=eu("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=Qi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Qi(r[2].length==0,i[2].length==0)||Qi(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var go;if(A.document&&An){var ru=Zh();go=ru||parseInt(Lr,10)||void 0}else go=void 0;var Sy=go,xy=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",Or,e),A.removeEventListener("test",Or,e)}catch{}return n}();function Ie(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};function bs(n,e){if(Ie.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Jh){e:{try{la(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ky[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&bs.Z.h.call(this)}}we(bs,Ie);var ky={2:"touch",3:"pen",4:"mouse"};bs.prototype.h=function(){bs.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var $s="closure_listenable_"+(1e6*Math.random()|0),Cy=0;function Ay(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ia=r,this.key=++Cy,this.ca=this.fa=!1}function hi(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function li(n){this.src=n,this.g={},this.h=0}li.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=yo(n,e,s,r);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new Ay(e,this.src,i,!!s,r),e.fa=t,n.push(e)),e};function mo(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=Hh(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(hi(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function yo(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ca&&i.listener==e&&i.capture==!!t&&i.ia==s)return r}return-1}var da="closure_lm_"+(1e6*Math.random()|0),Zi={};function el(n,e,t,s,r){if(s&&s.once)return nl(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)el(n,e[i],t,s,r);return null}return t=ga(t),n&&n[$s]?n.N(e,t,qs(s)?!!s.capture:!!s,r):tl(n,e,t,!1,s,r)}function tl(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=qs(r)?!!r.capture:!!r,a=pa(n);if(a||(n[da]=a=new li(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=Dy(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)xy||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(rl(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Dy(){function n(t){return e.call(n.src,n.listener,t)}var e=Ny;return n}function nl(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nl(n,e[i],t,s,r);return null}return t=ga(t),n&&n[$s]?n.O(e,t,qs(s)?!!s.capture:!!s,r):tl(n,e,t,!0,s,r)}function sl(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)sl(n,e[i],t,s,r);else s=qs(s)?!!s.capture:!!s,t=ga(t),n&&n[$s]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=yo(i,t,s,r),-1<t&&(hi(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=pa(n))&&(e=n.g[e.toString()],n=-1,e&&(n=yo(e,t,s,r)),(t=-1<n?e[n]:null)&&fa(t))}function fa(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[$s])mo(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(rl(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=pa(e))?(mo(t,n),t.h==0&&(t.src=null,e[da]=null)):hi(n)}}}function rl(n){return n in Zi?Zi[n]:Zi[n]="on"+n}function Ny(n,e){if(n.ca)n=!0;else{e=new bs(e,this);var t=n.listener,s=n.ia||n.src;n.fa&&fa(n),n=t.call(s,e)}return n}function pa(n){return n=n[da],n instanceof li?n:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ga(n){return typeof n=="function"?n:(n[eo]||(n[eo]=function(e){return n.handleEvent(e)}),n[eo])}function he(){At.call(this),this.i=new li(this),this.P=this,this.I=null}we(he,At);he.prototype[$s]=!0;he.prototype.removeEventListener=function(n,e,t,s){sl(this,n,e,t,s)};function ye(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Ie(e,n);else if(e instanceof Ie)e.target=e.target||n;else{var r=e;e=new Ie(s,n),Yh(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=gr(o,s,!0,e)&&r}if(o=e.g=n,r=gr(o,s,!0,e)&&r,r=gr(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=gr(o,s,!1,e)&&r}he.prototype.M=function(){if(he.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)hi(t[s]);delete n.g[e],n.h--}}this.I=null};he.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};he.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function gr(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&mo(n.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ma=A.JSON.stringify;function Ry(){var n=ol;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Oy{constructor(){this.h=this.g=null}add(e,t){const s=il.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var il=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Py,n=>n.reset());class Py{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ly(n){A.setTimeout(()=>{throw n},0)}function ya(n,e){wo||My(),vo||(wo(),vo=!0),ol.add(n,e)}var wo;function My(){var n=A.Promise.resolve(void 0);wo=function(){n.then(Uy)}}var vo=!1,ol=new Oy;function Uy(){for(var n;n=Ry();){try{n.h.call(n.g)}catch(t){Ly(t)}var e=il;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}vo=!1}function di(n,e){he.call(this),this.h=n||1,this.g=e||A,this.j=me(this.kb,this),this.l=Date.now()}we(di,he);I=di.prototype;I.da=!1;I.S=null;I.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ye(this,"tick"),this.da&&(wa(this),this.start()))}};I.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wa(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}I.M=function(){di.Z.M.call(this),wa(this),delete this.g};function va(n,e,t){if(typeof n=="function")t&&(n=me(n,t));else if(n&&typeof n.handleEvent=="function")n=me(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function al(n){n.g=va(()=>{n.g=null,n.i&&(n.i=!1,al(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Fy extends At{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:al(this)}M(){super.M(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Is(n){At.call(this),this.h=n,this.g={}}we(Is,At);var iu=[];function cl(n,e,t,s){Array.isArray(t)||(t&&(iu[0]=t.toString()),t=iu);for(var r=0;r<t.length;r++){var i=el(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function ul(n){ha(n.g,function(e,t){this.g.hasOwnProperty(t)&&fa(e)},n),n.g={}}Is.prototype.M=function(){Is.Z.M.call(this),ul(this)};Is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fi(){this.g=!0}fi.prototype.Aa=function(){this.g=!1};function Vy(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function By(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function Tn(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+$y(n,t)+(s?" "+s:"")})}function qy(n,e){n.info(function(){return"TIMEOUT: "+e})}fi.prototype.info=function(){};function $y(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ma(t)}catch{return e}}var rn={},ou=null;function pi(){return ou=ou||new he}rn.Ma="serverreachability";function hl(n){Ie.call(this,rn.Ma,n)}we(hl,Ie);function Ts(n){const e=pi();ye(e,new hl(e,n))}rn.STAT_EVENT="statevent";function ll(n,e){Ie.call(this,rn.STAT_EVENT,n),this.stat=e}we(ll,Ie);function De(n){const e=pi();ye(e,new ll(e,n))}rn.Na="timingevent";function dl(n,e){Ie.call(this,rn.Na,n),this.size=e}we(dl,Ie);function js(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var gi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fl={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function _a(){}_a.prototype.h=null;function au(n){return n.h||(n.h=n.i())}function pl(){}var Ks={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ba(){Ie.call(this,"d")}we(ba,Ie);function Ia(){Ie.call(this,"c")}we(Ia,Ie);var _o;function mi(){}we(mi,_a);mi.prototype.g=function(){return new XMLHttpRequest};mi.prototype.i=function(){return{}};_o=new mi;function Gs(n,e,t,s){this.l=n,this.j=e,this.m=t,this.X=s||1,this.V=new Is(this),this.P=jy,n=po?125:void 0,this.W=new di(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gl}function gl(){this.i=null,this.g="",this.h=!1}var jy=45e3,bo={},Mr={};I=Gs.prototype;I.setTimeout=function(n){this.P=n};function Io(n,e,t){n.K=1,n.v=wi(ut(e)),n.s=t,n.U=!0,ml(n,null)}function ml(n,e){n.F=Date.now(),zs(n),n.A=ut(n.v);var t=n.A,s=n.X;Array.isArray(s)||(s=[String(s)]),Tl(t.h,"t",s),n.C=0,t=n.l.H,n.h=new gl,n.g=jl(n.l,t?e:null,!n.s),0<n.O&&(n.L=new Fy(me(n.Ia,n,n.g),n.O)),cl(n.V,n.g,"readystatechange",n.gb),e=n.H?Qh(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Ts(1),Vy(n.j,n.u,n.A,n.m,n.X,n.s)}I.gb=function(n){n=n.target;const e=this.L;e&&rt(n)==3?e.l():this.Ia(n)};I.Ia=function(n){try{if(n==this.g)e:{const h=rt(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(h!=3||po||this.g&&(this.h.h||this.g.ga()||lu(this.g)))){this.I||h!=4||e==7||(e==8||0>=l?Ts(3):Ts(2)),yi(this);var t=this.g.ba();this.N=t;t:if(yl(this)){var s=lu(this.g);n="";var r=s.length,i=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Lt(this),fs(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,By(this.j,this.u,this.A,this.m,this.X,h,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var u=a;break t}}u=null}if(t=u)Tn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,To(this,t);else{this.i=!1,this.o=3,De(12),Lt(this),fs(this);break e}}this.U?(wl(this,h,o),po&&this.i&&h==3&&(cl(this.V,this.W,"tick",this.fb),this.W.start())):(Tn(this.j,this.m,o,null),To(this,o)),h==4&&Lt(this),this.i&&!this.I&&(h==4?Vl(this.l,this):(this.i=!1,zs(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,De(12)):(this.o=0,De(13)),Lt(this),fs(this)}}}catch{}finally{}};function yl(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function wl(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=Ky(n,t),r==Mr){e==4&&(n.o=4,De(14),s=!1),Tn(n.j,n.m,null,"[Incomplete Response]");break}else if(r==bo){n.o=4,De(15),Tn(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Tn(n.j,n.m,r,null),To(n,r);yl(n)&&r!=Mr&&r!=bo&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,De(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),Na(e),e.L=!0,De(11))):(Tn(n.j,n.m,t,"[Invalid Chunked Response]"),Lt(n),fs(n))}I.fb=function(){if(this.g){var n=rt(this.g),e=this.g.ga();this.C<e.length&&(yi(this),wl(this,n,e),this.i&&n!=4&&zs(this))}};function Ky(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Mr:(t=Number(e.substring(t,s)),isNaN(t)?bo:(s+=1,s+t>e.length?Mr:(e=e.substr(s,t),n.C=s+t,e)))}I.cancel=function(){this.I=!0,Lt(this)};function zs(n){n.Y=Date.now()+n.P,vl(n,n.P)}function vl(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=js(me(n.eb,n),e)}function yi(n){n.B&&(A.clearTimeout(n.B),n.B=null)}I.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(qy(this.j,this.A),this.K!=2&&(Ts(3),De(17)),Lt(this),this.o=2,fs(this)):vl(this,this.Y-n)};function fs(n){n.l.G==0||n.I||Vl(n.l,n)}function Lt(n){yi(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,wa(n.W),ul(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function To(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Eo(t.i,n))){if(t.I=n.N,!n.J&&Eo(t.i,n)&&t.G==3){try{var s=t.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Br(t),bi(t);else break e;Da(t),De(18)}else t.ta=r[1],0<t.ta-t.U&&37500>r[2]&&t.N&&t.A==0&&!t.v&&(t.v=js(me(t.ab,t),6e3));if(1>=xl(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else Mt(t,11)}else if((n.J||t.g==n)&&Br(t),!Pr(e))for(r=t.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const h=u[3];h!=null&&(t.ma=h,t.h.info("VER="+t.ma));const l=u[4];l!=null&&(t.za=l,t.h.info("SVER="+t.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.K=s,t.h.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(Ce(m,"spdy")||Ce(m,"quic")||Ce(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Sa(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,q(s.F,s.D,b))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),s=t;var o=n;if(s.oa=$l(s,s.H?s.la:null,s.W),o.J){kl(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(yi(a),zs(a)),s.g=o}else Ul(s);0<t.l.length&&Ii(t)}else u[0]!="stop"&&u[0]!="close"||Mt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Mt(t,7):Aa(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}Ts(4)}catch{}}function Gy(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(fo(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function Ta(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(fo(n)||typeof n=="string")Wh(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(fo(n)||typeof n=="string"){t=[];for(var s=n.length,r=0;r<s;r++)t.push(r)}else for(r in t=[],s=0,n)t[s++]=r;s=Gy(n),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}}function Qn(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var s=0;s<t;s+=2)this.set(arguments[s],arguments[s+1])}else if(n)if(n instanceof Qn)for(t=n.T(),s=0;s<t.length;s++)this.set(t[s],n.get(t[s]));else for(s in n)this.set(s,n[s])}I=Qn.prototype;I.R=function(){Ea(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};I.T=function(){return Ea(this),this.g.concat()};function Ea(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var s=n.g[e];zt(n.h,s)&&(n.g[t++]=s),e++}n.g.length=t}if(n.i!=n.g.length){var r={};for(t=e=0;e<n.g.length;)s=n.g[e],zt(r,s)||(n.g[t++]=s,r[s]=1),e++;n.g.length=t}}I.get=function(n,e){return zt(this.h,n)?this.h[n]:e};I.set=function(n,e){zt(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};I.forEach=function(n,e){for(var t=this.T(),s=0;s<t.length;s++){var r=t[s],i=this.get(r);n.call(e,i,r,this)}};function zt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var _l=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zy(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ht(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof Ht){this.g=e!==void 0?e:n.g,Ur(this,n.j),this.s=n.s,Fr(this,n.i),Vr(this,n.m),this.l=n.l,e=n.h;var t=new Es;t.i=e.i,e.g&&(t.g=new Qn(e.g),t.h=e.h),cu(this,t),this.o=n.o}else n&&(t=String(n).match(_l))?(this.g=!!e,Ur(this,t[1]||"",!0),this.s=ps(t[2]||""),Fr(this,t[3]||"",!0),Vr(this,t[4]),this.l=ps(t[5]||"",!0),cu(this,t[6]||"",!0),this.o=ps(t[7]||"")):(this.g=!!e,this.h=new Es(null,this.g))}Ht.prototype.toString=function(){var n=[],e=this.j;e&&n.push(hs(e,uu,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(hs(e,uu,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(hs(t,t.charAt(0)=="/"?Xy:Yy,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",hs(t,Zy)),n.join("")};function ut(n){return new Ht(n)}function Ur(n,e,t){n.j=t?ps(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Fr(n,e,t){n.i=t?ps(e,!0):e}function Vr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function cu(n,e,t){e instanceof Es?(n.h=e,ew(n.h,n.g)):(t||(e=hs(e,Jy)),n.h=new Es(e,n.g))}function q(n,e,t){n.h.set(e,t)}function wi(n){return q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Hy(n){return n instanceof Ht?ut(n):new Ht(n,void 0)}function Wy(n,e,t,s){var r=new Ht(null,void 0);return n&&Ur(r,n),e&&Fr(r,e),t&&Vr(r,t),s&&(r.l=s),r}function ps(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function hs(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Qy),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Qy(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var uu=/[#\/\?@]/g,Yy=/[#\?:]/g,Xy=/[#\?]/g,Jy=/[#\?@]/g,Zy=/#/g;function Es(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Dt(n){n.g||(n.g=new Qn,n.h=0,n.i&&zy(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}I=Es.prototype;I.add=function(n,e){Dt(this),this.i=null,n=Yn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function bl(n,e){Dt(n),e=Yn(n,e),zt(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,zt(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&Ea(n)))}function Il(n,e){return Dt(n),e=Yn(n,e),zt(n.g.h,e)}I.forEach=function(n,e){Dt(this),this.g.forEach(function(t,s){Wh(t,function(r){n.call(e,r,s,this)},this)},this)};I.T=function(){Dt(this);for(var n=this.g.R(),e=this.g.T(),t=[],s=0;s<e.length;s++)for(var r=n[s],i=0;i<r.length;i++)t.push(e[s]);return t};I.R=function(n){Dt(this);var e=[];if(typeof n=="string")Il(this,n)&&(e=Zc(e,this.g.get(Yn(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Zc(e,n[t])}return e};I.set=function(n,e){return Dt(this),this.i=null,n=Yn(this,n),Il(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};I.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function Tl(n,e,t){bl(n,e),0<t.length&&(n.i=null,n.g.set(Yn(n,e),ua(t)),n.h+=t.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var s=e[t],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),n.push(o)}}return this.i=n.join("&")};function Yn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ew(n,e){e&&!n.j&&(Dt(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(bl(this,s),Tl(this,r,t))},n)),n.j=e}var tw=class{constructor(n,e){this.h=n,this.g=e}};function El(n){this.l=n||nw,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ea&&A.g.Ea()&&A.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nw=10;function Sl(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function xl(n){return n.h?1:n.g?n.g.size:0}function Eo(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Sa(n,e){n.g?n.g.add(e):n.h=e}function kl(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}El.prototype.cancel=function(){if(this.i=Cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Cl(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return ua(n.i)}function xa(){}xa.prototype.stringify=function(n){return A.JSON.stringify(n,void 0)};xa.prototype.parse=function(n){return A.JSON.parse(n,void 0)};function sw(){this.g=new xa}function rw(n,e,t){const s=t||"";try{Ta(n,function(r,i){let o=r;qs(r)&&(o=ma(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function iw(n,e){const t=new fi;if(A.Image){const s=new Image;s.onload=pr(mr,t,s,"TestLoadImage: loaded",!0,e),s.onerror=pr(mr,t,s,"TestLoadImage: error",!1,e),s.onabort=pr(mr,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=pr(mr,t,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function mr(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hs(n){this.l=n.$b||null,this.j=n.ib||!1}we(Hs,_a);Hs.prototype.g=function(){return new vi(this.l,this.j)};Hs.prototype.i=function(n){return function(){return n}}({});function vi(n,e){he.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=ka,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}we(vi,he);var ka=0;I=vi.prototype;I.open=function(n,e){if(this.readyState!=ka)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ss(this)};I.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||A).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ws(this)),this.readyState=ka};I.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof A.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Al(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Al(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}I.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ws(this):Ss(this),this.readyState==3&&Al(this)}};I.Ua=function(n){this.g&&(this.response=this.responseText=n,Ws(this))};I.Ta=function(n){this.g&&(this.response=n,Ws(this))};I.ha=function(){this.g&&Ws(this)};function Ws(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ss(n)}I.setRequestHeader=function(n,e){this.v.append(n,e)};I.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ss(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var ow=A.JSON.parse;function te(n){he.call(this),this.headers=new Qn,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dl,this.K=this.L=!1}we(te,he);var Dl="",aw=/^https?$/i,cw=["POST","PUT"];I=te.prototype;I.ea=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_o.g(),this.C=this.u?au(this.u):au(_o),this.g.onreadystatechange=me(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){hu(this,i);return}n=t||"";const r=new Qn(this.headers);s&&Ta(s,function(i,o){r.set(o,i)}),s=vy(r.T()),t=A.FormData&&n instanceof A.FormData,!(0<=Hh(cw,e))||s||t||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ol(this),0<this.B&&((this.K=uw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=me(this.pa,this)):this.A=va(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){hu(this,i)}};function uw(n){return An&&Ey()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function hw(n){return n.toLowerCase()=="content-type"}I.pa=function(){typeof ca!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))};function hu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Nl(n),_i(n)}function Nl(n){n.D||(n.D=!0,ye(n,"complete"),ye(n,"error"))}I.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ye(this,"complete"),ye(this,"abort"),_i(this))};I.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_i(this,!0)),te.Z.M.call(this)};I.Fa=function(){this.s||(this.F||this.v||this.l?Rl(this):this.cb())};I.cb=function(){Rl(this)};function Rl(n){if(n.h&&typeof ca!="undefined"&&(!n.C[1]||rt(n)!=4||n.ba()!=2)){if(n.v&&rt(n)==4)va(n.Fa,0,n);else if(ye(n,"readystatechange"),rt(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(_l)[1]||null;if(!r&&A.self&&A.self.location){var i=A.self.location.protocol;r=i.substr(0,i.length-1)}s=!aw.test(r?r.toLowerCase():"")}t=s}if(t)ye(n,"complete"),ye(n,"success");else{n.m=6;try{var o=2<rt(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",Nl(n)}}finally{_i(n)}}}}function _i(n,e){if(n.g){Ol(n);const t=n.g,s=n.C[0]?Or:null;n.g=null,n.C=null,e||ye(n,"ready");try{t.onreadystatechange=s}catch{}}}function Ol(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}function rt(n){return n.g?n.g.readyState:0}I.ba=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}};I.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),ow(e)}};function lu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Dl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}I.Da=function(){return this.m};I.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function lw(n){let e="";return ha(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Ca(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=lw(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):q(n,e,t))}function as(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Pl(n){this.za=0,this.l=[],this.h=new fi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=as("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=as("baseRetryDelayMs",5e3,n),this.$a=as("retryDelaySeedMs",1e4,n),this.Ya=as("forwardChannelMaxRetries",2,n),this.ra=as("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new El(n&&n.concurrentRequestLimit),this.Ca=new sw,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}I=Pl.prototype;I.ma=8;I.G=1;function Aa(n){if(Ll(n),n.G==3){var e=n.V++,t=ut(n.F);q(t,"SID",n.J),q(t,"RID",e),q(t,"TYPE","terminate"),Qs(n,t),e=new Gs(n,n.h,e,void 0),e.K=2,e.v=wi(ut(t)),t=!1,A.navigator&&A.navigator.sendBeacon&&(t=A.navigator.sendBeacon(e.v.toString(),"")),!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=jl(e.l,null),e.g.ea(e.v)),e.F=Date.now(),zs(e)}ql(n)}I.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function bi(n){n.g&&(Na(n),n.g.cancel(),n.g=null)}function Ll(n){bi(n),n.u&&(A.clearTimeout(n.u),n.u=null),Br(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function to(n,e){n.l.push(new tw(n.Za++,e)),n.G==3&&Ii(n)}function Ii(n){Sl(n.i)||n.m||(n.m=!0,ya(n.Ha,n),n.C=0)}function dw(n,e){return xl(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=js(me(n.Ha,n,e),Bl(n,n.C)),n.C++,!0)}I.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const r=new Gs(this,this.h,n,void 0);let i=this.s;if(this.P&&(i?(i=Qh(i),Yh(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var s=this.l[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Ml(this,r,e),t=ut(this.F),q(t,"RID",n),q(t,"CVER",22),this.D&&q(t,"X-HTTP-Session-Id",this.D),Qs(this,t),this.o&&i&&Ca(t,this.o,i),Sa(this.i,r),this.Ra&&q(t,"TYPE","init"),this.ja?(q(t,"$req",e),q(t,"SID","null"),r.$=!0,Io(r,t,null)):Io(r,t,e),this.G=2}}else this.G==3&&(n?du(this,n):this.l.length==0||Sl(this.i)||du(this))};function du(n,e){var t;e?t=e.m:t=n.V++;const s=ut(n.F);q(s,"SID",n.J),q(s,"RID",t),q(s,"AID",n.U),Qs(n,s),n.o&&n.s&&Ca(s,n.o,n.s),t=new Gs(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=Ml(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),Sa(n.i,t),Io(t,s,e)}function Qs(n,e){n.j&&Ta({},function(t,s){q(e,s,t)})}function Ml(n,e,t){t=Math.min(n.l.length,t);var s=n.j?me(n.j.Oa,n.j,n):null;e:{var r=n.l;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=r[c].h;const h=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{rw(h,o,"req"+u+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,s}function Ul(n){n.g||n.u||(n.Y=1,ya(n.Ga,n),n.A=0)}function Da(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=js(me(n.Ga,n),Bl(n,n.A)),n.A++,!0)}I.Ga=function(){if(this.u=null,Fl(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=js(me(this.bb,this),n)}};I.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,De(10),bi(this),Fl(this))};function Na(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function Fl(n){n.g=new Gs(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=ut(n.oa);q(e,"RID","rpc"),q(e,"SID",n.J),q(e,"CI",n.N?"0":"1"),q(e,"AID",n.U),Qs(n,e),q(e,"TYPE","xmlhttp"),n.o&&n.s&&Ca(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=wi(ut(e)),t.s=null,t.U=!0,ml(t,n)}I.ab=function(){this.v!=null&&(this.v=null,bi(this),Da(this),De(19))};function Br(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function Vl(n,e){var t=null;if(n.g==e){Br(n),Na(n),n.g=null;var s=2}else if(Eo(n.i,e))t=e.D,kl(n.i,e),s=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=pi(),ye(s,new dl(s,t,e,r)),Ii(n)}else Ul(n);else if(r=e.o,r==3||r==0&&0<n.I||!(s==1&&dw(n,e)||s==2&&Da(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),r){case 1:Mt(n,5);break;case 4:Mt(n,10);break;case 3:Mt(n,6);break;default:Mt(n,2)}}}function Bl(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function Mt(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var s=me(n.jb,n);t||(t=new Ht("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Ur(t,"https"),wi(t)),iw(t.toString(),s)}else De(2);n.G=0,n.j&&n.j.va(e),ql(n),Ll(n)}I.jb=function(n){n?(this.h.info("Successfully pinged google.com"),De(2)):(this.h.info("Failed to ping google.com"),De(1))};function ql(n){n.G=0,n.I=-1,n.j&&((Cl(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,ua(n.l),n.l.length=0),n.j.ua())}function $l(n,e,t){let s=Hy(t);if(s.i!="")e&&Fr(s,e+"."+s.i),Vr(s,s.m);else{const r=A.location;s=Wy(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,t)}return n.aa&&ha(n.aa,function(r,i){q(s,i,r)}),e=n.D,t=n.sa,e&&t&&q(s,e,t),q(s,"VER",n.ma),Qs(n,s),s}function jl(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new te(new Hs({ib:!0})):new te(n.qa),e.L=n.H,e}function Kl(){}I=Kl.prototype;I.xa=function(){};I.wa=function(){};I.va=function(){};I.ua=function(){};I.Oa=function(){};function qr(){if(An&&!(10<=Number(Sy)))throw Error("Environmental error: no available transport.")}qr.prototype.g=function(n,e){return new Fe(n,e)};function Fe(n,e){he.call(this),this.g=new Pl(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Pr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pr(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Xn(this)}we(Fe,he);Fe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),ya(me(n.hb,n,e))),De(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=$l(n,null,n.W),Ii(n)};Fe.prototype.close=function(){Aa(this.g)};Fe.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,to(this.g,e)}else this.v?(e={},e.__data__=ma(n),to(this.g,e)):to(this.g,n)};Fe.prototype.M=function(){this.g.j=null,delete this.j,Aa(this.g),delete this.g,Fe.Z.M.call(this)};function Gl(n){ba.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}we(Gl,ba);function zl(){Ia.call(this),this.status=1}we(zl,Ia);function Xn(n){this.g=n}we(Xn,Kl);Xn.prototype.xa=function(){ye(this.g,"a")};Xn.prototype.wa=function(n){ye(this.g,new Gl(n))};Xn.prototype.va=function(n){ye(this.g,new zl(n))};Xn.prototype.ua=function(){ye(this.g,"b")};qr.prototype.createWebChannel=qr.prototype.g;Fe.prototype.send=Fe.prototype.u;Fe.prototype.open=Fe.prototype.m;Fe.prototype.close=Fe.prototype.close;gi.NO_ERROR=0;gi.TIMEOUT=8;gi.HTTP_ERROR=6;fl.COMPLETE="complete";pl.EventType=Ks;Ks.OPEN="a";Ks.CLOSE="b";Ks.ERROR="c";Ks.MESSAGE="d";he.prototype.listen=he.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.La;te.prototype.getLastErrorCode=te.prototype.Da;te.prototype.getStatus=te.prototype.ba;te.prototype.getResponseJson=te.prototype.Qa;te.prototype.getResponseText=te.prototype.ga;te.prototype.send=te.prototype.ea;var fw=function(){return new qr},pw=function(){return pi()},no=gi,gw=fl,mw=rn,fu={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},yw=Hs,yr=pl,ww=te;const pu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fe.UNAUTHENTICATED=new fe(null),fe.GOOGLE_CREDENTIALS=new fe("google-credentials-uid"),fe.FIRST_PARTY=new fe("first-party-uid"),fe.MOCK_USER=new fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Yo("@firebase/firestore");function So(){return Tt.logLevel}function vw(n){Tt.setLogLevel(n)}function w(n,...e){if(Tt.logLevel<=P.DEBUG){const t=e.map(Ra);Tt.debug(`Firestore (${Jn}): ${n}`,...t)}}function Z(n,...e){if(Tt.logLevel<=P.ERROR){const t=e.map(Ra);Tt.error(`Firestore (${Jn}): ${n}`,...t)}}function xs(n,...e){if(Tt.logLevel<=P.WARN){const t=e.map(Ra);Tt.warn(`Firestore (${Jn}): ${n}`,...t)}}function Ra(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(n="Unexpected state"){const e=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+n;throw Z(e),new Error(e)}function C(n,e){n||T()}function _w(n,e){n||T()}function v(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fe.UNAUTHENTICATED))}shutdown(){}}class Iw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Tw{constructor(e){this.t=e,this.currentUser=fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ae,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ae)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(C(typeof s.accessToken=="string"),new Hl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return C(e===null||typeof e=="string"),new fe(e)}}class Ew{constructor(e,t,s){this.type="FirstParty",this.user=fe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Sw{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new Ew(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kw{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(C(typeof t.token=="string"),this.p=t.token,new xw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.I(s),this.T=s=>t.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.A=-1;class Wl{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Cw(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function D(n,e){return n<e?-1:n>e?1:0}function Dn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function Ql(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ce(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?D(this.nanoseconds,e.nanoseconds):D(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new ce(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function on(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,s){t===void 0?t=0:t>e.length&&T(),s===void 0?s=e.length-t:s>e.length-t&&T(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ks.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ks?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class L extends ks{construct(e,t,s){return new L(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new L(t)}static emptyPath(){return new L([])}}const Aw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends ks{construct(e,t,s){return new ie(e,t,s)}static isValidIdentifier(e){return Aw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ie(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ie(t)}static emptyPath(){return new ie([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(ie.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Dn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ne(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return D(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ne.EMPTY_BYTE_STRING=new ne("");const Nw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(C(!!n),typeof n=="string"){let e=0;const t=Nw.exec(n);if(C(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:W(n.seconds),nanos:W(n.nanos)}}function W(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wt(n){return typeof n=="string"?ne.fromBase64String(n):ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Xl(n){const e=n.mapValue.fields.__previous_value__;return Oa(e)?Xl(e):e}function Cs(n){const e=Et(n.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Qt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n){return n==null}function As(n){return n===0&&1/n==-1/0}function Jl(n){return typeof n=="number"&&Number.isInteger(n)&&!As(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.path=e}static fromPath(e){return new _(L.fromString(e))}static fromName(e){return new _(L.fromString(e).popFirst(5))}static empty(){return new _(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return L.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new L(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function Yt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oa(n)?4:10:T()}function ze(n,e){if(n===e)return!0;const t=Yt(n);if(t!==Yt(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cs(n).isEqual(Cs(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Et(s.timestampValue),o=Et(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Wt(s.bytesValue).isEqual(Wt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return W(s.geoPointValue.latitude)===W(r.geoPointValue.latitude)&&W(s.geoPointValue.longitude)===W(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return W(s.integerValue)===W(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=W(s.doubleValue),o=W(r.doubleValue);return i===o?As(i)===As(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Dn(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(gu(i)!==gu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ze(i[a],o[a])))return!1;return!0}(n,e);default:return T()}}function Ds(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function Rn(n,e){if(n===e)return 0;const t=Yt(n),s=Yt(e);if(t!==s)return D(t,s);switch(t){case 0:return 0;case 1:return D(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=W(r.integerValue||r.doubleValue),a=W(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return mu(n.timestampValue,e.timestampValue);case 4:return mu(Cs(n),Cs(e));case 5:return D(n.stringValue,e.stringValue);case 6:return function(r,i){const o=Wt(r),a=Wt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=D(o[c],a[c]);if(u!==0)return u}return D(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=D(W(r.latitude),W(i.latitude));return o!==0?o:D(W(r.longitude),W(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Rn(o[c],a[c]);if(u)return u}return D(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const l=D(a[h],u[h]);if(l!==0)return l;const d=Rn(o[a[h]],c[u[h]]);if(d!==0)return d}return D(a.length,u.length)}(n.mapValue,e.mapValue);default:throw T()}}function mu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return D(n,e);const t=Et(n),s=Et(e),r=D(t.seconds,s.seconds);return r!==0?r:D(t.nanos,s.nanos)}function xn(n){return xo(n)}function xo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=Et(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Wt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,_.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=xo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${xo(s.fields[a])}`;return i+"}"}(n.mapValue):T();var e,t}function $r(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ko(n){return!!n&&"integerValue"in n}function Ti(n){return!!n&&"arrayValue"in n}function yu(n){return!!n&&"nullValue"in n}function wu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Sr(n){return!!n&&"mapValue"in n}function gs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return on(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=gs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gs(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Sr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(t)}setAll(e){let t=ie.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=gs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Sr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Sr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){on(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new _e(gs(this.value))}}function Zl(n){const e=[];return on(n.fields,(t,s)=>{const r=new ie([t]);if(Sr(s)){const i=Zl(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,s,r,i,o){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new K(e,0,S.min(),S.min(),_e.empty(),0)}static newFoundDocument(e,t,s){return new K(e,1,t,S.min(),s,0)}static newNoDocument(e,t){return new K(e,2,t,S.min(),_e.empty(),0)}static newUnknownDocument(e,t){return new K(e,3,t,S.min(),_e.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof K&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new K(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ed{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}ed.UNKNOWN_ID=-1;class Pw{constructor(e,t){this.fieldPath=e,this.kind=t}}class jr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new jr(0,Ei.min())}}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(S.min(),_.empty(),-1)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function vu(n,e=null,t=[],s=[],r=null,i=null,o=null){return new Lw(n,e,t,s,r,i,o)}function Ys(n){const e=v(n);if(e.P===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+xn(r.value);var r}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),an(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>xn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>xn(s)).join(",")),e.P=t}return e.P}function Mw(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${xn(s.value)}`;var s}).join(", ")}]`),an(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>xn(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>xn(t)).join(",")),`Target(${e})`}function Si(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!Kw(n.orderBy[r],e.orderBy[r]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(t=n.filters[r],s=e.filters[r],t.op!==s.op||!t.field.isEqual(s.field)||!ze(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bu(n.startAt,e.startAt)&&bu(n.endAt,e.endAt)}function Kr(n){return _.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class Ne extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.v(e,t,s):new Uw(e,t,s):t==="array-contains"?new Bw(e,s):t==="in"?new qw(e,s):t==="not-in"?new $w(e,s):t==="array-contains-any"?new jw(e,s):new Ne(e,t,s)}static v(e,t,s){return t==="in"?new Fw(e,s):new Vw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.V(Rn(t,this.value)):t!==null&&Yt(this.value)===Yt(t)&&this.V(Rn(t,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Uw extends Ne{constructor(e,t,s){super(e,t,s),this.key=_.fromName(s.referenceValue)}matches(e){const t=_.comparator(e.key,this.key);return this.V(t)}}class Fw extends Ne{constructor(e,t){super(e,"in",t),this.keys=td("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Vw extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=td("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function td(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>_.fromName(s.referenceValue))}class Bw extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ti(t)&&Ds(t.arrayValue,this.value)}}class qw extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ds(this.value.arrayValue,t)}}class $w extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ds(this.value.arrayValue,t)}}class jw extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ti(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ds(this.value.arrayValue,s))}}class On{constructor(e,t){this.position=e,this.inclusive=t}}class kn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function _u(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=_.comparator(_.fromName(o.referenceValue),t.key):s=Rn(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function bu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function nd(n,e,t,s,r,i,o,a){return new dt(n,e,t,s,r,i,o,a)}function Zn(n){return new dt(n)}function xr(n){return!an(n.limit)&&n.limitType==="F"}function Gr(n){return!an(n.limit)&&n.limitType==="L"}function Pa(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function La(n){for(const e of n.filters)if(e.S())return e.field;return null}function Ma(n){return n.collectionGroup!==null}function Pn(n){const e=v(n);if(e.D===null){e.D=[];const t=La(e),s=Pa(e);if(t!==null&&s===null)t.isKeyField()||e.D.push(new kn(t)),e.D.push(new kn(ie.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new kn(ie.keyField(),i))}}}return e.D}function Ke(n){const e=v(n);if(!e.C)if(e.limitType==="F")e.C=vu(e.path,e.collectionGroup,Pn(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Pn(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new kn(i.field,o))}const s=e.endAt?new On(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new On(e.startAt.position,!e.startAt.inclusive):null;e.C=vu(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.C}function sd(n,e,t){return new dt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Xs(n,e){return Si(Ke(n),Ke(e))&&n.limitType===e.limitType}function rd(n){return`${Ys(Ke(n))}|lt:${n.limitType}`}function Co(n){return`Query(target=${Mw(Ke(n))}; limitType=${n.limitType})`}function Ua(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):_.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of t.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=_u(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,Pn(t),s)||t.endAt&&!function(r,i,o){const a=_u(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,Pn(t),s))}(n,e)}function id(n){return(e,t)=>{let s=!1;for(const r of Pn(n)){const i=Gw(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Gw(n,e,t){const s=n.field.isKeyField()?_.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Rn(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n,e){if(n.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:As(e)?"-0":e}}function ad(n){return{integerValue:""+n}}function cd(n,e){return Jl(e)?ad(e):od(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this._=void 0}}function zw(n,e,t){return n instanceof Ln?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof Xt?hd(n,e):n instanceof Jt?ld(n,e):function(s,r){const i=ud(s,r),o=Iu(i)+Iu(s.k);return ko(i)&&ko(s.k)?ad(o):od(s.O,o)}(n,e)}function Hw(n,e,t){return n instanceof Xt?hd(n,e):n instanceof Jt?ld(n,e):t}function ud(n,e){return n instanceof Mn?ko(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Ln extends xi{}class Xt extends xi{constructor(e){super(),this.elements=e}}function hd(n,e){const t=dd(e);for(const s of n.elements)t.some(r=>ze(r,s))||t.push(s);return{arrayValue:{values:t}}}class Jt extends xi{constructor(e){super(),this.elements=e}}function ld(n,e){let t=dd(e);for(const s of n.elements)t=t.filter(r=>!ze(r,s));return{arrayValue:{values:t}}}class Mn extends xi{constructor(e,t){super(),this.O=e,this.k=t}}function Iu(n){return W(n.integerValue||n.doubleValue)}function dd(n){return Ti(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this.field=e,this.transform=t}}function Ww(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Xt&&s instanceof Xt||t instanceof Jt&&s instanceof Jt?Dn(t.elements,s.elements,ze):t instanceof Mn&&s instanceof Mn?ze(t.k,s.k):t instanceof Ln&&s instanceof Ln}(n.transform,e.transform)}class Qw{constructor(e,t){this.version=e,this.transformResults=t}}class ee{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ee}static exists(e){return new ee(void 0,e)}static updateTime(e){return new ee(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ki{}function Yw(n,e,t){n instanceof Zs?function(s,r,i){const o=s.value.clone(),a=Su(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof cn?function(s,r,i){if(!kr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Su(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Ao(n,e,t){n instanceof Zs?function(s,r,i){if(!kr(s.precondition,r))return;const o=s.value.clone(),a=xu(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Eu(r),o).setHasLocalMutations()}(n,e,t):n instanceof cn?function(s,r,i){if(!kr(s.precondition,r))return;const o=xu(s.fieldTransforms,i,r),a=r.data;a.setAll(fd(s)),a.setAll(o),r.convertToFoundDocument(Eu(r),a).setHasLocalMutations()}(n,e,t):function(s,r){kr(s.precondition,r)&&r.convertToNoDocument(S.min())}(n,e)}function Xw(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=ud(s.transform,r||null);i!=null&&(t==null&&(t=_e.empty()),t.set(s.field,i))}return t||null}function Tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Dn(t,s,(r,i)=>Ww(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function Eu(n){return n.isFoundDocument()?n.version:S.min()}class Zs extends ki{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}}class cn extends ki{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function fd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Su(n,e,t){const s=new Map;C(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Hw(o,a,t[r]))}return s}function xu(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,zw(i,o,e))}return s}class er extends ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Fa extends ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,N;function pd(n){switch(n){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function gd(n){if(n===void 0)return Z("GRPC error has no .code"),f.UNKNOWN;switch(n){case J.OK:return f.OK;case J.CANCELLED:return f.CANCELLED;case J.UNKNOWN:return f.UNKNOWN;case J.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case J.INTERNAL:return f.INTERNAL;case J.UNAVAILABLE:return f.UNAVAILABLE;case J.UNAUTHENTICATED:return f.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case J.NOT_FOUND:return f.NOT_FOUND;case J.ALREADY_EXISTS:return f.ALREADY_EXISTS;case J.PERMISSION_DENIED:return f.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case J.ABORTED:return f.ABORTED;case J.OUT_OF_RANGE:return f.OUT_OF_RANGE;case J.UNIMPLEMENTED:return f.UNIMPLEMENTED;case J.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(N=J||(J={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.comparator=e,this.root=t||pe.EMPTY}insert(e,t){return new X(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(e){return new X(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wr(this.root,e,this.comparator,!1)}getReverseIterator(){return new wr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wr(this.root,e,this.comparator,!0)}}class wr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pe{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:pe.RED,this.left=r!=null?r:pe.EMPTY,this.right=i!=null?i:pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new pe(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return pe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,s,r){return this}insert(n,e,t){return new pe(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.comparator=e,this.data=new X(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ku(this.data.getIterator())}getIteratorFrom(e){return new ku(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof $)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $(this.comparator);return t.data=e,t}}class ku{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function wn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new X(_.comparator);function je(){return Zw}const ev=new X(_.comparator);function Do(){return ev}const tv=new X(_.comparator),nv=new $(_.comparator);function U(...n){let e=nv;for(const t of n)e=e.add(t);return e}const sv=new $(D);function Ci(){return sv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const s=new Map;return s.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,t)),new tr(S.min(),s,Ci(),je(),U())}}class nr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new nr(ne.EMPTY_BYTE_STRING,t,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,s,r){this.M=e,this.removedTargetIds=t,this.key=s,this.$=r}}class md{constructor(e,t){this.targetId=e,this.F=t}}class yd{constructor(e,t,s=ne.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Cu{constructor(){this.B=0,this.L=Du(),this.U=ne.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=U(),t=U(),s=U();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:T()}}),new nr(this.U,this.q,e,t,s)}J(){this.K=!1,this.L=Du()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class rv{constructor(e){this.nt=e,this.st=new Map,this.it=je(),this.rt=Au(),this.ot=new $(D)}ct(e){for(const t of e.M)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ht(e){this.forEachTarget(e,t=>{const s=this.lt(t);switch(e.state){case 0:this.ft(t)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(t);break;case 3:this.ft(t)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),s.W(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((s,r)=>{this.ft(r)&&t(r)})}_t(e){const t=e.targetId,s=e.F.count,r=this.wt(t);if(r){const i=r.target;if(Kr(i))if(s===0){const o=new _(i.path);this.at(t,o,K.newNoDocument(o,S.min()))}else C(s===1);else this.gt(t)!==s&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Kr(a.target)){const c=new _(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,K.newNoDocument(c,e))}i.j&&(t.set(o,i.H()),i.J())}});let s=U();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new tr(e,t,this.ot,this.it,s);return this.it=je(),this.rt=Au(),this.ot=new $(D),r}ut(e,t){if(!this.ft(e))return;const s=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,s),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Et(t.key).add(e))}at(e,t,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Et(t).delete(e)),s&&(this.it=this.it.insert(t,s))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Cu,this.st.set(e,t)),t}Et(e){let t=this.rt.get(e);return t||(t=new $(D),this.rt=this.rt.insert(e,t)),t}ft(e){const t=this.wt(e)!==null;return t||w("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Cu),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Au(){return new X(_.comparator)}function Du(){return new X(_.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ov=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class av{constructor(e,t){this.databaseId=e,this.N=t}}function Ns(n,e){return n.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wd(n,e){return n.N?e.toBase64():e.toUint8Array()}function cv(n,e){return Ns(n,e.toTimestamp())}function ue(n){return C(!!n),S.fromTimestamp(function(e){const t=Et(e);return new ce(t.seconds,t.nanos)}(n))}function Va(n,e){return function(t){return new L(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function vd(n){const e=L.fromString(n);return C(kd(e)),e}function Rs(n,e){return Va(n.databaseId,e.path)}function Je(n,e){const t=vd(e);if(t.get(1)!==n.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _(bd(t))}function No(n,e){return Va(n.databaseId,e)}function _d(n){const e=vd(n);return e.length===4?L.emptyPath():bd(e)}function Os(n){return new L(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bd(n){return C(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Nu(n,e,t){return{name:Rs(n,e),fields:t.value.mapValue.fields}}function Id(n,e,t){const s=Je(n,e.name),r=ue(e.updateTime),i=new _e({mapValue:{fields:e.fields}}),o=K.newFoundDocument(s,r,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function uv(n,e){return"found"in e?function(t,s){C(!!s.found),s.found.name,s.found.updateTime;const r=Je(t,s.found.name),i=ue(s.found.updateTime),o=new _e({mapValue:{fields:s.found.fields}});return K.newFoundDocument(r,i,o)}(n,e):"missing"in e?function(t,s){C(!!s.missing),C(!!s.readTime);const r=Je(t,s.missing),i=ue(s.readTime);return K.newNoDocument(r,i)}(n,e):T()}function hv(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.N?(C(u===void 0||typeof u=="string"),ne.fromBase64String(u||"")):(C(u===void 0||u instanceof Uint8Array),ne.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:gd(c.code);return new y(u,c.message||"")}(o);t=new yd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Je(n,s.document.name),i=ue(s.document.updateTime),o=new _e({mapValue:{fields:s.document.fields}}),a=K.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];t=new Cr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Je(n,s.document),i=s.readTime?ue(s.readTime):S.min(),o=K.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Cr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Je(n,s.document),i=s.removedTargetIds||[];t=new Cr([],i,r,null)}else{if(!("filter"in e))return T();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Jw(r),o=s.targetId;t=new md(o,i)}}return t}function Ps(n,e){let t;if(e instanceof Zs)t={update:Nu(n,e.key,e.value)};else if(e instanceof er)t={delete:Rs(n,e.key)};else if(e instanceof cn)t={update:Nu(n,e.key,e.data),updateMask:yv(e.fieldMask)};else{if(!(e instanceof Fa))return T();t={verify:Rs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ln)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Jt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Mn)return{fieldPath:i.field.canonicalString(),increment:o.k};throw T()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:cv(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(n,e.precondition)),t}function Ro(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?ee.updateTime(ue(r.updateTime)):r.exists!==void 0?ee.exists(r.exists):ee.none()}(e.currentDocument):ee.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)C(o.setToServerValue==="REQUEST_TIME"),a=new Ln;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Xt(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Jt(u)}else"increment"in o?a=new Mn(i,o.increment):T();const c=ie.fromServerFormat(o.fieldPath);return new Js(c,a)}(n,r)):[];if(e.update){e.update.name;const r=Je(n,e.update.name),i=new _e({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Nn(c.map(u=>ie.fromServerFormat(u)))}(e.updateMask);return new cn(r,i,o,t,s)}return new Zs(r,i,t,s)}if(e.delete){const r=Je(n,e.delete);return new er(r,t)}if(e.verify){const r=Je(n,e.verify);return new Fa(r,t)}return T()}function lv(n,e){return n&&n.length>0?(C(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?ue(s.updateTime):ue(r);return i.isEqual(S.min())&&(i=ue(r)),new Qw(i,s.transformResults||[])}(t,e))):[]}function Td(n,e){return{documents:[No(n,e.path)]}}function Ed(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=No(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=No(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(h=>function(l){if(l.op==="=="){if(wu(l.value))return{unaryFilter:{field:vn(l.field),op:"IS_NAN"}};if(yu(l.value))return{unaryFilter:{field:vn(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(wu(l.value))return{unaryFilter:{field:vn(l.field),op:"IS_NOT_NAN"}};if(yu(l.value))return{unaryFilter:{field:vn(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(l.field),op:pv(l.op),value:l.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(t.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:vn(h.field),direction:fv(h.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.N||an(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Sd(n){let e=_d(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){C(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=xd(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(h=>function(l){return new kn(En(l.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(h)));let a=null;t.limit&&(a=function(h){let l;return l=typeof h=="object"?h.value:h,an(l)?null:l}(t.limit));let c=null;t.startAt&&(c=function(h){const l=!!h.before,d=h.values||[];return new On(d,l)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const l=!h.before,d=h.values||[];return new On(d,l)}(t.endAt)),nd(e,r,o,i,a,"F",c,u)}function dv(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function xd(n){return n?n.unaryFilter!==void 0?[mv(n)]:n.fieldFilter!==void 0?[gv(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>xd(e)).reduce((e,t)=>e.concat(t)):T():[]}function fv(n){return iv[n]}function pv(n){return ov[n]}function vn(n){return{fieldPath:n.canonicalString()}}function En(n){return ie.fromServerFormat(n.fieldPath)}function gv(n){return Ne.create(En(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}function mv(n){switch(n.unaryFilter.op){case"IS_NAN":const e=En(n.unaryFilter.field);return Ne.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=En(n.unaryFilter.field);return Ne.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=En(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=En(n.unaryFilter.field);return Ne.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function yv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ru(e)),e=wv(n.get(t),e);return Ru(e)}function wv(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Ru(n){return n+""}function We(n){const e=n.length;if(C(e>=2),e===2)return C(n.charAt(0)===""&&n.charAt(1)===""),L.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&T(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:T()}i=o+2}return new L(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class Pe{constructor(e,t,s){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=s}}Pe.store="owner",Pe.key="owner";class _t{constructor(e,t,s){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=s}}_t.store="mutationQueues",_t.keyPath="userId";class V{constructor(e,t,s,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=s,this.baseMutations=r,this.mutations=i}}V.store="mutations",V.keyPath="batchId",V.userMutationsIndex="userMutationsIndex",V.userMutationsKeyPath=["userId","batchId"];class ve{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,oe(t)]}static key(e,t,s){return[e,oe(t),s]}}ve.store="documentMutations",ve.PLACEHOLDER=new ve;class _v{constructor(e,t){this.path=e,this.readTime=t}}class bv{constructor(e,t){this.path=e,this.version=t}}class H{constructor(e,t,s,r,i,o){this.unknownDocument=e,this.noDocument=t,this.document=s,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}H.store="remoteDocuments",H.readTimeIndex="readTimeIndex",H.readTimeIndexPath="readTime",H.collectionReadTimeIndex="collectionReadTimeIndex",H.collectionReadTimeIndexPath=["parentPath","readTime"];class Qe{constructor(e){this.byteSize=e}}Qe.store="remoteDocumentGlobal",Qe.key="remoteDocumentGlobalKey";class Oe{constructor(e,t,s,r,i,o,a){this.targetId=e,this.canonicalId=t,this.readTime=s,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=a}}Oe.store="targets",Oe.keyPath="targetId",Oe.queryTargetsIndexName="queryTargetsIndex",Oe.queryTargetsKeyPath=["canonicalId","targetId"];class ge{constructor(e,t,s){this.targetId=e,this.path=t,this.sequenceNumber=s}}ge.store="targetDocuments",ge.keyPath=["targetId","path"],ge.documentTargetsIndex="documentTargetsIndex",ge.documentTargetsKeyPath=["path","targetId"];class Le{constructor(e,t,s,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=s,this.targetCount=r}}Le.key="targetGlobalKey",Le.store="targetGlobal";class Bt{constructor(e,t){this.collectionId=e,this.parent=t}}Bt.store="collectionParents",Bt.keyPath=["collectionId","parent"];class ot{constructor(e,t,s,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=s,this.inForeground=r}}ot.store="clientMetadata",ot.keyPath="clientId";class Un{constructor(e,t,s){this.bundleId=e,this.createTime=t,this.version=s}}Un.store="bundles",Un.keyPath="bundleId";class Fn{constructor(e,t,s){this.name=e,this.readTime=t,this.bundledQuery=s}}Fn.store="namedQueries",Fn.keyPath="name";class Ue{constructor(e,t,s){this.indexId=e,this.collectionGroup=t,this.fields=s}}Ue.store="indexConfiguration",Ue.keyPath="indexId",Ue.collectionGroupIndex="collectionGroupIndex",Ue.collectionGroupIndexPath="collectionGroup";class Be{constructor(e,t,s,r,i,o){this.indexId=e,this.uid=t,this.sequenceNumber=s,this.readTime=r,this.documentKey=i,this.largestBatchId=o}}Be.store="indexState",Be.keyPath=["indexId","uid"],Be.sequenceNumberIndex="sequenceNumberIndex",Be.sequenceNumberIndexPath=["uid","sequenceNumber"];class qe{constructor(e,t,s,r,i){this.indexId=e,this.uid=t,this.arrayValue=s,this.directionalValue=r,this.documentKey=i}}qe.store="indexEntries",qe.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],qe.documentKeyIndex="documentKeyIndex",qe.documentKeyIndexPath=["indexId","uid","documentKey"];class re{constructor(e,t,s,r,i,o){this.userId=e,this.collectionPath=t,this.documentId=s,this.collectionGroup=r,this.largestBatchId=i,this.overlayMutation=o}}re.store="documentOverlays",re.keyPath=["userId","collectionPath","documentId"],re.collectionPathOverlayIndex="collectionPathOverlayIndex",re.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],re.collectionGroupOverlayIndex="collectionGroupOverlayIndex",re.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const Cd=[_t.store,V.store,ve.store,H.store,Oe.store,Pe.store,Le.store,ge.store,ot.store,Qe.store,Bt.store,Un.store,Fn.store],Ad=[...Cd,re.store],Iv=[...Ad,Ue.store,Be.store,qe.store];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,s)=>{t(e)})}static reject(e){return new p((t,s)=>{s(e)})}static waitFor(e){return new p((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=p.resolve(!1);for(const s of e)t=t.next(r=>r?p.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ae,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new ms(e,t.error)):this.At.resolve()},this.transaction.onerror=s=>{const r=Ba(s.target.error);this.At.reject(new ms(e,r))}}static open(e,t,s,r){try{return new Ai(t,e.transaction(r,s))}catch(i){throw new ms(t,i)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(w("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ev(t)}}class Ge{constructor(e,t,s){this.name=e,this.version=t,this.bt=s,Ge.vt(qt())===12.2&&Z("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return w("SimpleDb","Removing database:",e),Ot(window.indexedDB.deleteDatabase(e)).toPromise()}static Vt(){if(!gh())return!1;if(Ge.St())return!0;const e=qt(),t=Ge.vt(e),s=0<t&&t<10,r=Ge.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static St(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Ct)==="YES"}static Nt(e,t){return e.store(t)}static vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async xt(e){return this.db||(w("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new ms(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new y(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new y(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new ms(e,o))},r.onupgradeneeded=i=>{w("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.bt.kt(o,r.transaction,i.oldVersion,this.version).next(()=>{w("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Ot&&(this.db.onversionchange=t=>this.Ot(t)),this.db}Mt(e){this.Ot=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.xt(e);const a=Ai.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(u=>(a.Pt(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.Rt,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(w("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Tv{constructor(e){this.$t=e,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(e){this.$t=e}done(){this.Ft=!0}Ut(e){this.Bt=e}delete(){return Ot(this.$t.delete())}}class ms extends y{constructor(e,t){super(f.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function un(n){return n.name==="IndexedDbTransactionError"}class Ev{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(w("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(w("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),Ot(s)}add(e){return w("SimpleDb","ADD",this.store.name,e,e),Ot(this.store.add(e))}get(e){return Ot(this.store.get(e)).next(t=>(t===void 0&&(t=null),w("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return w("SimpleDb","DELETE",this.store.name,e),Ot(this.store.delete(e))}count(){return w("SimpleDb","COUNT",this.store.name),Ot(this.store.count())}qt(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.Kt(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new p((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}Gt(e,t){w("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.jt=!1;const r=this.cursor(s);return this.Kt(r,(i,o,a)=>a.delete())}Qt(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.Kt(r,t)}Wt(e){const t=this.cursor({});return new p((s,r)=>{t.onerror=i=>{const o=Ba(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}Kt(e,t){const s=[];return new p((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new Tv(a),u=t(a.primaryKey,a.value,c);if(u instanceof p){const h=u.catch(l=>(c.done(),p.reject(l)));s.push(h)}c.isDone?r():c.Lt===null?a.continue():a.continue(c.Lt)}}).next(()=>p.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.jt?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ot(n){return new p((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=Ba(s.target.error);t(r)}})}let Ou=!1;function Ba(n){const e=Ge.vt(qt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ou||(Ou=!0,setTimeout(()=>{throw s},0)),s}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends Nd{constructor(e,t){super(),this.zt=e,this.currentSequenceNumber=t}}function le(n,e){const t=v(n);return Ge.Nt(t.zt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Yw(i,e,s[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Ao(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Ao(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const s=e.get(t.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(S.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),U())}isEqual(e){return this.batchId===e.batchId&&Dn(this.mutations,e.mutations,(t,s)=>Tu(t,s))&&Dn(this.baseMutations,e.baseMutations,(t,s)=>Tu(t,s))}}class $a{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){C(e.mutations.length===s.length);let r=tv;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new $a(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,r,i=S.min(),o=S.min(),a=ne.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.Ht=e}}function Od(n,e){let t;if(e.document)t=Id(n.Ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=_.fromSegments(e.noDocument.path),r=en(e.noDocument.readTime);t=K.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return T();{const s=_.fromSegments(e.unknownDocument.path),r=en(e.unknownDocument.version);t=K.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(Ga(e.readTime)),t}function Lu(n,e){const t=Ka(e.readTime),s=e.key.path.popLast().toArray();if(e.isFoundDocument()){const r=function(o,a){return{name:Rs(o,a.key),fields:a.data.value.mapValue.fields,updateTime:Ns(o,a.version.toTimestamp())}}(n.Ht,e),i=e.hasCommittedMutations;return new H(null,null,r,i,t,s)}if(e.isNoDocument()){const r=e.key.path.toArray(),i=Zt(e.version),o=e.hasCommittedMutations;return new H(null,new _v(r,i),null,o,t,s)}if(e.isUnknownDocument()){const r=e.key.path.toArray(),i=Zt(e.version);return new H(new bv(r,i),null,null,!0,t,s)}return T()}function Ka(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ga(n){const e=new ce(n[0],n[1]);return S.fromTimestamp(e)}function Zt(n){const e=n.toTimestamp();return new vv(e.seconds,e.nanoseconds)}function en(n){const e=new ce(n.seconds,n.nanoseconds);return S.fromTimestamp(e)}function bn(n,e){const t=(e.baseMutations||[]).map(i=>Ro(n.Ht,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Ro(n.Ht,i)),r=ce.fromMillis(e.localWriteTimeMs);return new qa(e.batchId,r,t,s)}function ls(n){const e=en(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?en(n.lastLimboFreeSnapshotVersion):S.min();let s;var r;return n.query.documents!==void 0?(C((r=n.query).documents.length===1),s=Ke(Zn(_d(r.documents[0])))):s=function(i){return Ke(Sd(i))}(n.query),new bt(s,n.targetId,0,n.lastListenSequenceNumber,e,t,ne.fromBase64String(n.resumeToken))}function Pd(n,e){const t=Zt(e.snapshotVersion),s=Zt(e.lastLimboFreeSnapshotVersion);let r;r=Kr(e.target)?Td(n.Ht,e.target):Ed(n.Ht,e.target);const i=e.resumeToken.toBase64();return new Oe(e.targetId,Ys(e.target),t,i,e.sequenceNumber,s,r)}function za(n){const e=Sd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sd(e,e.limit,"L"):e}function so(n,e){return new ja(e.largestBatchId,Ro(n.Ht,e.overlayMutation))}function Mu(n,e){const t=e.path.lastSegment();return[n,oe(e.path.popLast()),t]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{getBundleMetadata(e,t){return Uu(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:en(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return Uu(e).put({bundleId:(s=t).id,createTime:Zt(ue(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return Fu(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:za(r.bundledQuery),readTime:en(r.readTime)};var r})}saveNamedQuery(e,t){return Fu(e).put(function(s){return{name:s.name,readTime:Zt(ue(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Uu(n){return le(n,Un.store)}function Fu(n){return le(n,Fn.store)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.O=e,this.userId=t}static Jt(e,t){const s=t.uid||"";return new Ha(e,s)}getOverlay(e,t){return cs(e).get(Mu(this.userId,t)).next(s=>s?so(this.O,s):null)}saveOverlays(e,t,s){const r=[];return s.forEach(i=>{const o=new ja(t,i);r.push(this.Yt(e,o))}),p.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(oe(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(cs(e).Gt(re.collectionPathOverlayIndex,a))}),p.waitFor(i)}getOverlaysForCollection(e,t,s){const r=new Map,i=oe(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return cs(e).qt(re.collectionPathOverlayIndex,o).next(a=>{for(const c of a){const u=so(this.O,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=new Map;let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return cs(e).Qt({index:re.collectionGroupOverlayIndex,range:a},(c,u,h)=>{const l=so(this.O,u);i.size<r||l.largestBatchId===o?(i.set(l.getKey(),l),o=l.largestBatchId):h.done()}).next(()=>i)}Yt(e,t){return cs(e).put(function(s,r,i){const[o,a,c]=Mu(r,i.mutation.key);return new re(r,a,c,i.mutation.key.getCollectionGroup(),i.largestBatchId,Ps(s.Ht,i.mutation))}(this.O,this.userId,t))}}function cs(n){return le(n,re.store)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){}Xt(e,t){this.Zt(e,t),t.te()}Zt(e,t){if("nullValue"in e)this.ee(t,5);else if("booleanValue"in e)this.ee(t,10),t.ne(e.booleanValue?1:0);else if("integerValue"in e)this.ee(t,15),t.ne(W(e.integerValue));else if("doubleValue"in e){const s=W(e.doubleValue);isNaN(s)?this.ee(t,13):(this.ee(t,15),As(s)?t.ne(0):t.ne(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ee(t,20),typeof s=="string"?t.se(s):(t.se(`${s.seconds||""}`),t.ne(s.nanos||0))}else if("stringValue"in e)this.ie(e.stringValue,t),this.re(t);else if("bytesValue"in e)this.ee(t,30),t.oe(Wt(e.bytesValue)),this.re(t);else if("referenceValue"in e)this.ce(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.ee(t,45),t.ne(s.latitude||0),t.ne(s.longitude||0)}else"mapValue"in e?ze(e,Ow)?this.ee(t,Number.MAX_SAFE_INTEGER):(this.ue(e.mapValue,t),this.re(t)):"arrayValue"in e?(this.ae(e.arrayValue,t),this.re(t)):T()}ie(e,t){this.ee(t,25),this.he(e,t)}he(e,t){t.se(e)}ue(e,t){const s=e.fields||{};this.ee(t,55);for(const r of Object.keys(s))this.ie(r,t),this.Zt(s[r],t)}ae(e,t){const s=e.values||[];this.ee(t,50);for(const r of s)this.Zt(r,t)}ce(e,t){this.ee(t,37),_.fromName(e).path.forEach(s=>{this.ee(t,60),this.he(s,t)})}ee(e,t){e.ne(t)}re(e){e.ne(2)}}zr.le=new zr;function xv(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Vu(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=xv(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class kv{constructor(){this.buffer=new Uint8Array(1024),this.position=0}fe(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.de(s.value),s=t.next();this._e()}we(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.me(s.value),s=t.next();this.ge()}ye(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.de(s);else if(s<2048)this.de(960|s>>>6),this.de(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.de(480|s>>>12),this.de(128|63&s>>>6),this.de(128|63&s);else{const r=t.codePointAt(0);this.de(240|r>>>18),this.de(128|63&r>>>12),this.de(128|63&r>>>6),this.de(128|63&r)}}this._e()}pe(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.me(s);else if(s<2048)this.me(960|s>>>6),this.me(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.me(480|s>>>12),this.me(128|63&s>>>6),this.me(128|63&s);else{const r=t.codePointAt(0);this.me(240|r>>>18),this.me(128|63&r>>>12),this.me(128|63&r>>>6),this.me(128|63&r)}}this.ge()}Ie(e){const t=this.Ee(e),s=Vu(t);this.Te(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ae(e){const t=this.Ee(e),s=Vu(t);this.Te(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Re(){this.Pe(255),this.Pe(255)}be(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Te(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ve(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}de(e){const t=255&e;t===0?(this.Pe(0),this.Pe(255)):t===255?(this.Pe(255),this.Pe(0)):this.Pe(t)}me(e){const t=255&e;t===0?(this.ve(0),this.ve(255)):t===255?(this.ve(255),this.ve(0)):this.ve(e)}_e(){this.Pe(0),this.Pe(1)}ge(){this.ve(0),this.ve(1)}Pe(e){this.Te(1),this.buffer[this.position++]=e}ve(e){this.Te(1),this.buffer[this.position++]=~e}Te(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class Cv{constructor(e){this.Se=e}oe(e){this.Se.fe(e)}se(e){this.Se.ye(e)}ne(e){this.Se.Ie(e)}te(){this.Se.Re()}}class Av{constructor(e){this.Se=e}oe(e){this.Se.we(e)}se(e){this.Se.pe(e)}ne(e){this.Se.Ae(e)}te(){this.Se.be()}}class Bu{constructor(){this.Se=new kv,this.De=new Cv(this.Se),this.Ce=new Av(this.Se)}seed(e){this.Se.seed(e)}Ne(e){return e===0?this.De:this.Ce}Ve(){return this.Se.Ve()}reset(){this.Se.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}}function io(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=_.comparator(n.documentKey,e.documentKey),t!==0?t:(t=qu(n.arrayValue,e.arrayValue),t!==0?t:qu(n.directionalValue,e.directionalValue)))}function qu(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.xe=new Wa}addToCollectionParentIndex(e,t){return this.xe.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.xe.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t,s){return p.resolve(U())}getFieldIndex(e,t){return p.resolve(null)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}updateCollectionGroup(e,t,s){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class Wa{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new $(L.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.user=e,this.ke=new Wa,this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.ke.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.ke.add(t)});const i={collectionId:s,parent:oe(r)};return $u(e).put(i)}return p.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[Ql(t),""],!1,!0);return $u(e).qt(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(We(o.parent))}return s})}addFieldIndex(e,t){const s=_r(e),r=function(i){return new Ue(i.indexId,i.collectionGroup,i.fields.map(o=>[o.fieldPath.canonicalString(),o.kind]))}(t);return delete r.indexId,s.add(r).next()}deleteFieldIndex(e,t){const s=_r(e),r=br(e),i=vr(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t,s){return p.resolve(U())}getFieldIndex(e,t){return p.resolve(null)}Oe(e,t){const s=new Bu;for(const r of function(i){return i.fields.filter(o=>o.kind!==2)}(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.Ne(r.kind);zr.le.Xt(i,o)}return s.Ve()}Me(e){const t=new Bu;return zr.le.Xt(e,t.Ne(0)),t.Ve()}getFieldIndexes(e,t){const s=_r(e),r=br(e);return(t?s.qt(Ue.collectionGroupIndex,IDBKeyRange.bound(t,t)):s.qt()).next(i=>{const o=[];return p.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(u,h){const l=h?new jr(h.sequenceNumber,new Ei(en(h.readTime),new _(We(h.documentKey)),h.largestBatchId)):jr.empty(),d=u.fields.map(([g,m])=>new Pw(ie.fromServerFormat(g),m));return new ed(u.indexId,u.collectionGroup,d,l)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>s.indexState.sequenceNumber-r.indexState.sequenceNumber),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=_r(e),i=br(e);return this.$e(e).next(o=>r.qt(Ue.collectionGroupIndex,IDBKeyRange.bound(t,t)).next(a=>p.forEach(a,c=>i.put(function(u,h,l,d){return new Be(u,h.uid||"",l,Zt(d.readTime),oe(d.documentKey.path),d.largestBatchId)}(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return p.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?p.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),p.forEach(a,c=>this.Fe(e,r,c).next(u=>{const h=this.Be(i,c);return u.isEqual(h)?p.resolve():this.Le(e,i,u,h)}))))})}Ue(e,t,s){return vr(e).put(new qe(s.indexId,this.uid,s.arrayValue,s.directionalValue,oe(t.key.path)))}qe(e,t,s){return vr(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,oe(t.key.path)])}Fe(e,t,s){const r=vr(e);let i=new $(io);return r.Qt({index:qe.documentKeyIndex,range:IDBKeyRange.only([s.indexId,this.uid,oe(t.path)])},(o,a)=>{i=i.add(new ro(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Be(e,t){let s=new $(io);const r=this.Oe(t,e);if(r==null)return s;const i=function(o){return o.fields.find(a=>a.kind===2)}(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ti(o))for(const a of o.arrayValue.values||[])s=s.add(new ro(t.indexId,e.key,this.Me(a),r))}else s=s.add(new ro(t.indexId,e.key,new Uint8Array,r));return s}Le(e,t,s,r){w("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(o,a,c,u,h){const l=o.getIterator(),d=a.getIterator();let g=wn(l),m=wn(d);for(;g||m;){let b=!1,E=!1;if(g&&m){const M=c(g,m);M<0?E=!0:M>0&&(b=!0)}else g!=null?E=!0:b=!0;b?(u(m),m=wn(d)):E?(h(g),g=wn(l)):(g=wn(l),m=wn(d))}}(s,r,io,o=>{i.push(this.Ue(e,t,o))},o=>{i.push(this.qe(e,t,o))}),p.waitFor(i)}$e(e){let t=1;return br(e).Qt({index:Be.sequenceNumberIndex,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}}function $u(n){return le(n,Bt.store)}function vr(n){return le(n,qe.store)}function _r(n){return le(n,Ue.store)}function br(n){return le(n,Be.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Re{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n,e,t){const s=n.store(V.store),r=n.store(ve.store),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Qt({range:o},(h,l,d)=>(a++,d.delete()));i.push(c.next(()=>{C(a===1)}));const u=[];for(const h of t.mutations){const l=ve.key(e,h.key.path,t.batchId);i.push(r.delete(l)),u.push(h.key)}return p.waitFor(i).next(()=>u)}function Hr(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw T();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(41943040,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);class Qa{constructor(e,t,s,r){this.userId=e,this.O=t,this.indexManager=s,this.referenceDelegate=r,this.Ke={}}static Jt(e,t,s,r){C(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Qa(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return gt(e).Qt({index:V.userMutationsIndex,range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=In(e),o=gt(e);return o.add({}).next(a=>{C(typeof a=="number");const c=new qa(a,t,s,r),u=function(d,g,m){const b=m.baseMutations.map(M=>Ps(d.Ht,M)),E=m.mutations.map(M=>Ps(d.Ht,M));return new V(g,m.batchId,m.localWriteTime.toMillis(),b,E)}(this.O,this.userId,c),h=[];let l=new $((d,g)=>D(d.canonicalString(),g.canonicalString()));for(const d of r){const g=ve.key(this.userId,d.key.path,a);l=l.add(d.key.path.popLast()),h.push(o.put(u)),h.push(i.put(g,ve.PLACEHOLDER))}return l.forEach(d=>{h.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Ke[a]=c.keys()}),p.waitFor(h).next(()=>c)})}lookupMutationBatch(e,t){return gt(e).get(t).next(s=>s?(C(s.userId===this.userId),bn(this.O,s)):null)}Ge(e,t){return this.Ke[t]?p.resolve(this.Ke[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.Ke[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return gt(e).Qt({index:V.userMutationsIndex,range:r},(o,a,c)=>{a.userId===this.userId&&(C(a.batchId>=s),i=bn(this.O,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return gt(e).Qt({index:V.userMutationsIndex,range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return gt(e).qt(V.userMutationsIndex,t).next(s=>s.map(r=>bn(this.O,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=ve.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return In(e).Qt({range:r},(o,a,c)=>{const[u,h,l]=o,d=We(h);if(u===this.userId&&t.path.isEqual(d))return gt(e).get(l).next(g=>{if(!g)throw T();C(g.userId===this.userId),i.push(bn(this.O,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new $(D);const r=[];return t.forEach(i=>{const o=ve.prefixForPath(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=In(e).Qt({range:a},(u,h,l)=>{const[d,g,m]=u,b=We(g);d===this.userId&&i.path.isEqual(b)?s=s.add(m):l.done()});r.push(c)}),p.waitFor(r).next(()=>this.je(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=ve.prefixForPath(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new $(D);return In(e).Qt({range:o},(c,u,h)=>{const[l,d,g]=c,m=We(d);l===this.userId&&s.isPrefixOf(m)?m.length===r&&(a=a.add(g)):h.done()}).next(()=>this.je(e,a))}je(e,t){const s=[],r=[];return t.forEach(i=>{r.push(gt(e).get(i).next(o=>{if(o===null)throw T();C(o.userId===this.userId),s.push(bn(this.O,o))}))}),p.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return Ld(e.zt,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.Qe(t.batchId)}),p.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}Qe(e){delete this.Ke[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return p.resolve();const s=IDBKeyRange.lowerBound(ve.prefixForUser(this.userId)),r=[];return In(e).Qt({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=We(i[1]);r.push(c)}else a.done()}).next(()=>{C(r.length===0)})})}containsKey(e,t){return Md(e,this.userId,t)}We(e){return Ud(e).get(this.userId).next(t=>t||new _t(this.userId,-1,""))}}function Md(n,e,t){const s=ve.prefixForPath(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return In(n).Qt({range:i,jt:!0},(a,c,u)=>{const[h,l,d]=a;h===e&&l===r&&(o=!0),u.done()}).next(()=>o)}function gt(n){return le(n,V.store)}function In(n){return le(n,ve.store)}function Ud(n){return le(n,_t.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new tn(0)}static Je(){return new tn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t){this.referenceDelegate=e,this.O=t}allocateTargetId(e){return this.Ye(e).next(t=>{const s=new tn(t.highestTargetId);return t.highestTargetId=s.next(),this.Xe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ye(e).next(t=>S.fromTimestamp(new ce(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ye(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Ye(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Xe(e,r)))}addTargetData(e,t){return this.Ze(e,t).next(()=>this.Ye(e).next(s=>(s.targetCount+=1,this.tn(t,s),this.Xe(e,s))))}updateTargetData(e,t){return this.Ze(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>_n(e).delete(t.targetId)).next(()=>this.Ye(e)).next(s=>(C(s.targetCount>0),s.targetCount-=1,this.Xe(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return _n(e).Qt((o,a)=>{const c=ls(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>p.waitFor(i)).next(()=>r)}forEachTarget(e,t){return _n(e).Qt((s,r)=>{const i=ls(r);t(i)})}Ye(e){return Ku(e).get(Le.key).next(t=>(C(t!==null),t))}Xe(e,t){return Ku(e).put(Le.key,t)}Ze(e,t){return _n(e).put(Pd(this.O,t))}tn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Ye(e).next(t=>t.targetCount)}getTargetData(e,t){const s=Ys(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return _n(e).Qt({range:r,index:Oe.queryTargetsIndexName},(o,a,c)=>{const u=ls(a);Si(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=wt(e);return t.forEach(o=>{const a=oe(o.path);r.push(i.put(new ge(s,a))),r.push(this.referenceDelegate.addReference(e,s,o))}),p.waitFor(r)}removeMatchingKeys(e,t,s){const r=wt(e);return p.forEach(t,i=>{const o=oe(i.path);return p.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=wt(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=wt(e);let i=U();return r.Qt({range:s,jt:!0},(o,a,c)=>{const u=We(o[1]),h=new _(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const s=oe(t.path),r=IDBKeyRange.bound([s],[Ql(s)],!1,!0);let i=0;return wt(e).Qt({index:ge.documentTargetsIndex,jt:!0,range:r},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Tt(e,t){return _n(e).get(t).next(s=>s?ls(s):null)}}function _n(n){return le(n,Oe.store)}function Ku(n){return le(n,Le.store)}function wt(n){return le(n,ge.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==Dd)throw n;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu([n,e],[t,s]){const r=D(n,t);return r===0?D(e,s):r}class Ov{constructor(e){this.en=e,this.buffer=new $(Gu),this.nn=0}sn(){return++this.nn}rn(e){const t=[e,this.sn()];if(this.buffer.size<this.en)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Gu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pv{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.on=!1,this.cn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.un(e)}stop(){this.cn&&(this.cn.cancel(),this.cn=null)}get started(){return this.cn!==null}un(e){const t=this.on?3e5:6e4;w("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.cn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.cn=null,this.on=!0;try{await e.collectGarbage(this.garbageCollector)}catch(s){un(s)?w("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",s):await hn(s)}await this.un(e)})}}class Lv{constructor(e,t){this.an=e,this.params=t}calculateTargetCount(e,t){return this.an.hn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return p.resolve(Me.A);const s=new Ov(t);return this.an.forEachTarget(e,r=>s.rn(r.sequenceNumber)).next(()=>this.an.ln(e,r=>s.rn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.an.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.an.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(ju)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ju):this.fn(e,t))}getCacheSize(e){return this.an.getCacheSize(e)}fn(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(l=>(l>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${l}`),r=this.params.maximumSequenceNumbersToCollect):r=l,o=Date.now(),this.nthSequenceNumber(e,r))).next(l=>(s=l,a=Date.now(),this.removeTargets(e,s,t))).next(l=>(i=l,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(l=>(u=Date.now(),So()<=P.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${l} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:l})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new Lv(s,r)}(this,t)}hn(e){const t=this.dn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}dn(e){let t=0;return this.ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ln(e,t){return this._n(e,(s,r)=>t(r))}addReference(e,t,s){return Ir(e,s)}removeReference(e,t,s){return Ir(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Ir(e,t)}wn(e,t){return function(s,r){let i=!1;return Ud(s).Wt(o=>Md(s,o,r).next(a=>(a&&(i=!0),p.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this._n(e,(o,a)=>{if(a<=t){const c=this.wn(e,o).next(u=>{if(!u)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,S.min()),wt(e).delete([0,oe(o.path)])))});r.push(c)}}).next(()=>p.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Ir(e,t)}_n(e,t){const s=wt(e);let r,i=Me.A;return s.Qt({index:ge.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Me.A&&t(new _(We(r)),i),i=u,r=c):i=Me.A}).next(()=>{i!==Me.A&&t(new _(We(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ir(n,e){return wt(n).put(function(t,s){return new ge(0,oe(t.path),s)}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t])}else this.inner[s]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),!0;return!1}forEach(e){on(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Yl(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.changes=new es(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,K.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?p.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.O=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return yt(e).put(Tr(t),s)}removeEntry(e,t){const s=yt(e),r=Tr(t);return s.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.mn(e,s)))}getEntry(e,t){return yt(e).get(Tr(t)).next(s=>this.gn(t,s))}yn(e,t){return yt(e).get(Tr(t)).next(s=>({document:this.gn(t,s),size:Hr(s)}))}getEntries(e,t){let s=je();return this.pn(e,t,(r,i)=>{const o=this.gn(r,i);s=s.insert(r,o)}).next(()=>s)}In(e,t){let s=je(),r=new X(_.comparator);return this.pn(e,t,(i,o)=>{const a=this.gn(i,o);s=s.insert(i,a),r=r.insert(i,Hr(o))}).next(()=>({documents:s,En:r}))}pn(e,t,s){if(t.isEmpty())return p.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let o=i.getNext();return yt(e).Qt({range:r},(a,c,u)=>{const h=_.fromSegments(a);for(;o&&_.comparator(o,h)<0;)s(o,null),o=i.getNext();o&&o.isEqual(h)&&(s(o,c),o=i.hasNext()?i.getNext():null),o?u.Ut(o.path.toArray()):u.done()}).next(()=>{for(;o;)s(o,null),o=i.hasNext()?i.getNext():null})}getAll(e,t,s){let r=je();const i=t.length+1,o={};if(s.isEqual(S.min())){const a=t.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=t.toArray(),c=Ka(s);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=H.collectionReadTimeIndex}return yt(e).Qt(o,(a,c,u)=>{if(a.length!==i)return;const h=this.gn(_.fromSegments(a),c);t.isPrefixOf(h.key.path)?r=r.insert(h.key,h):u.done()}).next(()=>r)}newChangeBuffer(e){return new Fv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return zu(e).get(Qe.key).next(t=>(C(!!t),t))}mn(e,t){return zu(e).put(Qe.key,t)}gn(e,t){if(t){const s=Od(this.O,t);if(!(s.isNoDocument()&&s.version.isEqual(S.min())))return s}return K.newInvalidDocument(e)}}class Fv extends Fd{constructor(e,t){super(),this.Tn=e,this.trackRemovals=t,this.An=new es(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new $((i,o)=>D(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.An.get(i);if(o.isValidDocument()){const c=Lu(this.Tn.O,o);r=r.add(i.path.popLast()),s+=Hr(c)-a,t.push(this.Tn.addEntry(e,i,c))}else if(s-=a,this.trackRemovals){const c=Lu(this.Tn.O,o.convertToNoDocument(S.min()));t.push(this.Tn.addEntry(e,i,c))}else t.push(this.Tn.removeEntry(e,i))}),r.forEach(i=>{t.push(this.Tn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Tn.updateMetadata(e,s)),p.waitFor(t)}getFromCache(e,t){return this.Tn.yn(e,t).next(s=>(this.An.set(t,s.size),s.document))}getAllFromCache(e,t){return this.Tn.In(e,t).next(({documents:s,En:r})=>(r.forEach((i,o)=>{this.An.set(i,o)}),s))}}function zu(n){return le(n,Qe.store)}function yt(n){return le(n,H.store)}function Tr(n){return n.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.O=e}kt(e,t,s,r){const i=new Ai("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore(Pe.store)}(e),function(a){a.createObjectStore(_t.store,{keyPath:_t.keyPath}),a.createObjectStore(V.store,{keyPath:V.keyPath,autoIncrement:!0}).createIndex(V.userMutationsIndex,V.userMutationsKeyPath,{unique:!0}),a.createObjectStore(ve.store)}(e),Hu(e),function(a){a.createObjectStore(H.store)}(e));let o=p.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore(ge.store),a.deleteObjectStore(Oe.store),a.deleteObjectStore(Le.store)}(e),Hu(e)),o=o.next(()=>function(a){const c=a.store(Le.store),u=new Le(0,0,S.min().toTimestamp(),0);return c.put(Le.key,u)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store(V.store).qt().next(u=>{a.deleteObjectStore(V.store),a.createObjectStore(V.store,{keyPath:V.keyPath,autoIncrement:!0}).createIndex(V.userMutationsIndex,V.userMutationsKeyPath,{unique:!0});const h=c.store(V.store),l=u.map(d=>h.put(d));return p.waitFor(l)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore(ot.store,{keyPath:ot.keyPath})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Rn(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Qe.store)}(e),this.Pn(i)))),s<7&&r>=7&&(o=o.next(()=>this.bn(i))),s<8&&r>=8&&(o=o.next(()=>this.vn(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(H.store);c.createIndex(H.readTimeIndex,H.readTimeIndexPath,{unique:!1}),c.createIndex(H.collectionReadTimeIndex,H.collectionReadTimeIndexPath,{unique:!1})}(t)})),s<10&&r>=10&&(o=o.next(()=>this.Vn(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Un.store,{keyPath:Un.keyPath})})(e),function(a){a.createObjectStore(Fn.store,{keyPath:Fn.keyPath})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore(re.store,{keyPath:re.keyPath});c.createIndex(re.collectionPathOverlayIndex,re.collectionPathOverlayIndexPath,{unique:!1}),c.createIndex(re.collectionGroupOverlayIndex,re.collectionGroupOverlayIndexPath,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>{(function(a){a.createObjectStore(Ue.store,{keyPath:Ue.keyPath,autoIncrement:!0}).createIndex(Ue.collectionGroupIndex,Ue.collectionGroupIndexPath,{unique:!1}),a.createObjectStore(Be.store,{keyPath:Be.keyPath}).createIndex(Be.sequenceNumberIndex,Be.sequenceNumberIndexPath,{unique:!1}),a.createObjectStore(qe.store,{keyPath:qe.keyPath}).createIndex(qe.documentKeyIndex,qe.documentKeyIndexPath,{unique:!1})})(e)})),o}Pn(e){let t=0;return e.store(H.store).Qt((s,r)=>{t+=Hr(r)}).next(()=>{const s=new Qe(t);return e.store(Qe.store).put(Qe.key,s)})}Rn(e){const t=e.store(_t.store),s=e.store(V.store);return t.qt().next(r=>p.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.qt(V.userMutationsIndex,o).next(a=>p.forEach(a,c=>{C(c.userId===i.userId);const u=bn(this.O,c);return Ld(e,i.userId,u).next(()=>{})}))}))}bn(e){const t=e.store(ge.store),s=e.store(H.store);return e.store(Le.store).get(Le.key).next(r=>{const i=[];return s.Qt((o,a)=>{const c=new L(o),u=function(h){return[0,oe(h)]}(c);i.push(t.get(u).next(h=>h?p.resolve():(l=>t.put(new ge(0,oe(l),r.highestListenSequenceNumber)))(c)))}).next(()=>p.waitFor(i))})}vn(e,t){e.createObjectStore(Bt.store,{keyPath:Bt.keyPath});const s=t.store(Bt.store),r=new Wa,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:oe(c)})}};return t.store(H.store).Qt({jt:!0},(o,a)=>{const c=new L(o);return i(c.popLast())}).next(()=>t.store(ve.store).Qt({jt:!0},([o,a,c],u)=>{const h=We(a);return i(h.popLast())}))}Vn(e){const t=e.store(Oe.store);return t.Qt((s,r)=>{const i=ls(r),o=Pd(this.O,i);return t.put(o)})}}function Hu(n){n.createObjectStore(ge.store,{keyPath:ge.keyPath}).createIndex(ge.documentTargetsIndex,ge.documentTargetsKeyPath,{unique:!0}),n.createObjectStore(Oe.store,{keyPath:Oe.keyPath}).createIndex(Oe.queryTargetsIndexName,Oe.queryTargetsKeyPath,{unique:!0}),n.createObjectStore(Le.store)}const oo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ya{constructor(e,t,s,r,i,o,a,c,u,h,l=12){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Sn=i,this.window=o,this.document=a,this.Dn=u,this.Cn=h,this.schemaVersion=l,this.Nn=null,this.xn=!1,this.isPrimary=!1,this.networkEnabled=!0,this.kn=null,this.inForeground=!1,this.On=null,this.Mn=null,this.$n=Number.NEGATIVE_INFINITY,this.Fn=d=>Promise.resolve(),!Ya.Vt())throw new y(f.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Mv(this,r),this.Bn=t+"main",this.O=new Rd(c),this.Ln=new Ge(this.Bn,this.schemaVersion,new Vv(this.O)),this.Un=new Rv(this.referenceDelegate,this.O),this.qn=function(d){return new Uv(d)}(this.O),this.Kn=new Sv,this.window&&this.window.localStorage?this.Gn=this.window.localStorage:(this.Gn=null,h===!1&&Z("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.jn().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(f.FAILED_PRECONDITION,oo);return this.Qn(),this.Wn(),this.zn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Un.getHighestSequenceNumber(e))}).then(e=>{this.Nn=new Me(e,this.Dn)}).then(()=>{this.xn=!0}).catch(e=>(this.Ln&&this.Ln.close(),Promise.reject(e)))}Hn(e){return this.Fn=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ln.Mt(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Sn.enqueueAndForget(async()=>{this.started&&await this.jn()}))}jn(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Er(e).put(new ot(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.Jn(e).next(t=>{t||(this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)))})}).next(()=>this.Yn(e)).next(t=>this.isPrimary&&!t?this.Xn(e).next(()=>!1):!!t&&this.Zn(e).next(()=>!0))).catch(e=>{if(un(e))return w("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Sn.enqueueRetryable(()=>this.Fn(e)),this.isPrimary=e})}Jn(e){return us(e).get(Pe.key).next(t=>p.resolve(this.ts(t)))}es(e){return Er(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.ss(this.$n,18e5)){this.$n=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=le(t,ot.store);return s.qt().next(r=>{const i=this.rs(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return p.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Gn)for(const t of e)this.Gn.removeItem(this.os(t.clientId))}}zn(){this.Mn=this.Sn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.jn().then(()=>this.ns()).then(()=>this.zn()))}ts(e){return!!e&&e.ownerId===this.clientId}Yn(e){return this.Cn?p.resolve(!0):us(e).get(Pe.key).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new y(f.FAILED_PRECONDITION,oo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Er(e).qt().next(s=>this.rs(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&w("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.xn=!1,this.us(),this.Mn&&(this.Mn.cancel(),this.Mn=null),this.hs(),this.ls(),await this.Ln.runTransaction("shutdown","readwrite",[Pe.store,ot.store],e=>{const t=new Pu(e,Me.A);return this.Xn(t).next(()=>this.es(t))}),this.Ln.close(),this.fs()}rs(e,t){return e.filter(s=>this.ss(s.updateTimeMs,t)&&!this.cs(s.clientId))}ds(){return this.runTransaction("getActiveClients","readonly",e=>Er(e).qt().next(t=>this.rs(t,18e5).map(s=>s.clientId)))}get started(){return this.xn}getMutationQueue(e,t){return Qa.Jt(e,this.O,t,this.referenceDelegate)}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getIndexManager(e){return new Nv(e)}getDocumentOverlayCache(e){return Ha.Jt(this.O,e)}getBundleCache(){return this.Kn}runTransaction(e,t,s){w("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.schemaVersion)===13?Iv:o===12?Ad:o===11?Cd:void T();var o;let a;return this.Ln.runTransaction(e,r,i,c=>(a=new Pu(c,this.Nn?this.Nn.next():Me.A),t==="readwrite-primary"?this.Jn(a).next(u=>!!u||this.Yn(a)).next(u=>{if(!u)throw Z(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)),new y(f.FAILED_PRECONDITION,Dd);return s(a)}).next(u=>this.Zn(a).next(()=>u)):this._s(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}_s(e){return us(e).get(Pe.key).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Cn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(f.FAILED_PRECONDITION,oo)})}Zn(e){const t=new Pe(this.clientId,this.allowTabSynchronization,Date.now());return us(e).put(Pe.key,t)}static Vt(){return Ge.Vt()}Xn(e){const t=us(e);return t.get(Pe.key).next(s=>this.ts(s)?(w("IndexedDbPersistence","Releasing primary lease."),t.delete(Pe.key)):p.resolve())}ss(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(Z(`Detected an update time that is in the future: ${e} > ${s}`),!1))}Qn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.On=()=>{this.Sn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.jn()))},this.document.addEventListener("visibilitychange",this.On),this.inForeground=this.document.visibilityState==="visible")}hs(){this.On&&(this.document.removeEventListener("visibilitychange",this.On),this.On=null)}Wn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.kn=()=>{this.us(),gp()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Sn.enterRestrictedMode(!0),this.Sn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.kn))}ls(){this.kn&&(this.window.removeEventListener("pagehide",this.kn),this.kn=null)}cs(e){var t;try{const s=((t=this.Gn)===null||t===void 0?void 0:t.getItem(this.os(e)))!==null;return w("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return Z("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}us(){if(this.Gn)try{this.Gn.setItem(this.os(this.clientId),String(Date.now()))}catch(e){Z("Failed to set zombie client id.",e)}}fs(){if(this.Gn)try{this.Gn.removeItem(this.os(this.clientId))}catch{}}os(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function us(n){return le(n,Pe.store)}function Er(n){return le(n,ot.store)}function Xa(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t){this.progress=e,this.ws=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,s){this.qn=e,this.gs=t,this.indexManager=s}ys(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,t).next(s=>this.ps(e,t,s))}ps(e,t,s){return this.qn.getEntry(e,t).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Is(e,t){e.forEach((s,r)=>{for(const i of t)i.applyToLocalView(r)})}Es(e,t){return this.qn.getEntries(e,t).next(s=>this.Ts(e,s).next(()=>s))}Ts(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(s=>this.Is(t,s))}As(e,t,s){return function(r){return _.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.Rs(e,t.path):Ma(t)?this.Ps(e,t,s):this.bs(e,t,s)}Rs(e,t){return this.ys(e,new _(t)).next(s=>{let r=Do();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ps(e,t,s){const r=t.collectionGroup;let i=Do();return this.indexManager.getCollectionParents(e,r).next(o=>p.forEach(o,a=>{const c=function(u,h){return new dt(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.bs(e,c,s).next(u=>{u.forEach((h,l)=>{i=i.insert(h,l)})})}).next(()=>i))}bs(e,t,s){let r;return this.qn.getAll(e,t.path,s).next(i=>(r=i,this.gs.getAllMutationBatchesAffectingQuery(e,t))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=r.get(c);u==null&&(u=K.newInvalidDocument(c),r=r.insert(c,u)),Ao(a,u,o.localWriteTime),u.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Ua(t,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.vs=s,this.Vs=r}static Ss(e,t){let s=U(),r=U();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ja(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{Ds(e){this.Cs=e}As(e,t,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(t)||s.isEqual(S.min())?this.Ns(e,t):this.Cs.Es(e,r).next(i=>{const o=this.xs(t,i);return(xr(t)||Gr(t))&&this.ks(t.limitType,o,r,s)?this.Ns(e,t):(So()<=P.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Co(t)),this.Cs.As(e,t,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,t){let s=new $(id(e));return t.forEach((r,i)=>{Ua(e,i)&&(s=s.add(i))}),s}ks(e,t,s,r){if(s.size!==t.size)return!0;const i=e==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(e,t){return So()<=P.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Co(t)),this.Cs.As(e,t,S.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t,s,r){this.persistence=e,this.Os=t,this.O=r,this.Ms=new X(D),this.$s=new es(i=>Ys(i),Si),this.Fs=S.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(s)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new qv(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Bd(n,e,t,s){return new $v(n,e,t,s)}async function qd(n,e){const t=v(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.gs.getAllMutationBatches(s).next(i=>(r=i,t.Ls(e),t.gs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=U();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.Us.Es(s,c).next(u=>({qs:u,removedBatchIds:o,addedBatchIds:a}))})})}function jv(n,e){const t=v(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const h=c.batch,l=h.keys();let d=p.resolve();return l.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(m=>{const b=c.docVersions.get(g);C(b!==null),m.version.compareTo(b)<0&&(h.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.gs.removeMutationBatch(a,h))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.gs.performConsistencyCheck(s)).next(()=>t.Us.Es(s,r))})}function $d(n){const e=v(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Un.getLastRemoteSnapshotVersion(t))}function Kv(n,e){const t=v(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});r=t.Ms;const a=[];e.targetChanges.forEach((u,h)=>{const l=r.get(h);if(!l)return;a.push(t.Un.removeMatchingKeys(i,u.removedDocuments,h).next(()=>t.Un.addMatchingKeys(i,u.addedDocuments,h)));let d=l.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?d=d.withResumeToken(ne.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(g,m,b){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(l,d,u)&&a.push(t.Un.updateTargetData(i,d))});let c=je();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(jd(i,o,e.documentUpdates).next(u=>{c=u})),!s.isEqual(S.min())){const u=t.Un.getLastRemoteSnapshotVersion(i).next(h=>t.Un.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>t.Us.Ts(i,c)).next(()=>c)}).then(i=>(t.Ms=r,i))}function jd(n,e,t){let s=U();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let i=je();return t.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(S.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Gv(n,e){const t=v(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.gs.getNextMutationBatchAfterBatchId(s,e)))}function Vn(n,e){const t=v(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Un.getTargetData(s,e).next(i=>i?(r=i,p.resolve(r)):t.Un.allocateTargetId(s).next(o=>(r=new bt(e,o,0,s.currentSequenceNumber),t.Un.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.$s.set(e,s.targetId)),s})}async function Bn(n,e,t){const s=v(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!un(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.$s.delete(r.target)}function Wr(n,e,t){const s=v(n);let r=S.min(),i=U();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const h=v(a),l=h.$s.get(u);return l!==void 0?p.resolve(h.Ms.get(l)):h.Un.getTargetData(c,u)}(s,o,Ke(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Os.As(o,e,t?r:S.min(),t?i:U())).next(a=>({documents:a,Ks:i})))}function Kd(n,e){const t=v(n),s=v(t.Un),r=t.Ms.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.Tt(i,e).next(o=>o?o.target:null))}function Gd(n){const e=v(n);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(s,r,i){const o=v(s);let a=je(),c=Ka(i);const u=yt(r),h=IDBKeyRange.lowerBound(c,!0);return u.Qt({index:H.readTimeIndex,range:h},(l,d)=>{const g=Od(o.O,d);a=a.insert(g.key,g),c=d.readTime}).next(()=>({ws:a,readTime:Ga(c)}))}(e.Bs,t,e.Fs)).then(({ws:t,readTime:s})=>(e.Fs=s,t))}async function zv(n){const e=v(n);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(s){const r=yt(s);let i=S.min();return r.Qt({index:H.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(i=Ga(a.readTime)),c.done()}).next(()=>i)}(t)).then(t=>{e.Fs=t})}async function Hv(n,e,t,s){const r=v(n);let i=U(),o=je();for(const u of t){const h=e.Gs(u.metadata.name);u.document&&(i=i.add(h));const l=e.js(u);l.setReadTime(e.Qs(u.metadata.readTime)),o=o.insert(h,l)}const a=r.Bs.newChangeBuffer({trackRemovals:!0}),c=await Vn(r,function(u){return Ke(Zn(L.fromString(`__bundle__/docs/${u}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",u=>jd(u,a,o).next(h=>(a.apply(u),h)).next(h=>r.Un.removeMatchingKeysForTargetId(u,c.targetId).next(()=>r.Un.addMatchingKeys(u,i,c.targetId)).next(()=>r.Us.Ts(u,h)).next(()=>h)))}async function Wv(n,e,t=U()){const s=await Vn(n,Ke(za(e.bundledQuery))),r=v(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=ue(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Kn.saveNamedQuery(i,e);const a=s.withResumeToken(ne.EMPTY_BYTE_STRING,o);return r.Ms=r.Ms.insert(a.targetId,a),r.Un.updateTargetData(i,a).next(()=>r.Un.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Un.addMatchingKeys(i,t,s.targetId)).next(()=>r.Kn.saveNamedQuery(i,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,t){return p.resolve(this.Ws.get(t))}saveBundleMetadata(e,t){var s;return this.Ws.set(t.id,{id:(s=t).id,version:s.version,createTime:ue(s.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.zs.get(t))}saveNamedQuery(e,t){return this.zs.set(t.name,function(s){return{name:s.name,query:za(s.bundledQuery),readTime:ue(s.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.overlays=new X(_.comparator),this.Hs=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}saveOverlays(e,t,s){return s.forEach(r=>{this.Yt(e,t,r)}),p.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Hs.delete(s)),p.resolve()}getOverlaysForCollection(e,t,s){const r=new Map,i=t.length+1,o=new _(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new X((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=new Map,i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=new Map,c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(h,u)),!(a.size>=r)););return p.resolve(a)}Yt(e,t,s){if(s===null)return;const r=this.overlays.get(s.key);r!==null&&this.Hs.get(r.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new ja(t,s));let i=this.Hs.get(t);i===void 0&&(i=new Set,this.Hs.set(t,i)),i.add(s.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.Js=new $(se.Ys),this.Xs=new $(se.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,t){const s=new se(e,t);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ei(new se(e,t))}ni(e,t){e.forEach(s=>this.removeReference(s,t))}si(e){const t=new _(new L([])),s=new se(t,e),r=new se(t,e+1),i=[];return this.Xs.forEachInRange([s,r],o=>{this.ei(o),i.push(o.key)}),i}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const t=new _(new L([])),s=new se(t,e),r=new se(t,e+1);let i=U();return this.Xs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new se(e,0),s=this.Js.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class se{constructor(e,t){this.key=e,this.oi=t}static Ys(e,t){return _.comparator(e.key,t.key)||D(e.oi,t.oi)}static Zs(e,t){return D(e.oi,t.oi)||_.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.gs=[],this.ci=1,this.ui=new $(se.Ys)}checkEmpty(e){return p.resolve(this.gs.length===0)}addMutationBatch(e,t,s,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new qa(i,t,s,r);this.gs.push(o);for(const a of r)this.ui=this.ui.add(new se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.ai(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.hi(s),i=r<0?0:r;return p.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return p.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new se(t,0),r=new se(t,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([s,r],o=>{const a=this.ai(o.oi);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new $(D);return t.forEach(r=>{const i=new se(r,0),o=new se(r,Number.POSITIVE_INFINITY);this.ui.forEachInRange([i,o],a=>{s=s.add(a.oi)})}),p.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;_.isDocumentKey(i)||(i=i.child(""));const o=new se(new _(i),0);let a=new $(D);return this.ui.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.oi)),!0)},o),p.resolve(this.li(a))}li(e){const t=[];return e.forEach(s=>{const r=this.ai(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){C(this.fi(t.batchId,"removed")===0),this.gs.shift();let s=this.ui;return p.forEach(t.mutations,r=>{const i=new se(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ui=s})}Qe(e){}containsKey(e,t){const s=new se(t,0),r=this.ui.firstAfterOrEqual(s);return p.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,p.resolve()}fi(e,t){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const t=this.hi(e);return t<0||t>=this.gs.length?null:this.gs[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.di=e,this.docs=new X(_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.di(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return p.resolve(s?s.document.mutableCopy():K.newInvalidDocument(t))}getEntries(e,t){let s=je();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():K.newInvalidDocument(r))}),p.resolve(s)}getAll(e,t,s){let r=je();const i=new _(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||c.readTime.compareTo(s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return p.resolve(r)}_i(e,t){return p.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Zv(this)}getSize(e){return p.resolve(this.size)}}class Zv extends Fd{constructor(e){super(),this.Tn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(s)}),p.waitFor(t)}getFromCache(e,t){return this.Tn.getEntry(e,t)}getAllFromCache(e,t){return this.Tn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.persistence=e,this.wi=new es(t=>Ys(t),Si),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.mi=0,this.gi=new Za,this.targetCount=0,this.yi=tn.He()}forEachTarget(e,t){return this.wi.forEach((s,r)=>t(r)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.mi&&(this.mi=t),p.resolve()}Ze(e){this.wi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.yi=new tn(t),this.highestTargetId=t),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,t){return this.Ze(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.Ze(t),p.resolve()}removeTargetData(e,t){return this.wi.delete(t.target),this.gi.si(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.wi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const s=this.wi.get(t)||null;return p.resolve(s)}addMatchingKeys(e,t,s){return this.gi.ti(t,s),p.resolve()}removeMatchingKeys(e,t,s){this.gi.ni(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.gi.si(t),p.resolve()}getMatchingKeysForTargetId(e,t){const s=this.gi.ri(t);return p.resolve(s)}containsKey(e,t){return p.resolve(this.gi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t){this.pi={},this.overlays={},this.Nn=new Me(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new e_(this),this.indexManager=new Dv,this.qn=function(s){return new Jv(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new Rd(t),this.Kn=new Qv(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.pi[e.toKey()];return s||(s=new Xv(t,this.referenceDelegate),this.pi[e.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,t,s){w("MemoryPersistence","Starting transaction:",e);const r=new n_(this.Nn.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.Ti(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,t){return p.or(Object.values(this.pi).map(s=>()=>s.containsKey(e,t)))}}class n_ extends Nd{constructor(e){super(),this.currentSequenceNumber=e}}class ec{constructor(e){this.persistence=e,this.Ri=new Za,this.Pi=null}static bi(e){return new ec(e)}get vi(){if(this.Pi)return this.Pi;throw T()}addReference(e,t,s){return this.Ri.addReference(s,t),this.vi.delete(s.toString()),p.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.vi.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.vi.add(t.toString()),p.resolve()}removeTarget(e,t){this.Ri.si(t.targetId).forEach(r=>this.vi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.vi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Pi=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.vi,s=>{const r=_.fromPath(s);return this.Vi(e,r).next(i=>{i||t.removeEntry(r,S.min())})}).next(()=>(this.Pi=null,t.apply(e)))}updateLimboDocument(e,t){return this.Vi(e,t).next(s=>{s?this.vi.delete(t.toString()):this.vi.add(t.toString())})}Ii(e){return 0}Vi(e,t){return p.or([()=>p.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(n,e){return`firestore_clients_${n}_${e}`}function Qu(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function ao(n,e){return`firestore_targets_${n}_${e}`}class Qr{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static Si(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new y(r.error.code,r.error.message))),o?new Qr(e,t,r.state,i):(Z("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ys{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Si(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new y(s.error.code,s.error.message))),i?new ys(e,s.state,r):(Z("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Yr{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Si(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=Ci();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=Jl(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new Yr(e,i):(Z("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class tc{constructor(e,t){this.clientId=e,this.onlineState=t}static Si(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new tc(t.clientId,t.onlineState):(Z("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Oo{constructor(){this.activeTargetIds=Ci()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class co{constructor(e,t,s,r,i){this.window=e,this.Sn=t,this.persistenceKey=s,this.xi=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ki=this.Oi.bind(this),this.Mi=new X(D),this.started=!1,this.$i=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Fi=Wu(this.persistenceKey,this.xi),this.Bi=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.Mi=this.Mi.insert(this.xi,new Oo),this.Li=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ui=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.qi=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ki=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Gi=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ki)}static Vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ds();for(const s of e){if(s===this.xi)continue;const r=this.getItem(Wu(this.persistenceKey,s));if(r){const i=Yr.Si(s,r);i&&(this.Mi=this.Mi.insert(i.clientId,i))}}this.ji();const t=this.storage.getItem(this.Ki);if(t){const s=this.Qi(t);s&&this.Wi(s)}for(const s of this.$i)this.Oi(s);this.$i=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bi,JSON.stringify(e))}getAllActiveQueryTargets(){return this.zi(this.Mi)}isActiveQueryTarget(e){let t=!1;return this.Mi.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Hi(e,"pending")}updateMutationState(e,t,s){this.Hi(e,t,s),this.Ji(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ao(this.persistenceKey,e));if(s){const r=ys.Si(e,s);r&&(t=r.state)}}return this.Yi.Ci(e),this.ji(),t}removeLocalQueryTarget(e){this.Yi.Ni(e),this.ji()}isLocalQueryTarget(e){return this.Yi.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ao(this.persistenceKey,e))}updateQueryState(e,t,s){this.Xi(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Ji(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Zi(e)}notifyBundleLoaded(){this.tr()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ki),this.removeItem(this.Fi),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return w("SharedClientState","READ",e,t),t}setItem(e,t){w("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){w("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Oi(e){const t=e;if(t.storageArea===this.storage){if(w("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Fi)return void Z("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Sn.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Li.test(t.key)){if(t.newValue==null){const s=this.er(t.key);return this.nr(s,null)}{const s=this.sr(t.key,t.newValue);if(s)return this.nr(s.clientId,s)}}else if(this.Ui.test(t.key)){if(t.newValue!==null){const s=this.ir(t.key,t.newValue);if(s)return this.rr(s)}}else if(this.qi.test(t.key)){if(t.newValue!==null){const s=this.cr(t.key,t.newValue);if(s)return this.ur(s)}}else if(t.key===this.Ki){if(t.newValue!==null){const s=this.Qi(t.newValue);if(s)return this.Wi(s)}}else if(t.key===this.Bi){const s=function(r){let i=Me.A;if(r!=null)try{const o=JSON.parse(r);C(typeof o=="number"),i=o}catch(o){Z("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==Me.A&&this.sequenceNumberHandler(s)}else if(t.key===this.Gi)return this.syncEngine.ar()}}else this.$i.push(t)})}}get Yi(){return this.Mi.get(this.xi)}ji(){this.setItem(this.Fi,this.Yi.Di())}Hi(e,t,s){const r=new Qr(this.currentUser,e,t,s),i=Qu(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Di())}Ji(e){const t=Qu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Zi(e){const t={clientId:this.xi,onlineState:e};this.storage.setItem(this.Ki,JSON.stringify(t))}Xi(e,t,s){const r=ao(this.persistenceKey,e),i=new ys(e,t,s);this.setItem(r,i.Di())}tr(){this.setItem(this.Gi,"value-not-used")}er(e){const t=this.Li.exec(e);return t?t[1]:null}sr(e,t){const s=this.er(e);return Yr.Si(s,t)}ir(e,t){const s=this.Ui.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return Qr.Si(new fe(i),r,t)}cr(e,t){const s=this.qi.exec(e),r=Number(s[1]);return ys.Si(r,t)}Qi(e){return tc.Si(e)}async rr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.hr(e.batchId,e.state,e.error);w("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}ur(e){return this.syncEngine.lr(e.targetId,e.state,e.error)}nr(e,t){const s=t?this.Mi.insert(e,t):this.Mi.remove(e),r=this.zi(this.Mi),i=this.zi(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.dr(o,a).then(()=>{this.Mi=s})}Wi(e){this.Mi.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}zi(e){let t=Ci();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class zd{constructor(){this._r=new Oo,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,t,s){this.wr[e]=t}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Oo,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.kr=t+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,t,s,r,i){const o=this.$r(e,t);w("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,r,i),this.Br(e,o,a,s).then(c=>(w("RestConnection","Received: ",c),c),c=>{throw xs("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(e,t,s,r,i){return this.Mr(e,t,s,r,i)}Fr(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Jn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}$r(e,t){const s=r_[e];return`${this.kr}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,t,s,r){return new Promise((i,o)=>{const a=new ww;a.listenOnce(gw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case no.NO_ERROR:const u=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(u)),i(u);break;case no.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case no.HTTP_ERROR:const h=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const d=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(m)>=0?m:f.UNKNOWN}(l.status);o(new y(d,l.message))}else o(new y(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(t,"POST",c,s,15)})}Ur(e,t,s){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=fw(),o=pw(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new yw({})),this.Fr(a.initMessageHeaders,t,s),ap()||lp()||dp()||fp()||pp()||hp()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");w("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let h=!1,l=!1;const d=new i_({Ar:m=>{l?w("Connection","Not sending because WebChannel is closed:",m):(h||(w("Connection","Opening WebChannel transport."),u.open(),h=!0),w("Connection","WebChannel sending:",m),u.send(m))},Rr:()=>u.close()}),g=(m,b,E)=>{m.listen(b,M=>{try{E(M)}catch(G){setTimeout(()=>{throw G},0)}})};return g(u,yr.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),g(u,yr.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),d.Cr())}),g(u,yr.EventType.ERROR,m=>{l||(l=!0,xs("Connection","WebChannel transport errored:",m),d.Cr(new y(f.UNAVAILABLE,"The operation could not be completed")))}),g(u,yr.EventType.MESSAGE,m=>{var b;if(!l){const E=m.data[0];C(!!E);const M=E,G=M.error||((b=M[0])===null||b===void 0?void 0:b.error);if(G){w("Connection","WebChannel received error:",G);const z=G.status;let j=function(pt){const gn=J[pt];if(gn!==void 0)return gd(gn)}(z),nt=G.message;j===void 0&&(j=f.INTERNAL,nt="Unknown error status: "+z+" with message "+G.message),l=!0,d.Cr(new y(j,nt)),u.close()}else w("Connection","WebChannel received:",E),d.Nr(E)}}),g(o,mw.STAT_EVENT,m=>{m.stat===fu.PROXY?w("Connection","Detected buffering proxy"):m.stat===fu.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Dr()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(){return typeof window!="undefined"?window:null}function Ar(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){return new av(n,!0)}class nc{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Sn=e,this.timerId=t,this.qr=s,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const t=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),r=Math.max(0,t-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,s,r,i,o,a,c){this.Sn=e,this.Xr=s,this.Zr=r,this.eo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new nc(e,t)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,t){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Z(t.toString()),Z("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(t)}mo(){}auth(){this.state=1;const e=this.yo(this.no),t=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.no===t&&this.po(s,r)},s=>{e(()=>{const r=new y(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(r)})})}po(e,t){const s=this.yo(this.no);this.stream=this.Eo(e,t),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(r=>{s(()=>this.Io(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return t=>{this.Sn.enqueueAndForget(()=>this.no===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a_ extends Wd{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.O=i}Eo(e,t){return this.eo.Ur("Listen",e,t)}onMessage(e){this.ro.reset();const t=hv(this.O,e),s=function(r){if(!("targetChange"in r))return S.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?S.min():i.readTime?ue(i.readTime):S.min()}(e);return this.listener.To(t,s)}Ao(e){const t={};t.database=Os(this.O),t.addTarget=function(r,i){let o;const a=i.target;return o=Kr(a)?{documents:Td(r,a)}:{query:Ed(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=wd(r,i.resumeToken):i.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Ns(r,i.snapshotVersion.toTimestamp())),o}(this.O,e);const s=dv(this.O,e);s&&(t.labels=s),this.fo(t)}Ro(e){const t={};t.database=Os(this.O),t.removeTarget=e,this.fo(t)}}class c_ extends Wd{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,t){return this.eo.Ur("Write",e,t)}onMessage(e){if(C(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const t=lv(e.writeResults,e.commitTime),s=ue(e.commitTime);return this.listener.Vo(s,t)}return C(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Os(this.O),this.fo(e)}vo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ps(this.O,s))};this.fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_ extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.eo=s,this.O=r,this.Co=!1}No(){if(this.Co)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,t,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Mr(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}Lr(e,t,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Lr(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}terminate(){this.Co=!0}}class h_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(Z(t),this.Oo=!1):w("OnlineStateTracker",t)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(o=>{s.enqueueAndForget(async()=>{Nt(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=v(a);c.Ko.add(4),await ts(c),c.Qo.set("Unknown"),c.Ko.delete(4),await rr(c)}(this))})}),this.Qo=new h_(s,r)}}async function rr(n){if(Nt(n))for(const e of n.Go)await e(!0)}async function ts(n){for(const e of n.Go)await e(!1)}function Di(n,e){const t=v(n);t.qo.has(e.targetId)||(t.qo.set(e.targetId,e),ic(t)?rc(t):ss(t).co()&&sc(t,e))}function Ls(n,e){const t=v(n),s=ss(t);t.qo.delete(e),s.co()&&Qd(t,e),t.qo.size===0&&(s.co()?s.ho():Nt(t)&&t.Qo.set("Unknown"))}function sc(n,e){n.Wo.Z(e.targetId),ss(n).Ao(e)}function Qd(n,e){n.Wo.Z(e),ss(n).Ro(e)}function rc(n){n.Wo=new rv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>n.qo.get(e)||null}),ss(n).start(),n.Qo.Mo()}function ic(n){return Nt(n)&&!ss(n).oo()&&n.qo.size>0}function Nt(n){return v(n).Ko.size===0}function Yd(n){n.Wo=void 0}async function d_(n){n.qo.forEach((e,t)=>{sc(n,e)})}async function f_(n,e){Yd(n),ic(n)?(n.Qo.Bo(e),rc(n)):n.Qo.set("Unknown")}async function p_(n,e,t){if(n.Qo.set("Online"),e instanceof yd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.qo.delete(o),s.Wo.removeTarget(o))}(n,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xr(n,s)}else if(e instanceof Cr?n.Wo.ct(e):e instanceof md?n.Wo._t(e):n.Wo.ht(e),!t.isEqual(S.min()))try{const s=await $d(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.Wo.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.qo.get(c);u&&r.qo.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.qo.get(a);if(!c)return;r.qo.set(a,c.withResumeToken(ne.EMPTY_BYTE_STRING,c.snapshotVersion)),Qd(r,a);const u=new bt(c.target,a,1,c.sequenceNumber);sc(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Xr(n,s)}}async function Xr(n,e,t){if(!un(e))throw e;n.Ko.add(1),await ts(n),n.Qo.set("Offline"),t||(t=()=>$d(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await t(),n.Ko.delete(1),await rr(n)})}function Xd(n,e){return e().catch(t=>Xr(n,t,e))}async function ns(n){const e=v(n),t=St(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;g_(e);)try{const r=await Gv(e.localStore,s);if(r===null){e.Uo.length===0&&t.ho();break}s=r.batchId,m_(e,r)}catch(r){await Xr(e,r)}Jd(e)&&Zd(e)}function g_(n){return Nt(n)&&n.Uo.length<10}function m_(n,e){n.Uo.push(e);const t=St(n);t.co()&&t.bo&&t.vo(e.mutations)}function Jd(n){return Nt(n)&&!St(n).oo()&&n.Uo.length>0}function Zd(n){St(n).start()}async function y_(n){St(n).Do()}async function w_(n){const e=St(n);for(const t of n.Uo)e.vo(t.mutations)}async function v_(n,e,t){const s=n.Uo.shift(),r=$a.from(s,e,t);await Xd(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await ns(n)}async function __(n,e){e&&St(n).bo&&await async function(t,s){if(r=s.code,pd(r)&&r!==f.ABORTED){const i=t.Uo.shift();St(t).ao(),await Xd(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ns(t)}var r}(n,e),Jd(n)&&Zd(n)}async function Xu(n,e){const t=v(n);t.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Nt(t);t.Ko.add(3),await ts(t),s&&t.Qo.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ko.delete(3),await rr(t)}async function Po(n,e){const t=v(n);e?(t.Ko.delete(2),await rr(t)):e||(t.Ko.add(2),await ts(t),t.Qo.set("Unknown"))}function ss(n){return n.zo||(n.zo=function(e,t,s){const r=v(e);return r.No(),new a_(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(n.datastore,n.asyncQueue,{Pr:d_.bind(null,n),vr:f_.bind(null,n),To:p_.bind(null,n)}),n.Go.push(async e=>{e?(n.zo.ao(),ic(n)?rc(n):n.Qo.set("Unknown")):(await n.zo.stop(),Yd(n))})),n.zo}function St(n){return n.Ho||(n.Ho=function(e,t,s){const r=v(e);return r.No(),new c_(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(n.datastore,n.asyncQueue,{Pr:y_.bind(null,n),vr:__.bind(null,n),So:w_.bind(null,n),Vo:v_.bind(null,n)}),n.Go.push(async e=>{e?(n.Ho.ao(),await ns(n)):(await n.Ho.stop(),n.Uo.length>0&&(w("RemoteStore",`Stopping write stream with ${n.Uo.length} pending writes`),n.Uo=[]))})),n.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new oc(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rs(n,e){if(Z("AsyncQueue",`${e}: ${n}`),un(n))return new y(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.comparator=e?(t,s)=>e(t,s)||_.comparator(t.key,s.key):(t,s)=>_.comparator(t.key,s.key),this.keyedMap=Do(),this.sortedSet=new X(this.comparator)}static emptySet(e){return new Cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Cn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.Jo=new X(_.comparator)}track(e){const t=e.doc.key,s=this.Jo.get(t);s?e.type!==0&&s.type===3?this.Jo=this.Jo.insert(t,e):e.type===3&&s.type!==1?this.Jo=this.Jo.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Jo=this.Jo.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Jo=this.Jo.remove(t):e.type===1&&s.type===2?this.Jo=this.Jo.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):T():this.Jo=this.Jo.insert(t,e)}Yo(){const e=[];return this.Jo.inorderTraversal((t,s)=>{e.push(s)}),e}}class qn{constructor(e,t,s,r,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,s,r){const i=[];return t.forEach(o=>{i.push({type:0,doc:o})}),new qn(e,t,Cn.emptySet(t),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.Xo=void 0,this.listeners=[]}}class I_{constructor(){this.queries=new es(e=>rd(e),Xs),this.onlineState="Unknown",this.Zo=new Set}}async function ac(n,e){const t=v(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new b_),r)try{i.Xo=await t.onListen(s)}catch(o){const a=rs(o,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.tc(t.onlineState),i.Xo&&e.ec(i.Xo)&&uc(t)}async function cc(n,e){const t=v(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function T_(n,e){const t=v(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.ec(r)&&(s=!0);o.Xo=r}}s&&uc(t)}function E_(n,e,t){const s=v(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function uc(n){n.Zo.forEach(e=>{e.next()})}class hc{constructor(e,t,s){this.query=e,this.nc=t,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new qn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.sc?this.rc(e)&&(this.nc.next(e),t=!0):this.oc(e,this.onlineState)&&(this.cc(e),t=!0),this.ic=e,t}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let t=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),t=!0),t}oc(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.uc||!s)&&(!e.docs.isEmpty()||t==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const t=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}cc(e){e=qn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t){this.payload=e,this.byteLength=t}ac(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.O=e}Gs(e){return Je(this.O,e)}js(e){return e.metadata.exists?Id(this.O,e.document,!1):K.newNoDocument(this.Gs(e.metadata.name),this.Qs(e.metadata.readTime))}Qs(e){return ue(e)}}class x_{constructor(e,t,s){this.hc=e,this.localStore=t,this.O=s,this.queries=[],this.documents=[],this.progress=ef(e)}lc(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}fc(e){const t=new Map,s=new Zu(this.O);for(const r of e)if(r.metadata.queries){const i=s.Gs(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||U()).add(i);t.set(o,a)}}return t}async complete(){const e=await Hv(this.localStore,new Zu(this.O),this.documents,this.hc.id),t=this.fc(this.documents);for(const s of this.queries)await Wv(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",new Bv(Object.assign({},this.progress),e)}}function ef(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.key=e}}class nf{constructor(e){this.key=e}}class sf{constructor(e,t){this.query=e,this.dc=t,this._c=null,this.current=!1,this.wc=U(),this.mutatedKeys=U(),this.mc=id(e),this.gc=new Cn(this.mc)}get yc(){return this.dc}Ic(e,t){const s=t?t.Ec:new Ju,r=t?t.gc:this.gc;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=xr(this.query)&&r.size===this.query.limit?r.last():null,u=Gr(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,l)=>{const d=r.get(h),g=Ua(this.query,l)?l:null,m=!!d&&this.mutatedKeys.has(d.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?m!==b&&(s.track({type:3,doc:g}),E=!0):this.Tc(d,g)||(s.track({type:2,doc:g}),E=!0,(c&&this.mc(g,c)>0||u&&this.mc(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),E=!0):d&&!g&&(s.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(g?(o=o.add(g),i=b?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),xr(this.query)||Gr(this.query))for(;o.size>this.query.limit;){const h=xr(this.query)?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{gc:o,Ec:s,ks:a,mutatedKeys:i}}Tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort((u,h)=>function(l,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return g(l)-g(d)}(u.type,h.type)||this.mc(u.doc,h.doc)),this.Ac(s);const o=t?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,i.length!==0||c?{snapshot:new qn(this.query,e.gc,r,i,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Ju,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(t=>this.dc=this.dc.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.dc=this.dc.delete(t)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=U(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const t=[];return e.forEach(s=>{this.wc.has(s)||t.push(new nf(s))}),this.wc.forEach(s=>{e.has(s)||t.push(new tf(s))}),t}vc(e){this.dc=e.Ks,this.wc=U();const t=this.Ic(e.documents);return this.applyChanges(t,!0)}Vc(){return qn.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class k_{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class C_{constructor(e){this.key=e,this.Sc=!1}}class A_{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new es(a=>rd(a),Xs),this.Nc=new Map,this.xc=new Set,this.kc=new X(_.comparator),this.Oc=new Map,this.Mc=new Za,this.$c={},this.Fc=new Map,this.Bc=tn.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function D_(n,e){const t=gc(n);let s,r;const i=t.Cc.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.Vc();else{const o=await Vn(t.localStore,Ke(e));t.isPrimaryClient&&Di(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await lc(t,e,s,a==="current")}return r}async function lc(n,e,t,s){n.Uc=(h,l,d)=>async function(g,m,b,E){let M=m.view.Ic(b);M.ks&&(M=await Wr(g.localStore,m.query,!1).then(({documents:j})=>m.view.Ic(j,M)));const G=E&&E.targetChanges.get(m.targetId),z=m.view.applyChanges(M,g.isPrimaryClient,G);return Lo(g,m.targetId,z.Pc),z.snapshot}(n,h,l,d);const r=await Wr(n.localStore,e,!0),i=new sf(e,r.Ks),o=i.Ic(r.documents),a=nr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline"),c=i.applyChanges(o,n.isPrimaryClient,a);Lo(n,t,c.Pc);const u=new k_(e,t,i);return n.Cc.set(e,u),n.Nc.has(t)?n.Nc.get(t).push(e):n.Nc.set(t,[e]),c.snapshot}async function N_(n,e){const t=v(n),s=t.Cc.get(e),r=t.Nc.get(s.targetId);if(r.length>1)return t.Nc.set(s.targetId,r.filter(i=>!Xs(i,e))),void t.Cc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Bn(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Ls(t.remoteStore,s.targetId),$n(t,s.targetId)}).catch(hn)):($n(t,s.targetId),await Bn(t.localStore,s.targetId,!0))}async function R_(n,e,t){const s=mc(n);try{const r=await function(i,o){const a=v(i),c=ce.now(),u=o.reduce((l,d)=>l.add(d.key),U());let h;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.Us.Es(l,u).next(d=>{h=d;const g=[];for(const m of o){const b=Xw(m,h.get(m.key));b!=null&&g.push(new cn(m.key,b,Zl(b.value.mapValue),ee.exists(!0)))}return a.gs.addMutationBatch(l,c,g,o)})).then(l=>(l.applyToLocalDocumentSet(h),{batchId:l.batchId,changes:h}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.$c[i.currentUser.toKey()];c||(c=new X(D)),c=c.insert(o,a),i.$c[i.currentUser.toKey()]=c}(s,r.batchId,t),await ft(s,r.changes),await ns(s.remoteStore)}catch(r){const i=rs(r,"Failed to persist write");t.reject(i)}}async function rf(n,e){const t=v(n);try{const s=await Kv(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Oc.get(i);o&&(C(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Sc=!0:r.modifiedDocuments.size>0?C(o.Sc):r.removedDocuments.size>0&&(C(o.Sc),o.Sc=!1))}),await ft(t,s,e)}catch(s){await hn(s)}}function eh(n,e,t){const s=v(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Cc.forEach((i,o)=>{const a=o.view.tc(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=v(i);a.onlineState=o;let c=!1;a.queries.forEach((u,h)=>{for(const l of h.listeners)l.tc(o)&&(c=!0)}),c&&uc(a)}(s.eventManager,e),r.length&&s.Dc.To(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function O_(n,e,t){const s=v(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Oc.get(e),i=r&&r.key;if(i){let o=new X(_.comparator);o=o.insert(i,K.newNoDocument(i,S.min()));const a=U().add(i),c=new tr(S.min(),new Map,new $(D),o,a);await rf(s,c),s.kc=s.kc.remove(i),s.Oc.delete(e),pc(s)}else await Bn(s.localStore,e,!1).then(()=>$n(s,e,t)).catch(hn)}async function P_(n,e){const t=v(n),s=e.batch.batchId;try{const r=await jv(t.localStore,e);fc(t,s,null),dc(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ft(t,r)}catch(r){await hn(r)}}async function L_(n,e,t){const s=v(n);try{const r=await function(i,o){const a=v(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.gs.lookupMutationBatch(c,o).next(h=>(C(h!==null),u=h.keys(),a.gs.removeMutationBatch(c,h))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,u))})}(s.localStore,e);fc(s,e,t),dc(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ft(s,r)}catch(r){await hn(r)}}async function M_(n,e){const t=v(n);Nt(t.remoteStore)||w("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=v(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.gs.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.Fc.get(s)||[];r.push(e),t.Fc.set(s,r)}catch(s){const r=rs(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function dc(n,e){(n.Fc.get(e)||[]).forEach(t=>{t.resolve()}),n.Fc.delete(e)}function fc(n,e,t){const s=v(n);let r=s.$c[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.$c[s.currentUser.toKey()]=r}}function $n(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Nc.get(e))n.Cc.delete(s),t&&n.Dc.qc(s,t);n.Nc.delete(e),n.isPrimaryClient&&n.Mc.si(e).forEach(s=>{n.Mc.containsKey(s)||of(n,s)})}function of(n,e){n.xc.delete(e.path.canonicalString());const t=n.kc.get(e);t!==null&&(Ls(n.remoteStore,t),n.kc=n.kc.remove(e),n.Oc.delete(t),pc(n))}function Lo(n,e,t){for(const s of t)s instanceof tf?(n.Mc.addReference(s.key,e),U_(n,s)):s instanceof nf?(w("SyncEngine","Document no longer in limbo: "+s.key),n.Mc.removeReference(s.key,e),n.Mc.containsKey(s.key)||of(n,s.key)):T()}function U_(n,e){const t=e.key,s=t.path.canonicalString();n.kc.get(t)||n.xc.has(s)||(w("SyncEngine","New document in limbo: "+t),n.xc.add(s),pc(n))}function pc(n){for(;n.xc.size>0&&n.kc.size<n.maxConcurrentLimboResolutions;){const e=n.xc.values().next().value;n.xc.delete(e);const t=new _(L.fromString(e)),s=n.Bc.next();n.Oc.set(s,new C_(t)),n.kc=n.kc.insert(t,s),Di(n.remoteStore,new bt(Ke(Zn(t.path)),s,2,Me.A))}}async function ft(n,e,t){const s=v(n),r=[],i=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,e,t).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const h=Ja.Ss(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.Dc.To(r),await async function(a,c){const u=v(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(c,l=>p.forEach(l.vs,d=>u.persistence.referenceDelegate.addReference(h,l.targetId,d)).next(()=>p.forEach(l.Vs,d=>u.persistence.referenceDelegate.removeReference(h,l.targetId,d)))))}catch(h){if(!un(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const l=h.targetId;if(!h.fromCache){const d=u.Ms.get(l),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);u.Ms=u.Ms.insert(l,m)}}}(s.localStore,i))}async function F_(n,e){const t=v(n);if(!t.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await qd(t.localStore,e);t.currentUser=e,function(r,i){r.Fc.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,i))})}),r.Fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ft(t,s.qs)}}function V_(n,e){const t=v(n),s=t.Oc.get(e);if(s&&s.Sc)return U().add(s.key);{let r=U();const i=t.Nc.get(e);if(!i)return r;for(const o of i){const a=t.Cc.get(o);r=r.unionWith(a.view.yc)}return r}}async function B_(n,e){const t=v(n),s=await Wr(t.localStore,e.query,!0),r=e.view.vc(s);return t.isPrimaryClient&&Lo(t,e.targetId,r.Pc),r}async function q_(n){const e=v(n);return Gd(e.localStore).then(t=>ft(e,t))}async function $_(n,e,t,s){const r=v(n),i=await function(o,a){const c=v(o),u=v(c.gs);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>u.Ge(h,a).next(l=>l?c.Us.Es(h,l):p.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await ns(r.remoteStore):t==="acknowledged"||t==="rejected"?(fc(r,e,s||null),dc(r,e),function(o,a){v(v(o).gs).Qe(a)}(r.localStore,e)):T(),await ft(r,i)):w("SyncEngine","Cannot apply mutation batch with id: "+e)}async function j_(n,e){const t=v(n);if(gc(t),mc(t),e===!0&&t.Lc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await th(t,s.toArray());t.Lc=!0,await Po(t.remoteStore,!0);for(const i of r)Di(t.remoteStore,i)}else if(e===!1&&t.Lc!==!1){const s=[];let r=Promise.resolve();t.Nc.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>($n(t,o),Bn(t.localStore,o,!0))),Ls(t.remoteStore,o)}),await r,await th(t,s),function(i){const o=v(i);o.Oc.forEach((a,c)=>{Ls(o.remoteStore,c)}),o.Mc.ii(),o.Oc=new Map,o.kc=new X(_.comparator)}(t),t.Lc=!1,await Po(t.remoteStore,!1)}}async function th(n,e,t){const s=v(n),r=[],i=[];for(const o of e){let a;const c=s.Nc.get(o);if(c&&c.length!==0){a=await Vn(s.localStore,Ke(c[0]));for(const u of c){const h=s.Cc.get(u),l=await B_(s,h);l.snapshot&&i.push(l.snapshot)}}else{const u=await Kd(s.localStore,o);a=await Vn(s.localStore,u),await lc(s,af(u),o,!1)}r.push(a)}return s.Dc.To(i),r}function af(n){return nd(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function K_(n){const e=v(n);return v(v(e.localStore).persistence).ds()}async function G_(n,e,t,s){const r=v(n);if(r.Lc)w("SyncEngine","Ignoring unexpected query state notification.");else if(r.Nc.has(e))switch(t){case"current":case"not-current":{const i=await Gd(r.localStore),o=tr.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await ft(r,i,o);break}case"rejected":await Bn(r.localStore,e,!0),$n(r,e,s);break;default:T()}}async function z_(n,e,t){const s=gc(n);if(s.Lc){for(const r of e){if(s.Nc.has(r)){w("SyncEngine","Adding an already active target "+r);continue}const i=await Kd(s.localStore,r),o=await Vn(s.localStore,i);await lc(s,af(i),o.targetId,!1),Di(s.remoteStore,o)}for(const r of t)s.Nc.has(r)&&await Bn(s.localStore,r,!1).then(()=>{Ls(s.remoteStore,r),$n(s,r)}).catch(hn)}}function gc(n){const e=v(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=V_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=O_.bind(null,e),e.Dc.To=T_.bind(null,e.eventManager),e.Dc.qc=E_.bind(null,e.eventManager),e}function mc(n){const e=v(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=L_.bind(null,e),e}function H_(n,e,t){const s=v(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(l,d){const g=v(l),m=ue(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",b=>g.Kn.getBundleMetadata(b,d.id)).then(b=>!!b&&b.createTime.compareTo(m)>=0)}(r.localStore,a))return await i.close(),void o._completeWith(function(l){return{taskState:"Success",documentsLoaded:l.totalDocuments,bytesLoaded:l.totalBytes,totalDocuments:l.totalDocuments,totalBytes:l.totalBytes}}(a));o._updateProgress(ef(a));const c=new x_(a,r.localStore,i.O);let u=await i.Kc();for(;u;){const l=await c.lc(u);l&&o._updateProgress(l),u=await i.Kc()}const h=await c.complete();await ft(r,h.ws,void 0),await function(l,d){const g=v(l);return g.persistence.runTransaction("Save bundle","readwrite",m=>g.Kn.saveBundleMetadata(m,d))}(r.localStore,a),o._completeWith(h.progress)}catch(a){xs("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(s,e,t).then(()=>{s.sharedClientState.notifyBundleLoaded()})}class cf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=sr(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return Bd(this.persistence,new Vd,e.initialUser,this.O)}jc(e){return new t_(ec.bi,this.O)}Gc(e){return new zd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uf extends cf{constructor(e,t,s){super(),this.zc=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await zv(this.localStore),await this.zc.initialize(this,e),await mc(this.zc.syncEngine),await ns(this.zc.remoteStore),await this.persistence.Hn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Wc(e){return Bd(this.persistence,new Vd,e.initialUser,this.O)}Qc(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Pv(t,e.asyncQueue)}jc(e){const t=Xa(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new Ya(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,Hd(),Ar(),this.O,this.sharedClientState,!!this.forceOwnership)}Gc(e){return new zd}}class W_ extends uf{constructor(e,t){super(e,t,!1),this.zc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.zc.syncEngine;this.sharedClientState instanceof co&&(this.sharedClientState.syncEngine={hr:$_.bind(null,t),lr:G_.bind(null,t),dr:z_.bind(null,t),ds:K_.bind(null,t),ar:q_.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Hn(async s=>{await j_(this.zc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):s||this.gcScheduler.stop())})}Gc(e){const t=Hd();if(!co.Vt(t))throw new y(f.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Xa(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new co(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class yc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>eh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=F_.bind(null,this.syncEngine),await Po(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new I_}createDatastore(e){const t=sr(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new o_(r));var r;return function(i,o,a,c){return new u_(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>eh(this.syncEngine,a,0),o=Yu.Vt()?new Yu:new s_,new l_(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,c,u){const h=new A_(s,r,i,o,a,c);return u&&(h.Lc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=v(e);w("RemoteStore","RemoteStore shutting down."),t.Ko.add(5),await ts(t),t.jo.shutdown(),t.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t){this.Yc=e,this.O=t,this.metadata=new ae,this.buffer=new Uint8Array,this.Xc=new TextDecoder("utf-8"),this.Zc().then(s=>{s&&s.ac()?this.metadata.resolve(s.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.payload)}`))},s=>this.metadata.reject(s))}close(){return this.Yc.cancel()}async getMetadata(){return this.metadata.promise}async Kc(){return await this.getMetadata(),this.Zc()}async Zc(){const e=await this.tu();if(e===null)return null;const t=this.Xc.decode(e),s=Number(t);isNaN(s)&&this.eu(`length string (${t}) is not valid number`);const r=await this.nu(s);return new S_(JSON.parse(r),e.length+s)}su(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async tu(){for(;this.su()<0&&!await this.iu(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.eu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async nu(e){for(;this.buffer.length<e;)await this.iu()&&this.eu("Reached the end of bundle when more is expected.");const t=this.Xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}eu(e){throw this.Yc.cancel(),new Error(`Invalid bundle format: ${e}`)}async iu(){const e=await this.Yc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(f.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=v(s),o=Os(i.O)+"/documents",a={documents:r.map(l=>Rs(i.O,l))},c=await i.Lr("BatchGetDocuments",o,a),u=new Map;c.forEach(l=>{const d=uv(i.O,l);u.set(d.key.toString(),d)});const h=[];return r.forEach(l=>{const d=u.get(l.toString());C(!!d),h.push(d)}),h}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new er(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=_.fromPath(s);this.mutations.push(new Fa(r,this.precondition(r)))}),await async function(t,s){const r=v(t),i=Os(r.O)+"/documents",o={writes:s.map(a=>Ps(r.O,a))};await r.Mr("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T();t=S.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new y(f.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?ee.updateTime(t):ee.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(S.min()))throw new y(f.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ee.updateTime(t)}return ee.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,s,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=s,this.deferred=r,this.ru=5,this.ro=new nc(this.asyncQueue,"transaction_retry")}run(){this.ru-=1,this.ou()}ou(){this.ro.Hr(async()=>{const e=new Y_(this.datastore),t=this.cu(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.uu(r)}))}).catch(s=>{this.uu(s)})})}cu(e){try{const t=this.updateFunction(e);return!an(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}uu(e){this.ru>0&&this.au(e)?(this.ru-=1,this.asyncQueue.enqueueAndForget(()=>(this.ou(),Promise.resolve()))):this.deferred.reject(e)}au(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!pd(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=fe.UNAUTHENTICATED,this.clientId=Wl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=rs(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function hf(n,e){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await qd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function lf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wc(n);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>Xu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Xu(e.remoteStore,i)),n.onlineComponents=e}async function wc(n){return n.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await hf(n,new cf)),n.offlineComponents}async function Ri(n){return n.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await lf(n,new yc)),n.onlineComponents}function df(n){return wc(n).then(e=>e.persistence)}function vc(n){return wc(n).then(e=>e.localStore)}function ff(n){return Ri(n).then(e=>e.remoteStore)}function _c(n){return Ri(n).then(e=>e.syncEngine)}async function jn(n){const e=await Ri(n),t=e.eventManager;return t.onListen=D_.bind(null,e.syncEngine),t.onUnlisten=N_.bind(null,e.syncEngine),t}function Z_(n){return n.asyncQueue.enqueue(async()=>{const e=await df(n),t=await ff(n);return e.setNetworkEnabled(!0),function(s){const r=v(s);return r.Ko.delete(0),rr(r)}(t)})}function eb(n){return n.asyncQueue.enqueue(async()=>{const e=await df(n),t=await ff(n);return e.setNetworkEnabled(!1),async function(s){const r=v(s);r.Ko.add(0),await ts(r),r.Qo.set("Offline")}(t)})}function tb(n,e){const t=new ae;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const u=v(a);return u.persistence.runTransaction("read document","readonly",h=>u.Us.ys(h,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new y(f.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=rs(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await vc(n),e,t)),t.promise}function pf(n,e,t={}){const s=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Ni({next:l=>{i.enqueueAndForget(()=>cc(r,h));const d=l.docs.has(o);!d&&l.fromCache?c.reject(new y(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&l.fromCache&&a&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new hc(Zn(o.path),u,{includeMetadataChanges:!0,uc:!0});return ac(r,h)}(await jn(n),n.asyncQueue,e,t,s)),s.promise}function nb(n,e){const t=new ae;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await Wr(s,r,!0),a=new sf(r,o.Ks),c=a.Ic(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=rs(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await vc(n),e,t)),t.promise}function gf(n,e,t={}){const s=new ae;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Ni({next:l=>{i.enqueueAndForget(()=>cc(r,h)),l.fromCache&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(l)},error:l=>c.reject(l)}),h=new hc(o,u,{includeMetadataChanges:!0,uc:!0});return ac(r,h)}(await jn(n),n.asyncQueue,e,t,s)),s.promise}function sb(n,e){const t=new Ni(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){v(s).Zo.add(r),r.next()}(await jn(n),t)),()=>{t.Jc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){v(s).Zo.delete(r)}(await jn(n),t))}}function rb(n,e){const t=new ae;return n.asyncQueue.enqueueAndForget(async()=>{const s=await function(r){return Ri(r).then(i=>i.datastore)}(n);new X_(n.asyncQueue,s,e,t).run()}),t.promise}function ib(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new Q_(c,u)}(function(c,u){if(c instanceof Uint8Array)return nh(c,u);if(c instanceof ArrayBuffer)return nh(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,sr(e));n.asyncQueue.enqueueAndForget(async()=>{H_(await _c(n),r,s)})}function ob(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=v(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.Kn.getNamedQuery(i,s))}(await vc(n),e))}const sh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n,e,t){if(!t)throw new y(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mf(n,e,t,s){if(e===!0&&s===!0)throw new y(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rh(n){if(!_.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ih(n){if(_.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Oi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function O(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Oi(n);throw new y(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function yf(n,e){if(e<=0)throw new y(f.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,s){this._authCredentials=t,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oh({}),this._settingsFrozen=!1,e instanceof Qt?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qt(r.options.projectId)}(e))}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oh(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new bw;switch(t.type){case"gapi":const s=t.client;return C(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Sw(s,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=sh.get(e);t&&(w("ComponentProvider","Removing Datastore"),sh.delete(e),t.terminate())}(this),Promise.resolve()}}function ab(n,e,t,s={}){var r;const i=(n=O(n,ir))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&xs("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=fe.MOCK_USER;else{o=ph(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new fe(c)}n._authCredentials=new Iw(new Hl(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ze(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new B(this.firestore,e,this._key)}}class Te{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Te(this.firestore,e,this._query)}}class Ze extends Te{constructor(e,t,s){super(e,t,Zn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new B(this.firestore,null,new _(e))}withConverter(e){return new Ze(this.firestore,e,this._path)}}function wf(n,e,...t){if(n=F(n),bc("collection","path",e),n instanceof ir){const s=L.fromString(e,...t);return ih(s),new Ze(n,null,s)}{if(!(n instanceof B||n instanceof Ze))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(L.fromString(e,...t));return ih(s),new Ze(n.firestore,null,s)}}function cb(n,e){if(n=O(n,ir),bc("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Te(n,null,function(t){return new dt(L.emptyPath(),t)}(e))}function Jr(n,e,...t){if(n=F(n),arguments.length===1&&(e=Wl.R()),bc("doc","path",e),n instanceof ir){const s=L.fromString(e,...t);return rh(s),new B(n,null,new _(s))}{if(!(n instanceof B||n instanceof Ze))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(L.fromString(e,...t));return rh(s),new B(n.firestore,n instanceof Ze?n.converter:null,new _(s))}}function vf(n,e){return n=F(n),e=F(e),(n instanceof B||n instanceof Ze)&&(e instanceof B||e instanceof Ze)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function _f(n,e){return n=F(n),e=F(e),n instanceof Te&&e instanceof Te&&n.firestore===e.firestore&&Xs(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new nc(this,"async_queue_retry"),this.yu=()=>{const t=Ar();t&&w("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const e=Ar();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const t=Ar();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const t=new ae;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!un(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const t=this.hu.then(()=>(this.wu=!0,e().catch(s=>{this._u=s,this.wu=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Z("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.wu=!1,s))));return this.hu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.gu.indexOf(e)>-1&&(t=0);const r=oc.createAndSchedule(this,e,t,s,i=>this.Tu(i));return this.du.push(r),r}pu(){this._u&&T()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Mo(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class hb{constructor(){this._progressObserver={},this._taskCompletionResolver=new ae,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=-1;class Q extends ir{constructor(e,t,s){super(e,t,s),this.type="firestore",this._queue=new ub,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||bf(this),this._firestoreClient.terminate()}}function de(n){return n._firestoreClient||bf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function bf(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new Rw(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new J_(n._authCredentials,n._appCheckCredentials,n._queue,s)}function db(n,e){Tf(n=O(n,Q));const t=de(n),s=n._freezeSettings(),r=new yc;return If(t,r,new uf(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function fb(n){Tf(n=O(n,Q));const e=de(n),t=n._freezeSettings(),s=new yc;return If(e,s,new W_(s,t.cacheSizeBytes))}function If(n,e,t){const s=new ae;return n.asyncQueue.enqueue(async()=>{try{await hf(n,t),await lf(n,e),s.resolve()}catch(r){if(!function(i){return i.name==="FirebaseError"?i.code===f.FAILED_PRECONDITION||i.code===f.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(r))throw r;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function pb(n){if(n._initialized&&!n._terminated)throw new y(f.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ae;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ge.Vt())return Promise.resolve();const s=t+"main";await Ge.delete(s)}(Xa(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function gb(n){return function(e){const t=new ae;return e.asyncQueue.enqueueAndForget(async()=>M_(await _c(e),t)),t.promise}(de(n=O(n,Q)))}function mb(n){return Z_(de(n=O(n,Q)))}function yb(n){return eb(de(n=O(n,Q)))}function wb(n,e){const t=de(n=O(n,Q)),s=new hb;return ib(t,n._databaseId,e,s),s}function vb(n,e){return ob(de(n=O(n,Q)),e).then(t=>t?new Te(n,null,t.query):null)}function Tf(n){if(n._initialized||n._terminated)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new et(ne.fromBase64String(e))}catch(t){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new et(ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return D(this._lat,e._lat)||D(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=/^__.*__$/;class bb{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zs(e,this.data,t,this.fieldTransforms)}}class Ef{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new cn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Li{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.O=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new Li(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Su({path:s,Cu:!1});return r.Nu(e),r}xu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Su({path:s,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return Zr(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Sf(this.Vu)&&_b.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class Ib{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.O=s||sr(e)}Fu(e,t,s,r=!1){return new Li({Vu:e,methodName:t,$u:s,path:ie.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function dn(n){const e=n._freezeSettings(),t=sr(n._databaseId);return new Ib(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Mi(n,e,t,s,r,i={}){const o=n.Fu(i.merge||i.mergeFields?2:0,e,t,r);Sc("Data must be an object, but it was:",o,s);const a=Cf(s,o);let c,u;if(i.merge)c=new Nn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const l of i.mergeFields){const d=Uo(e,l,t);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Df(h,d)||h.push(d)}c=new Nn(h),u=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,u=o.fieldTransforms;return new bb(new _e(a),c,u)}class or extends ln{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof or}}function xf(n,e,t){return new Li({Vu:3,$u:e.settings.$u,methodName:n._methodName,Cu:t},e.databaseId,e.O,e.ignoreUndefinedProperties)}class Ic extends ln{_toFieldTransform(e){return new Js(e.path,new Ln)}isEqual(e){return e instanceof Ic}}class Tb extends ln{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=xf(this,e,!0),s=this.Bu.map(i=>fn(i,t)),r=new Xt(s);return new Js(e.path,r)}isEqual(e){return this===e}}class Eb extends ln{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=xf(this,e,!0),s=this.Bu.map(i=>fn(i,t)),r=new Jt(s);return new Js(e.path,r)}isEqual(e){return this===e}}class Sb extends ln{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){const t=new Mn(e.O,cd(e.O,this.Lu));return new Js(e.path,t)}isEqual(e){return this===e}}function Tc(n,e,t,s){const r=n.Fu(1,e,t);Sc("Data must be an object, but it was:",r,s);const i=[],o=_e.empty();on(s,(c,u)=>{const h=xc(e,c,t);u=F(u);const l=r.xu(h);if(u instanceof or)i.push(h);else{const d=fn(u,l);d!=null&&(i.push(h),o.set(h,d))}});const a=new Nn(i);return new Ef(o,a,r.fieldTransforms)}function Ec(n,e,t,s,r,i){const o=n.Fu(1,e,t),a=[Uo(e,s,t)],c=[r];if(i.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Uo(e,i[d])),c.push(i[d+1]);const u=[],h=_e.empty();for(let d=a.length-1;d>=0;--d)if(!Df(u,a[d])){const g=a[d];let m=c[d];m=F(m);const b=o.xu(g);if(m instanceof or)u.push(g);else{const E=fn(m,b);E!=null&&(u.push(g),h.set(g,E))}}const l=new Nn(u);return new Ef(h,l,o.fieldTransforms)}function kf(n,e,t,s=!1){return fn(t,n.Fu(s?4:3,e))}function fn(n,e){if(Af(n=F(n)))return Sc("Unsupported field value:",e,n),Cf(n,e);if(n instanceof ln)return function(t,s){if(!Sf(s.Vu))throw s.Ou(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ou(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=fn(o,s.ku(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=F(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return cd(s.O,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=ce.fromDate(t);return{timestampValue:Ns(s.O,r)}}if(t instanceof ce){const r=new ce(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ns(s.O,r)}}if(t instanceof Pi)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof et)return{bytesValue:wd(s.O,t._byteString)};if(t instanceof B){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.Ou(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Va(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.Ou(`Unsupported field value: ${Oi(t)}`)}(n,e)}function Cf(n,e){const t={};return Yl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):on(n,(s,r)=>{const i=fn(r,e.Du(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Af(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof Pi||n instanceof et||n instanceof B||n instanceof ln)}function Sc(n,e,t){if(!Af(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Oi(t);throw s==="an object"?e.Ou(n+" a custom object"):e.Ou(n+" "+s)}}function Uo(n,e,t){if((e=F(e))instanceof xt)return e._internalPath;if(typeof e=="string")return xc(n,e);throw Zr("Field path arguments must be of type string or ",n,!1,void 0,t)}const xb=new RegExp("[~\\*/\\[\\]]");function xc(n,e,t){if(e.search(xb)>=0)throw Zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xt(...e.split("."))._internalPath}catch{throw Zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zr(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new y(f.INVALID_ARGUMENT,a+n+c)}function Df(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new B(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ui("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kb extends Ms{data(){return super.data()}}function Ui(n,e){return typeof e=="string"?xc(n,e):e instanceof xt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ht extends Ms{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ui("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class ws extends ht{data(e={}){return super.data(e)}}class kt{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ut(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new ws(this._firestore,this._userDataWriter,s.key,s,new Ut(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new ws(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ut(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new ws(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ut(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Cb(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Cb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}function Nf(n,e){return n instanceof ht&&e instanceof ht?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof kt&&e instanceof kt&&n._firestore===e._firestore&&_f(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(n){if(Gr(n)&&n.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ar{}function mt(n,...e){for(const t of e)n=t._apply(n);return n}class Ab extends ar{constructor(e,t,s){super(),this.Uu=e,this.qu=t,this.Ku=s,this.type="where"}_apply(e){const t=dn(e.firestore),s=function(r,i,o,a,c,u,h){let l;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ch(h,u);const g=[];for(const m of h)g.push(ah(a,r,m));l={arrayValue:{values:g}}}else l=ah(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ch(h,u),l=kf(o,i,h,u==="in"||u==="not-in");const d=Ne.create(c,u,l);return function(g,m){if(m.S()){const E=La(g);if(E!==null&&!E.isEqual(m.field))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${E.toString()}' and '${m.field.toString()}'`);const M=Pa(g);M!==null&&Uf(g,m.field,M)}const b=function(E,M){for(const G of E.filters)if(M.indexOf(G.op)>=0)return G.op;return null}(g,function(E){switch(E){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(b!==null)throw b===m.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${b.toString()}' filters.`)}(r,d),d}(e._query,"where",t,e.firestore._databaseId,this.Uu,this.qu,this.Ku);return new Te(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new dt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function Db(n,e,t){const s=e,r=Ui("where",n);return new Ab(r,s,t)}class Nb extends ar{constructor(e,t){super(),this.Uu=e,this.Gu=t,this.type="orderBy"}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new kn(r,i);return function(a,c){if(Pa(a)===null){const u=La(a);u!==null&&Uf(a,u,c.field)}}(s,o),o}(e._query,this.Uu,this.Gu);return new Te(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new dt(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Rb(n,e="asc"){const t=e,s=Ui("orderBy",n);return new Nb(s,t)}class Of extends ar{constructor(e,t,s){super(),this.type=e,this.ju=t,this.Qu=s}_apply(e){return new Te(e.firestore,e.converter,sd(e._query,this.ju,this.Qu))}}function Ob(n){return yf("limit",n),new Of("limit",n,"F")}function Pb(n){return yf("limitToLast",n),new Of("limitToLast",n,"L")}class Pf extends ar{constructor(e,t,s){super(),this.type=e,this.Wu=t,this.zu=s}_apply(e){const t=Mf(e,this.type,this.Wu,this.zu);return new Te(e.firestore,e.converter,function(s,r){return new dt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function Lb(...n){return new Pf("startAt",n,!0)}function Mb(...n){return new Pf("startAfter",n,!1)}class Lf extends ar{constructor(e,t,s){super(),this.type=e,this.Wu=t,this.zu=s}_apply(e){const t=Mf(e,this.type,this.Wu,this.zu);return new Te(e.firestore,e.converter,function(s,r){return new dt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function Ub(...n){return new Lf("endBefore",n,!1)}function Fb(...n){return new Lf("endAt",n,!0)}function Mf(n,e,t,s){if(t[0]=F(t[0]),t[0]instanceof Ms)return function(r,i,o,a,c){if(!a)throw new y(f.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const h of Pn(r))if(h.field.isKeyField())u.push($r(i,a.key));else{const l=a.data.field(h.field);if(Oa(l))throw new y(f.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(l===null){const d=h.field.canonicalString();throw new y(f.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(l)}return new On(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=dn(n.firestore);return function(i,o,a,c,u,h){const l=i.explicitOrderBy;if(u.length>l.length)throw new y(f.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<u.length;g++){const m=u[g];if(l[g].field.isKeyField()){if(typeof m!="string")throw new y(f.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof m}`);if(!Ma(i)&&m.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${m}' contains a slash.`);const b=i.path.child(L.fromString(m));if(!_.isDocumentKey(b))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const E=new _(b);d.push($r(o,E))}else{const b=kf(a,c,m);d.push(b)}}return new On(d,h)}(n._query,n.firestore._databaseId,r,e,t,s)}}function ah(n,e,t){if(typeof(t=F(t))=="string"){if(t==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ma(e)&&t.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(L.fromString(t));if(!_.isDocumentKey(s))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $r(n,new _(s))}if(t instanceof B)return $r(n,t._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oi(t)}.`)}function ch(n,e){if(!Array.isArray(n)||n.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(f.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Uf(n,e,t){if(!t.isEqual(e))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{convertValue(e,t="none"){switch(Yt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return W(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const s={};return on(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new Pi(W(e.latitude),W(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xl(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Cs(e));default:return null}}convertTimestamp(e){const t=Et(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=L.fromString(e);C(kd(s));const r=new Qt(s.get(1),s.get(3)),i=new _(s.popFirst(5));return r.isEqual(t)||Z(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Vb extends kc{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new B(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=dn(e)}set(e,t,s){this._verifyNotCommitted();const r=vt(e,this._firestore),i=Fi(r.converter,t,s),o=Mi(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,ee.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=vt(e,this._firestore);let o;return o=typeof(t=F(t))=="string"||t instanceof xt?Ec(this._dataReader,"WriteBatch.update",i._key,t,s,r):Tc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,ee.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vt(e,this._firestore);return this._mutations=this._mutations.concat(new er(t._key,ee.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vt(n,e){if((n=F(n)).firestore!==e)throw new y(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(n){n=O(n,B);const e=O(n.firestore,Q);return pf(de(e),n._key).then(t=>Cc(e,n,t))}class pn extends kc{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new B(this.firestore,null,t)}}function $b(n){n=O(n,B);const e=O(n.firestore,Q),t=de(e),s=new pn(e);return tb(t,n._key).then(r=>new ht(e,s,n._key,r,new Ut(r!==null&&r.hasLocalMutations,!0),n.converter))}function jb(n){n=O(n,B);const e=O(n.firestore,Q);return pf(de(e),n._key,{source:"server"}).then(t=>Cc(e,n,t))}function Kb(n){n=O(n,Te);const e=O(n.firestore,Q),t=de(e),s=new pn(e);return Rf(n._query),gf(t,n._query).then(r=>new kt(e,s,n,r))}function Gb(n){n=O(n,Te);const e=O(n.firestore,Q),t=de(e),s=new pn(e);return nb(t,n._query).then(r=>new kt(e,s,n,r))}function zb(n){n=O(n,Te);const e=O(n.firestore,Q),t=de(e),s=new pn(e);return gf(t,n._query,{source:"server"}).then(r=>new kt(e,s,n,r))}function uh(n,e,t){n=O(n,B);const s=O(n.firestore,Q),r=Fi(n.converter,e,t);return cr(s,[Mi(dn(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,ee.none())])}function hh(n,e,t,...s){n=O(n,B);const r=O(n.firestore,Q),i=dn(r);let o;return o=typeof(e=F(e))=="string"||e instanceof xt?Ec(i,"updateDoc",n._key,e,t,s):Tc(i,"updateDoc",n._key,e),cr(r,[o.toMutation(n._key,ee.exists(!0))])}function Hb(n){return cr(O(n.firestore,Q),[new er(n._key,ee.none())])}function Wb(n,e){const t=O(n.firestore,Q),s=Jr(n),r=Fi(n.converter,e);return cr(t,[Mi(dn(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,ee.exists(!1))]).then(()=>s)}function Ff(n,...e){var t,s,r;n=F(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mo(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Mo(e[o])){const l=e[o];e[o]=(t=l.next)===null||t===void 0?void 0:t.bind(l),e[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),e[o+2]=(r=l.complete)===null||r===void 0?void 0:r.bind(l)}let c,u,h;if(n instanceof B)u=O(n.firestore,Q),h=Zn(n._key.path),c={next:l=>{e[o]&&e[o](Cc(u,n,l))},error:e[o+1],complete:e[o+2]};else{const l=O(n,Te);u=O(l.firestore,Q),h=l._query;const d=new pn(u);c={next:g=>{e[o]&&e[o](new kt(u,d,l,g))},error:e[o+1],complete:e[o+2]},Rf(n._query)}return function(l,d,g,m){const b=new Ni(m),E=new hc(d,b,g);return l.asyncQueue.enqueueAndForget(async()=>ac(await jn(l),E)),()=>{b.Jc(),l.asyncQueue.enqueueAndForget(async()=>cc(await jn(l),E))}}(de(u),h,a,c)}function Qb(n,e){return sb(de(n=O(n,Q)),Mo(e)?e:{next:e})}function cr(n,e){return function(t,s){const r=new ae;return t.asyncQueue.enqueueAndForget(async()=>R_(await _c(t),s,r)),r.promise}(de(n),e)}function Cc(n,e,t){const s=t.docs.get(e._key),r=new pn(n);return new ht(n,r,e._key,s,new Ut(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=dn(e)}get(e){const t=vt(e,this._firestore),s=new Vb(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return T();const i=r[0];if(i.isFoundDocument())return new Ms(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new Ms(this._firestore,s,t._key,null,t.converter);throw T()})}set(e,t,s){const r=vt(e,this._firestore),i=Fi(r.converter,t,s),o=Mi(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=vt(e,this._firestore);let o;return o=typeof(t=F(t))=="string"||t instanceof xt?Ec(this._dataReader,"Transaction.update",i._key,t,s,r):Tc(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=vt(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=vt(e,this._firestore),s=new pn(this._firestore);return super.get(e).then(r=>new ht(this._firestore,s,t._key,r._document,new Ut(!1,!1),t.converter))}}function Xb(n,e){return rb(de(n=O(n,Q)),t=>e(new Yb(n,t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){return new or("deleteField")}function Zb(){return new Ic("serverTimestamp")}function eI(...n){return new Tb("arrayUnion",n)}function tI(...n){return new Eb("arrayRemove",n)}function nI(n){return new Sb("increment",n)}(function(n,e=!0){(function(t){Jn=t})(ri),jt(new at("firestore",(t,{options:s})=>{const r=t.getProvider("app").getImmediate(),i=new Q(r,new Tw(t.getProvider("auth-internal")),new kw(t.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ye(pu,"3.4.5",n),Ye(pu,"3.4.5","esm2017")})();const sI="@firebase/firestore-compat",rI="0.1.14";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){if(typeof Uint8Array=="undefined")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function dh(){if(!Dw())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Us{constructor(e){this._delegate=e}static fromBase64String(e){return dh(),new Us(et.fromBase64String(e))}static fromUint8Array(e){return lh(),new Us(et.fromUint8Array(e))}toBase64(){return dh(),this._delegate.toBase64()}toUint8Array(){return lh(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n){return iI(n,["next","error","complete"])}function iI(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{enableIndexedDbPersistence(e,t){return db(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return fb(e._delegate)}clearIndexedDbPersistence(e){return pb(e._delegate)}}class Vf{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof Qt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&xs("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){ab(this._delegate,e,t,s)}enableNetwork(){return mb(this._delegate)}disableNetwork(){return yb(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,mf("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return gb(this._delegate)}onSnapshotsInSync(e){return Qb(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Kn(this,wf(this._delegate,e))}catch(t){throw ke(t,"collection()","Firestore.collection()")}}doc(e){try{return new $e(this,Jr(this._delegate,e))}catch(t){throw ke(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Se(this,cb(this._delegate,e))}catch(t){throw ke(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Xb(this._delegate,t=>e(new Bf(this,t)))}batch(){return de(this._delegate),new qf(new Bb(this._delegate,e=>cr(this._delegate,e)))}loadBundle(e){return wb(this._delegate,e)}namedQuery(e){return vb(this._delegate,e).then(t=>t?new Se(this,t):null)}}class Vi extends kc{constructor(e){super();this.firestore=e}convertBytes(e){return new Us(new et(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return $e.forKey(t,this.firestore,null)}}function aI(n){vw(n)}class Bf{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Vi(e)}get(e){const t=Ft(e);return this._delegate.get(t).then(s=>new Fs(this._firestore,new ht(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const r=Ft(e);return s?(Ac("Transaction.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=Ft(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=Ft(e);return this._delegate.delete(t),this}}class qf{constructor(e){this._delegate=e}set(e,t,s){const r=Ft(e);return s?(Ac("WriteBatch.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=Ft(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=Ft(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class nn{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new ws(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Vs(this._firestore,s),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=nn.INSTANCES;let r=s.get(e);r||(r=new WeakMap,s.set(e,r));let i=r.get(t);return i||(i=new nn(e,new Vi(e),t),r.set(t,i)),i}}nn.INSTANCES=new WeakMap;class $e{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vi(e)}static forPath(e,t,s){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new $e(t,new B(t._delegate,s,new _(e)))}static forKey(e,t,s){return new $e(t,new B(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Kn(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Kn(this.firestore,wf(this._delegate,e))}catch(t){throw ke(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=F(e),e instanceof B?vf(this._delegate,e):!1}set(e,t){t=Ac("DocumentReference.set",t);try{return t?uh(this._delegate,e,t):uh(this._delegate,e)}catch(s){throw ke(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?hh(this._delegate,e):hh(this._delegate,e,t,...s)}catch(r){throw ke(r,"updateDoc()","DocumentReference.update()")}}delete(){return Hb(this._delegate)}onSnapshot(...e){const t=$f(e),s=jf(e,r=>new Fs(this.firestore,new ht(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return Ff(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=$b(this._delegate):(e==null?void 0:e.source)==="server"?t=jb(this._delegate):t=qb(this._delegate),t.then(s=>new Fs(this.firestore,new ht(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new $e(this.firestore,e?this._delegate.withConverter(nn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ke(n,e,t){return n.message=n.message.replace(e,t),n}function $f(n){for(const e of n)if(typeof e=="object"&&!Fo(e))return e;return{}}function jf(n,e){var t,s;let r;return Fo(n[0])?r=n[0]:Fo(n[1])?r=n[1]:typeof n[0]=="function"?r={next:n[0],error:n[1],complete:n[2]}:r={next:n[1],error:n[2],complete:n[3]},{next:i=>{r.next&&r.next(e(i))},error:(t=r.error)===null||t===void 0?void 0:t.bind(r),complete:(s=r.complete)===null||s===void 0?void 0:s.bind(r)}}class Fs{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new $e(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Nf(this._delegate,e._delegate)}}class Vs extends Fs{data(e){const t=this._delegate.data(e);return _w(t!==void 0),t}}class Se{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vi(e)}where(e,t,s){try{return new Se(this.firestore,mt(this._delegate,Db(e,t,s)))}catch(r){throw ke(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Se(this.firestore,mt(this._delegate,Rb(e,t)))}catch(s){throw ke(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Se(this.firestore,mt(this._delegate,Ob(e)))}catch(t){throw ke(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Se(this.firestore,mt(this._delegate,Pb(e)))}catch(t){throw ke(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Se(this.firestore,mt(this._delegate,Lb(...e)))}catch(t){throw ke(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Se(this.firestore,mt(this._delegate,Mb(...e)))}catch(t){throw ke(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Se(this.firestore,mt(this._delegate,Ub(...e)))}catch(t){throw ke(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Se(this.firestore,mt(this._delegate,Fb(...e)))}catch(t){throw ke(t,"endAt()","Query.endAt()")}}isEqual(e){return _f(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=Gb(this._delegate):(e==null?void 0:e.source)==="server"?t=zb(this._delegate):t=Kb(this._delegate),t.then(s=>new Vo(this.firestore,new kt(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=$f(e),s=jf(e,r=>new Vo(this.firestore,new kt(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return Ff(this._delegate,t,s)}withConverter(e){return new Se(this.firestore,e?this._delegate.withConverter(nn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class cI{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Vs(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Vo{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Se(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Vs(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new cI(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new Vs(this._firestore,s))})}isEqual(e){return Nf(this._delegate,e._delegate)}}class Kn extends Se{constructor(e,t){super(e,t);this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new $e(this.firestore,e):null}doc(e){try{return e===void 0?new $e(this.firestore,Jr(this._delegate)):new $e(this.firestore,Jr(this._delegate,e))}catch(t){throw ke(t,"doc()","CollectionReference.doc()")}}add(e){return Wb(this._delegate,e).then(t=>new $e(this.firestore,t))}isEqual(e){return vf(this._delegate,e._delegate)}withConverter(e){return new Kn(this.firestore,e?this._delegate.withConverter(nn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ft(n){return O(n,B)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(...e){this._delegate=new xt(...e)}static documentId(){return new Dc(ie.keyField().canonicalString())}isEqual(e){return e=F(e),e instanceof xt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._delegate=e}static serverTimestamp(){const e=Zb();return e._methodName="FieldValue.serverTimestamp",new Pt(e)}static delete(){const e=Jb();return e._methodName="FieldValue.delete",new Pt(e)}static arrayUnion(...e){const t=eI(...e);return t._methodName="FieldValue.arrayUnion",new Pt(t)}static arrayRemove(...e){const t=tI(...e);return t._methodName="FieldValue.arrayRemove",new Pt(t)}static increment(e){const t=nI(e);return t._methodName="FieldValue.increment",new Pt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={Firestore:Vf,GeoPoint:Pi,Timestamp:ce,Blob:Us,Transaction:Bf,WriteBatch:qf,DocumentReference:$e,DocumentSnapshot:Fs,Query:Se,QueryDocumentSnapshot:Vs,QuerySnapshot:Vo,CollectionReference:Kn,FieldPath:Dc,FieldValue:Pt,setLogLevel:aI,CACHE_SIZE_UNLIMITED:lb};function hI(n,e){n.INTERNAL.registerComponent(new at("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(s,r)},"PUBLIC").setServiceProps(Object.assign({},uI)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(n){hI(n,(e,t)=>new Vf(e,t,new oI)),n.registerVersion(sI,rI)}lI(ii);const dI={apiKey:"AIzaSyCuVNZo9j6IK_azbbaGrHxWCq1SQIUOVKQ",authDomain:"fazweb-fd34e.firebaseapp.com",projectId:"fazweb-fd34e",storageBucket:"fazweb-fd34e.appspot.com",messagingSenderId:"753269671192",appId:"1:753269671192:web:20df071a7705c0e59b8a6d",measurementId:"G-WV78ZQVTRQ"},fI=ii.initializeApp(dI),pI=fI.firestore(),gI=pI.collection("portfolios").orderBy("id"),mI=()=>{const n=Hf([]),e=gI.onSnapshot(t=>{n.value=t.docs.map(s=>Pc({id:s.id},s.data()))});return Wf(e),n};var Nc="/assets/bootstrap.e0f47d52.png";const yI={name:"portfolio",data:function(){return{portfolios:mI()}},components:{}},Bi=n=>(Jf("data-v-6eed02d3"),n=n(),Zf(),n),wI={class:"w-full pb-20"},vI=Bi(()=>R("div",{class:"flex flex-col space-y-2 items-center justify-center text-lg text-center md:text-left md:mt-20"},[R("label",{class:"text-5xl font-semibold tracking-wider text-center"},"Portfolio"),R("label",null,"My personal and team projects, always there if you need.")],-1)),_I={key:0,class:"flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300"},bI={class:"md:w-6/12 w-full relative"},II=["src"],TI={class:"bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 inset-x-0 mx-auto w-min absolute shadow-xl backdrop-blur dark:text-gray-700"},EI={class:"md:w-6/12 w-full flex flex-col space-y-10 my-auto md:py-4 py-2 px-4 md:px-4"},SI={class:"flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0"},xI={class:"md:text-4xl text-3xl font-semibold tracking-wider"},kI=["innerHTML"],CI={class:"flex flex-col space-y-4"},AI=Bi(()=>R("h1",{class:"text-xl md:text-2xl font-semibold"},"Tech Stack",-1)),DI={class:"flex flex-row px-4 space-x-8 snap-x overflow-x-auto"},NI={key:0,src:Bo,class:"object-contain w-12 snap-center shrink-0"},RI={key:1,src:qo,class:"object-contain w-12 snap-center shrink-0"},OI={key:2,src:Nc,class:"object-contain w-12 snap-center shrink-0"},PI={key:3,src:$o,class:"object-contain w-12 snap-center shrink-0"},LI={key:4,src:jo,class:"object-contain w-12 snap-center shrink-0"},MI={key:5,src:Gn,class:"object-contain w-12 snap-center shrink-0"},UI={key:6,src:Ko,class:"object-contain w-12 snap-center shrink-0"},FI={key:7,src:Gn,class:"object-contain w-12 snap-center shrink-0"},VI={key:8,src:Go,class:"object-contain w-12 snap-center shrink-0"},BI={key:9,src:zo,class:"object-contain w-12 snap-center shrink-0"},qI={key:10,src:ep,class:"object-contain w-12 snap-center shrink-0"},$I={key:11,src:tp,class:"object-contain w-12 snap-center shrink-0"},jI={key:12,src:Ho,class:"object-contain w-12 snap-center shrink-0"},KI={key:1,class:"h-auto md:max-h-96 flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300"},GI={class:"md:w-6/12 w-full relative"},zI=["src"],HI={class:"bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700"},WI={class:"md:w-6/12 w-full flex flex-col space-y-10 my-auto md:py-4 py-2 px-4 md:px-4"},QI={class:"flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0"},YI={class:"md:text-4xl text-3xl font-semibold tracking-wider"},XI=["innerHTML"],JI={class:"flex flex-col space-y-4"},ZI=Bi(()=>R("h1",{class:"text-xl md:text-2xl font-semibold"},"Tech Stack",-1)),eT={class:"flex flex-row px-4 space-x-8 snap-x overflow-x-auto"},tT={key:0,src:Bo,class:"object-contain w-12 snap-center shrink-0"},nT={key:1,src:qo,class:"object-contain w-12 snap-center shrink-0"},sT={key:2,src:Nc,class:"object-contain w-12 snap-center shrink-0"},rT={key:3,src:$o,class:"object-contain w-12 snap-center shrink-0"},iT={key:4,src:jo,class:"object-contain w-12 snap-center shrink-0"},oT={key:5,src:Gn,class:"object-contain w-12 snap-center shrink-0"},aT={key:6,src:Ko,class:"object-contain w-12 snap-center shrink-0"},cT={key:7,src:Gn,class:"object-contain w-12 snap-center shrink-0"},uT={key:8,src:Go,class:"object-contain w-12 snap-center shrink-0"},hT={key:9,src:zo,class:"object-contain w-12 snap-center shrink-0"},lT={key:10,src:Ho,class:"object-contain w-12 snap-center shrink-0"},dT={key:2,class:"h-auto md:max-h-96 flex flex-col md:flex-row-reverse space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300 md:space-x-reverse"},fT={class:"md:w-6/12 w-full relative"},pT=["src"],gT={class:"bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700"},mT={class:"md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-6 p-2"},yT={class:"flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0"},wT={class:"md:text-4xl text-3xl font-semibold tracking-wider"},vT=["innerHTML"],_T={class:"flex flex-col space-y-4"},bT=Bi(()=>R("h1",{class:"text-xl md:text-2xl font-semibold"},"Tech Stack",-1)),IT={class:"flex flex-row px-4 space-x-8 snap-x overflow-x-auto"},TT={key:0,src:Bo,class:"object-contain w-12 snap-center shrink-0"},ET={key:1,src:qo,class:"object-contain w-12 snap-center shrink-0"},ST={key:2,src:Nc,class:"object-contain w-12 snap-center shrink-0"},xT={key:3,src:$o,class:"object-contain w-12 snap-center shrink-0"},kT={key:4,src:jo,class:"object-contain w-12 snap-center shrink-0"},CT={key:5,src:Gn,class:"object-contain w-12 snap-center shrink-0"},AT={key:6,src:Ko,class:"object-contain w-12 snap-center shrink-0"},DT={key:7,src:Gn,class:"object-contain w-12 snap-center shrink-0"},NT={key:8,src:Go,class:"object-contain w-12 snap-center shrink-0"},RT={key:9,src:zo,class:"object-contain w-12 snap-center shrink-0"},OT={key:10,src:Ho,class:"object-contain w-12 snap-center shrink-0"};function PT(n,e,t,s,r,i){return x(),k("main",wI,[vI,Qf(Yf,{name:"list",duration:550},{default:Xf(()=>[(x(!0),k(ur,null,hr(n.portfolios,o=>(x(),k("div",{class:"grid gap-20 md:gap-28 my-20",key:o.id,"track-by":"portfolio.id"},[o.id==11?(x(),k("div",_I,[R("div",bI,[R("img",{class:"h-52 object-fill w-52 rounded-2xl mx-auto",src:o.image},null,8,II),R("label",TI,mn(o.date),1)]),R("div",EI,[R("div",SI,[R("h1",xI,mn(o.title),1),R("label",{class:"md:text-lg text-base",innerHTML:o.desc},null,8,kI)]),R("div",CI,[AI,R("div",DI,[(x(!0),k(ur,null,hr(o.tech,a=>(x(),k("div",null,[a=="laravel"?(x(),k("img",NI)):a=="tailwind"?(x(),k("img",RI)):a=="bootstrap"?(x(),k("img",OI)):a=="mysql"?(x(),k("img",PI)):a=="alpine"?(x(),k("img",LI)):a=="gcp"?(x(),k("img",MI)):a=="html"?(x(),k("img",UI)):a=="gcp"?(x(),k("img",FI)):a=="jetstream"?(x(),k("img",VI)):a=="php"?(x(),k("img",BI)):a=="vue"?(x(),k("img",qI)):a=="firebase"?(x(),k("img",$I)):(x(),k("img",jI))]))),256))])])])])):o.id%2!=0?(x(),k("div",KI,[R("div",GI,[R("img",{class:"h-full object-cover w-full rounded-2xl",src:o.image},null,8,zI),R("label",HI,mn(o.date),1)]),R("div",WI,[R("div",QI,[R("h1",YI,mn(o.title),1),R("label",{class:"md:text-lg text-base",innerHTML:o.desc},null,8,XI)]),R("div",JI,[ZI,R("div",eT,[(x(!0),k(ur,null,hr(o.tech,a=>(x(),k("div",null,[a=="laravel"?(x(),k("img",tT)):a=="tailwind"?(x(),k("img",nT)):a=="bootstrap"?(x(),k("img",sT)):a=="mysql"?(x(),k("img",rT)):a=="alpine"?(x(),k("img",iT)):a=="gcp"?(x(),k("img",oT)):a=="html"?(x(),k("img",aT)):a=="gcp"?(x(),k("img",cT)):a=="jetstream"?(x(),k("img",uT)):a=="php"?(x(),k("img",hT)):(x(),k("img",lT))]))),256))])])])])):(x(),k("div",dT,[R("div",fT,[R("img",{class:"h-full w-full object-cover rounded-2xl",src:o.image},null,8,pT),R("label",gT,mn(o.date),1)]),R("div",mT,[R("div",yT,[R("h1",wT,mn(o.title),1),R("label",{class:"md:text-lg text-base",innerHTML:o.desc},null,8,vT)]),R("div",_T,[bT,R("div",IT,[(x(!0),k(ur,null,hr(o.tech,a=>(x(),k("div",null,[a=="laravel"?(x(),k("img",TT)):a=="tailwind"?(x(),k("img",ET)):a=="bootstrap"?(x(),k("img",ST)):a=="mysql"?(x(),k("img",xT)):a=="alpine"?(x(),k("img",kT)):a=="gcp"?(x(),k("img",CT)):a=="html"?(x(),k("img",AT)):a=="gcp"?(x(),k("img",DT)):a=="jetstream"?(x(),k("img",NT)):a=="php"?(x(),k("img",RT)):(x(),k("img",OT))]))),256))])])])]))]))),128))]),_:1})])}var VT=np(yI,[["render",PT],["__scopeId","data-v-6eed02d3"]]);export{VT as default};
