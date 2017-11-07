import <%= upperCamelCaseName %> from "../../js/src";

if (window.Weex) {
  Weex.install(<%= upperCamelCaseName %>);
} else if (window.weex) {
  weex.install(<%= upperCamelCaseName %>);
}