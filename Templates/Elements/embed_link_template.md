---
tags:
  - template
  - template/insert
  - embed
  - link

type: fragment
---

<%* 

app.commands.executeCommandById = function executeCommandById(id, t, options) {
  this.app.lastEvent = t || null;
  var n = this.findCommand(id);
  if (!n) return !1;
  try {
    (function(e) {
        console.log(options)
        e.checkCallback ? e.checkCallback(!1, options) : e.callback ? e.callback(options) : console.error("Command " + e + " did not provide a callback")
    })(n);
  } catch (id) {
    return (
      console.log("Command failed to execute: ", n.id), console.error(e), !1
    );
  }
  return !0;
}
this.addCommand({
  id: "open-sample-modal-simple",
  name: "Open sample modal (simple)",
  callback: (options: any) => {
    console.log(111, options);
    new SampleModal(this.app).open();
  },
});
app.commands.executeCommandById('app:open-command-palette')

_%>
