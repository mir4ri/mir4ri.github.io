webpackHotUpdate_N_E("pages/students",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./pages/students/students.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./pages/students/students.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".students_title__exNbu {\\n  margin-bottom: 18px;\\n}\\n\\n.students_subtitle__3i4uh {\\n  font-size: 1.17em;\\n  font-weight: 500;\\n  margin-bottom: 14px;\\n}\\n\\n.students_schedule__1CjmN {\\n  display: inline-block;\\n  background: rgba(16, 167, 255, 0.2);\\n  color: #10a7ff;\\n  text-decoration: none;\\n  padding: 0.5em 0.8em;\\n  border-radius: 4px;\\n  margin-bottom: 12px;\\n  -webkit-transition: background 0.2s ease-out;\\n  transition: background 0.2s ease-out;\\n}\\n.students_schedule__1CjmN:hover {\\n  background: rgba(0, 192, 255, 0.6);\\n  -webkit-transition: background 0.2s ease-in;\\n  transition: background 0.2s ease-in;\\n}\\n\\n.students_linkBtns__Hqc4E {\\n  display: grid;\\n  grid-template-columns: repeat(2, auto);\\n  grid-column-gap: 35px;\\n  -webkit-column-gap: 35px;\\n          column-gap: 35px;\\n  grid-row-gap: 18px;\\n  row-gap: 18px;\\n  text-align: center;\\n  margin-bottom: 30px;\\n}\\n\\n.students_list__3gbl6 {\\n  margin-bottom: 18px;\\n  list-style: none;\\n  padding: 0;\\n}\\n.students_list__3gbl6 .students_listItem__3Vsxe {\\n  margin-bottom: 5px;\\n  font-weight: 400;\\n}\\n\\n.students_link__1BBfD {\\n  text-decoration: none;\\n  color: #10a7ff;\\n}\\n.students_link__1BBfD:hover {\\n  text-decoration: underline;\\n}\\n\\n.students_mails__2ok06 {\\n  margin-bottom: 18px;\\n}\\n\\n.students_mail__2HBHJ {\\n  margin-bottom: 10px;\\n}\\n\\n.students_medium__bXzT3 {\\n  font-weight: 500;\\n}\\n\\n.students_highlight__1x7I0 {\\n  color: #00c0ff;\\n  text-decoration: none;\\n}\\n.students_highlight__1x7I0:hover {\\n  text-decoration: underline;\\n}\\n\\n@media screen and (max-width: 1200px) {\\n  .students_subtitle__3i4uh {\\n    font-size: 1.05em;\\n  }\\n\\n  .students_linkBtns__Hqc4E {\\n    grid-template-columns: repeat(1, auto);\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://students.module.scss\",\"webpack://../../colors.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,mBAAA;AADF;;AAIA;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;AADF;;AAIA;EACE,qBAAA;EACA,mCAAA;EACA,cCLK;EDML,qBAAA;EAEA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,4CAAA;EAAA,oCAAA;AAFF;AAGE;EACE,kCAAA;EACA,2CAAA;EAAA,mCAAA;AADJ;;AAKA;EACE,aAAA;EACA,sCAAA;EACA,qBAAA;EAAA,wBAAA;UAAA,gBAAA;EACA,kBAAA;EAAA,aAAA;EACA,kBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,mBAAA;EACA,gBAAA;EACA,UAAA;AAFF;AAGE;EACE,kBAAA;EACA,gBAAA;AADJ;;AAKA;EACE,qBAAA;EACA,cCvCK;ADqCP;AAGE;EACE,0BAAA;AADJ;;AAKA;EACE,mBAAA;AAFF;;AAKA;EACE,mBAAA;AAFF;;AAKA;EACE,gBAAA;AAFF;;AAKA;EACE,cCnEW;EDoEX,qBAAA;AAFF;AAGE;EACE,0BAAA;AADJ;;AAKA;EACE;IACE,iBAAA;EAFF;;EAKA;IACE,sCAAA;EAFF;AACF\",\"sourcesContent\":[\"@import \\\"../../colors.scss\\\";\\n\\n.title {\\n  margin-bottom: 18px;\\n}\\n\\n.subtitle {\\n  font-size: 1.17em;\\n  font-weight: 500;\\n  margin-bottom: 14px;\\n}\\n\\n.schedule {\\n  display: inline-block;\\n  background: rgba($link, 0.2);\\n  color: $link;\\n  text-decoration: none;\\n  // font-weight: 500;\\n  padding: 0.5em 0.8em;\\n  border-radius: 4px;\\n  margin-bottom: 12px;\\n  transition: background 0.2s ease-out;\\n  &:hover {\\n    background: rgba($light-blue, 0.6);\\n    transition: background 0.2s ease-in;\\n  }\\n}\\n\\n.linkBtns {\\n  display: grid;\\n  grid-template-columns: repeat(2, auto);\\n  column-gap: 35px;\\n  row-gap: 18px;\\n  text-align: center;\\n  margin-bottom: 30px;\\n}\\n\\n.list {\\n  margin-bottom: 18px;\\n  list-style: none;\\n  padding: 0;\\n  .listItem {\\n    margin-bottom: 5px;\\n    font-weight: 400;\\n  }\\n}\\n\\n.link {\\n  text-decoration: none;\\n  color: $link;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\n.mails {\\n  margin-bottom: 18px;\\n}\\n\\n.mail {\\n  margin-bottom: 10px;\\n}\\n\\n.medium {\\n  font-weight: 500;\\n}\\n\\n.highlight {\\n  color: $light-blue;\\n  text-decoration: none;\\n  &:hover {\\n    text-decoration: underline;\\n  }\\n}\\n\\n@media screen and (max-width: 1200px) {\\n  .subtitle {\\n    font-size: 1.05em;\\n  }\\n\\n  .linkBtns {\\n    grid-template-columns: repeat(1, auto);\\n  }\\n}\\n\",\"$border: #e6e6e6;\\n$light-blue: #00c0ff;\\n$dark-blue: #4274f1;\\n$background: #231311;\\n// $dark-blue: #5581f1;\\n$white: #fefefe;\\n$black: #141414;\\n$text: #242424;\\n$gray: #c4c4c4;\\n$radio: #19b5fe;\\n$link: #10a7ff;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"title\": \"students_title__exNbu\",\n\t\"subtitle\": \"students_subtitle__3i4uh\",\n\t\"schedule\": \"students_schedule__1CjmN\",\n\t\"linkBtns\": \"students_linkBtns__Hqc4E\",\n\t\"list\": \"students_list__3gbl6\",\n\t\"listItem\": \"students_listItem__3Vsxe\",\n\t\"link\": \"students_link__1BBfD\",\n\t\"mails\": \"students_mails__2ok06\",\n\t\"mail\": \"students_mail__2HBHJ\",\n\t\"medium\": \"students_medium__bXzT3\",\n\t\"highlight\": \"students_highlight__1x7I0\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudHMvc3R1ZGVudHMubW9kdWxlLnNjc3M/NzA0NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMkJBQTJCLHdCQUF3QixHQUFHLCtCQUErQixzQkFBc0IscUJBQXFCLHdCQUF3QixHQUFHLCtCQUErQiwwQkFBMEIsd0NBQXdDLG1CQUFtQiwwQkFBMEIseUJBQXlCLHVCQUF1Qix3QkFBd0IsaURBQWlELHlDQUF5QyxHQUFHLG1DQUFtQyx1Q0FBdUMsZ0RBQWdELHdDQUF3QyxHQUFHLCtCQUErQixrQkFBa0IsMkNBQTJDLDBCQUEwQiw2QkFBNkIsNkJBQTZCLHVCQUF1QixrQkFBa0IsdUJBQXVCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IscUJBQXFCLGVBQWUsR0FBRyxtREFBbUQsdUJBQXVCLHFCQUFxQixHQUFHLDJCQUEyQiwwQkFBMEIsbUJBQW1CLEdBQUcsK0JBQStCLCtCQUErQixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsNkJBQTZCLHFCQUFxQixHQUFHLGdDQUFnQyxtQkFBbUIsMEJBQTBCLEdBQUcsb0NBQW9DLCtCQUErQixHQUFHLDJDQUEyQywrQkFBK0Isd0JBQXdCLEtBQUssaUNBQWlDLDZDQUE2QyxLQUFLLEdBQUcsT0FBTyxtSEFBbUgsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyx1REFBdUQsWUFBWSx3QkFBd0IsR0FBRyxlQUFlLHNCQUFzQixxQkFBcUIsd0JBQXdCLEdBQUcsZUFBZSwwQkFBMEIsaUNBQWlDLGlCQUFpQiwwQkFBMEIsd0JBQXdCLHlCQUF5Qix1QkFBdUIsd0JBQXdCLHlDQUF5QyxhQUFhLHlDQUF5QywwQ0FBMEMsS0FBSyxHQUFHLGVBQWUsa0JBQWtCLDJDQUEyQyxxQkFBcUIsa0JBQWtCLHVCQUF1Qix3QkFBd0IsR0FBRyxXQUFXLHdCQUF3QixxQkFBcUIsZUFBZSxlQUFlLHlCQUF5Qix1QkFBdUIsS0FBSyxHQUFHLFdBQVcsMEJBQTBCLGlCQUFpQixhQUFhLGlDQUFpQyxLQUFLLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxXQUFXLHdCQUF3QixHQUFHLGFBQWEscUJBQXFCLEdBQUcsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsYUFBYSxpQ0FBaUMsS0FBSyxHQUFHLDJDQUEyQyxlQUFlLHdCQUF3QixLQUFLLGlCQUFpQiw2Q0FBNkMsS0FBSyxHQUFHLHNCQUFzQix1QkFBdUIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLGtCQUFrQixpQkFBaUIsaUJBQWlCLGtCQUFrQixpQkFBaUIscUJBQXFCO0FBQ3YvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnRzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0dWRlbnRzX3RpdGxlX19leE5idSB7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4uc3R1ZGVudHNfc3VidGl0bGVfXzNpNHVoIHtcXG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxufVxcblxcbi5zdHVkZW50c19zY2hlZHVsZV9fMUNqbU4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTY3LCAyNTUsIDAuMik7XFxuICBjb2xvcjogIzEwYTdmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2Utb3V0O1xcbn1cXG4uc3R1ZGVudHNfc2NoZWR1bGVfXzFDam1OOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTkyLCAyNTUsIDAuNik7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5zdHVkZW50c19saW5rQnRuc19fSHFjNEUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAzNXB4O1xcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAzNXB4O1xcbiAgICAgICAgICBjb2x1bW4tZ2FwOiAzNXB4O1xcbiAgZ3JpZC1yb3ctZ2FwOiAxOHB4O1xcbiAgcm93LWdhcDogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zdHVkZW50c19saXN0X18zZ2JsNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5zdHVkZW50c19saXN0X18zZ2JsNiAuc3R1ZGVudHNfbGlzdEl0ZW1fXzNWc3hlIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zdHVkZW50c19saW5rX18xQkJmRCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzEwYTdmZjtcXG59XFxuLnN0dWRlbnRzX2xpbmtfXzFCQmZEOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc3R1ZGVudHNfbWFpbHNfXzJvazA2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbi5zdHVkZW50c19tYWlsX18ySEJISiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc3R1ZGVudHNfbWVkaXVtX19iWHpUMyB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc3R1ZGVudHNfaGlnaGxpZ2h0X18xeDdJMCB7XFxuICBjb2xvcjogIzAwYzBmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnN0dWRlbnRzX2hpZ2hsaWdodF9fMXg3STA6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLnN0dWRlbnRzX3N1YnRpdGxlX18zaTR1aCB7XFxuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xcbiAgfVxcblxcbiAgLnN0dWRlbnRzX2xpbmtCdG5zX19IcWM0RSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIGF1dG8pO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R1ZGVudHMubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9jb2xvcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQ0xLO0VETUwscUJBQUE7RUFFQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUFBLG9DQUFBO0FBRkY7QUFHRTtFQUNFLGtDQUFBO0VBQ0EsMkNBQUE7RUFBQSxtQ0FBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFBQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFGRjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxjQ3ZDSztBRHFDUDtBQUdFO0VBQ0UsMEJBQUE7QUFESjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGNDbkVXO0VEb0VYLHFCQUFBO0FBRkY7QUFHRTtFQUNFLDBCQUFBO0FBREo7O0FBS0E7RUFDRTtJQUNFLGlCQUFBO0VBRkY7O0VBS0E7SUFDRSxzQ0FBQTtFQUZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vY29sb3JzLnNjc3NcXFwiO1xcblxcbi50aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjE3ZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLnNjaGVkdWxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6IHJnYmEoJGxpbmssIDAuMik7XFxuICBjb2xvcjogJGxpbms7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAvLyBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMC41ZW0gMC44ZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2Utb3V0O1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGxpZ2h0LWJsdWUsIDAuNik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluO1xcbiAgfVxcbn1cXG5cXG4ubGlua0J0bnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgY29sdW1uLWdhcDogMzVweDtcXG4gIHJvdy1nYXA6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICAubGlzdEl0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxufVxcblxcbi5saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAkbGluaztcXG4gICY6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXFxuLm1haWxzIHtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbi5tYWlsIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBjb2xvcjogJGxpZ2h0LWJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAmOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgLnN1YnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjA1ZW07XFxuICB9XFxuXFxuICAubGlua0J0bnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBhdXRvKTtcXG4gIH1cXG59XFxuXCIsXCIkYm9yZGVyOiAjZTZlNmU2O1xcbiRsaWdodC1ibHVlOiAjMDBjMGZmO1xcbiRkYXJrLWJsdWU6ICM0Mjc0ZjE7XFxuJGJhY2tncm91bmQ6ICMyMzEzMTE7XFxuLy8gJGRhcmstYmx1ZTogIzU1ODFmMTtcXG4kd2hpdGU6ICNmZWZlZmU7XFxuJGJsYWNrOiAjMTQxNDE0O1xcbiR0ZXh0OiAjMjQyNDI0O1xcbiRncmF5OiAjYzRjNGM0O1xcbiRyYWRpbzogIzE5YjVmZTtcXG4kbGluazogIzEwYTdmZjtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0aXRsZVwiOiBcInN0dWRlbnRzX3RpdGxlX19leE5idVwiLFxuXHRcInN1YnRpdGxlXCI6IFwic3R1ZGVudHNfc3VidGl0bGVfXzNpNHVoXCIsXG5cdFwic2NoZWR1bGVcIjogXCJzdHVkZW50c19zY2hlZHVsZV9fMUNqbU5cIixcblx0XCJsaW5rQnRuc1wiOiBcInN0dWRlbnRzX2xpbmtCdG5zX19IcWM0RVwiLFxuXHRcImxpc3RcIjogXCJzdHVkZW50c19saXN0X18zZ2JsNlwiLFxuXHRcImxpc3RJdGVtXCI6IFwic3R1ZGVudHNfbGlzdEl0ZW1fXzNWc3hlXCIsXG5cdFwibGlua1wiOiBcInN0dWRlbnRzX2xpbmtfXzFCQmZEXCIsXG5cdFwibWFpbHNcIjogXCJzdHVkZW50c19tYWlsc19fMm9rMDZcIixcblx0XCJtYWlsXCI6IFwic3R1ZGVudHNfbWFpbF9fMkhCSEpcIixcblx0XCJtZWRpdW1cIjogXCJzdHVkZW50c19tZWRpdW1fX2JYelQzXCIsXG5cdFwiaGlnaGxpZ2h0XCI6IFwic3R1ZGVudHNfaGlnaGxpZ2h0X18xeDdJMFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./pages/students/students.module.scss\n");

/***/ })

})