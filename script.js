const DOTNET_NAMESPACE_DATA = {
  "System": {
    classes: ["Object", "String", "Console", "DateTime", "Math", "Random", "Exception"],
    enums: ["DayOfWeek", "ConsoleColor"],
    structs: ["DateTime", "TimeSpan", "Guid"],
    interfaces: ["IComparable", "IDisposable", "IEnumerable"],
    attributes: ["ObsoleteAttribute", "SerializableAttribute", "FlagsAttribute", "STAThreadAttribute", "STAThread", "MTAThreadAttribute", "ConditionalAttribute", "AttributeUsageAttribute"],
  },
  "System.Collections.Generic": {
    classes: ["List", "Dictionary", "HashSet", "Queue", "Stack"],
    interfaces: ["IEnumerable", "ICollection", "IList", "IDictionary"],
    attributes: [],
  },
  "System.IO": {
    classes: ["File", "Directory", "Stream", "StreamReader", "StreamWriter", "Path"],
    enums: ["FileMode", "FileAccess", "FileShare"],
    interfaces: ["IStream"],
    attributes: [],
  },
  "System.Linq": {
    classes: ["Enumerable", "Queryable"],
    interfaces: ["IGrouping", "ILookup"],
    attributes: [],
  },
  "System.Threading.Tasks": {
    classes: ["Task", "TaskFactory", "Parallel"],
    structs: ["ValueTask"],
    interfaces: ["IAsyncEnumerable", "IAsyncEnumerator"],
    attributes: [],
  },
  "Microsoft.Extensions.DependencyInjection": {
    classes: ["ServiceCollection", "ActivatorUtilities"],
    interfaces: ["IServiceCollection", "IServiceProvider", "IServiceScope"],
    attributes: [],
  },
  "System.Windows.Forms": {
    classes: ["Application", "Form", "Control", "Button", "TextBox", "Label", "Panel", "DataGridView", "OpenFileDialog", "SaveFileDialog", "MessageBox"],
    enums: ["DialogResult", "FormWindowState", "FormBorderStyle", "Keys", "AnchorStyles", "DockStyle"],
    structs: ["Padding"],
    interfaces: ["IButtonControl", "IContainerControl", "IWin32Window"],
    attributes: ["STAThreadAttribute", "STAThread", "MTAThreadAttribute", "DesignerCategoryAttribute", "DefaultEventAttribute", "DefaultPropertyAttribute"],
  },
  "System.Drawing": {
    classes: ["Bitmap", "Brush", "Font", "Graphics", "Icon", "Image", "Pen", "SolidBrush"],
    enums: ["GraphicsUnit", "FontStyle", "ContentAlignment"],
    structs: ["Color", "Point", "PointF", "Rectangle", "RectangleF", "Size", "SizeF"],
    interfaces: ["ICloneable"],
    attributes: [],
  },
  "System.Drawing.Drawing2D": {
    classes: ["GraphicsPath", "LinearGradientBrush", "Matrix", "PathGradientBrush"],
    enums: ["CompositingMode", "CompositingQuality", "InterpolationMode", "SmoothingMode"],
    structs: ["Blend", "ColorBlend"],
    attributes: [],
  },
  "System.Diagnostics": {
    classes: ["Debug", "DiagnosticListener", "EventLog", "Process", "ProcessStartInfo", "StackTrace", "Stopwatch", "Trace", "TraceSource"],
    enums: ["ProcessWindowStyle", "TraceLevel", "TraceOptions"],
    structs: ["ActivityTraceId", "ActivitySpanId"],
    interfaces: ["IObserver", "IProgress"],
    attributes: [],
  },
  "System.Diagnostics.CodeAnalysis": {
    classes: ["DoesNotReturnAttribute", "MaybeNullAttribute", "NotNullAttribute", "SuppressMessageAttribute"],
    enums: ["DynamicallyAccessedMemberTypes"],
    attributes: ["DoesNotReturnAttribute", "MaybeNullAttribute", "NotNullAttribute", "NotNullWhenAttribute", "MemberNotNullAttribute", "RequiresUnreferencedCodeAttribute", "SuppressMessageAttribute"],
  },
  "System.Diagnostics.Tracing": {
    classes: ["EventSource", "EventListener", "EventCounter", "EventWrittenEventArgs"],
    enums: ["EventLevel", "EventKeywords", "EventOpcode", "EventTask"],
    interfaces: ["IEventSource"],
    attributes: ["EventSourceAttribute", "EventAttribute", "NonEventAttribute", "EventIgnoreAttribute"],
  },
  "System.ComponentModel": {
    classes: ["Component", "Container", "PropertyDescriptor", "TypeDescriptor", "BackgroundWorker", "CancelEventArgs"],
    enums: ["ListChangedType", "BrowsableAttribute", "RefreshProperties"],
    interfaces: ["IComponent", "IContainer", "INotifyPropertyChanged", "ISite", "ICustomTypeDescriptor"],
    attributes: ["BrowsableAttribute", "EditorBrowsableAttribute", "DesignerCategoryAttribute", "DisplayNameAttribute", "DescriptionAttribute", "DefaultValueAttribute", "ReadOnlyAttribute"],
  },
  "System.ComponentModel.DataAnnotations": {
    classes: ["ValidationAttribute", "RequiredAttribute", "RangeAttribute", "StringLengthAttribute", "RegularExpressionAttribute"],
    enums: ["DataType", "ValidationResult"],
    interfaces: ["IValidatableObject"],
    attributes: ["RequiredAttribute", "RangeAttribute", "StringLengthAttribute", "MaxLengthAttribute", "MinLengthAttribute", "RegularExpressionAttribute", "CompareAttribute", "DisplayAttribute", "KeyAttribute"],
  },
  "System.ComponentModel.Design": {
    classes: ["DesignerOptionService", "DesignerTransaction", "ServiceContainer", "TypeDescriptionProvider"],
    interfaces: ["IComponentChangeService", "IDesigner", "IDesignerHost", "ISelectionService", "IServiceContainer"],
    attributes: ["DesignerAttribute", "DesignerSerializerAttribute", "ProvidePropertyAttribute", "RootDesignerAttribute", "ToolboxItemAttribute"],
  },
  "System.Runtime": {
    classes: ["GCLatencyMode", "GCSettings", "MemoryFailPoint", "RuntimeFeature"],
    enums: ["GCLargeObjectHeapCompactionMode", "AssemblyLoadContext"],
    interfaces: ["IAsyncResult"],
    attributes: [],
  },
  "System.Runtime.CompilerServices": {
    classes: ["CallerMemberNameAttribute", "CallerFilePathAttribute", "CallerLineNumberAttribute", "RequiredMemberAttribute", "RuntimeHelpers"],
    structs: ["ValueTaskAwaiter", "ConfiguredTaskAwaitable"],
    interfaces: ["INotifyCompletion", "ICriticalNotifyCompletion"],
    attributes: ["CallerMemberNameAttribute", "CallerFilePathAttribute", "CallerLineNumberAttribute", "CallerArgumentExpressionAttribute", "CompilerGeneratedAttribute", "IteratorStateMachineAttribute", "AsyncStateMachineAttribute", "ModuleInitializerAttribute", "InternalsVisibleToAttribute"],
  },
  "System.Runtime.InteropServices": {
    classes: ["Marshal", "SafeHandle", "DllImportAttribute", "LibraryImportAttribute", "ComImportAttribute"],
    enums: ["CallingConvention", "CharSet", "UnmanagedType", "LayoutKind"],
    structs: ["GCHandle", "nint", "nuint"],
    interfaces: ["IUnknown", "ICustomMarshaler"],
    attributes: ["DllImportAttribute", "LibraryImportAttribute", "MarshalAsAttribute", "StructLayoutAttribute", "FieldOffsetAttribute", "ComImportAttribute", "GuidAttribute", "InterfaceTypeAttribute", "PreserveSigAttribute"],
  },
  "System.Runtime.Versioning": {
    classes: ["TargetFrameworkAttribute", "SupportedOSPlatformAttribute", "UnsupportedOSPlatformAttribute", "RequiresPreviewFeaturesAttribute"],
    interfaces: [],
    attributes: ["TargetFrameworkAttribute", "SupportedOSPlatformAttribute", "UnsupportedOSPlatformAttribute", "ObsoletedOSPlatformAttribute", "RequiresPreviewFeaturesAttribute", "BrowserCompatibleAttribute"],
  },
  "System.Runtime.Serialization": {
    classes: ["DataContractAttribute", "DataMemberAttribute", "JsonObjectAttribute", "SerializationException"],
    enums: ["EmitTypeInformation", "StreamingContextStates"],
    interfaces: ["ISerializable", "IExtensibleDataObject"],
    attributes: ["DataContractAttribute", "DataMemberAttribute", "EnumMemberAttribute", "IgnoreDataMemberAttribute", "OnDeserializingAttribute", "OnDeserializedAttribute", "OnSerializingAttribute", "OnSerializedAttribute"],
  },
  "System.Net": {
    classes: ["WebClient", "WebRequest", "WebResponse", "Cookie", "Dns", "IPAddress", "IPEndPoint", "NetworkCredential"],
    enums: ["HttpStatusCode", "SecurityProtocolType"],
    structs: ["IPNetwork"],
    interfaces: ["ICredentials", "IWebProxy"],
    attributes: [],
  },
  "System.Net.Http": {
    classes: ["HttpClient", "HttpClientHandler", "HttpContent", "HttpRequestMessage", "HttpResponseMessage", "MultipartFormDataContent", "StringContent"],
    enums: ["HttpCompletionOption", "HttpMethod"],
    interfaces: ["IHttpClientFactory"],
    attributes: [],
  },
  "System.Net.Http.Headers": {
    classes: ["AuthenticationHeaderValue", "MediaTypeHeaderValue", "HttpHeaders", "HttpRequestHeaders", "HttpResponseHeaders"],
    enums: ["CacheControlHeaderValue"],
    attributes: [],
  },
  "System.Net.Sockets": {
    classes: ["Socket", "TcpClient", "TcpListener", "UdpClient", "NetworkStream"],
    enums: ["AddressFamily", "SocketType", "ProtocolType", "SocketError"],
    interfaces: ["IPacketInformation"],
    attributes: [],
  },
  "System.Text": {
    classes: ["StringBuilder", "Encoding"],
    structs: ["Rune"],
    interfaces: ["ICustomFormatter"],
    attributes: [],
  },
  "System.Text.Json": {
    classes: ["JsonSerializer", "JsonDocument", "JsonElement", "JsonNode", "Utf8JsonReader", "Utf8JsonWriter"],
    enums: ["JsonValueKind", "JsonCommentHandling", "JsonIgnoreCondition"],
    interfaces: ["IJsonTypeInfoResolver"],
    attributes: ["JsonPropertyNameAttribute", "JsonIgnoreAttribute", "JsonConverterAttribute", "JsonExtensionDataAttribute", "JsonConstructorAttribute", "JsonIncludeAttribute", "JsonDerivedTypeAttribute", "JsonPolymorphicAttribute"],
  },
  "System.Text.RegularExpressions": {
    classes: ["Regex", "Match", "Group", "Capture", "RegexOptions"],
    enums: ["RegexOptions", "RegexMatchTimeoutException"],
    attributes: [],
  },
  "System.Collections": {
    classes: ["ArrayList", "Hashtable", "Queue", "Stack", "BitArray"],
    interfaces: ["IEnumerable", "ICollection", "IList", "IDictionary"],
    attributes: [],
  },
  "System.Collections.Concurrent": {
    classes: ["ConcurrentDictionary", "ConcurrentQueue", "ConcurrentBag", "BlockingCollection", "ConcurrentStack"],
    interfaces: ["IProducerConsumerCollection"],
    attributes: [],
  },
  "System.Collections.ObjectModel": {
    classes: ["ObservableCollection", "ReadOnlyCollection", "Collection", "ReadOnlyDictionary"],
    interfaces: ["INotifyCollectionChanged", "IReadOnlyList", "IReadOnlyDictionary"],
    attributes: [],
  },
  "System.Threading": {
    classes: ["Thread", "ThreadPool", "CancellationTokenSource", "Mutex", "Semaphore", "ReaderWriterLockSlim"],
    enums: ["ApartmentState", "ThreadPriority", "ThreadState"],
    structs: ["CancellationToken", "SpinWait"],
    interfaces: ["IThreadPoolWorkItem"],
    attributes: [],
  },
  "System.Threading.Channels": {
    classes: ["Channel", "ChannelReader", "ChannelWriter"],
    interfaces: ["IChannelReader", "IChannelWriter"],
    attributes: [],
  },
  "System.Globalization": {
    classes: ["CultureInfo", "RegionInfo", "StringInfo", "TextInfo", "CompareInfo"],
    enums: ["CultureTypes", "DateTimeStyles", "NumberStyles"],
    structs: ["DateTimeFormatInfo", "NumberFormatInfo"],
    attributes: [],
  },
  "System.Numerics": {
    classes: ["BigInteger", "Complex", "Quaternion", "Vector2", "Vector3", "Vector4", "Matrix4x4"],
    interfaces: ["INumber", "IFloatingPoint", "IBinaryInteger"],
    attributes: [],
  },
  "System.Security": {
    classes: ["SecureString", "SecurityElement", "SecurityException"],
    interfaces: ["IPermission"],
    attributes: [],
  },
  "System.Security.Cryptography": {
    classes: ["Aes", "RSA", "SHA256", "SHA512", "RandomNumberGenerator", "X509Certificate2"],
    enums: ["CipherMode", "PaddingMode", "HashAlgorithmName"],
    interfaces: ["ICryptoTransform"],
    attributes: ["CryptographicUsageAttribute", "SuppressUnmanagedCodeSecurityAttribute", "DefaultDllImportSearchPathsAttribute"],
  },
  "System.Xml": {
    classes: ["XmlDocument", "XmlReader", "XmlWriter", "XmlNode", "XmlElement", "XmlAttribute"],
    enums: ["XmlNodeType", "Formatting", "ValidationType"],
    interfaces: ["IXmlLineInfo", "IXmlSerializable"],
    attributes: [],
  },
  "System.Xml.Linq": {
    classes: ["XDocument", "XElement", "XAttribute", "XNode", "XNamespace", "Extensions"],
    interfaces: ["IEnumerable"],
    attributes: [],
  },
  "System.Data": {
    classes: ["DataTable", "DataSet", "DataRow", "DataColumn", "DataView", "DataReader"],
    enums: ["ConnectionState", "CommandType", "DataRowState"],
    interfaces: ["IDbConnection", "IDbCommand", "IDataReader", "IDataRecord"],
    attributes: [],
  },
  "System.Reflection": {
    classes: ["Assembly", "TypeInfo", "MethodInfo", "PropertyInfo", "FieldInfo", "Activator", "CustomAttributeData"],
    enums: ["BindingFlags", "MemberTypes", "TypeAttributes"],
    interfaces: ["ICustomAttributeProvider"],
    attributes: ["AssemblyVersionAttribute", "AssemblyFileVersionAttribute", "AssemblyInformationalVersionAttribute", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyProductAttribute", "AssemblyMetadataAttribute", "ObfuscationAttribute"],
  },
  "System.Reflection.Emit": {
    classes: ["AssemblyBuilder", "ModuleBuilder", "TypeBuilder", "MethodBuilder", "ILGenerator"],
    enums: ["OpCodeType", "OperandType", "FlowControl"],
    attributes: [],
  },
  "System.Web": {
    classes: ["HttpUtility", "HttpException"],
    interfaces: [],
    attributes: ["WebMethodAttribute", "ScriptMethodAttribute", "HttpHandlerAttribute", "ValidationPropertyAttribute", "ParseChildrenAttribute"],
  },
  "System.Web.Http": {
    classes: ["ApiController", "HttpRequestMessage", "HttpResponseMessage", "RouteAttribute"],
    interfaces: ["IHttpActionResult"],
    attributes: [],
  }
};

const KIND_ICONS = { class: "C", enum: "E", struct: "S", interface: "I", module: "M", namespace: "N", attribute: "A" };

const INTELLISENSE_STYLE = `
.intellisense-editor { position: relative; overflow: hidden; }
.intellisense-input { position: relative; z-index: 1; display: block; box-sizing: border-box; width: 100%; min-height: 300px; resize: vertical; padding: 16px; border: 1px solid #39434d; outline: 0; background: #12171d; color: transparent; caret-color: #f2b84b; font: 15px/1.7 monospace; tab-size: 4; white-space: pre-wrap; overflow-wrap: break-word; }
.diagnostic-layer { position: absolute; z-index: 2; inset: 1px; box-sizing: border-box; overflow: hidden; padding: 16px; color: #d9e1e8; white-space: pre-wrap; overflow-wrap: break-word; pointer-events: none; font: 15px/1.7 monospace; tab-size: 4; }
.vb-keyword { color: #73b8e9; font-weight: 400; } .vb-string { color: #d693e7; } .vb-comment { color: #87909b; }
.vb-class, .vb-struct, .vb-attribute { color: #55d187; } .vb-enum, .vb-interface { color: #f2b84b; }
.intellisense-menu, .intellisense-diagnostic { position: absolute; z-index: 6; border: 1px solid #3b4651; background: #1b222a; box-shadow: 0 14px 28px #0009; }
.intellisense-menu { min-width: 280px; }
.intellisense-item { display: grid; grid-template-columns: 24px 1fr auto; align-items: center; gap: 8px; width: 100%; padding: 8px 10px; border: 0; background: transparent; color: #e9edf2; text-align: left; font: 13px monospace; cursor: pointer; }
.intellisense-item.is-active, .intellisense-item:hover { background: #29333d; }
.intellisense-item.attribute-item > span:nth-child(2) { color: #55d187; }
.intellisense-item small { color: #87909b; font-size: 10px; }
.intellisense-icon { display: grid; width: 18px; height: 18px; place-items: center; border-radius: 3px; color: #101419; font-size: 11px; font-weight: 700; }
.icon-class { background: #68c28b; } .icon-enum { background: #d693e7; } .icon-struct { background: #e7b561; } .icon-interface { background: #73b8e9; } .icon-attribute { background: #55d187; }
.diagnostic-marker { pointer-events: auto; cursor: help; text-decoration: underline wavy; text-underline-offset: 3px; }
.diagnostic-marker.warning { text-decoration-color: #f2b84b; } .diagnostic-marker.error { text-decoration-color: #f06469; }
.intellisense-diagnostic { max-width: 360px; padding: 9px 12px; color: #f4c5c5; font: 12px/1.4 monospace; }
.intellisense-diagnostic-message { margin-bottom: 8px; }
.intellisense-fix { padding: 5px 8px; border: 1px solid #55d187; background: #173b29; color: #8ef0ae; font: 11px monospace; cursor: pointer; }
`;

const VB_KEYWORDS = new Set("AddHandler AddressOf And AndAlso As ByRef ByVal Case Catch Class Const Continue CType Declare Default Delegate Dim DirectCast Do Each Else ElseIf End Enum Erase Error Event Exit False Finally For Friend Function Get GetType Global GoSub GoTo Handles If Implements Imports In Inherits Interface Is IsNot Let Lib Like Line Lock Loop Me Mod Module MustInherit MustOverride MyBase MyClass Namespace Narrowing New Next Not Nothing NotInheritable NotOverridable Object Of On Operator Option Or OrElse Overrides ParamArray Partial Private Property Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume Return Select Set Shadows Shared Single Skip Static Step Stop Structure Sub SyncLock Then Throw To True Try TypeOf Using When While Widening With WithEvents WriteOnly Xor".toLowerCase().split(" "));
const AUTO_CLOSE_DELIMITERS = { "(": ")", "[": "]", "{": "}" };

function createIntellisense(textarea, options = {}) {
  if (!(textarea instanceof HTMLTextAreaElement)) {
    throw new TypeError("createIntellisense expects a textarea element");
  }

  const namespaceData = { ...DOTNET_NAMESPACE_DATA, ...(options.namespaceData || {}) };
  const symbolKinds = new Map();
  Object.values(namespaceData).forEach((groups) => Object.entries(groups).forEach(([kind, names]) => {
    names.forEach((name) => {
      const symbolKind = kind === "classes" ? "class" : kind.slice(0, -1);
      symbolKinds.set(name.toLowerCase(), symbolKind);
      if (symbolKind === "attribute" && name.endsWith("Attribute")) symbolKinds.set(name.slice(0, -9).toLowerCase(), symbolKind);
    });
  }));
  if (!document.querySelector("style[data-intellisense]")) {
    const style = document.createElement("style");
    style.dataset.intellisense = "true";
    style.textContent = INTELLISENSE_STYLE;
    document.head.appendChild(style);
  }
  const root = document.createElement("div");
  root.className = "intellisense-editor";
  textarea.parentNode.insertBefore(root, textarea);
  root.appendChild(textarea);
  textarea.classList.add("intellisense-input");

  const menu = document.createElement("div");
  menu.className = "intellisense-menu";
  menu.hidden = true;
  root.appendChild(menu);

  const diagnosticLayer = document.createElement("div");
  diagnosticLayer.className = "diagnostic-layer";
  diagnosticLayer.setAttribute("aria-hidden", "true");
  root.appendChild(diagnosticLayer);

  const diagnosticBox = document.createElement("div");
  diagnosticBox.className = "intellisense-diagnostic";
  diagnosticBox.hidden = true;
  root.appendChild(diagnosticBox);

  let activeItems = [];
  let activeIndex = 0;
  let diagnostics = [];
  let hideTimer;

  function position(element, point) {
    element.style.left = `${Math.max(0, point.left)}px`;
    element.style.top = `${point.top}px`;
  }

  function caretPoint() {
    const mirror = document.createElement("div");
    const style = getComputedStyle(textarea);
    ["font", "fontSize", "fontFamily", "fontWeight", "lineHeight", "letterSpacing", "padding", "border", "whiteSpace", "wordWrap"].forEach((key) => {
      mirror.style[key] = style[key];
    });
    mirror.style.position = "absolute";
    mirror.style.visibility = "hidden";
    mirror.style.width = `${textarea.clientWidth}px`;
    mirror.style.whiteSpace = "pre-wrap";
    mirror.textContent = textarea.value.slice(0, textarea.selectionStart);
    const marker = document.createElement("span");
    marker.textContent = "\u200b";
    mirror.appendChild(marker);
    root.appendChild(mirror);
    const point = { left: marker.offsetLeft - textarea.scrollLeft, top: marker.offsetTop - textarea.scrollTop + parseFloat(style.lineHeight || "20") };
    mirror.remove();
    return point;
  }

  function currentToken() {
    return textarea.value.slice(0, textarea.selectionStart).match(/[A-Za-z_][\w.]*$/)?.[0] || "";
  }

  function isAttributeContext() {
    const beforeCaret = textarea.value.slice(0, textarea.selectionStart);
    return beforeCaret.lastIndexOf("<") > beforeCaret.lastIndexOf(">");
  }

  function isImportStatement() {
    const lineStart = textarea.value.lastIndexOf("\n", textarea.selectionStart - 1) + 1;
    return /^\s*Imports\b/i.test(textarea.value.slice(lineStart, textarea.selectionStart));
  }

  function importedNamespaces() {
    return [...textarea.value.matchAll(/^\s*Imports\s+([\w.]+)\s*$/gim)].map((match) => match[1]);
  }

  function isImportedNamespace(name) {
    return importedNamespaces().includes(name);
  }

  function allSuggestions(token) {
    const imports = importedNamespaces();
    const suggestions = [];
    const attributeSuggestions = [];
    Object.entries(namespaceData).forEach(([namespace, groups]) => {
      if (!imports.includes(namespace)) return;
      Object.entries(groups).forEach(([kind, names]) => names.forEach((name) => {
        if (kind === "attributes") {
          const shortName = name.endsWith("Attribute") ? name.slice(0, -9) : name;
          attributeSuggestions.push({ name: shortName, insertText: shortName, kind: "attribute", detail: `${name} · ${namespace}` });
        } else {
          suggestions.push({ name, kind: kind.slice(0, -1), detail: `${name} · ${namespace}` });
        }
      }));
    });
    if (isAttributeContext()) {
      const prefix = token.toLowerCase();
      const seen = new Set();
      return attributeSuggestions.filter((item) => {
        const key = item.name.toLowerCase();
        if (seen.has(key) || !key.startsWith(prefix)) return false;
        seen.add(key);
        return true;
      }).sort((a, b) => a.name.localeCompare(b.name));
    }
    const parts = token.split(".");
    if (parts.length > 1) {
      const namespace = parts.slice(0, -1).join(".");
      const prefix = parts.at(-1).toLowerCase();
      return (namespaceData[namespace] ? Object.entries(namespaceData[namespace]).flatMap(([kind, names]) => names.map((name) => ({ name, kind: kind.slice(0, -1), detail: `${name} · ${namespace}` }))) : []).filter((item) => item.name.toLowerCase().startsWith(prefix));
    }
    const prefix = token.toLowerCase();
    return suggestions.filter((item) => item.name.toLowerCase().startsWith(prefix)).sort((a, b) => a.name.localeCompare(b.name));
  }

  function renderMenu(items) {
    menu.replaceChildren();
    items.forEach((item, index) => {
      const row = document.createElement("div");
      row.setAttribute("role", "option");
      row.className = `intellisense-item${item.kind === "attribute" ? " attribute-item" : ""}${index === activeIndex ? " is-active" : ""}`;
      row.innerHTML = `<span class="intellisense-icon icon-${item.kind}">${KIND_ICONS[item.kind] || "•"}</span><span>${item.name}</span><small>${item.detail}</small>`;
      row.addEventListener("mousedown", (event) => { event.preventDefault(); accept(index); });
      menu.appendChild(row);
    });
  }

  function showSuggestions() {
    const token = currentToken();
    if (isImportStatement() || ((!token && !isAttributeContext()) || !importedNamespaces().length)) { menu.hidden = true; return; }
    activeItems = allSuggestions(token);
    if (!activeItems.length) { menu.hidden = true; return; }
    activeIndex = 0;
    renderMenu(activeItems);
    position(menu, caretPoint());
    menu.hidden = false;
  }

  function accept(index = activeIndex) {
    const item = activeItems[index];
    if (!item) return;
    const token = currentToken();
    const start = textarea.selectionStart - token.length;
    textarea.setRangeText(item.insertText || item.name, start, textarea.selectionEnd, "end");
    menu.hidden = true;
    checkGrammar();
    textarea.focus();
  }

  function checkGrammar() {
    diagnostics = [];
    const lines = textarea.value.split("\n");
    const source = textarea.value;
    const addDiagnostic = (diagnostic) => diagnostics.push(diagnostic);
    const delimiterStack = [];
    const matchingDelimiters = { "(": ")", "[": "]", "{": "}" };
    const closingDelimiters = new Set(Object.values(matchingDelimiters));
    for (let index = 0; index < source.length; index += 1) {
      const character = source[index];
      if (matchingDelimiters[character]) delimiterStack.push({ character, index });
      else if (closingDelimiters.has(character)) {
        const opening = delimiterStack.at(-1);
        if (!opening || matchingDelimiters[opening.character] !== character) {
          addDiagnostic({ start: index, end: index + 1, severity: "error", message: `Unexpected '${character}'.`, fix: { start: index, end: index + 1, text: "" } });
        } else delimiterStack.pop();
      }
    }
    delimiterStack.reverse().forEach(({ character, index }) => {
      const closing = matchingDelimiters[character];
      addDiagnostic({ start: index, end: index + 1, severity: "error", message: `Missing '${closing}' for '${character}'.`, fix: { start: source.length, end: source.length, text: `\n${closing}` } });
    });
    const imported = new Map();
    let offset = 0;
    lines.forEach((line, lineIndex) => {
      const importMatch = line.match(/^\s*Imports\s+([\w.]+)\s*$/i);
      if (importMatch && !namespaceData[importMatch[1]]) {
        const start = offset + line.indexOf(importMatch[1]);
        addDiagnostic({ start, end: start + importMatch[1].length, severity: "warning", message: `Namespace '${importMatch[1]}' was not found in the loaded .NET namespace data.` });
      }
      if (importMatch) {
        const namespace = importMatch[1];
        if (imported.has(namespace)) {
          addDiagnostic({ start: offset, end: offset + line.length, severity: "warning", message: `Namespace '${namespace}' is imported more than once.`, fix: { start: offset, end: offset + line.length + (lines[lineIndex + 1] ? 1 : 0), text: "" } });
        }
        imported.set(namespace, offset);
      } else if (/^\s*Imports\s*$/i.test(line)) {
        addDiagnostic({ start: offset, end: offset + line.length, severity: "error", message: "Imports must be followed by a namespace." });
      }
      const ctypeStart = line.search(/\bCType\s*\(/i);
      const validCType = /\bCType\s*\(\s*[^,]+,\s*[^)]+\)/i.test(line);
      if (ctypeStart >= 0 && !validCType) {
        const start = offset + ctypeStart;
        addDiagnostic({
          start,
          end: offset + line.length,
          severity: "error",
          message: "Invalid CType expression. Use CType(value, TargetType).",
          fix: null
        });
      }
      const trimmed = line.trim();
      if (/^(Class|Enum|Structure|Interface|Module|Namespace)\s*$/i.test(trimmed)) {
        addDiagnostic({ start: offset, end: offset + line.length, severity: "error", message: `The '${trimmed}' keyword must be followed by an identifier.` });
      } else if (/^(Public|Private|Protected|Friend|Shared|MustInherit|NotInheritable|Partial|Overrides|Overridable|Dim|Const|If|Else|For|Each|While|Select|Case|Return|Throw|New|Function|Sub|Property|Event|End)\s*$/i.test(trimmed)) {
        addDiagnostic({ start: offset, end: offset + line.length, severity: "error", message: `The '${trimmed}' keyword is incomplete here.` });
      }
      if (/^End\s+(If|For|While|Select|Class|Structure|Enum|Interface|Module|Namespace|Function|Sub|Property)\b/i.test(trimmed) === false && /^(End)\s*$/i.test(trimmed)) {
        addDiagnostic({ start: offset, end: offset + line.length, severity: "error", message: "End must specify the Visual Basic block being closed." });
      }
      offset += line.length + 1;
    });
    renderDiagnostics();
    return diagnostics;
  }

  function renderDiagnostics() {
    diagnosticLayer.replaceChildren();
    const sorted = [...diagnostics].sort((a, b) => a.start - b.start);
    let cursor = 0;
    const appendHighlightedText = (container, start, end) => {
      const text = textarea.value.slice(start, end);
      const tokenPattern = /('[^\r\n]*|"(?:""|[^"])*"|\b[A-Za-z_]\w*\b)/g;
      let textCursor = 0;
      text.replace(tokenPattern, (token, offset) => {
        if (offset > textCursor) container.append(document.createTextNode(text.slice(textCursor, offset)));
        const symbolKind = symbolKinds.get(token.toLowerCase());
        const className = token.startsWith("'") ? "vb-comment" : token.startsWith('"') ? "vb-string" : symbolKind ? `vb-${symbolKind}` : VB_KEYWORDS.has(token.toLowerCase()) ? "vb-keyword" : "";
        if (className) {
          const span = document.createElement("span");
          span.className = className;
          span.textContent = token;
          container.append(span);
        } else {
          container.append(document.createTextNode(token));
        }
        textCursor = offset + token.length;
        return token;
      });
      if (textCursor < text.length) container.append(document.createTextNode(text.slice(textCursor)));
    };
    sorted.forEach((diagnostic) => {
      appendHighlightedText(diagnosticLayer, cursor, diagnostic.start);
      const marker = document.createElement("span");
      marker.className = `diagnostic-marker ${diagnostic.severity}`;
      appendHighlightedText(marker, diagnostic.start, diagnostic.end);
      marker.addEventListener("mouseenter", () => showDiagnostic(diagnostic));
      marker.addEventListener("mouseleave", () => { hideTimer = setTimeout(() => { diagnosticBox.hidden = true; }, 180); });
      diagnosticLayer.append(marker);
      cursor = diagnostic.end;
    });
    appendHighlightedText(diagnosticLayer, cursor, textarea.value.length);
  }

  function showDiagnostic(diagnostic) {
    clearTimeout(hideTimer);
    diagnosticBox.replaceChildren();
    const message = document.createElement("div");
    message.className = "intellisense-diagnostic-message";
    message.textContent = diagnostic.message;
    diagnosticBox.appendChild(message);
    if (diagnostic.fix) {
      const fixButton = document.createElement("button");
      fixButton.type = "button";
      fixButton.className = "intellisense-fix";
      fixButton.textContent = "Auto-fix";
      fixButton.addEventListener("mousedown", (event) => {
        event.preventDefault();
        textarea.setRangeText(diagnostic.fix.text, diagnostic.fix.start, diagnostic.fix.end, "end");
        diagnosticBox.hidden = true;
        checkGrammar();
        textarea.focus();
      });
      diagnosticBox.appendChild(fixButton);
    }
    position(diagnosticBox, caretPoint());
    diagnosticBox.hidden = false;
  }

  diagnosticBox.addEventListener("mouseenter", () => clearTimeout(hideTimer));
  diagnosticBox.addEventListener("mouseleave", () => { hideTimer = setTimeout(() => { diagnosticBox.hidden = true; }, 180); });

  textarea.addEventListener("input", (event) => {
    const closing = AUTO_CLOSE_DELIMITERS[event.data];
    if (event.inputType === "insertText" && closing && textarea.selectionStart === textarea.selectionEnd) {
      const caret = textarea.selectionStart;
      if (textarea.value[caret] !== closing) textarea.setRangeText(closing, caret, caret, "end");
      textarea.setSelectionRange(caret, caret);
    }
    checkGrammar();
    if (document.activeElement === textarea) showSuggestions();
  });
  textarea.addEventListener("scroll", () => {
    diagnosticLayer.scrollTop = textarea.scrollTop;
    diagnosticLayer.scrollLeft = textarea.scrollLeft;
  });
  textarea.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      menu.hidden = true;
      return;
    }
    if (event.key === "Enter" && isImportStatement()) {
      event.preventDefault();
      textarea.setRangeText("\n", textarea.selectionStart, textarea.selectionEnd, "end");
      menu.hidden = true;
      checkGrammar();
      return;
    }
    if (Object.values(AUTO_CLOSE_DELIMITERS).includes(event.key) && textarea.selectionStart === textarea.selectionEnd && textarea.value[textarea.selectionStart] === event.key) {
      event.preventDefault();
      textarea.setSelectionRange(textarea.selectionStart + 1, textarea.selectionStart + 1);
      return;
    }
    if (menu.hidden) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = (activeIndex + (event.key === "ArrowDown" ? 1 : activeItems.length - 1)) % activeItems.length;
      renderMenu(activeItems);
    } else if (event.key === "Enter" || event.key === "Tab") { event.preventDefault(); accept(); }
    else if (event.key === "Escape") menu.hidden = true;
  });
  textarea.addEventListener("blur", () => { setTimeout(() => { menu.hidden = true; }, 120); });

  checkGrammar();
  return { checkGrammar, getDiagnostics: () => [...diagnostics], destroy: () => root.replaceWith(textarea) };
}

if (typeof window !== "undefined") window.createIntellisense = createIntellisense;
