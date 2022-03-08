var Kf=Object.defineProperty;var kc=Object.getOwnPropertySymbols;var Gf=Object.prototype.hasOwnProperty,zf=Object.prototype.propertyIsEnumerable;var Cc=(n,e,t)=>e in n?Kf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ac=(n,e)=>{for(var t in e||(e={}))Gf.call(e,t)&&Cc(n,t,e[t]);if(kc)for(var t of kc(e))zf.call(e,t)&&Cc(n,t,e[t]);return n};import{r as Hf,z as Wf,o as De,c as Ne,F as Dc,A as Nc,p as Qf,b as Yf,y as hl,a as Y,t as Rc}from"./vendor.3299f13a.js";import{b as xn,d as ps,e as st,f as En,g as Or,h as dl,_ as dr,a as fr,c as Xf}from"./gcp.e8f23423.js";import{_ as Jf}from"./index.882a9dce.js";/**
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
 */const fl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Zf=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),s.push(t[l],t[h],t[d],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const m=a<<4&240|u>>2;if(s.push(m),h!==64){const g=u<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ko=function(n){const e=fl(n);return ep.encodeByteArray(e,!0)},Oc=function(n){return Ko(n).replace(/\./g,"")};function Pr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!tp(t)||(n[t]=Pr(n[t],e[t]));return n}function tp(n){return n!=="__proto__"}/**
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
 */class np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function pl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Oc(JSON.stringify(t)),Oc(JSON.stringify(o)),a].join(".")}/**
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
 */function $t(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function rp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ip(){return typeof self=="object"&&self.self===self}function op(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cp(){return $t().indexOf("Electron/")>=0}function up(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lp(){return $t().indexOf("MSAppHost/")>=0}function hp(){return!rp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ml(){return typeof indexedDB=="object"}function dp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const fp="FirebaseError";class Wn extends Error{constructor(e,t,s){super(t);this.code=e,this.customData=s,this.name=fp,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?pp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Wn(r,a,s)}}function pp(n,e){return n.replace(mp,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const mp=/\{\$([^}]+)}/g;/**
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
 */function Pc(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function po(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Lc(i)&&Lc(o)){if(!po(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Lc(n){return n!==null&&typeof n=="object"}function gp(n,e){const t=new yp(n,e);return t.subscribe.bind(t)}class yp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");wp(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=zi),r.error===void 0&&(r.error=zi),r.complete===void 0&&(r.complete=zi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zi(){}/**
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
 */function L(n){return n&&n._delegate?n._delegate:n}class ct{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ot="[DEFAULT]";/**
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
 */class vp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new np;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_p(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(!!s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bp(n){return n===Ot?void 0:n}function _p(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ip{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Go=[];var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const gl={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Tp=N.INFO,xp={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Ep=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=xp[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zo{constructor(e){this.name=e,this._logLevel=Tp,this._logHandler=Ep,this._userLogHandler=null,Go.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}function Sp(n){Go.forEach(e=>{e.setLogLevel(n)})}function kp(n,e){for(const t of Go){let s=null;e&&e.level&&(s=gl[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(r,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(s!=null?s:r.logLevel)&&n({level:N[i].toLowerCase(),message:a,args:o,type:r.name})}}}function Cp(n){return Array.prototype.slice.call(n)}function yl(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function Ho(n,e,t){var s,r=new Promise(function(i,o){s=n[e].apply(n,t),yl(s).then(i,o)});return r.request=s,r}function Ap(n,e,t){var s=Ho(n,e,t);return s.then(function(r){if(!!r)return new Is(r,s.request)})}function Qn(n,e,t){t.forEach(function(s){Object.defineProperty(n.prototype,s,{get:function(){return this[e][s]},set:function(r){this[e][s]=r}})})}function Wo(n,e,t,s){s.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return Ho(this[e],r,arguments)})})}function ii(n,e,t,s){s.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function wl(n,e,t,s){s.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return Ap(this[e],r,arguments)})})}function rn(n){this._index=n}Qn(rn,"_index",["name","keyPath","multiEntry","unique"]);Wo(rn,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);wl(rn,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Is(n,e){this._cursor=n,this._request=e}Qn(Is,"_cursor",["direction","key","primaryKey","value"]);Wo(Is,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(Is.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),yl(e._request).then(function(s){if(!!s)return new Is(s,e._request)})})})});function tt(n){this._store=n}tt.prototype.createIndex=function(){return new rn(this._store.createIndex.apply(this._store,arguments))};tt.prototype.index=function(){return new rn(this._store.index.apply(this._store,arguments))};Qn(tt,"_store",["name","keyPath","indexNames","autoIncrement"]);Wo(tt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);wl(tt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);ii(tt,"_store",IDBObjectStore,["deleteIndex"]);function js(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}js.prototype.objectStore=function(){return new tt(this._tx.objectStore.apply(this._tx,arguments))};Qn(js,"_tx",["objectStoreNames","mode"]);ii(js,"_tx",IDBTransaction,["abort"]);function oi(n,e,t){this._db=n,this.oldVersion=e,this.transaction=new js(t)}oi.prototype.createObjectStore=function(){return new tt(this._db.createObjectStore.apply(this._db,arguments))};Qn(oi,"_db",["name","version","objectStoreNames"]);ii(oi,"_db",IDBDatabase,["deleteObjectStore","close"]);function ai(n){this._db=n}ai.prototype.transaction=function(){return new js(this._db.transaction.apply(this._db,arguments))};Qn(ai,"_db",["name","version","objectStoreNames"]);ii(ai,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(n){[tt,rn].forEach(function(e){n in e.prototype&&(e.prototype[n.replace("open","iterate")]=function(){var t=Cp(arguments),s=t[t.length-1],r=this._store||this._index,i=r[n].apply(r,t.slice(0,-1));i.onsuccess=function(){s(i.result)}})})});[rn,tt].forEach(function(n){n.prototype.getAll||(n.prototype.getAll=function(e,t){var s=this,r=[];return new Promise(function(i){s.iterateCursor(e,function(o){if(!o){i(r);return}if(r.push(o.value),t!==void 0&&r.length==t){i(r);return}o.continue()})})})});function Dp(n,e,t){var s=Ho(indexedDB,"open",[n,e]),r=s.request;return r&&(r.onupgradeneeded=function(i){t&&t(new oi(r.result,i.oldVersion,r.transaction))}),s.then(function(i){return new ai(i)})}/**
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
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Rp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",Mc="0.7.18";/**
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
 */const Qo=new zo("@firebase/app"),Op="@firebase/app-compat",Pp="@firebase/analytics-compat",Lp="@firebase/analytics",Mp="@firebase/app-check-compat",Up="@firebase/app-check",Fp="@firebase/auth",Bp="@firebase/auth-compat",Vp="@firebase/database",qp="@firebase/database-compat",$p="@firebase/functions",jp="@firebase/functions-compat",Kp="@firebase/installations",Gp="@firebase/installations-compat",zp="@firebase/messaging",Hp="@firebase/messaging-compat",Wp="@firebase/performance",Qp="@firebase/performance-compat",Yp="@firebase/remote-config",Xp="@firebase/remote-config-compat",Jp="@firebase/storage",Zp="@firebase/storage-compat",em="@firebase/firestore",tm="@firebase/firestore-compat",nm="firebase",sm="9.6.8";/**
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
 */const jt="[DEFAULT]",rm={[mo]:"fire-core",[Op]:"fire-core-compat",[Lp]:"fire-analytics",[Pp]:"fire-analytics-compat",[Up]:"fire-app-check",[Mp]:"fire-app-check-compat",[Fp]:"fire-auth",[Bp]:"fire-auth-compat",[Vp]:"fire-rtdb",[qp]:"fire-rtdb-compat",[$p]:"fire-fn",[jp]:"fire-fn-compat",[Kp]:"fire-iid",[Gp]:"fire-iid-compat",[zp]:"fire-fcm",[Hp]:"fire-fcm-compat",[Wp]:"fire-perf",[Qp]:"fire-perf-compat",[Yp]:"fire-rc",[Xp]:"fire-rc-compat",[Jp]:"fire-gcs",[Zp]:"fire-gcs-compat",[em]:"fire-fst",[tm]:"fire-fst-compat","fire-js":"fire-js",[nm]:"fire-js-all"};/**
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
 */const Tt=new Map,Ts=new Map;function Lr(n,e){try{n.container.addComponent(e)}catch(t){Qo.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vl(n,e){n.container.addOrOverwriteComponent(e)}function Kt(n){const e=n.name;if(Ts.has(e))return Qo.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,n);for(const t of Tt.values())Lr(t,n);return!0}function bl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function im(n,e,t=jt){bl(n,e).clearInstance(t)}function om(){Ts.clear()}/**
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
 */const am={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ut=new ri("app","Firebase",am);/**
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
 */class cm{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=sm;function _l(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:jt,automaticDataCollectionEnabled:!1},e),s=t.name;if(typeof s!="string"||!s)throw ut.create("bad-app-name",{appName:String(s)});const r=Tt.get(s);if(r){if(po(n,r.options)&&po(t,r.config))return r;throw ut.create("duplicate-app",{appName:s})}const i=new Ip(s);for(const a of Ts.values())i.addComponent(a);const o=new cm(n,t,i);return Tt.set(s,o),o}function um(n=jt){const e=Tt.get(n);if(!e)throw ut.create("no-app",{appName:n});return e}function lm(){return Array.from(Tt.values())}async function Il(n){const e=n.name;Tt.has(e)&&(Tt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Ye(n,e,t){var s;let r=(s=rm[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qo.warn(a.join(" "));return}Kt(new ct(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function Tl(n,e){if(n!==null&&typeof n!="function")throw ut.create("invalid-log-argument");kp(n,e)}function xl(n){Sp(n)}/**
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
 */const hm="firebase-heartbeat-database",dm=1,Gt="firebase-heartbeat-store";let Hi=null;function Yo(){return Hi||(Hi=Dp(hm,dm,n=>{switch(n.oldVersion){case 0:n.createObjectStore(Gt)}}).catch(n=>{throw ut.create("storage-open",{originalErrorMessage:n.message})})),Hi}async function fm(n){try{return(await Yo()).transaction(Gt).objectStore(Gt).get(Xo(n))}catch(e){throw ut.create("storage-get",{originalErrorMessage:e.message})}}async function Wi(n,e){try{const s=(await Yo()).transaction(Gt,"readwrite");return await s.objectStore(Gt).put(e,Xo(n)),s.complete}catch(t){throw ut.create("storage-set",{originalErrorMessage:t.message})}}async function pm(n){try{const t=(await Yo()).transaction(Gt,"readwrite");return await t.objectStore(Gt).delete(Xo(n)),t.complete}catch(e){throw ut.create("storage-delete",{originalErrorMessage:e.message})}}function Xo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const mm=1024,gm=30*24*60*60*1e3;class ym{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bm(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(r=>r.date===s))return this._heartbeatsCache.push({date:s,userAgent:t}),this._heartbeatsCache=this._heartbeatsCache.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=gm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:t}=vm(this._heartbeatsCache),s=Ko(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),s}}function wm(){return new Date().toISOString().substring(0,10)}function vm(n,e=mm){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.userAgent===r.userAgent);if(i){if(i.dates.push(r.date),Uc(t)>e){i.dates.pop();break}}else if(t.push({userAgent:r.userAgent,dates:[r.date]}),Uc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class bm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?dp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fm(this.app);return(t==null?void 0:t.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Wi(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Wi(this.app,{heartbeats:[...s,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Wi(this.app,{heartbeats:s.filter(r=>!e.includes(r))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return pm(this.app)}}function Uc(n){return Ko(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function _m(n){Kt(new ct("platform-logger",e=>new Np(e),"PRIVATE")),Kt(new ct("heartbeat",e=>new ym(e),"PRIVATE")),Ye(mo,Mc,n),Ye(mo,Mc,"esm2017"),Ye("fire-js","")}_m("");var Im=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:ci,_DEFAULT_ENTRY_NAME:jt,_addComponent:Lr,_addOrOverwriteComponent:vl,_apps:Tt,_clearComponents:om,_components:Ts,_getProvider:bl,_registerComponent:Kt,_removeServiceInstance:im,deleteApp:Il,getApp:um,getApps:lm,initializeApp:_l,onLog:Tl,registerVersion:Ye,setLogLevel:xl,FirebaseError:Wn},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Tm{constructor(e,t){this._delegate=e,this.firebase=t,Lr(e,new ct("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Il(this._delegate)))}_getService(e,t=jt){var s;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((s=r.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=jt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Lr(this._delegate,e)}_addOrOverwriteComponent(e){vl(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const xm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fc=new ri("app-compat","Firebase",xm);/**
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
 */function Em(n){const e={},t={__esModule:!0,initializeApp:i,app:r,registerVersion:Ye,setLogLevel:xl,onLog:Tl,apps:null,SDK_VERSION:ci,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:Im}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(u){delete e[u]}function r(u){if(u=u||jt,!Pc(e,u))throw Fc.create("no-app",{appName:u});return e[u]}r.App=n;function i(u,l={}){const h=_l(u,l);if(Pc(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Kt(u)&&u.type==="PUBLIC"){const d=(m=r())=>{if(typeof m[h]!="function")throw Fc.create("invalid-app-argument",{appName:l});return m[h]()};u.serviceProps!==void 0&&Pr(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...m){return this._getService.bind(this,l).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function El(){const n=Em(Tm);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:El,extendNamespace:e,createSubscribe:gp,ErrorFactory:ri,deepExtend:Pr});function e(t){Pr(n,t)}return n}const Sm=El();/**
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
 */const Bc=new zo("@firebase/app-compat"),km="@firebase/app-compat",Cm="0.1.19";/**
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
 */function Am(n){Ye(km,Cm,n)}/**
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
 */if(ip()&&self.firebase!==void 0){Bc.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Bc.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ui=Sm;Am();/**
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
 */const Sl="firebasestorage.googleapis.com",kl="storageBucket",Dm=2*60*1e3,Nm=10*60*1e3;/**
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
 */class H extends Wn{constructor(e,t){super(Qi(e),`Firebase Storage: ${t} (${Qi(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,H.prototype)}_codeEquals(e){return Qi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Qi(n){return"storage/"+n}function Jo(){const n="An unknown error occurred, please check the error payload for server response.";return new H("unknown",n)}function Rm(n){return new H("object-not-found","Object '"+n+"' does not exist.")}function Om(n){return new H("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Pm(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new H("unauthenticated",n)}function Lm(){return new H("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Mm(n){return new H("unauthorized","User does not have permission to access '"+n+"'.")}function Um(){return new H("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Cl(){return new H("canceled","User canceled the upload/download.")}function Fm(n){return new H("invalid-url","Invalid URL '"+n+"'.")}function Bm(n){return new H("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function Vm(){return new H("no-default-bucket","No default bucket found. Did you set the '"+kl+"' property when initializing the app?")}function Al(){return new H("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function qm(){return new H("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function $m(){return new H("no-download-url","The given file does not have any download URLs.")}function Cn(n){return new H("invalid-argument",n)}function Dl(){return new H("app-deleted","The Firebase app was deleted.")}function Nl(n){return new H("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ms(n,e){return new H("invalid-format","String does not match format '"+n+"': "+e)}function cs(n){throw new H("internal-error","Internal error: "+n)}/**
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
 */class ve{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ve.makeFromUrl(e,t)}catch{return new ve(e,"")}if(s.path==="")return s;throw Bm(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(V){V.path_=decodeURIComponent(V.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),g={bucket:1,path:3},_=t===Sl?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",O=new RegExp(`^https?://${_}/${r}/${x}`,"i"),j=[{regex:a,indices:c,postModify:i},{regex:m,indices:g,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let V=0;V<j.length;V++){const nt=j[V],mt=nt.regex.exec(e);if(mt){const gn=mt[nt.indices.bucket];let as=mt[nt.indices.path];as||(as=""),s=new ve(gn,as),nt.postModify(s);break}}if(s==null)throw Fm(e);return s}}class jm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Km(n,e,t){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...x){u||(u=!0,e.apply(null,x))}function h(x){r=setTimeout(()=>{r=null,n(m,c())},x)}function d(){i&&clearTimeout(i)}function m(x,...O){if(u){d();return}if(x){d(),l.call(null,x,...O);return}if(c()||o){d(),l.call(null,x,...O);return}s<64&&(s*=2);let j;a===1?(a=2,j=0):j=(s+Math.random())*1e3,h(j)}let g=!1;function _(x){g||(g=!0,d(),!u&&(r!==null?(x||(a=2),clearTimeout(r),h(0)):x||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},t),_}function Gm(n){n(!1)}/**
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
 */function zm(n){return n!==void 0}function Hm(n){return typeof n=="function"}function Wm(n){return typeof n=="object"&&!Array.isArray(n)}function li(n){return typeof n=="string"||n instanceof String}function Vc(n){return Zo()&&n instanceof Blob}function Zo(){return typeof Blob!="undefined"}function go(n,e,t,s){if(s<e)throw Cn(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Cn(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function At(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Rl(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}/**
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
 */class Qm{constructor(e,t,s,r,i,o,a,c,u,l,h){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new pr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Vt.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===Vt.ABORT;s(!1,new pr(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new pr(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());zm(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Jo();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Dl():Cl();o(c)}else{const c=Um();o(c)}};this.canceled_?t(!1,new pr(!1,null,!0)):this.backoffId_=Km(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Gm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return t||r||i}}class pr{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Ym(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Xm(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Jm(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Zm(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function eg(n,e,t,s,r,i){const o=Rl(n.urlParams),a=n.url+o,c=Object.assign({},n.headers);return Jm(c,e),Ym(c,t),Xm(c,i),Zm(c,s),new Qm(a,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r)}/**
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
 */function tg(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function ng(...n){const e=tg();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Zo())return new Blob(n);throw new H("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function sg(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function rg(n){return atob(n)}/**
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
 */const Be={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yi{constructor(e,t){this.data=e,this.contentType=t||null}}function Ol(n,e){switch(n){case Be.RAW:return new Yi(Pl(e));case Be.BASE64:case Be.BASE64URL:return new Yi(Ll(n,e));case Be.DATA_URL:return new Yi(og(e),ag(e))}throw Jo()}function Pl(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=n.charCodeAt(++t);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function ig(n){let e;try{e=decodeURIComponent(n)}catch{throw ms(Be.DATA_URL,"Malformed data URL.")}return Pl(e)}function Ll(n,e){switch(n){case Be.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw ms(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Be.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw ms(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=rg(e)}catch{throw ms(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class Ml{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ms(Be.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=cg(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function og(n){const e=new Ml(n);return e.base64?Ll(Be.BASE64,e.rest):ig(e.rest)}function ag(n){return new Ml(n).contentType}function cg(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class rt{constructor(e,t){let s=0,r="";Vc(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Vc(this.data_)){const s=this.data_,r=sg(s,e,t);return r===null?null:new rt(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new rt(s,!0)}}static getBlob(...e){if(Zo()){const t=e.map(s=>s instanceof rt?s.data_:s);return new rt(ng.apply(null,t))}else{const t=e.map(o=>li(o)?Ol(Be.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new rt(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ea(n){let e;try{e=JSON.parse(n)}catch{return null}return Wm(e)?e:null}/**
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
 */function ug(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function lg(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Ul(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function hg(n,e){return e}class Ie{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||hg}}let mr=null;function dg(n){return!li(n)||n.length<2?n:Ul(n)}function hi(){if(mr)return mr;const n=[];n.push(new Ie("bucket")),n.push(new Ie("generation")),n.push(new Ie("metageneration")),n.push(new Ie("name","fullPath",!0));function e(i,o){return dg(o)}const t=new Ie("name");t.xform=e,n.push(t);function s(i,o){return o!==void 0?Number(o):o}const r=new Ie("size");return r.xform=s,n.push(r),n.push(new Ie("timeCreated")),n.push(new Ie("updated")),n.push(new Ie("md5Hash",null,!0)),n.push(new Ie("cacheControl",null,!0)),n.push(new Ie("contentDisposition",null,!0)),n.push(new Ie("contentEncoding",null,!0)),n.push(new Ie("contentLanguage",null,!0)),n.push(new Ie("contentType",null,!0)),n.push(new Ie("metadata","customMetadata",!0)),mr=n,mr}function fg(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new ve(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function pg(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const o=t[i];s[o.local]=o.xform(s,e[o.server])}return fg(s,n),s}function Fl(n,e,t){const s=ea(e);return s===null?null:pg(n,s,t)}function mg(n,e,t,s){const r=ea(e);if(r===null||!li(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=n.bucket,h=n.fullPath,d="/b/"+o(l)+"/o/"+o(h),m=At(d,t,s),g=Rl({alt:"media",token:u});return m+g})[0]}function ta(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}/**
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
 */const qc="prefixes",$c="items";function gg(n,e,t){const s={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[qc])for(const r of t[qc]){const i=r.replace(/\/$/,""),o=n._makeStorageReference(new ve(e,i));s.prefixes.push(o)}if(t[$c])for(const r of t[$c]){const i=n._makeStorageReference(new ve(e,r.name));s.items.push(i)}return s}function yg(n,e,t){const s=ea(t);return s===null?null:gg(n,e,s)}class dt{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Xe(n){if(!n)throw Jo()}function di(n,e){function t(s,r){const i=Fl(n,r,e);return Xe(i!==null),i}return t}function wg(n,e){function t(s,r){const i=yg(n,e,r);return Xe(i!==null),i}return t}function vg(n,e){function t(s,r){const i=Fl(n,r,e);return Xe(i!==null),mg(i,r,n.host,n._protocol)}return t}function Yn(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=Lm():r=Pm():t.getStatus()===402?r=Om(n.bucket):t.getStatus()===403?r=Mm(n.path):r=s,r.serverResponse=s.serverResponse,r}return e}function fi(n){const e=Yn(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Rm(n.path)),i.serverResponse=r.serverResponse,i}return t}function Bl(n,e,t){const s=e.fullServerUrl(),r=At(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new dt(r,i,di(n,t),o);return a.errorHandler=fi(e),a}function bg(n,e,t,s,r){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",t&&t.length>0&&(i.delimiter=t),s&&(i.pageToken=s),r&&(i.maxResults=r);const o=e.bucketOnlyServerUrl(),a=At(o,n.host,n._protocol),c="GET",u=n.maxOperationRetryTime,l=new dt(a,c,wg(n,e.bucket),u);return l.urlParams=i,l.errorHandler=Yn(e),l}function _g(n,e,t){const s=e.fullServerUrl(),r=At(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,a=new dt(r,i,vg(n,t),o);return a.errorHandler=fi(e),a}function Ig(n,e,t,s){const r=e.fullServerUrl(),i=At(r,n.host,n._protocol),o="PATCH",a=ta(t,s),c={"Content-Type":"application/json; charset=utf-8"},u=n.maxOperationRetryTime,l=new dt(i,o,di(n,s),u);return l.headers=c,l.body=a,l.errorHandler=fi(e),l}function Tg(n,e){const t=e.fullServerUrl(),s=At(t,n.host,n._protocol),r="DELETE",i=n.maxOperationRetryTime;function o(c,u){}const a=new dt(s,r,o,i);return a.successCodes=[200,204],a.errorHandler=fi(e),a}function xg(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Vl(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=xg(null,e)),s}function Eg(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let j="";for(let V=0;V<2;V++)j=j+Math.random().toString().slice(2);return j}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Vl(e,s,r),l=ta(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",m=rt.getBlob(h,s,d);if(m===null)throw Al();const g={name:u.fullPath},_=At(i,n.host,n._protocol),x="POST",O=n.maxUploadRetryTime,$=new dt(_,x,di(n,t),O);return $.urlParams=g,$.headers=o,$.body=m.uploadData(),$.errorHandler=Yn(e),$}class Mr{constructor(e,t,s,r){this.current=e,this.total=t,this.finalized=!!s,this.metadata=r||null}}function na(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Xe(!1)}return Xe(!!t&&(e||["active"]).indexOf(t)!==-1),t}function Sg(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),o=Vl(e,s,r),a={name:o.fullPath},c=At(i,n.host,n._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ta(o,t),d=n.maxUploadRetryTime;function m(_){na(_);let x;try{x=_.getResponseHeader("X-Goog-Upload-URL")}catch{Xe(!1)}return Xe(li(x)),x}const g=new dt(c,u,m,d);return g.urlParams=a,g.headers=l,g.body=h,g.errorHandler=Yn(e),g}function kg(n,e,t,s){const r={"X-Goog-Upload-Command":"query"};function i(u){const l=na(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Xe(!1)}h||Xe(!1);const d=Number(h);return Xe(!isNaN(d)),new Mr(d,s.size(),l==="final")}const o="POST",a=n.maxUploadRetryTime,c=new dt(t,o,i,a);return c.headers=r,c.errorHandler=Yn(e),c}const jc=256*1024;function Cg(n,e,t,s,r,i,o,a){const c=new Mr(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw qm();const u=c.total-c.current;let l=u;r>0&&(l=Math.min(l,r));const h=c.current,d=h+l,g={"X-Goog-Upload-Command":l===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},_=s.slice(h,d);if(_===null)throw Al();function x(V,nt){const mt=na(V,["active","final"]),gn=c.current+l,as=s.size();let Gi;return mt==="final"?Gi=di(e,i)(V,nt):Gi=null,new Mr(gn,as,mt==="final",Gi)}const O="POST",$=e.maxUploadRetryTime,j=new dt(t,O,x,$);return j.headers=g,j.body=_.uploadData(),j.progressCallback=a||null,j.errorHandler=Yn(n),j}/**
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
 */const Ag={STATE_CHANGED:"state_changed"},xe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xi(n){switch(n){case"running":case"pausing":case"canceling":return xe.RUNNING;case"paused":return xe.PAUSED;case"success":return xe.SUCCESS;case"canceled":return xe.CANCELED;case"error":return xe.ERROR;default:return xe.ERROR}}/**
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
 */class Dg{constructor(e,t,s){if(Hm(e)||t!=null||s!=null)this.next=e,this.error=t!=null?t:void 0,this.complete=s!=null?s:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function yn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Ng{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r){if(this.sent_)throw cs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw cs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Rg extends Ng{initXhr(){this.xhr_.responseType="text"}}function He(){return new Rg}/**
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
 */class ql{constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=hi(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=r,this._transition("error"))},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=Sg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,He,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const r=kg(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,He,t,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=jc*this._chunkMultiplier,t=new Mr(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Cg(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,He,r,i);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){jc*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=Bl(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,He,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=Eg(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,He,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Cl(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xi(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,r){const i=new Dg(t||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Xi(this._state)){case xe.SUCCESS:yn(this._resolve.bind(null,this.snapshot))();break;case xe.CANCELED:case xe.ERROR:const t=this._reject;yn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Xi(this._state)){case xe.RUNNING:case xe.PAUSED:e.next&&yn(e.next.bind(e,this.snapshot))();break;case xe.SUCCESS:e.complete&&yn(e.complete.bind(e))();break;case xe.CANCELED:case xe.ERROR:e.error&&yn(e.error.bind(e,this._error))();break;default:e.error&&yn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class zt{constructor(e,t){this._service=e,t instanceof ve?this._location=t:this._location=ve.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new zt(e,t)}get root(){const e=new ve(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ul(this._location.path)}get storage(){return this._service}get parent(){const e=ug(this._location.path);if(e===null)return null;const t=new ve(this._location.bucket,e);return new zt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Nl(e)}}function Og(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new ql(n,new rt(e),t)}function Pg(n){const e={prefixes:[],items:[]};return $l(n,e).then(()=>e)}async function $l(n,e,t){const r=await jl(n,{pageToken:t});e.prefixes.push(...r.prefixes),e.items.push(...r.items),r.nextPageToken!=null&&await $l(n,e,r.nextPageToken)}function jl(n,e){e!=null&&typeof e.maxResults=="number"&&go("options.maxResults",1,1e3,e.maxResults);const t=e||{},s=bg(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(s,He)}function Lg(n){n._throwIfRoot("getMetadata");const e=Bl(n.storage,n._location,hi());return n.storage.makeRequestWithTokens(e,He)}function Mg(n,e){n._throwIfRoot("updateMetadata");const t=Ig(n.storage,n._location,e,hi());return n.storage.makeRequestWithTokens(t,He)}function Ug(n){n._throwIfRoot("getDownloadURL");const e=_g(n.storage,n._location,hi());return n.storage.makeRequestWithTokens(e,He).then(t=>{if(t===null)throw $m();return t})}function Fg(n){n._throwIfRoot("deleteObject");const e=Tg(n.storage,n._location);return n.storage.makeRequestWithTokens(e,He)}function Kl(n,e){const t=lg(n._location.path,e),s=new ve(n._location.bucket,t);return new zt(n.storage,s)}/**
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
 */function Bg(n){return/^[A-Za-z]+:\/\//.test(n)}function Vg(n,e){return new zt(n,e)}function Gl(n,e){if(n instanceof sa){const t=n;if(t._bucket==null)throw Vm();const s=new zt(t,t._bucket);return e!=null?Gl(s,e):s}else return e!==void 0?Kl(n,e):n}function qg(n,e){if(e&&Bg(e)){if(n instanceof sa)return Vg(n,e);throw Cn("To use ref(service, url), the first argument must be a Storage instance.")}else return Gl(n,e)}function Kc(n,e){const t=e==null?void 0:e[kl];return t==null?null:ve.makeFromBucketSpec(t,n)}function $g(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:pl(r,n.app.options.projectId))}class sa{constructor(e,t,s,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Sl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dm,this._maxUploadRetryTime=Nm,this._requests=new Set,r!=null?this._bucket=ve.makeFromBucketSpec(r,this._host):this._bucket=Kc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ve.makeFromBucketSpec(this._url,e):this._bucket=Kc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){go("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){go("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zt(this,e)}_makeRequest(e,t,s,r){if(this._deleted)return new jm(Dl());{const i=eg(e,this._appId,s,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const Gc="@firebase/storage",zc="0.9.2";/**
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
 */const jg="storage";function Kg(n,e,t){return n=L(n),Og(n,e,t)}function Gg(n){return n=L(n),Lg(n)}function zg(n,e){return n=L(n),Mg(n,e)}function Hg(n,e){return n=L(n),jl(n,e)}function Wg(n){return n=L(n),Pg(n)}function Qg(n){return n=L(n),Ug(n)}function Yg(n){return n=L(n),Fg(n)}function Hc(n,e){return n=L(n),qg(n,e)}function Xg(n,e){return Kl(n,e)}function Jg(n,e,t,s={}){$g(n,e,t,s)}function Zg(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new sa(t,s,r,e,ci)}function ey(){Kt(new ct(jg,Zg,"PUBLIC").setMultipleInstances(!0)),Ye(Gc,zc,""),Ye(Gc,zc,"esm2017")}ey();/**
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
 */class gr{constructor(e,t,s){this._delegate=e,this.task=t,this.ref=s}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class Wc{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new gr(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(s=>{if(e)return e(new gr(s,this,this._ref))},t)}on(e,t,s,r){let i;return t&&(typeof t=="function"?i=o=>t(new gr(o,this,this._ref)):i={next:t.next?o=>t.next(new gr(o,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,s||void 0,r||void 0)}}class Qc{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new ot(e,this._service))}get items(){return this._delegate.items.map(e=>new ot(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class ot{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Xg(this._delegate,e);return new ot(t,this.storage)}get root(){return new ot(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new ot(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Wc(Kg(this._delegate,e,t),this)}putString(e,t=Be.RAW,s){this._throwIfRoot("putString");const r=Ol(t,e),i=Object.assign({},s);return i.contentType==null&&r.contentType!=null&&(i.contentType=r.contentType),new Wc(new ql(this._delegate,new rt(r.data,!0),i),this)}listAll(){return Wg(this._delegate).then(e=>new Qc(e,this.storage))}list(e){return Hg(this._delegate,e||void 0).then(t=>new Qc(t,this.storage))}getMetadata(){return Gg(this._delegate)}updateMetadata(e){return zg(this._delegate,e)}getDownloadURL(){return Qg(this._delegate)}delete(){return this._throwIfRoot("delete"),Yg(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw Nl(e)}}/**
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
 */class zl{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Yc(e))throw Cn("ref() expected a child path but got a URL, use refFromURL instead.");return new ot(Hc(this._delegate,e),this)}refFromURL(e){if(!Yc(e))throw Cn("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ve.makeFromUrl(e,this._delegate.host)}catch{throw Cn("refFromUrl() expected a valid full URL but got an invalid one.")}return new ot(Hc(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,s={}){Jg(this._delegate,e,t,s)}}function Yc(n){return/^[A-Za-z]+:\/\//.test(n)}const ty="@firebase/storage-compat",ny="0.1.10";/**
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
 */const sy="storage-compat";function ry(n,{instanceIdentifier:e}){const t=n.getProvider("app-compat").getImmediate(),s=n.getProvider("storage").getImmediate({identifier:e});return new zl(t,s)}function iy(n){const e={TaskState:xe,TaskEvent:Ag,StringFormat:Be,Storage:zl,Reference:ot};n.INTERNAL.registerComponent(new ct(sy,ry,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),n.registerVersion(ty,ny)}iy(ui);var oy="firebase",ay="9.6.8";/**
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
 */ui.registerVersion(oy,ay,"app-compat");var cy=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},I,ra=ra||{},k=cy||self;function Ur(){}function yo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ks(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function uy(n){return Object.prototype.hasOwnProperty.call(n,Ji)&&n[Ji]||(n[Ji]=++ly)}var Ji="closure_uid_"+(1e9*Math.random()>>>0),ly=0;function hy(n,e,t){return n.call.apply(n.bind,arguments)}function dy(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function pe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pe=hy:pe=dy,pe.apply(null,arguments)}function yr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function ge(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Dt(){this.s=this.s,this.o=this.o}var fy=0,py={};Dt.prototype.s=!1;Dt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),fy!=0)){var n=uy(this);delete py[n]}};Dt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hl=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Wl=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const s=n.length,r=typeof n=="string"?n.split(""):n;for(let i=0;i<s;i++)i in r&&e.call(t,r[i],i,n)};function my(n){e:{var e=ow;const t=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<t;r++)if(r in s&&e.call(void 0,s[r],r,n)){e=r;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Xc(n){return Array.prototype.concat.apply([],arguments)}function ia(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Fr(n){return/^[\s\xa0]*$/.test(n)}var Jc=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Se(n,e){return n.indexOf(e)!=-1}function Zi(n,e){return n<e?-1:n>e?1:0}var ke;e:{var Zc=k.navigator;if(Zc){var eu=Zc.userAgent;if(eu){ke=eu;break e}}ke=""}function oa(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Ql(n){const e={};for(const t in n)e[t]=n[t];return e}var tu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yl(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<tu.length;i++)t=tu[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function aa(n){return aa[" "](n),n}aa[" "]=Ur;function gy(n){var e=vy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var yy=Se(ke,"Opera"),Rn=Se(ke,"Trident")||Se(ke,"MSIE"),Xl=Se(ke,"Edge"),wo=Xl||Rn,Jl=Se(ke,"Gecko")&&!(Se(ke.toLowerCase(),"webkit")&&!Se(ke,"Edge"))&&!(Se(ke,"Trident")||Se(ke,"MSIE"))&&!Se(ke,"Edge"),wy=Se(ke.toLowerCase(),"webkit")&&!Se(ke,"Edge");function Zl(){var n=k.document;return n?n.documentMode:void 0}var Br;e:{var eo="",to=function(){var n=ke;if(Jl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Xl)return/Edge\/([\d\.]+)/.exec(n);if(Rn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(wy)return/WebKit\/(\S+)/.exec(n);if(yy)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(to&&(eo=to?to[1]:""),Rn){var no=Zl();if(no!=null&&no>parseFloat(eo)){Br=String(no);break e}}Br=eo}var vy={};function by(){return gy(function(){let n=0;const e=Jc(String(Br)).split("."),t=Jc("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=Zi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Zi(r[2].length==0,i[2].length==0)||Zi(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var vo;if(k.document&&Rn){var nu=Zl();vo=nu||parseInt(Br,10)||void 0}else vo=void 0;var _y=vo,Iy=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{k.addEventListener("test",Ur,e),k.removeEventListener("test",Ur,e)}catch{}return n}();function be(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};function xs(n,e){if(be.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Jl){e:{try{aa(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ty[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&xs.Z.h.call(this)}}ge(xs,be);var Ty={2:"touch",3:"pen",4:"mouse"};xs.prototype.h=function(){xs.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Gs="closure_listenable_"+(1e6*Math.random()|0),xy=0;function Ey(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ia=r,this.key=++xy,this.ca=this.fa=!1}function pi(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function mi(n){this.src=n,this.g={},this.h=0}mi.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=_o(n,e,s,r);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new Ey(e,this.src,i,!!s,r),e.fa=t,n.push(e)),e};function bo(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=Hl(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(pi(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function _o(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ca&&i.listener==e&&i.capture==!!t&&i.ia==s)return r}return-1}var ca="closure_lm_"+(1e6*Math.random()|0),so={};function eh(n,e,t,s,r){if(s&&s.once)return nh(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)eh(n,e[i],t,s,r);return null}return t=ha(t),n&&n[Gs]?n.N(e,t,Ks(s)?!!s.capture:!!s,r):th(n,e,t,!1,s,r)}function th(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=Ks(r)?!!r.capture:!!r,a=la(n);if(a||(n[ca]=a=new mi(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=Sy(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Iy||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(rh(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Sy(){function n(t){return e.call(n.src,n.listener,t)}var e=ky;return n}function nh(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)nh(n,e[i],t,s,r);return null}return t=ha(t),n&&n[Gs]?n.O(e,t,Ks(s)?!!s.capture:!!s,r):th(n,e,t,!0,s,r)}function sh(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)sh(n,e[i],t,s,r);else s=Ks(s)?!!s.capture:!!s,t=ha(t),n&&n[Gs]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=_o(i,t,s,r),-1<t&&(pi(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=la(n))&&(e=n.g[e.toString()],n=-1,e&&(n=_o(e,t,s,r)),(t=-1<n?e[n]:null)&&ua(t))}function ua(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[Gs])bo(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(rh(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=la(e))?(bo(t,n),t.h==0&&(t.src=null,e[ca]=null)):pi(n)}}}function rh(n){return n in so?so[n]:so[n]="on"+n}function ky(n,e){if(n.ca)n=!0;else{e=new xs(e,this);var t=n.listener,s=n.ia||n.src;n.fa&&ua(n),n=t.call(s,e)}return n}function la(n){return n=n[ca],n instanceof mi?n:null}var ro="__closure_events_fn_"+(1e9*Math.random()>>>0);function ha(n){return typeof n=="function"?n:(n[ro]||(n[ro]=function(e){return n.handleEvent(e)}),n[ro])}function ce(){Dt.call(this),this.i=new mi(this),this.P=this,this.I=null}ge(ce,Dt);ce.prototype[Gs]=!0;ce.prototype.removeEventListener=function(n,e,t,s){sh(this,n,e,t,s)};function me(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new be(e,n);else if(e instanceof be)e.target=e.target||n;else{var r=e;e=new be(s,n),Yl(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=wr(o,s,!0,e)&&r}if(o=e.g=n,r=wr(o,s,!0,e)&&r,r=wr(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=wr(o,s,!1,e)&&r}ce.prototype.M=function(){if(ce.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)pi(t[s]);delete n.g[e],n.h--}}this.I=null};ce.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ce.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function wr(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&bo(n.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var da=k.JSON.stringify;function Cy(){var n=oh;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Ay{constructor(){this.h=this.g=null}add(e,t){const s=ih.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var ih=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Dy,n=>n.reset());class Dy{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ny(n){k.setTimeout(()=>{throw n},0)}function fa(n,e){Io||Ry(),To||(Io(),To=!0),oh.add(n,e)}var Io;function Ry(){var n=k.Promise.resolve(void 0);Io=function(){n.then(Oy)}}var To=!1,oh=new Ay;function Oy(){for(var n;n=Cy();){try{n.h.call(n.g)}catch(t){Ny(t)}var e=ih;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}To=!1}function gi(n,e){ce.call(this),this.h=n||1,this.g=e||k,this.j=pe(this.kb,this),this.l=Date.now()}ge(gi,ce);I=gi.prototype;I.da=!1;I.S=null;I.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),me(this,"tick"),this.da&&(pa(this),this.start()))}};I.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pa(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}I.M=function(){gi.Z.M.call(this),pa(this),delete this.g};function ma(n,e,t){if(typeof n=="function")t&&(n=pe(n,t));else if(n&&typeof n.handleEvent=="function")n=pe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:k.setTimeout(n,e||0)}function ah(n){n.g=ma(()=>{n.g=null,n.i&&(n.i=!1,ah(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Py extends Dt{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ah(this)}M(){super.M(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(n){Dt.call(this),this.h=n,this.g={}}ge(Es,Dt);var su=[];function ch(n,e,t,s){Array.isArray(t)||(t&&(su[0]=t.toString()),t=su);for(var r=0;r<t.length;r++){var i=eh(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function uh(n){oa(n.g,function(e,t){this.g.hasOwnProperty(t)&&ua(e)},n),n.g={}}Es.prototype.M=function(){Es.Z.M.call(this),uh(this)};Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yi(){this.g=!0}yi.prototype.Aa=function(){this.g=!1};function Ly(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function My(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function Sn(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Fy(n,t)+(s?" "+s:"")})}function Uy(n,e){n.info(function(){return"TIMEOUT: "+e})}yi.prototype.info=function(){};function Fy(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return da(t)}catch{return e}}var on={},ru=null;function wi(){return ru=ru||new ce}on.Ma="serverreachability";function lh(n){be.call(this,on.Ma,n)}ge(lh,be);function Ss(n){const e=wi();me(e,new lh(e,n))}on.STAT_EVENT="statevent";function hh(n,e){be.call(this,on.STAT_EVENT,n),this.stat=e}ge(hh,be);function Ce(n){const e=wi();me(e,new hh(e,n))}on.Na="timingevent";function dh(n,e){be.call(this,on.Na,n),this.size=e}ge(dh,be);function zs(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){n()},e)}var vi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ga(){}ga.prototype.h=null;function iu(n){return n.h||(n.h=n.i())}function ph(){}var Hs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ya(){be.call(this,"d")}ge(ya,be);function wa(){be.call(this,"c")}ge(wa,be);var xo;function bi(){}ge(bi,ga);bi.prototype.g=function(){return new XMLHttpRequest};bi.prototype.i=function(){return{}};xo=new bi;function Ws(n,e,t,s){this.l=n,this.j=e,this.m=t,this.X=s||1,this.V=new Es(this),this.P=By,n=wo?125:void 0,this.W=new gi(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new mh}function mh(){this.i=null,this.g="",this.h=!1}var By=45e3,Eo={},Vr={};I=Ws.prototype;I.setTimeout=function(n){this.P=n};function So(n,e,t){n.K=1,n.v=Ii(lt(e)),n.s=t,n.U=!0,gh(n,null)}function gh(n,e){n.F=Date.now(),Qs(n),n.A=lt(n.v);var t=n.A,s=n.X;Array.isArray(s)||(s=[String(s)]),Th(t.h,"t",s),n.C=0,t=n.l.H,n.h=new mh,n.g=jh(n.l,t?e:null,!n.s),0<n.O&&(n.L=new Py(pe(n.Ia,n,n.g),n.O)),ch(n.V,n.g,"readystatechange",n.gb),e=n.H?Ql(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Ss(1),Ly(n.j,n.u,n.A,n.m,n.X,n.s)}I.gb=function(n){n=n.target;const e=this.L;e&&it(n)==3?e.l():this.Ia(n)};I.Ia=function(n){try{if(n==this.g)e:{const l=it(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||wo||this.g&&(this.h.h||this.g.ga()||uu(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ss(3):Ss(2)),_i(this);var t=this.g.ba();this.N=t;t:if(yh(this)){var s=uu(this.g);n="";var r=s.length,i=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Mt(this),gs(this);var o="";break t}this.h.i=new k.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,My(this.j,this.u,this.A,this.m,this.X,l,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fr(a)){var u=a;break t}}u=null}if(t=u)Sn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ko(this,t);else{this.i=!1,this.o=3,Ce(12),Mt(this),gs(this);break e}}this.U?(wh(this,l,o),wo&&this.i&&l==3&&(ch(this.V,this.W,"tick",this.fb),this.W.start())):(Sn(this.j,this.m,o,null),ko(this,o)),l==4&&Mt(this),this.i&&!this.I&&(l==4?Bh(this.l,this):(this.i=!1,Qs(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ce(12)):(this.o=0,Ce(13)),Mt(this),gs(this)}}}catch{}finally{}};function yh(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function wh(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=Vy(n,t),r==Vr){e==4&&(n.o=4,Ce(14),s=!1),Sn(n.j,n.m,null,"[Incomplete Response]");break}else if(r==Eo){n.o=4,Ce(15),Sn(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Sn(n.j,n.m,r,null),ko(n,r);yh(n)&&r!=Vr&&r!=Eo&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ce(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),ka(e),e.L=!0,Ce(11))):(Sn(n.j,n.m,t,"[Invalid Chunked Response]"),Mt(n),gs(n))}I.fb=function(){if(this.g){var n=it(this.g),e=this.g.ga();this.C<e.length&&(_i(this),wh(this,n,e),this.i&&n!=4&&Qs(this))}};function Vy(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Vr:(t=Number(e.substring(t,s)),isNaN(t)?Eo:(s+=1,s+t>e.length?Vr:(e=e.substr(s,t),n.C=s+t,e)))}I.cancel=function(){this.I=!0,Mt(this)};function Qs(n){n.Y=Date.now()+n.P,vh(n,n.P)}function vh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=zs(pe(n.eb,n),e)}function _i(n){n.B&&(k.clearTimeout(n.B),n.B=null)}I.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Uy(this.j,this.A),this.K!=2&&(Ss(3),Ce(17)),Mt(this),this.o=2,gs(this)):vh(this,this.Y-n)};function gs(n){n.l.G==0||n.I||Bh(n.l,n)}function Mt(n){_i(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,pa(n.W),uh(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function ko(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Co(t.i,n))){if(t.I=n.N,!n.J&&Co(t.i,n)&&t.G==3){try{var s=t.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Kr(t),Ei(t);else break e;Sa(t),Ce(18)}else t.ta=r[1],0<t.ta-t.U&&37500>r[2]&&t.N&&t.A==0&&!t.v&&(t.v=zs(pe(t.ab,t),6e3));if(1>=Sh(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else Ut(t,11)}else if((n.J||t.g==n)&&Kr(t),!Fr(e))for(r=t.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const l=u[3];l!=null&&(t.ma=l,t.h.info("VER="+t.ma));const h=u[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.K=s,t.h.info("backChannelRequestTimeoutMs_="+s)),s=t;const m=n.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.i;!i.g&&(Se(g,"spdy")||Se(g,"quic")||Se(g,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(_a(i,i.h),i.h=null))}if(s.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.sa=_,F(s.F,s.D,_))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),s=t;var o=n;if(s.oa=$h(s,s.H?s.la:null,s.W),o.J){kh(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(_i(a),Qs(a)),s.g=o}else Uh(s);0<t.l.length&&Si(t)}else u[0]!="stop"&&u[0]!="close"||Ut(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ut(t,7):Ea(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}Ss(4)}catch{}}function qy(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(yo(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function va(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(yo(n)||typeof n=="string")Wl(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(yo(n)||typeof n=="string"){t=[];for(var s=n.length,r=0;r<s;r++)t.push(r)}else for(r in t=[],s=0,n)t[s++]=r;s=qy(n),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}}function Xn(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var s=0;s<t;s+=2)this.set(arguments[s],arguments[s+1])}else if(n)if(n instanceof Xn)for(t=n.T(),s=0;s<t.length;s++)this.set(t[s],n.get(t[s]));else for(s in n)this.set(s,n[s])}I=Xn.prototype;I.R=function(){ba(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};I.T=function(){return ba(this),this.g.concat()};function ba(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var s=n.g[e];Ht(n.h,s)&&(n.g[t++]=s),e++}n.g.length=t}if(n.i!=n.g.length){var r={};for(t=e=0;e<n.g.length;)s=n.g[e],Ht(r,s)||(n.g[t++]=s,r[s]=1),e++;n.g.length=t}}I.get=function(n,e){return Ht(this.h,n)?this.h[n]:e};I.set=function(n,e){Ht(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};I.forEach=function(n,e){for(var t=this.T(),s=0;s<t.length;s++){var r=t[s],i=this.get(r);n.call(e,i,r,this)}};function Ht(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var bh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $y(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wt(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof Wt){this.g=e!==void 0?e:n.g,qr(this,n.j),this.s=n.s,$r(this,n.i),jr(this,n.m),this.l=n.l,e=n.h;var t=new ks;t.i=e.i,e.g&&(t.g=new Xn(e.g),t.h=e.h),ou(this,t),this.o=n.o}else n&&(t=String(n).match(bh))?(this.g=!!e,qr(this,t[1]||"",!0),this.s=ys(t[2]||""),$r(this,t[3]||"",!0),jr(this,t[4]),this.l=ys(t[5]||"",!0),ou(this,t[6]||"",!0),this.o=ys(t[7]||"")):(this.g=!!e,this.h=new ks(null,this.g))}Wt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ds(e,au,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ds(e,au,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(ds(t,t.charAt(0)=="/"?Hy:zy,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ds(t,Qy)),n.join("")};function lt(n){return new Wt(n)}function qr(n,e,t){n.j=t?ys(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function $r(n,e,t){n.i=t?ys(e,!0):e}function jr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ou(n,e,t){e instanceof ks?(n.h=e,Yy(n.h,n.g)):(t||(e=ds(e,Wy)),n.h=new ks(e,n.g))}function F(n,e,t){n.h.set(e,t)}function Ii(n){return F(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function jy(n){return n instanceof Wt?lt(n):new Wt(n,void 0)}function Ky(n,e,t,s){var r=new Wt(null,void 0);return n&&qr(r,n),e&&$r(r,e),t&&jr(r,t),s&&(r.l=s),r}function ys(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ds(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Gy),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Gy(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var au=/[#\/\?@]/g,zy=/[#\?:]/g,Hy=/[#\?]/g,Wy=/[#\?@]/g,Qy=/#/g;function ks(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Nt(n){n.g||(n.g=new Xn,n.h=0,n.i&&$y(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}I=ks.prototype;I.add=function(n,e){Nt(this),this.i=null,n=Jn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function _h(n,e){Nt(n),e=Jn(n,e),Ht(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,Ht(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&ba(n)))}function Ih(n,e){return Nt(n),e=Jn(n,e),Ht(n.g.h,e)}I.forEach=function(n,e){Nt(this),this.g.forEach(function(t,s){Wl(t,function(r){n.call(e,r,s,this)},this)},this)};I.T=function(){Nt(this);for(var n=this.g.R(),e=this.g.T(),t=[],s=0;s<e.length;s++)for(var r=n[s],i=0;i<r.length;i++)t.push(e[s]);return t};I.R=function(n){Nt(this);var e=[];if(typeof n=="string")Ih(this,n)&&(e=Xc(e,this.g.get(Jn(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Xc(e,n[t])}return e};I.set=function(n,e){return Nt(this),this.i=null,n=Jn(this,n),Ih(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};I.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function Th(n,e,t){_h(n,e),0<t.length&&(n.i=null,n.g.set(Jn(n,e),ia(t)),n.h+=t.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var s=e[t],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),n.push(o)}}return this.i=n.join("&")};function Jn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Yy(n,e){e&&!n.j&&(Nt(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(_h(this,s),Th(this,r,t))},n)),n.j=e}var Xy=class{constructor(n,e){this.h=n,this.g=e}};function xh(n){this.l=n||Jy,k.PerformanceNavigationTiming?(n=k.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(k.g&&k.g.Ea&&k.g.Ea()&&k.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jy=10;function Eh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Sh(n){return n.h?1:n.g?n.g.size:0}function Co(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function _a(n,e){n.g?n.g.add(e):n.h=e}function kh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}xh.prototype.cancel=function(){if(this.i=Ch(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ch(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return ia(n.i)}function Ia(){}Ia.prototype.stringify=function(n){return k.JSON.stringify(n,void 0)};Ia.prototype.parse=function(n){return k.JSON.parse(n,void 0)};function Zy(){this.g=new Ia}function ew(n,e,t){const s=t||"";try{va(n,function(r,i){let o=r;Ks(r)&&(o=da(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function tw(n,e){const t=new yi;if(k.Image){const s=new Image;s.onload=yr(vr,t,s,"TestLoadImage: loaded",!0,e),s.onerror=yr(vr,t,s,"TestLoadImage: error",!1,e),s.onabort=yr(vr,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=yr(vr,t,s,"TestLoadImage: timeout",!1,e),k.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function vr(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ys(n){this.l=n.$b||null,this.j=n.ib||!1}ge(Ys,ga);Ys.prototype.g=function(){return new Ti(this.l,this.j)};Ys.prototype.i=function(n){return function(){return n}}({});function Ti(n,e){ce.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Ta,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ge(Ti,ce);var Ta=0;I=Ti.prototype;I.open=function(n,e){if(this.readyState!=Ta)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Cs(this)};I.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||k).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xs(this)),this.readyState=Ta};I.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof k.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ah(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ah(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}I.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Xs(this):Cs(this),this.readyState==3&&Ah(this)}};I.Ua=function(n){this.g&&(this.response=this.responseText=n,Xs(this))};I.Ta=function(n){this.g&&(this.response=n,Xs(this))};I.ha=function(){this.g&&Xs(this)};function Xs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Cs(n)}I.setRequestHeader=function(n,e){this.v.append(n,e)};I.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Cs(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var nw=k.JSON.parse;function Z(n){ce.call(this),this.headers=new Xn,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dh,this.K=this.L=!1}ge(Z,ce);var Dh="",sw=/^https?$/i,rw=["POST","PUT"];I=Z.prototype;I.ea=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xo.g(),this.C=this.u?iu(this.u):iu(xo),this.g.onreadystatechange=pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){cu(this,i);return}n=t||"";const r=new Xn(this.headers);s&&va(s,function(i,o){r.set(o,i)}),s=my(r.T()),t=k.FormData&&n instanceof k.FormData,!(0<=Hl(rw,e))||s||t||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Oh(this),0<this.B&&((this.K=iw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pe(this.pa,this)):this.A=ma(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){cu(this,i)}};function iw(n){return Rn&&by()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function ow(n){return n.toLowerCase()=="content-type"}I.pa=function(){typeof ra!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,me(this,"timeout"),this.abort(8))};function cu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Nh(n),xi(n)}function Nh(n){n.D||(n.D=!0,me(n,"complete"),me(n,"error"))}I.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,me(this,"complete"),me(this,"abort"),xi(this))};I.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),Z.Z.M.call(this)};I.Fa=function(){this.s||(this.F||this.v||this.l?Rh(this):this.cb())};I.cb=function(){Rh(this)};function Rh(n){if(n.h&&typeof ra!="undefined"&&(!n.C[1]||it(n)!=4||n.ba()!=2)){if(n.v&&it(n)==4)ma(n.Fa,0,n);else if(me(n,"readystatechange"),it(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(bh)[1]||null;if(!r&&k.self&&k.self.location){var i=k.self.location.protocol;r=i.substr(0,i.length-1)}s=!sw.test(r?r.toLowerCase():"")}t=s}if(t)me(n,"complete"),me(n,"success");else{n.m=6;try{var o=2<it(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",Nh(n)}}finally{xi(n)}}}}function xi(n,e){if(n.g){Oh(n);const t=n.g,s=n.C[0]?Ur:null;n.g=null,n.C=null,e||me(n,"ready");try{t.onreadystatechange=s}catch{}}}function Oh(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(k.clearTimeout(n.A),n.A=null)}function it(n){return n.g?n.g.readyState:0}I.ba=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}};I.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),nw(e)}};function uu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Dh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}I.Da=function(){return this.m};I.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function aw(n){let e="";return oa(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function xa(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=aw(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):F(n,e,t))}function us(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ph(n){this.za=0,this.l=[],this.h=new yi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=us("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=us("baseRetryDelayMs",5e3,n),this.$a=us("retryDelaySeedMs",1e4,n),this.Ya=us("forwardChannelMaxRetries",2,n),this.ra=us("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new xh(n&&n.concurrentRequestLimit),this.Ca=new Zy,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}I=Ph.prototype;I.ma=8;I.G=1;function Ea(n){if(Lh(n),n.G==3){var e=n.V++,t=lt(n.F);F(t,"SID",n.J),F(t,"RID",e),F(t,"TYPE","terminate"),Js(n,t),e=new Ws(n,n.h,e,void 0),e.K=2,e.v=Ii(lt(t)),t=!1,k.navigator&&k.navigator.sendBeacon&&(t=k.navigator.sendBeacon(e.v.toString(),"")),!t&&k.Image&&(new Image().src=e.v,t=!0),t||(e.g=jh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Qs(e)}qh(n)}I.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function Ei(n){n.g&&(ka(n),n.g.cancel(),n.g=null)}function Lh(n){Ei(n),n.u&&(k.clearTimeout(n.u),n.u=null),Kr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&k.clearTimeout(n.m),n.m=null)}function io(n,e){n.l.push(new Xy(n.Za++,e)),n.G==3&&Si(n)}function Si(n){Eh(n.i)||n.m||(n.m=!0,fa(n.Ha,n),n.C=0)}function cw(n,e){return Sh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=zs(pe(n.Ha,n,e),Vh(n,n.C)),n.C++,!0)}I.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const r=new Ws(this,this.h,n,void 0);let i=this.s;if(this.P&&(i?(i=Ql(i),Yl(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var s=this.l[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Mh(this,r,e),t=lt(this.F),F(t,"RID",n),F(t,"CVER",22),this.D&&F(t,"X-HTTP-Session-Id",this.D),Js(this,t),this.o&&i&&xa(t,this.o,i),_a(this.i,r),this.Ra&&F(t,"TYPE","init"),this.ja?(F(t,"$req",e),F(t,"SID","null"),r.$=!0,So(r,t,null)):So(r,t,e),this.G=2}}else this.G==3&&(n?lu(this,n):this.l.length==0||Eh(this.i)||lu(this))};function lu(n,e){var t;e?t=e.m:t=n.V++;const s=lt(n.F);F(s,"SID",n.J),F(s,"RID",t),F(s,"AID",n.U),Js(n,s),n.o&&n.s&&xa(s,n.o,n.s),t=new Ws(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=Mh(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),_a(n.i,t),So(t,s,e)}function Js(n,e){n.j&&va({},function(t,s){F(e,s,t)})}function Mh(n,e,t){t=Math.min(n.l.length,t);var s=n.j?pe(n.j.Oa,n.j,n):null;e:{var r=n.l;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{ew(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,s}function Uh(n){n.g||n.u||(n.Y=1,fa(n.Ga,n),n.A=0)}function Sa(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=zs(pe(n.Ga,n),Vh(n,n.A)),n.A++,!0)}I.Ga=function(){if(this.u=null,Fh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=zs(pe(this.bb,this),n)}};I.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ce(10),Ei(this),Fh(this))};function ka(n){n.B!=null&&(k.clearTimeout(n.B),n.B=null)}function Fh(n){n.g=new Ws(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=lt(n.oa);F(e,"RID","rpc"),F(e,"SID",n.J),F(e,"CI",n.N?"0":"1"),F(e,"AID",n.U),Js(n,e),F(e,"TYPE","xmlhttp"),n.o&&n.s&&xa(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=Ii(lt(e)),t.s=null,t.U=!0,gh(t,n)}I.ab=function(){this.v!=null&&(this.v=null,Ei(this),Sa(this),Ce(19))};function Kr(n){n.v!=null&&(k.clearTimeout(n.v),n.v=null)}function Bh(n,e){var t=null;if(n.g==e){Kr(n),ka(n),n.g=null;var s=2}else if(Co(n.i,e))t=e.D,kh(n.i,e),s=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=wi(),me(s,new dh(s,t,e,r)),Si(n)}else Uh(n);else if(r=e.o,r==3||r==0&&0<n.I||!(s==1&&cw(n,e)||s==2&&Sa(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),r){case 1:Ut(n,5);break;case 4:Ut(n,10);break;case 3:Ut(n,6);break;default:Ut(n,2)}}}function Vh(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function Ut(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var s=pe(n.jb,n);t||(t=new Wt("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||qr(t,"https"),Ii(t)),tw(t.toString(),s)}else Ce(2);n.G=0,n.j&&n.j.va(e),qh(n),Lh(n)}I.jb=function(n){n?(this.h.info("Successfully pinged google.com"),Ce(2)):(this.h.info("Failed to ping google.com"),Ce(1))};function qh(n){n.G=0,n.I=-1,n.j&&((Ch(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,ia(n.l),n.l.length=0),n.j.ua())}function $h(n,e,t){let s=jy(t);if(s.i!="")e&&$r(s,e+"."+s.i),jr(s,s.m);else{const r=k.location;s=Ky(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,t)}return n.aa&&oa(n.aa,function(r,i){F(s,i,r)}),e=n.D,t=n.sa,e&&t&&F(s,e,t),F(s,"VER",n.ma),Js(n,s),s}function jh(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new Z(new Ys({ib:!0})):new Z(n.qa),e.L=n.H,e}function Kh(){}I=Kh.prototype;I.xa=function(){};I.wa=function(){};I.va=function(){};I.ua=function(){};I.Oa=function(){};function Gr(){if(Rn&&!(10<=Number(_y)))throw Error("Environmental error: no available transport.")}Gr.prototype.g=function(n,e){return new Fe(n,e)};function Fe(n,e){ce.call(this),this.g=new Ph(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Fr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fr(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Zn(this)}ge(Fe,ce);Fe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),fa(pe(n.hb,n,e))),Ce(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=$h(n,null,n.W),Si(n)};Fe.prototype.close=function(){Ea(this.g)};Fe.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,io(this.g,e)}else this.v?(e={},e.__data__=da(n),io(this.g,e)):io(this.g,n)};Fe.prototype.M=function(){this.g.j=null,delete this.j,Ea(this.g),delete this.g,Fe.Z.M.call(this)};function Gh(n){ya.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ge(Gh,ya);function zh(){wa.call(this),this.status=1}ge(zh,wa);function Zn(n){this.g=n}ge(Zn,Kh);Zn.prototype.xa=function(){me(this.g,"a")};Zn.prototype.wa=function(n){me(this.g,new Gh(n))};Zn.prototype.va=function(n){me(this.g,new zh(n))};Zn.prototype.ua=function(){me(this.g,"b")};Gr.prototype.createWebChannel=Gr.prototype.g;Fe.prototype.send=Fe.prototype.u;Fe.prototype.open=Fe.prototype.m;Fe.prototype.close=Fe.prototype.close;vi.NO_ERROR=0;vi.TIMEOUT=8;vi.HTTP_ERROR=6;fh.COMPLETE="complete";ph.EventType=Hs;Hs.OPEN="a";Hs.CLOSE="b";Hs.ERROR="c";Hs.MESSAGE="d";ce.prototype.listen=ce.prototype.N;Z.prototype.listenOnce=Z.prototype.O;Z.prototype.getLastError=Z.prototype.La;Z.prototype.getLastErrorCode=Z.prototype.Da;Z.prototype.getStatus=Z.prototype.ba;Z.prototype.getResponseJson=Z.prototype.Qa;Z.prototype.getResponseText=Z.prototype.ga;Z.prototype.send=Z.prototype.ea;var uw=function(){return new Gr},lw=function(){return wi()},oo=vi,hw=fh,dw=on,hu={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fw=Ys,br=ph,pw=Z;const du="@firebase/firestore";/**
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
 */class he{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}he.UNAUTHENTICATED=new he(null),he.GOOGLE_CREDENTIALS=new he("google-credentials-uid"),he.FIRST_PARTY=new he("first-party-uid"),he.MOCK_USER=new he("mock-user");/**
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
 */let es="9.6.7";/**
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
 */const xt=new zo("@firebase/firestore");function Ao(){return xt.logLevel}function mw(n){xt.setLogLevel(n)}function w(n,...e){if(xt.logLevel<=N.DEBUG){const t=e.map(Ca);xt.debug(`Firestore (${es}): ${n}`,...t)}}function X(n,...e){if(xt.logLevel<=N.ERROR){const t=e.map(Ca);xt.error(`Firestore (${es}): ${n}`,...t)}}function As(n,...e){if(xt.logLevel<=N.WARN){const t=e.map(Ca);xt.warn(`Firestore (${es}): ${n}`,...t)}}function Ca(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function T(n="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+n;throw X(e),new Error(e)}function S(n,e){n||T()}function gw(n,e){n||T()}function v(n,e){return n}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ie{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(he.UNAUTHENTICATED))}shutdown(){}}class ww{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vw{constructor(e){this.t=e,this.currentUser=he.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new ie;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ie,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ie)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(S(typeof s.accessToken=="string"),new Hh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string"),new he(e)}}class bw{constructor(e,t,s){this.type="FirstParty",this.user=he.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class _w{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new bw(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(he.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tw{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const s=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(S(typeof t.token=="string"),this.p=t.token,new Iw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function xw(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */Me.A=-1;class Wh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=xw(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function C(n,e){return n<e?-1:n>e?1:0}function On(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function Qh(n){return n+"\0"}/**
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
 */class oe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new oe(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?C(this.nanoseconds,e.nanoseconds):C(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class E{constructor(e){this.timestamp=e}static fromTimestamp(e){return new E(e)}static min(){return new E(new oe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function fu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function an(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ds{constructor(e,t,s){t===void 0?t=0:t>e.length&&T(),s===void 0?s=e.length-t:s>e.length-t&&T(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ds.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ds?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class R extends Ds{construct(e,t,s){return new R(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new R(t)}static emptyPath(){return new R([])}}const Ew=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class se extends Ds{construct(e,t,s){return new se(e,t,s)}static isValidIdentifier(e){return Ew.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new se(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new se(t)}static emptyPath(){return new se([])}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(se.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return On(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */function Sw(){return typeof atob!="undefined"}/**
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
 */class ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ee(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return C(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");const kw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(S(!!n),typeof n=="string"){let e=0;const t=kw.exec(n);if(S(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:G(n.seconds),nanos:G(n.nanos)}}function G(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qt(n){return typeof n=="string"?ee.fromBase64String(n):ee.fromUint8Array(n)}/**
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
 */function Aa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Xh(n){const e=n.mapValue.fields.__previous_value__;return Aa(e)?Xh(e):e}function Ns(n){const e=Et(n.mapValue.fields.__local_write_time__.timestampValue);return new oe(e.seconds,e.nanos)}/**
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
 */class Cw{constructor(e,t,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Yt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Yt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function cn(n){return n==null}function Rs(n){return n===0&&1/n==-1/0}function Jh(n){return typeof n=="number"&&Number.isInteger(n)&&!Rs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(R.fromString(e))}static fromName(e){return new b(R.fromString(e).popFirst(5))}static empty(){return new b(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return R.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new R(e.slice()))}}/**
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
 */const Aw={mapValue:{fields:{__type__:{stringValue:"__max___"}}}};function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Aa(n)?4:10:T()}function ze(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ns(n).isEqual(Ns(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Et(s.timestampValue),o=Et(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Qt(s.bytesValue).isEqual(Qt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return G(s.geoPointValue.latitude)===G(r.geoPointValue.latitude)&&G(s.geoPointValue.longitude)===G(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return G(s.integerValue)===G(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=G(s.doubleValue),o=G(r.doubleValue);return i===o?Rs(i)===Rs(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return On(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(fu(i)!==fu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ze(i[a],o[a])))return!1;return!0}(n,e);default:return T()}}function Os(n,e){return(n.values||[]).find(t=>ze(t,e))!==void 0}function Ln(n,e){if(n===e)return 0;const t=Xt(n),s=Xt(e);if(t!==s)return C(t,s);switch(t){case 0:return 0;case 1:return C(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=G(r.integerValue||r.doubleValue),a=G(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return pu(n.timestampValue,e.timestampValue);case 4:return pu(Ns(n),Ns(e));case 5:return C(n.stringValue,e.stringValue);case 6:return function(r,i){const o=Qt(r),a=Qt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=C(o[c],a[c]);if(u!==0)return u}return C(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=C(G(r.latitude),G(i.latitude));return o!==0?o:C(G(r.longitude),G(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ln(o[c],a[c]);if(u)return u}return C(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=C(a[l],u[l]);if(h!==0)return h;const d=Ln(o[a[l]],c[u[l]]);if(d!==0)return d}return C(a.length,u.length)}(n.mapValue,e.mapValue);default:throw T()}}function pu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return C(n,e);const t=Et(n),s=Et(e),r=C(t.seconds,s.seconds);return r!==0?r:C(t.nanos,s.nanos)}function An(n){return Do(n)}function Do(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=Et(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Qt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,b.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Do(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Do(s.fields[a])}`;return i+"}"}(n.mapValue):T();var e,t}function zr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function No(n){return!!n&&"integerValue"in n}function ki(n){return!!n&&"arrayValue"in n}function mu(n){return!!n&&"nullValue"in n}function gu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cr(n){return!!n&&"mapValue"in n}function ws(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return an(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ws(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ws(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
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
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Cr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ws(t)}setAll(e){let t=se.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=ws(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Cr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Cr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){an(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new we(ws(this.value))}}function Zh(n){const e=[];return an(n.fields,(t,s)=>{const r=new se([t]);if(Cr(s)){const i=Zh(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Pn(e)}/**
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
 */class q{constructor(e,t,s,r,i,o){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new q(e,0,E.min(),E.min(),we.empty(),0)}static newFoundDocument(e,t,s){return new q(e,1,t,E.min(),s,0)}static newNoDocument(e,t){return new q(e,2,t,E.min(),we.empty(),0)}static newUnknownDocument(e,t){return new q(e,3,t,E.min(),we.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof q&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new q(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ed{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}ed.UNKNOWN_ID=-1;class Dw{constructor(e,t){this.fieldPath=e,this.kind=t}}class Hr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Hr(0,Ci.min())}}class Ci{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ci(E.min(),b.empty(),-1)}}/**
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
 */class Nw{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function yu(n,e=null,t=[],s=[],r=null,i=null,o=null){return new Nw(n,e,t,s,r,i,o)}function Zs(n){const e=v(n);if(e.P===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+An(r.value);var r}).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),cn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>An(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>An(s)).join(",")),e.P=t}return e.P}function Rw(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(s=t).field.canonicalString()} ${s.op} ${An(s.value)}`;var s}).join(", ")}]`),cn(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>An(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>An(t)).join(",")),`Target(${e})`}function Ai(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<n.orderBy.length;r++)if(!Vw(n.orderBy[r],e.orderBy[r]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let r=0;r<n.filters.length;r++)if(t=n.filters[r],s=e.filters[r],t.op!==s.op||!t.field.isEqual(s.field)||!ze(t.value,s.value))return!1;var t,s;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vu(n.startAt,e.startAt)&&vu(n.endAt,e.endAt)}function Wr(n){return b.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class Ae extends class{}{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.v(e,t,s):new Ow(e,t,s):t==="array-contains"?new Mw(e,s):t==="in"?new Uw(e,s):t==="not-in"?new Fw(e,s):t==="array-contains-any"?new Bw(e,s):new Ae(e,t,s)}static v(e,t,s){return t==="in"?new Pw(e,s):new Lw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.V(Ln(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.V(Ln(t,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ow extends Ae{constructor(e,t,s){super(e,t,s),this.key=b.fromName(s.referenceValue)}matches(e){const t=b.comparator(e.key,this.key);return this.V(t)}}class Pw extends Ae{constructor(e,t){super(e,"in",t),this.keys=td("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Lw extends Ae{constructor(e,t){super(e,"not-in",t),this.keys=td("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function td(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>b.fromName(s.referenceValue))}class Mw extends Ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ki(t)&&Os(t.arrayValue,this.value)}}class Uw extends Ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Os(this.value.arrayValue,t)}}class Fw extends Ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Os(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Os(this.value.arrayValue,t)}}class Bw extends Ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ki(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Os(this.value.arrayValue,s))}}class Mn{constructor(e,t){this.position=e,this.inclusive=t}}class Dn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function wu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=b.comparator(b.fromName(o.referenceValue),t.key):s=Ln(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ft{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function nd(n,e,t,s,r,i,o,a){return new ft(n,e,t,s,r,i,o,a)}function ts(n){return new ft(n)}function Ar(n){return!cn(n.limit)&&n.limitType==="F"}function Qr(n){return!cn(n.limit)&&n.limitType==="L"}function Da(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Na(n){for(const e of n.filters)if(e.S())return e.field;return null}function Ra(n){return n.collectionGroup!==null}function Un(n){const e=v(n);if(e.D===null){e.D=[];const t=Na(e),s=Da(e);if(t!==null&&s===null)t.isKeyField()||e.D.push(new Dn(t)),e.D.push(new Dn(se.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Dn(se.keyField(),i))}}}return e.D}function Ke(n){const e=v(n);if(!e.C)if(e.limitType==="F")e.C=yu(e.path,e.collectionGroup,Un(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Un(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Dn(i.field,o))}const s=e.endAt?new Mn(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new Mn(e.startAt.position,!e.startAt.inclusive):null;e.C=yu(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.C}function sd(n,e,t){return new ft(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function er(n,e){return Ai(Ke(n),Ke(e))&&n.limitType===e.limitType}function rd(n){return`${Zs(Ke(n))}|lt:${n.limitType}`}function Ro(n){return`Query(target=${Rw(Ke(n))}; limitType=${n.limitType})`}function Oa(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):b.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of t.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=wu(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,Un(t),s)||t.endAt&&!function(r,i,o){const a=wu(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,Un(t),s))}(n,e)}function id(n){return(e,t)=>{let s=!1;for(const r of Un(n)){const i=qw(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function qw(n,e,t){const s=n.field.isKeyField()?b.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ln(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
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
 */function od(n,e){if(n.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rs(e)?"-0":e}}function ad(n){return{integerValue:""+n}}function cd(n,e){return Jh(e)?ad(e):od(n,e)}/**
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
 */class Di{constructor(){this._=void 0}}function $w(n,e,t){return n instanceof Fn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof Jt?ld(n,e):n instanceof Zt?hd(n,e):function(s,r){const i=ud(s,r),o=bu(i)+bu(s.k);return No(i)&&No(s.k)?ad(o):od(s.O,o)}(n,e)}function jw(n,e,t){return n instanceof Jt?ld(n,e):n instanceof Zt?hd(n,e):t}function ud(n,e){return n instanceof Bn?No(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Fn extends Di{}class Jt extends Di{constructor(e){super(),this.elements=e}}function ld(n,e){const t=dd(e);for(const s of n.elements)t.some(r=>ze(r,s))||t.push(s);return{arrayValue:{values:t}}}class Zt extends Di{constructor(e){super(),this.elements=e}}function hd(n,e){let t=dd(e);for(const s of n.elements)t=t.filter(r=>!ze(r,s));return{arrayValue:{values:t}}}class Bn extends Di{constructor(e,t){super(),this.O=e,this.k=t}}function bu(n){return G(n.integerValue||n.doubleValue)}function dd(n){return ki(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class tr{constructor(e,t){this.field=e,this.transform=t}}function Kw(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Jt&&s instanceof Jt||t instanceof Zt&&s instanceof Zt?On(t.elements,s.elements,ze):t instanceof Bn&&s instanceof Bn?ze(t.k,s.k):t instanceof Fn&&s instanceof Fn}(n.transform,e.transform)}class Gw{constructor(e,t){this.version=e,this.transformResults=t}}class J{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new J}static exists(e){return new J(void 0,e)}static updateTime(e){return new J(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ni{}function zw(n,e,t){n instanceof nr?function(s,r,i){const o=s.value.clone(),a=Tu(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof un?function(s,r,i){if(!Dr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Tu(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(fd(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Oo(n,e,t){n instanceof nr?function(s,r,i){if(!Dr(s.precondition,r))return;const o=s.value.clone(),a=xu(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Iu(r),o).setHasLocalMutations()}(n,e,t):n instanceof un?function(s,r,i){if(!Dr(s.precondition,r))return;const o=xu(s.fieldTransforms,i,r),a=r.data;a.setAll(fd(s)),a.setAll(o),r.convertToFoundDocument(Iu(r),a).setHasLocalMutations()}(n,e,t):function(s,r){Dr(s.precondition,r)&&r.convertToNoDocument(E.min())}(n,e)}function Hw(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=ud(s.transform,r||null);i!=null&&(t==null&&(t=we.empty()),t.set(s.field,i))}return t||null}function _u(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&On(t,s,(r,i)=>Kw(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function Iu(n){return n.isFoundDocument()?n.version:E.min()}class nr extends Ni{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}}class un extends Ni{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function fd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Tu(n,e,t){const s=new Map;S(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,jw(o,a,t[r]))}return s}function xu(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,$w(i,o,e))}return s}class sr extends Ni{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Pa extends Ni{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
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
 */class Ww{constructor(e){this.count=e}}/**
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
 */var Q,A;function pd(n){switch(n){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function md(n){if(n===void 0)return X("GRPC error has no .code"),f.UNKNOWN;switch(n){case Q.OK:return f.OK;case Q.CANCELLED:return f.CANCELLED;case Q.UNKNOWN:return f.UNKNOWN;case Q.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case Q.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case Q.INTERNAL:return f.INTERNAL;case Q.UNAVAILABLE:return f.UNAVAILABLE;case Q.UNAUTHENTICATED:return f.UNAUTHENTICATED;case Q.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case Q.NOT_FOUND:return f.NOT_FOUND;case Q.ALREADY_EXISTS:return f.ALREADY_EXISTS;case Q.PERMISSION_DENIED:return f.PERMISSION_DENIED;case Q.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case Q.ABORTED:return f.ABORTED;case Q.OUT_OF_RANGE:return f.OUT_OF_RANGE;case Q.UNIMPLEMENTED:return f.UNIMPLEMENTED;case Q.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(A=Q||(Q={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class W{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new W(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new W(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _r(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _r(this.root,e,this.comparator,!1)}getReverseIterator(){return new _r(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _r(this.root,e,this.comparator,!0)}}class _r{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:de.RED,this.left=r!=null?r:de.EMPTY,this.right=i!=null?i:de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new de(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return de.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,s,r){return this}insert(n,e,t){return new de(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class B{constructor(e){this.comparator=e,this.data=new W(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eu(this.data.getIterator())}getIteratorFrom(e){return new Eu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof B)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new B(this.comparator);return t.data=e,t}}class Eu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function wn(n){return n.hasNext()?n.getNext():void 0}/**
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
 */const Qw=new W(b.comparator);function je(){return Qw}const Yw=new W(b.comparator);function Po(){return Yw}const Xw=new W(b.comparator),Jw=new B(b.comparator);function P(...n){let e=Jw;for(const t of n)e=e.add(t);return e}const Zw=new B(C);function Ri(){return Zw}/**
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
 */class rr{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const s=new Map;return s.set(e,ir.createSynthesizedTargetChangeForCurrentChange(e,t)),new rr(E.min(),s,Ri(),je(),P())}}class ir{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new ir(ee.EMPTY_BYTE_STRING,t,P(),P(),P())}}/**
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
 */class Nr{constructor(e,t,s,r){this.M=e,this.removedTargetIds=t,this.key=s,this.$=r}}class gd{constructor(e,t){this.targetId=e,this.F=t}}class yd{constructor(e,t,s=ee.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Su{constructor(){this.B=0,this.L=Cu(),this.U=ee.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=P(),t=P(),s=P();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:T()}}),new ir(this.U,this.q,e,t,s)}J(){this.K=!1,this.L=Cu()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ev{constructor(e){this.nt=e,this.st=new Map,this.it=je(),this.rt=ku(),this.ot=new B(C)}ct(e){for(const t of e.M)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ht(e){this.forEachTarget(e,t=>{const s=this.lt(t);switch(e.state){case 0:this.ft(t)&&s.W(e.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(t);break;case 3:this.ft(t)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),s.W(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((s,r)=>{this.ft(r)&&t(r)})}_t(e){const t=e.targetId,s=e.F.count,r=this.wt(t);if(r){const i=r.target;if(Wr(i))if(s===0){const o=new b(i.path);this.at(t,o,q.newNoDocument(o,E.min()))}else S(s===1);else this.gt(t)!==s&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Wr(a.target)){const c=new b(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,q.newNoDocument(c,e))}i.j&&(t.set(o,i.H()),i.J())}});let s=P();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new rr(e,t,this.ot,this.it,s);return this.it=je(),this.rt=ku(),this.ot=new B(C),r}ut(e,t){if(!this.ft(e))return;const s=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,s),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Et(t.key).add(e))}at(e,t,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Et(t).delete(e)),s&&(this.it=this.it.insert(t,s))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Su,this.st.set(e,t)),t}Et(e){let t=this.rt.get(e);return t||(t=new B(C),this.rt=this.rt.insert(e,t)),t}ft(e){const t=this.wt(e)!==null;return t||w("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Su),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.at(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function ku(){return new W(b.comparator)}function Cu(){return new W(b.comparator)}/**
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
 */const tv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class sv{constructor(e,t){this.databaseId=e,this.N=t}}function Ps(n,e){return n.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wd(n,e){return n.N?e.toBase64():e.toUint8Array()}function rv(n,e){return Ps(n,e.toTimestamp())}function ae(n){return S(!!n),E.fromTimestamp(function(e){const t=Et(e);return new oe(t.seconds,t.nanos)}(n))}function La(n,e){return function(t){return new R(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function vd(n){const e=R.fromString(n);return S(kd(e)),e}function Ls(n,e){return La(n.databaseId,e.path)}function Je(n,e){const t=vd(e);if(t.get(1)!==n.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new b(_d(t))}function Lo(n,e){return La(n.databaseId,e)}function bd(n){const e=vd(n);return e.length===4?R.emptyPath():_d(e)}function Ms(n){return new R(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _d(n){return S(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Au(n,e,t){return{name:Ls(n,e),fields:t.value.mapValue.fields}}function Id(n,e,t){const s=Je(n,e.name),r=ae(e.updateTime),i=new we({mapValue:{fields:e.fields}}),o=q.newFoundDocument(s,r,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function iv(n,e){return"found"in e?function(t,s){S(!!s.found),s.found.name,s.found.updateTime;const r=Je(t,s.found.name),i=ae(s.found.updateTime),o=new we({mapValue:{fields:s.found.fields}});return q.newFoundDocument(r,i,o)}(n,e):"missing"in e?function(t,s){S(!!s.missing),S(!!s.readTime);const r=Je(t,s.missing),i=ae(s.readTime);return q.newNoDocument(r,i)}(n,e):T()}function ov(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.N?(S(u===void 0||typeof u=="string"),ee.fromBase64String(u||"")):(S(u===void 0||u instanceof Uint8Array),ee.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:md(c.code);return new y(u,c.message||"")}(o);t=new yd(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Je(n,s.document.name),i=ae(s.document.updateTime),o=new we({mapValue:{fields:s.document.fields}}),a=q.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];t=new Nr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Je(n,s.document),i=s.readTime?ae(s.readTime):E.min(),o=q.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Nr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Je(n,s.document),i=s.removedTargetIds||[];t=new Nr([],i,r,null)}else{if(!("filter"in e))return T();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Ww(r),o=s.targetId;t=new gd(o,i)}}return t}function Us(n,e){let t;if(e instanceof nr)t={update:Au(n,e.key,e.value)};else if(e instanceof sr)t={delete:Ls(n,e.key)};else if(e instanceof un)t={update:Au(n,e.key,e.data),updateMask:fv(e.fieldMask)};else{if(!(e instanceof Pa))return T();t={verify:Ls(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Fn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Jt)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Zt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Bn)return{fieldPath:i.field.canonicalString(),increment:o.k};throw T()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:rv(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(n,e.precondition)),t}function Mo(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?J.updateTime(ae(r.updateTime)):r.exists!==void 0?J.exists(r.exists):J.none()}(e.currentDocument):J.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)S(o.setToServerValue==="REQUEST_TIME"),a=new Fn;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Jt(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Zt(u)}else"increment"in o?a=new Bn(i,o.increment):T();const c=se.fromServerFormat(o.fieldPath);return new tr(c,a)}(n,r)):[];if(e.update){e.update.name;const r=Je(n,e.update.name),i=new we({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Pn(c.map(u=>se.fromServerFormat(u)))}(e.updateMask);return new un(r,i,o,t,s)}return new nr(r,i,t,s)}if(e.delete){const r=Je(n,e.delete);return new sr(r,t)}if(e.verify){const r=Je(n,e.verify);return new Pa(r,t)}return T()}function av(n,e){return n&&n.length>0?(S(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?ae(s.updateTime):ae(r);return i.isEqual(E.min())&&(i=ae(r)),new Gw(i,s.transformResults||[])}(t,e))):[]}function Td(n,e){return{documents:[Lo(n,e.path)]}}function xd(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Lo(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Lo(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(gu(h.value))return{unaryFilter:{field:vn(h.field),op:"IS_NAN"}};if(mu(h.value))return{unaryFilter:{field:vn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(gu(h.value))return{unaryFilter:{field:vn(h.field),op:"IS_NOT_NAN"}};if(mu(h.value))return{unaryFilter:{field:vn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(h.field),op:lv(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);r&&(t.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:vn(l.field),direction:uv(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.N||cn(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Ed(n){let e=bd(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){S(s===1);const l=t.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=Sd(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Dn(kn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,cn(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Mn(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Mn(d,h)}(t.endAt)),nd(e,r,o,i,a,"F",c,u)}function cv(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sd(n){return n?n.unaryFilter!==void 0?[dv(n)]:n.fieldFilter!==void 0?[hv(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Sd(e)).reduce((e,t)=>e.concat(t)):T():[]}function uv(n){return tv[n]}function lv(n){return nv[n]}function vn(n){return{fieldPath:n.canonicalString()}}function kn(n){return se.fromServerFormat(n.fieldPath)}function hv(n){return Ae.create(kn(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}function dv(n){switch(n.unaryFilter.op){case"IS_NAN":const e=kn(n.unaryFilter.field);return Ae.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=kn(n.unaryFilter.field);return Ae.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=kn(n.unaryFilter.field);return Ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=kn(n.unaryFilter.field);return Ae.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}function fv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function re(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Du(e)),e=pv(n.get(t),e);return Du(e)}function pv(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Du(n){return n+""}function We(n){const e=n.length;if(S(e>=2),e===2)return S(n.charAt(0)===""&&n.charAt(1)===""),R.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&T(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:T()}i=o+2}return new R(s)}/**
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
 */class mv{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class Pe{constructor(e,t,s){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=s}}Pe.store="owner",Pe.key="owner";class _t{constructor(e,t,s){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=s}}_t.store="mutationQueues",_t.keyPath="userId";class M{constructor(e,t,s,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=s,this.baseMutations=r,this.mutations=i}}M.store="mutations",M.keyPath="batchId",M.userMutationsIndex="userMutationsIndex",M.userMutationsKeyPath=["userId","batchId"];class ye{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,re(t)]}static key(e,t,s){return[e,re(t),s]}}ye.store="documentMutations",ye.PLACEHOLDER=new ye;class gv{constructor(e,t){this.path=e,this.readTime=t}}class yv{constructor(e,t){this.path=e,this.version=t}}class K{constructor(e,t,s,r,i,o){this.unknownDocument=e,this.noDocument=t,this.document=s,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}}K.store="remoteDocuments",K.readTimeIndex="readTimeIndex",K.readTimeIndexPath="readTime",K.collectionReadTimeIndex="collectionReadTimeIndex",K.collectionReadTimeIndexPath=["parentPath","readTime"];class Qe{constructor(e){this.byteSize=e}}Qe.store="remoteDocumentGlobal",Qe.key="remoteDocumentGlobalKey";class Oe{constructor(e,t,s,r,i,o,a){this.targetId=e,this.canonicalId=t,this.readTime=s,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=a}}Oe.store="targets",Oe.keyPath="targetId",Oe.queryTargetsIndexName="queryTargetsIndex",Oe.queryTargetsKeyPath=["canonicalId","targetId"];class fe{constructor(e,t,s){this.targetId=e,this.path=t,this.sequenceNumber=s}}fe.store="targetDocuments",fe.keyPath=["targetId","path"],fe.documentTargetsIndex="documentTargetsIndex",fe.documentTargetsKeyPath=["path","targetId"];class Le{constructor(e,t,s,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=s,this.targetCount=r}}Le.key="targetGlobalKey",Le.store="targetGlobal";class qt{constructor(e,t){this.collectionId=e,this.parent=t}}qt.store="collectionParents",qt.keyPath=["collectionId","parent"];class at{constructor(e,t,s,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=s,this.inForeground=r}}at.store="clientMetadata",at.keyPath="clientId";class Vn{constructor(e,t,s){this.bundleId=e,this.createTime=t,this.version=s}}Vn.store="bundles",Vn.keyPath="bundleId";class qn{constructor(e,t,s){this.name=e,this.readTime=t,this.bundledQuery=s}}qn.store="namedQueries",qn.keyPath="name";class Ue{constructor(e,t,s){this.indexId=e,this.collectionGroup=t,this.fields=s}}Ue.store="indexConfiguration",Ue.keyPath="indexId",Ue.collectionGroupIndex="collectionGroupIndex",Ue.collectionGroupIndexPath="collectionGroup";class Ve{constructor(e,t,s,r,i,o){this.indexId=e,this.uid=t,this.sequenceNumber=s,this.readTime=r,this.documentKey=i,this.largestBatchId=o}}Ve.store="indexState",Ve.keyPath=["indexId","uid"],Ve.sequenceNumberIndex="sequenceNumberIndex",Ve.sequenceNumberIndexPath=["uid","sequenceNumber"];class qe{constructor(e,t,s,r,i){this.indexId=e,this.uid=t,this.arrayValue=s,this.directionalValue=r,this.documentKey=i}}qe.store="indexEntries",qe.keyPath=["indexId","uid","arrayValue","directionalValue","documentKey"],qe.documentKeyIndex="documentKeyIndex",qe.documentKeyIndexPath=["indexId","uid","documentKey"];class ne{constructor(e,t,s,r,i,o){this.userId=e,this.collectionPath=t,this.documentId=s,this.collectionGroup=r,this.largestBatchId=i,this.overlayMutation=o}}ne.store="documentOverlays",ne.keyPath=["userId","collectionPath","documentId"],ne.collectionPathOverlayIndex="collectionPathOverlayIndex",ne.collectionPathOverlayIndexPath=["userId","collectionPath","largestBatchId"],ne.collectionGroupOverlayIndex="collectionGroupOverlayIndex",ne.collectionGroupOverlayIndexPath=["userId","collectionGroup","largestBatchId"];const Cd=[_t.store,M.store,ye.store,K.store,Oe.store,Pe.store,Le.store,fe.store,at.store,Qe.store,qt.store,Vn.store,qn.store],Ad=[...Cd,ne.store],wv=[...Ad,Ue.store,Ve.store,qe.store];/**
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
 */class Oi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ie,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new vs(e,t.error)):this.At.resolve()},this.transaction.onerror=s=>{const r=Ma(s.target.error);this.At.reject(new vs(e,r))}}static open(e,t,s,r){try{return new Oi(t,e.transaction(r,s))}catch(i){throw new vs(t,i)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(w("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new bv(t)}}class Ge{constructor(e,t,s){this.name=e,this.version=t,this.bt=s,Ge.vt($t())===12.2&&X("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return w("SimpleDb","Removing database:",e),Pt(window.indexedDB.deleteDatabase(e)).toPromise()}static Vt(){if(!ml())return!1;if(Ge.St())return!0;const e=$t(),t=Ge.vt(e),s=0<t&&t<10,r=Ge.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static St(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Ct)==="YES"}static Nt(e,t){return e.store(t)}static vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async xt(e){return this.db||(w("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new vs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new y(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new y(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new vs(e,o))},r.onupgradeneeded=i=>{w("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.bt.kt(o,r.transaction,i.oldVersion,this.version).next(()=>{w("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Ot&&(this.db.onversionchange=t=>this.Ot(t)),this.db}Mt(e){this.Ot=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.xt(e);const a=Oi.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(u=>(a.Pt(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.Rt,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(w("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class vv{constructor(e){this.$t=e,this.Ft=!1,this.Bt=null}get isDone(){return this.Ft}get Lt(){return this.Bt}set cursor(e){this.$t=e}done(){this.Ft=!0}Ut(e){this.Bt=e}delete(){return Pt(this.$t.delete())}}class vs extends y{constructor(e,t){super(f.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ln(n){return n.name==="IndexedDbTransactionError"}class bv{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(w("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(w("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),Pt(s)}add(e){return w("SimpleDb","ADD",this.store.name,e,e),Pt(this.store.add(e))}get(e){return Pt(this.store.get(e)).next(t=>(t===void 0&&(t=null),w("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return w("SimpleDb","DELETE",this.store.name,e),Pt(this.store.delete(e))}count(){return w("SimpleDb","COUNT",this.store.name),Pt(this.store.count())}qt(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.Kt(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new p((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}Gt(e,t){w("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.jt=!1;const r=this.cursor(s);return this.Kt(r,(i,o,a)=>a.delete())}Qt(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.Kt(r,t)}Wt(e){const t=this.cursor({});return new p((s,r)=>{t.onerror=i=>{const o=Ma(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}Kt(e,t){const s=[];return new p((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new vv(a),u=t(a.primaryKey,a.value,c);if(u instanceof p){const l=u.catch(h=>(c.done(),p.reject(h)));s.push(l)}c.isDone?r():c.Lt===null?a.continue():a.continue(c.Lt)}}).next(()=>p.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.jt?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Pt(n){return new p((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=Ma(s.target.error);t(r)}})}let Nu=!1;function Ma(n){const e=Ge.vt($t());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Nu||(Nu=!0,setTimeout(()=>{throw s},0)),s}}return n}/**
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
 */class Ru extends Nd{constructor(e,t){super(),this.zt=e,this.currentSequenceNumber=t}}function ue(n,e){const t=v(n);return Ge.Nt(t.zt,e)}/**
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
 */class Ua{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&zw(i,e,s[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Oo(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Oo(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const s=e.get(t.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(E.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),P())}isEqual(e){return this.batchId===e.batchId&&On(this.mutations,e.mutations,(t,s)=>_u(t,s))&&On(this.baseMutations,e.baseMutations,(t,s)=>_u(t,s))}}class Fa{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){S(e.mutations.length===s.length);let r=Xw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fa(e,t,s,r)}}/**
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
 */class Ba{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class It{constructor(e,t,s,r,i=E.min(),o=E.min(),a=ee.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Rd{constructor(e){this.Ht=e}}function Od(n,e){let t;if(e.document)t=Id(n.Ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=b.fromSegments(e.noDocument.path),r=tn(e.noDocument.readTime);t=q.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return T();{const s=b.fromSegments(e.unknownDocument.path),r=tn(e.unknownDocument.version);t=q.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(qa(e.readTime)),t}function Ou(n,e){const t=Va(e.readTime),s=e.key.path.popLast().toArray();if(e.isFoundDocument()){const r=function(o,a){return{name:Ls(o,a.key),fields:a.data.value.mapValue.fields,updateTime:Ps(o,a.version.toTimestamp())}}(n.Ht,e),i=e.hasCommittedMutations;return new K(null,null,r,i,t,s)}if(e.isNoDocument()){const r=e.key.path.toArray(),i=en(e.version),o=e.hasCommittedMutations;return new K(null,new gv(r,i),null,o,t,s)}if(e.isUnknownDocument()){const r=e.key.path.toArray(),i=en(e.version);return new K(new yv(r,i),null,null,!0,t,s)}return T()}function Va(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function qa(n){const e=new oe(n[0],n[1]);return E.fromTimestamp(e)}function en(n){const e=n.toTimestamp();return new mv(e.seconds,e.nanoseconds)}function tn(n){const e=new oe(n.seconds,n.nanoseconds);return E.fromTimestamp(e)}function _n(n,e){const t=(e.baseMutations||[]).map(i=>Mo(n.Ht,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Mo(n.Ht,i)),r=oe.fromMillis(e.localWriteTimeMs);return new Ua(e.batchId,r,t,s)}function fs(n){const e=tn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?tn(n.lastLimboFreeSnapshotVersion):E.min();let s;var r;return n.query.documents!==void 0?(S((r=n.query).documents.length===1),s=Ke(ts(bd(r.documents[0])))):s=function(i){return Ke(Ed(i))}(n.query),new It(s,n.targetId,0,n.lastListenSequenceNumber,e,t,ee.fromBase64String(n.resumeToken))}function Pd(n,e){const t=en(e.snapshotVersion),s=en(e.lastLimboFreeSnapshotVersion);let r;r=Wr(e.target)?Td(n.Ht,e.target):xd(n.Ht,e.target);const i=e.resumeToken.toBase64();return new Oe(e.targetId,Zs(e.target),t,i,e.sequenceNumber,s,r)}function $a(n){const e=Ed({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sd(e,e.limit,"L"):e}function ao(n,e){return new Ba(e.largestBatchId,Mo(n.Ht,e.overlayMutation))}function Pu(n,e){const t=e.path.lastSegment();return[n,re(e.path.popLast()),t]}/**
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
 */class _v{getBundleMetadata(e,t){return Lu(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:tn(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return Lu(e).put({bundleId:(s=t).id,createTime:en(ae(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return Mu(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:$a(r.bundledQuery),readTime:tn(r.readTime)};var r})}saveNamedQuery(e,t){return Mu(e).put(function(s){return{name:s.name,readTime:en(ae(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Lu(n){return ue(n,Vn.store)}function Mu(n){return ue(n,qn.store)}/**
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
 */class ja{constructor(e,t){this.O=e,this.userId=t}static Jt(e,t){const s=t.uid||"";return new ja(e,s)}getOverlay(e,t){return ls(e).get(Pu(this.userId,t)).next(s=>s?ao(this.O,s):null)}saveOverlays(e,t,s){const r=[];return s.forEach(i=>{const o=new Ba(t,i);r.push(this.Yt(e,o))}),p.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(re(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(ls(e).Gt(ne.collectionPathOverlayIndex,a))}),p.waitFor(i)}getOverlaysForCollection(e,t,s){const r=new Map,i=re(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ls(e).qt(ne.collectionPathOverlayIndex,o).next(a=>{for(const c of a){const u=ao(this.O,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=new Map;let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ls(e).Qt({index:ne.collectionGroupOverlayIndex,range:a},(c,u,l)=>{const h=ao(this.O,u);i.size<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}Yt(e,t){return ls(e).put(function(s,r,i){const[o,a,c]=Pu(r,i.mutation.key);return new ne(r,a,c,i.mutation.key.getCollectionGroup(),i.largestBatchId,Us(s.Ht,i.mutation))}(this.O,this.userId,t))}}function ls(n){return ue(n,ne.store)}/**
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
 */class Yr{constructor(){}Xt(e,t){this.Zt(e,t),t.te()}Zt(e,t){if("nullValue"in e)this.ee(t,5);else if("booleanValue"in e)this.ee(t,10),t.ne(e.booleanValue?1:0);else if("integerValue"in e)this.ee(t,15),t.ne(G(e.integerValue));else if("doubleValue"in e){const s=G(e.doubleValue);isNaN(s)?this.ee(t,13):(this.ee(t,15),Rs(s)?t.ne(0):t.ne(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ee(t,20),typeof s=="string"?t.se(s):(t.se(`${s.seconds||""}`),t.ne(s.nanos||0))}else if("stringValue"in e)this.ie(e.stringValue,t),this.re(t);else if("bytesValue"in e)this.ee(t,30),t.oe(Qt(e.bytesValue)),this.re(t);else if("referenceValue"in e)this.ce(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.ee(t,45),t.ne(s.latitude||0),t.ne(s.longitude||0)}else"mapValue"in e?ze(e,Aw)?this.ee(t,Number.MAX_SAFE_INTEGER):(this.ue(e.mapValue,t),this.re(t)):"arrayValue"in e?(this.ae(e.arrayValue,t),this.re(t)):T()}ie(e,t){this.ee(t,25),this.he(e,t)}he(e,t){t.se(e)}ue(e,t){const s=e.fields||{};this.ee(t,55);for(const r of Object.keys(s))this.ie(r,t),this.Zt(s[r],t)}ae(e,t){const s=e.values||[];this.ee(t,50);for(const r of s)this.Zt(r,t)}ce(e,t){this.ee(t,37),b.fromName(e).path.forEach(s=>{this.ee(t,60),this.he(s,t)})}ee(e,t){e.ne(t)}re(e){e.ne(2)}}Yr.le=new Yr;function Iv(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Uu(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=Iv(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class Tv{constructor(){this.buffer=new Uint8Array(1024),this.position=0}fe(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.de(s.value),s=t.next();this._e()}we(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.me(s.value),s=t.next();this.ge()}ye(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.de(s);else if(s<2048)this.de(960|s>>>6),this.de(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.de(480|s>>>12),this.de(128|63&s>>>6),this.de(128|63&s);else{const r=t.codePointAt(0);this.de(240|r>>>18),this.de(128|63&r>>>12),this.de(128|63&r>>>6),this.de(128|63&r)}}this._e()}pe(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.me(s);else if(s<2048)this.me(960|s>>>6),this.me(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.me(480|s>>>12),this.me(128|63&s>>>6),this.me(128|63&s);else{const r=t.codePointAt(0);this.me(240|r>>>18),this.me(128|63&r>>>12),this.me(128|63&r>>>6),this.me(128|63&r)}}this.ge()}Ie(e){const t=this.Ee(e),s=Uu(t);this.Te(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ae(e){const t=this.Ee(e),s=Uu(t);this.Te(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Re(){this.Pe(255),this.Pe(255)}be(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Te(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ve(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}de(e){const t=255&e;t===0?(this.Pe(0),this.Pe(255)):t===255?(this.Pe(255),this.Pe(0)):this.Pe(t)}me(e){const t=255&e;t===0?(this.ve(0),this.ve(255)):t===255?(this.ve(255),this.ve(0)):this.ve(e)}_e(){this.Pe(0),this.Pe(1)}ge(){this.ve(0),this.ve(1)}Pe(e){this.Te(1),this.buffer[this.position++]=e}ve(e){this.Te(1),this.buffer[this.position++]=~e}Te(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class xv{constructor(e){this.Se=e}oe(e){this.Se.fe(e)}se(e){this.Se.ye(e)}ne(e){this.Se.Ie(e)}te(){this.Se.Re()}}class Ev{constructor(e){this.Se=e}oe(e){this.Se.we(e)}se(e){this.Se.pe(e)}ne(e){this.Se.Ae(e)}te(){this.Se.be()}}class Fu{constructor(){this.Se=new Tv,this.De=new xv(this.Se),this.Ce=new Ev(this.Se)}seed(e){this.Se.seed(e)}Ne(e){return e===0?this.De:this.Ce}Ve(){return this.Se.Ve()}reset(){this.Se.reset()}}/**
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
 */class co{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}}function uo(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=b.comparator(n.documentKey,e.documentKey),t!==0?t:(t=Bu(n.arrayValue,e.arrayValue),t!==0?t:Bu(n.directionalValue,e.directionalValue)))}function Bu(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class Sv{constructor(){this.xe=new Ka}addToCollectionParentIndex(e,t){return this.xe.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.xe.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t,s){return p.resolve(P())}getFieldIndex(e,t){return p.resolve(null)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}updateCollectionGroup(e,t,s){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class Ka{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new B(R.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new B(R.comparator)).toArray()}}/**
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
 */class kv{constructor(e){this.user=e,this.ke=new Ka,this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.ke.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.ke.add(t)});const i={collectionId:s,parent:re(r)};return Vu(e).put(i)}return p.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[Qh(t),""],!1,!0);return Vu(e).qt(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(We(o.parent))}return s})}addFieldIndex(e,t){const s=Tr(e),r=function(i){return new Ue(i.indexId,i.collectionGroup,i.fields.map(o=>[o.fieldPath.canonicalString(),o.kind]))}(t);return delete r.indexId,s.add(r).next()}deleteFieldIndex(e,t){const s=Tr(e),r=xr(e),i=Ir(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t,s){return p.resolve(P())}getFieldIndex(e,t){return p.resolve(null)}Oe(e,t){const s=new Fu;for(const r of function(i){return i.fields.filter(o=>o.kind!==2)}(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.Ne(r.kind);Yr.le.Xt(i,o)}return s.Ve()}Me(e){const t=new Fu;return Yr.le.Xt(e,t.Ne(0)),t.Ve()}getFieldIndexes(e,t){const s=Tr(e),r=xr(e);return(t?s.qt(Ue.collectionGroupIndex,IDBKeyRange.bound(t,t)):s.qt()).next(i=>{const o=[];return p.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Hr(l.sequenceNumber,new Ci(tn(l.readTime),new b(We(l.documentKey)),l.largestBatchId)):Hr.empty(),d=u.fields.map(([m,g])=>new Dw(se.fromServerFormat(m),g));return new ed(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>s.indexState.sequenceNumber-r.indexState.sequenceNumber),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=Tr(e),i=xr(e);return this.$e(e).next(o=>r.qt(Ue.collectionGroupIndex,IDBKeyRange.bound(t,t)).next(a=>p.forEach(a,c=>i.put(function(u,l,h,d){return new Ve(u,l.uid||"",h,en(d.readTime),re(d.documentKey.path),d.largestBatchId)}(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return p.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?p.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),p.forEach(a,c=>this.Fe(e,r,c).next(u=>{const l=this.Be(i,c);return u.isEqual(l)?p.resolve():this.Le(e,i,u,l)}))))})}Ue(e,t,s){return Ir(e).put(new qe(s.indexId,this.uid,s.arrayValue,s.directionalValue,re(t.key.path)))}qe(e,t,s){return Ir(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,re(t.key.path)])}Fe(e,t,s){const r=Ir(e);let i=new B(uo);return r.Qt({index:qe.documentKeyIndex,range:IDBKeyRange.only([s.indexId,this.uid,re(t.path)])},(o,a)=>{i=i.add(new co(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}Be(e,t){let s=new B(uo);const r=this.Oe(t,e);if(r==null)return s;const i=function(o){return o.fields.find(a=>a.kind===2)}(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ki(o))for(const a of o.arrayValue.values||[])s=s.add(new co(t.indexId,e.key,this.Me(a),r))}else s=s.add(new co(t.indexId,e.key,new Uint8Array,r));return s}Le(e,t,s,r){w("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(o,a,c,u,l){const h=o.getIterator(),d=a.getIterator();let m=wn(h),g=wn(d);for(;m||g;){let _=!1,x=!1;if(m&&g){const O=c(m,g);O<0?x=!0:O>0&&(_=!0)}else m!=null?x=!0:_=!0;_?(u(g),g=wn(d)):x?(l(m),m=wn(h)):(m=wn(h),g=wn(d))}}(s,r,uo,o=>{i.push(this.Ue(e,t,o))},o=>{i.push(this.qe(e,t,o))}),p.waitFor(i)}$e(e){let t=1;return xr(e).Qt({index:Ve.sequenceNumberIndex,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}}function Vu(n){return ue(n,qt.store)}function Ir(n){return ue(n,qe.store)}function Tr(n){return ue(n,Ue.store)}function xr(n){return ue(n,Ve.store)}/**
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
 */const qu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Re{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Ld(n,e,t){const s=n.store(M.store),r=n.store(ye.store),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Qt({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{S(a===1)}));const u=[];for(const l of t.mutations){const h=ye.key(e,l.key.path,t.batchId);i.push(r.delete(h)),u.push(l.key)}return p.waitFor(i).next(()=>u)}function Xr(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw T();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(41943040,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);class Ga{constructor(e,t,s,r){this.userId=e,this.O=t,this.indexManager=s,this.referenceDelegate=r,this.Ke={}}static Jt(e,t,s,r){S(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ga(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return gt(e).Qt({index:M.userMutationsIndex,range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=In(e),o=gt(e);return o.add({}).next(a=>{S(typeof a=="number");const c=new Ua(a,t,s,r),u=function(d,m,g){const _=g.baseMutations.map(O=>Us(d.Ht,O)),x=g.mutations.map(O=>Us(d.Ht,O));return new M(m,g.batchId,g.localWriteTime.toMillis(),_,x)}(this.O,this.userId,c),l=[];let h=new B((d,m)=>C(d.canonicalString(),m.canonicalString()));for(const d of r){const m=ye.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(m,ye.PLACEHOLDER))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Ke[a]=c.keys()}),p.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return gt(e).get(t).next(s=>s?(S(s.userId===this.userId),_n(this.O,s)):null)}Ge(e,t){return this.Ke[t]?p.resolve(this.Ke[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.Ke[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return gt(e).Qt({index:M.userMutationsIndex,range:r},(o,a,c)=>{a.userId===this.userId&&(S(a.batchId>=s),i=_n(this.O,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return gt(e).Qt({index:M.userMutationsIndex,range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return gt(e).qt(M.userMutationsIndex,t).next(s=>s.map(r=>_n(this.O,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=ye.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return In(e).Qt({range:r},(o,a,c)=>{const[u,l,h]=o,d=We(l);if(u===this.userId&&t.path.isEqual(d))return gt(e).get(h).next(m=>{if(!m)throw T();S(m.userId===this.userId),i.push(_n(this.O,m))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new B(C);const r=[];return t.forEach(i=>{const o=ye.prefixForPath(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=In(e).Qt({range:a},(u,l,h)=>{const[d,m,g]=u,_=We(m);d===this.userId&&i.path.isEqual(_)?s=s.add(g):h.done()});r.push(c)}),p.waitFor(r).next(()=>this.je(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=ye.prefixForPath(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new B(C);return In(e).Qt({range:o},(c,u,l)=>{const[h,d,m]=c,g=We(d);h===this.userId&&s.isPrefixOf(g)?g.length===r&&(a=a.add(m)):l.done()}).next(()=>this.je(e,a))}je(e,t){const s=[],r=[];return t.forEach(i=>{r.push(gt(e).get(i).next(o=>{if(o===null)throw T();S(o.userId===this.userId),s.push(_n(this.O,o))}))}),p.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return Ld(e.zt,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.Qe(t.batchId)}),p.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}Qe(e){delete this.Ke[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return p.resolve();const s=IDBKeyRange.lowerBound(ye.prefixForUser(this.userId)),r=[];return In(e).Qt({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=We(i[1]);r.push(c)}else a.done()}).next(()=>{S(r.length===0)})})}containsKey(e,t){return Md(e,this.userId,t)}We(e){return Ud(e).get(this.userId).next(t=>t||new _t(this.userId,-1,""))}}function Md(n,e,t){const s=ye.prefixForPath(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return In(n).Qt({range:i,jt:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===r&&(o=!0),u.done()}).next(()=>o)}function gt(n){return ue(n,M.store)}function In(n){return ue(n,ye.store)}function Ud(n){return ue(n,_t.store)}/**
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
 */class nn{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new nn(0)}static Je(){return new nn(-1)}}/**
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
 */class Cv{constructor(e,t){this.referenceDelegate=e,this.O=t}allocateTargetId(e){return this.Ye(e).next(t=>{const s=new nn(t.highestTargetId);return t.highestTargetId=s.next(),this.Xe(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ye(e).next(t=>E.fromTimestamp(new oe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ye(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Ye(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Xe(e,r)))}addTargetData(e,t){return this.Ze(e,t).next(()=>this.Ye(e).next(s=>(s.targetCount+=1,this.tn(t,s),this.Xe(e,s))))}updateTargetData(e,t){return this.Ze(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>bn(e).delete(t.targetId)).next(()=>this.Ye(e)).next(s=>(S(s.targetCount>0),s.targetCount-=1,this.Xe(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return bn(e).Qt((o,a)=>{const c=fs(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>p.waitFor(i)).next(()=>r)}forEachTarget(e,t){return bn(e).Qt((s,r)=>{const i=fs(r);t(i)})}Ye(e){return $u(e).get(Le.key).next(t=>(S(t!==null),t))}Xe(e,t){return $u(e).put(Le.key,t)}Ze(e,t){return bn(e).put(Pd(this.O,t))}tn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Ye(e).next(t=>t.targetCount)}getTargetData(e,t){const s=Zs(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return bn(e).Qt({range:r,index:Oe.queryTargetsIndexName},(o,a,c)=>{const u=fs(a);Ai(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=vt(e);return t.forEach(o=>{const a=re(o.path);r.push(i.put(new fe(s,a))),r.push(this.referenceDelegate.addReference(e,s,o))}),p.waitFor(r)}removeMatchingKeys(e,t,s){const r=vt(e);return p.forEach(t,i=>{const o=re(i.path);return p.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=vt(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=vt(e);let i=P();return r.Qt({range:s,jt:!0},(o,a,c)=>{const u=We(o[1]),l=new b(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const s=re(t.path),r=IDBKeyRange.bound([s],[Qh(s)],!1,!0);let i=0;return vt(e).Qt({index:fe.documentTargetsIndex,jt:!0,range:r},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Tt(e,t){return bn(e).get(t).next(s=>s?fs(s):null)}}function bn(n){return ue(n,Oe.store)}function $u(n){return ue(n,Le.store)}function vt(n){return ue(n,fe.store)}/**
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
 */function ju([n,e],[t,s]){const r=C(n,t);return r===0?C(e,s):r}class Av{constructor(e){this.en=e,this.buffer=new B(ju),this.nn=0}sn(){return++this.nn}rn(e){const t=[e,this.sn()];if(this.buffer.size<this.en)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ju(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dv{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.on=!1,this.cn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.un(e)}stop(){this.cn&&(this.cn.cancel(),this.cn=null)}get started(){return this.cn!==null}un(e){const t=this.on?3e5:6e4;w("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.cn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.cn=null,this.on=!0;try{await e.collectGarbage(this.garbageCollector)}catch(s){ln(s)?w("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",s):await hn(s)}await this.un(e)})}}class Nv{constructor(e,t){this.an=e,this.params=t}calculateTargetCount(e,t){return this.an.hn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return p.resolve(Me.A);const s=new Av(t);return this.an.forEachTarget(e,r=>s.rn(r.sequenceNumber)).next(()=>this.an.ln(e,r=>s.rn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.an.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.an.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(w("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(qu)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qu):this.fn(e,t))}getCacheSize(e){return this.an.getCacheSize(e)}fn(e,t){let s,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(u=Date.now(),Ao()<=N.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}/**
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
 */class Rv{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new Nv(s,r)}(this,t)}hn(e){const t=this.dn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}dn(e){let t=0;return this.ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}ln(e,t){return this._n(e,(s,r)=>t(r))}addReference(e,t,s){return Er(e,s)}removeReference(e,t,s){return Er(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Er(e,t)}wn(e,t){return function(s,r){let i=!1;return Ud(s).Wt(o=>Md(s,o,r).next(a=>(a&&(i=!0),p.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this._n(e,(o,a)=>{if(a<=t){const c=this.wn(e,o).next(u=>{if(!u)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,E.min()),vt(e).delete([0,re(o.path)])))});r.push(c)}}).next(()=>p.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Er(e,t)}_n(e,t){const s=vt(e);let r,i=Me.A;return s.Qt({index:fe.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Me.A&&t(new b(We(r)),i),i=u,r=c):i=Me.A}).next(()=>{i!==Me.A&&t(new b(We(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Er(n,e){return vt(n).put(function(t,s){return new fe(0,re(t.path),s)}(e,n.currentSequenceNumber))}/**
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
 */class ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t])}else this.inner[s]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),!0;return!1}forEach(e){an(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Yh(this.inner)}}/**
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
 */class Fd{constructor(){this.changes=new ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,q.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?p.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ov{constructor(e){this.O=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return wt(e).put(Sr(t),s)}removeEntry(e,t){const s=wt(e),r=Sr(t);return s.delete(r)}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.mn(e,s)))}getEntry(e,t){return wt(e).get(Sr(t)).next(s=>this.gn(t,s))}yn(e,t){return wt(e).get(Sr(t)).next(s=>({document:this.gn(t,s),size:Xr(s)}))}getEntries(e,t){let s=je();return this.pn(e,t,(r,i)=>{const o=this.gn(r,i);s=s.insert(r,o)}).next(()=>s)}In(e,t){let s=je(),r=new W(b.comparator);return this.pn(e,t,(i,o)=>{const a=this.gn(i,o);s=s.insert(i,a),r=r.insert(i,Xr(o))}).next(()=>({documents:s,En:r}))}pn(e,t,s){if(t.isEmpty())return p.resolve();const r=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),i=t.getIterator();let o=i.getNext();return wt(e).Qt({range:r},(a,c,u)=>{const l=b.fromSegments(a);for(;o&&b.comparator(o,l)<0;)s(o,null),o=i.getNext();o&&o.isEqual(l)&&(s(o,c),o=i.hasNext()?i.getNext():null),o?u.Ut(o.path.toArray()):u.done()}).next(()=>{for(;o;)s(o,null),o=i.hasNext()?i.getNext():null})}getAll(e,t,s){let r=je();const i=t.length+1,o={};if(s.isEqual(E.min())){const a=t.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=t.toArray(),c=Va(s);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=K.collectionReadTimeIndex}return wt(e).Qt(o,(a,c,u)=>{if(a.length!==i)return;const l=this.gn(b.fromSegments(a),c);t.isPrefixOf(l.key.path)?r=r.insert(l.key,l):u.done()}).next(()=>r)}newChangeBuffer(e){return new Pv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ku(e).get(Qe.key).next(t=>(S(!!t),t))}mn(e,t){return Ku(e).put(Qe.key,t)}gn(e,t){if(t){const s=Od(this.O,t);if(!(s.isNoDocument()&&s.version.isEqual(E.min())))return s}return q.newInvalidDocument(e)}}class Pv extends Fd{constructor(e,t){super(),this.Tn=e,this.trackRemovals=t,this.An=new ns(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new B((i,o)=>C(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.An.get(i);if(o.isValidDocument()){const c=Ou(this.Tn.O,o);r=r.add(i.path.popLast()),s+=Xr(c)-a,t.push(this.Tn.addEntry(e,i,c))}else if(s-=a,this.trackRemovals){const c=Ou(this.Tn.O,o.convertToNoDocument(E.min()));t.push(this.Tn.addEntry(e,i,c))}else t.push(this.Tn.removeEntry(e,i))}),r.forEach(i=>{t.push(this.Tn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Tn.updateMetadata(e,s)),p.waitFor(t)}getFromCache(e,t){return this.Tn.yn(e,t).next(s=>(this.An.set(t,s.size),s.document))}getAllFromCache(e,t){return this.Tn.In(e,t).next(({documents:s,En:r})=>(r.forEach((i,o)=>{this.An.set(i,o)}),s))}}function Ku(n){return ue(n,Qe.store)}function wt(n){return ue(n,K.store)}function Sr(n){return n.path.toArray()}/**
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
 */class Lv{constructor(e){this.O=e}kt(e,t,s,r){const i=new Oi("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore(Pe.store)}(e),function(a){a.createObjectStore(_t.store,{keyPath:_t.keyPath}),a.createObjectStore(M.store,{keyPath:M.keyPath,autoIncrement:!0}).createIndex(M.userMutationsIndex,M.userMutationsKeyPath,{unique:!0}),a.createObjectStore(ye.store)}(e),Gu(e),function(a){a.createObjectStore(K.store)}(e));let o=p.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore(fe.store),a.deleteObjectStore(Oe.store),a.deleteObjectStore(Le.store)}(e),Gu(e)),o=o.next(()=>function(a){const c=a.store(Le.store),u=new Le(0,0,E.min().toTimestamp(),0);return c.put(Le.key,u)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store(M.store).qt().next(u=>{a.deleteObjectStore(M.store),a.createObjectStore(M.store,{keyPath:M.keyPath,autoIncrement:!0}).createIndex(M.userMutationsIndex,M.userMutationsKeyPath,{unique:!0});const l=c.store(M.store),h=u.map(d=>l.put(d));return p.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore(at.store,{keyPath:at.keyPath})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Rn(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Qe.store)}(e),this.Pn(i)))),s<7&&r>=7&&(o=o.next(()=>this.bn(i))),s<8&&r>=8&&(o=o.next(()=>this.vn(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(K.store);c.createIndex(K.readTimeIndex,K.readTimeIndexPath,{unique:!1}),c.createIndex(K.collectionReadTimeIndex,K.collectionReadTimeIndexPath,{unique:!1})}(t)})),s<10&&r>=10&&(o=o.next(()=>this.Vn(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Vn.store,{keyPath:Vn.keyPath})})(e),function(a){a.createObjectStore(qn.store,{keyPath:qn.keyPath})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore(ne.store,{keyPath:ne.keyPath});c.createIndex(ne.collectionPathOverlayIndex,ne.collectionPathOverlayIndexPath,{unique:!1}),c.createIndex(ne.collectionGroupOverlayIndex,ne.collectionGroupOverlayIndexPath,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>{(function(a){a.createObjectStore(Ue.store,{keyPath:Ue.keyPath,autoIncrement:!0}).createIndex(Ue.collectionGroupIndex,Ue.collectionGroupIndexPath,{unique:!1}),a.createObjectStore(Ve.store,{keyPath:Ve.keyPath}).createIndex(Ve.sequenceNumberIndex,Ve.sequenceNumberIndexPath,{unique:!1}),a.createObjectStore(qe.store,{keyPath:qe.keyPath}).createIndex(qe.documentKeyIndex,qe.documentKeyIndexPath,{unique:!1})})(e)})),o}Pn(e){let t=0;return e.store(K.store).Qt((s,r)=>{t+=Xr(r)}).next(()=>{const s=new Qe(t);return e.store(Qe.store).put(Qe.key,s)})}Rn(e){const t=e.store(_t.store),s=e.store(M.store);return t.qt().next(r=>p.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.qt(M.userMutationsIndex,o).next(a=>p.forEach(a,c=>{S(c.userId===i.userId);const u=_n(this.O,c);return Ld(e,i.userId,u).next(()=>{})}))}))}bn(e){const t=e.store(fe.store),s=e.store(K.store);return e.store(Le.store).get(Le.key).next(r=>{const i=[];return s.Qt((o,a)=>{const c=new R(o),u=function(l){return[0,re(l)]}(c);i.push(t.get(u).next(l=>l?p.resolve():(h=>t.put(new fe(0,re(h),r.highestListenSequenceNumber)))(c)))}).next(()=>p.waitFor(i))})}vn(e,t){e.createObjectStore(qt.store,{keyPath:qt.keyPath});const s=t.store(qt.store),r=new Ka,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:re(c)})}};return t.store(K.store).Qt({jt:!0},(o,a)=>{const c=new R(o);return i(c.popLast())}).next(()=>t.store(ye.store).Qt({jt:!0},([o,a,c],u)=>{const l=We(a);return i(l.popLast())}))}Vn(e){const t=e.store(Oe.store);return t.Qt((s,r)=>{const i=fs(r),o=Pd(this.O,i);return t.put(o)})}}function Gu(n){n.createObjectStore(fe.store,{keyPath:fe.keyPath}).createIndex(fe.documentTargetsIndex,fe.documentTargetsKeyPath,{unique:!0}),n.createObjectStore(Oe.store,{keyPath:Oe.keyPath}).createIndex(Oe.queryTargetsIndexName,Oe.queryTargetsKeyPath,{unique:!0}),n.createObjectStore(Le.store)}const lo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class za{constructor(e,t,s,r,i,o,a,c,u,l,h=12){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Sn=i,this.window=o,this.document=a,this.Dn=u,this.Cn=l,this.schemaVersion=h,this.Nn=null,this.xn=!1,this.isPrimary=!1,this.networkEnabled=!0,this.kn=null,this.inForeground=!1,this.On=null,this.Mn=null,this.$n=Number.NEGATIVE_INFINITY,this.Fn=d=>Promise.resolve(),!za.Vt())throw new y(f.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Rv(this,r),this.Bn=t+"main",this.O=new Rd(c),this.Ln=new Ge(this.Bn,this.schemaVersion,new Lv(this.O)),this.Un=new Cv(this.referenceDelegate,this.O),this.qn=function(d){return new Ov(d)}(this.O),this.Kn=new _v,this.window&&this.window.localStorage?this.Gn=this.window.localStorage:(this.Gn=null,l===!1&&X("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.jn().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(f.FAILED_PRECONDITION,lo);return this.Qn(),this.Wn(),this.zn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Un.getHighestSequenceNumber(e))}).then(e=>{this.Nn=new Me(e,this.Dn)}).then(()=>{this.xn=!0}).catch(e=>(this.Ln&&this.Ln.close(),Promise.reject(e)))}Hn(e){return this.Fn=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ln.Mt(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Sn.enqueueAndForget(async()=>{this.started&&await this.jn()}))}jn(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>kr(e).put(new at(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.Jn(e).next(t=>{t||(this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)))})}).next(()=>this.Yn(e)).next(t=>this.isPrimary&&!t?this.Xn(e).next(()=>!1):!!t&&this.Zn(e).next(()=>!0))).catch(e=>{if(ln(e))return w("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Sn.enqueueRetryable(()=>this.Fn(e)),this.isPrimary=e})}Jn(e){return hs(e).get(Pe.key).next(t=>p.resolve(this.ts(t)))}es(e){return kr(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.ss(this.$n,18e5)){this.$n=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=ue(t,at.store);return s.qt().next(r=>{const i=this.rs(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return p.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Gn)for(const t of e)this.Gn.removeItem(this.os(t.clientId))}}zn(){this.Mn=this.Sn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.jn().then(()=>this.ns()).then(()=>this.zn()))}ts(e){return!!e&&e.ownerId===this.clientId}Yn(e){return this.Cn?p.resolve(!0):hs(e).get(Pe.key).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new y(f.FAILED_PRECONDITION,lo);return!1}}return!(!this.networkEnabled||!this.inForeground)||kr(e).qt().next(s=>this.rs(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&w("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.xn=!1,this.us(),this.Mn&&(this.Mn.cancel(),this.Mn=null),this.hs(),this.ls(),await this.Ln.runTransaction("shutdown","readwrite",[Pe.store,at.store],e=>{const t=new Ru(e,Me.A);return this.Xn(t).next(()=>this.es(t))}),this.Ln.close(),this.fs()}rs(e,t){return e.filter(s=>this.ss(s.updateTimeMs,t)&&!this.cs(s.clientId))}ds(){return this.runTransaction("getActiveClients","readonly",e=>kr(e).qt().next(t=>this.rs(t,18e5).map(s=>s.clientId)))}get started(){return this.xn}getMutationQueue(e,t){return Ga.Jt(e,this.O,t,this.referenceDelegate)}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getIndexManager(e){return new kv(e)}getDocumentOverlayCache(e){return ja.Jt(this.O,e)}getBundleCache(){return this.Kn}runTransaction(e,t,s){w("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.schemaVersion)===13?wv:o===12?Ad:o===11?Cd:void T();var o;let a;return this.Ln.runTransaction(e,r,i,c=>(a=new Ru(c,this.Nn?this.Nn.next():Me.A),t==="readwrite-primary"?this.Jn(a).next(u=>!!u||this.Yn(a)).next(u=>{if(!u)throw X(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Sn.enqueueRetryable(()=>this.Fn(!1)),new y(f.FAILED_PRECONDITION,Dd);return s(a)}).next(u=>this.Zn(a).next(()=>u)):this._s(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}_s(e){return hs(e).get(Pe.key).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,5e3)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Cn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(f.FAILED_PRECONDITION,lo)})}Zn(e){const t=new Pe(this.clientId,this.allowTabSynchronization,Date.now());return hs(e).put(Pe.key,t)}static Vt(){return Ge.Vt()}Xn(e){const t=hs(e);return t.get(Pe.key).next(s=>this.ts(s)?(w("IndexedDbPersistence","Releasing primary lease."),t.delete(Pe.key)):p.resolve())}ss(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(X(`Detected an update time that is in the future: ${e} > ${s}`),!1))}Qn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.On=()=>{this.Sn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.jn()))},this.document.addEventListener("visibilitychange",this.On),this.inForeground=this.document.visibilityState==="visible")}hs(){this.On&&(this.document.removeEventListener("visibilitychange",this.On),this.On=null)}Wn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.kn=()=>{this.us(),hp()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Sn.enterRestrictedMode(!0),this.Sn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.kn))}ls(){this.kn&&(this.window.removeEventListener("pagehide",this.kn),this.kn=null)}cs(e){var t;try{const s=((t=this.Gn)===null||t===void 0?void 0:t.getItem(this.os(e)))!==null;return w("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return X("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}us(){if(this.Gn)try{this.Gn.setItem(this.os(this.clientId),String(Date.now()))}catch(e){X("Failed to set zombie client id.",e)}}fs(){if(this.Gn)try{this.Gn.removeItem(this.os(this.clientId))}catch{}}os(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function hs(n){return ue(n,Pe.store)}function kr(n){return ue(n,at.store)}function Ha(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Mv{constructor(e,t){this.progress=e,this.ws=t}}/**
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
 */class Uv{constructor(e,t,s){this.qn=e,this.gs=t,this.indexManager=s}ys(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,t).next(s=>this.ps(e,t,s))}ps(e,t,s){return this.qn.getEntry(e,t).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Is(e,t){e.forEach((s,r)=>{for(const i of t)i.applyToLocalView(r)})}Es(e,t){return this.qn.getEntries(e,t).next(s=>this.Ts(e,s).next(()=>s))}Ts(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(s=>this.Is(t,s))}As(e,t,s){return function(r){return b.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.Rs(e,t.path):Ra(t)?this.Ps(e,t,s):this.bs(e,t,s)}Rs(e,t){return this.ys(e,new b(t)).next(s=>{let r=Po();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Ps(e,t,s){const r=t.collectionGroup;let i=Po();return this.indexManager.getCollectionParents(e,r).next(o=>p.forEach(o,a=>{const c=function(u,l){return new ft(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.bs(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}bs(e,t,s){let r;return this.qn.getAll(e,t.path,s).next(i=>(r=i,this.gs.getAllMutationBatchesAffectingQuery(e,t))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=r.get(c);u==null&&(u=q.newInvalidDocument(c),r=r.insert(c,u)),Oo(a,u,o.localWriteTime),u.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Oa(t,o)||(r=r.remove(i))}),r))}}/**
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
 */class Wa{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.vs=s,this.Vs=r}static Ss(e,t){let s=P(),r=P();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wa(e,t.fromCache,s,r)}}/**
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
 */class Bd{Ds(e){this.Cs=e}As(e,t,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(t)||s.isEqual(E.min())?this.Ns(e,t):this.Cs.Es(e,r).next(i=>{const o=this.xs(t,i);return(Ar(t)||Qr(t))&&this.ks(t.limitType,o,r,s)?this.Ns(e,t):(Ao()<=N.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ro(t)),this.Cs.As(e,t,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(e,t){let s=new B(id(e));return t.forEach((r,i)=>{Oa(e,i)&&(s=s.add(i))}),s}ks(e,t,s,r){if(s.size!==t.size)return!0;const i=e==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ns(e,t){return Ao()<=N.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.Cs.As(e,t,E.min())}}/**
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
 */class Fv{constructor(e,t,s,r){this.persistence=e,this.Os=t,this.O=r,this.Ms=new W(C),this.$s=new ns(i=>Zs(i),Ai),this.Fs=E.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(s)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new Uv(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Vd(n,e,t,s){return new Fv(n,e,t,s)}async function qd(n,e){const t=v(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.gs.getAllMutationBatches(s).next(i=>(r=i,t.Ls(e),t.gs.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=P();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.Us.Es(s,c).next(u=>({qs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Bv(n,e){const t=v(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(g=>{const _=c.docVersions.get(m);S(_!==null),g.version.compareTo(_)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.gs.removeMutationBatch(a,l))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.gs.performConsistencyCheck(s)).next(()=>t.Us.Es(s,r))})}function $d(n){const e=v(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Un.getLastRemoteSnapshotVersion(t))}function Vv(n,e){const t=v(n),s=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});r=t.Ms;const a=[];e.targetChanges.forEach((u,l)=>{const h=r.get(l);if(!h)return;a.push(t.Un.removeMatchingKeys(i,u.removedDocuments,l).next(()=>t.Un.addMatchingKeys(i,u.addedDocuments,l)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?d=d.withResumeToken(ee.EMPTY_BYTE_STRING,E.min()).withLastLimboFreeSnapshotVersion(E.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(l,d),function(m,g,_){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,d,u)&&a.push(t.Un.updateTargetData(i,d))});let c=je();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(jd(i,o,e.documentUpdates).next(u=>{c=u})),!s.isEqual(E.min())){const u=t.Un.getLastRemoteSnapshotVersion(i).next(l=>t.Un.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>t.Us.Ts(i,c)).next(()=>c)}).then(i=>(t.Ms=r,i))}function jd(n,e,t){let s=P();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let i=je();return t.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(E.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):w("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function qv(n,e){const t=v(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.gs.getNextMutationBatchAfterBatchId(s,e)))}function $n(n,e){const t=v(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Un.getTargetData(s,e).next(i=>i?(r=i,p.resolve(r)):t.Un.allocateTargetId(s).next(o=>(r=new It(e,o,0,s.currentSequenceNumber),t.Un.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.$s.set(e,s.targetId)),s})}async function jn(n,e,t){const s=v(n),r=s.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ln(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.$s.delete(r.target)}function Jr(n,e,t){const s=v(n);let r=E.min(),i=P();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=v(a),h=l.$s.get(u);return h!==void 0?p.resolve(l.Ms.get(h)):l.Un.getTargetData(c,u)}(s,o,Ke(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Os.As(o,e,t?r:E.min(),t?i:P())).next(a=>({documents:a,Ks:i})))}function Kd(n,e){const t=v(n),s=v(t.Un),r=t.Ms.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.Tt(i,e).next(o=>o?o.target:null))}function Gd(n){const e=v(n);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(s,r,i){const o=v(s);let a=je(),c=Va(i);const u=wt(r),l=IDBKeyRange.lowerBound(c,!0);return u.Qt({index:K.readTimeIndex,range:l},(h,d)=>{const m=Od(o.O,d);a=a.insert(m.key,m),c=d.readTime}).next(()=>({ws:a,readTime:qa(c)}))}(e.Bs,t,e.Fs)).then(({ws:t,readTime:s})=>(e.Fs=s,t))}async function $v(n){const e=v(n);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(s){const r=wt(s);let i=E.min();return r.Qt({index:K.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(i=qa(a.readTime)),c.done()}).next(()=>i)}(t)).then(t=>{e.Fs=t})}async function jv(n,e,t,s){const r=v(n);let i=P(),o=je();for(const u of t){const l=e.Gs(u.metadata.name);u.document&&(i=i.add(l));const h=e.js(u);h.setReadTime(e.Qs(u.metadata.readTime)),o=o.insert(l,h)}const a=r.Bs.newChangeBuffer({trackRemovals:!0}),c=await $n(r,function(u){return Ke(ts(R.fromString(`__bundle__/docs/${u}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",u=>jd(u,a,o).next(l=>(a.apply(u),l)).next(l=>r.Un.removeMatchingKeysForTargetId(u,c.targetId).next(()=>r.Un.addMatchingKeys(u,i,c.targetId)).next(()=>r.Us.Ts(u,l)).next(()=>l)))}async function Kv(n,e,t=P()){const s=await $n(n,Ke($a(e.bundledQuery))),r=v(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=ae(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.Kn.saveNamedQuery(i,e);const a=s.withResumeToken(ee.EMPTY_BYTE_STRING,o);return r.Ms=r.Ms.insert(a.targetId,a),r.Un.updateTargetData(i,a).next(()=>r.Un.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Un.addMatchingKeys(i,t,s.targetId)).next(()=>r.Kn.saveNamedQuery(i,e))})}/**
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
 */class Gv{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,t){return p.resolve(this.Ws.get(t))}saveBundleMetadata(e,t){var s;return this.Ws.set(t.id,{id:(s=t).id,version:s.version,createTime:ae(s.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.zs.get(t))}saveNamedQuery(e,t){return this.zs.set(t.name,function(s){return{name:s.name,query:$a(s.bundledQuery),readTime:ae(s.readTime)}}(t)),p.resolve()}}/**
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
 */class zv{constructor(){this.overlays=new W(b.comparator),this.Hs=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}saveOverlays(e,t,s){return s.forEach(r=>{this.Yt(e,t,r)}),p.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Hs.delete(s)),p.resolve()}getOverlaysForCollection(e,t,s){const r=new Map,i=t.length+1,o=new b(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new W((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=new Map,i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=new Map,c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(l,u)),!(a.size>=r)););return p.resolve(a)}Yt(e,t,s){if(s===null)return;const r=this.overlays.get(s.key);r!==null&&this.Hs.get(r.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new Ba(t,s));let i=this.Hs.get(t);i===void 0&&(i=new Set,this.Hs.set(t,i)),i.add(s.key)}}/**
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
 */class Qa{constructor(){this.Js=new B(te.Ys),this.Xs=new B(te.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,t){const s=new te(e,t);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ei(new te(e,t))}ni(e,t){e.forEach(s=>this.removeReference(s,t))}si(e){const t=new b(new R([])),s=new te(t,e),r=new te(t,e+1),i=[];return this.Xs.forEachInRange([s,r],o=>{this.ei(o),i.push(o.key)}),i}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const t=new b(new R([])),s=new te(t,e),r=new te(t,e+1);let i=P();return this.Xs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new te(e,0),s=this.Js.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class te{constructor(e,t){this.key=e,this.oi=t}static Ys(e,t){return b.comparator(e.key,t.key)||C(e.oi,t.oi)}static Zs(e,t){return C(e.oi,t.oi)||b.comparator(e.key,t.key)}}/**
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
 */class Hv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.gs=[],this.ci=1,this.ui=new B(te.Ys)}checkEmpty(e){return p.resolve(this.gs.length===0)}addMutationBatch(e,t,s,r){const i=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new Ua(i,t,s,r);this.gs.push(o);for(const a of r)this.ui=this.ui.add(new te(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.ai(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.hi(s),i=r<0?0:r;return p.resolve(this.gs.length>i?this.gs[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return p.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new te(t,0),r=new te(t,Number.POSITIVE_INFINITY),i=[];return this.ui.forEachInRange([s,r],o=>{const a=this.ai(o.oi);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new B(C);return t.forEach(r=>{const i=new te(r,0),o=new te(r,Number.POSITIVE_INFINITY);this.ui.forEachInRange([i,o],a=>{s=s.add(a.oi)})}),p.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;b.isDocumentKey(i)||(i=i.child(""));const o=new te(new b(i),0);let a=new B(C);return this.ui.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.oi)),!0)},o),p.resolve(this.li(a))}li(e){const t=[];return e.forEach(s=>{const r=this.ai(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){S(this.fi(t.batchId,"removed")===0),this.gs.shift();let s=this.ui;return p.forEach(t.mutations,r=>{const i=new te(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ui=s})}Qe(e){}containsKey(e,t){const s=new te(t,0),r=this.ui.firstAfterOrEqual(s);return p.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,p.resolve()}fi(e,t){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const t=this.hi(e);return t<0||t>=this.gs.length?null:this.gs[t]}}/**
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
 */class Wv{constructor(e){this.di=e,this.docs=new W(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.di(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return p.resolve(s?s.document.mutableCopy():q.newInvalidDocument(t))}getEntries(e,t){let s=je();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():q.newInvalidDocument(r))}),p.resolve(s)}getAll(e,t,s){let r=je();const i=new b(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||c.readTime.compareTo(s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return p.resolve(r)}_i(e,t){return p.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Qv(this)}getSize(e){return p.resolve(this.size)}}class Qv extends Fd{constructor(e){super(),this.Tn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(s)}),p.waitFor(t)}getFromCache(e,t){return this.Tn.getEntry(e,t)}getAllFromCache(e,t){return this.Tn.getEntries(e,t)}}/**
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
 */class Yv{constructor(e){this.persistence=e,this.wi=new ns(t=>Zs(t),Ai),this.lastRemoteSnapshotVersion=E.min(),this.highestTargetId=0,this.mi=0,this.gi=new Qa,this.targetCount=0,this.yi=nn.He()}forEachTarget(e,t){return this.wi.forEach((s,r)=>t(r)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.mi&&(this.mi=t),p.resolve()}Ze(e){this.wi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.yi=new nn(t),this.highestTargetId=t),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,t){return this.Ze(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.Ze(t),p.resolve()}removeTargetData(e,t){return this.wi.delete(t.target),this.gi.si(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.wi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const s=this.wi.get(t)||null;return p.resolve(s)}addMatchingKeys(e,t,s){return this.gi.ti(t,s),p.resolve()}removeMatchingKeys(e,t,s){this.gi.ni(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.gi.si(t),p.resolve()}getMatchingKeysForTargetId(e,t){const s=this.gi.ri(t);return p.resolve(s)}containsKey(e,t){return p.resolve(this.gi.containsKey(t))}}/**
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
 */class Xv{constructor(e,t){this.pi={},this.overlays={},this.Nn=new Me(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new Yv(this),this.indexManager=new Sv,this.qn=function(s){return new Wv(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new Rd(t),this.Kn=new Gv(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.pi[e.toKey()];return s||(s=new Hv(t,this.referenceDelegate),this.pi[e.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,t,s){w("MemoryPersistence","Starting transaction:",e);const r=new Jv(this.Nn.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.Ti(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,t){return p.or(Object.values(this.pi).map(s=>()=>s.containsKey(e,t)))}}class Jv extends Nd{constructor(e){super(),this.currentSequenceNumber=e}}class Ya{constructor(e){this.persistence=e,this.Ri=new Qa,this.Pi=null}static bi(e){return new Ya(e)}get vi(){if(this.Pi)return this.Pi;throw T()}addReference(e,t,s){return this.Ri.addReference(s,t),this.vi.delete(s.toString()),p.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.vi.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.vi.add(t.toString()),p.resolve()}removeTarget(e,t){this.Ri.si(t.targetId).forEach(r=>this.vi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.vi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Pi=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.vi,s=>{const r=b.fromPath(s);return this.Vi(e,r).next(i=>{i||t.removeEntry(r,E.min())})}).next(()=>(this.Pi=null,t.apply(e)))}updateLimboDocument(e,t){return this.Vi(e,t).next(s=>{s?this.vi.delete(t.toString()):this.vi.add(t.toString())})}Ii(e){return 0}Vi(e,t){return p.or([()=>p.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}/**
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
 */function zu(n,e){return`firestore_clients_${n}_${e}`}function Hu(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function ho(n,e){return`firestore_targets_${n}_${e}`}class Zr{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static Si(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new y(r.error.code,r.error.message))),o?new Zr(e,t,r.state,i):(X("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bs{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Si(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new y(s.error.code,s.error.message))),i?new bs(e,s.state,r):(X("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Di(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ei{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Si(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=Ri();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=Jh(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new ei(e,i):(X("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Xa{constructor(e,t){this.clientId=e,this.onlineState=t}static Si(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Xa(t.clientId,t.onlineState):(X("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Uo{constructor(){this.activeTargetIds=Ri()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fo{constructor(e,t,s,r,i){this.window=e,this.Sn=t,this.persistenceKey=s,this.xi=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ki=this.Oi.bind(this),this.Mi=new W(C),this.started=!1,this.$i=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Fi=zu(this.persistenceKey,this.xi),this.Bi=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.Mi=this.Mi.insert(this.xi,new Uo),this.Li=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ui=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.qi=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ki=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Gi=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ki)}static Vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ds();for(const s of e){if(s===this.xi)continue;const r=this.getItem(zu(this.persistenceKey,s));if(r){const i=ei.Si(s,r);i&&(this.Mi=this.Mi.insert(i.clientId,i))}}this.ji();const t=this.storage.getItem(this.Ki);if(t){const s=this.Qi(t);s&&this.Wi(s)}for(const s of this.$i)this.Oi(s);this.$i=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bi,JSON.stringify(e))}getAllActiveQueryTargets(){return this.zi(this.Mi)}isActiveQueryTarget(e){let t=!1;return this.Mi.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Hi(e,"pending")}updateMutationState(e,t,s){this.Hi(e,t,s),this.Ji(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(ho(this.persistenceKey,e));if(s){const r=bs.Si(e,s);r&&(t=r.state)}}return this.Yi.Ci(e),this.ji(),t}removeLocalQueryTarget(e){this.Yi.Ni(e),this.ji()}isLocalQueryTarget(e){return this.Yi.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ho(this.persistenceKey,e))}updateQueryState(e,t,s){this.Xi(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Ji(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Zi(e)}notifyBundleLoaded(){this.tr()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ki),this.removeItem(this.Fi),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return w("SharedClientState","READ",e,t),t}setItem(e,t){w("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){w("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Oi(e){const t=e;if(t.storageArea===this.storage){if(w("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Fi)return void X("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Sn.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Li.test(t.key)){if(t.newValue==null){const s=this.er(t.key);return this.nr(s,null)}{const s=this.sr(t.key,t.newValue);if(s)return this.nr(s.clientId,s)}}else if(this.Ui.test(t.key)){if(t.newValue!==null){const s=this.ir(t.key,t.newValue);if(s)return this.rr(s)}}else if(this.qi.test(t.key)){if(t.newValue!==null){const s=this.cr(t.key,t.newValue);if(s)return this.ur(s)}}else if(t.key===this.Ki){if(t.newValue!==null){const s=this.Qi(t.newValue);if(s)return this.Wi(s)}}else if(t.key===this.Bi){const s=function(r){let i=Me.A;if(r!=null)try{const o=JSON.parse(r);S(typeof o=="number"),i=o}catch(o){X("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==Me.A&&this.sequenceNumberHandler(s)}else if(t.key===this.Gi)return this.syncEngine.ar()}}else this.$i.push(t)})}}get Yi(){return this.Mi.get(this.xi)}ji(){this.setItem(this.Fi,this.Yi.Di())}Hi(e,t,s){const r=new Zr(this.currentUser,e,t,s),i=Hu(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Di())}Ji(e){const t=Hu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Zi(e){const t={clientId:this.xi,onlineState:e};this.storage.setItem(this.Ki,JSON.stringify(t))}Xi(e,t,s){const r=ho(this.persistenceKey,e),i=new bs(e,t,s);this.setItem(r,i.Di())}tr(){this.setItem(this.Gi,"value-not-used")}er(e){const t=this.Li.exec(e);return t?t[1]:null}sr(e,t){const s=this.er(e);return ei.Si(s,t)}ir(e,t){const s=this.Ui.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return Zr.Si(new he(i),r,t)}cr(e,t){const s=this.qi.exec(e),r=Number(s[1]);return bs.Si(r,t)}Qi(e){return Xa.Si(e)}async rr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.hr(e.batchId,e.state,e.error);w("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}ur(e){return this.syncEngine.lr(e.targetId,e.state,e.error)}nr(e,t){const s=t?this.Mi.insert(e,t):this.Mi.remove(e),r=this.zi(this.Mi),i=this.zi(s),o=[],a=[];return i.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.dr(o,a).then(()=>{this.Mi=s})}Wi(e){this.Mi.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}zi(e){let t=Ri();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class zd{constructor(){this._r=new Uo,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,t,s){this.wr[e]=t}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Uo,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Zv{mr(e){}shutdown(){}}/**
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
 */class Wu{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const eb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class tb{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
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
 */class nb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.kr=t+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,t,s,r,i){const o=this.$r(e,t);w("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,r,i),this.Br(e,o,a,s).then(c=>(w("RestConnection","Received: ",c),c),c=>{throw As("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(e,t,s,r,i){return this.Mr(e,t,s,r,i)}Fr(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+es,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}$r(e,t){const s=eb[e];return`${this.kr}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,t,s,r){return new Promise((i,o)=>{const a=new pw;a.listenOnce(hw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case oo.NO_ERROR:const u=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(u)),i(u);break;case oo.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case oo.HTTP_ERROR:const l=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(g)>=0?g:f.UNKNOWN}(h.status);o(new y(d,h.message))}else o(new y(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(t,"POST",c,s,15)})}Ur(e,t,s){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=uw(),o=lw(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new fw({})),this.Fr(a.initMessageHeaders,t,s),sp()||ap()||cp()||up()||lp()||op()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");w("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new tb({Ar:g=>{h?w("Connection","Not sending because WebChannel is closed:",g):(l||(w("Connection","Opening WebChannel transport."),u.open(),l=!0),w("Connection","WebChannel sending:",g),u.send(g))},Rr:()=>u.close()}),m=(g,_,x)=>{g.listen(_,O=>{try{x(O)}catch($){setTimeout(()=>{throw $},0)}})};return m(u,br.EventType.OPEN,()=>{h||w("Connection","WebChannel transport opened.")}),m(u,br.EventType.CLOSE,()=>{h||(h=!0,w("Connection","WebChannel transport closed"),d.Cr())}),m(u,br.EventType.ERROR,g=>{h||(h=!0,As("Connection","WebChannel transport errored:",g),d.Cr(new y(f.UNAVAILABLE,"The operation could not be completed")))}),m(u,br.EventType.MESSAGE,g=>{var _;if(!h){const x=g.data[0];S(!!x);const O=x,$=O.error||((_=O[0])===null||_===void 0?void 0:_.error);if($){w("Connection","WebChannel received error:",$);const j=$.status;let V=function(mt){const gn=Q[mt];if(gn!==void 0)return md(gn)}(j),nt=$.message;V===void 0&&(V=f.INTERNAL,nt="Unknown error status: "+j+" with message "+$.message),h=!0,d.Cr(new y(V,nt)),u.close()}else w("Connection","WebChannel received:",x),d.Nr(x)}}),m(o,dw.STAT_EVENT,g=>{g.stat===hu.PROXY?w("Connection","Detected buffering proxy"):g.stat===hu.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Dr()},0),d}}/**
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
 */function Hd(){return typeof window!="undefined"?window:null}function Rr(){return typeof document!="undefined"?document:null}/**
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
 */function or(n){return new sv(n,!0)}class Ja{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Sn=e,this.timerId=t,this.qr=s,this.Kr=r,this.Gr=i,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const t=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),r=Math.max(0,t-s);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
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
 */class Wd{constructor(e,t,s,r,i,o,a,c){this.Sn=e,this.Xr=s,this.Zr=r,this.eo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Ja(e,t)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,t){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(X(t.toString()),X("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(t)}mo(){}auth(){this.state=1;const e=this.yo(this.no),t=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.no===t&&this.po(s,r)},s=>{e(()=>{const r=new y(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(r)})})}po(e,t){const s=this.yo(this.no);this.stream=this.Eo(e,t),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(r=>{s(()=>this.Io(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return t=>{this.Sn.enqueueAndForget(()=>this.no===e?t():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sb extends Wd{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.O=i}Eo(e,t){return this.eo.Ur("Listen",e,t)}onMessage(e){this.ro.reset();const t=ov(this.O,e),s=function(r){if(!("targetChange"in r))return E.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?E.min():i.readTime?ae(i.readTime):E.min()}(e);return this.listener.To(t,s)}Ao(e){const t={};t.database=Ms(this.O),t.addTarget=function(r,i){let o;const a=i.target;return o=Wr(a)?{documents:Td(r,a)}:{query:xd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=wd(r,i.resumeToken):i.snapshotVersion.compareTo(E.min())>0&&(o.readTime=Ps(r,i.snapshotVersion.toTimestamp())),o}(this.O,e);const s=cv(this.O,e);s&&(t.labels=s),this.fo(t)}Ro(e){const t={};t.database=Ms(this.O),t.removeTarget=e,this.fo(t)}}class rb extends Wd{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.O=i,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,t){return this.eo.Ur("Write",e,t)}onMessage(e){if(S(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const t=av(e.writeResults,e.commitTime),s=ae(e.commitTime);return this.listener.Vo(s,t)}return S(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Ms(this.O),this.fo(e)}vo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Us(this.O,s))};this.fo(t)}}/**
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
 */class ib extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.eo=s,this.O=r,this.Co=!1}No(){if(this.Co)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,t,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Mr(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}Lr(e,t,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.eo.Lr(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}terminate(){this.Co=!0}}class ob{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(X(t),this.Oo=!1):w("OnlineStateTracker",t)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
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
 */class ab{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=i,this.jo.mr(o=>{s.enqueueAndForget(async()=>{Rt(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=v(a);c.Ko.add(4),await ss(c),c.Qo.set("Unknown"),c.Ko.delete(4),await ar(c)}(this))})}),this.Qo=new ob(s,r)}}async function ar(n){if(Rt(n))for(const e of n.Go)await e(!0)}async function ss(n){for(const e of n.Go)await e(!1)}function Pi(n,e){const t=v(n);t.qo.has(e.targetId)||(t.qo.set(e.targetId,e),tc(t)?ec(t):is(t).co()&&Za(t,e))}function Fs(n,e){const t=v(n),s=is(t);t.qo.delete(e),s.co()&&Qd(t,e),t.qo.size===0&&(s.co()?s.ho():Rt(t)&&t.Qo.set("Unknown"))}function Za(n,e){n.Wo.Z(e.targetId),is(n).Ao(e)}function Qd(n,e){n.Wo.Z(e),is(n).Ro(e)}function ec(n){n.Wo=new ev({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>n.qo.get(e)||null}),is(n).start(),n.Qo.Mo()}function tc(n){return Rt(n)&&!is(n).oo()&&n.qo.size>0}function Rt(n){return v(n).Ko.size===0}function Yd(n){n.Wo=void 0}async function cb(n){n.qo.forEach((e,t)=>{Za(n,e)})}async function ub(n,e){Yd(n),tc(n)?(n.Qo.Bo(e),ec(n)):n.Qo.set("Unknown")}async function lb(n,e,t){if(n.Qo.set("Online"),e instanceof yd&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.qo.delete(o),s.Wo.removeTarget(o))}(n,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ti(n,s)}else if(e instanceof Nr?n.Wo.ct(e):e instanceof gd?n.Wo._t(e):n.Wo.ht(e),!t.isEqual(E.min()))try{const s=await $d(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.Wo.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.qo.get(c);u&&r.qo.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.qo.get(a);if(!c)return;r.qo.set(a,c.withResumeToken(ee.EMPTY_BYTE_STRING,c.snapshotVersion)),Qd(r,a);const u=new It(c.target,a,1,c.sequenceNumber);Za(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await ti(n,s)}}async function ti(n,e,t){if(!ln(e))throw e;n.Ko.add(1),await ss(n),n.Qo.set("Offline"),t||(t=()=>$d(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await t(),n.Ko.delete(1),await ar(n)})}function Xd(n,e){return e().catch(t=>ti(n,t,e))}async function rs(n){const e=v(n),t=St(e);let s=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;hb(e);)try{const r=await qv(e.localStore,s);if(r===null){e.Uo.length===0&&t.ho();break}s=r.batchId,db(e,r)}catch(r){await ti(e,r)}Jd(e)&&Zd(e)}function hb(n){return Rt(n)&&n.Uo.length<10}function db(n,e){n.Uo.push(e);const t=St(n);t.co()&&t.bo&&t.vo(e.mutations)}function Jd(n){return Rt(n)&&!St(n).oo()&&n.Uo.length>0}function Zd(n){St(n).start()}async function fb(n){St(n).Do()}async function pb(n){const e=St(n);for(const t of n.Uo)e.vo(t.mutations)}async function mb(n,e,t){const s=n.Uo.shift(),r=Fa.from(s,e,t);await Xd(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await rs(n)}async function gb(n,e){e&&St(n).bo&&await async function(t,s){if(r=s.code,pd(r)&&r!==f.ABORTED){const i=t.Uo.shift();St(t).ao(),await Xd(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await rs(t)}var r}(n,e),Jd(n)&&Zd(n)}async function Qu(n,e){const t=v(n);t.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Rt(t);t.Ko.add(3),await ss(t),s&&t.Qo.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ko.delete(3),await ar(t)}async function Fo(n,e){const t=v(n);e?(t.Ko.delete(2),await ar(t)):e||(t.Ko.add(2),await ss(t),t.Qo.set("Unknown"))}function is(n){return n.zo||(n.zo=function(e,t,s){const r=v(e);return r.No(),new sb(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(n.datastore,n.asyncQueue,{Pr:cb.bind(null,n),vr:ub.bind(null,n),To:lb.bind(null,n)}),n.Go.push(async e=>{e?(n.zo.ao(),tc(n)?ec(n):n.Qo.set("Unknown")):(await n.zo.stop(),Yd(n))})),n.zo}function St(n){return n.Ho||(n.Ho=function(e,t,s){const r=v(e);return r.No(),new rb(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,s)}(n.datastore,n.asyncQueue,{Pr:fb.bind(null,n),vr:gb.bind(null,n),So:pb.bind(null,n),Vo:mb.bind(null,n)}),n.Go.push(async e=>{e?(n.Ho.ao(),await rs(n)):(await n.Ho.stop(),n.Uo.length>0&&(w("RemoteStore",`Stopping write stream with ${n.Uo.length} pending writes`),n.Uo=[]))})),n.Ho}/**
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
 */class nc{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ie,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new nc(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function os(n,e){if(X("AsyncQueue",`${e}: ${n}`),ln(n))return new y(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Nn{constructor(e){this.comparator=e?(t,s)=>e(t,s)||b.comparator(t.key,s.key):(t,s)=>b.comparator(t.key,s.key),this.keyedMap=Po(),this.sortedSet=new W(this.comparator)}static emptySet(e){return new Nn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Nn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Yu{constructor(){this.Jo=new W(b.comparator)}track(e){const t=e.doc.key,s=this.Jo.get(t);s?e.type!==0&&s.type===3?this.Jo=this.Jo.insert(t,e):e.type===3&&s.type!==1?this.Jo=this.Jo.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Jo=this.Jo.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Jo=this.Jo.remove(t):e.type===1&&s.type===2?this.Jo=this.Jo.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):T():this.Jo=this.Jo.insert(t,e)}Yo(){const e=[];return this.Jo.inorderTraversal((t,s)=>{e.push(s)}),e}}class Kn{constructor(e,t,s,r,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,s,r){const i=[];return t.forEach(o=>{i.push({type:0,doc:o})}),new Kn(e,t,Nn.emptySet(t),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&er(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class yb{constructor(){this.Xo=void 0,this.listeners=[]}}class wb{constructor(){this.queries=new ns(e=>rd(e),er),this.onlineState="Unknown",this.Zo=new Set}}async function sc(n,e){const t=v(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new yb),r)try{i.Xo=await t.onListen(s)}catch(o){const a=os(o,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.tc(t.onlineState),i.Xo&&e.ec(i.Xo)&&ic(t)}async function rc(n,e){const t=v(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function vb(n,e){const t=v(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.ec(r)&&(s=!0);o.Xo=r}}s&&ic(t)}function bb(n,e,t){const s=v(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function ic(n){n.Zo.forEach(e=>{e.next()})}class oc{constructor(e,t,s){this.query=e,this.nc=t,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Kn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.sc?this.rc(e)&&(this.nc.next(e),t=!0):this.oc(e,this.onlineState)&&(this.cc(e),t=!0),this.ic=e,t}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let t=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),t=!0),t}oc(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.uc||!s)&&(!e.docs.isEmpty()||t==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const t=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}cc(e){e=Kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
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
 */class _b{constructor(e,t){this.payload=e,this.byteLength=t}ac(){return"metadata"in this.payload}}/**
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
 */class Xu{constructor(e){this.O=e}Gs(e){return Je(this.O,e)}js(e){return e.metadata.exists?Id(this.O,e.document,!1):q.newNoDocument(this.Gs(e.metadata.name),this.Qs(e.metadata.readTime))}Qs(e){return ae(e)}}class Ib{constructor(e,t,s){this.hc=e,this.localStore=t,this.O=s,this.queries=[],this.documents=[],this.progress=ef(e)}lc(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}fc(e){const t=new Map,s=new Xu(this.O);for(const r of e)if(r.metadata.queries){const i=s.Gs(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||P()).add(i);t.set(o,a)}}return t}async complete(){const e=await jv(this.localStore,new Xu(this.O),this.documents,this.hc.id),t=this.fc(this.documents);for(const s of this.queries)await Kv(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",new Mv(Object.assign({},this.progress),e)}}function ef(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class tf{constructor(e){this.key=e}}class nf{constructor(e){this.key=e}}class sf{constructor(e,t){this.query=e,this.dc=t,this._c=null,this.current=!1,this.wc=P(),this.mutatedKeys=P(),this.mc=id(e),this.gc=new Nn(this.mc)}get yc(){return this.dc}Ic(e,t){const s=t?t.Ec:new Yu,r=t?t.gc:this.gc;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=Ar(this.query)&&r.size===this.query.limit?r.last():null,u=Qr(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),m=Oa(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let x=!1;d&&m?d.data.isEqual(m.data)?g!==_&&(s.track({type:3,doc:m}),x=!0):this.Tc(d,m)||(s.track({type:2,doc:m}),x=!0,(c&&this.mc(m,c)>0||u&&this.mc(m,u)<0)&&(a=!0)):!d&&m?(s.track({type:0,doc:m}),x=!0):d&&!m&&(s.track({type:1,doc:d}),x=!0,(c||u)&&(a=!0)),x&&(m?(o=o.add(m),i=_?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),Ar(this.query)||Qr(this.query))for(;o.size>this.query.limit;){const l=Ar(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{gc:o,Ec:s,ks:a,mutatedKeys:i}}Tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const i=e.Ec.Yo();i.sort((u,l)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return m(h)-m(d)}(u.type,l.type)||this.mc(u.doc,l.doc)),this.Ac(s);const o=t?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,i.length!==0||c?{snapshot:new Kn(this.query,e.gc,r,i,e.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Yu,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(t=>this.dc=this.dc.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.dc=this.dc.delete(t)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=P(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const t=[];return e.forEach(s=>{this.wc.has(s)||t.push(new nf(s))}),this.wc.forEach(s=>{e.has(s)||t.push(new tf(s))}),t}vc(e){this.dc=e.Ks,this.wc=P();const t=this.Ic(e.documents);return this.applyChanges(t,!0)}Vc(){return Kn.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class Tb{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class xb{constructor(e){this.key=e,this.Sc=!1}}class Eb{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new ns(a=>rd(a),er),this.Nc=new Map,this.xc=new Set,this.kc=new W(b.comparator),this.Oc=new Map,this.Mc=new Qa,this.$c={},this.Fc=new Map,this.Bc=nn.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function Sb(n,e){const t=hc(n);let s,r;const i=t.Cc.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.Vc();else{const o=await $n(t.localStore,Ke(e));t.isPrimaryClient&&Pi(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await ac(t,e,s,a==="current")}return r}async function ac(n,e,t,s){n.Uc=(l,h,d)=>async function(m,g,_,x){let O=g.view.Ic(_);O.ks&&(O=await Jr(m.localStore,g.query,!1).then(({documents:V})=>g.view.Ic(V,O)));const $=x&&x.targetChanges.get(g.targetId),j=g.view.applyChanges(O,m.isPrimaryClient,$);return Bo(m,g.targetId,j.Pc),j.snapshot}(n,l,h,d);const r=await Jr(n.localStore,e,!0),i=new sf(e,r.Ks),o=i.Ic(r.documents),a=ir.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline"),c=i.applyChanges(o,n.isPrimaryClient,a);Bo(n,t,c.Pc);const u=new Tb(e,t,i);return n.Cc.set(e,u),n.Nc.has(t)?n.Nc.get(t).push(e):n.Nc.set(t,[e]),c.snapshot}async function kb(n,e){const t=v(n),s=t.Cc.get(e),r=t.Nc.get(s.targetId);if(r.length>1)return t.Nc.set(s.targetId,r.filter(i=>!er(i,e))),void t.Cc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await jn(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Fs(t.remoteStore,s.targetId),Gn(t,s.targetId)}).catch(hn)):(Gn(t,s.targetId),await jn(t.localStore,s.targetId,!0))}async function Cb(n,e,t){const s=dc(n);try{const r=await function(i,o){const a=v(i),c=oe.now(),u=o.reduce((h,d)=>h.add(d.key),P());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Us.Es(h,u).next(d=>{l=d;const m=[];for(const g of o){const _=Hw(g,l.get(g.key));_!=null&&m.push(new un(g.key,_,Zh(_.value.mapValue),J.exists(!0)))}return a.gs.addMutationBatch(h,c,m,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.$c[i.currentUser.toKey()];c||(c=new W(C)),c=c.insert(o,a),i.$c[i.currentUser.toKey()]=c}(s,r.batchId,t),await pt(s,r.changes),await rs(s.remoteStore)}catch(r){const i=os(r,"Failed to persist write");t.reject(i)}}async function rf(n,e){const t=v(n);try{const s=await Vv(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Oc.get(i);o&&(S(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Sc=!0:r.modifiedDocuments.size>0?S(o.Sc):r.removedDocuments.size>0&&(S(o.Sc),o.Sc=!1))}),await pt(t,s,e)}catch(s){await hn(s)}}function Ju(n,e,t){const s=v(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Cc.forEach((i,o)=>{const a=o.view.tc(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=v(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.tc(o)&&(c=!0)}),c&&ic(a)}(s.eventManager,e),r.length&&s.Dc.To(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ab(n,e,t){const s=v(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Oc.get(e),i=r&&r.key;if(i){let o=new W(b.comparator);o=o.insert(i,q.newNoDocument(i,E.min()));const a=P().add(i),c=new rr(E.min(),new Map,new B(C),o,a);await rf(s,c),s.kc=s.kc.remove(i),s.Oc.delete(e),lc(s)}else await jn(s.localStore,e,!1).then(()=>Gn(s,e,t)).catch(hn)}async function Db(n,e){const t=v(n),s=e.batch.batchId;try{const r=await Bv(t.localStore,e);uc(t,s,null),cc(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await pt(t,r)}catch(r){await hn(r)}}async function Nb(n,e,t){const s=v(n);try{const r=await function(i,o){const a=v(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.gs.lookupMutationBatch(c,o).next(l=>(S(l!==null),u=l.keys(),a.gs.removeMutationBatch(c,l))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,u))})}(s.localStore,e);uc(s,e,t),cc(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await pt(s,r)}catch(r){await hn(r)}}async function Rb(n,e){const t=v(n);Rt(t.remoteStore)||w("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=v(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.gs.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.Fc.get(s)||[];r.push(e),t.Fc.set(s,r)}catch(s){const r=os(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function cc(n,e){(n.Fc.get(e)||[]).forEach(t=>{t.resolve()}),n.Fc.delete(e)}function uc(n,e,t){const s=v(n);let r=s.$c[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.$c[s.currentUser.toKey()]=r}}function Gn(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Nc.get(e))n.Cc.delete(s),t&&n.Dc.qc(s,t);n.Nc.delete(e),n.isPrimaryClient&&n.Mc.si(e).forEach(s=>{n.Mc.containsKey(s)||of(n,s)})}function of(n,e){n.xc.delete(e.path.canonicalString());const t=n.kc.get(e);t!==null&&(Fs(n.remoteStore,t),n.kc=n.kc.remove(e),n.Oc.delete(t),lc(n))}function Bo(n,e,t){for(const s of t)s instanceof tf?(n.Mc.addReference(s.key,e),Ob(n,s)):s instanceof nf?(w("SyncEngine","Document no longer in limbo: "+s.key),n.Mc.removeReference(s.key,e),n.Mc.containsKey(s.key)||of(n,s.key)):T()}function Ob(n,e){const t=e.key,s=t.path.canonicalString();n.kc.get(t)||n.xc.has(s)||(w("SyncEngine","New document in limbo: "+t),n.xc.add(s),lc(n))}function lc(n){for(;n.xc.size>0&&n.kc.size<n.maxConcurrentLimboResolutions;){const e=n.xc.values().next().value;n.xc.delete(e);const t=new b(R.fromString(e)),s=n.Bc.next();n.Oc.set(s,new xb(t)),n.kc=n.kc.insert(t,s),Pi(n.remoteStore,new It(Ke(ts(t.path)),s,2,Me.A))}}async function pt(n,e,t){const s=v(n),r=[],i=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,e,t).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=Wa.Ss(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.Dc.To(r),await async function(a,c){const u=v(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.vs,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Vs,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ln(l))throw l;w("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ms.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.Ms=u.Ms.insert(h,g)}}}(s.localStore,i))}async function Pb(n,e){const t=v(n);if(!t.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await qd(t.localStore,e);t.currentUser=e,function(r,i){r.Fc.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,i))})}),r.Fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await pt(t,s.qs)}}function Lb(n,e){const t=v(n),s=t.Oc.get(e);if(s&&s.Sc)return P().add(s.key);{let r=P();const i=t.Nc.get(e);if(!i)return r;for(const o of i){const a=t.Cc.get(o);r=r.unionWith(a.view.yc)}return r}}async function Mb(n,e){const t=v(n),s=await Jr(t.localStore,e.query,!0),r=e.view.vc(s);return t.isPrimaryClient&&Bo(t,e.targetId,r.Pc),r}async function Ub(n){const e=v(n);return Gd(e.localStore).then(t=>pt(e,t))}async function Fb(n,e,t,s){const r=v(n),i=await function(o,a){const c=v(o),u=v(c.gs);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Ge(l,a).next(h=>h?c.Us.Es(l,h):p.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await rs(r.remoteStore):t==="acknowledged"||t==="rejected"?(uc(r,e,s||null),cc(r,e),function(o,a){v(v(o).gs).Qe(a)}(r.localStore,e)):T(),await pt(r,i)):w("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Bb(n,e){const t=v(n);if(hc(t),dc(t),e===!0&&t.Lc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await Zu(t,s.toArray());t.Lc=!0,await Fo(t.remoteStore,!0);for(const i of r)Pi(t.remoteStore,i)}else if(e===!1&&t.Lc!==!1){const s=[];let r=Promise.resolve();t.Nc.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(Gn(t,o),jn(t.localStore,o,!0))),Fs(t.remoteStore,o)}),await r,await Zu(t,s),function(i){const o=v(i);o.Oc.forEach((a,c)=>{Fs(o.remoteStore,c)}),o.Mc.ii(),o.Oc=new Map,o.kc=new W(b.comparator)}(t),t.Lc=!1,await Fo(t.remoteStore,!1)}}async function Zu(n,e,t){const s=v(n),r=[],i=[];for(const o of e){let a;const c=s.Nc.get(o);if(c&&c.length!==0){a=await $n(s.localStore,Ke(c[0]));for(const u of c){const l=s.Cc.get(u),h=await Mb(s,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await Kd(s.localStore,o);a=await $n(s.localStore,u),await ac(s,af(u),o,!1)}r.push(a)}return s.Dc.To(i),r}function af(n){return nd(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Vb(n){const e=v(n);return v(v(e.localStore).persistence).ds()}async function qb(n,e,t,s){const r=v(n);if(r.Lc)w("SyncEngine","Ignoring unexpected query state notification.");else if(r.Nc.has(e))switch(t){case"current":case"not-current":{const i=await Gd(r.localStore),o=rr.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await pt(r,i,o);break}case"rejected":await jn(r.localStore,e,!0),Gn(r,e,s);break;default:T()}}async function $b(n,e,t){const s=hc(n);if(s.Lc){for(const r of e){if(s.Nc.has(r)){w("SyncEngine","Adding an already active target "+r);continue}const i=await Kd(s.localStore,r),o=await $n(s.localStore,i);await ac(s,af(i),o.targetId,!1),Pi(s.remoteStore,o)}for(const r of t)s.Nc.has(r)&&await jn(s.localStore,r,!1).then(()=>{Fs(s.remoteStore,r),Gn(s,r)}).catch(hn)}}function hc(n){const e=v(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ab.bind(null,e),e.Dc.To=vb.bind(null,e.eventManager),e.Dc.qc=bb.bind(null,e.eventManager),e}function dc(n){const e=v(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Db.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nb.bind(null,e),e}function jb(n,e,t){const s=v(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(h,d){const m=v(h),g=ae(d.createTime);return m.persistence.runTransaction("hasNewerBundle","readonly",_=>m.Kn.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(g)>=0)}(r.localStore,a))return await i.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(ef(a));const c=new Ib(a,r.localStore,i.O);let u=await i.Kc();for(;u;){const h=await c.lc(u);h&&o._updateProgress(h),u=await i.Kc()}const l=await c.complete();await pt(r,l.ws,void 0),await function(h,d){const m=v(h);return m.persistence.runTransaction("Save bundle","readwrite",g=>m.Kn.saveBundleMetadata(g,d))}(r.localStore,a),o._completeWith(l.progress)}catch(a){As("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(s,e,t).then(()=>{s.sharedClientState.notifyBundleLoaded()})}class cf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=or(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return Vd(this.persistence,new Bd,e.initialUser,this.O)}jc(e){return new Xv(Ya.bi,this.O)}Gc(e){return new zd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uf extends cf{constructor(e,t,s){super(),this.zc=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await $v(this.localStore),await this.zc.initialize(this,e),await dc(this.zc.syncEngine),await rs(this.zc.remoteStore),await this.persistence.Hn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Wc(e){return Vd(this.persistence,new Bd,e.initialUser,this.O)}Qc(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Dv(t,e.asyncQueue)}jc(e){const t=Ha(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new za(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,Hd(),Rr(),this.O,this.sharedClientState,!!this.forceOwnership)}Gc(e){return new zd}}class Kb extends uf{constructor(e,t){super(e,t,!1),this.zc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.zc.syncEngine;this.sharedClientState instanceof fo&&(this.sharedClientState.syncEngine={hr:Fb.bind(null,t),lr:qb.bind(null,t),dr:$b.bind(null,t),ds:Vb.bind(null,t),ar:Ub.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Hn(async s=>{await Bb(this.zc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):s||this.gcScheduler.stop())})}Gc(e){const t=Hd();if(!fo.Vt(t))throw new y(f.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Ha(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new fo(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class fc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ju(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pb.bind(null,this.syncEngine),await Fo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wb}createDatastore(e){const t=or(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new nb(r));var r;return function(i,o,a,c){return new ib(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Ju(this.syncEngine,a,0),o=Wu.Vt()?new Wu:new Zv,new ab(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,c,u){const l=new Eb(s,r,i,o,a,c);return u&&(l.Lc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=v(e);w("RemoteStore","RemoteStore shutting down."),t.Ko.add(5),await ss(t),t.jo.shutdown(),t.Qo.set("Unknown")}(this.remoteStore)}}/**
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
 */function el(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Li{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Gb{constructor(e,t){this.Yc=e,this.O=t,this.metadata=new ie,this.buffer=new Uint8Array,this.Xc=new TextDecoder("utf-8"),this.Zc().then(s=>{s&&s.ac()?this.metadata.resolve(s.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.payload)}`))},s=>this.metadata.reject(s))}close(){return this.Yc.cancel()}async getMetadata(){return this.metadata.promise}async Kc(){return await this.getMetadata(),this.Zc()}async Zc(){const e=await this.tu();if(e===null)return null;const t=this.Xc.decode(e),s=Number(t);isNaN(s)&&this.eu(`length string (${t}) is not valid number`);const r=await this.nu(s);return new _b(JSON.parse(r),e.length+s)}su(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async tu(){for(;this.su()<0&&!await this.iu(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.eu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async nu(e){for(;this.buffer.length<e;)await this.iu()&&this.eu("Reached the end of bundle when more is expected.");const t=this.Xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}eu(e){throw this.Yc.cancel(),new Error(`Invalid bundle format: ${e}`)}async iu(){const e=await this.Yc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class zb{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(f.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=v(s),o=Ms(i.O)+"/documents",a={documents:r.map(h=>Ls(i.O,h))},c=await i.Lr("BatchGetDocuments",o,a),u=new Map;c.forEach(h=>{const d=iv(i.O,h);u.set(d.key.toString(),d)});const l=[];return r.forEach(h=>{const d=u.get(h.toString());S(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new sr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=b.fromPath(s);this.mutations.push(new Pa(r,this.precondition(r)))}),await async function(t,s){const r=v(t),i=Ms(r.O)+"/documents",o={writes:s.map(a=>Us(r.O,a))};await r.Mr("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T();t=E.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new y(f.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?J.updateTime(t):J.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(E.min()))throw new y(f.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return J.updateTime(t)}return J.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Hb{constructor(e,t,s,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=s,this.deferred=r,this.ru=5,this.ro=new Ja(this.asyncQueue,"transaction_retry")}run(){this.ru-=1,this.ou()}ou(){this.ro.Hr(async()=>{const e=new zb(this.datastore),t=this.cu(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.uu(r)}))}).catch(s=>{this.uu(s)})})}cu(e){try{const t=this.updateFunction(e);return!cn(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}uu(e){this.ru>0&&this.au(e)?(this.ru-=1,this.asyncQueue.enqueueAndForget(()=>(this.ou(),Promise.resolve()))):this.deferred.reject(e)}au(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!pd(t)}return!1}}/**
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
 */class Wb{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=he.UNAUTHENTICATED,this.clientId=Wh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ie;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=os(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lf(n,e){n.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await qd(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function hf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pc(n);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>Qu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Qu(e.remoteStore,i)),n.onlineComponents=e}async function pc(n){return n.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await lf(n,new cf)),n.offlineComponents}async function Mi(n){return n.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await hf(n,new fc)),n.onlineComponents}function df(n){return pc(n).then(e=>e.persistence)}function mc(n){return pc(n).then(e=>e.localStore)}function ff(n){return Mi(n).then(e=>e.remoteStore)}function gc(n){return Mi(n).then(e=>e.syncEngine)}async function zn(n){const e=await Mi(n),t=e.eventManager;return t.onListen=Sb.bind(null,e.syncEngine),t.onUnlisten=kb.bind(null,e.syncEngine),t}function Qb(n){return n.asyncQueue.enqueue(async()=>{const e=await df(n),t=await ff(n);return e.setNetworkEnabled(!0),function(s){const r=v(s);return r.Ko.delete(0),ar(r)}(t)})}function Yb(n){return n.asyncQueue.enqueue(async()=>{const e=await df(n),t=await ff(n);return e.setNetworkEnabled(!1),async function(s){const r=v(s);r.Ko.add(0),await ss(r),r.Qo.set("Offline")}(t)})}function Xb(n,e){const t=new ie;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,c){const u=v(a);return u.persistence.runTransaction("read document","readonly",l=>u.Us.ys(l,c))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new y(f.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=os(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await mc(n),e,t)),t.promise}function pf(n,e,t={}){const s=new ie;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Li({next:h=>{i.enqueueAndForget(()=>rc(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new oc(ts(o.path),u,{includeMetadataChanges:!0,uc:!0});return sc(r,l)}(await zn(n),n.asyncQueue,e,t,s)),s.promise}function Jb(n,e){const t=new ie;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await Jr(s,r,!0),a=new sf(r,o.Ks),c=a.Ic(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=os(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await mc(n),e,t)),t.promise}function mf(n,e,t={}){const s=new ie;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Li({next:h=>{i.enqueueAndForget(()=>rc(r,l)),h.fromCache&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new oc(o,u,{includeMetadataChanges:!0,uc:!0});return sc(r,l)}(await zn(n),n.asyncQueue,e,t,s)),s.promise}function Zb(n,e){const t=new Li(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){v(s).Zo.add(r),r.next()}(await zn(n),t)),()=>{t.Jc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){v(s).Zo.delete(r)}(await zn(n),t))}}function e_(n,e){const t=new ie;return n.asyncQueue.enqueueAndForget(async()=>{const s=await function(r){return Mi(r).then(i=>i.datastore)}(n);new Hb(n.asyncQueue,s,e,t).run()}),t.promise}function t_(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new Gb(c,u)}(function(c,u){if(c instanceof Uint8Array)return el(c,u);if(c instanceof ArrayBuffer)return el(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,or(e));n.asyncQueue.enqueueAndForget(async()=>{jb(await gc(n),r,s)})}function n_(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=v(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.Kn.getNamedQuery(i,s))}(await mc(n),e))}const tl=new Map;/**
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
 */function yc(n,e,t){if(!t)throw new y(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gf(n,e,t,s){if(e===!0&&s===!0)throw new y(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nl(n){if(!b.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sl(n){if(b.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ui(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function D(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ui(n);throw new y(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function yf(n,e){if(e<=0)throw new y(f.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class rl{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class cr{constructor(e,t,s){this._authCredentials=t,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rl({}),this._settingsFrozen=!1,e instanceof Yt?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yt(r.options.projectId)}(e))}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rl(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new yw;switch(t.type){case"gapi":const s=t.client;return S(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new _w(s,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=tl.get(e);t&&(w("ComponentProvider","Removing Datastore"),tl.delete(e),t.terminate())}(this),Promise.resolve()}}function s_(n,e,t,s={}){var r;const i=(n=D(n,cr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&As("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=he.MOCK_USER;else{o=pl(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new he(c)}n._authCredentials=new ww(new Hh(o,a))}}/**
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
 */class U{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ze(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new U(this.firestore,e,this._key)}}class _e{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _e(this.firestore,e,this._query)}}class Ze extends _e{constructor(e,t,s){super(e,t,ts(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new U(this.firestore,null,new b(e))}withConverter(e){return new Ze(this.firestore,e,this._path)}}function wf(n,e,...t){if(n=L(n),yc("collection","path",e),n instanceof cr){const s=R.fromString(e,...t);return sl(s),new Ze(n,null,s)}{if(!(n instanceof U||n instanceof Ze))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(R.fromString(e,...t));return sl(s),new Ze(n.firestore,null,s)}}function r_(n,e){if(n=D(n,cr),yc("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new _e(n,null,function(t){return new ft(R.emptyPath(),t)}(e))}function ni(n,e,...t){if(n=L(n),arguments.length===1&&(e=Wh.R()),yc("doc","path",e),n instanceof cr){const s=R.fromString(e,...t);return nl(s),new U(n,null,new b(s))}{if(!(n instanceof U||n instanceof Ze))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(R.fromString(e,...t));return nl(s),new U(n.firestore,n instanceof Ze?n.converter:null,new b(s))}}function vf(n,e){return n=L(n),e=L(e),(n instanceof U||n instanceof Ze)&&(e instanceof U||e instanceof Ze)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function bf(n,e){return n=L(n),e=L(e),n instanceof _e&&e instanceof _e&&n.firestore===e.firestore&&er(n._query,e._query)&&n.converter===e.converter}/**
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
 */class i_{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Ja(this,"async_queue_retry"),this.yu=()=>{const t=Rr();t&&w("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ro.Yr()};const e=Rr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const t=Rr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const t=new ie;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!ln(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const t=this.hu.then(()=>(this.wu=!0,e().catch(s=>{this._u=s,this.wu=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw X("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.wu=!1,s))));return this.hu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.gu.indexOf(e)>-1&&(t=0);const r=nc.createAndSchedule(this,e,t,s,i=>this.Tu(i));return this.du.push(r),r}pu(){this._u&&T()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Vo(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class o_{constructor(){this._progressObserver={},this._taskCompletionResolver=new ie,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const a_=-1;class z extends cr{constructor(e,t,s){super(e,t,s),this.type="firestore",this._queue=new i_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||_f(this),this._firestoreClient.terminate()}}function le(n){return n._firestoreClient||_f(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function _f(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new Cw(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Wb(n._authCredentials,n._appCheckCredentials,n._queue,s)}function c_(n,e){Tf(n=D(n,z));const t=le(n),s=n._freezeSettings(),r=new fc;return If(t,r,new uf(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function u_(n){Tf(n=D(n,z));const e=le(n),t=n._freezeSettings(),s=new fc;return If(e,s,new Kb(s,t.cacheSizeBytes))}function If(n,e,t){const s=new ie;return n.asyncQueue.enqueue(async()=>{try{await lf(n,t),await hf(n,e),s.resolve()}catch(r){if(!function(i){return i.name==="FirebaseError"?i.code===f.FAILED_PRECONDITION||i.code===f.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(r))throw r;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function l_(n){if(n._initialized&&!n._terminated)throw new y(f.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ie;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ge.Vt())return Promise.resolve();const s=t+"main";await Ge.delete(s)}(Ha(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function h_(n){return function(e){const t=new ie;return e.asyncQueue.enqueueAndForget(async()=>Rb(await gc(e),t)),t.promise}(le(n=D(n,z)))}function d_(n){return Qb(le(n=D(n,z)))}function f_(n){return Yb(le(n=D(n,z)))}function p_(n,e){const t=le(n=D(n,z)),s=new o_;return t_(t,n._databaseId,e,s),s}function m_(n,e){return n_(le(n=D(n,z)),e).then(t=>t?new _e(n,null,t.query):null)}function Tf(n){if(n._initialized||n._terminated)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class kt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new et(ee.fromBase64String(e))}catch(t){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new et(ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class dn{constructor(e){this._methodName=e}}/**
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
 */class Fi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return C(this._lat,e._lat)||C(this._long,e._long)}}/**
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
 */const g_=/^__.*__$/;class y_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new nr(e,this.data,t,this.fieldTransforms)}}class xf{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ef(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Bi{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.O=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new Bi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Su({path:s,Cu:!1});return r.Nu(e),r}xu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Su({path:s,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return si(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(Ef(this.Vu)&&g_.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class w_{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.O=s||or(e)}Fu(e,t,s,r=!1){return new Bi({Vu:e,methodName:t,$u:s,path:se.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function fn(n){const e=n._freezeSettings(),t=or(n._databaseId);return new w_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Vi(n,e,t,s,r,i={}){const o=n.Fu(i.merge||i.mergeFields?2:0,e,t,r);_c("Data must be an object, but it was:",o,s);const a=Cf(s,o);let c,u;if(i.merge)c=new Pn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=qo(e,h,t);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Df(l,d)||l.push(d)}c=new Pn(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new y_(new we(a),c,u)}class ur extends dn{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Ou(`${this._methodName}() can only appear at the top level of your update data`):e.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ur}}function Sf(n,e,t){return new Bi({Vu:3,$u:e.settings.$u,methodName:n._methodName,Cu:t},e.databaseId,e.O,e.ignoreUndefinedProperties)}class wc extends dn{_toFieldTransform(e){return new tr(e.path,new Fn)}isEqual(e){return e instanceof wc}}class v_ extends dn{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=Sf(this,e,!0),s=this.Bu.map(i=>pn(i,t)),r=new Jt(s);return new tr(e.path,r)}isEqual(e){return this===e}}class b_ extends dn{constructor(e,t){super(e),this.Bu=t}_toFieldTransform(e){const t=Sf(this,e,!0),s=this.Bu.map(i=>pn(i,t)),r=new Zt(s);return new tr(e.path,r)}isEqual(e){return this===e}}class __ extends dn{constructor(e,t){super(e),this.Lu=t}_toFieldTransform(e){const t=new Bn(e.O,cd(e.O,this.Lu));return new tr(e.path,t)}isEqual(e){return this===e}}function vc(n,e,t,s){const r=n.Fu(1,e,t);_c("Data must be an object, but it was:",r,s);const i=[],o=we.empty();an(s,(c,u)=>{const l=Ic(e,c,t);u=L(u);const h=r.xu(l);if(u instanceof ur)i.push(l);else{const d=pn(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Pn(i);return new xf(o,a,r.fieldTransforms)}function bc(n,e,t,s,r,i){const o=n.Fu(1,e,t),a=[qo(e,s,t)],c=[r];if(i.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(qo(e,i[d])),c.push(i[d+1]);const u=[],l=we.empty();for(let d=a.length-1;d>=0;--d)if(!Df(u,a[d])){const m=a[d];let g=c[d];g=L(g);const _=o.xu(m);if(g instanceof ur)u.push(m);else{const x=pn(g,_);x!=null&&(u.push(m),l.set(m,x))}}const h=new Pn(u);return new xf(l,h,o.fieldTransforms)}function kf(n,e,t,s=!1){return pn(t,n.Fu(s?4:3,e))}function pn(n,e){if(Af(n=L(n)))return _c("Unsupported field value:",e,n),Cf(n,e);if(n instanceof dn)return function(t,s){if(!Ef(s.Vu))throw s.Ou(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ou(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=pn(o,s.ku(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=L(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return cd(s.O,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=oe.fromDate(t);return{timestampValue:Ps(s.O,r)}}if(t instanceof oe){const r=new oe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ps(s.O,r)}}if(t instanceof Fi)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof et)return{bytesValue:wd(s.O,t._byteString)};if(t instanceof U){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.Ou(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:La(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.Ou(`Unsupported field value: ${Ui(t)}`)}(n,e)}function Cf(n,e){const t={};return Yh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):an(n,(s,r)=>{const i=pn(r,e.Du(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Af(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof Fi||n instanceof et||n instanceof U||n instanceof dn)}function _c(n,e,t){if(!Af(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Ui(t);throw s==="an object"?e.Ou(n+" a custom object"):e.Ou(n+" "+s)}}function qo(n,e,t){if((e=L(e))instanceof kt)return e._internalPath;if(typeof e=="string")return Ic(n,e);throw si("Field path arguments must be of type string or ",n,!1,void 0,t)}const I_=new RegExp("[~\\*/\\[\\]]");function Ic(n,e,t){if(e.search(I_)>=0)throw si(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new kt(...e.split("."))._internalPath}catch{throw si(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function si(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new y(f.INVALID_ARGUMENT,a+n+c)}function Df(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Bs{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new U(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new T_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class T_ extends Bs{data(){return super.data()}}function qi(n,e){return typeof e=="string"?Ic(n,e):e instanceof kt?e._internalPath:e._delegate._internalPath}/**
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
 */class Ft{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ht extends Bs{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(qi("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class _s extends ht{data(e={}){return super.data(e)}}class Ct{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ft(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new _s(this._firestore,this._userDataWriter,s.key,s,new Ft(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new _s(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ft(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new _s(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ft(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:x_(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function x_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}function Nf(n,e){return n instanceof ht&&e instanceof ht?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ct&&e instanceof Ct&&n._firestore===e._firestore&&bf(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function Rf(n){if(Qr(n)&&n.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lr{}function yt(n,...e){for(const t of e)n=t._apply(n);return n}class E_ extends lr{constructor(e,t,s){super(),this.Uu=e,this.qu=t,this.Ku=s,this.type="where"}_apply(e){const t=fn(e.firestore),s=function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ol(l,u);const m=[];for(const g of l)m.push(il(a,r,g));h={arrayValue:{values:m}}}else h=il(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ol(l,u),h=kf(o,i,l,u==="in"||u==="not-in");const d=Ae.create(c,u,h);return function(m,g){if(g.S()){const x=Na(m);if(x!==null&&!x.isEqual(g.field))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${x.toString()}' and '${g.field.toString()}'`);const O=Da(m);O!==null&&Uf(m,g.field,O)}const _=function(x,O){for(const $ of x.filters)if(O.indexOf($.op)>=0)return $.op;return null}(m,function(x){switch(x){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(_!==null)throw _===g.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${_.toString()}' filters.`)}(r,d),d}(e._query,"where",t,e.firestore._databaseId,this.Uu,this.qu,this.Ku);return new _e(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new ft(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function S_(n,e,t){const s=e,r=qi("where",n);return new E_(r,s,t)}class k_ extends lr{constructor(e,t){super(),this.Uu=e,this.Gu=t,this.type="orderBy"}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Dn(r,i);return function(a,c){if(Da(a)===null){const u=Na(a);u!==null&&Uf(a,u,c.field)}}(s,o),o}(e._query,this.Uu,this.Gu);return new _e(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ft(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function C_(n,e="asc"){const t=e,s=qi("orderBy",n);return new k_(s,t)}class Of extends lr{constructor(e,t,s){super(),this.type=e,this.ju=t,this.Qu=s}_apply(e){return new _e(e.firestore,e.converter,sd(e._query,this.ju,this.Qu))}}function A_(n){return yf("limit",n),new Of("limit",n,"F")}function D_(n){return yf("limitToLast",n),new Of("limitToLast",n,"L")}class Pf extends lr{constructor(e,t,s){super(),this.type=e,this.Wu=t,this.zu=s}_apply(e){const t=Mf(e,this.type,this.Wu,this.zu);return new _e(e.firestore,e.converter,function(s,r){return new ft(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function N_(...n){return new Pf("startAt",n,!0)}function R_(...n){return new Pf("startAfter",n,!1)}class Lf extends lr{constructor(e,t,s){super(),this.type=e,this.Wu=t,this.zu=s}_apply(e){const t=Mf(e,this.type,this.Wu,this.zu);return new _e(e.firestore,e.converter,function(s,r){return new ft(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function O_(...n){return new Lf("endBefore",n,!1)}function P_(...n){return new Lf("endAt",n,!0)}function Mf(n,e,t,s){if(t[0]=L(t[0]),t[0]instanceof Bs)return function(r,i,o,a,c){if(!a)throw new y(f.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Un(r))if(l.field.isKeyField())u.push(zr(i,a.key));else{const h=a.data.field(l.field);if(Aa(h))throw new y(f.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new y(f.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Mn(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=fn(n.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new y(f.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let m=0;m<u.length;m++){const g=u[m];if(h[m].field.isKeyField()){if(typeof g!="string")throw new y(f.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Ra(i)&&g.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const _=i.path.child(R.fromString(g));if(!b.isDocumentKey(_))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const x=new b(_);d.push(zr(o,x))}else{const _=kf(a,c,g);d.push(_)}}return new Mn(d,l)}(n._query,n.firestore._databaseId,r,e,t,s)}}function il(n,e,t){if(typeof(t=L(t))=="string"){if(t==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ra(e)&&t.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(R.fromString(t));if(!b.isDocumentKey(s))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return zr(n,new b(s))}if(t instanceof U)return zr(n,t._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ui(t)}.`)}function ol(n,e){if(!Array.isArray(n)||n.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(f.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Uf(n,e,t){if(!t.isEqual(e))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */class Tc{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return G(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const s={};return an(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new Fi(G(e.latitude),G(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xh(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const t=Et(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=R.fromString(e);S(kd(s));const r=new Yt(s.get(1),s.get(3)),i=new b(s.popFirst(5));return r.isEqual(t)||X(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function $i(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class L_ extends Tc{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new U(this.firestore,null,t)}}/**
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
 */class M_{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=fn(e)}set(e,t,s){this._verifyNotCommitted();const r=bt(e,this._firestore),i=$i(r.converter,t,s),o=Vi(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,J.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=bt(e,this._firestore);let o;return o=typeof(t=L(t))=="string"||t instanceof kt?bc(this._dataReader,"WriteBatch.update",i._key,t,s,r):vc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,J.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=bt(e,this._firestore);return this._mutations=this._mutations.concat(new sr(t._key,J.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function bt(n,e){if((n=L(n)).firestore!==e)throw new y(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function U_(n){n=D(n,U);const e=D(n.firestore,z);return pf(le(e),n._key).then(t=>xc(e,n,t))}class mn extends Tc{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new U(this.firestore,null,t)}}function F_(n){n=D(n,U);const e=D(n.firestore,z),t=le(e),s=new mn(e);return Xb(t,n._key).then(r=>new ht(e,s,n._key,r,new Ft(r!==null&&r.hasLocalMutations,!0),n.converter))}function B_(n){n=D(n,U);const e=D(n.firestore,z);return pf(le(e),n._key,{source:"server"}).then(t=>xc(e,n,t))}function V_(n){n=D(n,_e);const e=D(n.firestore,z),t=le(e),s=new mn(e);return Rf(n._query),mf(t,n._query).then(r=>new Ct(e,s,n,r))}function q_(n){n=D(n,_e);const e=D(n.firestore,z),t=le(e),s=new mn(e);return Jb(t,n._query).then(r=>new Ct(e,s,n,r))}function $_(n){n=D(n,_e);const e=D(n.firestore,z),t=le(e),s=new mn(e);return mf(t,n._query,{source:"server"}).then(r=>new Ct(e,s,n,r))}function al(n,e,t){n=D(n,U);const s=D(n.firestore,z),r=$i(n.converter,e,t);return hr(s,[Vi(fn(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,J.none())])}function cl(n,e,t,...s){n=D(n,U);const r=D(n.firestore,z),i=fn(r);let o;return o=typeof(e=L(e))=="string"||e instanceof kt?bc(i,"updateDoc",n._key,e,t,s):vc(i,"updateDoc",n._key,e),hr(r,[o.toMutation(n._key,J.exists(!0))])}function j_(n){return hr(D(n.firestore,z),[new sr(n._key,J.none())])}function K_(n,e){const t=D(n.firestore,z),s=ni(n),r=$i(n.converter,e);return hr(t,[Vi(fn(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,J.exists(!1))]).then(()=>s)}function Ff(n,...e){var t,s,r;n=L(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vo(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Vo(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(n instanceof U)u=D(n.firestore,z),l=ts(n._key.path),c={next:h=>{e[o]&&e[o](xc(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=D(n,_e);u=D(h.firestore,z),l=h._query;const d=new mn(u);c={next:m=>{e[o]&&e[o](new Ct(u,d,h,m))},error:e[o+1],complete:e[o+2]},Rf(n._query)}return function(h,d,m,g){const _=new Li(g),x=new oc(d,_,m);return h.asyncQueue.enqueueAndForget(async()=>sc(await zn(h),x)),()=>{_.Jc(),h.asyncQueue.enqueueAndForget(async()=>rc(await zn(h),x))}}(le(u),l,a,c)}function G_(n,e){return Zb(le(n=D(n,z)),Vo(e)?e:{next:e})}function hr(n,e){return function(t,s){const r=new ie;return t.asyncQueue.enqueueAndForget(async()=>Cb(await gc(t),s,r)),r.promise}(le(n),e)}function xc(n,e,t){const s=t.docs.get(e._key),r=new mn(n);return new ht(n,r,e._key,s,new Ft(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class z_ extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=fn(e)}get(e){const t=bt(e,this._firestore),s=new L_(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return T();const i=r[0];if(i.isFoundDocument())return new Bs(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new Bs(this._firestore,s,t._key,null,t.converter);throw T()})}set(e,t,s){const r=bt(e,this._firestore),i=$i(r.converter,t,s),o=Vi(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=bt(e,this._firestore);let o;return o=typeof(t=L(t))=="string"||t instanceof kt?bc(this._dataReader,"Transaction.update",i._key,t,s,r):vc(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=bt(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=bt(e,this._firestore),s=new mn(this._firestore);return super.get(e).then(r=>new ht(this._firestore,s,t._key,r._document,new Ft(!1,!1),t.converter))}}function H_(n,e){return e_(le(n=D(n,z)),t=>e(new z_(n,t)))}/**
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
 */function W_(){return new ur("deleteField")}function Q_(){return new wc("serverTimestamp")}function Y_(...n){return new v_("arrayUnion",n)}function X_(...n){return new b_("arrayRemove",n)}function J_(n){return new __("increment",n)}(function(n,e=!0){(function(t){es=t})(ci),Kt(new ct("firestore",(t,{options:s})=>{const r=t.getProvider("app").getImmediate(),i=new z(r,new vw(t.getProvider("auth-internal")),new Tw(t.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ye(du,"3.4.5",n),Ye(du,"3.4.5","esm2017")})();const Z_="@firebase/firestore-compat",eI="0.1.14";/**
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
 */function Ec(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function ul(){if(typeof Uint8Array=="undefined")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function ll(){if(!Sw())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Vs{constructor(e){this._delegate=e}static fromBase64String(e){return ll(),new Vs(et.fromBase64String(e))}static fromUint8Array(e){return ul(),new Vs(et.fromUint8Array(e))}toBase64(){return ll(),this._delegate.toBase64()}toUint8Array(){return ul(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function $o(n){return tI(n,["next","error","complete"])}function tI(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
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
 */class nI{enableIndexedDbPersistence(e,t){return c_(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return u_(e._delegate)}clearIndexedDbPersistence(e){return l_(e._delegate)}}class Bf{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof Yt||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&As("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){s_(this._delegate,e,t,s)}enableNetwork(){return d_(this._delegate)}disableNetwork(){return f_(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,gf("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return h_(this._delegate)}onSnapshotsInSync(e){return G_(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Hn(this,wf(this._delegate,e))}catch(t){throw Ee(t,"collection()","Firestore.collection()")}}doc(e){try{return new $e(this,ni(this._delegate,e))}catch(t){throw Ee(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Te(this,r_(this._delegate,e))}catch(t){throw Ee(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return H_(this._delegate,t=>e(new Vf(this,t)))}batch(){return le(this._delegate),new qf(new M_(this._delegate,e=>hr(this._delegate,e)))}loadBundle(e){return p_(this._delegate,e)}namedQuery(e){return m_(this._delegate,e).then(t=>t?new Te(this,t):null)}}class ji extends Tc{constructor(e){super();this.firestore=e}convertBytes(e){return new Vs(new et(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return $e.forKey(t,this.firestore,null)}}function sI(n){mw(n)}class Vf{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ji(e)}get(e){const t=Bt(e);return this._delegate.get(t).then(s=>new qs(this._firestore,new ht(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const r=Bt(e);return s?(Ec("Transaction.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=Bt(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=Bt(e);return this._delegate.delete(t),this}}class qf{constructor(e){this._delegate=e}set(e,t,s){const r=Bt(e);return s?(Ec("WriteBatch.set",s),this._delegate.set(r,t,s)):this._delegate.set(r,t),this}update(e,t,s,...r){const i=Bt(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,s,...r),this}delete(e){const t=Bt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class sn{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new _s(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new $s(this._firestore,s),t!=null?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=sn.INSTANCES;let r=s.get(e);r||(r=new WeakMap,s.set(e,r));let i=r.get(t);return i||(i=new sn(e,new ji(e),t),r.set(t,i)),i}}sn.INSTANCES=new WeakMap;class $e{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ji(e)}static forPath(e,t,s){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new $e(t,new U(t._delegate,s,new b(e)))}static forKey(e,t,s){return new $e(t,new U(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new Hn(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Hn(this.firestore,wf(this._delegate,e))}catch(t){throw Ee(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=L(e),e instanceof U?vf(this._delegate,e):!1}set(e,t){t=Ec("DocumentReference.set",t);try{return t?al(this._delegate,e,t):al(this._delegate,e)}catch(s){throw Ee(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?cl(this._delegate,e):cl(this._delegate,e,t,...s)}catch(r){throw Ee(r,"updateDoc()","DocumentReference.update()")}}delete(){return j_(this._delegate)}onSnapshot(...e){const t=$f(e),s=jf(e,r=>new qs(this.firestore,new ht(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return Ff(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=F_(this._delegate):(e==null?void 0:e.source)==="server"?t=B_(this._delegate):t=U_(this._delegate),t.then(s=>new qs(this.firestore,new ht(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new $e(this.firestore,e?this._delegate.withConverter(sn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ee(n,e,t){return n.message=n.message.replace(e,t),n}function $f(n){for(const e of n)if(typeof e=="object"&&!$o(e))return e;return{}}function jf(n,e){var t,s;let r;return $o(n[0])?r=n[0]:$o(n[1])?r=n[1]:typeof n[0]=="function"?r={next:n[0],error:n[1],complete:n[2]}:r={next:n[1],error:n[2],complete:n[3]},{next:i=>{r.next&&r.next(e(i))},error:(t=r.error)===null||t===void 0?void 0:t.bind(r),complete:(s=r.complete)===null||s===void 0?void 0:s.bind(r)}}class qs{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new $e(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Nf(this._delegate,e._delegate)}}class $s extends qs{data(e){const t=this._delegate.data(e);return gw(t!==void 0),t}}class Te{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ji(e)}where(e,t,s){try{return new Te(this.firestore,yt(this._delegate,S_(e,t,s)))}catch(r){throw Ee(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Te(this.firestore,yt(this._delegate,C_(e,t)))}catch(s){throw Ee(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Te(this.firestore,yt(this._delegate,A_(e)))}catch(t){throw Ee(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Te(this.firestore,yt(this._delegate,D_(e)))}catch(t){throw Ee(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Te(this.firestore,yt(this._delegate,N_(...e)))}catch(t){throw Ee(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Te(this.firestore,yt(this._delegate,R_(...e)))}catch(t){throw Ee(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Te(this.firestore,yt(this._delegate,O_(...e)))}catch(t){throw Ee(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Te(this.firestore,yt(this._delegate,P_(...e)))}catch(t){throw Ee(t,"endAt()","Query.endAt()")}}isEqual(e){return bf(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=q_(this._delegate):(e==null?void 0:e.source)==="server"?t=$_(this._delegate):t=V_(this._delegate),t.then(s=>new jo(this.firestore,new Ct(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=$f(e),s=jf(e,r=>new jo(this.firestore,new Ct(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return Ff(this._delegate,t,s)}withConverter(e){return new Te(this.firestore,e?this._delegate.withConverter(sn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class rI{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new $s(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class jo{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Te(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new $s(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new rI(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new $s(this._firestore,s))})}isEqual(e){return Nf(this._delegate,e._delegate)}}class Hn extends Te{constructor(e,t){super(e,t);this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new $e(this.firestore,e):null}doc(e){try{return e===void 0?new $e(this.firestore,ni(this._delegate)):new $e(this.firestore,ni(this._delegate,e))}catch(t){throw Ee(t,"doc()","CollectionReference.doc()")}}add(e){return K_(this._delegate,e).then(t=>new $e(this.firestore,t))}isEqual(e){return vf(this._delegate,e._delegate)}withConverter(e){return new Hn(this.firestore,e?this._delegate.withConverter(sn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bt(n){return D(n,U)}/**
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
 */class Sc{constructor(...e){this._delegate=new kt(...e)}static documentId(){return new Sc(se.keyField().canonicalString())}isEqual(e){return e=L(e),e instanceof kt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Lt{constructor(e){this._delegate=e}static serverTimestamp(){const e=Q_();return e._methodName="FieldValue.serverTimestamp",new Lt(e)}static delete(){const e=W_();return e._methodName="FieldValue.delete",new Lt(e)}static arrayUnion(...e){const t=Y_(...e);return t._methodName="FieldValue.arrayUnion",new Lt(t)}static arrayRemove(...e){const t=X_(...e);return t._methodName="FieldValue.arrayRemove",new Lt(t)}static increment(e){const t=J_(e);return t._methodName="FieldValue.increment",new Lt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const iI={Firestore:Bf,GeoPoint:Fi,Timestamp:oe,Blob:Vs,Transaction:Vf,WriteBatch:qf,DocumentReference:$e,DocumentSnapshot:qs,Query:Te,QueryDocumentSnapshot:$s,QuerySnapshot:jo,CollectionReference:Hn,FieldPath:Sc,FieldValue:Lt,setLogLevel:sI,CACHE_SIZE_UNLIMITED:a_};function oI(n,e){n.INTERNAL.registerComponent(new ct("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(s,r)},"PUBLIC").setServiceProps(Object.assign({},iI)))}/**
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
 */function aI(n){oI(n,(e,t)=>new Bf(e,t,new nI)),n.registerVersion(Z_,eI)}aI(ui);const cI={apiKey:"AIzaSyCuVNZo9j6IK_azbbaGrHxWCq1SQIUOVKQ",authDomain:"fazweb-fd34e.firebaseapp.com",projectId:"fazweb-fd34e",storageBucket:"fazweb-fd34e.appspot.com",messagingSenderId:"753269671192",appId:"1:753269671192:web:20df071a7705c0e59b8a6d",measurementId:"G-WV78ZQVTRQ"},uI=ui.initializeApp(cI),lI=uI.firestore(),hI=lI.collection("portfolios").orderBy("id"),dI=()=>{const n=Hf([]),e=hI.onSnapshot(t=>{n.value=t.docs.map(s=>Ac({id:s.id},s.data()))});return Wf(e),n};var Tn="/assets/bootstrap.e0f47d52.png",fI="/assets/attendance.7dda4d96.jpg",pI="/assets/catering.f73b0e83.jpg",mI="/assets/ajt.0d4eba2e.jpg",gI="/assets/employee.71900390.jpg",yI="/assets/cabai.3f328955.jpg",wI="/assets/kjm.2fa33584.jpg",vI="/assets/adn.f629b9c2.jpg",bI="/assets/aim.a5f280ce.jpg";const _I={name:"portfolio",data:function(){return{portfolios:dI()}},components:{}},Ki=n=>(Qf("data-v-18abcde4"),n=n(),Yf(),n),II={class:"w-full"},TI=Ki(()=>Y("div",{class:"flex flex-col space-y-2 items-center justify-center text-lg text-center md:text-left md:mt-20"},[Y("label",{class:"text-5xl font-semibold tracking-wider text-center"},"Portfolio"),Y("label",null,"My personal and team projects, always there if you need.")],-1)),xI={key:0,class:"flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300"},EI={class:"md:w-6/12 w-full relative"},SI=["src"],kI=Ki(()=>Y("label",{class:"bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700"},"2022",-1)),CI={class:"md:w-6/12 w-full flex flex-col space-y-10 my-auto md:py-4 py-2 px-4 md:px-4"},AI={class:"flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0"},DI={class:"md:text-4xl text-3xl font-semibold tracking-wider"},NI=["innerHTML"],RI=hl('<div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 overflow-x-auto" data-v-18abcde4><img src="'+xn+'" class="object-contain w-12 snap-center shrink-0" data-v-18abcde4><img src="'+ps+'" class="object-contain w-12 snap-center shrink-0" data-v-18abcde4><img src="'+st+'" class="object-contain w-12 snap-center shrink-0" data-v-18abcde4><img src="'+En+'" class="object-contain w-12 snap-center shrink-0" data-v-18abcde4><img src="'+Or+'" class="object-contain w-12 snap-center shrink-0" data-v-18abcde4></div></div>',1),OI={key:1,class:"flex flex-col md:flex-row-reverse space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300 md:space-x-reverse"},PI={class:"md:w-6/12 w-full relative"},LI=["src"],MI=Ki(()=>Y("label",{class:"bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700"},"2021",-1)),UI={class:"md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2"},FI={class:"flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0"},BI={class:"md:text-4xl text-3xl font-semibold tracking-wider"},VI=["innerHTML"],qI={class:"flex flex-col space-y-4"},$I=Ki(()=>Y("h1",{class:"text-xl md:text-2xl font-semibold"},"Tech Stack",-1)),jI={class:"flex flex-row px-4 space-x-8 snap-x overflow-x-auto"},KI={key:0,src:xn,class:"object-contain w-12 snap-center shrink-0"},GI={key:1,src:ps,class:"object-contain w-12 snap-center shrink-0"},zI={key:2,src:Tn,class:"object-contain w-12 snap-center shrink-0"},HI={key:3,src:st,class:"object-contain w-12 snap-center shrink-0"},WI={key:4,src:En,class:"object-contain w-12 snap-center shrink-0"},QI={key:5,src:dl,class:"object-contain w-12 snap-center shrink-0"},YI={key:6,src:Or,class:"object-contain w-12 snap-center shrink-0"},XI=hl('<div class="flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300" data-v-18abcde4><div class="md:w-6/12 w-full relative" data-v-18abcde4><img class="h-80 object-cover rounded-2xl" src="'+fI+'" data-v-18abcde4><label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700" data-v-18abcde4>2022</label></div><div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2" data-v-18abcde4><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="md:text-4xl text-3xl font-semibold tracking-wider" data-v-18abcde4>24Slides Attendance App</h1><label class="md:text-lg text-base" data-v-18abcde4>Work as a front end to help develop applications based on laravel, Tailwind, Livewire framework. This application is used to recap employee attendance</label></div><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" data-v-18abcde4><img src="'+xn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+ps+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+st+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+En+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+Or+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+dl+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4></div></div></div></div><div class="flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300 flex-row-reverse space-x-reverse" data-v-18abcde4><div class="md:w-6/12 w-full relative" data-v-18abcde4><img class="h-80 object-cover rounded-2xl" src="'+pI+'" data-v-18abcde4><label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700" data-v-18abcde4>2021</label></div><div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2" data-v-18abcde4><div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0" data-v-18abcde4><h1 class="md:text-4xl text-3xl font-semibold tracking-wider" data-v-18abcde4>24Slides Catering App</h1><label class="md:text-lg text-base" data-v-18abcde4>Work as a front end to help develop applications based on laravel, Tailwind, Livewire. This application is used to order food by employees and is accepted by the caterer</label></div><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" data-v-18abcde4><img src="'+xn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+ps+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+st+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+En+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+Or+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4></div></div></div></div><div class="flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300" data-v-18abcde4><div class="md:w-6/12 w-full relative" data-v-18abcde4><img class="h-80 object-cover w-full rounded-2xl" src="'+mI+'" data-v-18abcde4><label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700" data-v-18abcde4>2020</label></div><div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2" data-v-18abcde4><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="md:text-4xl text-3xl font-semibold tracking-wider" data-v-18abcde4>CV Anugerah Jaya Tekindo</h1><label class="md:text-lg text-base" data-v-18abcde4>Work as full stack web developer for making 3 website including coffee shop cashier, printing cashier, and company profile</label></div><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" data-v-18abcde4><img src="'+dr+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+fr+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+Tn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+st+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4></div></div></div></div><div class="flex space-x-10 flex-col md:flex-row hover:shadow-md rounded-2xl duration-300 flex-row-reverse space-x-reverse" data-v-18abcde4><div class="md:w-6/12 w-full relative" data-v-18abcde4><img class="h-full object-cover rounded-2xl" src="'+gI+'" data-v-18abcde4><label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700" data-v-18abcde4>2019</label></div><div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2" data-v-18abcde4><div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0" data-v-18abcde4><h1 class="md:text-4xl text-3xl font-semibold tracking-wider" data-v-18abcde4>24Slides Employee App</h1><label class="md:text-lg text-base" data-v-18abcde4>Work as a front end to help develop applications based on laravel &amp; Bootstrap framework. This application is to calculate employee salaries based on attendance and other components</label></div><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" data-v-18abcde4><img src="'+xn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+Tn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+st+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+En+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+Xf+'" class="object-contain w-24" data-v-18abcde4></div></div></div></div><div class="flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300 flex-row space-x" data-v-18abcde4><div class="md:w-6/12 w-full relative" data-v-18abcde4><img class="h-full w-full object-cover rounded-2xl" src="'+yI+'" data-v-18abcde4><label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700" data-v-18abcde4>2019</label></div><div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2" data-v-18abcde4><div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0" data-v-18abcde4><h1 class="md:text-4xl text-3xl font-semibold tracking-wider" data-v-18abcde4>Chilies Decision Support System for BPTP</h1><label class="md:text-lg text-base" data-v-18abcde4>Making thesis website as full stack web developer for making decission support system with Case Based Reasoning metode for BPTP JATIM, See here for detail <code data-v-18abcde4><a href="http://eprints.itn.ac.id/3818/" data-v-18abcde4>e-Journal</a></code></label></div><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" data-v-18abcde4><img src="'+dr+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+fr+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+Tn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+st+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4></div></div></div></div><div class="flex space-x-10 flex-col md:flex-row hover:shadow-md rounded-2xl duration-300 flex-row-reverse space-x-reverse" data-v-18abcde4><div class="md:w-6/12 w-full relative" data-v-18abcde4><img class="h-full object-cover rounded-2xl w-full" src="'+wI+'" data-v-18abcde4><label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700" data-v-18abcde4>2018</label></div><div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2" data-v-18abcde4><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="md:text-4xl text-3xl font-semibold tracking-wider" data-v-18abcde4>Decision Support System for KJM Trenggale</h1><label class="md:text-lg text-base" data-v-18abcde4>Making thesis website as full stack web developer for making decission support system with Analytical Hierarchy Process metode, See here for detail <code data-v-18abcde4><a href="http://eprints.itn.ac.id/3818/" data-v-18abcde4>e-Journal</a></code></label></div><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" data-v-18abcde4><img src="'+dr+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+fr+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+Tn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+st+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4></div></div></div></div><div class="flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300 flex-row space-x" data-v-18abcde4><div class="md:w-6/12 w-full relative" data-v-18abcde4><img class="h-80 object-cover rounded-2xl w-full" src="'+vI+'" data-v-18abcde4><label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700" data-v-18abcde4>2022</label></div><div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2" data-v-18abcde4><div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0" data-v-18abcde4><h1 class="md:text-4xl text-3xl font-semibold tracking-wider" data-v-18abcde4>ADN Homepage</h1><label class="md:text-lg text-base" data-v-18abcde4>ADN dev. Homepage, See here for detail <a href="https://fajarfaz.github.io/adn-front/" data-v-18abcde4><code data-v-18abcde4>github.io</code></a></label></div><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" data-v-18abcde4><img src="'+xn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+ps+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+En+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4></div></div></div></div><div class="flex space-x-10 flex-col md:flex-row hover:shadow-md rounded-2xl duration-300 flex-row-reverse space-x-reverse" data-v-18abcde4><div class="md:w-6/12 w-full relative" data-v-18abcde4><img class="h-80 object-cover rounded-2xl w-full" src="'+bI+'" data-v-18abcde4><label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700" data-v-18abcde4>2015</label></div><div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2" data-v-18abcde4><div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0" data-v-18abcde4><h1 class="md:text-4xl text-3xl font-semibold tracking-wider" data-v-18abcde4>Agro Indonesia Machinery</h1><label class="md:text-lg text-base" data-v-18abcde4>Web for product promotion, sales information and company profile, See here <a href="pusatmesinmalang.com" data-v-18abcde4><code data-v-18abcde4>pusatmesinmalang.com</code></a></label></div><div class="flex flex-col space-y-4" data-v-18abcde4><h1 class="text-xl md:text-2xl font-semibold" data-v-18abcde4>Tech Stack</h1><div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" data-v-18abcde4><img src="'+dr+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+fr+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+Tn+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4><img src="'+st+'" class="object-contain w-12 nap-center shrink-0" data-v-18abcde4></div></div></div></div>',8);function JI(n,e,t,s,r,i){return De(),Ne("main",II,[TI,(De(!0),Ne(Dc,null,Nc(n.portfolios,o=>(De(),Ne("div",{class:"grid gap-20 md:gap-28 my-20",key:o.id,"track-by":"portfolio.id"},[o.id%2!=0?(De(),Ne("div",xI,[Y("div",EI,[Y("img",{class:"h-full object-fill w-full rounded-2xl",src:"../src/assets/images/"+o.image},null,8,SI),kI]),Y("div",CI,[Y("div",AI,[Y("h1",DI,Rc(o.title),1),Y("label",{class:"md:text-lg text-base",innerHTML:o.desc},null,8,NI)]),RI])])):(De(),Ne("div",OI,[Y("div",PI,[Y("img",{class:"h-full w-full object-cover rounded-2xl",src:"../src/assets/images/"+o.image},null,8,LI),MI]),Y("div",UI,[Y("div",FI,[Y("h1",BI,Rc(o.title),1),Y("label",{class:"md:text-lg text-base",innerHTML:o.desc},null,8,VI)]),Y("div",qI,[$I,Y("div",jI,[(De(!0),Ne(Dc,null,Nc(o.tech,a=>(De(),Ne("div",null,[a=="laravel"?(De(),Ne("img",KI)):a=="tailwind"?(De(),Ne("img",GI)):a=="bootstrap"?(De(),Ne("img",zI)):a=="mysql"?(De(),Ne("img",HI)):a=="alpine"?(De(),Ne("img",WI)):a=="gcp"?(De(),Ne("img",QI)):(De(),Ne("img",YI))]))),256))])])])]))]))),128)),XI])}var s0=Jf(_I,[["render",JI],["__scopeId","data-v-18abcde4"]]);export{s0 as default};
